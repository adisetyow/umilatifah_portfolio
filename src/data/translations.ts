export type Language = "en" | "id";

export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.skills"
  | "nav.projects"
  | "nav.education"
  | "nav.contact"
  | "hero.greeting"
  | "hero.name"
  | "hero.title"
  | "hero.subtitle"
  | "hero.viewProjects"
  | "hero.contactMe"
  | "hero.scroll"
  | "about.label"
  | "about.heading"
  | "about.p1"
  | "about.p2"
  | "about.p3"
  | "about.interestsTitle"
  | "about.interest1"
  | "about.interest2"
  | "about.interest3"
  | "about.interest4"
  | "about.interest5"
  | "skills.label"
  | "skills.heading"
  | "skills.description"
  | "skills.core"
  | "skills.tools"
  | "projects.label"
  | "projects.heading"
  | "projects.description"
  | "projects.viewDetails"
  | "projects.closeDetails"
  | "projects.outcome"
  | "projects.skills"
  | "education.label"
  | "education.heading"
  | "education.description"
  | "certifications.label"
  | "certifications.heading"
  | "certifications.description"
  | "contact.label"
  | "contact.heading"
  | "contact.description"
  | "contact.name"
  | "contact.email"
  | "contact.subject"
  | "contact.message"
  | "contact.send"
  | "contact.sending"
  | "contact.success"
  | "contact.error"
  | "contact.namePlaceholder"
  | "contact.emailPlaceholder"
  | "contact.subjectPlaceholder"
  | "contact.messagePlaceholder"
  | "contact.nameError"
  | "contact.emailError"
  | "contact.subjectError"
  | "contact.messageError"
  | "contact.findMe"
  | "footer.rights"
  | "footer.builtWith";

const en: Record<TranslationKey, string> = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.education": "Education",
  "nav.contact": "Contact",
  "hero.greeting": "Industrial Engineering Graduate",
  "hero.name": "Umi Latifah",
  "hero.title": "Industrial Engineering Graduate",
  "hero.subtitle":
    "Passionate about process optimization, lean manufacturing, and data-driven decision making. Ready to contribute efficiency and continuous improvement to forward-thinking organizations.",
  "hero.viewProjects": "View My Projects",
  "hero.contactMe": "Contact Me",
  "hero.scroll": "Scroll to explore",
  "about.label": "About Me",
  "about.heading": "A brief introduction",
  "about.p1":
    "I am a recent graduate in Industrial Engineering with a strong foundation in analyzing, designing, and optimizing complex systems. My academic journey has equipped me with analytical tools and methodologies to identify inefficiencies and implement sustainable solutions.",
  "about.p2":
    "Throughout my studies, I developed a keen interest in process optimization, production systems, and quality management. I believe that small, continuous improvements compound into significant operational advantages — a philosophy I apply to every project I undertake.",
  "about.p3":
    "I am seeking opportunities where I can apply my knowledge of lean principles, supply chain management, and data analysis to drive measurable results. I am eager to learn, adaptable, and committed to delivering excellence in every task.",
  "about.interestsTitle": "Areas of Interest",
  "about.interest1": "Process Optimization",
  "about.interest2": "Production Systems",
  "about.interest3": "Quality Management",
  "about.interest4": "Supply Chain Management",
  "about.interest5": "Continuous Improvement",
  "skills.label": "Skills & Expertise",
  "skills.heading": "What I bring to the table",
  "skills.description":
    "A blend of industrial engineering principles, analytical tools, and project management capabilities developed through academic projects and internships.",
  "skills.core": "Core Competencies",
  "skills.tools": "Software & Tools",
  "projects.label": "Projects & Experience",
  "projects.heading": "Selected work and experience",
  "projects.description":
    "A collection of academic projects, internships, and research that demonstrate my practical understanding of industrial engineering principles.",
  "projects.viewDetails": "View Details",
  "projects.closeDetails": "Close",
  "projects.outcome": "Outcome",
  "projects.skills": "Skills Applied",
  "education.label": "Education",
  "education.heading": "Academic background",
  "education.description": "My formal education and academic achievements.",
  "certifications.label": "Certifications & Achievements",
  "certifications.heading": "Credentials and accomplishments",
  "certifications.description":
    "Professional certifications, training programs, and awards that validate my expertise and commitment to continuous learning.",
  "contact.label": "Get In Touch",
  "contact.heading": "Let us work together",
  "contact.description":
    "Whether you have a question, an opportunity, or just want to connect, I would love to hear from you. Use the form below or reach out through any of the platforms.",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.subject": "Subject",
  "contact.message": "Message",
  "contact.send": "Send Message",
  "contact.sending": "Sending...",
  "contact.success": "Thank you! Your message has been sent successfully.",
  "contact.error":
    "Something went wrong. Please try again or email me directly.",
  "contact.namePlaceholder": "Your full name",
  "contact.emailPlaceholder": "you@example.com",
  "contact.subjectPlaceholder": "What is this about?",
  "contact.messagePlaceholder": "Tell me about your opportunity or question...",
  "contact.nameError": "Please enter your name",
  "contact.emailError": "Please enter a valid email address",
  "contact.subjectError": "Please enter a subject",
  "contact.messageError": "Please enter a message (at least 10 characters)",
  "contact.findMe": "Find me on",
  "footer.rights": "All rights reserved.",
  "footer.builtWith": "Designed & built with precision",
};

