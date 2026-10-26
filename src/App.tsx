import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('FocusFlow Interactive Demo');
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenDemo = (title?: string) => {
    setSelectedPlan(undefined);
    setModalTitle(title || 'FocusFlow Workspace Preview');
    setIsDemoModalOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setModalTitle(`Get Started with ${planName}`);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F5] text-[#17212B] font-sans">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#635BFF] text-white font-semibold rounded-lg shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F169]"
      >
        Skip to main content
      </a>

      {/* Section 1: Sticky Navbar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Area containing sections 2 to 6 */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* Section 2: Hero */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* Section 3: Features and Benefits */}
        <Features />

        {/* Section 4: Social Proof */}
        <Testimonials />

        {/* Section 5: Pricing */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Section 6: Final CTA */}
        <FinalCTA onOpenDemo={handleOpenDemo} />
      </main>

      {/* Section 7: Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Demo Onboarding & Information Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        title={modalTitle}
        planName={selectedPlan}
      />
    </div>
  );
};

export default App;
