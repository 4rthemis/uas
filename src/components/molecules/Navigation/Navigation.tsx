import React from 'react';
import { Text } from '../../atoms/Text/Text';
import { Icon } from '../../atoms/Icon/Icon';
import { NavigationItem } from '../../../types';
import { useNavigation } from '../../../hooks/useNavigation';
import { useResponsive } from '../../../hooks/useResponsive';

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ items, className }) => {
  const { isMobileMenuOpen, activeSection, toggleMobileMenu, navigateToSection } = useNavigation();
  const { isMobile } = useResponsive();

  return (
    <nav className={`flex w-full max-w-[1200px] items-center justify-between px-4 sm:px-8 md:px-14 py-3 relative flex-[0_0_auto] bg-[#ffffff33] rounded-full border-b-2 [border-bottom-style:solid] border-[#e5e6e8] backdrop-blur-[6.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.9px)_brightness(100%)] ${className}`}>
      <Icon
        src="/image-1.png"
        alt="Logo"
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
      />

      {/* Desktop Navigation */}
      <div className="hidden lg:inline-flex items-start gap-[60px] relative flex-[0_0_auto]">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => navigateToSection(item.id)}
            className={`relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-xl tracking-[0] leading-[24.0px] whitespace-nowrap hover:text-[#3d46c9] transition-colors ${
              activeSection === item.id ? 'text-[#3d46c9]' : 'text-[#242528]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && isMobile && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border z-50">
          <div className="flex flex-col p-4 gap-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className={`text-left p-2 rounded hover:bg-gray-100 transition-colors ${
                  activeSection === item.id ? 'text-[#3d46c9] bg-gray-50' : 'text-[#242528]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};