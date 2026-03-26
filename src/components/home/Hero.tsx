import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur and Blend */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/yuval_hero_bg.png" 
          alt="Yuval Laniado - מומחית לעיצוב גבות והלחמת ריסים" 
          className="w-full h-full object-cover object-center scale-105 blur-[1px]"
        />
        {/* Light White Professional Overlay */}
        <div className="absolute inset-0 bg-white/45 z-[1]" />
        {/* Bottom Blend Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/20 to-transparent z-[2]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center text-[#2B1F1C]">
        <div className="flex flex-col items-center space-y-8 md:space-y-12 max-w-4xl mx-auto">
          {/* Logo in Hero */}
          <div className="relative animate-in fade-in zoom-in duration-1000 w-full flex flex-col items-center mt-[-40px] md:mt-0">
             <img 
                src="/images/logo.png" 
                alt="Yuval Laniado Logo" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" 
             />
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/20 backdrop-blur-md border border-[#2B1F1C]/10 shimmer text-[#2B1F1C] text-sm md:text-base font-bold tracking-[0.2em] uppercase shadow-md transition-all hover:bg-white/30">
              עיצוב גבות והלחמת ריסים
            </div>

            <h1 className="text-3xl md:text-6xl font-serif font-bold tracking-tight leading-tight text-[#2B1F1C]">
              המסגרת המושלמת ליופי שלך
            </h1>
            
            <p className="text-lg md:text-2xl font-normal text-[#2B1F1C]/80 max-w-2xl mx-auto leading-relaxed tracking-wide">
              מדגישה את היופי הטבעי שלך עם דיוק חסר פשרות ומקצועיות בלתי מתפשרת.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Button 
               asChild 
               size="lg" 
               className="w-[85%] max-w-[200px] sm:w-[180px] rounded-full px-6 h-12 md:h-14 text-base md:text-lg font-medium bg-[#2B1F1C]/5 hover:bg-[#2B1F1C]/10 border-[#2B1F1C]/10 text-[#2B1F1C] backdrop-blur-md transition-all active:scale-95"
            >
              <Link to="/treatments">השירותים שלנו</Link>
            </Button>
            
            <Button 
               asChild 
               size="lg" 
               className="w-[85%] max-w-[220px] sm:w-[200px] rounded-full px-6 h-12 md:h-14 text-base md:text-lg font-bold gradient-brand shimmer text-white shadow-[0_0_20px_rgba(229,193,179,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <a href="https://wa.me/9725XXXXXXXX" target="_blank" rel="noreferrer">
                קבעו תור עכשיו
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center cursor-pointer group animate-bounce"
           onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-[#2B1F1C]/60 text-[10px] font-serif tracking-[0.3em] uppercase mb-1 drop-shadow-sm group-hover:text-[#2B1F1C] transition-colors">
          גללי למטה
        </span>
        <div className="text-[#2B1F1C]/70 group-hover:text-[#2B1F1C] transition-colors">
            <ChevronDown className="w-8 h-8 stroke-[1.5px]" />
        </div>
      </div>
    </section>
  );
}
