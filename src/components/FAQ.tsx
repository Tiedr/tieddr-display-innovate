import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Tieddr?",
    answer: "Tieddr is a comprehensive ecosystem of digital tools and services designed to enhance your productivity and creativity. From web development to music streaming, we offer solutions for various digital needs."
  },
  {
    question: "How does XCloud storage work?",
    answer: "XCloud provides secure cloud storage with automatic sync across all your devices. Your files are encrypted and backed up regularly, ensuring your data is always safe and accessible."
  },
  {
    question: "Can I try the products before purchasing?",
    answer: "Yes! We offer free trials for all our products. You can test drive any of our solutions risk-free to ensure they meet your needs before committing."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support through chat, email, and phone. Our dedicated team is always ready to help you with any questions or technical issues."
  },
  {
    question: "Are there any discounts for multiple products?",
    answer: "Yes, we offer bundle packages that combine multiple products at a discounted rate. Contact our sales team for more information about our current offers."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-white/10 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-purple-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};