import { Linkedin, Mail, Github, ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "milatifah0104@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="font-display text-lg font-bold tracking-tight">
              Umi<span className="text-muted"> Latifah</span>
            </span>
            <p className="text-xs text-muted">
              © {year} Umi Latifah. {t("footer.rights")}
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 border border-base rounded-full text-muted hover:text-base hover:border-strong transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="p-2.5 border border-base rounded-full text-muted hover:text-base hover:border-strong transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-base text-center">
          <p className="text-xs text-muted">{t("footer.builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
