import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-full group-hover:opacity-30 transition-opacity" />
              <img 
                src="/images/yuval_portrait.png" 
                alt="יובל לניאדו - עיצוב גבות והלחמת ריסים"
                className="relative rounded-3xl w-full max-w-md mx-auto shadow-2xl z-10 blur-[4px]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-primary/5">
                <img src="/images/logo_circle.png" alt="לוגו" className="w-full h-full object-contain" />
              </div>
            </div>

          <div className="max-w-xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">קצת עליי</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight mb-8">
              יובל לניאדו <br /> 
              <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8 decoration-wavy">עיצוב גבות והלחמת ריסים</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p className="font-bold text-primary">
                [כותרת דמה לתיאור המקצועיות]
              </p>
              <p>
                [טקסט דמה המציג בקצרה את האני-מאמין המקצועי ואת חוויית הטיפול בקליניקה. בגרסה הסופית יופיע כאן טקסט שיווקי ממוקד.]
              </p>
              <p>
                [טקסט דמה נוסף להשלמת המבנה העיצובי של פסקה קצרה זו.]
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold gradient-brand shadow-lg" asChild>
                <Link to="/about">
                  עוד עליי
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
