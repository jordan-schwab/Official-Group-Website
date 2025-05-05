"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-2">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-6">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Un4gettable</span>
            <Button variant="ghost" className="p-2" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="/#features"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#testimonials"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/#faq"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <Link href="/#contact" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
            </Link>
            <Link href="/#demo" onClick={() => setOpen(false)}>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Request Demo</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
