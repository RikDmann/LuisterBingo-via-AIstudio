
export interface Theme {
  id: string;
  title: string;
  emoji: string;
  description: string;
  words: string[];
}

export interface ThemeGroup {
  id: string;
  title: string;
  emoji: string;
  description: string;
  themes: Theme[];
}

export interface GameState {
  available: string[];
  called: string[];
  current: string | null;
}
