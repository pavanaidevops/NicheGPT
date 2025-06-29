import React from 'react';
import { Sparkles, TrendingUp, Target } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 mr-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
              Niche<span className="text-emerald-400">GPT</span>
            </h1>
          </div>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover untapped SaaS micro-niches with high profit potential using AI-powered market analysis
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center text-white/90">
              <TrendingUp className="h-5 w-5 mr-2 text-emerald-400" />
              <span>Live Data Analysis</span>
            </div>
            <div className="flex items-center text-white/90">
              <Target className="h-5 w-5 mr-2 text-emerald-400" />
              <span>Market Validation</span>
            </div>
            <div className="flex items-center text-white/90">
              <Sparkles className="h-5 w-5 mr-2 text-emerald-400" />
              <span>AI-Powered Insights</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};