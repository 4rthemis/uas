import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const ContactSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    {
      name: "Twitter/X",
      icon: "/group.png",
      iconClass: "w-[27px] h-[29px] top-[3px] left-[3px]",
    },
    {
      name: "Instagram",
      icon: "/instagram.svg",
      iconClass: "w-[30px] h-[30px] top-px left-px",
    },
    {
      name: "LinkedIn",
      icon: "/linkedin.svg",
      iconClass: "w-[30px] h-[29px] top-px left-px",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-6 sm:gap-8 py-8 relative w-full bg-white">
      <div className="flex flex-col items-center gap-6 sm:gap-8 relative self-stretch w-full px-4 sm:px-8">
        <div className="inline-flex flex-col items-center gap-8 sm:gap-12 relative">
          <div className="inline-flex flex-col items-center gap-4 sm:gap-6 relative">
            <h2 className="relative w-fit mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#242528] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-center tracking-[0] leading-[1.2] sm:leading-[52.8px] px-4">
              Ready to Craft your Big Ideas?
            </h2>

            <p className="relative w-fit font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#808690] text-lg sm:text-xl md:text-2xl text-center tracking-[0] leading-[1.2] sm:leading-[28.8px] px-4">
              Let&#39;s bring your design vision to life.
            </p>
          </div>

          <Button className="flex w-full max-w-[200px] h-12 sm:h-14 items-center justify-center gap-2 px-3 py-2 bg-[#3d46c9] rounded-[999px] text-white hover:bg-[#3d46c9]/90 transition-colors">
            <img className="w-5 h-5 sm:w-6 sm:h-6" alt="Message icon" src="/sms.svg" />
            <span className="w-fit text-sm sm:text-base font-['Plus_Jakarta_Sans',Helvetica] font-normal text-center tracking-[0] leading-normal">
              Get in Touch!
            </span>
          </Button>
        </div>

        <div className="flex w-full max-w-[216px] items-center justify-center gap-4 relative">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className={
                index === 2 ? "relative w-8 h-[30px] cursor-pointer hover:scale-110 transition-transform" : "relative w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
              }
            >
              {index === 2 ? (
                <div
                  className="relative w-[30px] h-[29px] top-px left-px bg-[url(/linkedin.svg)] bg-[100%_100%]"
                  aria-label={link.name}
                  role="button"
                />
              ) : (
                <img
                  className={`absolute ${link.iconClass}`}
                  alt={link.name}
                  src={link.icon}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 sm:gap-[25px] relative self-stretch w-full px-4 sm:px-8">
        <Separator className="w-full h-px mt-[-1.00px]" />

        <div className="relative w-full max-w-[418px] text-center">
          <p className="font-['DM_Sans',Helvetica] font-normal text-neutral-600 text-sm sm:text-lg md:text-xl tracking-[0] leading-[1.5] sm:leading-[30px]">
            Copyright © 2025 syahrul.uix&nbsp;&nbsp;- Made with ❤
          </p>
        </div>
      </div>
    </section>
  );
};