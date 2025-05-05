import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Got questions about implementing EatSmart at your university? We've got answers.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does the AI food recognition work?</AccordionTrigger>
            <AccordionContent>
              Our AI uses computer vision to identify food items and estimate portion sizes from photos. The system has
              been trained on thousands of images of common dining hall foods and continues to learn and improve with
              each use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do we implement EatSmart at our university?</AccordionTrigger>
            <AccordionContent>
              Implementation is straightforward. We provide the mobile app for students and a web dashboard for dining
              services. Our team will work with you to customize the system for your specific dining hall menus and help
              with student onboarding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do you encourage student participation?</AccordionTrigger>
            <AccordionContent>
              The app includes gamification elements like personal challenges, achievements, and campus-wide
              competitions. Many universities also offer small incentives like dining points or sustainability credits
              for active participation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What kind of data and insights will we receive?</AccordionTrigger>
            <AccordionContent>
              You'll receive detailed analytics on waste patterns by meal, food type, and time period. You'll also get
              student feedback on specific dishes, helping you identify which menu items are popular but often served in
              portions that are too large, which items are frequently left uneaten, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How does EatSmart protect student privacy?</AccordionTrigger>
            <AccordionContent>
              We take privacy seriously. All data is anonymized in the analytics dashboard. Students can opt to share
              their data anonymously or with their identity attached for personalized feedback. All data handling
              complies with FERPA and other relevant regulations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What's the typical ROI for universities?</AccordionTrigger>
            <AccordionContent>
              Most universities see a return on investment within the first year. By reducing food waste by an average
              of 30%, dining services save on food costs, which typically far exceeds the cost of the EatSmart platform.
              Additional benefits include progress toward sustainability goals and improved student satisfaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Can EatSmart integrate with our existing dining management systems?</AccordionTrigger>
            <AccordionContent>
              Yes, EatSmart is designed to integrate with most common dining management systems. Our team will work with
              your IT department to ensure smooth integration with your existing infrastructure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>How long does it take to implement EatSmart?</AccordionTrigger>
            <AccordionContent>
              Typical implementation takes 4-6 weeks from contract signing to launch. This includes system
              customization, integration with existing systems, staff training, and student onboarding. We can often
              accelerate this timeline if needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
