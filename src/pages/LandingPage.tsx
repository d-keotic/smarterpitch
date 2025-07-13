import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Target, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Clock,
  Star,
  ArrowRight,
  Play
} from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Target,
      title: 'AI-Powered Targeting',
      description: 'Generate scripts tailored to your specific audience and industry for maximum impact.'
    },
    {
      icon: MessageSquare,
      title: 'Objection Handling',
      description: 'Built-in responses to common objections, helping you close more deals confidently.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Scripts designed using proven sales psychology to increase your success rate.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share and manage scripts across your sales team with version control.'
    },
    {
      icon: Clock,
      title: 'Quick Generation',
      description: 'Get professional call scripts in minutes, not hours of manual writing.'
    },
    {
      icon: Zap,
      title: 'Multiple Formats',
      description: 'Export scripts as PDF, text, or integrate directly with your CRM system.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Sales Director at TechFlow',
      content: 'SmartPitch increased our cold call conversion rate by 40%. The AI-generated scripts feel natural and address real objections.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'SDR Manager at CloudSync',
      content: 'Game-changer for our team. New reps can now sound like seasoned pros from day one with these scripts.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'VP Sales at DataCore',
      content: 'The time savings alone make this worth it. We generate dozens of targeted scripts weekly with consistent quality.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Generate Perfect
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Call Scripts </span>
              in Minutes
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stop winging your sales calls. Use AI to create personalized, high-converting scripts 
              that handle objections and close more deals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/wizard">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-3">
                  Generate My First Script
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Demo Video/GIF Section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Demo Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Close More Deals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful AI features designed specifically for sales professionals who want to maximize their success rate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Sales Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how SmartPitch is transforming sales conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Calls?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of sales professionals who are closing more deals with AI-powered scripts.
          </p>
          <Link to="/wizard">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Creating Scripts Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">SmartPitch</span>
              </div>
              <p className="text-gray-400 max-w-md">
                AI-powered call script generation for sales professionals who want to close more deals.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/wizard" className="hover:text-white transition-colors">Create Script</Link></li>
                <li><Link to="/saved-scripts" className="hover:text-white transition-colors">My Scripts</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SmartPitch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}