import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Copy, 
  Download, 
  Save, 
  ArrowLeft, 
  MessageSquare, 
  Target, 
  Zap,
  FileText,
  Share
} from 'lucide-react';
import { toast } from 'sonner';

export default function ScriptOutput() {
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);

  // Mock script data - in real app this would come from API
  const scriptData = {
    id: id,
    title: 'CRM Software - Sales Directors',
    createdAt: '2024-01-15',
    product: 'Cloud-based CRM software',
    persona: 'Sales Directors at mid-size B2B companies',
    industry: 'Technology',
    goal: 'Schedule a demo',
    tone: 'Professional & Friendly',
    
    opener: `Hi [Name], this is [Your Name] from SmartPitch. I hope I'm not catching you at a bad time?

I'm calling because I noticed your company has been growing rapidly, and I work with Sales Directors at companies like yours who are struggling with manual lead qualification and poor sales visibility.

I have a quick question - how are you currently tracking your sales pipeline and measuring team performance?`,

    valuePitch: `Based on what you've shared, I think you'd be interested in how we've helped similar companies increase their sales productivity by 40%.

Our CRM solution automates lead scoring, gives you real-time visibility into your pipeline, and helps your team focus on the highest-value opportunities.

For example, TechFlow saw their conversion rate increase by 35% in just 3 months after implementing our system. Their Sales Director told me it was like having a GPS for their entire sales process.`,

    objectionHandling: `**"We're happy with our current solution"**
I hear that a lot, and honestly, that's great! Most of our best clients were happy with their previous system too. The question isn't whether your current solution works, but whether you could be getting even better results. Would you be open to seeing how we might be able to improve on what you're already doing well?

**"The price is too high"**
I understand price is always a consideration. Let me ask you this - what's the cost of missing out on even one qualified lead per month? Most of our clients find that the increased revenue from better lead management pays for the system within 60 days. Plus, we have flexible pricing options that might work better for your budget.

**"We don't have budget right now"**
I completely understand budget constraints. That's actually why I wanted to reach out now - we're coming up on planning season. Would it make sense to at least see what this could look like so you have the information you need for next quarter's budget discussions?`,

    closing: `[Name], based on our conversation, it sounds like this could be a real game-changer for your team. 

I'd love to show you a quick 15-minute demo of exactly how this would work for your specific situation. I have some time this Thursday at 2 PM or Friday at 10 AM - what works better for you?

I promise you'll walk away with at least 2-3 actionable insights you can implement right away, even if we never work together.`
  };

  const handleCopy = async (text: string, section: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${section} copied to clipboard!`);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleSave = () => {
    setIsSaved(true);
    toast.success('Script saved to your library!');
  };

  const handleExport = (format: 'pdf' | 'txt') => {
    toast.success(`Exporting script as ${format.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/wizard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Wizard
          </Link>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your Call Script
              </h1>
              <p className="text-gray-600">
                Generated on {new Date(scriptData.createdAt).toLocaleDateString()}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
              <Button variant="outline" onClick={handleSave} disabled={isSaved}>
                <Save className="h-4 w-4 mr-2" />
                {isSaved ? 'Saved' : 'Save Script'}
              </Button>
              <Button variant="outline" onClick={() => handleExport('txt')}>
                <FileText className="h-4 w-4 mr-2" />
                Export TXT
              </Button>
              <Button variant="outline" onClick={() => handleExport('pdf')}>
                <Download className="h-4 w-4 mr-2" />
                Export PDF
              </Button>
              <Button>
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Script Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="opener" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="opener">Opener</TabsTrigger>
                <TabsTrigger value="pitch">Value Pitch</TabsTrigger>
                <TabsTrigger value="objections">Objections</TabsTrigger>
                <TabsTrigger value="closing">Closing</TabsTrigger>
              </TabsList>

              <TabsContent value="opener" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <MessageSquare className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <CardTitle>Opening</CardTitle>
                          <CardDescription>
                            Start the conversation and build rapport
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(scriptData.opener, 'Opening')}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-gray max-w-none">
                      <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {scriptData.opener}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pitch" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Target className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle>Value Proposition</CardTitle>
                          <CardDescription>
                            Present your solution's key benefits
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(scriptData.valuePitch, 'Value Pitch')}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-gray max-w-none">
                      <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {scriptData.valuePitch}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="objections" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Zap className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle>Objection Handling</CardTitle>
                          <CardDescription>
                            Respond to common concerns and objections
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(scriptData.objectionHandling, 'Objection Handling')}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-gray max-w-none">
                      <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {scriptData.objectionHandling}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="closing" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Target className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <CardTitle>Call to Action</CardTitle>
                          <CardDescription>
                            Close the call and secure next steps
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(scriptData.closing, 'Closing')}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-gray max-w-none">
                      <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                        {scriptData.closing}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Script Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Product</h4>
                  <p className="text-sm text-gray-600">{scriptData.product}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Target Persona</h4>
                  <p className="text-sm text-gray-600">{scriptData.persona}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Industry</h4>
                  <Badge variant="secondary">{scriptData.industry}</Badge>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Call Goal</h4>
                  <Badge variant="outline">{scriptData.goal}</Badge>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Tone</h4>
                  <Badge variant="outline">{scriptData.tone}</Badge>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    className="w-full mb-3"
                    onClick={() => handleCopy(`${scriptData.opener}\n\n${scriptData.valuePitch}\n\n${scriptData.objectionHandling}\n\n${scriptData.closing}`, 'Complete Script')}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Full Script
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    This script contains {(scriptData.opener + scriptData.valuePitch + scriptData.objectionHandling + scriptData.closing).split(' ').length} words
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}