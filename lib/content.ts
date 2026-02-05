export type BioSegment =
  | { type: "text"; value: string }
  | {
      type: "popover";
      trigger: string;
      title: string;
      description: string;
      logo?: string;
    };

export const content = {
  name: "Zahid Fahim",
  role: "Tech Lead",
  location: "Dhaka, Bangladesh",
  bio: [
    {
      type: "text" as const,
      value: "I'm the Tech Lead @ ",
    },
    {
      type: "popover" as const,
      trigger: "Nifty IT Solution Ltd",
      title: "Nifty IT Solution Ltd",
      description:
        "Leading the tech team: architecture, delivery, and mentoring. We build software solutions and help businesses scale with the right tools and practices.",
      logo: "https://niftyitsolution.com/wp-content/uploads/2024/06/Nifty-IT-Solution-Logo_White-Background_Rectangle_Transparent.svg",
    },
    {
      type: "text" as const,
      value:
        " with a focus on building scalable products and leading engineering teams. I care about clean architecture, developer experience, and shipping reliably.",
    },
  ] as BioSegment[],
  currently: {
    prefix: "Maintaining ",
    projectName: "Anchor Notes",
    projectUrl: "https://github.com/ZhFahim/anchor",
    suffix: " — open-source self-hosted note-taking app.",
  },
  skills: ["Node.js", "React", "TypeScript", "Flutter", "Docker"],
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/ZhFahim" },
    { label: "GitHub", href: "https://github.com/ZhFahim" },
    { label: "Twitter", href: "https://x.com/ZhFahimOfficial" },
  ],
} as const;
