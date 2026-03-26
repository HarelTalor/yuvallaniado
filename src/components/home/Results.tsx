import BeforeAfterSlider from "../shared/BeforeAfterSlider";
import { ScrollReveal } from "../shared/ScrollReveal";
import { motion } from "framer-motion";

export default function Results() {
  const results = [
    {
      before: "/images/result_eyebrows_before.png",
      after: "/images/result_eyebrows_after.png",
    },
    {
      before: "/images/result_eyebrows_before.png",
      after: "/images/result_eyebrows_after.png",
    },
    {
      before: "/images/result_eyebrows_before.png",
      after: "/images/result_eyebrows_after.png",
    }
  ];

  return (
    <section className="py-24 bg-interesting-luxury overflow-hidden border-t border-border/10">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">תוצאות מדברות בעד עצמן</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              הזיזי את הסמן כדי לראות את השינוי המדהים שעברו הלקוחות שלי.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 Grid representing a more compact, modern look */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              <div className="shadow-xl rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
                <BeforeAfterSlider before={result.before} after={result.after} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
