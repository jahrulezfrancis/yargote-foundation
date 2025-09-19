"use client";


import React, { useState, useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "2015",
    title: "Foundation Established",
    description: "Yargote Foundation officially launched with focus on empowering the boy child, marking the beginning of our mission to create positive change in communities."
  },
  {
    year: "2017",
    title: "First Mentorship Circles",
    description: "Launched our flagship Mentorship Circles program with community leaders, establishing the foundation for meaningful mentor-mentee relationships."
  },
  {
    year: "2019",
    title: "Safe Spaces Initiative",
    description: "Established community hubs providing safe spaces for boys to express themselves, access counseling, and develop essential life skills."
  },
  {
    year: "2021",
    title: "Life Skills Curriculum Launch",
    description: "Introduced structured curriculum covering discipline, leadership, and financial literacy, providing comprehensive personal development."
  },
  {
    year: "2023",
    title: "Community Advocacy Expansion",
    description: "Expanded advocacy events to bring greater visibility to boy child issues, strengthening community engagement and support."
  },
];

type Milestone = {
  year: string;
  title: string;
  description: string;
};

type TimelineNodeProps = {
  milestone: Milestone;
  index: number;
  isActive: boolean;
  isVisible: boolean;
  isLeft: boolean;
};

const TimelineNode: React.FC<TimelineNodeProps> = ({ milestone, index, isActive, isVisible, isLeft }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={nodeRef}
      className={`timeline-item opacity-0 transform transition-all duration-700 ease-out ${
        isLeft ? 'translate-x-8' : '-translate-x-8'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Mobile Layout */}
      <div className="block md:hidden mb-12">
        <div className="flex items-start gap-4">
          {/* Timeline node */}
          <div className="flex-shrink-0 relative">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white font-bold text-sm shadow-lg transform transition-all duration-500 ${
              isActive ? 'scale-110 shadow-xl ring-4 ring-gray-200' : 'hover:scale-105'
            }`}>
              {milestone.year.slice(-2)}
            </div>
            {index < milestones.length - 1 && (
              <div className="absolute left-1/2 top-12 w-0.5 h-16 bg-gradient-to-b from-gray-800 to-gray-300 transform -translate-x-px"></div>
            )}
          </div>
          
          {/* Content */}
          <Card className={`flex-1 transition-all duration-500 border-l-4 border-gray-800 hover:shadow-lg ${
            isActive ? 'shadow-lg bg-gray-50' : 'bg-white'
          }`}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-bold text-gray-900">{milestone.title}</h3>
                  <Badge variant="outline" className="text-gray-700 border-gray-300 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {milestone.year}
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{milestone.description}</p>
                <div className={`w-full h-1 bg-gray-200 rounded-full overflow-hidden`}>
                  <div className={`h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full transition-all duration-1000 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block mb-16">
        <div className="relative">
          {/* Central timeline line continues in background */}
          
          <div className={`grid grid-cols-12 gap-8 items-center ${isLeft ? '' : 'direction-rtl'}`}>
            {/* Content side */}
            <div className={`col-span-5 ${isLeft ? 'text-right' : 'text-left'}`}>
              <Card className={`transition-all duration-500 border-2 hover:shadow-xl transform hover:-translate-y-1 ${
                isActive 
                  ? 'shadow-xl bg-gray-50 border-gray-800 scale-105' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className={`flex items-center gap-3 ${isLeft ? 'justify-end' : 'justify-start'} flex-wrap`}>
                      <Badge variant="outline" className="text-gray-700 border-gray-300">
                        <Calendar className="w-3 h-3 mr-1" />
                        {milestone.year}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    <div className="flex items-center gap-2 opacity-60">
                      <CheckCircle className="w-4 h-4 text-gray-700" />
                      <span className="text-sm text-gray-600">Milestone Achieved</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline node */}
            <div className="col-span-2 flex justify-center relative z-10">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white font-bold shadow-2xl transform transition-all duration-500 ${
                isActive ? 'scale-125 ring-8 ring-gray-200 ring-opacity-50' : 'hover:scale-110'
              }`}>
                <div className="text-center">
                  <div className="text-lg font-bold">{milestone.year.slice(-2)}</div>
                </div>
              </div>
            </div>

            {/* Empty space on the other side */}
            <div className="col-span-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .timeline-item.animate-in {
        opacity: 1 !important;
        transform: translateX(0) !important;
      }
      
      .direction-rtl {
        direction: rtl;
      }
      
      .direction-rtl > * {
        direction: ltr;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      
      .slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 fade-in-up">
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
            Our Journey
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Timeline of Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Key milestones in our mission to empower boys and transform communities across the years
          </p>
        </div>

        {/* Timeline controls for desktop */}
        <div className="hidden md:flex justify-center mb-12 fade-in-up">
          <div className="flex items-center gap-3 bg-white rounded-full p-3 shadow-lg border border-gray-200">
            {milestones.map((milestone, index) => (
              <button
                key={index}
                className={`group relative px-4 py-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="text-sm font-medium">{milestone.year}</span>
                <div className={`absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-gray-900 transform -translate-x-1/2 transition-all duration-300 ${
                  index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Central timeline line for desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-px">
          <div className="w-0.5 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-300 opacity-30" 
               style={{ height: `${milestones.length * 200}px` }}>
          </div>
        </div>

        {/* Timeline content */}
        <div ref={timelineRef} className="relative">
          {milestones.map((milestone, index) => (
            <TimelineNode
              key={index}
              milestone={milestone}
              index={index}
              isActive={index === activeIndex}
              isVisible={visibleItems.has(index)}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Summary statistics */}
        <div className="mt-20 slide-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "9", label: "Years of Impact", delay: "0ms" },
              { number: "5", label: "Core Programs", delay: "100ms" },
              { number: "500+", label: "Boys Impacted", delay: "200ms" },
              { number: "50+", label: "Communities", delay: "300ms" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl fade-in-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: "600ms" }}>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span className="font-semibold">Join Our Journey</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;