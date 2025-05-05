import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How EatSmart Works</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our innovative platform makes it easy for students to track their food waste and for dining services to make
          data-driven decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 bg-emerald-500 text-white w-10 h-10 flex items-center justify-center text-xl font-bold rounded-br-lg">
            1
          </div>
          <CardContent className="pt-12 pb-8 px-6">
            <div className="mb-6 flex justify-center">
              <div className="relative h-40 w-40">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Take a photo before eating"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Snap Before Eating</h3>
            <p className="text-muted-foreground text-center">
              Students take a photo of their plate before eating. Our AI identifies the menu items and portion sizes.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 bg-emerald-500 text-white w-10 h-10 flex items-center justify-center text-xl font-bold rounded-br-lg">
            2
          </div>
          <CardContent className="pt-12 pb-8 px-6">
            <div className="mb-6 flex justify-center">
              <div className="relative h-40 w-40">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Take a photo after eating"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Snap After Eating</h3>
            <p className="text-muted-foreground text-center">
              After the meal, students take another photo of leftovers. They can also record voice comments about the
              meal.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 bg-emerald-500 text-white w-10 h-10 flex items-center justify-center text-xl font-bold rounded-br-lg">
            3
          </div>
          <CardContent className="pt-12 pb-8 px-6">
            <div className="mb-6 flex justify-center">
              <div className="relative h-40 w-40">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Data insights"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Insights & Action</h3>
            <p className="text-muted-foreground text-center">
              Dining services receive detailed data on waste patterns and feedback, enabling menu improvements and waste
              reduction.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 bg-muted rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">The EatSmart Difference</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 p-1 rounded-full mt-1">
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
                    className="h-4 w-4 text-emerald-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">AI-Powered Analysis</p>
                  <p className="text-sm text-muted-foreground">
                    Our advanced AI accurately identifies food items and portion sizes, providing precise waste
                    measurements.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 p-1 rounded-full mt-1">
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
                    className="h-4 w-4 text-emerald-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Student Engagement</p>
                  <p className="text-sm text-muted-foreground">
                    We make sustainability fun with personalized feedback and encouragement that motivates students to
                    reduce waste.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-emerald-100 p-1 rounded-full mt-1">
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
                    className="h-4 w-4 text-emerald-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Actionable Insights</p>
                  <p className="text-sm text-muted-foreground">
                    Dining services receive detailed analytics that help them make data-driven decisions to reduce waste
                    and improve satisfaction.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 w-full rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=256&width=512"
                alt="EatSmart dashboard showing food waste analytics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
