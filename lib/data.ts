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
} from "react-icons/si";

export const skills = [
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
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "KoroKoro",
    description: "A novel way to view items for sale. Uses a dynamic fusion of YOLOv8, OWL-ViT, Segment-Anything, OpenCV to transform 30-second 360-degree videos into interactable 3D models.",
    link: "http://3.87.197.112:3000/",
  },
  {
    title: "QuickPunch",
    description: "Get your daily summaries of Nigerian news in style. A news aggregator that scrapes news from PunchNG's RSS Feed, summarizes them, categorizes them, and distributes to users accordingly via email.",
    link: "https://quick-punch.vercel.app",
  },
  {
    title: "TLDR-the-TnC",
    description: "TLDR the T&C uses an LLM to understand the contents of Terms and Conditions documents and provides a user-friendly chatbot interface for users to ask questions and receive answers.",
    link: "https://github.com/Daheer/TLDR-the-TnC",
  },
  {
    title: "OIDv4-2-YOLO",
    description: "Simple toolkit for converting Open Images Dataset v4 (OIDv4) annotations to YOLO format.",
    link: "https://github.com/Daheer/OIDv4-2-YOLO",
  },
  {
    title: "Mood Scope",
    description: "Mood Scope detects emotions of people in an image by embedding the image into a vector space using CLIP and comparing which emotion vector it is closest to.",
    link: "https://github.com/Daheer/mood-scope",
  },
  {
    title: "Fire Detector",
    description: "Fire Detection System Using Gas and Temperature Sensors.",
    link: "https://github.com/Daheer/fire-detector",
  },
  {
    title: "Deriv Notify",
    description: "Send e-mail alerts when a symbol's quote reaches a set threshold. Uses Deriv API",
    link: "http://34.229.163.75:3003/",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "University of Maine",
    logo: "/umaine.png",
    position: "AI Research Support Consultant",
    description: "Focus on advancing detailed object-level reconstruction by using Instant NGP, a Neural Radiance Fields platform from NVIDIA and integrating it with YOLOv8 coupled with SAM to identify individual objects within a scene",
    years: "Jun, 2023 - Present",
  },
  {
    company: "Ultrabrain AI",
    logo: "/ultrabrainai-logo.jpg",
    position: "AI Engineer",
    description: "Involved optimizing the company's flagship AI models for real-world efficiency to achieve a multiple times inference speedup with TensorRT",
    years: "Aug, 2023 - Apr, 2024",
  },
  {
    company: "FruitPunch AI",
    logo: "/fruitpunch.png",
    position: "Contributor / Co-cordinator - Face Detection Team",
    description: "Involved collaborating with researchers from Colgate University to create a facial recognition system that allows for the non-intrusive analysis of harbor seals and other marine mammals, enabling the tracking of their population and movements.",
    years: "Dec, 2022 - Feb, 2023",
  },
  {
    company: "IT Central Nigeria",
    logo: "/itc.jpeg",
    position: "Machine Learning Engineer",
    description: "Built the prototype of OneCenter, an AI-powered customer care agent with an interactive voice response that performs intent classification on user complaints and responds accordingly",
    years: "Jun, 2022 - Present",
  },
  {
    company: "Ahmadu Bello University",
    logo: "/abu.png",
    position: "Student",
    description:
      "Studying Computer Engineering",
    years: "Expected 2024",
  },
];

export const aboutYou = {
  name: "Dahiru Ibrahim Dahiru",
  description:
  "👋🏾Hi, I'm Dahiru. An AI Engineer. I get a thrill from solving real-world problems with ",
  formula: "f = Wx + b",
  description2: " and that's why I'm porting my understanding of AI to the web. ",
  yearsOfExperience: "2.5 years",
  location: "Nigeria",
  email: "suhayrid6@gmail.com",
};

export const logoText = "@daheer";

export const marketingHeadlines = {
  mainHeadline: "I work in the intersection of ML models and web",
  subHeadline: "Heavily applies #GitGud in life.",
};

export const websiteMetadata = {
  title: "Dahiru Ibrahim | Machine Learning Engineer",
  description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
};
