import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will I get Recording?",
    answer:
      "No. It is a limited time broadcast only. The recordings are not shared."
  },
  {
    question: "Is it in Hindi or English?",
    answer:
      "This workshop will be conducted in English only."
  },
  {
    question: "What is the duration ?",
    answer:
      "It is a 90 minutes program. The timing is mentioned at the top of this page."
  },
  {
    question: "Why is it FREE? Is it always going to be FREE?",
    answer:
      "We want to reach as many people as possible, and give them an opportunity to transform their life. But the real cost of this masterclass is Rs. 499. It’s NOT going to be FREE in the near future. So, register before the price goes up."
  },
  {
    question: "What are the next steps after registering for the Masterclass?",
    answer:
      "You have to join the WhatsApp group for the Masterclass. All the announcements will be communicated to the group. We will also be sharing a link to the Masterclass over the registered email ID."
  },
  {
    question: "Is it Live?",
    answer:
      "- This Masterclass was originally recorded during a live session and is now available as a limited-time broadcast.- You’ll experience the full energy of the original session — just like those who attended it live."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 lg:mb-16 fade-in">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-wellness-text mb-4">
            Frequently Asked <span className="heading-italic">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know before your breakthrough.
          </p>
        </div>
        
        <div className="fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="wellness-card border-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-wellness-text hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
