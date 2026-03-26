import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const allTreatments = [
  {
    category: "שם קטגוריה",
    items: [
      { name: "שם טיפול", price: "₪₪₪", desc: "[טקסט דמה המתאר את הטיפול ותוצאותיו המצופות. הפירוט המלא יוצג בגרסה הסופית של האתר.]" },
      { name: "שם טיפול", price: "₪₪₪", desc: "[טקסט דמה המתאר את הטיפול ותוצאותיו המצופות. הפירוט המלא יוצג בגרסה הסופית של האתר.]" },
      { name: "שם טיפול", price: "₪₪₪", desc: "[טקסט דמה המתאר את הטיפול ותוצאותיו המצופות. הפירוט המלא יוצג בגרסה הסופית של האתר.]" }
    ]
  },
  {
    category: "שם קטגוריה",
    items: [
      { name: "שם טיפול", price: "₪₪₪", desc: "[טקסט דמה המתאר את הטיפול ותוצאותיו המצופות. הפירוט המלא יוצג בגרסה הסופית של האתר.]" },
      { name: "שם טיפול", price: "₪₪₪", desc: "[טקסט דמה המתאר את הטיפול ותוצאותיו המצופות. הפירוט המלא יוצג בגרסה הסופית של האתר.]" },
      { name: "שם טיפול", price: "₪₪₪", desc: "[טקסט דמה המתאר את הטיפול ותוצאותיו המצופות. הפירוט המלא יוצג בגרסה הסופית של האתר.]" }
    ]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function Treatments() {
  return (
    <div className="bg-background min-h-screen py-16 pt-32">
      <div className="container px-4 mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary">תפריט טיפולים</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            בחרי את הטיפול המתאים לך. כל הטיפולים מתבצעים באמצעות המכשירים והחומרים האיכותיים ביותר.
          </p>
        </motion.header>

        <div className="space-y-24">
          {allTreatments.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.h2 variants={item} className="text-2xl md:text-3xl font-serif font-bold border-b border-primary/20 pb-2 inline-block">
                {category.category}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((treatment, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-surface group">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{treatment.name}</CardTitle>
                        <span className="text-primary font-bold text-xl">{treatment.price}</span>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed min-h-[60px]">{treatment.desc}</p>
                        <Button variant="link" className="p-0 h-auto mt-6 text-primary font-bold group-hover:translate-x-[-4px] transition-transform" asChild>
                          <a href={`https://wa.me/9725XXXXXXXX?text=היי יובל, אשמח לקבוע תור ל${treatment.name}`}>
                            קבעי תור עכשיו ←
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[2rem] gradient-brand text-white text-center shadow-2xl relative overflow-hidden group/cta"
        >
          {/* Subtle decorative glow */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">לא בטוחה מה מתאים לך?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            אני כאן כדי לעזור לך לבחור את הטיפול המדויק עבורך. צרי איתי קשר לייעוץ ראשוני ללא התחייבות.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-lg font-bold shadow-xl shimmer gradient-brand border-none hover:scale-105 active:scale-95 transition-all">
            <a href="https://wa.me/9725XXXXXXXX" target="_blank" rel="noreferrer">
              צרי קשר בווצאפ
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
