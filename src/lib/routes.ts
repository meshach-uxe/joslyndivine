export type Route = {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
};

export const ROUTES: Record<string, Route> = {
  home: {
    path: "/",
    title: "Beyond survival. Built for leadership.",
    description:
      "The Joslyn Divine Foundation supports children in Kroo Bay and Susan's Bay, Freetown, through education, shelter, and mentorship.",
    ogImage: "og-default.png",
  },
  donate: {
    path: "/donate",
    title: "Donate",
    description:
      "Give monthly or one-time, by card, bank, mobile money, or crypto. 100% of donor gifts directed to programs after processor fees.",
    ogImage: "og-donate.png",
  },
  programs: {
    path: "/programs",
    title: "Our work",
    description:
      "What we run, where we run it, and why. Education, shelter, and mentorship for the children of Kroo Bay and Susan's Bay, Freetown.",
    ogImage: "og-programs.png",
  },
  education: {
    path: "/programs/education",
    title: "Education",
    description:
      "School fees, books, uniforms, transport, and a community library. We follow each child term-by-term, not year-by-year.",
    ogImage: "og-education.png",
  },
  shelter: {
    path: "/programs/shelter",
    title: "Shelter",
    description:
      "Safe housing for children at risk, with families wherever possible. We build family stability — kinship care first, group housing only when needed.",
    ogImage: "og-shelter.png",
  },
  mentorship: {
    path: "/programs/mentorship",
    title: "Mentorship",
    description:
      "A trusted adult, every week, for years. Mentors are local, trained, and stay with a child long enough to matter.",
    ogImage: "og-mentorship.png",
  },
  stories: {
    path: "/stories",
    title: "Stories",
    description:
      "From the children of Kroo Bay and Susan's Bay. Real names. Real photographs. With consent on file. Refreshed every three years.",
    ogImage: "og-stories.png",
  },
  storyAminata: {
    path: "/stories/aminata",
    title: "Aminata's story",
    description:
      "A long-form story of one child's path through JDF's education programme, told with her guardian's signed consent.",
    ogImage: "og-aminata.png",
  },
  getInvolved: {
    path: "/get-involved",
    title: "Get involved",
    description:
      "Three ways to be part of this. Funders invest. Volunteers build. Partners amplify. Pick the one that fits where you are.",
    ogImage: "og-getinvolved.png",
  },
  funders: {
    path: "/get-involved/funders",
    title: "Become a funder",
    description:
      "Predictable monthly support keeps a child in school across an academic year. Give monthly, by card, bank, mobile money, or crypto.",
    ogImage: "og-funders.png",
  },
  volunteers: {
    path: "/get-involved/volunteers",
    title: "Volunteer with us",
    description:
      "In-country, remote skills-based, or through a partner organisation. We respond to every application within seven days.",
    ogImage: "og-volunteers.png",
  },
  partners: {
    path: "/get-involved/partners",
    title: "Partner with us",
    description:
      "Schools, corporates, NGOs, and faith communities. Conversation-led, case-by-case partnerships in Sierra Leone and beyond.",
    ogImage: "og-partners.png",
  },
  about: {
    path: "/about",
    title: "About",
    description:
      "A small organisation, in a specific community, doing one thing well. Vision set in 2019; programs began in 2022.",
    ogImage: "og-about.png",
  },
  accountability: {
    path: "/accountability",
    title: "Accountability",
    description:
      "Where the money came from, where it went, who runs JDF, how we protect the children. Refreshed every Q1.",
    ogImage: "og-accountability.png",
  },
};
