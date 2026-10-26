import {
  SiArduino,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiGithub,
  SiJupyter,
  SiLatex,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiFastapi,
  SiPandas,
  SiMysql,
  SiPython,
  SiPytorch,
  SiReact,
  SiGnubash,
  SiTensorflow,
  SiThreedotjs,
  SiVisualstudiocode,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiMui,
  SiTailwindcss,
  SiWeightsandbiases,
  SiMicrosoftazure,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  { icon: SiPostgresql, text: "PostgreSQL" },
  { icon: SiRedis, text: "Redis" },
  { icon: SiTypescript, text: "TypeScript" },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiPytorch,
    text: "PyTorch",
  },
  {
    icon: SiArduino,
    text: "Arduino",
  },
  {
    icon: SiMicrosoftazure,
    text: "Azure",
  },
  {
    icon: SiCplusplus,
    text: "C++",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiGithub,
    text: "GitHub",
  },
  {
    icon: SiJupyter,
    text: "Jupyter",
  },
  {
    icon: SiKubernetes,
    text: "Kubernetes",
  },
  {
    icon: SiLatex,
    text: "LaTeX",
  },
  {
    icon: SiNextdotjs,
    text: "Next.js",
  },
  {
    icon: SiNodedotjs,
    text: "Node.js",
  },
  {
    icon: SiNumpy,
    text: "NumPy",
  },
  {
    icon: SiFastapi,
    text: "FastAPI",
  },
  {
    icon: SiPandas,
    text: "Pandas",
  },
  {
    icon: SiMysql,
    text: "MySQL",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiGnubash,
    text: "Bash",
  },
  {
    icon: SiTensorflow,
    text: "TensorFlow",
  },
  {
    icon: SiThreedotjs,
    text: "Three.js",
  },
  {
    icon: SiVisualstudiocode,
    text: "VS Code",
  },
  {
    icon: SiWeightsandbiases,
    text: "Weights & Biases",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiSupabase,
    text: "Supabase",
  },
  {
    icon: SiMui,
    text: "Material-UI",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind CSS",
  },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "OrbitalsAI",
    category: "Speech & language AI · Co-founder",
    description:
      "Building African speech-to-text and voice intelligence, with batch and real-time transcription. My work spans speech and language systems, API design, inference infrastructure and production reliability.",
    link: "https://www.orbitalsai.com",
  },
  {
    title: "PrepTab",
    category: "Education · Co-founder & engineer",
    description:
      "An offline-first Android platform for WAEC, NECO and JAMB preparation. Built for connectivity and shared-device realities, with English, Hausa, Yoruba and Igbo support, practice questions, read-aloud explanations and progress tracking.",
    link: "https://www.preptab.com",
  },
  {
    title: "De Signature International",
    category: "Hospitality · Platform engineering",
    description:
      "Engineering across a public booking website, staff dashboard and Android in-room experience. Connects reservations, guest management, housekeeping and restaurant ordering in one operational platform.",
    link: "https://www.designaturehotel.com",
  },
  {
    title: "Story-Story",
    category: "Agentic AI · Award-winning project",
    description:
      "An illustrated storytelling system about African historical figures, orchestrated with LangGraph. Planner, storyteller, illustrator and publisher agents work together to create structured, child-friendly narratives. A Best Creative AI Project winner in the Agentic AI Innovation Challenge 2025.",
    link: "https://naija-heroes.vercel.app/",
  },
  {
    title: "KoroKoro",
    category: "Computer vision · Neural rendering",
    description:
      "A pipeline that turns approximately 30-second, 360-degree product videos into interactive 3D representations using object detection, segmentation and neural rendering.",
    link: "https://daheer.github.io/korokoro-web-v2",
  },
  {
    title: "QuickPunch",
    category: "NLP · News summarization",
    description:
      "A Nigerian-news summarization project that gathers articles from Punch's RSS feed, produces categorized summaries and delivers them by email.",
    link: "https://quick-punch.vercel.app",
  },
];

export interface WorkExperience {
  company: string;
  logo?: string;
  position: string;
  description: string;
  years?: string;
}

