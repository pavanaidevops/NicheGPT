import React from 'react';
import { Brain, TrendingUp, Search, Target } from 'lucide-react';

export const LoadingAnimation: React.FC = () => {
  const steps = [
    { icon: Search, text: "Scanning Reddit discussions...", delay: 0 },
    { icon: TrendingUp, text: "Analyzing Google Trends data...", delay: 1000 },
    { icon: Target, text: "Evaluating Product Hunt launches...", delay: 2000 },
    { icon: Brain, text: "Generating AI insights...", delay: 3000 }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Analyzing Market Data
          </h2>
          <p className="text-lg text-gray-600">
            Our AI is processing thousands of data points to find your perfect niche
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-4 opacity-0 animate-fade-in"
              style={{ animationDelay: `${step.delay}ms` }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <step.icon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-900">{step.text}</p>
                <div className="w-64 bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full animate-progress"
                    style={{ animationDelay: `${step.delay}ms` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Reddit Posts Analyzed</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">1.2M</div>
            <div className="text-gray-600">Search Queries Processed</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">15K</div>
            <div className="text-gray-600">Product Hunt Launches</div>
          </div>
        </div>
      </div>
    </section>
  );
};