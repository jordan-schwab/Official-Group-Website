import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, Camera, Leaf, MessageSquare, School } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { HowItWorks } from "@/components/how-it-works"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">Un4gettable</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Testimonials
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              About Us
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden sm:block">
              <Button variant="outline">Contact Us</Button>
            </Link>
            <Link href="#demo" className="hidden sm:block">
              <Button className="bg-emerald-500 hover:bg-emerald-600">Request Demo</Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Reduce Food Waste, <span className="text-emerald-500">Eat Smart</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
                Empowering universities to reduce dining hall waste through AI-powered insights and student engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </div>
              <div className="pt-4 flex items-center justify-center md:justify-start gap-8">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-bold">30%</span>
                  <span className="text-sm text-muted-foreground">Waste Reduction</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-bold">15+</span>
                  <span className="text-sm text-muted-foreground">Universities</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-3xl font-bold">4.8/5</span>
                  <span className="text-sm text-muted-foreground">Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative h-[400px] w-full md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Students using the EatSmart app in dining hall"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Camera className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-medium">AI-Powered</p>
                    <p className="text-sm text-muted-foreground">Food Analysis</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Leaf className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-medium">Sustainable</p>
                    <p className="text-sm text-muted-foreground">Campus Dining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How EatSmart Transforms Campus Dining</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our innovative platform helps universities reduce food waste while improving student satisfaction with
                dining services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <Camera className="h-6 w-6 text-emerald-500" />
                  </div>
                  <CardTitle>AI Food Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Students snap photos of their plates before and after eating. Our AI identifies menu items, portion
                    sizes, and what's left behind.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <MessageSquare className="h-6 w-6 text-emerald-500" />
                  </div>
                  <CardTitle>Voice Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Students can record voice comments about their meal, which are converted to text and submitted with
                    the photos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <Brain className="h-6 w-6 text-emerald-500" />
                  </div>
                  <CardTitle>Data-Driven Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dining services receive detailed analytics on waste patterns and dish feedback, enabling menu
                    improvements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-emerald-500"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <CardTitle>Personalized Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Students receive encouraging feedback and personalized suggestions to reduce waste and make
                    healthier choices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <School className="h-6 w-6 text-emerald-500" />
                  </div>
                  <CardTitle>Campus Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seamlessly integrates with existing campus dining systems and student ID cards for a frictionless
                    experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <Leaf className="h-6 w-6 text-emerald-500" />
                  </div>
                  <CardTitle>Sustainability Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track and showcase your campus's environmental impact through reduced food waste, supporting
                    sustainability goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <HowItWorks />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Affordable Pricing</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Partner with us to create a more sustainable campus dining experience. Choose the plan that works for
                your institution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Monthly Plan</CardTitle>
                  <CardDescription>Flexible option for universities</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$100</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Full access to EatSmart platform
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      AI food recognition technology
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Basic analytics dashboard
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Email support
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Cancel anytime
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-emerald-500 relative">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Best Value
                </div>
                <CardHeader>
                  <CardTitle>Annual Plan</CardTitle>
                  <CardDescription>Best value for long-term partnership</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$1,000</span>
                    <span className="text-muted-foreground">/year</span>
                    <div className="text-sm text-emerald-500 font-medium">Save $200 annually</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Everything in Monthly Plan
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Advanced analytics and reporting
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Quarterly sustainability reports
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-emerald-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Custom integration support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Get Started</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Need a custom solution for your campus?{" "}
                <Link href="#contact" className="text-emerald-500 font-medium">
                  Contact us
                </Link>{" "}
                for enterprise pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container">
            <Testimonials />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-slate-50">
          <div className="container">
            <FAQ />
          </div>
        </section>

        {/* CTA Section */}
        <section id="demo" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Reduce Food Waste on Your Campus?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join universities across the country that are making their dining halls more sustainable with EatSmart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Consultation
                </Button>
              </div>
              <div className="mt-8 p-6 bg-muted rounded-xl">
                <p className="font-medium mb-2">Special Offer for New Partners</p>
                <p className="text-muted-foreground mb-4">
                  Sign up for an annual plan and get a free sustainability assessment for your dining facilities!
                </p>
                <p className="text-sm text-muted-foreground">
                  *Valid for new partners only. Offer expires at the end of the current semester.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about implementing EatSmart at your university? Our team is here to help.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-emerald-500"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span>(555) 123-4567</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-emerald-500"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span>contact@eatsmart.edu</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-emerald-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span>123 Innovation Way, University District</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <h4 className="font-medium mb-2">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="bg-emerald-100 p-2 rounded-full hover:bg-emerald-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-emerald-500"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="bg-emerald-100 p-2 rounded-full hover:bg-emerald-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-emerald-500"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="bg-emerald-100 p-2 rounded-full hover:bg-emerald-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-emerald-500"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="bg-emerald-100 p-2 rounded-full hover:bg-emerald-200 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-emerald-500"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="university" className="text-sm font-medium">
                      University
                    </label>
                    <input
                      id="university"
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your university"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-emerald-500" />
                <span className="text-xl font-bold">Un4gettable</span>
              </div>
              <p className="text-muted-foreground">
                Empowering universities to reduce dining hall waste through AI-powered insights and student engagement.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-emerald-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-emerald-500">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-emerald-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-emerald-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-emerald-500">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-emerald-500">
                    Sustainability Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-emerald-500">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-emerald-500">
                    Implementation Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-emerald-500">
                    University Partnerships
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  (555) 123-4567
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  contact@eatsmart.edu
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  123 Innovation Way, University District
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Un4gettable. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-emerald-500">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-emerald-500">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-emerald-500">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
