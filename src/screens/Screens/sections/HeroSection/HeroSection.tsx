import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Navigation menu items
  const navItems = ["Home", "About", "Skills", "Projects", "Testimonials"];

  // Designer roles for the bottom banner
  const designerRoles = [
    "UI/UX Designer",
    "Product Designer",
    "Interaction Designer",
    "Product Enthusiast",
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-8 md:gap-16 px-4 sm:px-8 md:px-16 lg:px-[120px] py-0 relative self-stretch w-full flex-[0_0_auto] mt-0 md:mt-[-186.14px]">
      {/* Navigation Bar */}
      <div className="flex flex-col w-full items-center gap-8 md:gap-16 relative flex-[0_0_auto]">
        <nav className="flex w-full max-w-[1200px] items-center justify-between px-4 sm:px-8 md:px-14 py-3 relative flex-[0_0_auto] bg-[#ffffff33] rounded-full border-b-2 [border-bottom-style:solid] border-[#e5e6e8] backdrop-blur-[6.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.9px)_brightness(100%)]">
          <img
            className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover"
            alt="Logo"
            src="/image-1.png"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:inline-flex items-start gap-[60px] relative flex-[0_0_auto]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#242528] text-xl tracking-[0] leading-[24.0px] whitespace-nowrap hover:text-[#3d46c9] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Greeting Section */}
        <div className="flex flex-col sm:flex-row w-full max-w-[782px] items-center justify-between gap-4 sm:gap-8 relative flex-[0_0_auto]">
          <div className="hidden sm:block relative w-[115px] h-[115px] rotate-180">
            <img
              className="absolute w-5 h-[21px] top-[94px] left-0 -rotate-180"
              alt="Ornament"
              src="/ornament-48.svg"
            />
            <img
              className="absolute w-[50px] h-[51px] top-0 left-[65px] -rotate-180"
              alt="Ornament"
              src="/ornament-49.svg"
            />
            <img
              className="absolute w-[27px] h-[29px] top-[23px] left-0 -rotate-180"
              alt="Ornament"
              src="/ornament-50.svg"
            />
          </div>

          <div className="inline-flex flex-col items-center sm:items-start justify-center gap-4 sm:gap-8 relative flex-[0_0_auto]">
            <img
              className="relative w-10 h-10 sm:w-12 sm:h-12 object-cover"
              alt="Profile"
              src="/image.png"
            />

            <Card className="bg-[#eff0ff] rounded-[0px_12px_12px_12px] border-none">
              <CardContent className="px-4 sm:px-5 py-3 sm:py-4">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#242528] text-lg sm:text-xl tracking-[0] leading-[24.0px] whitespace-nowrap">
                  Hi! 👋&nbsp;&nbsp;i&apos;m Syahrul Awaludin
                </p>
              </CardContent>
            </Card>
          </div>

          <img
            className="hidden sm:block relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px]"
            alt="Frame"
            src="/frame.svg"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center gap-8 sm:gap-12 px-4 sm:px-8 md:px-16 lg:px-[120px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative w-full mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#242528] text-2xl sm:text-3xl md:text-4xl lg:text-[54px] text-center tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[81px]">
            <span className="font-semibold">
              Professional UI/UX Designer
              <br />
              Based in
            </span>
            <span className="font-bold"> Indonesia 🇮🇩</span>
          </h1>

          <p className="relative w-full max-w-[782px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#808690] text-sm sm:text-base text-center tracking-[0] leading-[1.3] sm:leading-[20.8px]">
            Passionate UI/UX Designer experienced in various mobile and web
            design projects with expertise in creating visually appealing and
            user-friendly interfaces.
          </p>

          <Button className="w-32 sm:w-40 h-10 sm:h-12 bg-[#3d46c9] rounded-[999px] text-sm sm:text-base [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white hover:bg-[#3d46c9]/90 transition-colors">
            Download CV
          </Button>
        </div>
      </div>

      {/* Designer Roles Banner */}
      <div className="flex w-full items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-11 px-4 py-6 sm:py-8 relative bg-[linear-gradient(0deg,rgba(36,37,40,1)_32%,rgba(128,131,142,1)_60%)] overflow-x-auto">
        {designerRoles.map((role, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-5 relative flex-[0_0_auto] min-w-fit"
          >
            <img
              className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              alt="Ornament"
              src="/ornament-48.svg"
            />
            <div className="w-fit font-medium text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.2] sm:leading-[36.0px] whitespace-nowrap relative [font-family:'Plus_Jakarta_Sans',Helvetica] tracking-[0]">
              {role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};