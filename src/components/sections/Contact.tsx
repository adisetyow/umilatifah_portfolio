import { useState, type FormEvent } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Section } from "@/components/Section";
import { useReveal } from "@/hooks/useReveal";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:milatifah0104@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

export function Contact() {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = t("contact.nameError");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t("contact.emailError");
    if (!form.subject.trim()) newErrors.subject = t("contact.subjectError");
    if (form.message.trim().length < 10)
      newErrors.message = t("contact.messageError");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulate sending — replace with real API endpoint
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <Section
      id="contact"
      label={t("contact.label")}
      heading={t("contact.heading")}
      description={t("contact.description")}
    >
      <div
        ref={ref}
        className={`grid lg:grid-cols-5 gap-12 reveal ${visible ? "is-visible" : ""}`}
      >
        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField
                label={t("contact.name")}
                id="name"
                value={form.name}
                onChange={(v) => update("name", v)}
                placeholder={t("contact.namePlaceholder")}
                error={errors.name}
              />
              <FormField
                label={t("contact.email")}
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                placeholder={t("contact.emailPlaceholder")}
                error={errors.email}
              />
            </div>

            <FormField
              label={t("contact.subject")}
              id="subject"
              value={form.subject}
              onChange={(v) => update("subject", v)}
              placeholder={t("contact.subjectPlaceholder")}
              error={errors.subject}
            />

            <FormField
              label={t("contact.message")}
              id="message"
              textarea
              value={form.message}
              onChange={(v) => update("message", v)}
              placeholder={t("contact.messagePlaceholder")}
              error={errors.message}
            />

            {/* Status messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                {t("contact.success")}
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                {t("contact.error")}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-base text-bg-base rounded-full text-sm font-semibold hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("contact.sending")}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  {t("contact.send")}
                </>
              )}
            </button>
          </form>
        </div>

        {/* Social links */}
        <div className="lg:col-span-2">
          <div className="border border-base rounded-sm p-6 bg-secondary/50 h-full">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted mb-6">
              {t("contact.findMe")}
            </h3>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 border border-base rounded-sm hover:border-strong hover:bg-tertiary transition-colors"
                  >
                    <div className="w-10 h-10 border border-base rounded-sm flex items-center justify-center flex-shrink-0">
                      <social.icon className="h-5 w-5 text-muted group-hover:text-base transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-secondary group-hover:text-base transition-colors">
                      {social.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FormField({
  label,
  id,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  textarea = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  error?: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium uppercase tracking-wider text-muted mb-2"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={5}
          className={`w-full bg-secondary border rounded-sm px-4 py-3 text-sm text-base placeholder:text-muted/60 focus:outline-none focus:border-strong transition-colors resize-none ${
            error ? "border-red-500 dark:border-red-500" : "border-base"
          }`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-secondary border rounded-sm px-4 py-3 text-sm text-base placeholder:text-muted/60 focus:outline-none focus:border-strong transition-colors ${
            error ? "border-red-500 dark:border-red-500" : "border-base"
          }`}
        />
      )}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
