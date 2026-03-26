import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "שאלה לדוגמה?",
    answer: "[טקסט דמה הממחיש את התשובה לשאלה הנפוצה. המידע המלא יוצג בגרסה הסופית של האתר.]"
  },
  {
    question: "שאלה נוספת לדוגמה?",
    answer: "[טקסט דמה הממחיש את התשובה לשאלה הנפוצה. המידע המלא יוצג בגרסה הסופית של האתר.]"
  },
  {
    question: "איך מתאמים תור?",
    answer: "[טקסט דמה הממחיש את התשובה לשאלה הנפוצה. המידע המלא יוצג בגרסה הסופית של האתר.]"
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-[#FCF9F7]">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">מרכז מידע</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">שאלות נפוצות</h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">כל מה שחשוב לך לדעת כדי להרגיש בטוחה ונינוחה לפני הטיפול הראשון שלך</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-primary/10 rounded-2xl bg-white px-6 shadow-sm overflow-hidden"
              style={{ backgroundColor: 'white' }}
            >
              <AccordionTrigger 
                className="text-right hover:no-underline py-5 font-semibold text-lg hover:text-primary transition-colors text-[#1D1D1D]"
                style={{ color: '#1D1D1D' }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-right pb-6 text-slate-600 leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
