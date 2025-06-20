import React from 'react';
import { Button } from '../../ui/button';
import { Separator } from '../../ui/separator';
import { Text } from '../../atoms/Text/Text';
import { Icon } from '../../atoms/Icon/Icon';
import { SocialLink } from '../../../types';

interface ContactSectionProps {
  socialLinks: SocialLink[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ socialLinks }) => {
  return (
    <section id="contact" className="flex flex-col items-start gap-6 sm:gap-8 py-8 relative w-full bg-white">
      <div className="flex flex-col items-center gap-6 sm:gap-8 relative self-stretch w-full px-4 sm:px-8">
        <div className="inline-flex flex-col items-center gap-8 sm:gap-12 relative">
          <div className="inline-flex flex-col items-center gap-4 sm:gap-6 relative">
            <Text variant="h2" color="primary" align="center" className="px-4">
              Ready to Craft your Big Ideas?
            </Text>

            <Text variant="body" color="secondary" align="center" className="text-lg sm:text-xl md:text-2xl px-4">
              Let&#39;s bring your design vision to life.
            </Text>
          </div>

          <Button className="flex w-full max-w-[200px] h-12 sm:h-14 items-center justify-center gap-2 px-3 py-2 bg-[#3d46c9] rounded-[999px] text-white hover:bg-[#3d46c9]/90 transition-colors">
            <Icon src="/sms.svg" alt="Message icon" size="md" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="w-fit text-sm sm:text-base font-['Plus_Jakarta_Sans',Helvetica] font-normal text-center tracking-[0] leading-normal">
              Get in Touch!
            </span>
          </Button>
        </div>

        <div className="flex w-full max-w-[216px] items-center justify-center gap-4 relative">
          {socialLinks.map((link, index) => (
            <div
              key={link.id}
              className={`relative cursor-pointer hover:scale-110 transition-transform ${
                index === 2 ? "w-8 h-[30px]" : "w-8 h-8"
              }`}
            >
              {index === 2 ? (
                <div
                  className="relative w-[30px] h-[29px] top-px left-px bg-[url(/linkedin.svg)] bg-[100%_100%]"
                  aria-label={link.name}
                  role="button"
                />
              ) : (
                <Icon
                  src={link.icon}
                  alt={link.name}
                  className={`absolute ${link.iconClass}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 sm:gap-[25px] relative self-stretch w-full px-4 sm:px-8">
        <Separator className="w-full h-px mt-[-1.00px]" />

        <div className="relative w-full max-w-[418px] text-center">
          <Text variant="body" className="font-['DM_Sans',Helvetica] font-normal text-neutral-600 text-sm sm:text-lg md:text-xl">
            Copyright © 2025 syahrul.uix&nbsp;&nbsp;- Made with ❤
          </Text>
        </div>
      </div>
    </section>
  );
};