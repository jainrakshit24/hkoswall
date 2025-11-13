import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  prefix?: string;
}

interface AnimatedStatsProps {
  stats: Stat[];
}

const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2000 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, value, duration]);

  return (
    <div ref={counterRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary transition-all duration-300">
      {prefix}{count}{suffix}
    </div>
  );
};

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter 
                value={stat.value} 
                suffix={stat.suffix} 
                prefix={stat.prefix}
              />
              <p className="mt-3 text-sm sm:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
