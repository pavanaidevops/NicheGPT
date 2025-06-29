import React from 'react';
import { 
  Lightbulb, 
  Users, 
  DollarSign, 
  Target, 
  Globe, 
  TrendingUp, 
  Download,
  Share2,
  Bookmark,
  CheckCircle
} from 'lucide-react';

export interface NicheResults {
  businessIdea: {
    name: string;
    description: string;
    problemSolved: string;
    uniqueValue: string;
    marketSize: string;
    competition: string;
  };
  mvpPlan: {
    coreFeatures: string[];
    pricing: {
      model: string;
      tiers: Array<{
        name: string;
        price: string;
        features: string[];
      }>;
    };
    targetUsers: string[];
    techStack: string[];
  };
  landingPage: {
    headline: string;
    subheadline: string;
    benefits: string[];
    cta: string;
    socialProof: string[];
  };
  domains: string[];
  goToMarket: {
    channels: string[];
    timeline: Array<{
      phase: string;
      duration: string;
      activities: string[];
    }>;
    metrics: string[];
  };
  monetization: {
    revenueStreams: string[];
    projections: Array<{
      period: string;
      revenue: string;
      customers: string;
    }>;
  };
}

interface ResultsDisplayProps {
  results: NicheResults;
  onExport: () => void;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, onExport }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Your SaaS Niche Analysis
            </h2>
            <p className="text-gray-600">
              Complete business plan generated from real market data
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={onExport}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Business Idea */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 rounded-full p-3 mr-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Business Idea</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {results.businessIdea.name}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {results.businessIdea.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Problem Solved</h5>
                    <p className="text-gray-600 text-sm">{results.businessIdea.problemSolved}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Unique Value</h5>
                    <p className="text-gray-600 text-sm">{results.businessIdea.uniqueValue}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Market Size</h5>
                    <p className="text-gray-600 text-sm">{results.businessIdea.marketSize}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Competition</h5>
                    <p className="text-gray-600 text-sm">{results.businessIdea.competition}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MVP Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">MVP Plan</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Core Features</h4>
                  <ul className="space-y-2">
                    {results.mvpPlan.coreFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Target Users</h4>
                  <ul className="space-y-2">
                    {results.mvpPlan.targetUsers.map((user, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Users className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                        {user}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Pricing Tiers</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {results.mvpPlan.pricing.tiers.map((tier, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900">{tier.name}</h5>
                      <p className="text-2xl font-bold text-purple-600 my-2">{tier.price}</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {tier.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-emerald-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Landing Page */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 rounded-full p-3 mr-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Landing Page Copy</h3>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-3xl font-bold text-gray-900 mb-2">
                  {results.landingPage.headline}
                </h4>
                <p className="text-xl text-gray-600 mb-6">
                  {results.landingPage.subheadline}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Benefits</h5>
                    <ul className="space-y-2">
                      {results.landingPage.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Social Proof</h5>
                    <ul className="space-y-2">
                      {results.landingPage.socialProof.map((proof, index) => (
                        <li key={index} className="text-gray-700 text-sm">
                          "{proof}"
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-8 rounded-lg">
                  {results.landingPage.cta}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Domain Names */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Domain Ideas</h3>
              </div>
              <ul className="space-y-2">
                {results.domains.map((domain, index) => (
                  <li key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-900 font-mono">{domain}</span>
                    <span className="text-emerald-600 text-xs">Available</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Revenue Projections */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-5 w-5 text-emerald-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Revenue Projections</h3>
              </div>
              <div className="space-y-4">
                {results.monetization.projections.map((projection, index) => (
                  <div key={index} className="border-l-4 border-emerald-500 pl-4">
                    <div className="font-semibold text-gray-900">{projection.period}</div>
                    <div className="text-2xl font-bold text-emerald-600">{projection.revenue}</div>
                    <div className="text-sm text-gray-600">{projection.customers} customers</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Go-to-Market Channels */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Marketing Channels</h3>
              </div>
              <ul className="space-y-2">
                {results.goToMarket.channels.map((channel, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                    {channel}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};