import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Zap, Eye, EyeOff, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
    { text: 'Contains number', met: /\d/.test(formData.password) }
  ];

  const isPasswordValid = passwordRequirements.every(req => req.met);
  const doPasswordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPasswordValid) {
      toast.error('Please meet all password requirements');
      return;
    }
    
    if (!doPasswordsMatch) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (!acceptedTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Account created successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">SmartPitch</span>
            </Link>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
              <CardDescription>
                Start generating high-converting call scripts in minutes
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="mt-1"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="mt-1"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="Create a password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  {/* Password Requirements */}
                  {formData.password.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {passwordRequirements.map((req, index) => (
                        <div key={index} className="flex items-center text-xs">
                          <Check 
                            className={`h-3 w-3 mr-2 ${
                              req.met ? 'text-green-500' : 'text-gray-300'
                            }`} 
                          />
                          <span className={req.met ? 'text-green-600' : 'text-gray-500'}>
                            {req.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      placeholder="Confirm your password"
                      className={`pr-10 ${
                        formData.confirmPassword.length > 0 
                          ? doPasswordsMatch 
                            ? 'border-green-300' 
                            : 'border-red-300'
                          : ''
                      }`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  {formData.confirmPassword.length > 0 && (
                    <p className={`text-xs mt-1 ${
                      doPasswordsMatch ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {doPasswordsMatch ? 'Passwords match' : 'Passwords do not match'}
                    </p>
                  )}
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={acceptedTerms}
                    onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                    className="mt-1"
                  />
                  <div className="text-sm text-gray-600">
                    <label htmlFor="terms" className="cursor-pointer">
                      I agree to the{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading || !isPasswordValid || !doPasswordsMatch || !acceptedTerms}
                >
                  {isLoading ? 'Creating account...' : 'Create account'}
                </Button>
              </form>

              <div className="mt-6">
                <Separator className="my-4" />
                
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>

              {/* Social Login Options */}
              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full" type="button">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}