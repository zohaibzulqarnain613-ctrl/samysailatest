import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Users, Send, BarChart, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return {
      width: 0,
      height: 0,
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export const VerticalAccordionCustom = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 w-full h-full">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[500px] w-full max-w-7xl mx-auto shadow-2xl overflow-hidden rounded-xl border border-gray-800">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: LucideIcon;
  title: string;
  imgSrc: string;
  description: string;
}

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 p-4 border-r-[1px] border-b-[1px] border-gray-700 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-semibold rotate-180 text-gray-100 tracking-wide"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-semibold text-gray-100">{title}</span>
        <div className="w-8 lg:w-full aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 text-white grid place-items-center rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} />
        </div>
        <span
          className="w-4 h-4 bg-gradient-to-br from-gray-900 to-gray-800 group-hover:from-gray-800 group-hover:to-gray-700 transition-all duration-300 border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-gray-700 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-6 py-4 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-sm text-white w-full"
            >
              <p className="text-lg leading-relaxed">{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
},
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "250px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Collect Leads",
    Icon: Users,
    imgSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description:
      "Import leads from LinkedIn, websites, or your CRM in seconds with AI-powered data extraction. Our intelligent system identifies and captures prospect information automatically, building your pipeline effortlessly.",
  },
  {
    id: 2,
    title: "Automate Outreach",
    Icon: Send,
    imgSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description:
      "Engage prospects with personalized AI-powered cold emails and intelligent sequences. Our automation crafts compelling messages tailored to each recipient, maximizing response rates while you focus on closing deals.",
  },
  {
    id: 3,
    title: "Track Engagement",
    Icon: BarChart,
    imgSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description:
      "Monitor opens, clicks, and replies in real-time with advanced analytics and insights. Get instant notifications when prospects engage and understand what resonates with your audience through detailed performance metrics.",
  },
  {
    id: 4,
    title: "Scale Your Business",
    Icon: Rocket,
    imgSrc:
      "https://images.unsplash.com/photo-1�611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    description:
      "Use AI insights to optimize campaigns, increase conversions, and grow exponentially. Our platform learns from every interaction, continuously improving your outreach strategy and helping you close more deals faster.",
  },
];
