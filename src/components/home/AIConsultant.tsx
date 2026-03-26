import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    question: "מהי מטרת הטיפול העיקרית שלך?",
    options: [
      { label: "ניקוי עמוק ורענון", value: "cleaning" },
      { label: "טיפול בקמטים ומיצוק", value: "aging" },
      { label: "טיפול באקנה או פצעונים", value: "acne" },
      { label: "פינוק ורוגע", value: "pampering" }
    ]
  },
  {
    id: 2,
    question: "איך היית מגדירה את סוג העור שלך?",
    options: [
      { label: "יבש או מתוח", value: "dry" },
      { label: "שומני או מבריק", value: "oily" },
      { label: "מעורב (גם וגם)", value: "mixed" },
      { label: "רגיש או אדמומי", value: "sensitive" }
    ]
  }
];

const recommendations: Record<string, { title: string; desc: string }> = {
  "cleaning": { title: "טיפול פנים קלאסי", desc: "הבחירה המושלמת לרענון וניקוי יסודי של העור." },
  "aging": { title: "טיפול פנים פרימיום אנטי-אייג'ינג", desc: "טיפול עמוק המשלב חומרים מזינים למיצוק וטשטוש קמטים." },
  "acne": { title: "טיפול פנים רפואי לעור בעייתי", desc: "טיפול ממוקד להרגעת דלקות ושיפור מראה העור." },
  "pampering": { title: "עיסוי פנים ופילינג עדין", desc: "שעה של שקט ורוגע שמחזירה לעור את הזוהר הטבעי שלו." }
};

export default function AIConsultant() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
  };

  const getRecommendation = () => {
    const primaryGoal = answers[0];
    return recommendations[primaryGoal] || recommendations["cleaning"];
  };

  return (
    <section className="py-24 bg-interesting-luxury border-t border-border/50 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
         <Sparkles className="w-full h-full text-primary" />
      </div>
      
      <div className="container px-4 mx-auto max-w-4xl relative">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="text-primary" size={24} />
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary">היועצת האישית של יובל לניאדו</h2>
          <Sparkles className="text-primary" size={24} />
        </div>

        <Card className="border-primary/20 bg-surface/50 backdrop-blur-sm overflow-hidden min-h-[400px] flex flex-col justify-center shadow-xl rounded-3xl">
          <CardContent className="p-8 md:p-12 text-center">
            {!isFinished ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <p className="text-primary font-medium">שלב {currentStep + 1} מתוך {steps.length}</p>
                  <h3 className="text-3xl font-bold">{steps[currentStep].question}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {steps[currentStep].options.map((option) => (
                    <Button
                      key={option.value}
                      variant="outline"
                      className="h-16 text-lg rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-foreground/80 md:px-8"
                      onClick={() => handleAnswer(option.value)}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <Button variant="ghost" className="mt-4" onClick={() => setCurrentStep(currentStep - 1)}>
                    חזרה לשלב הקודם
                  </Button>
                )}
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                  <MessageSquare size={40} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">היועצת ממליצה:</h3>
                  <div className="p-8 rounded-3xl bg-primary text-primary-foreground shadow-inner">
                    <p className="text-2xl font-bold mb-3">{getRecommendation().title}</p>
                    <p className="text-lg opacity-90 leading-relaxed">{getRecommendation().desc}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold gradient-brand shimmer text-white shadow-lg shadow-primary/20 hover:scale-105 transition-transform border-none" asChild>
                    <a href={`https://wa.me/9725XXXXXXXX?text=היי יובל, היועצת בוט המליצה לי על ${getRecommendation().title}, אשמח לשמוע עוד.`} target="_blank" rel="noreferrer">
                      דברי איתי על זה בוואטסאפ
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg border-primary/20" onClick={reset}>
                    התחילי מהתחלה
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
