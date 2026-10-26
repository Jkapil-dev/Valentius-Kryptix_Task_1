import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DashboardPreview } from './DashboardPreview';

interface HeroProps {
  onOpenDemo: (title?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const scrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Hero"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"
    >
      {/* Subtle background ambient glows (restrained, no heavy saturated blobs) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#635BFF]/8 to-[#C8F169]/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-2xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C8F169] ring-2 ring-[#C8F169]/30" />
              <span className="text-xs font-bold tracking-wider text-[#17212B] uppercase">
                YOUR SPACE TO DO GREAT WORK
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#17212B] tracking-tight leading-[1.08] font-heading mb-6">
              Less busywork.{' '}
              <span className="relative inline-block text-[#635BFF]">
                More of your
                <span className="relative z-10"> best work.</span>
                {/* Subtle highlighter accent */}
                <span
                  className="absolute bottom-1.5 left-0 w-full h-3 bg-[#C8F169]/55 -z-10 rounded-sm transform -rotate-1"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8 max-w-xl">
              Plan your priorities, organize your projects, and build a focused routine with one workspace designed to help you get meaningful work done.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => onOpenDemo('Start Your Free Account')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#635BFF] hover:bg-[#5046E5] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:ring-offset-2 focus-visible:outline-none cursor-pointer"
              >
                <span>Start for Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToFeatures}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F1F5F9] text-[#17212B] border border-[#E2E8F0] font-semibold text-sm transition-all hover:border-[#CBD5E1] focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none cursor-pointer"
              >
                <span>Explore Features</span>
              </button>
            </div>

            {/* Supporting Micro-copy */}
            <div className="flex items-center gap-4 mt-4 text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#635BFF]" />
                <span>No credit card required.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#635BFF]" />
                <span>Free 14-day Pro trial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Product Dashboard Illustration */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};
