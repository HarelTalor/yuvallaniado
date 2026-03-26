import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container px-4 mx-auto">
        <header className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold">צרו קשר</h1>
          <p className="text-muted-foreground text-lg">אני כאן לכל שאלה, התייעצות או קביעת תור.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-6">פרטי הסטודיו</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground">כתובת כתובת</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">טלפון</h3>
                  <p className="text-muted-foreground">05X-XXXXXXX</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">שעות פעילות</h3>
                  <p className="text-muted-foreground">א׳ - ה׳: 09:00 - 19:00</p>
                  <p className="text-muted-foreground">ו׳: 08:30 - 13:30</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Instagram size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">אינסטגרם</h3>
                  <a href="https://www.instagram.com/yuval.laniado/" className="text-accent underline-offset-4 hover:underline">@yuval.laniado</a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button size="lg" className="rounded-full px-12 h-16 text-xl font-bold gradient-brand shimmer shadow-[0_10px_30px_rgba(255,105,180,0.3)] w-full sm:w-auto">
                <a href="https://wa.me/9725XXXXXXXX" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                  <Phone size={24} />
                  לקביעת תור בווצאפ
                </a>
              </Button>
            </div>
          </div>

          {/* Map Placeholder Side */}
          <div className="aspect-square bg-surface rounded-3xl border border-border/50 flex flex-col items-center justify-center p-12 text-center shadow-inner overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 grayscale">
              <img src="/images/clinic_interior.png" alt="Studio Interior" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                <MapPin size={40} />
              </div>
              <h3 className="text-2xl font-bold">נינוחות, רוגע ותוצאות.</h3>
              <p className="text-muted-foreground">הסטודיו שלי מחכה לך לחוויה מושלמת.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
