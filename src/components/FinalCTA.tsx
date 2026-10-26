import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenDemo: (title?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo }) => {
  return (
    <section
      aria-label="Call to Action"
      className="py-20 md:py-28 bg-[#17212B] text-white relative overflow-hidden"
    >
      {/* Restrained Indigo & Lime Ambient Glows */}
      <div
        className="absolute -top-32 left-1/4 w-96 h-96 bg-[#635BFF]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#C8F169]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#C8F169] text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MAKE SPACE FOR DEEP WORK</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-6 text-white">
            Your next great workday starts here.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-10 max-w-xl mx-auto">
            Bring your tasks together, protect your focus, and make progress on what matters.
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDemo('Get Started for Free')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#635BFF] hover:bg-[#5046E5] text-white font-bold text-base transition-all duration-200 shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#C8F169] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17212B] focus-visible:outline-none cursor-pointer"
            >
              <span>Get Started for Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[#94A3B8]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
