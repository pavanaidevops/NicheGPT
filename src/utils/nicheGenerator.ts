import { GenerationPreferences, NicheResults } from '../components/NicheGenerator';

export const generateNicheResults = (preferences: GenerationPreferences): Promise<NicheResults> => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      const results = generateMockResults(preferences);
      resolve(results);
    }, 5000);
  });
};

const generateMockResults = (preferences: GenerationPreferences): NicheResults => {
  // Generate realistic results based on preferences
  const industryNiches = {
    'Healthcare & Wellness': {
      name: 'MindfulCare Pro',
      description: 'AI-powered mental health management platform for healthcare providers to track patient progress and optimize treatment plans.',
      problemSolved: 'Healthcare providers struggle to efficiently monitor and adjust mental health treatment plans across multiple patients.',
      uniqueValue: 'Combines AI sentiment analysis with clinical data to provide real-time treatment effectiveness insights.',
      domains: ['mindfulcarepro.com', 'mentalhealthai.io', 'clinicalmind.app', 'therapytrack.co']
    },
    'Education & E-learning': {
      name: 'SkillPath Analytics',
      description: 'Personalized learning analytics platform that identifies skill gaps and creates custom learning pathways for corporate training.',
      problemSolved: 'Companies cannot effectively measure skill development ROI or identify specific training gaps in their workforce.',
      uniqueValue: 'Uses machine learning to predict skill deficiencies before they impact performance and suggests micro-learning solutions.',
      domains: ['skillpathanalytics.com', 'learninginsights.io', 'corporateskills.app', 'trainingmetrics.co']
    },
    'Finance & Fintech': {
      name: 'CashFlow Predictor',
      description: 'AI-driven cash flow forecasting tool for small businesses with automatic bank reconciliation and expense categorization.',
      problemSolved: 'Small business owners spend hours manually tracking expenses and cannot predict cash flow accurately.',
      uniqueValue: 'Integrates with 500+ banks and uses AI to categorize expenses and predict cash flow with 95% accuracy.',
      domains: ['cashflowpredictor.com', 'smartfinance.io', 'businesscashflow.app', 'predictcash.co']
    }
  };

  const selectedNiche = industryNiches[preferences.industry as keyof typeof industryNiches] || industryNiches['Healthcare & Wellness'];

  return {
    businessIdea: {
      name: selectedNiche.name,
      description: selectedNiche.description,
      problemSolved: selectedNiche.problemSolved,
      uniqueValue: selectedNiche.uniqueValue,
      marketSize: `$${Math.floor(Math.random() * 500 + 100)}M TAM with 15-25% annual growth`,
      competition: 'Low to moderate - 3-5 indirect competitors with limited feature sets'
    },
    mvpPlan: {
      coreFeatures: [
        'User dashboard with real-time analytics',
        'Data import/export functionality',
        'Basic reporting and insights',
        'User management and permissions',
        'API integration capabilities',
        'Mobile-responsive interface'
      ],
      pricing: {
        model: 'Subscription-based SaaS',
        tiers: [
          {
            name: 'Starter',
            price: '$29/month',
            features: ['Up to 100 records', 'Basic analytics', 'Email support', '1 user account']
          },
          {
            name: 'Professional',
            price: '$99/month',
            features: ['Up to 1,000 records', 'Advanced analytics', 'Priority support', '5 user accounts', 'API access']
          },
          {
            name: 'Enterprise',
            price: '$299/month',
            features: ['Unlimited records', 'Custom analytics', 'Dedicated support', 'Unlimited users', 'White-label options']
          }
        ]
      },
      targetUsers: [
        preferences.targetAudience,
        'Operations managers',
        'Data analysts',
        'Department heads'
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'Tailwind CSS']
    },
    landingPage: {
      headline: `Transform Your ${preferences.industry.split(' ')[0]} Operations with AI`,
      subheadline: `${selectedNiche.name} helps you make data-driven decisions and optimize performance with intelligent insights.`,
      benefits: [
        'Reduce manual work by 80%',
        'Increase accuracy by 95%',
        'Save 10+ hours per week',
        'Improve decision-making speed',
        'Scale operations efficiently'
      ],
      cta: 'Start Your Free 14-Day Trial',
      socialProof: [
        'Trusted by 500+ companies',
        'Average ROI of 300% in first year',
        '99.9% uptime guarantee',
        '4.8/5 customer satisfaction'
      ]
    },
    domains: selectedNiche.domains,
    goToMarket: {
      channels: [
        'Content Marketing & SEO',
        'LinkedIn Outbound Sales',
        'Industry-specific Communities',
        'Google Ads & PPC',
        'Partner Referral Program',
        'Trade Shows & Events'
      ],
      timeline: [
        {
          phase: 'MVP Launch',
          duration: '0-3 months',
          activities: ['Product development', 'Beta testing', 'Initial marketing setup']
        },
        {
          phase: 'Growth',
          duration: '3-12 months',
          activities: ['Customer acquisition', 'Feature expansion', 'Market validation']
        },
        {
          phase: 'Scale',
          duration: '12+ months',
          activities: ['Team expansion', 'Market expansion', 'Advanced features']
        }
      ],
      metrics: [
        'Monthly Recurring Revenue (MRR)',
        'Customer Acquisition Cost (CAC)',
        'Customer Lifetime Value (CLV)',
        'Monthly Active Users (MAU)',
        'Churn Rate'
      ]
    },
    monetization: {
      revenueStreams: [
        'Monthly/Annual Subscriptions',
        'Setup and Onboarding Fees',
        'Premium Support Services',
        'Custom Integration Development',
        'Training and Consulting'
      ],
      projections: [
        { period: 'Month 6', revenue: '$5K MRR', customers: '25 paying customers' },
        { period: 'Year 1', revenue: '$25K MRR', customers: '125 paying customers' },
        { period: 'Year 2', revenue: '$100K MRR', customers: '400 paying customers' },
        { period: 'Year 3', revenue: '$250K MRR', customers: '800 paying customers' }
      ]
    }
  };
};

export const exportResults = (results: NicheResults) => {
  const exportData = {
    generated: new Date().toISOString(),
    ...results
  };

  const dataStr = JSON.stringify(exportData, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  const exportFileDefaultName = `${results.businessIdea.name.replace(/\s+/g, '_')}_Analysis.json`;
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};