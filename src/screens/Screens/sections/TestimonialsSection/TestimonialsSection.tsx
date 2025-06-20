import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      quote:
        "Syahrul stood out in the UI/UX Bootcamp Myskill with his strong design and presentation skills, along with great dedication to learning. We truly appreciate his contributions and wish him continued success ahead.",
      image: "/image-10.png",
      name: "Mellynda Novi",
      role: "UIUX Designer",
      bgColor: "bg-white",
      textColor: "text-[#242528]",
      roleColor: "text-[#808690]",
    },
    {
      quote:
        "I've known Syahrul since our school days, and now we're lucky enough to work together in the same team. As a UI/UX Designer, I've been consistently impressed by his skills and dedication to every project he takes on. Syahrul has an amazing ability to create designs that are not only visually appealing but also incredibly user-friendly.",
      image: "/image-11.png",
      name: "Rigan Nur Fauzi",
      role: "Frontend Developer",
      bgColor: "bg-white",
      textColor: "text-[#242528]",
      roleColor: "text-[#808690]",
    },
    {
      quote:
        "I highly recommend Syahrul as a talented and dedicated professional. His expertise in UI/UX design and product design is truly impressive. I have enjoyed working with him at my current company, and he consistently demonstrates creativity, attention to detail, and a strong commitment to delivering high-quality work.",
      image: "/image-12.png",
      name: "Rifqi Ikhsan Rizkillah",
      role: "Frontend Developer",
      bgColor: "bg-[#525ceb]",
      textColor: "text-white",
      roleColor: "text-[#dbdbdb]",
    },
    {
      quote:
        "I highly recommend Syahrul Awaludin for his exceptional talents in UI/UX design and collaborative abilities. Having worked closely with Syahrul, I've consistently been impressed by his keen eye for user-centered design and ability to transform complex requirements into elegant, intuitive interfaces.",
      image: "/image-13.png",
      name: "Muh. Taqi Dzakwan",
      role: "UI Designer",
      bgColor: "bg-white",
      textColor: "text-[#242528]",
      roleColor: "text-[#808690]",
    },
    {
      quote:
        "Syahrul stood out in the UI/UX Bootcamp Myskill with his strong design and presentation skills, along with great dedication to learning. We truly appreciate his contributions and wish him continued success ahead.",
      image: "/image-14.png",
      name: "Arifin Habibi",
      role: "UIUX Designer",
      bgColor: "bg-white",
      textColor: "text-[#242528]",
      roleColor: "text-[#808690]",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 w-full py-8">
      <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-[1200px] w-full px-4 sm:px-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-center leading-[1.2] sm:leading-[52.8px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#242528] tracking-[0]">
          Testimonials
        </h2>
        <p className="max-w-[782px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#808690] text-base sm:text-lg md:text-xl text-center tracking-[0] leading-[1.5] sm:leading-[30px] px-4">
          What others say about me
        </p>
      </div>

      <Carousel className="w-full max-w-[1440px]">
        <CarouselContent className="px-4 sm:px-8">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/1 md:basis-1/2 pl-4"
            >
              <Card
                className={`${testimonial.bgColor} rounded-2xl sm:rounded-3xl min-h-[380px] sm:min-h-[420px] md:min-h-[426px] border-none shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <CardContent className="flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8 h-full">
                  <p
                    className={`flex-1 self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic ${testimonial.textColor} text-base sm:text-lg md:text-xl text-center tracking-[0] leading-[1.4] sm:leading-normal`}
                  >
                    "{testimonial.quote}"
                  </p>
                  <div className="flex flex-col w-full max-w-[285px] items-center gap-3 sm:gap-4">
                    <img
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] object-cover rounded-full"
                      alt={`${testimonial.name} profile picture`}
                      src={testimonial.image}
                    />
                    <h3
                      className={`self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold ${testimonial.textColor} text-xl sm:text-2xl md:text-3xl text-center tracking-[0] leading-normal`}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className={`self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal ${testimonial.roleColor} text-sm sm:text-base text-center tracking-[0] leading-normal`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};