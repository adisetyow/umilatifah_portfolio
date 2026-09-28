import { ArrowRight, Mail, ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

export function Hero() {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Geometric accent */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 pointer-events-none">
        <div className="w-full h-full border-l border-base opacity-20" />
      </div>

      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 lg:px-8 w-full reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-current opacity-30" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {t("hero.greeting")}
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]">
              {t("hero.name")}
            </h1>

            <p className="mt-6 max-w-xl text-base text-secondary leading-relaxed sm:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-base text-bg-base rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                {t("hero.viewProjects")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 px-6 py-3 border border-strong rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {t("hero.contactMe")}
              </button>
            </div>

            {/* Stats strip */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { value: "3.78", label: "GPA / 4.00" },
                { value: "6+", label: "Projects" },
                { value: "5+", label: "Certs" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-base pl-4">
                  <div className="font-display text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-base opacity-20 rounded-sm" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-strong opacity-40" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-strong opacity-40" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
                <img
                  // src="https://images.pexels.com/photos/8278917/pexels-photo-8278917.jpeg?auto=compress&cs=tinysrgb&h=800&w=640"
                  src="img/download (6).jpg"
                  alt="Industrial Engineering Graduate"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-base transition-colors"
        aria-label={t("hero.scroll")}
      >
        <span className="text-xs uppercase tracking-wider hidden sm:block">
          {t("hero.scroll")}
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
