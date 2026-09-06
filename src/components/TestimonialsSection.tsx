import React from 'react';
import { Component as TypewriterTestimonial } from '@/components/ui/typewriter-testimonial';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      image: '/images/hanane_benalia_image_copy.jpeg',
      audio: '',
      text: 'SamysAI gave our website a much clearer direction and helped us improve how people find us online. The SEO work felt thoughtful and practical, and the site now represents our business in a much more professional way.',
      name: 'Hanane Benalia',
      jobtitle: 'Website and SEO Client'
    },
    {
      image: '/images/image.png',
      audio: '',
      text: 'We wanted a cold email system that we could rely on without managing every detail ourselves. SamysAI built the dashboard, organised the outreach and set up the follow ups for us. It has made our lead generation much easier to manage.',
      name: 'David Weber',
      jobtitle: 'Cold Email Dashboard Client'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              Client Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Verified client experiences and outcome reports from our latest AI automation deployments.
          </p>
        </div>
        
        <div className="flex justify-center">
          <TypewriterTestimonial testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;