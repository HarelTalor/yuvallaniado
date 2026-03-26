import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Users, Sparkles, MapPin } from "lucide-react";

const clinicImages = [
  { src: "/images/clinic_interior.png", alt: "חלל הקליניקה" },
  { src: "/images/clinic_interior_v2.png", alt: "אזור הטיפולים" },
  { src: "/images/luxury_treatment.png", alt: "ציוד מתקדם" },
];

const famousClients = [
  { name: "לקוחה מרוצה", image: "/images/luxury_treatment.png" },
  { name: "לקוחה מרוצה", image: "/images/luxury_treatment.png" },
  { name: "לקוחה מרוצה", image: "/images/luxury_treatment.png" },
];

export default function About() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-16">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <ScrollReveal>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary">אודות יובל לניאדו</h1>
            <div className="w-24 h-1 gradient-brand mx-auto rounded-full" />
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto pt-4 leading-relaxed">
              הסיפור מאחורי הקליניקה, הגישה המקצועית והמחויבות למצוינות בכל פרט.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Bio Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <ScrollReveal direction="right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="/images/yuval_portrait.png" 
                  alt="יובל לניאדו" 
                  className="w-full h-full object-cover aspect-[4/5] blur-[4px]"
                />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-primary border-r-4 border-accent pr-6">החזון המקצועי</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="font-bold">
                  [טקסט דמה המציג את המשפט הפותח של האודות והחזון המקצועי של הקליניקה.]
                </p>
                <p>
                  [טקסט דמה המתאר את הניסיון המקצועי, ההכשרות והערך המוסף של טיפולי הקליניקה עבור הלקוחה. כאן יופיע סיפור המותג המורחב.]
                </p>
                <p>
                  [טקסט דמה המדגיש את הגישה האישית והשירות הניתן לכל לקוחה בתהליך הטיפול והשיקום.]
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="space-y-2">
                    <Sparkles className="text-accent" size={24} />
                    <h4 className="font-bold text-primary font-serif">דיוק ואמנות</h4>
                    <p className="text-sm">שילוב של מדע ואמנות לתוצאה מושלמת.</p>
                  </div>
                  <div className="space-y-2">
                    <Users className="text-accent" size={24} />
                    <h4 className="font-bold text-primary font-serif">ליווי אישי</h4>
                    <p className="text-sm">יחס אישי ומקצועי מכל הלב לכל לקוחה.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Gallery Section */}
        <div className="mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <Camera className="text-accent" />
              <h2 className="text-3xl font-serif font-bold text-primary">סיור בקליניקה</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicImages.map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="rounded-3xl overflow-hidden shadow-lg group relative h-80 border border-primary/5">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-medium flex items-center gap-2">
                      <MapPin size={16} /> {img.alt}
                    </p>
                    <div className="absolute top-0 right-0 p-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                        <Sparkles className="text-white" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Famous Customers Section */}
        <div className="bg-interesting-luxury -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 py-24 rounded-[3rem] border border-primary/5">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">הלקוחות שלנו</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">עוד לקוחות מרוצות וציטוט קצר (אולי מפורסמים)</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {famousClients.map((client, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Card className="border-none bg-white shadow-xl rounded-[2.5rem] overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                  <div className="aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={client.image} alt={client.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-8 text-center bg-white/50 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-primary mb-1">{client.name}</h3>
                    <div className="mt-4 pt-4 border-t border-primary/5">
                      <p className="text-muted-foreground text-sm italic">"[טקסט דמה: ציטוט או המלצה קצרה של הלקוחה על הטיפול והשירות]"</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
