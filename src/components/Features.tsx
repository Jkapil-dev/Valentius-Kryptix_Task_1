import React from 'react';
import {
  ListTodo,
  Clock,
  Target,
  LayoutGrid,
} from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      id: 'feature-1',
      title: 'Smart Task Planning',
      description:
        'Turn overwhelming to-do lists into clear, manageable priorities with intelligent daily sequencing and context tags.',
      icon: ListTodo,
      tag: 'Prioritization',
      accent: 'indigo',
      miniPreview: (
        <div className="mt-4 pt-4 border-t border-[#E2E8F0] space-y-1.5">
          <div className="flex items-center justify-between text-[11px] p-1.5 bg-[#F8F8F5] rounded-md">
            <span className="flex items-center gap-1.5 text-[#17212B] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
              Core API Architecture
            </span>
            <span className="text-[10px] text-rose-700 font-semibold bg-rose-50 px-1.5 py-0.2 rounded">
              P1 • 45m
            </span>
          </div>
          <div className="flex items-center justify-between text-[11px] p-1.5 bg-[#F8F8F5] rounded-md">
            <span className="flex items-center gap-1.5 text-[#64748B]">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              Design System Audit
            </span>
            <span className="text-[10px] text-slate-600 bg-slate-100 px-1.5 py-0.2 rounded">
              P2 • 30m
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'feature-2',
      title: 'Focus Sessions',
      description:
        'Set aside distraction-free time for the work that matters most. Block interruptions and work in dedicated flow intervals.',
      icon: Clock,
      tag: 'Deep Work',
      accent: 'lime',
      miniPreview: (
        <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
          <div className="bg-[#17212B] rounded-lg p-2.5 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8F169] animate-pulse" />
              <span className="text-xs font-mono font-medium">25:00</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#C8F169]">
              Flow State Active
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'feature-3',
      title: 'Goal Tracking',
      description:
        'See your progress, celebrate milestones, and keep moving forward with crystal-clear visual roadmaps and metrics.',
      icon: Target,
      tag: 'Progress',
      accent: 'indigo',
      miniPreview: (
        <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="font-semibold text-[#17212B]">Q4 Launch Target</span>
            <span className="text-[#635BFF] font-bold">85%</span>
          </div>
          <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#635BFF] h-full rounded-full w-[85%]" />
          </div>
        </div>
      ),
    },
    {
      id: 'feature-4',
      title: 'One Unified Workspace',
      description:
        'Keep projects, tasks, and daily plans organized in one place. Say goodbye to scattered notes and disjointed productivity apps.',
      icon: LayoutGrid,
      tag: 'Organization',
      accent: 'lime',
      miniPreview: (
        <div className="mt-4 pt-4 border-t border-[#E2E8F0] grid grid-cols-3 gap-1.5 text-center">
          <div className="bg-[#F8F8F5] p-1.5 rounded text-[10px] font-medium text-[#17212B]">
            Projects
          </div>
          <div className="bg-[#F8F8F5] p-1.5 rounded text-[10px] font-medium text-[#17212B]">
            Daily Focus
          </div>
          <div className="bg-[#F8F8F5] p-1.5 rounded text-[10px] font-medium text-[#17212B]">
            Metrics
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="features"
      aria-label="Features and Benefits"
      className="py-16 md:py-24 border-t border-[#E2E8F0] bg-white scroll-mt-18"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F8F5] border border-[#E2E8F0] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#17212B]">
              FEATURES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212B] tracking-tight font-heading">
            Everything you need to find your flow.
          </h2>
          <p className="mt-4 text-base text-[#64748B] leading-relaxed">
            Thoughtfully engineered tools that eliminate cognitive friction, silence distractions, and protect your precious working hours.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-[#F8F8F5] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#635BFF]/40 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#635BFF] group-hover:bg-[#635BFF] group-hover:text-white transition-colors shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-white border border-[#E2E8F0] text-[#64748B]">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#17212B] font-heading mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Mini Preview Graphic */}
                <div>{feature.miniPreview}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
