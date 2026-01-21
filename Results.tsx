
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total, answers, topic, topicId } = location.state || { score: 0, total: 0, answers: [], topic: 'Тест', topicId: '' };

  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
  const isMastered = accuracy >= 80;

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 flex flex-col">
      <div className="sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 border-b border-slate-200 dark:border-slate-800 justify-between">
        <div 
          onClick={() => navigate('/')}
          className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </div>
        <h2 className="text-lg font-bold flex-1 text-center pr-10 font-display">Тест нәтижесі</h2>
      </div>

      <main className="max-w-md mx-auto pb-40 px-4 w-full">
        {/* Hero Header */}
        <div className="flex flex-col items-center py-8">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${isMastered ? 'bg-primary/20' : 'bg-amber-500/20'}`}>
            <span 
              className={`material-symbols-outlined text-5xl ${isMastered ? 'text-primary' : 'text-amber-500'}`} 
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {isMastered ? 'emoji_events' : 'workspace_premium'}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-center pb-1 font-display">
            {isMastered ? 'Керемет!' : 'Көбірек дайындал!'}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-center">
            {isMastered ? `Сіз ${topic} тақырыбын толық меңгердіңіз.` : `Сіздің ${topic} бойынша біліміңіз жақсарып келеді.`}
          </p>
        </div>

        {/* Score Progress */}
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
          <div className="flex gap-6 justify-between items-end">
            <div className="flex flex-col">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Қорытынды ұпай</p>
              <p className="text-4xl font-bold text-primary font-display">{score}/{total}</p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal mb-1">{accuracy}% Дәлдік</p>
          </div>
          <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-3 overflow-hidden">
            <div className="h-full rounded-full bg-primary" style={{ width: `${accuracy}%` }}></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-500 text-xl">star</span>
              <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase">Ұпай</p>
            </div>
            <p className="tracking-tight text-2xl font-bold">+{score * 20} XP</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">timer</span>
              <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase">Уақыт</p>
            </div>
            <p className="tracking-tight text-2xl font-bold">01:45</p>
          </div>
        </div>

        {/* Question Review */}
        <div className="pt-6 pb-2">
          <h3 className="text-lg font-bold font-display">Сұрақтарға шолу</h3>
          <p className="text-sm text-slate-500">Нәтижені талдаңыз</p>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          {answers.map((ans: any, idx: number) => (
            <div 
              key={idx}
              className={`flex items-start gap-4 p-4 rounded-xl border ${ans.isCorrect ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}
            >
              <div className={`mt-1 flex size-6 shrink-0 items-center justify-center rounded-full text-white ${ans.isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                <span className="material-symbols-outlined text-sm">{ans.isCorrect ? 'check' : 'close'}</span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100 font-display">{ans.question}</p>
                <p className={`text-xs font-bold ${ans.isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400 line-through'}`}>
                  Сіздің жауабыңыз: {ans.selected}
                </p>
                {!ans.isCorrect && (
                  <p className="text-xs text-green-600 dark:text-green-400 font-bold">Дұрыс жауап: {ans.correct}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 border-t border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <button 
            onClick={() => navigate(`/quiz/${topicId}`)}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">refresh</span>
            Қайта тапсыру
          </button>
          <button 
            onClick={() => navigate('/eras')}
            className="w-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">list</span>
            Тақырыптар тізіміне
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
