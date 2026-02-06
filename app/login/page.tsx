"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, ArrowRight, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import SocialWall from '@/components/SocialWall';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    // In a real app, this would handle authentication
    console.log('Login attempted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      
      <main className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Login Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl font-serif">Welcome Back</CardTitle>
                <CardDescription>Sign in to your BeyondBrews account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="/forgotpassword" className="text-sm text-moss hover:text-moss/80 font-medium">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10"
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
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm">Remember me</Label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-moss hover:bg-moss/90 text-white" disabled={isLoading}>
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    ) : null}
                    Sign In
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
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-moss hover:text-moss/80 font-medium">
                    Sign up
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
          
          {/* Decorative Content */}
          <div className="hidden lg:block space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-medium mb-4">
                Discover Your Perfect Brew
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Sign in to access your personalized recommendations, track your favorite flavors, 
                and enjoy a seamless shopping experience with BeyondBrews.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-moss/10 rounded-full">
                    <User className="h-6 w-6 text-moss" />
                  </div>
                  <h3 className="font-medium">Personalized Profiles</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Save your preferences and get tailored recommendations based on your taste.
                </p>
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-moss/10 rounded-full">
                    <Lock className="h-6 w-6 text-moss" />
                  </div>
                  <h3 className="font-medium">Secure Shopping</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Your data is protected with industry-standard security measures.
                </p>
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-moss/10 rounded-full">
                    <Mail className="h-6 w-6 text-moss" />
                  </div>
                  <h3 className="font-medium">Order History</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Track your past orders and reorder your favorite brews with ease.
                </p>
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-moss/10 rounded-full">
                    <ArrowRight className="h-6 w-6 text-moss" />
                  </div>
                  <h3 className="font-medium">Quick Checkout</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Save your payment and shipping details for faster checkout.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <SocialWall />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;