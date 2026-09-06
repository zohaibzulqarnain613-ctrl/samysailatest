import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FAQ = ({
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className,
  ...props
}: {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: Record<string, Array<{ question: string; answer: string }>>;
  className?: string;
  [key: string]: any;
}) => {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background px-4 py-12 text-foreground",
        className
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <FAQList
        faqData={faqData}
        selected={selectedCategory}
      />
    </section>
  );
};

const FAQHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="relative z-10 flex flex-col items-center justify-center px-2">
    <span className="mb-4 sm:mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-medium text-transparent text-sm sm:text-base text-center">
      {subtitle}
    </span>
    <h2 className="mb-6 text-3xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight">{title}</h2>
    <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" />
  </div>
);

const FAQTabs = ({
  categories,
  selected,
  setSelected
}: {
  categories: Record<string, string>;
  selected: string;
  setSelected: (key: string) => void;
}) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-8 border-b border-white/5 pb-4">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap px-4 py-2 text-sm font-semibold transition-all duration-300 tracking-tight",
          selected === key
            ? "text-white border-b-2 border-primary"
            : "text-gray-500 hover:text-gray-300 border-b-2 border-transparent"
        )}
      >
        <span className="relative z-10">{label}</span>
      </button>
    ))}
  </div>
);

const FAQList = ({
  faqData,
  selected
}: {
  faqData: Record<string, Array<{ question: string; answer: string }>>;
  selected: string;
}) => (
  <div className="mx-auto mt-12 max-w-3xl">
    <AnimatePresence mode="wait">
      {Object.entries(faqData).map(([category, questions]) => {
        if (selected === category) {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "backIn" }}
              className="space-y-4"
            >
              {questions.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </motion.div>
          );
        }
        return null;
      })}
    </AnimatePresence>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-xl border transition-colors",
        isOpen ? "bg-muted/50" : "bg-card"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span
          className={cn(
            "text-lg font-medium transition-colors",
            isOpen ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-foreground" : "text-muted-foreground"
            )}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "16px" : "0px"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-4"
      >
        <p className="text-muted-foreground">{answer}</p>
      </motion.div>
    </motion.div>
  );
};
