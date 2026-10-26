import React, { useEffect, useRef } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  planName?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  title = 'FocusFlow Demo Workspace',
  planName,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scrollToHeroDashboard = () => {
    onClose();
    const heroEl = document.getElementById('dashboard-preview');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17212B]/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header bar */}
        <div className="bg-[#17212B] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#635BFF] flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4 text-[#C8F169]" />
            </div>
            <div>
              <h3 id="modal-headline" className="font-semibold text-base leading-tight">
                {title}
              </h3>
              <p className="text-xs text-[#94A3B8]">Interactive SaaS Prototype</p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close dialog"
            className="text-slate-400 hover:text-white rounded-lg p-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-[#C8F169] focus-visible:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-4">
          {planName ? (
            <div className="bg-[#F8F8F5] border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#17212B]">
                  Plan Selected: <span className="text-[#635BFF]">{planName}</span>
                </p>
                <p className="text-xs text-[#64748B] mt-0.5">
                  This demo simulates account onboarding. No real billing, credit card, or personal information is required.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-[#F8F8F5] border border-[#E2E8F0] rounded-xl p-4">
              <p className="text-sm text-[#17212B] font-medium">
                Welcome to FocusFlow!
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                FocusFlow is designed to help professionals and students plan with clarity and protect their deep focus. You can test live task management right inside the interactive Hero Dashboard.
              </p>
            </div>
          )}

          <div className="space-y-2 text-xs text-[#64748B]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
              <span>Interactive task completion & live progress recalculation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
              <span>Real-time focus timer demonstration</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
              <span>Zero tracking or credentials required</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-[#F8F8F5] px-6 py-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#64748B] hover:text-[#17212B] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded-lg"
          >
            Dismiss
          </button>
          <button
            onClick={scrollToHeroDashboard}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#635BFF] hover:bg-[#5046E5] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <span>Try Interactive Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
