import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stepper } from '@/components/ui/stepper';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  product: string;
  persona: string;
  industry: string;
  goal: string;
  tone: string;
  objections: string;
}

export default function ScriptWizard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    product: '',
    persona: '',
    industry: '',
    goal: '',
    tone: '',
    objections: ''
  });

  const steps = [
    { id: 1, title: 'Product', description: 'What you sell' },
    { id: 2, title: 'Persona', description: 'Who you call' },
    { id: 3, title: 'Industry', description: 'Their sector' },
    { id: 4, title: 'Goal', description: 'Call objective' },
    { id: 5, title: 'Tone', description: 'How you speak' },
    { id: 6, title: 'Objections', description: 'What they say' }
  ];

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      handleGenerate();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Script generated successfully!');
      navigate('/script/1');
    }, 3000);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.product.length > 0;
      case 2: return formData.persona.length > 0;
      case 3: return formData.industry.length > 0;
      case 4: return formData.goal.length > 0;
      case 5: return formData.tone.length > 0;
      case 6: return formData.objections.length > 0;
      default: return false;
    }
  };

  const renderStepContent = () => {
    const slideVariants = {
      enter: { x: 300, opacity: 0 },
      center: { x: 0, opacity: 1 },
      exit: { x: -300, opacity: 0 }
    };

    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <Label htmlFor="product" className="text-lg font-medium">
                What product or service are you selling?
              </Label>
              <p className="text-gray-600 mt-1 mb-4">
                Be specific about features, benefits, and what makes it unique.
              </p>
              <Textarea
                id="product"
                placeholder="e.g., Cloud-based CRM software that automates lead scoring and increases sales team productivity by 40%"
                value={formData.product}
                onChange={(e) => updateFormData('product', e.target.value)}
                rows={4}
                className="text-base"
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <Label htmlFor="persona" className="text-lg font-medium">
                Who is your ideal customer?
              </Label>
              <p className="text-gray-600 mt-1 mb-4">
                Describe their role, company size, pain points, and goals.
              </p>
              <Textarea
                id="persona"
                placeholder="e.g., Sales Directors at mid-size B2B companies (50-500 employees) struggling with manual lead qualification and poor sales visibility"
                value={formData.persona}
                onChange={(e) => updateFormData('persona', e.target.value)}
                rows={4}
                className="text-base"
              />
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <Label htmlFor="industry" className="text-lg font-medium">
                What industry do you target?
              </Label>
              <p className="text-gray-600 mt-1 mb-4">
                This helps customize the language and pain points in your script.
              </p>
              <Input
                id="industry"
                placeholder="e.g., Technology, Healthcare, Manufacturing, Financial Services"
                value={formData.industry}
                onChange={(e) => updateFormData('industry', e.target.value)}
                className="text-base"
              />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <Label className="text-lg font-medium">
                What's your call goal?
              </Label>
              <p className="text-gray-600 mt-1 mb-4">
                Choose the primary objective for this call script.
              </p>
              <Select value={formData.goal} onValueChange={(value) => updateFormData('goal', value)}>
                <SelectTrigger className="text-base">
                  <SelectValue placeholder="Select your call goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="demo">Schedule a demo</SelectItem>
                  <SelectItem value="meeting">Book a discovery meeting</SelectItem>
                  <SelectItem value="trial">Start a free trial</SelectItem>
                  <SelectItem value="sale">Close the sale</SelectItem>
                  <SelectItem value="followup">Follow up on proposal</SelectItem>
                  <SelectItem value="referral">Ask for referrals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <Label className="text-lg font-medium">
                What tone should your script have?
              </Label>
              <p className="text-gray-600 mt-1 mb-4">
                Choose the communication style that matches your brand and audience.
              </p>
              <Select value={formData.tone} onValueChange={(value) => updateFormData('tone', value)}>
                <SelectTrigger className="text-base">
                  <SelectValue placeholder="Select your tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional & Formal</SelectItem>
                  <SelectItem value="friendly">Friendly & Conversational</SelectItem>
                  <SelectItem value="assertive">Assertive & Direct</SelectItem>
                  <SelectItem value="casual">Casual & Relaxed</SelectItem>
                  <SelectItem value="consultative">Consultative & Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            key="step6"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div>
              <Label htmlFor="objections" className="text-lg font-medium">
                What objections do you commonly hear?
              </Label>
              <p className="text-gray-600 mt-1 mb-4">
                List the most frequent objections your prospects raise so we can prepare responses.
              </p>
              <Textarea
                id="objections"
                placeholder="e.g., 'We're happy with our current solution', 'The price is too high', 'We don't have budget right now', 'I need to think about it'"
                value={formData.objections}
                onChange={(e) => updateFormData('objections', e.target.value)}
                rows={5}
                className="text-base"
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Generating Your Script
            </h3>
            <p className="text-gray-600">
              Our AI is crafting the perfect call script based on your inputs...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Create Your Perfect Call Script
          </h1>
          <p className="text-xl text-gray-600">
            Answer a few questions and we'll generate a personalized script for you
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-12">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Form Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">
              Step {currentStep}: {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription className="text-base">
              {steps[currentStep - 1].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <div className="text-sm text-gray-500">
                Step {currentStep} of {steps.length}
              </div>

              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex items-center"
              >
                {currentStep === 6 ? (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Script
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}