
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  image?: string;
}

export interface Topic {
  id: string;
  eraId: string;
  title: string;
  image: string;
  highScore: number;
  stars: number;
  isLocked: boolean;
  questions: Question[];
}

export interface Era {
  id: string;
  title: string;
  description: string;
  image: string;
  period: string;
  progress: number;
  totalTopics: number;
  completedTopics: number;
  icon: string;
}

export interface UserStats {
  name: string;
  level: number;
  totalPoints: number;
  correctAnswers: number;
  badgesEarned: number;
  weeklyRank: number;
  dayStreak: number;
}
