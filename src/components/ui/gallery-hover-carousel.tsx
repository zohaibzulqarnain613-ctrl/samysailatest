import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselApi {
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
}

interface GalleryHoverCarouselItem {
  id: string;
  title: string;
  summary: string;
  url?: string;
  image?: string;
  initial?: string;
  onClick?: () => void;
}

export default function GalleryHoverCarousel({
  heading = "Featured Projects",
  items = [],
}: {
  heading?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    update();
    carouselApi.on("select", update);
    return () => {
      carouselApi.off("select", update);
    };
  }, [carouselApi]);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-white leading-relaxed">
              {heading}{" "}
              <span className="text-gray-400 text-sm sm:text-base lg:text-xl">
                Meet the talented individuals driving innovation at SamysAI.
              </span>
            </h3>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="h-10 w-10 rounded-full bg-white/5 border-white/10 hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="h-10 w-10 rounded-full bg-white/5 border-white/10 hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        <div className="w-full max-w-full">
          <Carousel
            initialIndex={0}
            onIndexChange={(index) => {
              if (carouselApi) {
                const update = () => {
                  setCanScrollPrev(carouselApi.canScrollPrev());
                  setCanScrollNext(carouselApi.canScrollNext());
                };
                update();
              }
            }}
            className="relative w-full max-w-full"
          >
            <CarouselContent className="w-full max-w-full">
              {items.map((item) => {
                const Component = item.onClick ? 'button' : 'a';
                const props = item.onClick
                  ? { onClick: item.onClick, type: 'button' as const }
                  : { href: item.url || '#' };

                return (
                  <CarouselItem key={item.id} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                    <Component
                      {...props}
                      className="group block relative w-full h-[300px] md:h-[350px] cursor-pointer"
                    >
                      <Card className="overflow-hidden rounded-xl h-full w-full rounded-3xl border-white/10 bg-white/5 hover:border-blue-400/50 transition-all duration-300">
                        <div className="relative h-full w-full transition-all duration-500 group-hover:h-1/2">
                          {item.image ? (
                            <img
                              width={400}
                              height={300}
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover object-center"
                            />
                          ) : item.initial ? (
                            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
                              <div className="text-white text-8xl font-bold relative z-10 group-hover:scale-110 transition-transform duration-500">{item.initial}</div>
                            </div>
                          ) : null}
                          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full px-4 transition-all duration-500 group-hover:h-1/2 group-hover:flex flex-col justify-center bg-gray-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100">
                          <h3 className="text-lg font-medium md:text-xl text-white">{item.title}</h3>
                          <p className="text-gray-300 text-sm md:text-base line-clamp-2">
                            {item.summary}
                          </p>
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute bottom-2 right-2 border border-white/20 bg-white/5 hover:bg-white/10 hover:-rotate-45 transition-all duration-500 rounded-full mt-2 px-0 flex items-center gap-1 text-blue-400 hover:text-blue-300"
                          >
                            <ArrowRight className="size-4" />
                          </Button>
                        </div>
                      </Card>
                    </Component>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
