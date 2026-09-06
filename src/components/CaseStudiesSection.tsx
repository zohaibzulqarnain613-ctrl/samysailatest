import React, { memo } from 'react';
import { GlareCard } from './ui/glare-card';

const CaseStudyCard = memo(({ title, description }: { title: string; description: string }) => (
  <GlareCard className="flex min-w-0 flex-col items-center justify-center p-6 sm:p-8">
    <div className="w-full min-w-0 text-center">
      <div className="w-full break-words [overflow-wrap:anywhere] text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text mb-4 leading-tight">
        {title}
      </div>
      <p className="w-full break-words text-gray-300 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  </GlareCard>
));

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Measurable Outcomes
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional AI systems built for real-world business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <CaseStudyCard 
            title="Operational Speed"
            description="Engineered for faster customer response and reduced cycle times."
          />
          <CaseStudyCard 
            title="Lead Handling"
            description="Designed for smarter lead qualification and automated multi-channel engagement."
          />
          <CaseStudyCard 
            title="Task Efficiency"
            description="Architected to eliminate repetitive manual work through intelligent workflows."
          />
          <CaseStudyCard 
            title="Scalable Systems"
            description="Built to support growth with robust and flexible digital infrastructure."
          />
        </div>
      </div>
    </section>
  );
};

export default memo(CaseStudiesSection);