export const personalInfo = {
  name: "Abdullah Tahir",
  headline: "an aspiring software engineer in love with the process of learning.",
  bio: `I'm currently an undergraduate student at The University of Adelaide - studying a double degree in Mechanical Engineering (Aerospace) with Computer Science. During my time as a student, I have always believed in a simply yet powerful philosophy; the best way to grow as an individual is to throw yourself into new experiences. Whether it be through taking upon new and foreign hobbies, such as bouldering or competitive programming, or even trying to figure out how a crater detection algorithm works with zero prior machine learning experience - I wholeheartedly embrace the challenge of pushing past my comfort zone. Each new adventure not only manages to humble me every single time, but also teach me invaluable lessons about perseverance, and the boundless potential of the human spirit!

One of the many things I enjoy is taking the time to break down complex problems- and this is where I discovered my passion for coding. Check out some of the projects I have worked on over the years down below!`,
  avatarUrl: '/images/memoji.jpg',
  resumeUrl: '/AbdullahTahir_Resume_Feb2024.pdf',
  universityUrl: 'https://www.adelaide.edu.au/',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/abdullah-tahir1/',
    github: 'https://github.com/abda-1',
    email: 'mailto:m.abbytahir@gmail.com'
  }
};

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  period: {
    start: string;
    end: string;
  };
  linkText?: string;
  links?: Array<{
    url: string;
    text: string;
  }>;
  languages?: string[];
};

export const projects: Project[] = [
  {
    title: "Predictive Maintainence Machine Learning Model",
    description: "Developed a machine learning pipeline to predict rail breakages along Australian railways in cooperation with insightfactory.ai for a final year software engineering project. My team won the university competitiion, having our pipeline rank 1st of of 15 teams.",
    imageUrl: "/images/uofa_insightfactory.png",
    link: "#home",
    period: {
      start: "Sept 2023",
      end: "Jan 2024"
    },
    links: [
      {
        url: "https://insightfactory.ai/",
        text: "insightfactory.ai"
      }
    ],
    languages: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"]
  },
  {
    title: "Bitboard Chess Game",
    description: "Developed a two player chess game using unsigned 64-bit integers to represent the state of the board. Inspired by the StockFish chess engine from lichess.org - I am planning to extend this project to have a fully working AI opponent.",
    imageUrl: "/images/chessgame.png",
    link: "https://github.com/abda-1/bitboard-chess",
    period: {
      start: "Sept 2023",
      end: "Jan 2024"
    },
    links: [
      {
        url: "https://lichess.org/",
        text: "lichess.org"
      }
    ],
    languages: ["C++", "Game Development", "Bit Manipulation"]
  },
  {
    title: "Typing Test Application",
    description: "Created a typing test application inspired by monkeytype.com. The web application (which is currently live- see my github) is aimed towards programmers looking to increase their fluency in languages such as C++, Java, and Python.",
    imageUrl: "/images/typingtest.png",
    link: "https://github.com/abda-1/abdatype",
    period: {
      start: "Dec 2023",
      end: "Jan 2024"
    },
    links: [
      {
        url: "https://monkeytype.com/",
        text: "monkeytype.com"
      }
    ],
    languages: ["JavaScript", "React", "CSS", "HTML"]
  },
  {
    title: "Terminal Based Home Appliance System",
    description: "Worked alongside other programmers in my first year of computer science to create a terminal based home appliance system to manage appliances within a house. The application uses ncurses to display the information to the user!",
    imageUrl: "/images/terminal.png",
    link: "https://github.com/abda-1/Home-Appliance-Organiser",
    period: {
      start: "Apr 2022",
      end: "May 2022"
    },
    languages: ["C++", "Ncurses"]
  }
];

export type Experience = {
  title: string;
  description: string;
  imageUrl?: string;
  period: {
    start: string;
    end: string;
  };
  link?: string;
};

export const experiences: Experience[] = [
  {
    title: "Academic Tutor",
    description: "I love to teach, and so I spend time outside of my academic commitments providing tutoring for students in their final years of highschool. I primarily focus on teaching mathematics, and have helped many of my students achieve merits (A+) in their overall SACE results.",
    imageUrl: "/images/memoji.jpg",
    period: {
      start: "Jan 2022",
      end: "Today"
    }
  },
  {
    title: "Competitive Programming Club",
    description: "When possible, I love to participate in competitive programming contests held by the University of Adelaide's Competitive Programming Club. Working alongside other programmers, it's an amazing way to keep honing my problem solving skills.",
    imageUrl: "/images/cpc.png",
    period: {
      start: "Mar 2023",
      end: "Today"
    }
  },
  {
    title: "Crater Detection Algorithm Research",
    description: "After wanting to explore the relationship between AI and space, I undertook a self-driven three-week intensive research project- exploring existing Crater Detection Algorithms (CDAs). I spent time unpacking various implementations, and documented my efforts for PhD students to use in their research.",
    imageUrl: "/images/uofa.png",
    period: {
      start: "Aug 2023",
      end: "Aug 2023"
    }
  },
 
];

export type WorkExperience = {
  company: string;
  position: string;
  description: string;
  imageUrl?: string;
  period: {
    start: string;
    end: string;
  };
  location?: string;
  link?: string;
  skills?: string[];
};

export const workExperiences: WorkExperience[] = [
  {
    company: "Inovor Technologies",
    position: "Software Engineering Intern",
    description: "Developed an operations dashboard to display mission operations and telemetry data for all of Inovor's active satellites. Performed data analysis on the telemetry data and collaborated with the engineering team to provide insights on the performance of the satellites.",
    period: {
      start: "Dec 2024",
      end: "Feb 2025"
    },
    imageUrl: "/images/inovor.png",
    location: "Adelaide, Australia",
    link: "https://www.inovor.com.au/",
    skills: ["Python", "Javascript"]
  },
];

export const footerYear = "2025"; 