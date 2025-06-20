import React from 'react';
import { HeroSection } from '../../organisms/HeroSection/HeroSection';
import { AboutSection } from '../../organisms/AboutSection/AboutSection';
import { SkillsSection } from '../../organisms/SkillsSection/SkillsSection';
import { ProjectsSection } from '../../organisms/ProjectsSection/ProjectsSection';
import { TestimonialsSection } from '../../organisms/TestimonialsSection/TestimonialsSection';
import { ContactSection } from '../../organisms/ContactSection/ContactSection';
import { usePortfolio } from '../../../hooks/usePortfolio';

export const PortfolioTemplate: React.FC = () => {
  const {
    personalInfo,
    navigationItems,
    skills,
    projects,
    testimonials,
    socialLinks,
    designerRoles,
    isLoading,
    error
  } = usePortfolio();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#3d46c9]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full items-center justify-center bg-[#f6f6f6] min-h-screen">
      <div className="flex flex-col w-full max-w-[1440px] items-center justify-center">
        <HeroSection 
          personalInfo={personalInfo}
          navigationItems={navigationItems}
          designerRoles={designerRoles}
        />
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[120px] space-y-8 sm:space-y-12 md:space-y-16">
          <AboutSection personalInfo={personalInfo} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <TestimonialsSection testimonials={testimonials} />
          <ContactSection socialLinks={socialLinks} />
        </div>
      </div>
    </div>
  );
};