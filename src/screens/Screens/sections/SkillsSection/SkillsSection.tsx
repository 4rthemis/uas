import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SkillsSection = (): JSX.Element => {
  // Skills data for mapping
  const skillsData = [
    {
      title: "UI/UX Design",
      description:
        "Craft intuitive and visually appealing user interfaces while focusing on seamless user experiences.",
      icon: "/frame-4.svg",
    },
    {
      title: "Low-Code Development",
      description:
        "Utilize low-code platforms to rapidly prototype and develop efficient solutions with minimal coding.",
      icon: "/frame-4.svg",
    },
    {
      title: "Interaction Design",
      description:
        "Design interactive elements that enhance user engagement and ensure smooth interactions.",
      icon: "/frame-4.svg",
    },
    {
      title: "Web Design",
      description:
        "Create responsive and visually striking web experiences tailored to user needs and behavior.",
      icon: "/frame-4.svg",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8 md:px-16 lg:px-[120px] py-8 relative self-stretch w-full">
      <div className="flex flex-col items-center gap-6 sm:gap-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.2] sm:leading-[52.8px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#242528] tracking-[0] text-center">
          Skills
        </h2>

        <p className="w-full max-w-[782px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#808690] text-base sm:text-lg md:text-xl text-center tracking-[0] leading-[1.5] sm:leading-[30px] px-4">
          I specialize in UI/UX Design, with a focus on solving problems through
          thoughtful user experience, research, and design innovation.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 self-stretch w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-[1200px]">
          {skillsData.map((skill, index) => (
            <Card
              key={index}
              className="flex flex-col w-full h-[220px] sm:h-[240px] md:h-[260px] bg-[#fff7ea] rounded-xl shadow-[5px_4px_100px_#feb4331a] border-none hover:shadow-[5px_4px_120px_#feb43330] transition-shadow duration-300"
            >
              <CardContent className="flex flex-col items-start gap-3 p-4 sm:p-5 pt-6 sm:pt-8 md:pt-10">
                <img
                  className="flex-[0_0_auto] mt-[-0.75px] ml-[-0.75px] w-8 h-8 sm:w-10 sm:h-10"
                  alt="Skill icon"
                  src={skill.icon}
                />

                <h3 className="font-[number:var(--small-bold-font-weight)] text-[#242528] text-lg sm:text-xl md:text-[length:var(--small-bold-font-size)] leading-[var(--small-bold-line-height)] font-small-bold tracking-[var(--small-bold-letter-spacing)] [font-style:var(--small-bold-font-style)] self-stretch">
                  {skill.title}
                </h3>

                <p className="flex-1 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#242528] text-xs sm:text-sm tracking-[0] leading-[1.5] sm:leading-[21px]">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};