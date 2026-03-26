import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { useState, useRef } from "react";

interface Review {
  name: string;
  text: string;
  rating: number;
}

const reviews: Review[] = Array(10).fill({
  name: "שם לקוחה",
  text: "כאן יופיע טקסט דמה לתיאור חוויית הלקוחה מהטיפול המקצועי שקיבלה בקליניקה. הטקסט נועד להמחשת המבנה והעיצוב בגרסת הסקיצה.",
  rating: 5
});

// Group reviews into pairs for vertical stacks on mobile
const reviewPairs: Review[][] = [];
for (let i = 0; i < reviews.length; i += 2) {
  reviewPairs.push(reviews.slice(i, i + 2));
}

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.offsetWidth;
    // RTL scrollLeft is negative or handled differently by browsers
    const absoluteScroll = Math.abs(scrollPosition);
    const index = Math.round(absoluteScroll / containerWidth);
    if (index !== activeIndex && index < reviewPairs.length) {
      setActiveIndex(index);
    }
  };
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">לקוחות מרוצות</h2>
            <div className="w-24 h-1 gradient-brand mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto pt-2">
              [טקסט דמה הממחיש את חוות הדעת של הלקוחות שלנו]
            </p>
          </div>
        </ScrollReveal>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-12 md:pb-0 px-4 -mx-4 scrollbar-hide snap-x snap-mandatory"
        >
          {reviewPairs.map((pair: Review[], pairIdx: number) => (
            <div key={pairIdx} className="min-w-[85vw] md:min-w-0 snap-center flex flex-col gap-6 md:contents">
              {pair.map((review: Review, idx: number) => (
                <ScrollReveal key={`${pairIdx}-${idx}`} delay={(idx % 3) * 0.1}>
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm border border-primary/10 flex flex-col h-full hover:shadow-xl hover:border-primary/20 transition-all duration-500 group relative">
                    <Quote className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
                    
                    <div className="flex gap-1 mb-6 text-accent">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    
                    <p className="text-lg leading-relaxed text-foreground italic mb-8 relative z-10">
                      "{review.text}"
                    </p>
                    
                    <div className="mt-auto flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold border border-primary/10">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-primary tracking-tight">{review.name}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">לקוחה מרוצה</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>
        
        {/* Swipe prompt for mobile */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex gap-1.5">
            {reviewPairs.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-primary w-4' : 'bg-primary/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
