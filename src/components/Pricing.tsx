import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import type { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const plans: PricingPlan[] = [
    {
      id: 'plan-free',
      name: 'Free',
      price: '₹0',
      period: '/month',
      description: 'Essential task planning for students and solo experimenters.',
      features: [
        'Personal task management',
        'Basic focus sessions (25m)',
        'Daily planning & priorities',
        'Basic progress tracking',
        'Up to 3 active projects',
      ],
      ctaText: 'Get Started',
      isPopular: false,
    },
    {
      id: 'plan-pro',
      name: 'Pro',
      price: '₹299',
      period: '/month',
      description: 'For professionals, developers, and creators who need deep flow.',
      features: [
        'Everything in Free',
        'Unlimited projects & tags',
        'Advanced goal tracking & milestones',
        'Detailed productivity insights & export',
        'Custom focus session intervals',
        'Priority feature roadmap updates',
      ],
      ctaText: 'Choose Pro',
      isPopular: true,
    },
    {
      id: 'plan-team',
      name: 'Team',
      price: '₹799',
      period: '/month',
      description: 'For agile product teams, studios, and small agencies.',
      features: [
        'Everything in Pro',
        'Shared team workspaces',
        'Team task coordination & sync',
        'Collaborative milestone planning',
        'Admin roles & workspace controls',
        'Dedicated onboarding session',
      ],
      ctaText: 'Choose Team',
      isPopular: false,
    },
  ];

  return (
    <section
      id="pricing"
      aria-label="Pricing Plans"
      className="py-16 md:py-24 bg-white border-t border-[#E2E8F0] scroll-mt-18"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F8F5] border border-[#E2E8F0] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#17212B]">
              TRANSPARENT PRICING
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight font-heading">
            Invest in clarity. Start free, upgrade when you're ready.
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Simple plans tailored for individuals, freelancers, and growing teams.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                plan.isPopular
                  ? 'bg-[#17212B] text-white shadow-xl ring-2 ring-[#635BFF] lg:-translate-y-2'
                  : 'bg-[#F8F8F5] text-[#17212B] border border-[#E2E8F0] hover:border-[#CBD5E1]'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C8F169] text-[#17212B] shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 fill-[#17212B]" />
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`text-xl font-bold font-heading ${
                      plan.isPopular ? 'text-white' : 'text-[#17212B]'
                    }`}
                  >
                    {plan.name}
                  </h3>
                </div>

                <p
                  className={`text-xs leading-relaxed mb-6 min-h-[36px] ${
                    plan.isPopular ? 'text-[#94A3B8]' : 'text-[#64748B]'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-[#E2E8F0]/30">
                  <span
                    className={`text-4xl sm:text-5xl font-extrabold font-heading tracking-tight ${
                      plan.isPopular ? 'text-white' : 'text-[#17212B]'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.isPopular ? 'text-[#94A3B8]' : 'text-[#64748B]'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8" aria-label={`${plan.name} features`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.isPopular
                            ? 'bg-[#C8F169] text-[#17212B]'
                            : 'bg-[#635BFF]/10 text-[#635BFF]'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span
                        className={
                          plan.isPopular ? 'text-[#E2E8F0]' : 'text-[#475569]'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={() => onSelectPlan(`${plan.name} Plan`)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none cursor-pointer ${
                    plan.isPopular
                      ? 'bg-[#635BFF] hover:bg-[#5046E5] text-white focus-visible:ring-[#C8F169]'
                      : 'bg-white hover:bg-[#F1F5F9] text-[#17212B] border border-[#E2E8F0] hover:border-[#CBD5E1] focus-visible:ring-[#635BFF]'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note that pricing is illustrative */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#94A3B8]">
            Prices listed in INR (₹) are illustrative sample rates for this prototype. No payment or billing is processed.
          </p>
        </div>
      </div>
    </section>
  );
};
