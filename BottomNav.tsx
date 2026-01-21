
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  active: 'home' | 'explore' | 'ranking' | 'library' | 'options';
}

const BottomNav: React.FC<BottomNavProps> = ({ active }) => {
  const navigate = useNavigate();

  const items = [
    { id: 'home', icon: 'home', label: 'Басты бет', path: '/' },
    { id: 'explore', icon: 'explore', label: 'Зерттеу', path: '/eras' },
    { id: 'ranking', icon: 'leaderboard', label: 'Рейтинг', path: '/' },
    { id: 'library', icon: 'auto_stories', label: 'Кітапхана', path: '/' },
    { id: 'options', icon: 'settings', label: 'Баптаулар', path: '/' },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/95 dark:bg-[#111a22]/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50 h-20 safe-area-bottom">
      {items.map((item) => {
        const isActive = active === item.id;
        
        if (item.id === 'ranking') {
           // Middle play button
           return (
             <div key="play" className="relative -top-8 size-14 rounded-full bg-primary shadow-xl shadow-primary/40 flex items-center justify-center border-4 border-background-light dark:border-background-dark cursor-pointer active:scale-95 transition-transform" onClick={() => navigate('/eras')}>
               <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
             </div>
           );
        }

        return (
          <button 
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
          >
            <span className={`material-symbols-outlined text-[28px] ${isActive ? 'fill-primary' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
