export const siteConfig = {
  name: "Mohamad Taher",
  title: "Software Engineer",
  description: "Portfolio website of Mohamad Taher — Software Engineer specializing in AI-integrated backend systems, full-stack development, and scalable solutions.",
  accentColor: "#1d4ed8",
  social: {
    email: "tahr33288@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohamad-taher-46118711b/",
    github: "https://github.com/MohamadTaher",
  },
  aboutMe:
    "I am a Computer Science graduate with hands-on experience in software development, AI-integrated backend systems, and data handling. I have programming experience in Python, C++, and Java, with knowledge of version control, agile practices, and RESTful APIs. Through academic projects and professional internships, I have developed my ability to architect robust applications, build Retrieval-Augmented Generation (RAG) tools, and deliver scalable solutions.",
  skills: ["Python", "Java", "C/C++", "Docker", "Flask & REST APIs", "PostgreSQL & pgvector", "Redis & Celery", "RAG & LLM Integration", "Git", "JavaScript", "HTML/CSS", "SQL"],
  projects: [
    {
      name: "EPUB Translator",
      description:
        "A multi-threaded Python tool to automate EPUB book translation by integrating with the Gemini API. Engineered for robust, unsupervised operation with a custom rate limiter, fault-tolerant auto-saving, and a dynamic glossary.",
      link: "https://mohamadtaher.github.io/Verso/",
      skills: ["Python", "Gemini API", "Async Programming"],
    },
    {
      name: "Recto Leaf",
      description:
        "An Android reading app built in Kotlin and Jetpack Compose as a fork of Mihon, extending it with a complete web novel reader and its own novel sources. Added paged and continuous reading modes, text-to-speech, per-novel find-and-replace rules, and an automated release build pipeline with GitHub Actions.",
      link: "https://github.com/MohamadTaher/recto-leaf/releases/tag/v0.20.4",
      skills: ["Kotlin", "Jetpack Compose", "Android"],
    },
    {
      name: "Connect Four Unlimited",
      description:
        "A mobile game for Android applying Object-Oriented Design (OOD) principles in Java for game logic and XML for the user interface. Managed the complete development lifecycle from concept to deployment.",
      link: "https://github.com/MohamadTaher/ConnectFourGame/releases/tag/v1.0",
      skills: ["Java", "Android Studio", "Git"],
    },
    {
      name: "TutorMe",
      description:
        "A full-stack tutoring application using Java with an SQLite database for data management and an XML-based user interface. Built in an Agile environment with collaborative development.",
      link: "https://github.com/MohamadTaher/TutorMe/releases/tag/App",
      skills: ["Java", "SQLite", "Agile"],
    },
  ],
  experience: [
    {
      company: "Dominarlo",
      title: "Software Engineer",
      dateRange: "Oct 2025 – Present",
      bullets: [
        "Architected a full-stack AI educational platform by building a Meteor frontend and Flask backend, deploying the microservices via Docker Compose.",
        "Built a RAG-based HelpBot and automated exam-question API using PostgreSQL, pgvector, and Groq LLMs, providing contextual AI responses across multi-document knowledge bases.",
        "Optimized backend data pipelines by integrating Redis and Celery, enabling asynchronous PDF text extraction, chunking, and vector embedding with markitdown and Sentence Transformers.",
      ],
    },
    {
      company: "Coca Cola Canada",
      title: "Merchandise",
      dateRange: "Jun 2024 – Sep 2025",
      bullets: [
        "Followed detailed planograms and brand guidelines to execute in-store display setups, demonstrating strong attention to detail and adherence to structured processes.",
        "Managed inventory and maintained visual standards across multiple retail locations, applying organizational skills and consistency in execution.",
      ],
    },
    {
      company: "Diversified Staffing",
      title: "Labour",
      dateRange: "Jul 2022 – Aug 2024",
      bullets: [
        "Worked across multiple fast-paced industrial sites, adapting quickly to new environments and demonstrating strong reliability and work ethic.",
        "Collaborated with skilled trades teams to execute tasks efficiently under tight deadlines, developing discipline and process-oriented thinking.",
      ],
    },
  ],
  education: [
    {
      school: "MacEwan University",
      degree: "B.Sc. in Computer Science, Minor in Math",
      dateRange: "Completed May 2026",
      achievements: [],
    },
    {
      school: "Eastglen High School",
      degree: "High School Diploma",
      dateRange: "Completed 2021",
      achievements: [],
    },
  ],
};
