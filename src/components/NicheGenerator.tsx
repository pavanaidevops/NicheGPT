import React, { useState } from 'react';
import { Search, Loader2, Brain, Users, DollarSign } from 'lucide-react';

interface NicheGeneratorProps {
  onGenerate: (preferences: GenerationPreferences) => void;
  isGenerating: boolean;
}

export interface GenerationPreferences {
  industry: string;
  targetAudience: string;
  budgetRange: string;
  timeline: string;
  complexity: string;
}

export const NicheGenerator: React.FC<NicheGeneratorProps> = ({ onGenerate, isGenerating }) => {
  const [preferences, setPreferences] = useState<GenerationPreferences>({
    industry: '',
    targetAudience: '',
    budgetRange: '',
    timeline: '',
    complexity: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(preferences);
  };

  const industries = [
    'Healthcare & Wellness', 'Education & E-learning', 'Finance & Fintech',
    'Real Estate', 'E-commerce & Retail', 'Marketing & Advertising',
    'HR & Recruitment', 'Legal & Compliance', 'Manufacturing',
    'Construction', 'Agriculture', 'Entertainment', 'Travel & Hospitality'
  ];

  const audiences = [
    'Small Businesses (1-50 employees)', 'Mid-size Companies (51-500 employees)',
    'Enterprise (500+ employees)', 'Freelancers & Solopreneurs',
    'Content Creators', 'Non-profits', 'Government Agencies'
  ];

  const budgets = [
    'Bootstrap ($0-10K)', 'Startup ($10K-100K)', 'Scale-up ($100K-1M)', 'Growth ($1M+)'
  ];

  const timelines = [
    '3-6 months (MVP)', '6-12 months (Full Product)', '1-2 years (Market Leader)'
  ];

  const complexities = [
    'Simple (Basic CRUD operations)', 'Moderate (API integrations)', 
    'Complex (AI/ML features)', 'Advanced (Enterprise-grade)'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Your Next SaaS Opportunity
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answer a few questions to get personalized niche recommendations based on real market data
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                <Brain className="inline h-4 w-4 mr-1" />
                Target Industry
              </label>
              <select
                value={preferences.industry}
                onChange={(e) => setPreferences({ ...preferences, industry: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select an industry...</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                <Users className="inline h-4 w-4 mr-1" />
                Target Audience
              </label>
              <select
                value={preferences.targetAudience}
                onChange={(e) => setPreferences({ ...preferences, targetAudience: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select target audience...</option>
                {audiences.map((audience) => (
                  <option key={audience} value={audience}>{audience}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                <DollarSign className="inline h-4 w-4 mr-1" />
                Budget Range
              </label>
              <select
                value={preferences.budgetRange}
                onChange={(e) => setPreferences({ ...preferences, budgetRange: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select budget range...</option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Timeline to Market
              </label>
              <select
                value={preferences.timeline}
                onChange={(e) => setPreferences({ ...preferences, timeline: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select timeline...</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Complexity
              </label>
              <select
                value={preferences.complexity}
                onChange={(e) => setPreferences({ ...preferences, complexity: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select complexity level...</option>
                {complexities.map((complexity) => (
                  <option key={complexity} value={complexity}>{complexity}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Analyzing Market Data...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2" />
                  Generate Niche Ideas
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};