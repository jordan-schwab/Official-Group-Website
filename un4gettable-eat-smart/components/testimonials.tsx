import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Testimonials() {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Partners Say</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Hear from universities that have implemented EatSmart and seen real results.
        </p>
      </div>

      <Tabs defaultValue="tab1" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tab1">Dining Services</TabsTrigger>
          <TabsTrigger value="tab2">Sustainability Offices</TabsTrigger>
          <TabsTrigger value="tab3">Students</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Dining services director portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Maria Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Director of Dining Services, Pacific University</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "EatSmart has transformed how we approach menu planning. The data showed us that students loved our
                  lasagna but consistently left large portions uneaten. We adjusted portion sizes and reduced waste by
                  40% for that dish alone."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Food service manager portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">James Chen</h4>
                    <p className="text-sm text-muted-foreground">Food Service Manager, Midwest State University</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "We've reduced our food costs by 22% since implementing EatSmart. The voice feedback feature has been
                  particularly valuable—students are telling us exactly what they think about new menu items."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Sustainability director portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Dr. Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Director of Sustainability, Eastern College</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "EatSmart has been instrumental in helping us reach our sustainability goals. We've reduced food waste
                  by 35% in just one semester, which has significantly decreased our carbon footprint and landfill
                  contributions."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Campus sustainability coordinator portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Thompson</h4>
                    <p className="text-sm text-muted-foreground">
                      Campus Sustainability Coordinator, Western University
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The data from EatSmart has been invaluable for our annual sustainability reporting. We can now
                  quantify our food waste reduction efforts with precise metrics, which has helped us secure additional
                  funding for green initiatives."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Student portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Alex Williams</h4>
                    <p className="text-sm text-muted-foreground">Environmental Science Major, Junior</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Using EatSmart has made me much more conscious of my food waste. I've started taking smaller portions
                  and going back for seconds if I'm still hungry. It's a small change that makes a big difference."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Student portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Maya Patel</h4>
                    <p className="text-sm text-muted-foreground">Student Government President, Senior</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Our student government partnered with EatSmart to run a campus-wide competition between residence
                  halls. We reduced overall food waste by 28% and raised awareness about sustainability. The app made it
                  fun and engaging."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
