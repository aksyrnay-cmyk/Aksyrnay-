
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ERAS_MOCK, TOPICS_MOCK } from '../constants';

const Topics: React.FC = () => {
  const { eraId } = useParams<{ eraId: string }>();
  const navigate = useNavigate();
  
  const era = ERAS_MOCK.find(e => e.id === eraId);
  const topics = TOPICS_MOCK.filter(t => t.eraId === eraId);

  if (!era) return <div className="p-10 text-center">Дәуір табылмады</div>;

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark pb-10">
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between">
          <div 
            onClick={() => navigate('/eras')}
            className="flex items-center gap-1 text-primary cursor-pointer"
          >
            <span className="material-symbols-outlined">chevron_left</span>
            <span className="text-base font-medium">Дәуірлер</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10 font-display">{era.title}</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 text-primary hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-6">
        {/* Class Progress Component */}
        <div className="flex flex-col gap-3 p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl mb-6 shadow-sm">
          <div className="flex gap-6 justify-between items-end">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Оқу үлгерімі</p>
              <p className="text-2xl font-display font-bold">{era.progress}% Аяқталды</p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mb-1">
              {era.totalTopics - era.completedTopics} тақырып қалды
            </p>
          </div>
          <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-2.5 overflow-hidden">
            <div className="h-full rounded-full bg-primary" style={{ width: `${era.progress}%` }}></div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-display font-bold leading-tight tracking-tight">Тақырыпты таңдаңыз</h3>
          <span className="text-sm text-primary font-medium cursor-pointer">Барлығын көру</span>
        </div>

        <div className="flex flex-col gap-3">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              onClick={() => !topic.isLocked && navigate(`/quiz/${topic.id}`)}
              className={`flex items-center gap-4 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors border border-slate-100 dark:border-slate-800/50 rounded-xl px-4 py-3 min-h-[88px] justify-between group ${topic.isLocked ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shadow-sm group-hover:scale-105 transition-transform" 
                  style={{ backgroundImage: `url("${topic.image}")` }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className={`text-base font-bold leading-tight transition-colors ${topic.isLocked ? 'text-slate-500' : 'group-hover:text-primary'}`}>
                    {topic.title}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(3)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`material-symbols-outlined text-[16px] ${i < topic.stars ? 'text-amber-500 fill-amber-500' : 'text-slate-300 dark:text-slate-700'}`}
                        style={{ fontVariationSettings: i < topic.stars ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        star
                      </span>
                    ))}
                    <span className="text-slate-400 mx-1">•</span>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase">
                      {topic.isLocked ? 'Құлыпталған' : topic.highScore > 0 ? `${topic.highScore}% Үздік нәтиже` : 'Басталмаған'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                {topic.isLocked ? (
                   <span className="material-symbols-outlined text-slate-400/50">lock</span>
                ) : (
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-700">chevron_right</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">Құлыпты ашу үшін көбірек тақырыпты аяқтаңыз</p>
          <p className="text-base font-display font-bold text-primary mb-4">Классикалық дәуір шебері емтиханы</p>
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95">
            Соңғы тестіні жалғастыру
          </button>
        </div>
      </main>
    </div>
  );
};

export default Topics;
