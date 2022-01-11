export interface CurrentRule {
  id: number;
  title: string;
  description: string;
  lastRound: number;
  color?: string;
}

export interface Rule {
  title: string;
  description: string;
  hasColor: boolean;
  duration: number;
}
