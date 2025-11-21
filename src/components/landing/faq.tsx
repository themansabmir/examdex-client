import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is the content aligned with the latest syllabus?</AccordionTrigger>
            <AccordionContent>
              Yes, our AI engine is updated in real-time whenever exam boards (like NTA or JEE Apex Board) release new notifications or syllabus changes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does the AI identify my weak areas?</AccordionTrigger>
            <AccordionContent>
              We analyze your performance on every question—time taken, accuracy, and concept tags. The AI builds a knowledge graph to pinpoint exactly where you are struggling.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can institutes customize the branding?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Our Enterprise plan allows institutes to use their own logo, domain, and color scheme to provide a seamless experience for their students.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is my data private?</AccordionTrigger>
            <AccordionContent>
              Yes, we adhere to strict data privacy standards. Student performance data is encrypted and only shared with authorized institute admins if you are part of a batch.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
