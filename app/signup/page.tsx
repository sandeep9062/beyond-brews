"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, ArrowRight, User, Menu, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import SocialWall from '@/components/SocialWall';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsLoading(true);
    // Simulate signup process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // In a real app, this would handle user registration
    console.log('Signup attempted', formData);
  };

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const isLengthValid = password.length >= 8;
    
    return {
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialChar,
      isLengthValid,
    };
  };

  const passwordValidation = validatePassword(formData.password);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
 
      
      <main className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Decorative Content */}
          <div className="hidden lg:block space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-medium mb-4">
                Join the BeyondBrews Community
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Create an account to unlock personalized recommendations, track your favorites, 
                and enjoy exclusive benefits with BeyondBrews.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-moss/10 rounded-full">
                    <User className="h-6 w-6 text-moss" />
                  </div>
                  <h3 className="font-medium">Personalized Experience</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Get recommendations tailored to your taste preferences and brew history.
                </p>
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-moss/10 rounded-full">
                    <Mail className="h-6 w-6 text-moss" />
                  </div>
                  <h3 className="font-medium">Exclusive Offers</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Receive special discounts and early access to new flavor releases.
                </p>
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-moss/10 rounded-full">
                    <ArrowRight className="h-6 w-6 text-moss" />
                  </div>
                  <h3 className="font-medium">Community Benefits</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Join our community of brew enthusiasts and share your experiences.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <SocialWall />
            </div>
          </div>
          
          {/* Signup Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-serif">Create an Account</CardTitle>
                <CardDescription>Get started with BeyondBrews</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    
                    {/* Password Strength Indicator */}
                    <div className="mt-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <div
                            key={index}
                            className={`h-1 flex-1 rounded-full ${
                              index < Object.values(passwordValidation).filter(Boolean).length
                                ? 'bg-moss'
                                : 'bg-slate-200'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        Password must contain at least 8 characters with uppercase, lowercase, number, and special character
                      </div>
                      
                      {/* Password Validation Rules */}
                      <div className="mt-2 space-y-1">
                        {Object.entries({
                          'At least 8 characters': passwordValidation.isLengthValid,
                          'Contains uppercase letter': passwordValidation.hasUpperCase,
                          'Contains lowercase letter': passwordValidation.hasLowerCase,
                          'Contains number': passwordValidation.hasNumber,
                          'Contains special character': passwordValidation.hasSpecialChar,
                        }).map(([rule, isValid]) => (
                          <div key={rule} className="flex items-center gap-2">
                            {isValid ? (
                              <Check className="h-3 w-3 text-moss" />
                            ) : (
                              <div className="h-3 w-3 rounded-full bg-slate-300" />
                            )}
                            <span className={`text-xs ${isValid ? 'text-moss' : 'text-slate-500'}`}>
                              {rule}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreeToTerms}
                      onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{' '}
                      <Link href="/terms" className="text-moss hover:text-moss/80">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-moss hover:text-moss/80">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-moss hover:bg-moss/90 text-white" 
                    disabled={isLoading || !agreeToTerms}
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    ) : null}
                    Create Account
                  </Button>
                </form>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <User className="h-4 w-4 mr-2" />
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <p className="text-sm text-slate-500 text-center">
                  Already have an account?{" "}
                  <Link href="/login" className="text-moss hover:text-moss/80 font-medium">
                    Sign in
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;