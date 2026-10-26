import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import type { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const benefitPills = [
    { title: 'Plan clearly', desc: 'Turn chaos into actionable steps' },
    { title: 'Focus deeply', desc: 'Protect uninterrupted creative blocks' },
    { title: 'Make progress', desc: 'Build steady momentum every day' },
  ];

  const testimonials: TestimonialItem[] = [
    {
      id: 'test-1',
      name: 'Maya Chen',
      role: 'Computer Science Student',
      avatarText: 'MC',
      quote:
        'FocusFlow helped me balance lectures, lab deadlines, and exam prep without burning out. The daily focus timer is a game-changer during finals week.',
      highlight: 'Reduced academic stress',
    },
    {
      id: 'test-2',
      name: 'Liam Vance',
      role: 'Freelance Product Designer',
      avatarText: 'LV',
      quote:
        'Keeping client deliverables, design sprints, and billing milestones in one calm workspace transformed how I run my freelance business.',
      highlight: 'Streamlined client projects',
    },
    {
      id: 'test-3',
      name: 'Sarah Jenkins',
      role: 'Senior Frontend Engineer',
      avatarText: 'SJ',
      quote:
        'The smart task planning cuts through morning cognitive overload. I start coding within minutes instead of feeling overwhelmed by open tickets.',
      highlight: 'Clear morning priorities',
    },
  ];

  return (
    <section
      id="benefits"
      aria-label="Social Proof and Benefits"
      className="py-16 md:py-24 bg-[#F8F8F5] border-t border-[#E2E8F0] scroll-mt-18"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Generic Benefit Labels Bar */}
        <div className="mb-14 pb-12 border-b border-[#E2E8F0]">
          <p className="text-center text-xs font-semibold tracking-wider text-[#64748B] uppercase mb-6">
            Designed for thoughtful productivity habits
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefitPills.map((pill) => (
              <div
                key={pill.title}
                className="bg-white rounded-xl p-4 border border-[#E2E8F0] flex items-center gap-3.5 shadow-2xs hover:border-[#635BFF]/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17212B] font-heading">
                    {pill.title}
                  </h4>
                  <p className="text-xs text-[#64748B]">{pill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight font-heading">
            Made for people who want to do meaningful work.
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            From university research to production deployments, hear how creators protect their attention.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#635BFF] bg-[#EEF0FF] px-2.5 py-0.5 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <p className="text-sm text-[#17212B] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F1F5F9]">
                <div className="w-10 h-10 rounded-full bg-[#17212B] text-white flex items-center justify-center font-bold text-xs">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17212B] font-heading">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#64748B]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Disclaimer Note */}
        <p className="text-center text-xs text-[#94A3B8] mt-8">
          Note: FocusFlow is a fictional concept product. Testimonials represent illustrative sample personas and user scenarios.
        </p>
      </div>
    </section>
  );
};
