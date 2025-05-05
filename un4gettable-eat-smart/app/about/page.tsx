import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Brain, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MobileMenu } from "@/components/mobile-menu"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">Un4gettable</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              How It Works
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Pricing
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Testimonials
            </Link>
            <Link href="/about" className="text-sm font-medium text-emerald-500 transition-colors">
              About Us
            </Link>
            <Link href="/#faq" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/#contact" className="hidden sm:block">
              <Button variant="outline">Contact Us</Button>
            </Link>
            <Link href="/#demo" className="hidden sm:block">
              <Button className="bg-emerald-500 hover:bg-emerald-600">Request Demo</Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="text-muted-foreground hover:text-emerald-500 flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're a passionate group of innovators committed to reducing food waste and creating more sustainable
                campus dining experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eTzG8OldlQKVwOg49xonSeI2hc8J9.png"
                    alt="Jingling Zhang"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Jingling Zhang</h3>
                  <p className="text-muted-foreground mb-4">Co-Founder</p>
                  <p className="text-sm mb-4">
                    Passionate about sustainability and technology, Jingling leads our vision to transform campus dining.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Twitter profile"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aiACZpfLTtNtNos73qRdUe2NyUTcAa.png"
                    alt="Jordan Schwab"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Robert Light</h3>
                  <p className="text-muted-foreground mb-4">Co-Founder</p>
                  <p className="text-sm mb-4">
                    Robert brings deep expertise in AI and machine learning to power our food recognition technology.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="GitHub profile"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MgT4imOLRuYaYFVbkjkaqTOOhR4jDv.png"
                    alt="Robert Light"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Jordan Schwabb</h3>
                  <p className="text-muted-foreground mb-4">Co-founder</p>
                  <p className="text-sm mb-4">
                    Jordan builds relationships with universities and dining services to implement EatSmart effectively.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Twitter profile"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X4xEQDC2YQXmZwc4MiMVP2wxgInDAi.png"
                    alt="Anh Nhu"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Anh Nhu</h3>
                  <p className="text-muted-foreground mb-4">Co-Founder</p>
                  <p className="text-sm mb-4">
                    Anh transforms raw data into actionable insights that help dining halls reduce waste
                    effectively.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="GitHub profile"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're on a mission to reduce food waste in university dining halls while improving the student dining
                  experience.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Problem We're Solving</h3>
                    <p className="mb-4">
                      College dining halls in the United States waste approximately 22 million pounds of food each year.
                      This waste has significant environmental and financial impacts.
                    </p>
                    <p>
                      Traditional approaches to reducing this waste have been ineffective because they lack real-time
                      data and student engagement. EatSmart bridges this gap by providing both.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                    <p className="mb-4">
                      By combining AI technology with student participation, we create a feedback loop that benefits
                      everyone:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
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
                          className="h-5 w-5 text-emerald-500 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Students become more mindful of their food choices</span>
                      </li>
                      <li className="flex items-start gap-2">
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
                          className="h-5 w-5 text-emerald-500 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Dining services gain insights to improve menus</span>
                      </li>
                      <li className="flex items-start gap-2">
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
                          className="h-5 w-5 text-emerald-500 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Universities reduce costs and meet sustainability goals</span>
                      </li>
                      <li className="flex items-start gap-2">
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
                          className="h-5 w-5 text-emerald-500 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Our planet benefits from reduced waste and emissions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Us in Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Ready to make your campus dining more sustainable? Partner with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#demo">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                    Request a Demo
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container py-8">
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
      </footer>
    </div>
  )
}
