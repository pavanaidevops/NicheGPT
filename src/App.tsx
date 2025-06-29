import React, { useState } from 'react';
import { Header } from './components/Header';
import { NicheGenerator, GenerationPreferences } from './components/NicheGenerator';
import { LoadingAnimation } from './components/LoadingAnimation';
import { ResultsDisplay, NicheResults } from './components/ResultsDisplay';
import { generateNicheResults, exportResults } from './utils/nicheGenerator';

function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<NicheResults | null>(null);

  const handleGenerate = async (preferences: GenerationPreferences) => {
    setIsGenerating(true);
    setResults(null);
    
    try {
      const nicheResults = await generateNicheResults(preferences);
      setResults(nicheResults);
    } catch (error) {
      console.error('Error generating niche results:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExport = () => {
    if (results) {
      exportResults(results);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {!isGenerating && !results && (
        <NicheGenerator onGenerate={handleGenerate} isGenerating={isGenerating} />
      )}
      
      {isGenerating && <LoadingAnimation />}
      
      {results && !isGenerating && (
        <ResultsDisplay results={results} onExport={handleExport} />
      )}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NicheGPT</h3>
              <p className="text-gray-400">
                Discover profitable SaaS niches with AI-powered market analysis.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Market Analysis</li>
                <li>Business Planning</li>
                <li>Landing Page Generation</li>
                <li>Revenue Projections</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Started</h4>
              <p className="text-gray-400 mb-4">
                Ready to find your next big opportunity?
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Try NicheGPT Free
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NicheGPT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;