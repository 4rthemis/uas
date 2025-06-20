import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = (): JSX.Element => {
  // Project data for mapping
  const projects = [
    {
      title: "Tanisolusi - Smart Agriculture",
      category: "UI/UX Case Study",
      categoryColor: "text-[#dbdbdb]",
      image: "/image-3.png",
      hasArrow: true,
      bgColor: "bg-[#3d46c9]",
      textColor: "text-white",
      confidential: false,
    },
    {
      title: "KATO -  Calorie Hydration Tracking",
      category: "Exploration",
      categoryColor: "text-[#808690]",
      image: "/image-5.png",
      hasArrow: true,
      bgColor: "bg-white",
      textColor: "text-[#242528]",
      confidential: false,
    },
    {
      title: "TiketKita -  Train Booking",
      category: "Exploration",
      categoryColor: "text-[#808690]",
      image: "/image-6.png",
      hasArrow: true,
      bgColor: "bg-white",
      textColor: "text-[#242528]",
      confidential: false,
    },
    {
      title: "Gluca - HealthCare App",
      category: "UI/UX Case Study",
      categoryColor: "text-[#808690]",
      image: "/image-7.png",
      hasArrow: true,
      bgColor: "bg-white",
      textColor: "text-[#242528]",
      confidential: false,
    },
    {
      title: "Ngiklanmurah - Ads Hub",
      category: "Work",
      categoryColor: "text-[#808690]",
      image: "/image-8.png",
      hasArrow: false,
      bgColor: "bg-white",
      textColor: "text-[#242528]",
      confidential: true,
    },
    {
      title: "Dangdut Mania - Music",
      category: "Work",
      categoryColor: "text-[#808690]",
      image: "/image-9.png",
      hasArrow: false,
      bgColor: "bg-white",
      textColor: "text-[#242528]",
      confidential: true,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8 md:px-16 lg:px-[120px] py-8 relative self-stretch w-full">
      <div className="flex flex-col items-center gap-6 sm:gap-8 relative self-stretch w-full">
        <h2 className="self-stretch font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-center leading-[1.2] sm:leading-[52.8px] relative mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#242528] tracking-[0]">
          Projects
        </h2>

        <p className="relative w-full max-w-[782px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#808690] text-base sm:text-lg md:text-xl text-center tracking-[0] leading-[1.5] sm:leading-[30px] px-4">
          A selection of my projects, where I turn ideas into seamless,
          user-friendly digital experiences.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 relative self-stretch w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 w-full max-w-[1200px]">
          {projects.map((project, index) => (
            <Card
              key={`project-${index}`}
              className={`p-4 sm:p-6 md:p-8 ${project.bgColor} flex flex-col lg:flex-row w-full items-center justify-center gap-4 sm:gap-5 md:gap-6 rounded-2xl sm:rounded-3xl border-none shadow-none hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="flex flex-col items-start gap-3 sm:gap-4 relative flex-1 p-0 w-full lg:w-auto">
                <div className="flex flex-col items-start gap-3 sm:gap-4 relative self-stretch w-full">
                  {project.confidential ? (
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 relative self-stretch w-full">
                      <div
                        className={`relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium ${project.categoryColor} text-sm sm:text-base tracking-[0] leading-6 whitespace-nowrap`}
                      >
                        {project.category}
                      </div>
                      <div className="flex items-center gap-1.5 relative">
                        <div className="relative w-3 h-3 bg-[#eb5f5f] rounded-md" />
                        <Badge className="bg-transparent p-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ec5f5f] text-sm sm:text-base">
                          Confidential
                        </Badge>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`relative w-full mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium ${project.categoryColor} text-sm sm:text-base tracking-[0] leading-6`}
                    >
                      {project.category}
                    </div>
                  )}

                  <div
                    className={`relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold ${project.textColor} text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-[1.2] sm:leading-[1.3] md:leading-[54px]`}
                  >
                    {project.title}
                  </div>
                </div>

                {project.hasArrow && (
                  <img
                    className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                    alt="North east"
                    src="/north-east.svg"
                  />
                )}
              </CardContent>

              <img
                className="relative w-full lg:w-[280px] xl:w-[349px] h-[200px] sm:h-[220px] md:h-[250px] lg:h-[275px] object-cover rounded-lg"
                alt={`${project.title} preview`}
                src={project.image}
              />
            </Card>
          ))}
        </div>
      </div>

      <Button className="w-full max-w-[400px] h-12 sm:h-14 md:h-16 bg-[#3d46c9] rounded-[999px] hover:bg-[#3d46c9]/90 transition-colors">
        <span className="flex-1 text-lg sm:text-xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-white text-center tracking-[0] leading-[normal]">
          Explore More
        </span>
      </Button>
    </section>
  );
};