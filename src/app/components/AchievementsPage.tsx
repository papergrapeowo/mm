import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, ChevronLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { hasAchievement } from "../utils/userData";

export function AchievementsPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);

  useEffect(() => {
    setAchievementUnlocked(hasAchievement("master_curator"));
  }, []);

  return (
    <div className="min-h-full bg-[#F8F6F2] pb-24 text-slate-800">
      {/* 顶部导航 */}
      <header className="bg-white border-b border-slate-100 px-6 py-6 flex items-center gap-4">
        <button onClick={() => navigate("/my")} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-1">Achievements</p>
          <h1 className="text-2xl font-yuwei tracking-widest">{t('My Achievements')}</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6">
        {/* 成就卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm"
        >
          <div className="flex items-start gap-6">
            <div
              className={`p-4 rounded-2xl ${
                achievementUnlocked
                  ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg"
                  : "bg-slate-100 text-slate-300"
              }`}
            >
              <Trophy size={32} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold font-yuwei tracking-wider">
                  {t('万物皆观')}
                </h3>
                {achievementUnlocked && (
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                    {t('已解锁')}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-500 mb-2">
                {t('已浏览全部文物')}
              </p>
              {!achievementUnlocked && (
                <p className="text-xs text-slate-400">
                  浏览所有文物即可解锁
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
