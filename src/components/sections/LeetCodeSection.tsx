import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animations/AnimatedSection";
import { ExternalLink, Trophy, Target, Zap, Award } from "lucide-react";

interface LeetCodeStats {
  status: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
}

const LEETCODE_USERNAME = "kaiz2006";

export const LeetCodeSection = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`https://leetcode-stats.tashif.codes/${LEETCODE_USERNAME}`);
        const data = await response.json();
        if (data.status === "success") {
          setStats(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch LeetCode stats:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const difficultyCards = stats ? [
    {
      label: "Easy",
      solved: stats.easySolved,
      total: stats.totalEasy,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      label: "Medium",
      solved: stats.mediumSolved,
      total: stats.totalMedium,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
    },
    {
      label: "Hard",
      solved: stats.hardSolved,
      total: stats.totalHard,
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
    },
  ] : [];

  return (
    <section id="leetcode" className="py-32 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Competitive Programming
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            LeetCode <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tracking my problem-solving journey and algorithmic skills
          </p>
        </AnimatedSection>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full"
            />
          </div>
        )}

        {error && (
          <AnimatedSection className="text-center py-20">
            <p className="text-muted-foreground">Unable to load LeetCode stats. Please try again later.</p>
          </AnimatedSection>
        )}

        {stats && !loading && !error && (
          <StaggerContainer className="space-y-8">
            {/* Main Stats Card */}
            <StaggerItem>
              <motion.div
                className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                        <Trophy className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{LEETCODE_USERNAME}</h3>
                        <p className="text-muted-foreground">LeetCode Profile</p>
                      </div>
                    </div>
                    <motion.a
                      href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-medium">View Profile</span>
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <StatCard
                      icon={<Target className="w-6 h-6" />}
                      value={stats.totalSolved}
                      label="Problems Solved"
                      color="text-primary"
                    />
                    <StatCard
                      icon={<Zap className="w-6 h-6" />}
                      value={`${stats.acceptanceRate.toFixed(1)}%`}
                      label="Acceptance Rate"
                      color="text-green-400"
                    />
                    <StatCard
                      icon={<Award className="w-6 h-6" />}
                      value={stats.ranking.toLocaleString()}
                      label="Global Ranking"
                      color="text-yellow-400"
                    />
                    <StatCard
                      icon={<Trophy className="w-6 h-6" />}
                      value={stats.totalQuestions.toLocaleString()}
                      label="Total Questions"
                      color="text-accent"
                    />
                  </div>

                  {/* Difficulty Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {difficultyCards.map((card, index) => (
                      <motion.div
                        key={card.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`${card.bgColor} ${card.borderColor} border rounded-2xl p-6`}
                      >
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg font-semibold">{card.label}</span>
                          <span className="text-2xl font-bold">
                            {card.solved}
                            <span className="text-sm text-muted-foreground font-normal">/{card.total}</span>
                          </span>
                        </div>
                        <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(card.solved / card.total) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${card.color}`}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {((card.solved / card.total) * 100).toFixed(1)}% completed
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        )}
      </div>
    </section>
  );
};

const StatCard = ({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color: string;
}) => (
  <motion.div
    className="glass rounded-2xl p-6 text-center"
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className={`${color} flex justify-center mb-3`}>{icon}</div>
    <div className="text-2xl md:text-3xl font-bold mb-1">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </motion.div>
);