import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 bg-[#eff0ff] rounded-[24px] sm:rounded-[48px] overflow-hidden relative">
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-8 md:px-16 lg:px-[120px] py-8 sm:py-16">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#242528] font-['Plus_Jakarta_Sans',Helvetica] text-center leading-[1.2]">
            About
          </h2>

          <p className="max-w-[782px] text-base sm:text-lg md:text-xl text-center font-['Plus_Jakarta_Sans',Helvetica] leading-[1.5] sm:leading-[30px] px-4">
            <br />
            I&apos;m a{" "}
            <span className="font-semibold text-[#525ceb]">UI/UX Designer</span>{" "}
            with 2 years of experience creating user-focused digital solutions.
            Skilled in UI/UX research, interaction design, and information
            architecture, I&apos;ve completed 15+ high-fidelity projects and
            successfully developed a design system that reduced development time
            by 40% through consistent and reusable components while accelerated
            project timelines by 30% delivering impactful digital solutions.
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-4 mb-8 sm:mb-16">
        <img
          className="w-[250px] h-[270px] sm:w-[300px] sm:h-[324px] md:w-[350px] md:h-[378px] lg:w-[408px] lg:h-[441.27px] object-cover"
          alt="Profile illustration"
          src="/image-2.png"
        />
      </div>

      <img
        className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
        alt="Background pattern"
        src="/image-4.png"
      />
    </section>
  );
};