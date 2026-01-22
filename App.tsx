
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { THEME_GROUPS } from './data/themes';
import { Theme, ThemeGroup, GameState } from './types';
import { speak } from './utils/speech';
import { generateBingoPDF } from './utils/pdf';

type PresentationMode = 'word' | 'sentence' | 'audio_only';

interface GameSettings {
  showWord: boolean;
  speechRate: number;
  repeatEnabled: boolean;
  presentationMode: PresentationMode;
}

const App: React.FC = () => {
  // Mode & Player State
  const [isPlayerMode, setIsPlayerMode] = useState(false);
  const [playerTheme, setPlayerTheme] = useState<Theme | null>(null);
  const [playerWords, setPlayerWords] = useState<string[]>([]);
  const [markedIndices, setMarkedIndices] = useState<Set<number>>(new Set());
  const [showCelebration, setShowCelebration] = useState(false);

  // Search & Navigation State
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchResultsView, setIsSearchResultsView] = useState(false);
  const [foundThemes, setFoundThemes] = useState<Theme[]>([]);
  const [visitedThemeIds, setVisitedThemeIds] = useState<Set<string>>(new Set());

  // Teacher/Game State
  const [currentGroup, setCurrentGroup] = useState<ThemeGroup | null>(null);
  const [currentTheme, setCurrentTheme] = useState<Theme | null>(null);
  const [gridSize, setGridSize] = useState<number>(4);
  const [isDrawing, setIsDrawing] = useState(false);
  const [game, setGame] = useState<GameState>({
    available: [],
    called: [],
    current: null
  });
  const [settings, setSettings] = useState<GameSettings>({
    showWord: true,
    speechRate: 0.75,
    repeatEnabled: false,
    presentationMode: 'word'
  });
  
  const [showQRModal, setShowQRModal] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  // Load visited themes and handle URL parameters
  useEffect(() => {
    const saved = localStorage.getItem('visitedBingoThemes');
    if (saved) {
      try {
        setVisitedThemeIds(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error("Failed to parse visited themes", e);
      }
    }

    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    const themeId = params.get('theme');
    const gridParam = params.get('grid');

    if (mode === 'player' && themeId) {
      const gSize = gridParam ? parseInt(gridParam, 10) : 4;
      let foundTheme: Theme | null = null;
      for (const group of THEME_GROUPS) {
        const t = group.themes.find(th => th.id === themeId);
        if (t) { foundTheme = t; break; }
      }

      if (foundTheme) {
        setIsPlayerMode(true);
        setPlayerTheme(foundTheme);
        const shuffled = [...foundTheme.words]
          .sort(() => Math.random() - 0.5)
          .slice(0, gSize * gSize)
          .map(w => w.split('|')[0]);
        setPlayerWords(shuffled);
        setGridSize(gSize);
      }
    }
  }, []);

  // QR Code Generation
  useEffect(() => {
    if (showQRModal && qrRef.current && currentTheme) {
      qrRef.current.innerHTML = "";
      const baseUrl = window.location.origin + window.location.pathname;
      const playerUrl = `${baseUrl}?mode=player&theme=${currentTheme.id}&grid=${gridSize}`;
      // @ts-ignore
      new QRCode(qrRef.current, {
        text: playerUrl,
        width: 200,
        height: 200,
        colorDark: "#1e40af",
        colorLight: "#ffffff",
        correctLevel: 1 
      });
    }
  }, [showQRModal, currentTheme, gridSize]);

  // Handlers
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      setIsSearchResultsView(false);
      return;
    }

    const results: Theme[] = [];
    THEME_GROUPS.forEach(group => {
      group.themes.forEach(theme => {
        const inTitle = theme.title.toLowerCase().includes(q);
        const inWords = theme.words.some(w => w.toLowerCase().includes(q));
        if (inTitle || inWords) results.push(theme);
      });
    });

    setFoundThemes(results);
    setIsSearchResultsView(true);
    setCurrentGroup(null);
    setCurrentTheme(null);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchResultsView(false);
  };

  const selectTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    setVisitedThemeIds(prev => {
      const next = new Set(prev);
      next.add(theme.id);
      localStorage.setItem('visitedBingoThemes', JSON.stringify(Array.from(next)));
      return next;
    });
    setGame({
      available: [...theme.words],
      called: [],
      current: null
    });
  };

  const drawWord = useCallback(() => {
    if (game.available.length === 0) {
      alert('Alle woorden uit dit thema zijn al aan de beurt geweest!');
      return;
    }
    setIsDrawing(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * game.available.length);
      const word = game.available[randomIndex];
      setGame(prev => ({
        available: prev.available.filter((_, i) => i !== randomIndex),
        called: [word, ...prev.called],
        current: word
      }));
      setIsDrawing(false);
      
      const [mainWord] = word.split('|');
      speak(mainWord, settings.speechRate);
    }, 600);
  }, [game.available, settings.speechRate]);

  const resetGame = () => {
    if (!currentTheme) return;
    setGame({
      available: [...currentTheme.words],
      called: [],
      current: null
    });
  };

  // Components
  const CelebrationOverlay = () => {
    const emojis = ['🎉', '✨', '🏆', '⭐', '🎈', '🎊', '🥳'];
    const confetti = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 25 + 20}px`,
      duration: `${Math.random() * 2 + 3}s`
    }));

    return (
      <div className="fixed inset-0 z-[100] celebration-bg flex items-center justify-center p-6 text-white overflow-hidden animate-in fade-in duration-500">
        {confetti.map(c => (
          <div key={c.id} className="confetti-piece" style={{ left: c.left, animationDelay: c.delay, fontSize: c.size, animationDuration: c.duration }}>{c.emoji}</div>
        ))}
        <div className="text-center relative z-[110] animate-in zoom-in slide-in-from-bottom-12 duration-700">
          <div className="text-9xl mb-8 animate-victory inline-block drop-shadow-2xl">🏆</div>
          <h2 className="text-7xl md:text-9xl font-black mb-6 drop-shadow-2xl tracking-tighter animate-victory">BINGO!</h2>
          <p className="text-2xl md:text-3xl font-bold opacity-90 mb-12 max-w-md mx-auto leading-tight">Gefeliciteerd! Je hebt alles goed gehoord.</p>
          <button onClick={() => setShowCelebration(false)} className="bg-white text-orange-600 hover:scale-105 px-12 py-5 rounded-full font-black text-2xl shadow-2xl transition-all active:scale-95 border-b-4 border-slate-200">VERDER SPELEN</button>
        </div>
      </div>
    );
  };

  const QRModal = () => (
    <div className="fixed inset-0 z-[150] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setShowQRModal(false)}>
      <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl animate-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-black text-blue-900 leading-tight">Deel deze Bingo met je klas</h2>
          <button onClick={() => setShowQRModal(false)} className="text-slate-400 hover:text-red-500 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl flex justify-center mb-6">
          <div ref={qrRef}></div>
        </div>
        <p className="text-center text-slate-500 font-medium text-sm mb-4">Laat studenten deze code scannen om hun eigen bingokaart op hun telefoon te openen.</p>
        <button onClick={() => setShowQRModal(false)} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all">Begrepen!</button>
      </div>
    </div>
  );

  // VIEW: Player Mode
  if (isPlayerMode && playerTheme) {
    return (
      <div className="max-w-md mx-auto p-4 flex flex-col min-h-screen bg-slate-50 shadow-2xl relative overflow-hidden">
        {showCelebration && <CelebrationOverlay />}
        <header className="text-center py-8">
          <div className="text-5xl mb-3 animate-bounce">{playerTheme.emoji}</div>
          <h1 className="text-2xl font-black text-blue-800 uppercase tracking-tight">{playerTheme.title}</h1>
          <p className="text-slate-400 font-medium text-sm mt-1">Luister en tik op het woord</p>
        </header>
        <div className="grid gap-3 mb-8 flex-grow" style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
          {playerWords.map((word, idx) => (
            <button key={idx} onClick={() => setMarkedIndices(prev => {
              const next = new Set(prev);
              if (next.has(idx)) next.delete(idx); else next.add(idx);
              return next;
            })}
            className={`aspect-square p-2 font-bold rounded-2xl border-4 transition-all duration-200 flex items-center justify-center text-center shadow-sm
              ${gridSize === 5 ? 'text-[9px]' : gridSize === 3 ? 'text-sm' : 'text-xs'}
              ${markedIndices.has(idx) ? 'bg-orange-500 border-orange-600 text-white scale-90 shadow-inner rotate-1' : 'bg-white border-white text-slate-700 hover:border-blue-200 active:scale-95'}`}>
              {word}
            </button>
          ))}
        </div>
        <div className="pb-10 px-2">
          <button onClick={() => setShowCelebration(true)} className="group relative w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-3xl shadow-xl transition-all active:scale-95 text-2xl tracking-widest overflow-hidden border-b-8 border-blue-800">
            <span className="relative z-10 flex items-center justify-center gap-3">BINGO! 🎉</span>
          </button>
        </div>
      </div>
    );
  }

  // VIEW: Teacher / Dashboard
  return (
    <div className="min-h-screen bg-blue-50/50">
      {showQRModal && <QRModal />}
      
      {/* Home / Search Header */}
      {!currentTheme && (
        <div className="max-w-5xl mx-auto px-4 py-12">
          <header className="text-center mb-16 animate-in fade-in duration-700">
            <h1 className="text-7xl font-black text-orange-600 mb-6 tracking-tight">LuisterBingo<span className="text-blue-600">.nl</span></h1>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium">De interactieve bingo voor NT2-onderwijs.</p>
          </header>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-20 relative group">
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Zoek een thema of woord..." className="w-full bg-white text-slate-800 text-xl py-6 px-10 rounded-full shadow-2xl border-2 border-transparent focus:border-blue-400 focus:outline-none transition-all pr-20" />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </form>

          {/* Views: Search Results, Group View, or Main Categories */}
          {isSearchResultsView ? (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-slate-800">Resultaten voor "{searchQuery}"</h2>
                <button onClick={clearSearch} className="text-blue-600 font-bold hover:underline">Terug naar overzicht</button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {foundThemes.map(t => (
                  <button key={t.id} onClick={() => selectTheme(t)} className="bg-white p-6 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all flex items-center gap-5 text-left border-b-4 border-slate-100">
                    <div className="text-5xl">{t.emoji}</div>
                    <div><h3 className="font-bold text-lg text-slate-800">{t.title}</h3><p className="text-xs text-slate-400 uppercase tracking-widest">{t.words.length} woorden</p></div>
                  </button>
                ))}
              </div>
            </div>
          ) : currentGroup ? (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
               <button onClick={() => setCurrentGroup(null)} className="mb-10 flex items-center gap-2 text-blue-600 font-bold hover:-translate-x-1 transition-transform">← Terug naar home</button>
               <div className="flex items-center gap-6 mb-12">
                 <div className="text-7xl bg-white p-6 rounded-3xl shadow-xl">{currentGroup.emoji}</div>
                 <div><h2 className="text-4xl font-black text-slate-900">{currentGroup.title}</h2><p className="text-xl text-slate-500">{currentGroup.description}</p></div>
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                 {currentGroup.themes.map(t => (
                   <button key={t.id} onClick={() => selectTheme(t)} className="bg-white p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all text-left group">
                     <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{t.emoji}</div>
                     <h3 className="font-bold text-xl text-slate-800 mb-2">{t.title}</h3>
                     <p className="text-sm text-slate-500 line-clamp-2">{t.description}</p>
                   </button>
                 ))}
               </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {THEME_GROUPS.map(g => (
                <button key={g.id} onClick={() => setCurrentGroup(g)} className="group bg-white rounded-[2.5rem] p-10 shadow-2xl hover:shadow-orange-200/50 transition-all text-center border-b-8 border-slate-100 hover:border-orange-500">
                  <div className="text-8xl mb-8 transform group-hover:scale-110 transition-transform">{g.emoji}</div>
                  <h2 className="text-2xl font-black text-slate-900 mb-3">{g.title}</h2>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">{g.description}</p>
                  <div className="py-3 bg-blue-50 text-blue-600 rounded-xl font-bold group-hover:bg-orange-600 group-hover:text-white transition-colors">Bekijk thema's</div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* VIEW: Active Game Screen */}
      {currentTheme && (
        <div className="max-w-6xl mx-auto px-4 py-8 animate-in fade-in duration-500">
          <nav className="flex items-center gap-3 mb-10 text-sm font-bold text-slate-400">
            <button onClick={() => { setCurrentTheme(null); setCurrentGroup(null); clearSearch(); }} className="hover:text-blue-600">Home</button>
            <span>/</span>
            <button onClick={() => setCurrentTheme(null)} className="hover:text-blue-600">Thema</button>
            <span>/</span>
            <span className="text-orange-600">{currentTheme.title}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-[2rem] p-8 shadow-xl border-b-4 border-slate-100">
                 <h3 className="text-xs font-black text-slate-300 uppercase tracking-widest mb-6">Instellingen</h3>
                 <div className="space-y-8">
                   <div>
                     <p className="text-sm font-bold text-slate-700 mb-4">Tekst op scherm</p>
                     <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                       {[true, false].map(v => (
                         <button key={String(v)} onClick={() => setSettings(s => ({...s, showWord: v}))} className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${settings.showWord === v ? 'bg-white text-blue-600 shadow-md' : 'text-slate-400'}`}>{v ? 'Ja' : 'Nee'}</button>
                       ))}
                     </div>
                   </div>
                   <div>
                     <p className="text-sm font-bold text-slate-700 mb-4">Spraaksnelheid</p>
                     <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                       {[0.5, 0.75, 1.0].map(v => (
                         <button key={v} onClick={() => setSettings(s => ({...s, speechRate: v}))} className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${settings.speechRate === v ? 'bg-white text-blue-600 shadow-md' : 'text-slate-400'}`}>{v * 100}%</button>
                       ))}
                     </div>
                   </div>
                   <div>
                     <p className="text-sm font-bold text-slate-700 mb-4">Kaartformaat (voor PDF)</p>
                     <div className="flex gap-3">
                       {[3, 4, 5].map(v => (
                         <button key={v} onClick={() => setGridSize(v)} className={`w-12 h-12 rounded-xl font-bold transition-all border-2 ${gridSize === v ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-100 text-slate-400'}`}>{v}x{v}</button>
                       ))}
                     </div>
                   </div>
                 </div>
              </div>
              <button onClick={() => generateBingoPDF(currentTheme.title, currentTheme.words, gridSize)} className="w-full bg-white text-slate-700 font-bold py-6 px-8 rounded-2xl shadow-lg border-2 border-slate-100 flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/></svg>
                Download PDF Kaarten
              </button>
            </div>

            <div className="lg:col-span-8 bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col min-h-[600px] border-b-8 border-slate-100">
               <div className="absolute top-0 right-0 p-12 text-blue-50 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4"><div className="text-[300px] font-black">{currentTheme.emoji}</div></div>
               <div className="relative z-10 flex justify-between items-center mb-12">
                 <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Bingo Machine Active</span>
                 <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-black text-xs">{currentTheme.emoji} {currentTheme.title}</div>
               </div>

               <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center">
                 {isDrawing ? (
                   <div className="animate-pulse flex flex-col items-center gap-6">
                     <div className="flex gap-3">
                       <div className="w-5 h-5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                       <div className="w-5 h-5 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                       <div className="w-5 h-5 bg-orange-700 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                     </div>
                     <p className="text-2xl font-black text-slate-400 italic">Eens even kijken...</p>
                   </div>
                 ) : game.current ? (
                   <div key={game.current} className="w-full">
                     {settings.showWord ? (
                       <h2 className="text-8xl md:text-9xl font-black text-blue-700 mb-8 drop-shadow-sm tracking-tighter">
                         {game.current.split('|')[0]}
                       </h2>
                     ) : (
                       <div className="text-5xl font-black text-slate-200 mb-10 bg-slate-50/50 py-24 rounded-[3rem] border-4 border-dashed border-slate-100">Luister goed!</div>
                     )}
                     <button onClick={() => speak(game.current!.split('|')[0], settings.speechRate)} className="bg-blue-50 text-blue-600 font-black px-10 py-5 rounded-full hover:bg-blue-100 transition-all flex items-center gap-3 mx-auto shadow-sm active:scale-95">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                       Herhaal Geluid
                     </button>
                   </div>
                 ) : (
                   <p className="text-4xl font-black text-slate-200 italic opacity-40">Klaar voor de start?</p>
                 )}
               </div>

               <div className="relative z-10 mt-16 space-y-6">
                 <div className="flex flex-col sm:flex-row gap-4">
                   <button onClick={drawWord} disabled={game.available.length === 0 || isDrawing} className="flex-grow bg-orange-600 hover:bg-orange-700 text-white text-3xl font-black py-8 rounded-[2rem] shadow-xl shadow-orange-200 transition-all active:scale-95 disabled:bg-slate-200 disabled:shadow-none">
                     {game.available.length === 0 ? 'Klaar!' : isDrawing ? 'Moment...' : 'Volgend Woord'}
                   </button>
                   <button onClick={resetGame} className="bg-slate-100 text-slate-500 font-bold px-12 py-8 rounded-[2rem] hover:bg-slate-200 transition-all">Reset</button>
                 </div>
                 <button onClick={() => setShowQRModal(true)} className="w-full bg-blue-50/50 text-blue-600 font-black py-5 rounded-2xl border-2 border-blue-100 hover:bg-blue-100 transition-all">
                   Deel QR code
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info */}
      {!currentTheme && (
        <section className="bg-white border-t-2 border-slate-100 py-24 mt-20 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Breng je lessen tot leven.</h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">LuisterBingo is de ultieme tool voor NT2-docenten. Maak woorden tastbaar, oefen uitspraak en zorg voor een onvergetelijke leservaring.</p>
            <a href="https://forms.gle/axukf8BFy8DSdZ8J8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-slate-900 text-white text-xl font-bold py-6 px-14 rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
              Stuur je idee in
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default App;
