
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_MOCK } from '../constants';
import BottomNav from '../components/BottomNav';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Top Navigation Bar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-background-light dark:bg-background-dark">
        <div className="flex size-12 shrink-0 items-center">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlxqtyYlDOZvogFlOSHtrC0nxxq6r9zPJN-I5S4i4pZ76FmaQDQGYnUHra-Y28hpYchqePHpdyJ_dWyTSr5FmLFnH-gCW8QGwBr2ioGqmC2gsUN2jEEbOG6cM50lfkaG_HUkk6Zi8WGNRXjRJ312O-0HnLdz0FSh93bklR0JFov5SCeoyWUouXCd8666GcfhVIlSnUr-oYTpP0f-5q47ueZGsAVtvTR4HAFbtwXYfC3718FIBAEG0b4rWLK5tqKvTXg2xYHlhpPds")' }}
          ></div>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 ml-2 font-display">Дүниежүзі тарихы</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 text-slate-900 dark:text-white">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      {/* Profile Header */}
      <div className="px-4 py-2">
        <div className="flex w-full flex-col gap-4 bg-white/5 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
          <div className="flex gap-4">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24 border-4 border-primary/20" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHkv3IvFv11--6jj0QpWdshxfviYk92vApV8cDlEFHBLbXG02RToFBXsK5hiZ1bAT6zDNQVxRk65Ab-0Dk9BSGalip3heWdrrf33x2IV0Lt72eNwwqvsc0S7_9ZUVudTtVW_nF02zyEFJiQZ8JVpRKYUjKkNBMB2aEVEChn67Ldt8r4UxKFbxMriGfx3RZhggA8giuA1IT4cS-w3iZayPJPKYyFF-mfPTbmiIX9BdR_jDp1BQJrdoMgqm2VRTTvPuM44yib1wOaYg")' }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight font-display">{USER_MOCK.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded uppercase">{USER_MOCK.level} Деңгей</span>
                <p className="text-slate-500 dark:text-[#92adc9] text-sm font-medium">{USER_MOCK.totalPoints.toLocaleString()} Жалпы ұпай</p>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-3">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Chips */}
      <div className="px-4 pt-4">
        <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-3">Белсенді дәуірді таңдаңыз</h3>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          <button 
            onClick={() => navigate('/eras')}
            className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4"
          >
            <p className="text-sm font-medium">Барлық тақырыптар</p>
            <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#233648] text-slate-900 dark:text-white px-4 border border-slate-200 dark:border-transparent shadow-sm">
            <p className="text-sm font-medium">Қайта өрлеу</p>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-[#233648] text-slate-900 dark:text-white px-4 border border-slate-200 dark:border-transparent shadow-sm">
            <p className="text-sm font-medium">Ежелгі Рим</p>
          </button>
        </div>
      </div>

      {/* Main CTA */}
      <div className="px-4 py-6">
        <button 
          onClick={() => navigate('/eras')}
          className="relative group flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-20 px-5 bg-primary text-white text-xl font-bold leading-normal shadow-lg shadow-primary/30"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <span className="flex items-center gap-3 font-display relative z-10">
            <span className="material-symbols-outlined text-3xl">play_circle</span>
            Жаңа тестті бастау
          </span>
        </button>
      </div>

      {/* Stats Section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold font-display">Академиялық статистика</h3>
          <button className="text-primary text-sm font-bold">Тарихты көру</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatCard icon="check_circle" color="text-green-500" bgColor="bg-green-500/10" value={USER_MOCK.correctAnswers} label="Дұрыс жауаптар" />
          <StatCard icon="workspace_premium" color="text-amber-500" bgColor="bg-amber-500/10" value={USER_MOCK.badgesEarned} label="Жинаған белгілер" />
          <StatCard icon="leaderboard" color="text-primary" bgColor="bg-primary/10" value={`#${USER_MOCK.weeklyRank}`} label="Апталық рейтинг" />
          <StatCard icon="local_fire_department" color="text-red-500" bgColor="bg-red-500/10" value={USER_MOCK.dayStreak} label="Күнделікті белсенділік" />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-4 mt-4">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-4 font-display">Соңғы оқылған</h3>
        <div className="relative overflow-hidden rounded-xl h-24 flex items-center p-4 border border-slate-200 dark:border-slate-800">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB10TICfqUWVTl5Odf3vmaxBzacZrkLbdNQb8wbNNvjTPkSU3f79NKutFOqAagfpHiNPCNhkxPg4s3Nm0I-NqRlyughN0KPbW0VtniJ2lYYkN1Xbt8gvWpdup4mcaCgFIUW4RyL_tpB1MEoRBINUU4t3tzLCdsSp4eYXzsb58ET7g0Wa3gedKi0s4XIqQ6QaPdI6SLfK5ukqOqsClIGHLQ2EGnafferzUVpPPu5GtQ_R1KtnciZFEPFRq4qWVrCRjAO5bGwc11AZSw")' }}
          ></div>
          <div className="relative z-10 flex items-center justify-between w-full">
            <div>
              <p className="text-slate-900 dark:text-white font-bold text-lg font-display">Қайта өрлеу дәуірі</p>
              <p className="text-slate-500 dark:text-[#92adc9] text-sm">Соңғы рет 2 сағат бұрын</p>
            </div>
            <button className="bg-white/80 dark:bg-white/10 backdrop-blur text-slate-900 dark:text-white p-2 rounded-full">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
};

const StatCard: React.FC<{ icon: string, color: string, bgColor: string, value: string | number, label: string }> = ({ icon, color, bgColor, value, label }) => (
  <div className="bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
    <div className={`${bgColor} p-2 rounded-full mb-2`}>
      <span className="material-symbols-outlined" style={{ color }}>{icon}</span>
    </div>
    <p className="text-2xl font-bold dark:text-white font-display">{value}</p>
    <p className="text-slate-500 dark:text-[#92adc9] text-[10px] font-bold uppercase tracking-tighter">{label}</p>
  </div>
);

export default Home;
