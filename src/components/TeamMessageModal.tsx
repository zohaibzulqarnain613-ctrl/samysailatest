import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TeamMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  tagline: string;
  message: string;
  color: string;
}

const TeamMessageModal: React.FC<TeamMessageModalProps> = ({
  isOpen,
  onClose,
  name,
  role,
  tagline,
  message,
  color,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowContent(false);
      setDisplayedText('');

      setTimeout(() => {
        setShowContent(true);
      }, 300);

      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= message.length) {
          setDisplayedText(message.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 20);

      return () => clearInterval(typingInterval);
    }
  }, [isOpen, message]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: `0 20px 60px ${color}30`,
            }}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Decorative gradient */}
            <div
              className="absolute inset-0 rounded-3xl opacity-10 blur-3xl"
              style={{
                background: `radial-gradient(circle at top right, ${color}, transparent)`,
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Header with fade-in animation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                    }}
                  >
                    {name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">{name}</h2>
                    <p
                      className="text-lg font-semibold"
                      style={{ color: color }}
                    >
                      {role}
                    </p>
                  </div>
                </div>

                {/* Tagline with subtle animation */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={showContent ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-400 italic text-sm border-l-2 pl-4 py-2"
                  style={{ borderColor: color }}
                >
                  "{tagline}"
                </motion.p>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={showContent ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px mb-8 origin-left"
                style={{
                  background: `linear-gradient(to right, ${color}, transparent)`,
                }}
              />

              {/* Typewriter message */}
              <div className="text-gray-300 leading-relaxed text-base space-y-4 min-h-[200px]">
                {displayedText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={displayedText.length >= message.length ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <p className="text-gray-400 text-sm">
                  — {name}
                </p>
                <p className="text-gray-500 text-xs">{role}, SamysAI</p>
              </motion.div>
            </div>

            {/* Decorative corner accents */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
              style={{ background: color }}
            />
            <div
              className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-20"
              style={{ background: color }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMessageModal;
