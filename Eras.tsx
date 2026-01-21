
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ERAS_MOCK } from '../constants';
import BottomNav from '../components/BottomNav';

const Eras: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Тарихи дәуірлер');

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-slate-200 dark:border-slate-800">
        <div 
          onClick={() => navigate('/')}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 cursor-pointer"
        >
          <span className="material-symbols-outlined text-primary">account_circle</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">Дәуірді таңдаңыз</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-transparent text-slate-900 dark:text-white">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      {/* Segmented Control */}
      <div className="px-4 py-4">
        <div className="flex h-11 flex-1 items-center justify-center rounded-xl bg-slate-200 dark:bg-[#1e293b] p-1">
          {['Тарихи дәуірлер', 'Мектеп бағдарламасы'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold transition-all ${
                activeTab === tab 
                  ? 'bg-white dark:bg-background-dark shadow-sm text-primary' 
                  : 'text-slate-500 dark:text-[#92adc9]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        <div className="px-4 py-2">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Қолжетімді курстар</p>
        </div>

        {ERAS_MOCK.map((era) => (
          <div key={era.id} className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-xl shadow-md bg-white dark:bg-[#192633] border border-slate-100 dark:border-slate-800 overflow-hidden">
              <div 
                className="relative w-full h-40 bg-center bg-no-repeat bg-cover" 
                style={{ backgroundImage: `url("${era.image}")` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-white text-sm">{era.icon}</span>
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider">{era.period}</span>
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 p-4">
                <div className="flex justify-between items-start">
                  <p className="text-slate-900 dark:text-white text-xl font-bold font-display leading-tight">{era.title}</p>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${era.progress > 0 ? 'text-primary bg-primary/10' : 'text-slate-400 bg-slate-100 dark:bg-[#324d67]'}`}>
                    {era.progress}%
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 my-1">
                  <div className="rounded-full bg-slate-200 dark:bg-[#324d67] overflow-hidden">
                    <div className="h-1.5 rounded-full bg-primary" style={{ width: `${era.progress}%` }}></div>
                  </div>
                  <p className="text-slate-500 dark:text-[#92adc9] text-[10px] font-bold uppercase">
                    {era.completedTopics}/{era.totalTopics} тақырып аяқталды
                  </p>
                </div>
                <p className="text-slate-600 dark:text-[#92adc9] text-sm leading-relaxed mb-2">{era.description}</p>
                <button 
                  onClick={() => navigate(`/topics/${era.id}`)}
                  className={`flex w-full cursor-pointer items-center justify-center rounded-lg h-10 px-4 text-sm font-bold shadow-lg transition-opacity ${
                    era.progress === 0 
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white shadow-none' 
                      : 'bg-primary text-white shadow-primary/20 hover:opacity-90'
                  }`}
                >
                  {era.progress === 0 ? 'Бөлімді бастау' : 'Жалғастыру'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav active="explore" />
    </div>
  );
};

export default Eras;
