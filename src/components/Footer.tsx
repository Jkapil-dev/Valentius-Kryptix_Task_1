import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenDemo: (title?: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="about"
      aria-label="Footer"
      className="bg-[#F8F8F5] border-t border-[#E2E8F0] pt-16 pb-12 text-[#17212B]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#E2E8F0]">
          {/* Brand Info & Mission (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2.5 font-heading font-bold text-xl tracking-tight group focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded-lg p-1 -m-1 w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-[#17212B] flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform">
                <svg
                  className="w-4 h-4 text-[#635BFF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="7" />
                  <circle cx="12" cy="12" r="2" fill="#635BFF" />
                </svg>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C8F169] border-2 border-[#17212B]" />
              </div>
              <span className="text-[#17212B] tracking-tight text-xl font-bold font-heading">
                Focus<span className="text-[#635BFF]">Flow</span>
              </span>
            </a>

            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm">
              FocusFlow is a calm, intelligent workspace designed to help you organize priorities, protect your attention, and accomplish your best work.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-[#E2E8F0] text-[#17212B]">
                <span className="w-2 h-2 rounded-full bg-[#C8F169]" />
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Col 3: Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#17212B]">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#features');
                  }}
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#benefits');
                  }}
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#pricing');
                  }}
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#dashboard-preview"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#dashboard-preview');
                  }}
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded"
                >
                  Dashboard Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & About */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#17212B]">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenDemo(
                      'About FocusFlow — Building modern, calm productivity software'
                    )
                  }
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded text-left"
                >
                  About FocusFlow
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenDemo(
                      'Design Philosophy — Why calm interfaces empower deep work'
                    )
                  }
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded text-left"
                >
                  Design Philosophy
                </button>
              </li>
              <li>
                <a
                  href="mailto:hello@focusflow.demo?subject=FocusFlow%20Inquiry"
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded inline-flex items-center gap-1.5"
                >
                  <span>Contact Us</span>
                  <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#17212B]">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenDemo(
                      'Privacy Policy — Zero Tracking, Local Data First'
                    )
                  }
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenDemo('Terms of Service — Prototype Demonstration')
                  }
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenDemo('Security & Data Architecture')
                  }
                  className="hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded text-left"
                >
                  Security
                </button>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-[#17212B] mb-2">Connect</p>
              <div className="flex items-center gap-2">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="FocusFlow on LinkedIn (external link)"
                  className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#635BFF] hover:border-[#635BFF] transition-all focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="FocusFlow on GitHub (external link)"
                  className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#635BFF] hover:border-[#635BFF] transition-all focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="FocusFlow on Instagram (external link)"
                  className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#635BFF] hover:border-[#635BFF] transition-all focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            &copy; {CURRENT_YEAR} FocusFlow Technologies. Fictional product created for demonstration purposes.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-1.5 hover:text-[#17212B] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded px-2 py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
