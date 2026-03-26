import { ScrollReveal } from "../shared/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "אבחון וייעוץ אישי",
    desc: "נתחיל בפגישה בה נלמד את סוג העור שלך והמטרות שלנו."
  },
  {
    number: "02",
    title: "תוכנית מותאמת",
    desc: "נבנה תוכנית מותאמת אישית המשלבת טכנולוגיות מתקדמות."
  },
  {
    number: "03",
    title: "תהליך הטיפול",
    desc: "הטיפול מתבצע באווירה רגועה ויוקרתית, תוך שימוש במכשור רפואי."
  },
  {
    number: "04",
    title: "ליווי ותוצאות",
    desc: "אני מלווה אותך גם אחרי הטיפול לשימור התוצאות."
  }
];

export default function ClinicExperience() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">חווית הטיפולים של נטלי ברמי</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            תהליך מקצועי, יסודי ואישי מרגע הכניסה ועד להשגת התוצאה המושלמת.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <div className="relative group p-6 rounded-3xl bg-surface/50 border border-primary/5 md:bg-transparent md:border-none md:p-0">
                <div className="text-5xl md:text-7xl font-serif font-bold text-primary/10 absolute -top-4 -right-2 md:-top-10 md:-right-4 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                <div className="space-y-2 md:space-y-4 relative z-10">
                  <h3 className="text-lg md:text-xl font-bold border-r-2 border-secondary pr-3 md:pr-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed pr-3 md:pr-4 line-clamp-3 md:line-clamp-none">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
