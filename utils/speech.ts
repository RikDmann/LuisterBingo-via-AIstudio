
export const speak = (text: string, rate: number = 1.0, voice?: SpeechSynthesisVoice) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech Synthesis wordt niet ondersteund in deze browser.');
    return;
  }

  // Stop lopende spraak om overlapping te voorkomen
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'nl-NL';
  utterance.rate = rate;
  utterance.pitch = 1.0;

  if (voice) {
    utterance.voice = voice;
  } else {
    // Fallback logica als er geen specifieke stem is meegegeven
    const voices = window.speechSynthesis.getVoices();
    const dutchVoices = voices.filter(v => v.lang.startsWith('nl'));
    if (dutchVoices.length > 0) {
      const bestVoice = 
        dutchVoices.find(v => v.name.includes('Google')) ||
        dutchVoices.find(v => v.name.includes('Enhanced')) ||
        dutchVoices.find(v => v.name.includes('Premium')) ||
        dutchVoices[0];
      utterance.voice = bestVoice;
    }
  }

  window.speechSynthesis.speak(utterance);
};

// Zorg dat de stemmen geladen worden zodra de browser ze beschikbaar stelt
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
}
