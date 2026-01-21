
import { Era, Topic, UserStats } from './types';

export const USER_MOCK: UserStats = {
  name: "Александрия С.",
  level: 14,
  totalPoints: 1250,
  correctAnswers: 452,
  badgesEarned: 12,
  weeklyRank: 5,
  dayStreak: 7
};

export const ERAS_MOCK: Era[] = [
  {
    id: 'ancient',
    title: 'Ежелгі дүние',
    description: 'Месопотамиядан Римге дейінгі өркениеттердің бесігін зерттеңіз.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlJNSgG6_6J8o1xPzUgrrnyZKIEqtzw9iKnpcG9gWwpzHk6mWlvYuvGCuTjd2_QRQq8H75qgPEWzdf9gCXfKw-CmzTKMJrTzWM_TCf83EAFcXj5Dt0vZMfyFeNzLBe/ancient_world',
    period: 'б.з.д. 3500 ж. - б.з. 500 ж.',
    progress: 70,
    totalTopics: 10,
    completedTopics: 7,
    icon: 'account_balance'
  },
  {
    id: 'middle-ages',
    title: 'Орта ғасырлар',
    description: 'Римнің құлауынан бастап Қайта өрлеу дәуірі мен рыцарьлар заманына дейін.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv9Yg15vvhe0DKDSLR257Y7BHiSmkLGUFTxCsDfIXwH6H7xgBoe5IsRU2c/middle_ages',
    period: '500 - 1500 жж.',
    progress: 16,
    totalTopics: 12,
    completedTopics: 2,
    icon: 'fort'
  },
  {
    id: 'modern',
    title: 'Жаңа заман',
    description: 'Ғылыми революция, отаршылдық және индустриялық дәуір.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLd9q4fdSSMpbGP5Alpmv9unxlexhfYW910po5bApm_u3qsHynDXNDZuWWyN8s/modern_era',
    period: '1500 - 1900 жж.',
    progress: 0,
    totalTopics: 15,
    completedTopics: 0,
    icon: 'factory'
  }
];

export const TOPICS_MOCK: Topic[] = [
  {
    id: 'egypt',
    eraId: 'ancient',
    title: 'Ежелгі Мысыр',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKmx4J4cwgs_e9H6LZZCPqEFfGVb1MIO3zMiAWo-wCKgRVt7YwhV1cSgf8U/egypt',
    highScore: 95,
    stars: 3,
    isLocked: false,
    questions: [
      {
        id: 'q1',
        text: 'Жоғарғы және Төменгі Мысырды біріктіріп, алғашқы перғауын болған кім?',
        options: ['Хеопс', 'Нармер', 'Рамзес II', 'Тутанхамон'],
        correctAnswer: 1,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC03_79ulnnJz4xzhD2V3RG4J29KjHtB-BbQ9-KMc1jtdXWOO1dEmHQIxqL8j/narmer'
      }
    ]
  },
  {
    id: 'mesopotamia',
    eraId: 'ancient',
    title: 'Месопотамия',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_6TIoYNM6rRHSHsWlQrshHyJG3juPzsiYc88_86zBYqQnBT1dK8SePR9gP3/mesopotamia',
    highScore: 78,
    stars: 2,
    isLocked: false,
    questions: []
  },
  {
    id: 'rome',
    eraId: 'ancient',
    title: 'Рим империясы',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3zgVlf6BwYCNr-WqYUPMl20yNJgbSs1xAI2PbwX_3eVS0SON5NOxUCalKggQ/rome',
    highScore: 60,
    stars: 1,
    isLocked: false,
    questions: []
  }
];