const id: Record<TranslationKey, string> = {
  "nav.home": "Beranda",
  "nav.about": "Tentang",
  "nav.skills": "Keahlian",
  "nav.projects": "Proyek",
  "nav.education": "Pendidikan",
  "nav.contact": "Kontak",
  "hero.greeting": "Sarjana Teknik Industri",
  "hero.name": "Umi Latifah",
  "hero.title": "Sarjana Teknik Industri",
  "hero.subtitle":
    "Bersemangat dalam optimalisasi proses, manufaktur ramping, dan pengambilan keputusan berbasis data. Siap berkontribusi untuk efisiensi dan perbaikan berkelanjutan bagi organisasi yang berorientasi ke depan.",
  "hero.viewProjects": "Lihat Proyek Saya",
  "hero.contactMe": "Hubungi Saya",
  "hero.scroll": "Gulir untuk menjelajah",
  "about.label": "Tentang Saya",
  "about.heading": "Perkenalan singkat",
  "about.p1":
    "Saya adalah lulusan Teknik Industri dengan fondasi kuat dalam menganalisis, merancang, dan mengoptimalkan sistem yang kompleks. Perjalanan akademik saya membekali dengan alat dan metodologi analitis untuk mengidentifikasi inefisiensi dan menerapkan solusi yang berkelanjutan.",
  "about.p2":
    "Sepanjang studi, saya mengembangkan minat mendalam dalam optimalisasi proses, sistem produksi, dan manajemen mutu. Saya percaya bahwa perbaikan kecil yang berkelanjutan akan menghasilkan keunggulan operasional yang signifikan — filosofi yang saya terapkan di setiap proyek.",
  "about.p3":
    "Saya mencari peluang untuk menerapkan pengetahuan saya dalam prinsip lean, manajemen rantai pasok, dan analisis data untuk mencapai hasil yang terukur. Saya antusias untuk belajar, mudah beradaptasi, dan berkomitmen memberikan keunggulan dalam setiap tugas.",
  "about.interestsTitle": "Bidang Minat",
  "about.interest1": "Optimalisasi Proses",
  "about.interest2": "Sistem Produksi",
  "about.interest3": "Manajemen Mutu",
  "about.interest4": "Manajemen Rantai Pasok",
  "about.interest5": "Perbaikan Berkelanjutan",
  "skills.label": "Keahlian & Kompetensi",
  "skills.heading": "Yang saya tawarkan",
  "skills.description":
    "Perpaduan prinsip teknik industri, alat analitis, dan kemampuan manajemen proyek yang dikembangkan melalui proyek akademik dan magang.",
  "skills.core": "Kompetensi Inti",
  "skills.tools": "Perangkat Lunak & Alat",
  "projects.label": "Proyek & Pengalaman",
  "projects.heading": "Karya dan pengalaman terpilih",
  "projects.description":
    "Kumpulan proyek akademik, magang, dan penelitian yang menunjukkan pemahaman praktis saya terhadap prinsip teknik industri.",
  "projects.viewDetails": "Lihat Detail",
  "projects.closeDetails": "Tutup",
  "projects.outcome": "Hasil",
  "projects.skills": "Keahlian Diterapkan",
  "education.label": "Pendidikan",
  "education.heading": "Latar belakang akademik",
  "education.description": "Pendidikan formal dan prestasi akademik saya.",
  "certifications.label": "Sertifikasi & Prestasi",
  "certifications.heading": "Kredensial dan pencapaian",
  "certifications.description":
    "Sertifikasi profesional, program pelatihan, dan penghargaan yang memvalidasi keahlian dan komitmen saya terhadap pembelajaran berkelanjutan.",
  "contact.label": "Hubungi Saya",
  "contact.heading": "Mari berkolaborasi",
  "contact.description":
    "Baik Anda memiliki pertanyaan, peluang, atau sekadar ingin terhubung, saya akan senang mendengar dari Anda. Gunakan formulir di bawah atau hubungi melalui platform berikut.",
  "contact.name": "Nama",
  "contact.email": "Email",
  "contact.subject": "Subjek",
  "contact.message": "Pesan",
  "contact.send": "Kirim Pesan",
  "contact.sending": "Mengirim...",
  "contact.success": "Terima kasih! Pesan Anda telah berhasil dikirim.",
  "contact.error":
    "Terjadi kesalahan. Silakan coba lagi atau email saya langsung.",
  "contact.namePlaceholder": "Nama lengkap Anda",
  "contact.emailPlaceholder": "anda@contoh.com",
  "contact.subjectPlaceholder": "Tentang apa ini?",
  "contact.messagePlaceholder":
    "Ceritakan tentang peluang atau pertanyaan Anda...",
  "contact.nameError": "Silakan masukkan nama Anda",
  "contact.emailError": "Silakan masukkan alamat email yang valid",
  "contact.subjectError": "Silakan masukkan subjek",
  "contact.messageError": "Silakan masukkan pesan (minimal 10 karakter)",
  "contact.findMe": "Temukan saya di",
  "footer.rights": "Hak cipta dilindungi.",
  "footer.builtWith": "Dirancang & dibangun dengan presisi",
};

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en,
  id,
};
