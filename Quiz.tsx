
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TOPICS_MOCK } from '../constants';

const Quiz: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const topic = TOPICS_MOCK.find(t => t.id === topicId);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);

  useEffect(() => {
    if (timeLeft <= 0 || isAnswered) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isAnswered]);

  if (!topic || topic.questions.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold mb-4">Бұл тақырып бойынша әзірге сұрақтар жоқ.</h2>
        <button onClick={() => navigate(-1)} className="bg-primary text-white px-4 py-2 rounded-lg">Артқа қайту</button>
      </div>
    );
  }

  const currentQuestion = topic.questions[currentIdx];
  const progress = ((currentIdx + 1) / topic.questions.length) * 100;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    
    const isCorrect = idx === currentQuestion.correctAnswer;
    if (isCorrect) setScore(s => s + 1);

    setAnswers(prev => [...prev, {
      question: currentQuestion.text,
      selected: currentQuestion.options[idx],
      correct: currentQuestion.options[currentQuestion.correctAnswer],
      isCorrect
    }]);
  };

  const nextQuestion = () => {
    if (currentIdx < topic.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(45);
    } else {
      navigate('/results', { state: { score, total: topic.questions.length, answers, topic: topic.title, topicId: topic.id } });
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col max-w-[430px] mx-auto overflow-hidden shadow-2xl bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      {/* Header */}
      <header className="flex items-center p-4 pb-2 justify-between safe-top">
        <div 
          onClick={() => navigate('/eras')}
          className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer"
        >
          <span className="material-symbols-outlined">close</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold flex-1 text-center font-display">{topic.title}</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-12 text-primary">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="flex flex-col gap-2 p-4 pt-2">
        <div className="flex gap-6 justify-between items-end">
          <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Тест барысы</p>
          <p className="text-primary text-sm font-bold">{currentIdx + 1} / {topic.questions.length}</p>
        </div>
        <div className="rounded-full bg-slate-200 dark:bg-[#233648] h-2 overflow-hidden">
          <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <main className="flex-1 flex flex-col px-4 overflow-y-auto no-scrollbar pb-24">
        {/* Timer */}
        <div className="flex gap-3 py-4 justify-center">
          <div className="flex flex-col items-center gap-1 w-20">
            <div className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-200 dark:bg-[#233648] border border-slate-300 dark:border-slate-700">
              <p className="text-slate-900 dark:text-white text-lg font-bold">00</p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase">Минут</p>
          </div>
          <div className="flex items-center text-slate-400 font-bold text-xl pt-[-10px]">:</div>
          <div className="flex flex-col items-center gap-1 w-20">
            <div className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-200 dark:bg-[#233648] border border-slate-300 dark:border-slate-700">
              <p className="text-primary text-lg font-bold">{timeLeft.toString().padStart(2, '0')}</p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase">Секунд</p>
          </div>
        </div>

        {/* Question Image */}
        {currentQuestion.image && (
          <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 mt-2 shadow-lg relative shrink-0">
            <img className="w-full h-full object-cover" src={currentQuestion.image} alt="Сұрақ суреті" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
          </div>
        )}

        <h2 className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold leading-tight text-center pb-6 font-display">
          {currentQuestion.text}
        </h2>

        {/* Answer Options */}
        <div className="flex flex-col gap-3 pb-8">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQuestion.correctAnswer;
            
            let btnClass = "bg-white dark:bg-[#233648] border-2 border-transparent";
            let letterClass = "bg-slate-100 dark:bg-background-dark text-slate-500 dark:text-slate-400";
            
            if (isAnswered) {
              if (isCorrect) {
                btnClass = "bg-primary/10 dark:bg-primary/20 border-primary text-slate-900 dark:text-white";
                letterClass = "bg-primary text-white";
              } else if (isSelected && !isCorrect) {
                btnClass = "bg-red-500/10 dark:bg-red-500/20 border-red-500 text-slate-900 dark:text-white";
                letterClass = "bg-red-500 text-white";
              }
            }

            return (
              <button 
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`flex min-w-[84px] items-center justify-between overflow-hidden rounded-xl h-16 px-5 transition-all shadow-sm active:scale-95 ${btnClass}`}
              >
                <span className="flex items-center gap-3">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm ${letterClass}`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-base font-medium">{option}</span>
                </span>
                {isAnswered && isCorrect && <span className="material-symbols-outlined text-primary">check_circle</span>}
                {isAnswered && isSelected && !isCorrect && <span className="material-symbols-outlined text-red-500">cancel</span>}
              </button>
            );
          })}
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 safe-bottom">
        <button 
          onClick={nextQuestion}
          disabled={!isAnswered}
          className={`w-full font-bold h-14 rounded-xl flex items-center justify-center gap-2 transition-all ${isAnswered ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`}
        >
          {currentIdx === topic.questions.length - 1 ? 'Тестті аяқтау' : 'Келесі сұрақ'}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default Quiz;
