interface PracticeQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

interface PracticeTask {
  title: string;
  description: string;
  instructions: string[];
  hint?: string;
}

type PracticeQuizData = {
  questions: PracticeQuestion[];
  tasks: PracticeTask[];
};

export const PRACTICE_DATA: Record<string, PracticeQuizData> = {
  // ───────── Topic 1: Basics of User Experience Design ─────────
  "basics-ux": {
    questions: [
      {
        question: "What is the primary focus of User Experience Design?",
        options: [
          "The visual aesthetics of a product only",
          "The overall experience of a user when interacting with a product or service",
          "The backend code efficiency",
          "The marketing strategy of the product",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following best describes the goal of UX design?",
        options: [
          "Making products look beautiful",
          "Reducing development costs",
          "Creating meaningful and relevant experiences for users",
          "Increasing the number of features in a product",
        ],
        correctIndex: 2,
      },
      {
        question: "What does UX design prioritize?",
        options: [
          "The needs, goals, and behaviors of the end user",
          "The needs of the development team",
          "The company's revenue goals over user satisfaction",
          "The visual complexity of the user interface",
        ],
        correctIndex: 0,
      },
      {
        question: 'Which statement best reflects the meaning of "design" in UX?',
        options: [
          "It is solely about the final visual appearance",
          "It is a strategic problem-solving process, not just an aesthetic choice",
          "It refers to the graphic design of the logo",
          "It is limited to digital products",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the key to a good user experience?",
        options: [
          "Meeting the exact needs of the user in a simple and elegant manner",
          "Using the latest technology regardless of user feedback",
          "Filling the product with as many features as possible",
          "Prioritizing the preferences of stakeholders over users",
        ],
        correctIndex: 0,
      },
      {
        question: "Why are startups now prioritizing design?",
        options: [
          "They are forced to by law",
          "They recognize that good design reduces costs and increases revenue",
          "Design is cheaper than development",
          "It is a trend that will pass quickly",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the likely outcome when a product does not meet user needs?",
        options: [
          "Increased media attention",
          "Brand loyalty and high usage",
          "Product failure in the market",
          "Lower operational costs",
        ],
        correctIndex: 2,
      },
      {
        question: "Which is NOT mentioned as a result of good design?",
        options: [
          "Reduced development costs",
          "Increased market share",
          "Higher customer acquisition and retention",
          "Automatic patent approval",
        ],
        correctIndex: 3,
      },
      {
        question: 'What does the "human" part of HCI (Human-Computer Interaction) emphasize?',
        options: [
          "Building faster computers",
          "Focusing on the end-user as an individual with needs and limitations",
          "Creating complex algorithms",
          "Designing for machines instead of people",
        ],
        correctIndex: 1,
      },
      {
        question: "What is at the core of UX design according to the text?",
        options: [
          "A process of creation that starts with the problem and ends with a solution meeting user needs",
          "A linear process that moves from design to development without iteration",
          "A focus on technology rather than the user",
          "An emphasis on visual polish at the end of the project",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is investment in UX design considered cheaper in the long run?",
        options: [
          "Because it involves hiring fewer developers",
          "Because identifying and fixing problems early reduces costly changes later",
          "Because UX designers work for free",
          "Because it eliminates the need for customer support",
        ],
        correctIndex: 1,
      },
      {
        question: "What is a common mistake companies make regarding UX?",
        options: [
          "They focus too much on user feedback",
          'They fixate on the "shiny object" instead of solving real user problems',
          "They spend too much time on user research",
          "They prioritize accessibility",
        ],
        correctIndex: 1,
      },
      {
        question: 'According to the text, what is "design" considered to be?',
        options: [
          "A step that comes at the end of development",
          "How a product's final visuals will look",
          "A way of thinking and a process of solving problems",
          "Obsolete in the modern tech industry",
        ],
        correctIndex: 2,
      },
      {
        question: "Which field contributed significantly to the development of UX Design?",
        options: [
          "Marine Biology",
          "Human-Computer Interaction (HCI) and ergonomics",
          "Astronomy",
          "Geology",
        ],
        correctIndex: 1,
      },
      {
        question: 'What is a key difference between a "product" mindset and a "user" mindset?',
        options: [
          'The product mindset focuses on marketing, the user mindset focuses on sales',
          'The product mindset focuses on the product itself, while the user mindset focuses on the individual using it',
          "There is no difference",
          "The product mindset is for physical goods only",
        ],
        correctIndex: 1,
      },
      {
        question: "What does HCI stand for and why is it important?",
        options: [
          "Highly Creative Interface; important for visual design",
          "Human-Computer Interaction; it explores how people interact with computers",
          "Hybrid Computing Interface; important for hardware",
          "High-Capacity Integration; important for databases",
        ],
        correctIndex: 1,
      },
      {
        question: "Which type of user research is mentioned as being conducted?",
        options: [
          "Surveys only",
          "Ethnographic studies, user interviews, and usability testing",
          "None; design is purely intuitive",
          "Financial audits",
        ],
        correctIndex: 1,
      },
      {
        question: "Why does the text encourage looking at existing designs?",
        options: [
          "To discourage original thinking",
          "To steal ideas without attribution",
          "To understand how successful products solve design problems",
          "It does not encourage looking at existing designs",
        ],
        correctIndex: 2,
      },
      {
        question: 'How does the text define "product"?',
        options: [
          "A product is something made by a manufacturer",
          "A product is any good, service, or piece of software created for users",
          "A product is only a physical item you can hold",
          "A product is the same as a brand",
        ],
        correctIndex: 1,
      },
      {
        question: "What is NOT true about UX Design based on the text?",
        options: [
          "It is a strategic process",
          "It focuses on the user's needs",
          "It starts with the final visual design",
          "It involves research and testing",
        ],
        correctIndex: 2,
      },
    ],
    tasks: [
      {
        title: "Redesign a Common Everyday Object",
        description:
          "Choose an everyday object you interact with frequently (e.g., a coffee maker, a TV remote, or a public transport ticket machine). Identify 3 usability issues with it and propose a redesign that improves the user experience.",
        instructions: [
          "Select an everyday object (e.g., a coffee maker, TV remote, or ticket machine).",
          "Use your own experience to identify 3 specific usability issues (e.g., confusing buttons, unclear feedback, poor ergonomics).",
          "Sketch or describe a redesign that addresses each issue. Explain how your changes improve the user's experience.",
          "Write a 1-page report summarizing the current issues, your proposed redesign, and the expected UX improvements.",
        ],
        hint: "For example: A coffee maker with too many unlabeled buttons can confuse new users. Consider adding clear labels, limiting choices, or providing visual feedback.",
      },
      {
        title: "Analyze a Mobile App's Onboarding Flow",
        description:
          "Download a popular app (e.g., Duolingo, Instagram, or Airbnb) and analyze its onboarding experience. Identify what makes it effective or confusing for new users. Propose improvements based on UX principles.",
        instructions: [
          "Choose a popular mobile app and go through its onboarding process as a new user.",
          "Take notes on what works well (e.g., clear progress indicators, minimal steps) and what could be confusing (e.g., too much text, required permissions early).",
          "Write a critique (1-2 pages) that includes at least 3 specific observations and 3 recommendations for improvement.",
          "Reference at least 2 UX principles from Topic 1 in your analysis.",
        ],
        hint: "Focus on the 'first-time user experience' — how does the app guide you before you even use its core features?",
      },
      {
        title: "User vs. Product Mindset Case Study",
        description:
          "Find a real-world example of a product that failed because the company prioritized the product over the user (e.g., Google Glass, Microsoft Zune). Write a case study explaining what went wrong and how a UX-focused approach could have changed the outcome.",
        instructions: [
          "Research a well-known product failure (e.g., Google Glass, Microsoft Zune, or a failed website redesign).",
          "Identify at least 3 decisions that reflected a 'product-first' rather than 'user-first' mindset.",
          "Write a 2-page case study explaining how a user-centered design process could have mitigated the failure.",
          "Present your findings in a short slide deck (3–5 slides) for a team review.",
        ],
        hint: "Look for products where the technology was impressive but the user's actual needs were ignored.",
      },
      {
        title: "Conduct a Heuristic Evaluation",
        description:
          "Perform a heuristic evaluation of a poorly designed website or app using Jakob Nielsen's 10 Usability Heuristics. Identify at least 5 violations and provide specific, actionable recommendations for each.",
        instructions: [
          "Select a website or app that you find frustrating to use.",
          "Familiarize yourself with Jakob Nielsen's 10 Usability Heuristics for User Interface Design (a quick online search will give you the list).",
          "Identify at least 5 heuristic violations. For each, describe: (a) the heuristic violated, (b) the specific issue, and (c) your recommended fix.",
          "Compile your findings into a report with screenshots or sketches illustrating each issue.",
        ],
        hint: "Start with heuristics like 'Consistency and Standards' or 'Error Prevention' — these are often the most violated.",
      },
      {
        title: "UX Design Process Map",
        description:
          "Create a visual process map that documents the UX design lifecycle from research to launch. For each stage, list the key activities, deliverables, and stakeholders involved. Use a real or hypothetical project as a case study.",
        instructions: [
          "Research the typical UX design lifecycle (e.g., research, define, ideate, prototype, test, launch).",
          "Create a visual process map (digital or hand-drawn) showing each stage, key activities, and deliverables.",
          "Apply the map to a real or hypothetical project (e.g., designing a food delivery app) and annotate it with specific examples.",
          "Write a brief reflection (1 page) on which stage you think is most critical and why.",
        ],
        hint: "Think about how the stages connect. For example, user research directly feeds into problem definition, which then guides ideation.",
      },
    ],
  },
};
