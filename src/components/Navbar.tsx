import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: (title?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F8F5]/90 backdrop-blur-md border-b border-[#E2E8F0] transition-colors">
      <nav
        aria-label="Main Navigation"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between"
      >
        {/* Brand Wordmark & Icon */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#17212B] font-heading font-bold text-xl tracking-tight group focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded-lg p-1 -m-1"
        >
          <div className="w-8 h-8 rounded-lg bg-[#17212B] flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform">
            {/* Geometric brand focus icon */}
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
          <span className="text-[#17212B] tracking-tight text-lg sm:text-xl font-bold font-heading">
            Focus<span className="text-[#635BFF]">Flow</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-sm font-medium text-[#64748B] hover:text-[#17212B] transition-colors py-1 focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none rounded-md"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenDemo('Get Started with FocusFlow')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5046E5] text-white text-sm font-semibold transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:ring-offset-2 focus-visible:outline-none cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            className="p-2 rounded-lg text-[#17212B] hover:bg-[#E2E8F0]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-[#E2E8F0] bg-[#F8F8F5] px-4 pt-2 pb-6 space-y-3 shadow-lg transition-all animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#17212B] hover:bg-white hover:text-[#635BFF] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo('Get Started with FocusFlow');
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#635BFF] text-white text-sm font-semibold shadow-sm hover:bg-[#5046E5] transition-colors focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-none cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
