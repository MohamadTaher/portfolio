export const siteConfig = {
  name: "Mohamad Taher",
  title: "Software Engineer",
  description: "Portfolio website of Mohamad Taher — Software Engineer based in Dubai, building AI-integrated backends, RAG systems, web platforms, and Android apps.",
  accentColor: "#1d4ed8",
  social: {
    email: "tahr33288@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohamad-taher/",
    github: "https://github.com/MohamadTaher",
  },
  aboutMe:
    "I am a software engineer based in Dubai, UAE, with a B.Sc. in Computer Science and a Mathematics minor. I design, build, and ship production software end to end: AI-integrated backends, RAG systems, web platforms, and Android apps. I work in Python, Kotlin, Java, and TypeScript with REST APIs, Docker, CI/CD, and cloud deployment. I speak English and Arabic.",
  skills: [
    "Python",
    "Kotlin",
    "Java",
    "TypeScript",
    "SQL",
    "FastAPI & Flask",
    "REST APIs",
    "PostgreSQL & pgvector",
    "Redis & Celery",
    "RAG & LLM Integration",
    "React",
    "Jetpack Compose",
    "Docker",
    "GitHub Actions (CI/CD)",
    "Google Cloud Run",
    "Cloudflare Workers & D1",
    "Git",
  ],
  projects: [
    {
      name: "Verso — AI EPUB Translation Web App",
      description:
        "A multi-threaded pipeline that translates full-length EPUB books with large language models, using a custom rate limiter and a self-updating glossary that keeps names consistent across every chapter. Each model reply is checked against the expected chapter structure and retried with targeted corrections, so a malformed response never silently corrupts a book. Live progress streams to a React and TypeScript frontend over server-sent events; deployed with Docker on Google Cloud Run.",
      link: "https://mohamadtaher.github.io/Verso/",
      skills: ["Python", "FastAPI", "React", "TypeScript", "LLMs", "Docker", "Cloud Run"],
    },
    {
      name: "Recto Leaf — Android Reading App",
      description:
        "An Android reading app with end-to-end web novel support: custom sources that scrape and parse novel websites into searchable catalogs, chapter lists, and chapter text. Includes a Jetpack Compose reader with paged and continuous reading modes and integrated text-to-speech, plus signed, checksummed APK releases built by a GitHub Actions CI pipeline.",
      link: "https://github.com/MohamadTaher/recto-leaf/releases",
      skills: ["Kotlin", "Jetpack Compose", "Android", "GitHub Actions"],
    },
    {
      name: "TutorMe — Android Tutoring App",
      description:
        "A tutoring app built with SQLite and an XML-based Android UI in an Agile university team, with sprint stand-ups and peer code review on GitHub.",
      link: "https://github.com/MohamadTaher/TutorMe/releases",
      skills: ["Java", "SQLite", "XML", "Agile"],
    },
    {
      name: "Connect Four Unlimited — Android Game",
      description:
        "An Android game with object-oriented game logic and win detection, taken solo from concept to a signed public release.",
      link: "https://github.com/MohamadTaher/ConnectFourGame/releases",
      skills: ["Java", "XML", "Android"],
    },
  ],
  experience: [
    {
      company: "Dominarlo Publishing Corp — Edmonton, Canada",
      title: "Software Engineer",
      dateRange: "Sep 2025 – Present",
      bullets: [
        "Architected a full-stack AI educational platform with a Meteor frontend and a Flask backend, deployed as containerized microservices with Docker Compose.",
        "Built a RAG-based HelpBot and an automated exam-question generation API on PostgreSQL and pgvector with locally hosted LLMs, delivering contextual answers across multi-document knowledge bases.",
        "Optimized backend data pipelines with Redis and Celery, enabling asynchronous PDF text extraction, chunking, and vector embedding with markitdown and Sentence Transformers.",
      ],
    },
    {
      company: "Faiz Auto — Edmonton, Canada",
      title: "Freelance Web Developer",
      dateRange: "Oct 2026 – Nov 2026",
      bullets: [
        "Designed, built, and deployed a production booking platform for an auto repair shop on Cloudflare Workers and D1, with a mobile-first flow made for non-technical customers (book.faiz-auto.workers.dev).",
        "Engineered overlap-aware scheduling with an atomic SQL booking guard that prevents double-booking across variable appointment lengths, backed by 42 automated tests.",
        "Built a secure owner dashboard to manage hours, closures, appointments, and pricing, with PBKDF2 password hashing and HMAC-signed session cookies.",
      ],
    },
    {
      company: "Coke Canada Bottling — Edmonton, Canada",
      title: "Merchandiser",
      dateRange: "Jun 2023 – Sep 2025",
      bullets: [
        "Executed planogram resets, promotional displays, and shelf inventory across a multi-store territory.",
      ],
    },
  ],
  education: [
    {
      school: "MacEwan University — Edmonton, Canada",
      degree: "B.Sc. Computer Science, Minor in Mathematics",
      dateRange: "May 2026",
      achievements: [],
    },
  ],
};