// OrbitalsAI dates remain omitted pending confirmation. UMaine and NabafatAI
// dates match the original portfolio, restored at Dahiru's request.
export const workExperiences: WorkExperience[] = [
  {
    company: "OrbitalsAI",
    logo: "/portfolio/orbitalsai.png",
    position: "Co-founder · Speech & language AI",
    description:
      "Co-founded a voice-intelligence platform focused on African languages. Contribute across speech recognition, multilingual NLP, model evaluation, backend engineering and the infrastructure that brings models into production.",
  },
  {
    company: "University of Maine",
    logo: "/portfolio/umaine.png",
    years: "Jun 2023 – Mar 2024",
    position: "AI Research Support Consultant",
    description:
      "Developed an object-level neural-reconstruction pipeline combining NVIDIA Instant-NGP, YOLO and Segment Anything. Achieved approximately 30× faster processing and a 20% improvement in reconstruction PSNR against the research baseline by focusing computation on the target object.",
  },
  {
    company: "NabafatAI",
    logo: "/portfolio/nabafat.png",
    years: "Jun 2024 – Present",
    position: "Machine Learning Engineer",
    description:
      "Reduced Video-LLaMA object-level hallucination by 32% and sentence-level hallucination by 26%, evaluated with CHAIR. Built stateful LangGraph workflows, MongoDB-grounded retrieval and fine-tuned Gorilla LLM for enterprise API calls.",
  },
  {
    company: "UltrabrainAI",
    logo: "/portfolio/ultrabrainai-logo.jpg",
    position: "AI Engineer",
    description:
      "Optimized computer-vision inference with TensorRT for approximately 3× faster inference. Developed YOLO-based features and trained and evaluated YOLOv9 on WIDER FACE, packaging the model for public loading through Torch Hub.",
    years: "Aug 2023 – Apr 2024",
  },
  {
    company: "iT Central Nigeria",
    logo: "/portfolio/itc.jpeg",
    position: "Machine Learning Engineer · Promoted from intern",
    description:
      "Joined as a Machine Learning Engineer Intern in June 2022 and progressed to Machine Learning Engineer in December 2022.",
    years: "Jun 2022 – Sep 2024",
  },
  {
    company: "FruitPunch AI",
    logo: "/portfolio/fruitpunch.png",
    position: "Contributor / Co-coordinator · Face Detection Team",
    description:
      "Contributed to Understanding Seals with AI, collaborating on computer-vision research for non-intrusive monitoring of marine mammals.",
    years: "Dec 2022 – Feb 2023",
  },
];

export const education = [
  {
    institution: "Ahmadu Bello University, Zaria",
    logo: "/portfolio/abu.png",
    qualification: "B.Eng. Computer Engineering",
    years: "2018–2024",
    grade: "GPA 4.20/5.00",
  },
  {
    institution: "Iya Abubakar Institute of ICT, Zaria",
    logo: "/portfolio/abu.png",
    qualification: "Diploma in Computer Systems Engineering",
    years: "2017–2019",
    grade: "GPA 3.00/4.00",
  },
];

export const recognition = [
  {
    title: "Best Creative AI Project · 2025",
    description:
      "Story-Story was one of four winners in this category of the ReadyTensor Agentic AI Innovation Challenge.",
  },
  {
    title: "Code-mixed Hausa transformer research",
    description:
      "Co-authored research benchmarking the performance and efficiency of transformer models for code-mixed Hausa.",
  },
  {
    title: "Community teaching & speaking",
    description:
      "Facilitated a five-day applied-machine-learning workshop in Lafia through Data Scientists Network Nigeria, contributed to GDSC technical-learning initiatives and shared work on deep-learning-powered 3D product visualization.",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Daheer" },
  { label: "LinkedIn", href: "https://linkedin.com/in/daheer-deedax" },
  { label: "Hugging Face", href: "https://huggingface.co/deedax" },
  { label: "ReadyTensor", href: "https://app.readytensor.ai/users/suhayrid6" },
  { label: "YouTube", href: "https://www.youtube.com/@deedaxinc.3389" },
  { label: "Speaking", href: "https://sessionize.com/dahiru-ibrahim-dahiru/" },
];

export const aboutYou = {
  name: "Dahiru Ibrahim Dahiru",
  suffix: "GMNSE",
  role: "AI engineer & technology founder",
  description:
    "I build machine learning and digital infrastructure for African languages, institutions and everyday operating conditions.",
  mission:
    "My goal is to help Africa participate as a producer of advanced technology, through locally relevant AI, useful products and shared knowledge.",
  focus: "Low-resource speech & language AI",
  yearsOfExperience: "4+ years",
  location: "Nigeria",
  email: "suhayrid6@gmail.com",
};

export const logoText = "@daheer";

export const marketingHeadlines = {
  mainHeadline: "Building AI for African languages. Products for real life.",
  subHeadline:
    "I'm Dahiru, an AI engineer, co-founder and product builder. My focus is low-resource speech and language AI, backed by experience in computer vision, agentic systems and the engineering needed to ship reliable products.",
};

export const websiteMetadata = {
  title: "Dahiru Ibrahim Dahiru | AI Engineer & Technology Founder",
  description:
    "Dahiru Ibrahim Dahiru builds African-language AI and digital infrastructure. Explore work across OrbitalsAI, PrepTab, applied research and production software.",
};
