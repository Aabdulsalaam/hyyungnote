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
  // ════════════════════════════════════════════
  // Topic 1: Basics of User Experience Design
  // ════════════════════════════════════════════
  "basics-ux": {
    questions: [
      {
        question: "What is the primary goal of User Experience (UX) Design?",
        options: [
          "To create visually attractive interfaces",
          "To improve users' overall interaction with a product",
          "To increase company profits only",
          "To develop software applications",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following best defines User Experience?",
        options: [
          "The programming language used to build an application",
          "A user's overall perception and interaction with a product or service",
          "The visual design of a mobile application",
          "The marketing strategy for a product",
        ],
        correctIndex: 1,
      },
      {
        question: "Which discipline focuses primarily on solving user problems?",
        options: [
          "Graphic Design",
          "User Experience Design",
          "Digital Marketing",
          "Software Engineering",
        ],
        correctIndex: 1,
      },
      {
        question: "UX Design begins with which activity?",
        options: ["Coding", "Researching users", "Creating logos", "Marketing"],
        correctIndex: 1,
      },
      {
        question: "Which phase comes immediately after understanding user needs?",
        options: ["Launch", "Testing", "Ideation", "Maintenance"],
        correctIndex: 2,
      },
      {
        question: "A UX Designer primarily designs for:",
        options: ["Developers", "Stakeholders", "Users", "Investors"],
        correctIndex: 2,
      },
      {
        question: "Which statement is TRUE about UX Design?",
        options: [
          "UX is only about aesthetics.",
          "UX focuses on the entire experience users have.",
          "UX is another name for UI Design.",
          "UX is only needed for mobile apps.",
        ],
        correctIndex: 1,
      },
      {
        question: "Which activity helps validate design assumptions?",
        options: ["Guessing", "User Research", "Brainstorming alone", "Marketing Analysis"],
        correctIndex: 1,
      },
      {
        question: "UX Design is considered:",
        options: [
          "User-centered",
          "Technology-centered",
          "Business-centered only",
          "Developer-centered",
        ],
        correctIndex: 0,
      },
      {
        question: "Which deliverable is commonly produced by UX Designers?",
        options: [
          "Server Architecture",
          "Wireframe",
          "Database Schema",
          "API Documentation",
        ],
        correctIndex: 1,
      },
      {
        question: "Which principle best describes UX Design?",
        options: [
          "Design first, research later",
          "Research informs design decisions",
          "Copy competitors",
          "Build before understanding users",
        ],
        correctIndex: 1,
      },
      {
        question: "Good UX reduces:",
        options: ["User satisfaction", "User frustration", "Business value", "Accessibility"],
        correctIndex: 1,
      },
      {
        question: "Which professional most frequently collaborates with UX Designers?",
        options: ["Product Managers", "Developers", "UI Designers", "All of the above"],
        correctIndex: 3,
      },
      {
        question: "The success of UX is measured by:",
        options: [
          "Number of colors used",
          "Ease of accomplishing user goals",
          "Amount of code written",
          "Number of pages",
        ],
        correctIndex: 1,
      },
      {
        question: "Which statement best distinguishes UX from UI?",
        options: [
          "UX focuses on appearance only.",
          "UI focuses on the overall experience.",
          "UX focuses on usability and experience, while UI focuses on interface presentation.",
          "There is no difference.",
        ],
        correctIndex: 2,
      },
      {
        question: "A user repeatedly fails to complete checkout. This indicates poor:",
        options: ["Typography", "UX", "Branding", "Animation"],
        correctIndex: 1,
      },
      {
        question: "Empathy is important because UX Designers need to:",
        options: [
          "Impress stakeholders",
          "Understand users' experiences",
          "Write better code",
          "Improve marketing",
        ],
        correctIndex: 1,
      },
      {
        question: "Which activity is NOT typically part of UX Design?",
        options: [
          "Conducting interviews",
          "Creating personas",
          "Building empathy maps",
          "Managing payroll",
        ],
        correctIndex: 3,
      },
      {
        question: "A successful UX solution should satisfy:",
        options: [
          "Business needs only",
          "User needs only",
          "User needs, business goals, and technical feasibility",
          "Developer preferences",
        ],
        correctIndex: 2,
      },
      {
        question: "The foundation of every UX project is:",
        options: ["Animation", "User understanding", "Coding", "Branding"],
        correctIndex: 1,
      },
    ],
    tasks: [
      {
        title: "UX Research Plan for University Course Registration",
        description:
          "Your university wants to digitize its course registration process. Design a UX approach for understanding students before proposing any interface.",
        instructions: [
          "Define research objectives for understanding student pain points with the current registration process.",
          "Identify target users (e.g., undergraduate students, graduate students, international students).",
          "Select appropriate research methods (e.g., surveys, interviews, observation, diary studies).",
          "Document expected insights and how they will inform the design of the new system.",
        ],
        hint: "Consider that different student populations (freshmen vs seniors, domestic vs international) may have very different registration experiences.",
      },
      {
        title: "Cart Abandonment UX Diagnosis",
        description:
          "A grocery delivery startup has experienced a 45% cart abandonment rate. Explain how UX Design could identify and solve the problem before redesigning the interface.",
        instructions: [
          "Identify possible UX causes for cart abandonment (e.g., hidden fees, complicated checkout, poor mobile experience).",
          "Propose a research plan to validate assumptions (e.g., usability testing, analytics review, user interviews).",
          "Suggest UX improvements based on research findings.",
          "Define metrics to measure success after implementation.",
        ],
        hint: "Look at the checkout flow step by step — unexpected costs, mandatory account creation, and slow loading are common culprits.",
      },
      {
        title: "UX vs UI in Banking Apps",
        description:
          "Compare UX Design and UI Design using a real-world banking app. Explain where UX ends and UI begins.",
        instructions: [
          "Choose a banking app (e.g., Chase, Wells Fargo, Revolut, N26).",
          "Identify UX elements: information architecture, flow, usability, task completion.",
          "Identify UI elements: colors, typography, icons, spacing, visual hierarchy.",
          "Write a 1-2 page analysis explaining the boundary between UX and UI in your chosen app.",
        ],
        hint: "Think of UX as the structure and experience (like a restaurant's layout and service) and UI as the visual presentation (like the interior design and table setting).",
      },
      {
        title: "First Month as a UX Designer at a Startup",
        description:
          "You are joining a startup as its first UX Designer. Outline the first five activities you would perform during your first month and justify each one.",
        instructions: [
          "Activity 1: Stakeholder interviews — understand business goals, constraints, and existing knowledge.",
          "Activity 2: Product audit — review the current product for usability issues.",
          "Activity 3: User research — conduct interviews or surveys with existing users.",
          "Activity 4: Synthesize findings — create affinity maps, personas, or journey maps.",
          "Activity 5: Present recommendations — share actionable insights with the team.",
        ],
        hint: "Prioritize understanding the current state before proposing solutions. Building trust with the team is just as important as the research itself.",
      },
      {
        title: "Everyday App UX Critique",
        description:
          "Analyze an application you use every day (e.g., WhatsApp, Uber, Spotify, or a banking app). Identify three strengths of its user experience, three weaknesses, and three recommendations for improvement.",
        instructions: [
          "Choose an app you use daily and spend 30 minutes exploring its features.",
          "Identify 3 UX strengths (e.g., intuitive navigation, clear feedback, efficient task flow).",
          "Identify 3 UX weaknesses (e.g., confusing settings, lack of undo, poor error messages).",
          "Provide 3 actionable recommendations with sketches or wireframes to illustrate each improvement.",
        ],
        hint: "Don't just focus on what you like or dislike — think about specific usability heuristics like consistency, error prevention, and user control.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 2: Characteristics of a Good User Experience
  // ════════════════════════════════════════════
  "good-ux": {
    questions: [
      {
        question:
          "Which characteristic is most important for ensuring users can complete tasks without unnecessary effort?",
        options: ["Visual complexity", "Usability", "Animation", "Branding"],
        correctIndex: 1,
      },
      {
        question: "A product that is easy to learn for first-time users demonstrates:",
        options: ["Memorability", "Learnability", "Efficiency", "Accessibility"],
        correctIndex: 1,
      },
      {
        question: "Which quality ensures users with disabilities can effectively use a product?",
        options: ["Simplicity", "Accessibility", "Scalability", "Marketing"],
        correctIndex: 1,
      },
      {
        question: "A navigation menu that follows the same structure on every page demonstrates:",
        options: ["Creativity", "Consistency", "Flexibility", "Personalization"],
        correctIndex: 1,
      },
      {
        question: "Which UX characteristic helps users quickly recover after making mistakes?",
        options: ["Error tolerance", "Animation", "Typography", "Branding"],
        correctIndex: 0,
      },
      {
        question:
          "Users complete an online payment in less than one minute. This reflects:",
        options: ["Accessibility", "Efficiency", "Aesthetics", "Satisfaction"],
        correctIndex: 1,
      },
      {
        question:
          "A product that minimizes the number of steps required to complete a task is considered:",
        options: ["Efficient", "Attractive", "Responsive", "Flexible"],
        correctIndex: 0,
      },
      {
        question: "Which of the following contributes most to user satisfaction?",
        options: [
          "Solving users' problems effectively",
          "Using the latest design trends",
          "Adding animations everywhere",
          "Increasing the number of features",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX characteristic builds trust with users?",
        options: [
          "Hidden charges",
          "Predictable interactions",
          "Dark patterns",
          "Unexpected navigation changes",
        ],
        correctIndex: 1,
      },
      {
        question: "Which principle encourages interfaces that are easy to understand?",
        options: ["Complexity", "Simplicity", "Decoration", "Novelty"],
        correctIndex: 1,
      },
      {
        question: "Which characteristic ensures users can easily locate information?",
        options: [
          "Information architecture",
          "Animation",
          "Typography",
          "Branding",
        ],
        correctIndex: 0,
      },
      {
        question: "Users should always know what the system is doing. This reflects:",
        options: [
          "Visibility of system status",
          "Visual hierarchy",
          "Color theory",
          "Brand consistency",
        ],
        correctIndex: 0,
      },
      {
        question: "A product that remembers user preferences improves:",
        options: [
          "Personalization",
          "Accessibility",
          "Typography",
          "Security",
        ],
        correctIndex: 0,
      },
      {
        question: "Which characteristic reduces cognitive load?",
        options: [
          "Clear navigation",
          "More menu options",
          "Longer forms",
          "Hidden controls",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of these best represents a good UX?",
        options: [
          "Beautiful but confusing",
          "Functional but frustrating",
          "Easy, useful, and enjoyable",
          "Complex but feature-rich",
        ],
        correctIndex: 2,
      },
      {
        question: "Which characteristic allows users to accomplish goals regardless of device?",
        options: [
          "Responsive design",
          "Branding",
          "Illustration",
          "Advertising",
        ],
        correctIndex: 0,
      },
      {
        question: "A search bar that provides suggestions as users type improves:",
        options: [
          "Learnability",
          "Recognition",
          "Discoverability",
          "Both B and C",
        ],
        correctIndex: 3,
      },
      {
        question: "Good UX encourages users to:",
        options: [
          "Depend on customer support",
          "Complete tasks independently",
          "Memorize procedures",
          "Read lengthy instructions",
        ],
        correctIndex: 1,
      },
      {
        question: "What happens when a product has poor usability?",
        options: [
          "Users become more productive",
          "Users become frustrated and abandon tasks",
          "Sales automatically increase",
          "Accessibility improves",
        ],
        correctIndex: 1,
      },
      {
        question:
          "A product that delights users while helping them achieve their goals demonstrates:",
        options: [
          "User-centered design",
          "Excessive creativity",
          "Complex functionality",
          "Technical superiority alone",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Banking App UX Characteristic Evaluation",
        description:
          "You have been hired by an online banking platform that receives frequent complaints about its mobile app. Evaluate the app based on Learnability, Efficiency, Accessibility, Consistency, and Satisfaction.",
        instructions: [
          "For each of the 5 characteristics (Learnability, Efficiency, Accessibility, Consistency, Satisfaction), identify one current strength.",
          "For each characteristic, identify one weakness based on common banking app complaints.",
          "For each characteristic, recommend one specific improvement with a brief justification.",
          "Compile your findings into a structured report with clear headings for each characteristic.",
        ],
        hint: "Consider common banking app frustrations: confusing navigation for first-time users, inconsistent button placement, small text for accessibility.",
      },
      {
        title: "Hospital Appointment Booking for Elderly Patients",
        description:
          "A hospital wants to redesign its appointment booking system for elderly patients. Develop a UX strategy that demonstrates Simplicity, Accessibility, Error Prevention, Trust, and Ease of Navigation.",
        instructions: [
          "Define the target user characteristics (age range, tech literacy, potential impairments).",
          "For each UX characteristic, propose 2-3 specific design solutions (e.g., large fonts for accessibility, confirmation steps for error prevention).",
          "Create a user flow diagram showing the simplified booking process.",
          "Explain how each design decision builds trust with elderly users.",
        ],
        hint: "Elderly users often fear making mistakes. Error prevention and clear feedback are even more critical than visual simplicity.",
      },
      {
        title: "E-commerce Heuristic Evaluation",
        description:
          "Select any e-commerce website. Conduct a heuristic evaluation focusing on Usability, Consistency, Visibility of system status, Accessibility, and Efficiency.",
        instructions: [
          "Choose an e-commerce website and define 5-7 key tasks (search, add to cart, checkout, etc.).",
          "Evaluate each task against the 5 focus areas.",
          "Document at least 5 specific usability issues with screenshots.",
          "Provide actionable recommendations for each issue, prioritized by impact.",
        ],
        hint: "Look for issues like inconsistent add-to-cart buttons, unclear shipping cost visibility, poor error recovery during checkout, and inaccessible product images.",
      },
      {
        title: "Ride-Hailing Confidence Redesign",
        description:
          "Imagine a ride-hailing application where users often cancel rides because they are unsure whether drivers are actually coming. Identify which UX characteristics are missing and redesign the experience to improve user confidence.",
        instructions: [
          "Analyze the current experience and identify missing UX characteristics (e.g., visibility of system status, trust, feedback).",
          "Design interface improvements: real-time driver location, countdown timer, driver profile photo and rating.",
          "Propose user feedback mechanisms: push notifications, SMS updates, in-app status messages.",
          "Define success metrics (e.g., reduced cancellation rate, improved user satisfaction scores).",
        ],
        hint: "The core issue is visibility of system status — users need continuous reassurance that their request is being processed.",
      },
      {
        title: "Government Service Website UX Audit",
        description:
          "Choose a government service website in your country. Evaluate Navigation, Readability, Accessibility, Mobile Responsiveness, and User Satisfaction.",
        instructions: [
          "Select a government website (e.g., tax filing, passport renewal, voter registration).",
          "Test 3-5 common tasks and evaluate each against the 5 criteria.",
          "Document strengths and weaknesses for each criterion.",
          "Create a prioritized redesign roadmap with short-term (quick wins), medium-term, and long-term improvements.",
        ],
        hint: "Government websites often have dense text, poor mobile layouts, and complex navigation. Focus on simplifying content and improving task completion.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 3: Who is a User Experience Designer?
  // ════════════════════════════════════════════
  "who-is-uxd": {
    questions: [
      {
        question:
          "Who is primarily responsible for ensuring a product solves users' problems effectively?",
        options: [
          "Marketing Manager",
          "User Experience Designer",
          "Sales Representative",
          "Accountant",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the primary responsibility of a User Experience Designer?",
        options: [
          "Writing backend code",
          "Creating meaningful and usable experiences for users",
          "Managing company finances",
          "Running advertising campaigns",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following activities is most likely performed by a UX Designer?",
        options: [
          "Conducting user interviews",
          "Configuring servers",
          "Preparing payroll reports",
          "Negotiating supplier contracts",
        ],
        correctIndex: 0,
      },
      {
        question: "A UX Designer uses research primarily to:",
        options: [
          "Validate design decisions",
          "Increase advertising reach",
          "Reduce software costs",
          "Improve search engine rankings",
        ],
        correctIndex: 0,
      },
      {
        question: "Which skill is most essential for a successful UX Designer?",
        options: [
          "Empathy",
          "Financial accounting",
          "Mechanical engineering",
          "Public speaking only",
        ],
        correctIndex: 0,
      },
      {
        question: "Which document helps a UX Designer understand different types of users?",
        options: ["Product backlog", "User persona", "Financial report", "Marketing plan"],
        correctIndex: 1,
      },
      {
        question: "A UX Designer collaborates closely with:",
        options: ["Product Managers", "Developers", "UI Designers", "All of the above"],
        correctIndex: 3,
      },
      {
        question: "Which activity occurs before designing a solution?",
        options: ["Coding", "User research", "Product launch", "Marketing campaign"],
        correctIndex: 1,
      },
      {
        question: "Which deliverable communicates the layout of an interface before visual design?",
        options: ["Brand guideline", "Wireframe", "Source code", "Marketing brochure"],
        correctIndex: 1,
      },
      {
        question: "Which of the following best describes the mindset of a UX Designer?",
        options: [
          "Technology-first",
          "User-first",
          "Business-first only",
          "Developer-first",
        ],
        correctIndex: 1,
      },
      {
        question:
          "A UX Designer discovers that users struggle to complete a registration form. What should they do first?",
        options: [
          "Add more fields",
          "Conduct research to understand the issue",
          "Launch a marketing campaign",
          "Change the company logo",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of these is NOT typically a responsibility of a UX Designer?",
        options: [
          "Creating user flows",
          "Conducting usability testing",
          "Designing research studies",
          "Managing payroll",
        ],
        correctIndex: 3,
      },
      {
        question: "Why do UX Designers create prototypes?",
        options: [
          "To replace development",
          "To test ideas before implementation",
          "To increase server performance",
          "To create advertisements",
        ],
        correctIndex: 1,
      },
      {
        question: "A UX Designer measures success primarily by:",
        options: [
          "The number of screens designed",
          "User satisfaction and task completion",
          "The amount of code written",
          "Advertising impressions",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Which soft skill enables UX Designers to communicate effectively with stakeholders and team members?",
        options: ["Communication", "Welding", "Accounting", "Inventory management"],
        correctIndex: 0,
      },
      {
        question: "Why is collaboration important in UX Design?",
        options: [
          "Products are built by multidisciplinary teams.",
          "Designers work alone.",
          "Developers make all design decisions.",
          "Collaboration slows projects down.",
        ],
        correctIndex: 0,
      },
      {
        question:
          "A UX Designer notices conflicting feedback from different user groups. What is the most appropriate next step?",
        options: [
          "Ignore all feedback.",
          "Analyze patterns and prioritize based on research goals and user needs.",
          "Choose feedback from the loudest users.",
          "Redesign the product without further investigation.",
        ],
        correctIndex: 1,
      },
      {
        question: "Which statement best differentiates a UX Designer from a UI Designer?",
        options: [
          "UX Designers focus on user problems and experiences; UI Designers focus on visual interfaces.",
          "UX Designers only create graphics.",
          "UI Designers conduct all user research.",
          "There is no difference between the two roles.",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Which artifact is most useful for visualizing the steps a user takes to complete a task?",
        options: ["User flow", "Company budget", "Network diagram", "Press release"],
        correctIndex: 0,
      },
      {
        question: "Which statement best summarizes the role of a UX Designer?",
        options: [
          "They make products look attractive.",
          "They ensure products are useful, usable, accessible, and aligned with user and business needs.",
          "They write all application code.",
          "They manage customer support teams.",
        ],
        correctIndex: 1,
      },
    ],
    tasks: [
      {
        title: "30-Day UX Action Plan for a Startup",
        description:
          "You have been hired as the first UX Designer for a startup building a food delivery app. Develop a 30-day action plan outlining research activities, stakeholder meetings, deliverables, and success metrics.",
        instructions: [
          "Week 1: Onboarding and stakeholder interviews — understand business goals, existing data, and team dynamics.",
          "Week 2: User research — conduct competitor analysis, user interviews, and surveys with potential users.",
          "Week 3: Synthesis and ideation — create personas, journey maps, and wireframes based on research findings.",
          "Week 4: Testing and presentation — conduct usability tests on wireframes, present findings, and define next steps.",
          "Define success metrics for each week to measure progress.",
        ],
        hint: "Your first month is about building understanding and trust. Resist the urge to jump into high-fidelity designs immediately.",
      },
      {
        title: "UX Designer vs UI Designer Role Comparison",
        description:
          "Using a real-world application (e.g., a banking app, Spotify, Uber, or WhatsApp), identify ten tasks performed during product development. For each task, specify whether it is primarily the responsibility of the UX Designer, UI Designer, Product Manager, or Software Developer.",
        instructions: [
          "Choose a real-world app and list 10 product development tasks (e.g., user research, wireframing, visual design, prototyping, development, testing).",
          "For each task, assign primary responsibility to one role and justify your answer.",
          "Highlight tasks where collaboration between roles is essential.",
          "Present your findings in a table format with Task, Owner, and Justification columns.",
        ],
        hint: "Some tasks overlap — for example, prototyping can involve both UX (interaction flow) and UI (visual polish). Note these overlaps.",
      },
      {
        title: "Solving Course Completion Drop-off",
        description:
          "An online learning platform has experienced a 40% drop in course completion rates. As the UX Designer, identify possible causes, outline a research plan, recommend design improvements, and explain validation methods.",
        instructions: [
          "Hypothesize possible UX causes (e.g., confusing navigation, lack of progress tracking, poor mobile experience).",
          "Design a research plan: analytics review, user interviews, usability testing, and surveys.",
          "Propose 3-5 design improvements with sketches or wireframes.",
          "Explain how you would validate each improvement before full development (A/B testing, prototype testing).",
        ],
        hint: "Look at the drop-off points in the user journey. Where do users stop? That's where you should focus your research.",
      },
      {
        title: "Cross-Functional Collaboration Plan",
        description:
          "Imagine you are leading a redesign project involving developers, product managers, business stakeholders, and marketing teams. Create a collaboration plan including team responsibilities, communication strategy, and conflict resolution.",
        instructions: [
          "Define each team member's role and responsibilities in the redesign project.",
          "Establish a communication strategy: meeting cadence, shared tools (Figma, Slack, Jira), and documentation practices.",
          "Create a decision-making process: who decides on design changes, feature prioritization, and trade-offs.",
          "Outline a conflict resolution approach for when design recommendations conflict with technical or business constraints.",
          "Describe methods for incorporating user feedback throughout the process.",
        ],
        hint: "Use a RACI matrix to clarify who is Responsible, Accountable, Consulted, and Informed for each activity.",
      },
      {
        title: "Personal UX Portfolio Case Study",
        description:
          "Select any digital product you use frequently. Prepare a UX case study including a problem statement, user research assumptions, target audience, UX process, wireframing approach, usability testing strategy, and success metrics.",
        instructions: [
          "Define the problem statement: what user need does this product address?",
          "Document your research assumptions about the target audience and their goals.",
          "Describe your UX process: discovery, research, ideation, prototyping, testing.",
          "Include wireframes or sketches showing your design approach for a specific feature.",
          "Outline a usability testing strategy with tasks, participant criteria, and success metrics.",
          "Define expected outcomes and how you would measure success post-launch.",
        ],
        hint: "Treat this as a portfolio-worthy case study. A compelling narrative (problem → process → solution → results) is more important than exhaustive detail.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 1 (Set 2): User Experience Designer Careers
  // ════════════════════════════════════════════
  "ux-careers": {
    questions: [
      {
        question: "Which industry is LEAST likely to employ a UX Designer?",
        options: ["Healthcare", "Banking", "Agriculture", "Technology"],
        correctIndex: 2,
      },
      {
        question: "Which of the following is a common entry-level UX role?",
        options: [
          "Senior Product Director",
          "Junior UX Designer",
          "Chief Technology Officer",
          "Marketing Executive",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Which career path focuses primarily on conducting user studies and analyzing user behavior?",
        options: [
          "UX Researcher",
          "Frontend Developer",
          "DevOps Engineer",
          "Network Administrator",
        ],
        correctIndex: 0,
      },
      {
        question:
          "A professional responsible for designing the look and feel of digital interfaces is commonly known as a:",
        options: ["UX Writer", "UI Designer", "Scrum Master", "Data Analyst"],
        correctIndex: 1,
      },
      {
        question: "Which role bridges user needs, business goals, and technology?",
        options: ["UX Designer", "Accountant", "Financial Analyst", "Database Administrator"],
        correctIndex: 0,
      },
      {
        question: "Which portfolio item is most valuable when applying for a UX Designer role?",
        options: [
          "A list of programming languages",
          "UX case studies",
          "Certificates only",
          "Social media followers",
        ],
        correctIndex: 1,
      },
      {
        question: "Which skill is highly valued across all UX careers?",
        options: ["Empathy", "Welding", "Bookkeeping", "Inventory control"],
        correctIndex: 0,
      },
      {
        question: "A UX Designer who specializes in writing interface text is called a:",
        options: ["UX Writer", "Visual Designer", "Motion Designer", "Product Owner"],
        correctIndex: 0,
      },
      {
        question: "Which professional primarily ensures designs are implemented correctly in code?",
        options: ["Backend Developer", "Frontend Developer", "Sales Manager", "Recruiter"],
        correctIndex: 1,
      },
      {
        question: "Which of these is an advanced UX career role?",
        options: ["UX Lead", "Intern", "Customer Service Representative", "Administrative Assistant"],
        correctIndex: 0,
      },
      {
        question: "A UX Designer who focuses on accessibility ensures products are:",
        options: [
          "Profitable",
          "Inclusive and usable by diverse users",
          "Colorful",
          "Faster to code",
        ],
        correctIndex: 1,
      },
      {
        question: "Which certification can strengthen a UX Designer's credibility?",
        options: ["UX Design Certificate", "Driving License", "CPA Certification", "Bar Admission"],
        correctIndex: 0,
      },
      {
        question: "Which factor contributes most to career growth in UX?",
        options: [
          "Continuous learning",
          "Avoiding feedback",
          "Working alone",
          "Memorizing design trends",
        ],
        correctIndex: 0,
      },
      {
        question: "A UX portfolio should emphasize:",
        options: [
          "Finished interfaces only",
          "Design thinking and problem-solving process",
          "Academic grades",
          "Company logos",
        ],
        correctIndex: 1,
      },
      {
        question: "Which role focuses on defining product vision and priorities?",
        options: ["Product Manager", "UX Researcher", "Graphic Designer", "QA Tester"],
        correctIndex: 0,
      },
      {
        question: "Which emerging area offers new opportunities for UX professionals?",
        options: [
          "Artificial Intelligence",
          "Human-Computer Interaction",
          "Extended Reality (XR)",
          "All of the above",
        ],
        correctIndex: 3,
      },
      {
        question: "Why are soft skills important in UX careers?",
        options: [
          "UX Designers work independently.",
          "UX Designers collaborate with diverse teams.",
          "UX Designers only create visuals.",
          "UX Designers rarely communicate.",
        ],
        correctIndex: 1,
      },
      {
        question: "A UX Designer interested in leadership may progress to:",
        options: ["UX Manager", "Principal Designer", "Head of Design", "All of the above"],
        correctIndex: 3,
      },
      {
        question: "Which practice demonstrates professionalism in UX?",
        options: [
          "Copying competitors without analysis",
          "Respecting user privacy and ethical standards",
          "Ignoring accessibility",
          "Designing without research",
        ],
        correctIndex: 1,
      },
      {
        question: "The best way to remain competitive in a UX career is to:",
        options: [
          "Stop learning after getting a job",
          "Build real-world projects, seek feedback, and stay current",
          "Depend only on certificates",
          "Focus only on visual trends",
        ],
        correctIndex: 1,
      },
    ],
    tasks: [
      {
        title: "Five-Year UX Career Roadmap",
        description:
          "Create a five-year career roadmap for someone starting as a Junior UX Designer. Include expected responsibilities, skills to acquire, certifications, and portfolio milestones.",
        instructions: [
          "Year 1-2: Junior UX Designer — focus on learning foundations, conducting usability tests, creating wireframes, and building a portfolio.",
          "Year 2-3: Mid-Level UX Designer — lead small projects, mentor interns, master research methods, and earn a UX certification.",
          "Year 3-4: Senior UX Designer — own major features, contribute to design systems, and develop a specialization (e.g., accessibility, research).",
          "Year 4-5: Lead/Principal — define UX strategy, influence product direction, lead design reviews, and build a professional network.",
          "For each stage, list specific skills, certifications, and portfolio milestones.",
        ],
        hint: "Not all UX careers follow a linear path — consider branching into UX research, content design, or product management.",
      },
      {
        title: "UX Roles Comparison Table",
        description:
          "Compare the roles of a UX Designer, UX Researcher, UI Designer, Product Designer, and Product Manager. Present your findings in a comparison table highlighting responsibilities, required skills, tools, and deliverables.",
        instructions: [
          "Research each role: UX Designer, UX Researcher, UI Designer, Product Designer, Product Manager.",
          "For each role, list primary responsibilities, required skills, common tools, and key deliverables.",
          "Create a comparison table that highlights overlaps and differences between roles.",
          "Write a brief analysis (1 page) explaining which role(s) you find most interesting and why.",
        ],
        hint: "In some companies, Product Designer combines UX and UI roles. In others, these are separate. Note these variations.",
      },
      {
        title: "UX Job Market Analysis",
        description:
          "Review five UX Designer job postings from different companies. Identify the common skills, tools, and qualifications employers seek. Summarize your findings and explain how an aspiring UX Designer can prepare.",
        instructions: [
          "Find 5 UX Designer job postings from different companies or industries.",
          "Extract common requirements: tools (Figma, Sketch, Miro), skills (research, prototyping, wireframing), and qualifications (degree, experience, portfolio).",
          "Identify patterns and differences across industries.",
          "Write a summary report with recommendations for aspiring UX designers.",
        ],
        hint: "Pay attention to 'preferred' vs 'required' qualifications — these reveal what distinguishes competitive candidates.",
      },
      {
        title: "Six-Month UX Learning Plan for Students",
        description:
          "Imagine you are mentoring a university student interested in UX Design. Develop a six-month learning plan that includes books, courses, design exercises, portfolio projects, and networking activities.",
        instructions: [
          "Month 1: Foundations — read 'Don't Make Me Think' by Steve Krug, complete a UX basics course on Coursera or Interaction Design Foundation.",
          "Month 2: Research methods — learn user interviews, surveys, and usability testing. Conduct a small research project.",
          "Month 3: Design tools — learn Figma through tutorials. Create wireframes and prototypes for a simple app.",
          "Month 4: Portfolio projects — redesign a real app or website. Document the full UX process as a case study.",
          "Month 5: Specialization — explore an area of interest (accessibility, UX research, content design).",
          "Month 6: Networking and job prep — update portfolio, practice interview questions, attend UX meetups.",
        ],
        hint: "Encourage the student to work on real projects (even small ones) rather than just completing courses. Practical experience builds better portfolios.",
      },
      {
        title: "Personal UX Career Development Plan",
        description:
          "Write a personal career development plan describing the type of UX Designer you aspire to become, the industries you want to work in, and the steps you will take to achieve your goals.",
        instructions: [
          "Define your UX career vision: what type of designer do you want to be (generalist, specialist, leader)?",
          "Identify target industries (e.g., fintech, healthcare, education, gaming) and why they interest you.",
          "Assess your current skills and identify gaps you need to fill.",
          "Set 6-month, 1-year, and 3-year goals with specific, measurable action items.",
          "Define how you will track progress and when you will reassess your plan.",
        ],
        hint: "Be specific about the skills you want to build. Instead of 'become a better designer,' set goals like 'conduct 5 usability tests' or 'complete a UX certification.'",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 2 (Set 2): A Day in the Life of a UX Designer
  // ════════════════════════════════════════════
  "day-in-life": {
    questions: [
      {
        question: "Which activity is most likely to start a UX Designer's workday?",
        options: [
          "Deploying software to production",
          "Reviewing project priorities and team updates",
          "Writing marketing copy",
          "Managing payroll",
        ],
        correctIndex: 1,
      },
      {
        question: "Which meeting helps UX Designers align with developers and product managers?",
        options: ["Sprint Planning", "Annual General Meeting", "Sales Pitch", "Budget Review"],
        correctIndex: 0,
      },
      {
        question:
          "A UX Designer spends the morning observing users complete tasks. What activity are they performing?",
        options: ["User Research", "Software Development", "Marketing Analysis", "System Administration"],
        correctIndex: 0,
      },
      {
        question: "After analyzing research findings, what is the UX Designer most likely to do next?",
        options: [
          "Create design solutions",
          "Launch the product immediately",
          "Prepare financial reports",
          "Build a database",
        ],
        correctIndex: 0,
      },
      {
        question: "Which tool is commonly used for wireframing and interface design?",
        options: ["Microsoft Excel", "Figma", "MySQL", "Visual Studio Code"],
        correctIndex: 1,
      },
      {
        question:
          "A UX Designer receives feedback from stakeholders on a prototype. What should happen next?",
        options: [
          "Ignore the feedback",
          "Evaluate the feedback and iterate where appropriate",
          "Publish the product immediately",
          "Start a new project",
        ],
        correctIndex: 1,
      },
      {
        question: "Which activity helps validate whether a design works before development?",
        options: ["Printing brochures", "Usability testing", "Running advertisements", "Financial auditing"],
        correctIndex: 1,
      },
      {
        question: "Why do UX Designers collaborate frequently with developers?",
        options: [
          "To discuss implementation feasibility",
          "To approve salaries",
          "To purchase hardware",
          "To manage legal contracts",
        ],
        correctIndex: 0,
      },
      {
        question: "Which deliverable might a UX Designer present during a design review?",
        options: ["Wireframes", "Server logs", "Payroll records", "Marketing budget"],
        correctIndex: 0,
      },
      {
        question: "Why is documenting design decisions important?",
        options: [
          "It helps communicate reasoning to stakeholders and team members.",
          "It increases the number of design files.",
          "It replaces usability testing.",
          "It eliminates user research.",
        ],
        correctIndex: 0,
      },
      {
        question: "During a typical workday, UX Designers often switch between:",
        options: [
          "Research, design, collaboration, and testing",
          "Accounting and auditing",
          "Manufacturing and logistics",
          "Recruitment and payroll",
        ],
        correctIndex: 0,
      },
      {
        question: "When developers identify a technical limitation, the UX Designer should:",
        options: [
          "Ignore the limitation.",
          "Collaborate to find a feasible solution.",
          "Cancel the project.",
          "Remove all features.",
        ],
        correctIndex: 1,
      },
      {
        question: "Which activity is most likely to occur after usability testing?",
        options: [
          "Iterating the design",
          "Launching without changes",
          "Deleting research findings",
          "Hiring new developers",
        ],
        correctIndex: 0,
      },
      {
        question: "Why do UX Designers regularly communicate with Product Managers?",
        options: [
          "To align designs with business goals and priorities",
          "To manage office supplies",
          "To conduct employee interviews",
          "To monitor network performance",
        ],
        correctIndex: 0,
      },
      {
        question: "Which quality is essential for managing multiple UX tasks throughout the day?",
        options: ["Time management", "Singing ability", "Graphic printing", "Accounting"],
        correctIndex: 0,
      },
      {
        question: "What is one reason UX Designers attend design critiques?",
        options: [
          "To receive constructive feedback and improve designs",
          "To finalize code",
          "To approve budgets",
          "To create advertisements",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity is most likely to happen before a design handoff?",
        options: ["Prototype review", "Product retirement", "Annual appraisal", "Database migration"],
        correctIndex: 0,
      },
      {
        question: "Why do UX Designers maintain design documentation?",
        options: [
          "To ensure consistency across the product",
          "To reduce internet speed",
          "To replace user interviews",
          "To increase development costs",
        ],
        correctIndex: 0,
      },
      {
        question: "What distinguishes a productive UX workday?",
        options: [
          "Completing designs without user input",
          "Making decisions based on collaboration and evidence",
          "Working independently without meetings",
          "Designing as many screens as possible",
        ],
        correctIndex: 1,
      },
      {
        question: "At the end of a sprint, a UX Designer is most likely to:",
        options: [
          "Reflect on outcomes, gather feedback, and plan improvements",
          "Archive the project permanently",
          "Stop communicating with the team",
          "Delete design files",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Fintech UX Designer Daily Schedule",
        description:
          "Imagine you have just joined a fintech company as a UX Designer. Create a detailed daily schedule (9:00 a.m. – 5:00 p.m.) showing how you would divide your time among research, meetings, design, collaboration, documentation, and usability testing.",
        instructions: [
          "Block your schedule into time segments (e.g., 9-10 standup and email, 10-12 focused design work, 1-2 user research, 2-3 collaboration, 3-4 documentation, 4-5 review and planning).",
          "Justify why each activity is important for the fintech domain specifically.",
          "Include buffer time for unexpected requests and context switching.",
          "Explain how you would adapt this schedule on days with usability testing or stakeholder presentations.",
        ],
        hint: "Fintech requires extra attention to security, compliance, and error prevention. Reserve time for reviewing edge cases and regulatory requirements.",
      },
      {
        title: "Sprint Review Preparation",
        description:
          "Your product team is preparing for a sprint review. Describe every UX activity you would complete before presenting your work to stakeholders.",
        instructions: [
          "Preparation: review sprint goals, gather user research data, and update design artifacts.",
          "Design artifacts: prepare prototypes, user flows, and research findings to present.",
          "Validation methods: ensure designs have been tested with users or heuristic evaluation.",
          "Anticipate questions: prepare talking points about design rationale, trade-offs, and next steps.",
          "Define success criteria for the sprint and how they were met (or not met).",
        ],
        hint: "Stakeholders care about outcomes, not process. Frame your presentation around user impact, not just what you designed.",
      },
      {
        title: "UX Professional Shadowing Report",
        description:
          "Observe a professional UX Designer on YouTube or read a published UX case study. Document their daily responsibilities, collaboration with team members, tools used, challenges encountered, and lessons learned.",
        instructions: [
          "Find a recorded UX talk, day-in-the-life video, or detailed UX case study online.",
          "Document: daily responsibilities, collaboration patterns, tools and software used, and key challenges.",
          "Compare your findings with your own expectations of the UX profession.",
          "Identify 3 lessons you can apply to your own UX practice.",
        ],
        hint: "Look for authentic accounts (conference talks, portfolio case studies, Medium articles) rather than promotional content.",
      },
      {
        title: "Design Constraints Negotiation",
        description:
          "A developer informs you that your proposed design cannot be implemented within the project timeline. Describe how you would respond professionally, negotiate trade-offs, preserve the user experience, and communicate the revised solution to stakeholders.",
        instructions: [
          "Acknowledge the constraint and ask clarifying questions to understand the technical limitation.",
          "Identify which aspects of the design are critical to the user experience and which can be compromised.",
          "Propose alternative solutions that preserve core UX goals while respecting technical constraints.",
          "Document the trade-offs and present the revised solution to stakeholders with clear rationale.",
          "Plan a follow-up iteration for future sprints to address any compromised aspects.",
        ],
        hint: "Focus on user impact. If a feature can't be built perfectly, propose a simpler version that still solves the core user need.",
      },
      {
        title: "UX Designer in Agile Scrum Workflow",
        description:
          "Design an ideal workflow for a UX Designer working in an Agile Scrum team. Include Daily Stand-up, Sprint Planning, Design Reviews, User Testing, Sprint Review, and Retrospective.",
        instructions: [
          "Daily Stand-up: quick sync on progress, blockers, and coordination with developers.",
          "Sprint Planning: present UX priorities, align on user stories, and estimate design effort.",
          "Design Reviews: schedule regular sessions within the sprint to gather feedback early.",
          "User Testing: conduct testing mid-sprint so findings can inform the current or next sprint.",
          "Sprint Review: present completed designs with user research evidence.",
          "Retrospective: reflect on what worked and what needs improvement in the UX workflow.",
          "Illustrate how each Scrum event contributes to product quality from a UX perspective.",
        ],
        hint: "UX work doesn't always fit neatly into sprints. Consider a 'design sprint ahead' approach where UX works 1-2 sprints ahead of development.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 6: Product Development Life Cycle
  // ════════════════════════════════════════════
  "pdlc": {
    questions: [
      {
        question: "What does PDLC stand for in UX?",
        options: ["Product Development Life Cycle", "Programming Design Logic Code", "Project Delivery Life Cycle", "Product Design Life Cycle"],
        correctIndex: 0,
      },
      {
        question: "Which is the first phase of the PDLC?",
        options: ["Discovery or Research", "Development", "Launch", "Maintenance"],
        correctIndex: 0,
      },
      {
        question: "During which phase do UX designers conduct user research?",
        options: ["Discovery/Research", "Development", "Deployment", "Maintenance"],
        correctIndex: 0,
      },
      {
        question: "What is the purpose of the ideation phase in PDLC?",
        options: ["Generating creative solutions based on research findings", "Writing production code", "Marketing the product", "Hiring team members"],
        correctIndex: 0,
      },
      {
        question: "What deliverable is typically created during the design phase of PDLC?",
        options: ["Wireframes and prototypes", "Source code", "Marketing materials", "Financial reports"],
        correctIndex: 0,
      },
      {
        question: "Why is usability testing important in the PDLC?",
        options: ["To validate designs with real users before development", "To replace developers", "To reduce costs", "To eliminate research"],
        correctIndex: 0,
      },
      {
        question: "Which team members are typically involved in PDLC?",
        options: ["UX designers, developers, product managers, stakeholders", "Only developers", "Only marketers", "Only executives"],
        correctIndex: 0,
      },
      {
        question: "What happens during the development phase of PDLC?",
        options: ["Engineers build the product based on validated designs", "User research is conducted", "Marketing campaigns are planned", "Usability testing is completed"],
        correctIndex: 0,
      },
      {
        question: "Why is the PDLC considered iterative?",
        options: ["Phases may be repeated based on feedback and testing results", "Each phase only happens once", "The process is random", "Development happens first"],
        correctIndex: 0,
      },
      {
        question: "What is the role of a UX designer during the development phase?",
        options: ["Collaborating with developers to ensure designs are implemented correctly", "Writing backend code", "Managing the budget", "Leading marketing efforts"],
        correctIndex: 0,
      },
      {
        question: "Which activity marks the transition from design to development in PDLC?",
        options: ["Design handoff", "Product launch", "User research", "Competitive analysis"],
        correctIndex: 0,
      },
      {
        question: "What is the purpose of the post-launch phase in PDLC?",
        options: ["Monitoring metrics and gathering feedback for future iterations", "Ending the project completely", "Removing all features", "Eliminating the product"],
        correctIndex: 0,
      },
      {
        question: "Why should UX designers be involved early in the PDLC?",
        options: ["To identify user needs and reduce costly changes later", "To write code faster", "To manage budgets", "To replace product managers"],
        correctIndex: 0,
      },
      {
        question: "What is a key benefit of following a structured PDLC?",
        options: ["Reduced risk of building the wrong product", "Faster coding without planning", "Less user research needed", "Fewer team members required"],
        correctIndex: 0,
      },
      {
        question: "Which PDLC phase comes immediately after prototyping?",
        options: ["Testing/Validation", "Development", "Launch", "Research"],
        correctIndex: 0,
      },
      {
        question: "What is a design sprint in relation to PDLC?",
        options: ["A condensed, time-boxed process used to quickly validate ideas within the larger PDLC", "A replacement for the entire PDLC", "A development technique", "A marketing strategy"],
        correctIndex: 0,
      },
      {
        question: "How does user feedback influence the PDLC?",
        options: ["It informs iterations and improvements throughout the cycle", "It is only collected after launch", "It replaces research", "It is ignored"],
        correctIndex: 0,
      },
      {
        question: "Which document typically captures requirements at the start of PDLC?",
        options: ["Product requirements document or design brief", "Source code", "Marketing plan", "Budget report"],
        correctIndex: 0,
      },
      {
        question: "Why is cross-functional collaboration important in PDLC?",
        options: ["Different perspectives lead to better product outcomes", "It eliminates the need for testing", "It reduces the number of meetings", "It replaces user research"],
        correctIndex: 0,
      },
      {
        question: "The ultimate goal of the PDLC is to:",
        options: ["Deliver a product that meets user needs and business goals through a structured, iterative process", "Write code as quickly as possible", "Eliminate user research", "Replace designers with developers"],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "End-to-End Product Development Roadmap",
        description: "Outline a complete PDLC for a new mobile banking feature that lets users temporarily freeze their lost debit card and request a replacement entirely within the app.",
        instructions: [
          "List each PDLC phase from Discovery to Post-Launch.",
          "For each phase, describe specific UX activities and deliverables.",
          "Identify stakeholders who should be involved in each phase.",
          "Define success criteria for transitioning between phases.",
        ],
        hint: "Consider regulatory requirements and security constraints early in the process. Banking features often require compliance reviews that can affect timelines.",
      },
      {
        title: "Product Rescue Strategy",
        description: "A food delivery app has high user abandonment during checkout. Using the PDLC framework, explain how a UX designer would diagnose the problem, design a solution, and validate it before development.",
        instructions: [
          "Research: analyze analytics data, conduct user interviews, and run usability tests to identify the cause of drop-off.",
          "Ideate: brainstorm design solutions based on research findings.",
          "Prototype: create low-fidelity wireframes followed by an interactive prototype of the new booking flow.",
          "Validate: conduct A/B testing comparing the new flow with the current one using key metrics.",
        ],
        hint: "Use analytics to pinpoint exactly where in the booking flow users are dropping off. The research phase is critical.",
      },
      {
        title: "Cross-Functional PDLC Responsibility Matrix",
        description: "A startup is building its first product and has five team members: a UX designer, a developer, a product manager, a marketing lead, and a founder. Create a responsibility matrix showing who leads and who contributes during each PDLC phase.",
        instructions: [
          "Map each PDLC phase to specific activities.",
          "Assign primary and supporting roles for each activity.",
          "Explain how handoffs between roles work at each phase boundary.",
          "Identify potential bottlenecks and propose solutions.",
        ],
        hint: "In a small team, one person often wears multiple hats. Clarify who has decision authority for UX research findings, design specifications, and feature prioritization.",
      },
      {
        title: "Iterative Redesign After Drop-off",
        description: "An e-learning platform has a 60% drop-off rate between course browsing and enrollment. Using the PDLC framework, design an iterative approach to identify and solve the problem.",
        instructions: [
          "Analyze data to identify exactly where and why users drop off.",
          "Propose research methods to uncover root causes.",
          "Design and prototype solutions addressing the issues found.",
          "Plan validation through A/B testing and usability testing.",
        ],
        hint: "The drop-off could be caused by usability issues, pricing friction, account requirements, or technical problems. Research first, then design.",
      },
      {
        title: "End-to-End Feature Case Study",
        description: "Choose a digital product and propose one major new feature. Describe how it would progress through every stage of the PDLC.",
        instructions: [
          "Select a digital product and map its existing features to PDLC phases.",
          "Propose one major new feature.",
          "Trace the new feature through every PDLC stage from Discovery to Post-Launch.",
          "Include specific deliverables, stakeholders involved, and success criteria for each stage.",
        ],
        hint: "Focus on the UX activities within each phase. For example, during Discovery you might conduct competitive analysis; during Testing you might run usability sessions.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 1 (Set 3): Who Are My Users?
  // ════════════════════════════════════════════
  "who-are-users": {
    questions: [
      {
        question: "In UX Design, who is considered a user?",
        options: [
          "Only the person who purchases the product",
          "Anyone who interacts with a product or service to achieve a goal",
          "Only the software developer",
          "Only company employees",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is identifying users important before designing a product?",
        options: [
          "To reduce development costs only",
          "To understand who the product is intended for and what problems they need solved",
          "To choose a programming language",
          "To create marketing slogans",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is considered a user characteristic?",
        options: ["Goals", "Behaviors", "Needs", "All of the above"],
        correctIndex: 3,
      },
      {
        question: "Which research method is best for understanding users' daily routines?",
        options: [
          "User interviews",
          "Logo design",
          "Financial analysis",
          "Database testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Primary users are:",
        options: [
          "The people who directly use the product",
          "Investors",
          "Company executives",
          "Competitors",
        ],
        correctIndex: 0,
      },
      {
        question: "Secondary users are individuals who:",
        options: [
          "Never interact with the product",
          "May benefit from or influence the product without using it regularly",
          "Develop the software",
          "Own the company",
        ],
        correctIndex: 1,
      },
      {
        question: "Which document summarizes the characteristics of a target user group?",
        options: ["Project Charter", "User Persona", "Source Code", "Risk Register"],
        correctIndex: 1,
      },
      {
        question: "Which question helps identify user goals?",
        options: [
          '"What problem are you trying to solve?"',
          '"What is your favorite color?"',
          '"Which programming language do you use?"',
          '"How much revenue does your company make?"',
        ],
        correctIndex: 0,
      },
      {
        question: "A UX Designer should avoid designing based on:",
        options: ["User research", "Assumptions", "Interviews", "Usability findings"],
        correctIndex: 1,
      },
      {
        question: "Which factor most influences users' expectations?",
        options: [
          "Previous experiences with similar products",
          "Company profits",
          "Programming language",
          "Office location",
        ],
        correctIndex: 0,
      },
      {
        question: "Understanding users' frustrations helps identify:",
        options: ["Pain points", "Budgets", "Marketing channels", "Security risks"],
        correctIndex: 0,
      },
      {
        question: "Which of the following provides qualitative insights about users?",
        options: [
          "Interviews",
          "Surveys with open-ended questions",
          "Observation",
          "All of the above",
        ],
        correctIndex: 3,
      },
      {
        question: "Why should UX Designers understand users' environments?",
        options: [
          "Context influences how users interact with products",
          "It improves internet speed",
          "It reduces office expenses",
          "It replaces usability testing",
        ],
        correctIndex: 0,
      },
      {
        question: "A university student using an online learning platform is an example of a:",
        options: ["Target user", "Stakeholder only", "Developer", "Product owner"],
        correctIndex: 0,
      },
      {
        question: "What is the risk of ignoring user needs?",
        options: [
          "Higher usability",
          "Increased user satisfaction",
          "Products that fail to solve real problems",
          "Faster development",
        ],
        correctIndex: 2,
      },
      {
        question: "Which method helps identify different categories of users?",
        options: ["User segmentation", "Coding", "Marketing", "Animation"],
        correctIndex: 0,
      },
      {
        question: "A UX Designer learns that users access an app mainly during their commute. This information relates to:",
        options: ["User context", "Revenue model", "Color psychology", "Typography"],
        correctIndex: 0,
      },
      {
        question: "Who benefits from user-centered design?",
        options: ["Users", "Businesses", "Product teams", "All of the above"],
        correctIndex: 3,
      },
      {
        question: "The best UX decisions are based on:",
        options: [
          "Personal opinions",
          "Stakeholder assumptions",
          "Evidence from user research",
          "Competitor designs only",
        ],
        correctIndex: 2,
      },
      {
        question: "Understanding users enables designers to create products that are:",
        options: [
          "More relevant and useful",
          "More complicated",
          "Less accessible",
          "More expensive",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "User Identification for a Digital Product",
        description:
          "Select a product (e.g., a banking app, food delivery app, or e-learning platform). Identify its primary, secondary, and tertiary users. Explain the goals, motivations, and pain points of each user group.",
        instructions: [
          "Choose a digital product and define its primary users (those who interact directly).",
          "Identify secondary users (those who influence or are affected by the product but don't use it directly).",
          "Identify tertiary users (those who make purchasing decisions or manage the product).",
          "For each group, document their goals, motivations, frustrations, and how they interact with the product.",
        ],
        hint: "Example for a food delivery app: primary = hungry customers, secondary = restaurant staff, tertiary = delivery drivers.",
      },
      {
        title: "Ride-Hailing User Segmentation Framework",
        description:
          "Develop a user segmentation framework for a ride-hailing application. Segment users by age, technical ability, travel frequency, accessibility needs, and goals. Justify why each segment requires different design considerations.",
        instructions: [
          "Identify at least 4-5 user segments for a ride-hailing app (e.g., daily commuters, occasional riders, elderly users, tourists, business travelers).",
          "For each segment, define: age range, technical ability, travel frequency, accessibility needs, and primary goals.",
          "Explain how each segment's characteristics influence design decisions (e.g., larger text for elderly, quick booking for commuters).",
        ],
        hint: "Consider edge cases: users without smartphones (booking via SMS), users with visual impairments, and users in areas with poor internet connectivity.",
      },
      {
        title: "User Research Interview Project",
        description:
          "Conduct informal interviews with five potential users of a product idea. Analyze the responses to identify common needs, frustrations, motivations, and expectations. Present your findings in a summary report.",
        instructions: [
          "Choose a product idea (e.g., a meal-planning app, a fitness tracker, a study tool).",
          "Prepare 5-7 open-ended questions about user habits, frustrations, and goals related to the product space.",
          "Interview 5 people from your target audience and record their responses.",
          "Analyze responses to identify patterns, common needs, and key insights.",
          "Write a 1-2 page summary report with quotes, themes, and actionable recommendations.",
        ],
        hint: "Focus on listening more than talking. Ask follow-up questions like 'Can you tell me more about that?' to uncover deeper insights.",
      },
      {
        title: "User Discovery Pivot Scenario",
        description:
          "A startup assumes its users are university students, but research reveals most users are working professionals. Explain how this discovery would affect the product's features, interface, and overall design strategy.",
        instructions: [
          "Identify key differences between university students and working professionals (goals, time availability, device preferences, payment methods).",
          "Redesign the feature set: what features become more or less important?",
          "Redesign the interface: consider layout density, navigation patterns, and content complexity.",
          "Revise the overall design strategy: onboarding, support, pricing, and communication channels.",
          "Explain how you would validate the new direction with the actual user base.",
        ],
        hint: "Working professionals likely have different usage patterns (evening/weekend use), different goals (career advancement vs grades), and potentially more willingness to pay.",
      },
      {
        title: "Government Digital Service User Profile",
        description:
          "Create a user profile for a government digital service. Include demographic information, digital literacy level, accessibility needs, goals, challenges, preferred devices, and usage environment. Explain how each characteristic influences design decisions.",
        instructions: [
          "Choose a government service (e.g., tax filing, passport renewal, social benefits application).",
          "Create a detailed user persona with demographics, digital literacy, accessibility needs, and goals.",
          "Describe the user's typical usage environment (home computer, mobile phone, public library, assisted).",
          "For each characteristic, explain how it influences specific design decisions (e.g., low digital literacy → simple language and guided workflows).",
        ],
        hint: "Government services must serve a broad population, including elderly users, users with disabilities, non-native language speakers, and users with limited internet access.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 2 (Set 3): Thinking About Users New to Technology
  // ════════════════════════════════════════════
  "new-to-tech": {
    questions: [
      {
        question: "Who are users new to technology?",
        options: [
          "Users who frequently use advanced software",
          "Users with little or no experience using digital products",
          "Professional software developers",
          "IT support specialists",
        ],
        correctIndex: 1,
      },
      {
        question: "Why should UX Designers consider users who are new to technology?",
        options: [
          "They represent only a small percentage of users.",
          "They may face additional challenges when interacting with digital products.",
          "They never provide useful feedback.",
          "They only use desktop computers.",
        ],
        correctIndex: 1,
      },
      {
        question: "Which design principle best supports first-time users?",
        options: ["Simplicity", "Complexity", "Hidden features", "Advanced shortcuts only"],
        correctIndex: 0,
      },
      {
        question: "A banking app includes a step-by-step onboarding tutorial. This primarily helps:",
        options: [
          "Experienced users only",
          "New users understand how to use the application",
          "Developers write code faster",
          "Reduce internet usage",
        ],
        correctIndex: 1,
      },
      {
        question: "Which interface element helps users understand unfamiliar icons?",
        options: [
          "Tooltips and labels",
          "Random animations",
          "Background music",
          "Hidden menus",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should forms use clear labels instead of technical terms?",
        options: [
          "To reduce confusion and improve understanding",
          "To make forms longer",
          "To impress experienced users",
          "To increase complexity",
        ],
        correctIndex: 0,
      },
      {
        question: "Which design choice is most helpful for users with limited digital literacy?",
        options: [
          "Consistent navigation",
          "Frequently changing layouts",
          "Hidden settings",
          "Complex gestures",
        ],
        correctIndex: 0,
      },
      {
        question:
          'A first-time smartphone user cannot locate the "Settings" option. What UX issue does this indicate?',
        options: [
          "Poor discoverability",
          "Good accessibility",
          "Excellent branding",
          "Effective onboarding",
        ],
        correctIndex: 0,
      },
      {
        question: "Which approach best reduces anxiety for new users?",
        options: [
          "Providing immediate feedback after every action",
          "Hiding error messages",
          "Using unfamiliar terminology",
          "Removing help documentation",
        ],
        correctIndex: 0,
      },
      {
        question: "What is progressive disclosure?",
        options: [
          "Showing all features at once",
          "Revealing information and features gradually as users need them",
          "Removing navigation",
          "Increasing the number of menu items",
        ],
        correctIndex: 1,
      },
      {
        question: "Why are familiar icons and conventions important?",
        options: [
          "They reduce the learning curve.",
          "They make products more complicated.",
          "They eliminate accessibility.",
          "They increase development costs.",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Which usability principle encourages making options visible rather than requiring memory?",
        options: [
          "Recognition rather than recall",
          "Aesthetic design",
          "Minimalism only",
          "Visual branding",
        ],
        correctIndex: 0,
      },
      {
        question:
          "A checkout process requiring ten different screens is likely to be difficult for:",
        options: [
          "Experienced developers",
          "Users new to technology",
          "Product Managers",
          "Marketing professionals",
        ],
        correctIndex: 1,
      },
      {
        question: "Which feature provides reassurance after users submit a form?",
        options: [
          "Confirmation message",
          "Blank screen",
          "Automatic logout",
          "Hidden notification",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should error messages use plain language?",
        options: [
          "To help users understand what went wrong and how to fix it",
          "To confuse attackers",
          "To reduce development time",
          "To hide system information",
        ],
        correctIndex: 0,
      },
      {
        question: "A government website serving rural communities should prioritize:",
        options: [
          "Simplicity and accessibility",
          "Advanced animations",
          "Technical terminology",
          "Hidden navigation",
        ],
        correctIndex: 0,
      },
      {
        question:
          "Which research activity helps identify challenges faced by users with low digital literacy?",
        options: [
          "Observing them completing real tasks",
          "Reading financial reports",
          "Reviewing server logs only",
          "Conducting competitor pricing analysis",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is it important to test products with first-time users?",
        options: [
          "They reveal usability problems experienced users may overlook.",
          "They write better code.",
          "They reduce project costs automatically.",
          "They replace accessibility testing.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which design decision best supports confidence among inexperienced users?",
        options: [
          "Providing clear navigation, feedback, and help options",
          "Hiding instructions",
          "Removing confirmation dialogs",
          "Increasing the number of features on every screen",
        ],
        correctIndex: 0,
      },
      {
        question: "Designing for users new to technology ultimately improves:",
        options: [
          "Inclusivity and usability for a wider audience",
          "Product complexity",
          "Marketing expenses",
          "Development time only",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking for Senior Citizens",
        description:
          "Design a mobile banking application for senior citizens who have never used online banking before. Your proposal should include navigation strategy, typography choices, button sizes, onboarding experience, error prevention techniques, and accessibility considerations.",
        instructions: [
          "Navigation strategy: use a simple, linear flow with clear back/next buttons and a visible home button.",
          "Typography: use large font sizes (minimum 16px), high contrast, and sans-serif fonts.",
          "Button sizes: ensure all tappable targets are at least 48x48dp with generous spacing.",
          "Onboarding: create a guided setup with large illustrations and minimal text per screen.",
          "Error prevention: use confirmation dialogs before destructive actions and provide clear undo options.",
          "Accessibility: support screen readers, offer adjustable font sizes, and use high-contrast color schemes.",
          "Justify every design decision with reference to senior users' needs and limitations.",
        ],
        hint: "Senior users may have reduced vision, hearing, and fine motor control. They also may be more anxious about making costly mistakes.",
      },
      {
        title: "Government Passport Digitization for Low Digital Literacy",
        description:
          "A government agency wants to digitize passport applications. Develop a UX strategy for citizens with limited digital literacy. Include user journey, simplified language, help mechanisms, offline support options, and success metrics.",
        instructions: [
          "User journey: map a simplified application flow with clear progress indicators and predictable steps.",
          "Simplified language: write all instructions and labels at a basic reading level with supporting illustrations.",
          "Help mechanisms: provide contextual tooltips, a live chat option, and a video tutorial in multiple languages.",
          "Offline support: offer printable PDF forms and in-person assistance appointments as alternatives.",
          "Success metrics: track form completion rate, error rate, support requests, and user satisfaction scores.",
        ],
        hint: "Consider that many users may start the application on one device and finish on another, or may need a family member to assist them.",
      },
      {
        title: "First-Time Smartphone User App Evaluation",
        description:
          "Conduct a usability evaluation of an existing application (e.g., WhatsApp, Uber, or your country's tax portal) from the perspective of someone using a smartphone for the first time.",
        instructions: [
          "Choose an app and adopt the mindset of a first-time smartphone user with no prior experience.",
          "Identify 5 usability barriers (e.g., ambiguous icons, complex gestures, overwhelming information density).",
          "For each barrier, explain its impact on new users' confidence and task completion.",
          "Propose design improvements for each barrier with sketches or written descriptions.",
        ],
        hint: "Look for features experienced users take for granted: swipe gestures, long-press actions, hamburger menus, and icon-only navigation.",
      },
      {
        title: "E-Learning Onboarding Flow for First-Time Users",
        description:
          "Create a first-time user onboarding flow for an e-learning platform. Your flow should include welcome screens, account creation, guided product tour, interactive tips, first successful task, and progress indicators.",
        instructions: [
          "Welcome screens: 3-4 screens introducing the platform's value proposition with simple visuals.",
          "Account creation: minimize required fields, offer Google/SSO sign-in, and show clear progress.",
          "Guided tour: overlay tooltips highlighting key features (search, library, progress tracker).",
          "Interactive tips: contextual help that appears when users first encounter each feature.",
          "First successful task: guide the user to complete one meaningful action (e.g., find and start a course).",
          "Progress indicators: show a welcome checklist or completion percentage to encourage continued use.",
          "Explain how each step reduces anxiety and increases confidence.",
        ],
        hint: "The goal of onboarding is not to teach everything — it's to get users to their first 'aha moment' as quickly as possible.",
      },
      {
        title: "Healthcare App for Rural Communities",
        description:
          "Your company is launching a healthcare app in rural communities where many users have limited experience with smartphones. Develop a comprehensive UX strategy covering research plan, accessibility considerations, language localization, visual communication, and post-launch support.",
        instructions: [
          "Research plan: conduct field research (home visits, community center observations) to understand users' context, devices, and connectivity.",
          "Accessibility: design for low vision, limited dexterity, and potential hearing impairments.",
          "Language localization: support local dialects and use pictograms alongside text for universal understanding.",
          "Visual communication: use icons, illustrations, and color coding to convey information without relying on text.",
          "User testing: test in realistic environments (rural homes, community centers) rather than labs.",
          "Post-launch support: provide phone-based assistance, community training sessions, and SMS-based alternatives.",
          "Explain how each strategy ensures the app is usable by first-time technology users.",
        ],
        hint: "Connectivity may be intermittent. Design for offline-first functionality and optimize for low-bandwidth conditions.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 3 (Set 3): Why User Experience Design?
  // ════════════════════════════════════════════
  "why-ux": {
    questions: [
      {
        question: "Why is User Experience (UX) Design important in product development?",
        options: [
          "It focuses only on making products visually attractive.",
          "It ensures products are useful, usable, and aligned with user needs.",
          "It replaces software development.",
          "It eliminates the need for testing.",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is a major benefit of good UX Design?",
        options: [
          "Increased user satisfaction",
          "Increased user confusion",
          "Reduced accessibility",
          "Longer task completion times",
        ],
        correctIndex: 0,
      },
      {
        question: "How does UX Design contribute to business success?",
        options: [
          "By increasing user satisfaction and customer retention",
          "By replacing marketing teams",
          "By eliminating project costs",
          "By reducing product quality",
        ],
        correctIndex: 0,
      },
      {
        question:
          "A company notices that users abandon its online checkout process. Which UX goal should be prioritized?",
        options: [
          "Increase product complexity",
          "Improve task completion and ease of use",
          "Add more advertisements",
          "Increase the number of form fields",
        ],
        correctIndex: 1,
      },
      {
        question: "Which UX principle helps reduce user frustration?",
        options: [
          "Clear navigation",
          "Hidden controls",
          "Inconsistent layouts",
          "Technical jargon",
        ],
        correctIndex: 0,
      },
      {
        question: "Good UX Design helps organizations:",
        options: [
          "Reduce support requests",
          "Increase user errors",
          "Eliminate customer feedback",
          "Replace customer service",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is user-centered design important?",
        options: [
          "It focuses on business goals only.",
          "It balances user needs, business goals, and technical feasibility.",
          "It removes stakeholder involvement.",
          "It guarantees product success without testing.",
        ],
        correctIndex: 1,
      },
      {
        question: "Which outcome is most likely when users have a positive experience with a product?",
        options: [
          "Lower trust",
          "Increased loyalty and repeat usage",
          "Higher abandonment rates",
          "More complaints",
        ],
        correctIndex: 1,
      },
      {
        question: "How does UX Design reduce development risks?",
        options: [
          "By validating ideas before implementation",
          "By eliminating research",
          "By avoiding user testing",
          "By delaying product releases",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity provides evidence that a design meets user needs?",
        options: [
          "Usability testing",
          "Guesswork",
          "Personal opinion",
          "Competitor imitation",
        ],
        correctIndex: 0,
      },
      {
        question: "A product with good UX is most likely to:",
        options: [
          "Require extensive user training",
          "Be intuitive and easy to use",
          "Depend on detailed manuals",
          "Confuse first-time users",
        ],
        correctIndex: 1,
      },
      {
        question: "Which business metric can improve as a result of better UX?",
        options: [
          "Customer retention",
          "Cart abandonment",
          "Support tickets",
          "User errors",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should UX Designers involve users throughout the design process?",
        options: [
          "To make evidence-based design decisions",
          "To reduce collaboration",
          "To replace stakeholders",
          "To shorten research",
        ],
        correctIndex: 0,
      },
      {
        question: "A well-designed onboarding experience primarily helps:",
        options: [
          "Reduce the learning curve for new users",
          "Increase complexity",
          "Hide important features",
          "Reduce accessibility",
        ],
        correctIndex: 0,
      },
      {
        question: "What is one long-term benefit of investing in UX Design?",
        options: [
          "Stronger customer trust and brand reputation",
          "Increased development defects",
          "Lower usability",
          "More user complaints",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best describes the relationship between UX and business goals?",
        options: [
          "UX and business goals are unrelated.",
          "Good UX supports business objectives by helping users achieve their goals.",
          "UX focuses only on aesthetics.",
          "Business goals should always override user needs.",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is an example of a UX success metric?",
        options: [
          "Task completion rate",
          "Number of colors in the interface",
          "Number of meetings held",
          "Office size",
        ],
        correctIndex: 0,
      },
      {
        question:
          "A healthcare application redesign reduces appointment booking time from five minutes to two minutes. This demonstrates:",
        options: [
          "Improved user efficiency",
          "Reduced accessibility",
          "Increased complexity",
          "Poor usability",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is UX Design considered an iterative process?",
        options: [
          "Designers continuously learn from user feedback and improve the product.",
          "Designers complete the project once and never revisit it.",
          "UX ends after wireframing.",
          "Testing replaces research.",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of UX Design is to:",
        options: [
          "Create products that deliver meaningful value to users while supporting business objectives",
          "Build products as quickly as possible",
          "Replace software engineering",
          "Focus only on visual appearance",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking UX Recovery Strategy",
        description:
          "A national bank has experienced a 35% decline in mobile banking usage over the past year. Develop a UX improvement strategy explaining why UX matters in financial services, research activities, key usability problems, design improvements, and success metrics.",
        instructions: [
          "Explain why UX is critical in financial services (trust, security perception, task complexity).",
          "Propose research activities: analytics review, user interviews, usability testing of current app, competitive analysis.",
          "Identify likely usability problems: confusing navigation, lack of transaction shortcuts, poor error recovery.",
          "Propose design improvements: simplified dashboard, quick actions, contextual help, biometric shortcuts.",
          "Define success metrics: daily active users, task completion rate, support ticket volume, app store rating.",
        ],
        hint: "In banking, users are often anxious about money. Reducing cognitive load and building trust through clear feedback are essential.",
      },
      {
        title: "Digital Product UX Case Study",
        description:
          "Choose any digital product you use regularly (e.g., Spotify, Netflix, WhatsApp, Google Maps, or an e-commerce platform). Prepare a UX case study explaining why users choose the product, which UX principles contribute to its success, areas for improvement, and business benefits.",
        instructions: [
          "Select a product and analyze why users choose it over competitors (usability, features, simplicity).",
          "Identify 3 UX principles that contribute to the product's success (e.g., consistency, visibility of system status, user control).",
          "Identify 3 areas where the experience could be improved with specific recommendations.",
          "Explain the business benefits of each improvement (increased retention, higher conversion, reduced support).",
        ],
        hint: "Back up your analysis with specific examples. For Spotify: 'Playlists made for you' demonstrates personalization; 'Weekly Discovery' demonstrates anticipation of user needs.",
      },
      {
        title: "Executive UX Value Presentation",
        description:
          "Imagine you are presenting to company executives who believe UX Design is unnecessary. Prepare a persuasive presentation that explains the value of UX Design, business impact, customer impact, financial benefits, and risks of ignoring UX.",
        instructions: [
          "Define UX value: better products, happier users, lower support costs, higher revenue.",
          "Business impact: improved customer retention, reduced development rework, faster time-to-market.",
          "Customer impact: increased satisfaction, reduced frustration, improved accessibility.",
          "Financial benefits: ROI of UX research (every $1 invested returns $2-100), reduced support costs.",
          "Risks of ignoring UX: product failure, negative reviews, competitor advantage, regulatory issues.",
          "Include real-world examples supporting each argument (e.g., Airbnb's UX-driven turnaround).",
        ],
        hint: "Executives care about money and risk. Frame your argument around ROI, reduced costs, increased revenue, and competitive advantage.",
      },
      {
        title: "Airline Website Redesign Failure Analysis",
        description:
          "An airline launches a redesigned booking website without conducting user research or usability testing. After launch, customer complaints increase significantly. Analyze which UX activities were skipped, the consequences of those decisions, how the project should have been managed, and a recovery plan.",
        instructions: [
          "Identify skipped UX activities: user research, usability testing, iterative prototyping, accessibility review.",
          "Consequences: confusing navigation, broken flows, accessibility barriers, increased support calls, lost bookings.",
          "How it should have been managed: user research → design → prototype → test → iterate → develop → QA → launch.",
          "Recovery plan: immediate fixes (critical bugs), short-term UX audit and fixes, long-term user-centered redesign.",
          "Include metrics to track recovery progress (support tickets, booking completion rate, NPS score).",
        ],
        hint: "The cost of fixing issues after launch is significantly higher than catching them during design. Use this as a key argument for UX involvement early in the process.",
      },
      {
        title: "Government Digital Transformation UX Strategy",
        description:
          "You have been appointed Head of UX for a government digital transformation initiative. Develop a UX strategy for improving public services. Include UX vision, research framework, accessibility strategy, performance metrics, and continuous improvement process.",
        instructions: [
          "UX vision: 'Government services that are easy to find, understand, and complete for every citizen.'",
          "Research framework: continuous user research program with annual large-scale studies and weekly micro-tests.",
          "Accessibility strategy: meet WCAG 2.1 AA minimum, involve users with disabilities in every research cycle.",
          "Performance metrics: task success rate, completion time, user satisfaction, accessibility compliance score.",
          "Continuous improvement: establish a feedback loop with analytics, support data, user research, and regular releases.",
          "Expected impact: reduced support costs, increased citizen satisfaction, improved service adoption, equitable access.",
        ],
        hint: "Government UX has unique constraints: legal requirements, broad and diverse user base, legacy systems, and budget cycles. Address these realistically.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 1 (Set 4): Introduction to User Experience Research
  // ════════════════════════════════════════════
  "intro-ux-research": {
    questions: [
      {
        question: "What is the primary purpose of User Experience (UX) research?",
        options: [
          "To make products visually attractive",
          "To understand users, their needs, behaviors, and challenges",
          "To reduce development costs only",
          "To create marketing campaigns",
        ],
        correctIndex: 1,
      },
      {
        question: "UX research helps designers make decisions based on:",
        options: [
          "Personal opinions",
          "Assumptions",
          "Evidence gathered from users",
          "Competitor preferences",
        ],
        correctIndex: 2,
      },
      {
        question: "Which stage of the design process benefits most from UX research?",
        options: [
          "Only development",
          "Only product launch",
          "Every stage of the design process",
          "Only marketing",
        ],
        correctIndex: 2,
      },
      {
        question: "Which of the following is a primary research method?",
        options: [
          "User interviews",
          "Reading competitor blogs",
          "Market reports only",
          "Company newsletters",
        ],
        correctIndex: 0,
      },
      {
        question: "Which research method allows designers to observe users interacting with a product?",
        options: [
          "Observation",
          "Financial analysis",
          "Branding",
          "Animation testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Which type of research usually occurs before designing a solution?",
        options: [
          "Generative research",
          "Evaluative research",
          "Regression testing",
          "Performance testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Evaluative research is primarily conducted to:",
        options: [
          "Validate an existing design or prototype",
          "Hire employees",
          "Write code",
          "Launch products",
        ],
        correctIndex: 0,
      },
      {
        question: "Which research method is best for understanding users' motivations?",
        options: [
          "Interviews",
          "Server monitoring",
          "Bug tracking",
          "Financial auditing",
        ],
        correctIndex: 0,
      },
      {
        question: "A UX researcher asks users to complete tasks while thinking aloud. This is known as:",
        options: [
          "Think-aloud protocol",
          "Brainstorming",
          "Storyboarding",
          "Competitive analysis",
        ],
        correctIndex: 0,
      },
      {
        question: "Which research method is most effective for collecting feedback from a large audience?",
        options: [
          "Surveys",
          "Shadowing",
          "Diary studies",
          "Contextual inquiry",
        ],
        correctIndex: 0,
      },
      {
        question: "Which type of data is collected through observations and interviews?",
        options: [
          "Qualitative data",
          "Financial data",
          "Performance data",
          "Technical data",
        ],
        correctIndex: 0,
      },
      {
        question: "Which type of data includes metrics such as task completion rates?",
        options: [
          "Quantitative data",
          "Narrative data",
          "Descriptive data only",
          "Historical data",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should UX research begin early in a project?",
        options: [
          "To identify user needs before investing in solutions",
          "To delay development",
          "To replace testing",
          "To reduce stakeholder involvement",
        ],
        correctIndex: 0,
      },
      {
        question: "Which document summarizes research findings and recommendations?",
        options: [
          "Research report",
          "Payroll report",
          "Sales invoice",
          "User manual",
        ],
        correctIndex: 0,
      },
      {
        question: "A UX researcher discovers users struggle to find a feature. This finding should:",
        options: [
          "Inform design improvements",
          "Be ignored",
          "Be hidden from stakeholders",
          "Delay the project indefinitely",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an ethical responsibility during UX research?",
        options: [
          "Respect participant privacy",
          "Share participant data publicly",
          "Mislead participants",
          "Ignore informed consent",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the advantage of combining qualitative and quantitative research?",
        options: [
          "It provides a more complete understanding of users",
          "It eliminates the need for analysis",
          "It guarantees perfect products",
          "It reduces project timelines significantly",
        ],
        correctIndex: 0,
      },
      {
        question: "Research insights should primarily influence:",
        options: [
          "Design decisions",
          "Office policies",
          "Financial planning only",
          "Marketing slogans",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity is NOT part of UX research?",
        options: [
          "Recruiting participants",
          "Collecting data",
          "Analyzing findings",
          "Managing payroll",
        ],
        correctIndex: 3,
      },
      {
        question: "The ultimate goal of UX research is to:",
        options: [
          "Build products users value and can use effectively",
          "Increase project complexity",
          "Replace software development",
          "Eliminate stakeholder involvement",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Telemedicine UX Research Plan",
        description:
          "A healthcare startup wants to build a telemedicine platform. Develop a complete UX research plan including research objectives, research questions, research methods, participant criteria, timeline, and expected deliverables.",
        instructions: [
          "Define 3-5 research objectives aligned with the startup's goals and user needs.",
          "Formulate 5-7 research questions that address user behavior, pain points, and expectations.",
          "Select appropriate research methods (interviews, surveys, contextual inquiry, usability testing).",
          "Define participant criteria including demographics, tech literacy, and health conditions.",
          "Create a 4-week timeline and list expected deliverables (research report, personas, journey maps).",
        ],
        hint: "Consider both patients and healthcare providers as user groups — they have very different needs.",
      },
      {
        title: "Qualitative vs Quantitative Research Comparison",
        description:
          "Compare qualitative and quantitative research by designing a study for an online food delivery application. Explain when each method should be used, data to collect, advantages, limitations, and expected insights.",
        instructions: [
          "Define when qualitative methods are appropriate (exploring user motivations, understanding pain points).",
          "Define when quantitative methods are appropriate (measuring task completion, satisfaction scores).",
          "List specific data to collect for each method type.",
          "Compare advantages and limitations of each approach.",
          "Explain what insights each method would reveal for a food delivery app.",
        ],
        hint: "Qualitative answers 'why' and 'how'; quantitative answers 'how many' and 'how often'. Both are needed for a complete picture.",
      },
      {
        title: "Student Portal Mixed-Method Research Strategy",
        description:
          "A university plans to redesign its student portal. Design a mixed-method UX research strategy using interviews, surveys, usability testing, and analytics. Justify why each method is appropriate.",
        instructions: [
          "Interviews: conduct with 10-15 students to understand pain points and workflows in depth.",
          "Surveys: distribute to 500+ students to quantify issue frequency and prioritize improvements.",
          "Usability testing: observe 8-10 students completing common tasks (course registration, grade checking).",
          "Analytics: analyze current portal usage data to identify drop-off points and popular features.",
          "For each method, justify why it was chosen and what specific insights it will provide.",
        ],
        hint: "Each method reveals different layers: interviews uncover 'why', surveys show 'how many', testing reveals 'where they struggle', analytics show 'what they actually do'.",
      },
      {
        title: "App UX Research Reconstruction",
        description:
          "Evaluate a recent mobile application you installed. Describe which UX research activities you believe the company performed before launching the product. Support your reasoning with observations from the application.",
        instructions: [
          "Choose a recently installed app and spend 30 minutes exploring all major features.",
          "Identify evidence of user research (e.g., intuitive onboarding, clear information architecture).",
          "Identify evidence of usability testing (e.g., smooth task flows, helpful error messages).",
          "Identify signs of skipped research (e.g., confusing navigation, missing features, poor feedback).",
          "Write a 1-2 page analysis connecting your observations to specific research activities.",
        ],
        hint: "Look for both good and bad UX signals. A well-researched app feels intuitive; a poorly researched one feels frustrating or confusing.",
      },
      {
        title: "UX Research Report Template",
        description:
          "Develop a research report template that could be used by a UX team after completing a research project. Include all major sections and explain the purpose of each section.",
        instructions: [
          "Executive Summary: high-level findings and recommendations for stakeholders.",
          "Methodology: describe research methods, participant profiles, and study parameters.",
          "Key Findings: present themes with supporting evidence (quotes, data, observations).",
          "Personas / Journey Maps: synthesize findings into design artifacts.",
          "Recommendations: prioritize actionable improvements with expected impact.",
          "Appendix: raw data, consent forms, interview guide, and additional resources.",
          "For each section, explain its purpose and what information belongs there.",
        ],
        hint: "A good report tells a story: here's what we did, here's what we found, here's what you should do about it.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 11: Empathize With the User
  // ════════════════════════════════════════════
  "empathize": {
    questions: [
      {
        question: "What does it mean to empathize with users in UX?",
        options: [
          "Understanding users' feelings, motivations, and perspectives to design better experiences",
          "Feeling sorry for users",
          "Ignoring user feedback",
          "Copying competitor designs",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is empathy important in UX Design?",
        options: [
          "It helps designers create solutions that truly address user needs",
          "It replaces user research",
          "It eliminates the need for testing",
          "It speeds up development",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity helps designers build empathy with users?",
        options: ["Conducting user interviews", "Writing code", "Creating logos", "Managing budgets"],
        correctIndex: 0,
      },
      {
        question: "What is the difference between sympathy and empathy in UX?",
        options: [
          "Empathy involves understanding the user's perspective; sympathy involves feeling pity from your own perspective",
          "They are the same thing",
          "Sympathy is more important in UX",
          "Empathy is only for researchers",
        ],
        correctIndex: 0,
      },
      {
        question: "Which research method is most effective for building empathy?",
        options: ["Direct observation and in-depth interviews", "Surveys only", "Analytics only", "A/B testing"],
        correctIndex: 0,
      },
      {
        question: "What is an empathy map?",
        options: [
          "A collaborative tool used to articulate what a user says, thinks, does, and feels",
          "A programming flowchart",
          "A marketing strategy",
          "A database schema",
        ],
        correctIndex: 0,
      },
      {
        question: "Which section of an empathy map captures what a user might be thinking privately?",
        options: ["Thinks", "Says", "Does", "Feels"],
        correctIndex: 0,
      },
      {
        question: "What is the purpose of the Says section in an empathy map?",
        options: ["Capturing notable quotes and things the user says aloud", "Capturing the user's private thoughts", "Describing user actions", "Identifying user emotions"],
        correctIndex: 0,
      },
      {
        question: "What is captured in the Does section of an empathy map?",
        options: ["Observable actions and behaviors of the user", "The user's private thoughts", "What the user says", "The user's emotional state"],
        correctIndex: 0,
      },
      {
        question: "What is the purpose of the Feels section in an empathy map?",
        options: ["Capturing the user's emotional state and feelings", "Capturing user actions", "Recording user quotes", "Documenting user thoughts"],
        correctIndex: 0,
      },
      {
        question: "What should empathy maps be based on?",
        options: ["Real data from user research", "Designers' assumptions", "Competitor websites", "Stakeholder opinions"],
        correctIndex: 0,
      },
      {
        question: "Why should UX designers avoid making assumptions about users?",
        options: ["Assumptions may not reflect reality and can lead to poor design decisions", "Assumptions are always correct", "Assumptions replace research", "Assumptions improve usability"],
        correctIndex: 0,
      },
      {
        question: "Which mindset is essential for empathetic UX research?",
        options: ["Active listening without judgment", "Telling users what they need", "Leading users to desired answers", "Focusing only on positive feedback"],
        correctIndex: 0,
      },
      {
        question: "How can designers practice empathy during user interviews?",
        options: ["Listening carefully and asking follow-up questions to understand deeper needs", "Interrupting users to save time", "Asking only yes or no questions", "Reading questions from a script without engaging"],
        correctIndex: 0,
      },
      {
        question: "Why should diverse users be included in empathy research?",
        options: ["Different perspectives reveal a more complete understanding of user needs", "It is faster to research similar users", "Diverse users give the same feedback", "Only one type of user matters"],
        correctIndex: 0,
      },
      {
        question: "What is the ultimate goal of empathizing with users?",
        options: ["To identify real user needs that inform meaningful design solutions", "To collect data for reports", "To satisfy stakeholder requirements", "To complete research as quickly as possible"],
        correctIndex: 0,
      },
      {
        question: "Which activity comes after building empathy with users?",
        options: ["Defining the problem based on user needs", "Launching the product", "Writing code", "Creating marketing materials"],
        correctIndex: 0,
      },
      {
        question: "What is a persona?",
        options: [
          "A fictional character representing a user type based on research",
          "A marketing profile",
          "A programming object",
          "A database record",
        ],
        correctIndex: 0,
      },
      {
        question: "How do empathy maps and personas work together?",
        options: [
          "Empathy maps provide depth to personas by capturing user feelings, thoughts, and behaviors",
          "They are unrelated",
          "Personas replace empathy maps",
          "Empathy maps replace personas",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of empathy in UX is to:",
        options: [
          "Bridge the gap between designers and users, leading to products that truly serve human needs",
          "Replace user research",
          "Eliminate usability testing",
          "Reduce development time",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Banking App Empathy Research",
        description: "A mobile banking app wants to better understand why elderly users struggle with digital payments. Design an empathy-building research plan.",
        instructions: [
          "Define research objectives for understanding elderly users' experience with digital payments.",
          "Select appropriate empathy-building research methods.",
          "Create an empathy map template customized for this scenario.",
          "Plan how empathy findings will inform design decisions.",
        ],
        hint: "Elderly users may have different motivations, fears, and physical considerations. Observation in their natural environment is especially valuable.",
      },
      {
        title: "Hospital Patient Empathy Map",
        description: "Create an empathy map for a patient using a hospital appointment booking system for the first time after a serious diagnosis.",
        instructions: [
          "Research and document what the patient might say, think, do, and feel.",
          "Identify pain points in the current booking experience.",
          "Propose design improvements based on empathy findings.",
          "Include accessibility considerations for stressed or anxious users.",
        ],
        hint: "A serious diagnosis changes everything — the user's emotional state dramatically affects how they interact with the system. Empathy is crucial here.",
      },
      {
        title: "E-Commerce Empathy Comparison",
        description: "Compare the experiences of two users shopping on the same e-commerce website: a tech-savvy teenager and a first-time online shopper who is 65 years old.",
        instructions: [
          "Create an empathy map for each user based on research assumptions.",
          "Identify differences in their needs, frustrations, and goals.",
          "Propose design changes that would improve the experience for both users.",
          "Explain how inclusive design benefits all users.",
        ],
        hint: "Features that help the older user (larger text, clearer labels, simpler navigation) often improve the experience for everyone.",
      },
      {
        title: "Empathy-Driven Feature Redesign",
        description: "A food delivery app notices that users with dietary restrictions often receive incorrect orders. Use empathy research to understand the problem and redesign the ordering flow.",
        instructions: [
          "Conduct empathy research to understand the user's frustration and needs.",
          "Create an empathy map for a user with dietary restrictions.",
          "Identify specific pain points in the current ordering flow.",
          "Propose design solutions that prevent incorrect orders.",
        ],
        hint: "Think about the anxiety of not knowing whether food is safe to eat. Clear labeling, confirmation steps, and easy customization can reduce this stress.",
      },
      {
        title: "Empathy Building Workshop Plan",
        description: "Design a half-day empathy building workshop for a cross-functional product team that has never conducted user research.",
        instructions: [
          "Define workshop objectives and outcomes.",
          "Plan activities that help team members step into users' shoes.",
          "Include an empathy mapping exercise using real or provided user data.",
          "Create a follow-up plan to integrate empathy into the team's regular workflow.",
        ],
        hint: "Role-playing exercises where team members act out user scenarios can be powerful for building empathy, especially for teams new to UX research.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 3 (Set 4): Find and Recruit Interview Participants
  // ════════════════════════════════════════════
  "recruit-participants": {
    questions: [
      {
        question: "Why is recruiting the right interview participants important in UX research?",
        options: [
          "It reduces project costs only.",
          "It ensures research findings accurately represent the target users.",
          "It shortens the design process.",
          "It eliminates the need for analysis.",
        ],
        correctIndex: 1,
      },
      {
        question: "Who should be selected as interview participants?",
        options: [
          "Anyone available",
          "People who match the characteristics of the target users",
          "Company executives only",
          "Software developers",
        ],
        correctIndex: 1,
      },
      {
        question: "What is a recruitment screener?",
        options: [
          "A tool used to design wireframes",
          "A questionnaire used to identify suitable research participants",
          "A software testing tool",
          "A project management document",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is an example of a screening question?",
        options: [
          '"How old are you?"',
          '"Have you used an online banking application in the past six months?"',
          '"What is your favorite color?"',
          '"Which programming language do you know?"',
        ],
        correctIndex: 1,
      },
      {
        question: "Why should leading questions be avoided during participant screening?",
        options: [
          "They increase recruitment costs.",
          "They influence responses and may result in selecting unsuitable participants.",
          "They shorten interviews.",
          "They improve usability testing.",
        ],
        correctIndex: 1,
      },
      {
        question: "Which participant group is most appropriate when testing a university course registration system?",
        options: [
          "University students",
          "Construction workers only",
          "Airline pilots",
          "Professional athletes",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is participant diversity important in UX research?",
        options: [
          "It helps capture a wider range of experiences and perspectives.",
          "It makes interviews shorter.",
          "It guarantees perfect designs.",
          "It reduces documentation.",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the recommended number of participants for many qualitative UX interview studies?",
        options: ["3–5", "5–10", "50–100", "Over 500"],
        correctIndex: 1,
      },
      {
        question: "Which document explains the purpose of the study and requests permission to participate?",
        options: [
          "Consent form",
          "Invoice",
          "Design brief",
          "Sprint backlog",
        ],
        correctIndex: 0,
      },
      {
        question: "Before beginning an interview, researchers should:",
        options: [
          "Obtain informed consent",
          "Start asking questions immediately",
          "Record participants secretly",
          "Skip introductions",
        ],
        correctIndex: 0,
      },
      {
        question: "Which recruitment source is commonly used to find participants?",
        options: [
          "Existing customers",
          "Social media communities",
          "Research panels",
          "All of the above",
        ],
        correctIndex: 3,
      },
      {
        question: "Why should incentives sometimes be offered to participants?",
        options: [
          "To thank them for their time and encourage participation",
          "To influence their responses",
          "To guarantee positive feedback",
          "To replace consent forms",
        ],
        correctIndex: 0,
      },
      {
        question: "A participant exaggerates positive feedback because they want to please the researcher. This is an example of:",
        options: [
          "Social desirability bias",
          "Sampling",
          "Accessibility testing",
          "Affinity mapping",
        ],
        correctIndex: 0,
      },
      {
        question: "Which ethical practice protects participants' personal information?",
        options: [
          "Data confidentiality",
          "Public data sharing",
          "Anonymous online posting",
          "Ignoring privacy laws",
        ],
        correctIndex: 0,
      },
      {
        question: "A screener should include questions about:",
        options: [
          "Relevant user behaviors and experiences",
          "Political opinions unrelated to the study",
          "Personal financial records",
          "Family history unrelated to the research",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should researchers recruit participants who reflect different accessibility needs?",
        options: [
          "To ensure the product is inclusive",
          "To increase interview length",
          "To reduce project costs",
          "To simplify analysis",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the main purpose of participant quotas?",
        options: [
          "To ensure balanced representation across important user groups",
          "To reduce interview quality",
          "To eliminate diversity",
          "To shorten the research timeline",
        ],
        correctIndex: 0,
      },
      {
        question: "If a participant does not match the target audience, the researcher should:",
        options: [
          "Include them anyway",
          "Politely exclude them from the study",
          "Change the research objectives",
          "Ignore the screener",
        ],
        correctIndex: 1,
      },
      {
        question: "Which recruitment mistake is most likely to produce misleading research findings?",
        options: [
          "Recruiting only colleagues from the design team",
          "Recruiting representative target users",
          "Using a participant screener",
          "Including users with diverse experiences",
        ],
        correctIndex: 0,
      },
      {
        question: "Successful participant recruitment ultimately improves:",
        options: [
          "The validity and reliability of UX research findings",
          "Office productivity only",
          "Marketing campaigns",
          "Software performance automatically",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Fintech Mobile Banking Recruitment Plan",
        description:
          "A fintech startup wants to evaluate its new mobile banking application. Develop a participant recruitment plan including research objectives, target participant profiles, screening criteria, recruitment channels, incentive strategy, ethical considerations, and timeline.",
        instructions: [
          "Define research objectives: evaluate usability of core features (transfers, bill payments, account management).",
          "Create 3 target participant profiles: tech-savvy young professionals, middle-aged salary earners, elderly first-time digital banking users.",
          "Develop screening criteria with 5-7 qualifying questions per profile.",
          "Identify recruitment channels: social media ads, banking forums, community centers, existing customer emails.",
          "Design an incentive strategy (gift cards, cash, or account credits) and ethical considerations (consent, data privacy, right to withdraw).",
          "Create a 3-week recruitment timeline with milestones.",
        ],
        hint: "Banking research requires trust. Clearly communicate privacy protections in all recruitment materials.",
      },
      {
        title: "Online Grocery Screener Questionnaire",
        description:
          "Create a participant screener questionnaire for an online grocery delivery platform. Include at least 12 screening questions, define inclusion and exclusion criteria, and explain why each question is necessary.",
        instructions: [
          "Q1-2: Demographics (age, location) — ensure geographic and age diversity.",
          "Q3-4: Grocery shopping behavior (frequency, online vs in-store) — target regular grocery shoppers.",
          "Q5-6: Online delivery experience (platforms used, satisfaction) — recruit users with relevant experience.",
          "Q7-8: Device usage (mobile vs desktop, operating system) — ensure device coverage.",
          "Q9-10: Accessibility needs — include users with diverse abilities.",
          "Q11-12: Household composition and dietary preferences — capture varied use cases.",
          "Define inclusion criteria (minimum 2 online grocery orders in past 3 months) and exclusion criteria (employees of competing platforms).",
        ],
        hint: "Each question should directly tie to a research goal. If a question doesn't inform participant selection, remove it.",
      },
      {
        title: "Government Tax Portal Diverse Recruitment",
        description:
          "Your UX team is redesigning a government tax portal. Develop a recruitment strategy that ensures representation from young adults, older adults, small business owners, individuals with disabilities, and citizens with low digital literacy.",
        instructions: [
          "Young adults (18-30): recruit via social media, university partnerships, and online communities.",
          "Older adults (65+): partner with senior centers, community organizations, and retirement communities.",
          "Small business owners: reach out through business associations, local chambers of commerce, and accounting firms.",
          "Individuals with disabilities: work with disability advocacy organizations and accessibility-focused groups.",
          "Citizens with low digital literacy: collaborate with public libraries, community colleges, and adult education programs.",
          "For each group, explain how you would minimize sampling bias and ensure genuine representation.",
        ],
        hint: "Hard-to-reach groups require targeted outreach. One-size-fits-all recruitment will result in a skewed sample.",
      },
      {
        title: "Low Response Rate Recovery Strategy",
        description:
          "A usability study is delayed because very few participants accepted the invitation. Analyze possible reasons for the low response rate and propose a revised recruitment strategy.",
        instructions: [
          "Analyze possible reasons: inconvenient scheduling, inadequate incentives, unclear invitation, wrong recruitment channels.",
          "Revise communication: craft a more compelling invitation email that clearly states time commitment, incentive, and purpose.",
          "Adjust incentives: consider increasing the incentive amount or offering flexible options (cash, gift cards, donations).",
          "Improve scheduling: offer multiple time slots including evenings and weekends, use a scheduling tool like Calendly.",
          "Follow-up procedures: send reminder emails at 48 hours and 24 hours before, and consider phone call reminders.",
          "Measure success: track response rate before and after revisions to validate improvements.",
        ],
        hint: "If response is low, test one change at a time so you know which variable made the difference.",
      },
      {
        title: "Complete Participant Recruitment and Onboarding Process",
        description:
          "Design a complete recruitment and onboarding process for participants in a UX interview study. Include invitation email, screening questionnaire, consent form, interview scheduling, reminder messages, thank-you communication, and data privacy procedures.",
        instructions: [
          "Invitation email: clear subject line, brief study description, time commitment, incentive, and link to screener.",
          "Screening questionnaire: 8-12 qualifying questions with clear inclusion criteria.",
          "Consent form: study purpose, procedures, risks, benefits, confidentiality, and right to withdraw with signature field.",
          "Scheduling: offer 5-10 time slots across different days and times via an online scheduling tool.",
          "Reminder messages: send 48-hour and 24-hour reminders with location/link, parking instructions, and contact info.",
          "Thank-you: send a thank-you email within 24 hours with incentive delivery details.",
          "Data privacy: explain how data will be stored, who has access, and when it will be deleted.",
          "For each step, explain how it contributes to ethical and effective research.",
        ],
        hint: "A professional recruitment process builds trust and reduces no-shows. Every touchpoint reflects on your organization.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 1 (Set 5): Determining Research Goals and Set Questions
  // ════════════════════════════════════════════
  "research-goals": {
    questions: [
      {
        question: "What is the primary purpose of defining research goals before conducting UX research?",
        options: [
          "To shorten the interview",
          "To ensure the research focuses on answering specific questions",
          "To reduce development costs",
          "To replace usability testing",
        ],
        correctIndex: 1,
      },
      {
        question: "A research goal should be:",
        options: [
          "Vague and broad",
          "Specific and measurable",
          "Based on assumptions",
          "Determined after the interviews",
        ],
        correctIndex: 1,
      },
      {
        question: "Which question is an example of a good UX research question?",
        options: [
          '"Why don\'t users like our product?"',
          '"How do first-time users complete the registration process?"',
          '"Should we redesign the application?"',
          '"Which programming language is the best?"',
        ],
        correctIndex: 1,
      },
      {
        question: "Why is it important to align research goals with business objectives?",
        options: [
          "To ensure research findings support informed product decisions",
          "To replace user needs",
          "To eliminate user interviews",
          "To increase project duration",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is NOT a research goal?",
        options: [
          "Understanding user behavior",
          "Identifying usability issues",
          "Increasing company profit without understanding users",
          "Validating design assumptions",
        ],
        correctIndex: 2,
      },
      {
        question: "Before writing interview questions, researchers should first:",
        options: [
          "Define the research objectives",
          "Schedule interviews",
          "Recruit developers",
          "Create wireframes",
        ],
        correctIndex: 0,
      },
      {
        question: "Which interview question is open-ended?",
        options: [
          '"Did you complete the checkout process?"',
          '"Can you describe your experience completing the checkout process?"',
          '"Was the checkout easy?"',
          '"Did you like the application?"',
        ],
        correctIndex: 1,
      },
      {
        question: "Why are open-ended questions preferred in UX interviews?",
        options: [
          "They encourage detailed responses and reveal deeper insights.",
          "They reduce interview time significantly.",
          "They only require yes/no answers.",
          "They eliminate follow-up questions.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which type of question should generally be avoided during interviews?",
        options: [
          "Neutral questions",
          "Follow-up questions",
          "Leading questions",
          "Exploratory questions",
        ],
        correctIndex: 2,
      },
      {
        question: '"Don\'t you think this feature is useful?" This is an example of:',
        options: [
          "An open-ended question",
          "A neutral question",
          "A leading question",
          "A demographic question",
        ],
        correctIndex: 2,
      },
      {
        question: "Why should research questions avoid technical jargon?",
        options: [
          "To ensure participants clearly understand what is being asked",
          "To impress participants",
          "To increase interview difficulty",
          "To shorten responses",
        ],
        correctIndex: 0,
      },
      {
        question: "Which sequence is most appropriate when planning research?",
        options: [
          "Analyze → Recruit → Define Goals",
          "Define Goals → Develop Questions → Recruit Participants",
          "Recruit → Prototype → Launch",
          "Wireframe → Code → Research",
        ],
        correctIndex: 1,
      },
      {
        question: "Which activity ensures every interview covers the same important topics?",
        options: [
          "Creating an interview guide",
          "Writing source code",
          "Creating personas",
          "Conducting competitor analysis",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should interview questions be directly connected to research goals?",
        options: [
          "To collect relevant and actionable data",
          "To make interviews longer",
          "To satisfy stakeholders only",
          "To reduce documentation",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a research objective?",
        options: [
          "A clear statement describing what the study intends to discover",
          "A participant profile",
          "A usability report",
          "A prototype",
        ],
        correctIndex: 0,
      },
      {
        question: "Which question best explores user motivation?",
        options: [
          '"How old are you?"',
          '"Why did you choose this application instead of others?"',
          '"Which phone do you own?"',
          '"How many emails do you receive daily?"',
        ],
        correctIndex: 1,
      },
      {
        question: "What is the benefit of pilot testing interview questions?",
        options: [
          "It identifies confusing or ineffective questions before the actual study.",
          "It replaces the interview.",
          "It reduces the number of participants needed.",
          "It guarantees positive responses.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which interview question investigates user pain points?",
        options: [
          '"What frustrated you most while completing this task?"',
          '"What is your favorite application?"',
          '"How much storage does your phone have?"',
          '"Which operating system do you use?"',
        ],
        correctIndex: 0,
      },
      {
        question: "A UX research study should end when:",
        options: [
          "Enough relevant evidence has been collected to answer the research goals",
          "Participants become tired",
          "The development team starts coding",
          "Marketing begins",
        ],
        correctIndex: 0,
      },
      {
        question: "Well-defined research goals ultimately help UX teams:",
        options: [
          "Make confident, evidence-based design decisions",
          "Eliminate user testing",
          "Replace stakeholder involvement",
          "Avoid documentation",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Ride-Sharing Registration Abandonment Research Plan",
        description:
          "A ride-sharing company wants to understand why new users abandon registration before completing their first booking. Develop a complete UX research plan including research goal, objectives, five research questions, appropriate research methods, and expected outcomes.",
        instructions: [
          "Define the primary research goal: understand why new users abandon registration before first booking.",
          "Write 3-4 specific research objectives (e.g., identify friction points, understand user expectations, evaluate onboarding clarity).",
          "Formulate 5 research questions that address different aspects of the problem.",
          "Select mixed methods: analytics review (quantitative) + user interviews (qualitative).",
          "Define expected outcomes: prioritized list of usability issues, design recommendations, and success metrics.",
        ],
        hint: "Focus research questions on specific stages of the registration flow rather than broad questions.",
      },
      {
        title: "Food Delivery Interview Guide",
        description:
          "Create an interview guide for a food delivery application. Include introduction, warm-up questions, behavioral questions, pain point questions, closing questions, and follow-up prompts.",
        instructions: [
          "Introduction: welcome the participant, explain the study purpose, obtain consent, and set expectations.",
          "Warm-up (3-4 questions): ask about general food ordering habits to build rapport.",
          "Behavioral (4-5 questions): explore how users currently order food, their decision process, and app usage patterns.",
          "Pain point (3-4 questions): ask about frustrations, workarounds, and moments of confusion or delight.",
          "Closing (2-3 questions): invite final thoughts, ask for feature wishes, and thank the participant.",
          "For each section, explain how the questions support the research objectives.",
        ],
        hint: "Order questions from general to specific. Start with easy, non-threatening questions before diving into pain points.",
      },
      {
        title: "LMS Redesign Research Goals and Questions",
        description:
          "A university plans to redesign its Learning Management System (LMS). Write three research goals, ten interview questions, five assumptions to validate, and five expected insights.",
        instructions: [
          "Research goal 1: understand how students currently navigate course materials and identify friction points.",
          "Research goal 2: evaluate the effectiveness of current communication tools between students and instructors.",
          "Research goal 3: assess mobile accessibility and identify barriers for students using phones/tablets.",
          "Write 10 interview questions that address all three goals (at least 3 per goal).",
          "List 5 assumptions the team currently holds and explain how research will validate or invalidate them.",
          "Describe 5 expected insights and how they will influence specific design decisions.",
        ],
        hint: "State assumptions explicitly before research. This helps the team recognize when findings contradict their beliefs.",
      },
      {
        title: "Questionnaire Critique and Rewrite",
        description:
          "Review a poorly written UX interview questionnaire (or create one yourself). Identify at least ten leading, biased, or unclear questions. Rewrite each question to make it neutral, open-ended, and aligned with UX research best practices.",
        instructions: [
          "Create or find a questionnaire with at least 10 flawed questions (leading, double-barreled, jargon-filled, or closed-ended).",
          "For each question, explain why it is problematic (e.g., 'Don't you agree the interface is simple?' is leading).",
          "Rewrite each question following UX best practices (neutral, open-ended, specific, jargon-free).",
          "Explain how the improved questions will yield more reliable and actionable data.",
        ],
        hint: "Common flaws: asking 'why' questions (which feel accusatory), assuming user emotions, using technical terms, and asking about hypothetical scenarios.",
      },
      {
        title: "Healthcare Platform Research Planning Document",
        description:
          "Imagine your team is designing a digital healthcare platform. Develop a comprehensive research planning document including business goals, user goals, research goals, key hypotheses, success metrics, risks, and ethical considerations.",
        instructions: [
          "Business goals: increase patient engagement, reduce no-show rates, improve health outcomes.",
          "User goals: easily schedule appointments, access medical records, communicate with providers.",
          "Research goals: understand appointment scheduling behavior, evaluate information needs, identify trust barriers.",
          "Key hypotheses: if booking takes less than 2 minutes, completion rates will increase; if records are clearly organized, patient questions will decrease.",
          "Success metrics: task completion rate, time on task, satisfaction score, error rate.",
          "Risks: privacy concerns, recruitment of patients with diverse health conditions, scheduling around treatment.",
          "Ethical considerations: informed consent for patients, data security, vulnerable population protections.",
          "Explain how each section contributes to research project success.",
        ],
        hint: "Healthcare research has unique ethical requirements. IRB approval, HIPAA compliance, and patient vulnerability must be addressed upfront.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 2 (Set 5): Consider Accessibility During User Research
  // ════════════════════════════════════════════
  "accessibility-research": {
    questions: [
      {
        question: "Why should accessibility be considered during UX research?",
        options: [
          "To reduce research costs",
          "To ensure research includes people with diverse abilities and experiences",
          "To shorten interviews",
          "To replace usability testing",
        ],
        correctIndex: 1,
      },
      {
        question: "What is accessibility in UX research?",
        options: [
          "Designing only for expert users",
          "Making research activities inclusive and usable for participants with diverse abilities",
          "Increasing the number of interview questions",
          "Conducting research online only",
        ],
        correctIndex: 1,
      },
      {
        question: "Which group should be included when planning accessible UX research?",
        options: [
          "Only users without disabilities",
          "Users representing a variety of physical, sensory, cognitive, and technological abilities",
          "Company executives only",
          "Software developers only",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is an example of an accessibility accommodation during interviews?",
        options: [
          "Providing live captions",
          "Using technical jargon",
          "Speaking as quickly as possible",
          "Avoiding visual aids",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should researchers ask participants about accommodation needs before the session?",
        options: [
          "To prepare an inclusive research environment",
          "To shorten the interview",
          "To reduce documentation",
          "To eliminate follow-up questions",
        ],
        correctIndex: 0,
      },
      {
        question: "Which interview format may best support participants with mobility impairments?",
        options: [
          "Remote video interviews",
          "Mandatory in-person sessions",
          "Telephone interviews only",
          "Paper questionnaires only",
        ],
        correctIndex: 0,
      },
      {
        question: "Which practice improves accessibility for participants with hearing impairments?",
        options: [
          "Providing sign language interpreters or live captions",
          "Turning off subtitles",
          "Speaking while looking away",
          "Using audio instructions only",
        ],
        correctIndex: 0,
      },
      {
        question: "A participant uses a screen reader. What should the researcher do?",
        options: [
          "Ensure digital materials are compatible with assistive technologies",
          "Replace all digital materials with handwritten notes",
          "End the interview",
          "Skip usability testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Which document should be provided in an accessible format?",
        options: [
          "Consent form",
          "Marketing brochure",
          "Sprint backlog",
          "Financial report",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the purpose of using plain language during research?",
        options: [
          "To improve understanding for participants with different literacy levels",
          "To reduce research quality",
          "To impress participants",
          "To make interviews longer",
        ],
        correctIndex: 0,
      },
      {
        question: "Which accessibility principle encourages providing information in multiple formats?",
        options: [
          "Multiple means of representation",
          "Competitive analysis",
          "Visual hierarchy",
          "Storyboarding",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an example of an accessible research location?",
        options: [
          "A venue with ramps, elevators, and accessible restrooms",
          "A second-floor office with no elevator",
          "A noisy environment with poor lighting",
          "A restricted-access building",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should researchers allow additional time for some participants?",
        options: [
          "Different participants may require more time to process information or complete tasks",
          "To increase project costs",
          "To reduce participation",
          "To collect fewer insights",
        ],
        correctIndex: 0,
      },
      {
        question: "Which ethical principle is closely related to accessibility?",
        options: ["Inclusion", "Competition", "Profitability", "Branding"],
        correctIndex: 0,
      },
      {
        question: "Which technology may support participants with visual impairments?",
        options: [
          "Screen readers",
          "Hidden menus",
          "Decorative animations",
          "Flashing graphics",
        ],
        correctIndex: 0,
      },
      {
        question: "A participant has dyslexia. Which adjustment is most appropriate?",
        options: [
          "Use clear fonts, sufficient spacing, and simple language",
          "Provide dense paragraphs with small text",
          "Remove headings from documents",
          "Increase technical terminology",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should accessibility be considered during participant recruitment?",
        options: [
          "To ensure diverse perspectives are represented",
          "To reduce sample size",
          "To eliminate interviews",
          "To avoid usability testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Which action demonstrates inclusive facilitation during a usability study?",
        options: [
          "Asking participants whether they need accommodations before beginning",
          "Assuming all participants have the same abilities",
          "Rushing through the session",
          "Ignoring participant concerns",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary benefit of accessible UX research?",
        options: [
          "It produces findings that better represent the needs of a broader user population",
          "It guarantees perfect products",
          "It removes the need for testing",
          "It replaces accessibility design",
        ],
        correctIndex: 0,
      },
      {
        question: "Accessibility during UX research ultimately helps designers create products that are:",
        options: [
          "More inclusive, equitable, and usable",
          "More expensive",
          "More technically complex",
          "More difficult to learn",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Government Tax Filing Accessibility Plan",
        description:
          "A government agency is conducting UX research for a digital tax filing system. Develop an accessibility plan that ensures meaningful participation from people with visual impairments, hearing impairments, mobility impairments, cognitive disabilities, and older adults.",
        instructions: [
          "Visual impairments: provide screen-reader-compatible materials, high-contrast visuals, and audio descriptions.",
          "Hearing impairments: offer sign language interpreters, live captions, and written summaries of verbal instructions.",
          "Mobility impairments: ensure research locations are wheelchair accessible; offer remote participation options.",
          "Cognitive disabilities: use plain language, break sessions into shorter segments, provide visual schedules.",
          "Older adults: offer large-print materials, allow extra time, use familiar technology (phone vs video call).",
          "For each group, explain the specific accommodations, assistive technologies, and ethical considerations.",
        ],
        hint: "Don't assume you know what accommodations someone needs — ask each participant individually before the session.",
      },
      {
        title: "Accessible Banking Usability Testing Session",
        description:
          "Design an accessible usability testing session for an online banking application. Include recruitment strategy, accessible consent process, session moderation, accessible materials, assistive technologies, data collection methods, and post-session follow-up.",
        instructions: [
          "Recruitment: actively recruit participants with diverse disabilities through advocacy organizations.",
          "Consent: provide consent forms in multiple formats (large print, audio, plain language, screen-reader compatible).",
          "Moderation: speak clearly, face participants who lip-read, describe visual elements, allow breaks.",
          "Materials: use high-contrast prototypes, large fonts, and keyboard-navigable interfaces.",
          "Assistive technologies: test with screen readers, magnification software, voice control, and switch devices.",
          "Data collection: capture video (with consent), audio, screen recordings, and observer notes.",
          "Follow-up: provide session summaries in the participant's preferred format.",
        ],
        hint: "Test your own materials with assistive technologies before the session to avoid surprises.",
      },
      {
        title: "Accessibility Barriers Audit",
        description:
          "Review a UX research process and identify at least ten accessibility barriers that could prevent people with disabilities from participating. For each barrier, explain its impact and recommend an appropriate solution.",
        instructions: [
          "Barrier 1: recruitment materials only in English → impact: excludes non-English speakers → solution: translate into top local languages.",
          "Barrier 2: consent form in small font → impact: visually impaired cannot read → solution: provide large print and audio versions.",
          "Barrier 3: in-person session in walk-up office → impact: wheelchair users excluded → solution: ensure ground-floor or elevator access.",
          "Barrier 4: prototype requires mouse interaction → impact: users with motor impairments excluded → solution: ensure keyboard navigation.",
          "Barrier 5: verbal instructions without visual aid → impact: hearing impaired miss information → solution: provide written summaries.",
          "Barrier 6: timed tasks → impact: users with cognitive disabilities pressured → solution: remove time limits or offer flexible pacing.",
          "Barrier 7: bright flashing stimuli → impact: triggers seizures in photosensitive epilepsy → solution: avoid flashing content.",
          "Barrier 8: small touch targets → impact: users with motor control issues → solution: ensure minimum 48x48dp targets.",
          "Barrier 9: complex navigation structure → impact: screen reader users confused → solution: use clear headings and landmarks.",
          "Barrier 10: no option for remote participation → impact: mobility-impaired users excluded → solution: offer video call sessions.",
        ],
        hint: "Involve people with disabilities in reviewing your research process — they will identify barriers you never considered.",
      },
      {
        title: "Rural Community Inclusive Research Strategy",
        description:
          "Imagine your organization is conducting research in rural communities where participants have limited digital literacy and varying accessibility needs. Develop a complete research strategy addressing communication, transportation, language, research methods, accessibility accommodations, and ethical considerations.",
        instructions: [
          "Communication: use community liaisons, local leaders, and word-of-mouth for recruitment.",
          "Transportation: provide transportation or conduct research in central community locations (libraries, community centers).",
          "Language: translate materials into local dialects, use visual aids, and employ bilingual moderators.",
          "Research methods: use in-person interviews, observation, and paper-based activities instead of digital-only methods.",
          "Accessibility: bring large-print materials, portable ramps, and assistive technology devices.",
          "Ethical considerations: obtain community-level consent, respect cultural norms, ensure data privacy in close-knit communities.",
          "Explain how each component ensures inclusive and representative research findings.",
        ],
        hint: "In rural or tight-knit communities, trust is paramount. Partner with respected local figures for recruitment and facilitation.",
      },
      {
        title: "UX Researcher Accessibility Checklist",
        description:
          "Create an Accessibility Checklist for UX Researchers. Cover recruitment, scheduling, consent, communication, research materials, research environment, facilitation, data collection, privacy, and follow-up.",
        instructions: [
          "Recruitment: ___ outreach to disability organizations, ___ inclusive language in materials.",
          "Scheduling: ___ offer flexible times, ___ ask about accommodations in advance.",
          "Consent: ___ multiple formats available, ___ plain language summary provided.",
          "Communication: ___ plain language used, ___ jargon avoided, ___ multiple channels offered.",
          "Materials: ___ high contrast, ___ large font (min 16px), ___ screen-reader compatible.",
          "Environment: ___ wheelchair accessible, ___ quiet and well-lit, ___ adjustable furniture.",
          "Facilitation: ___ speak clearly, ___ face participants, ___ allow breaks, ___ describe visuals.",
          "Data collection: ___ multiple methods offered, ___ consent for recordings obtained.",
          "Privacy: ___ data storage security confirmed, ___ participant identifiers removed.",
          "Follow-up: ___ summary in preferred format, ___ thank-you and incentive delivered.",
          "Explain why each checklist item is important for inclusive research.",
        ],
        hint: "Make this a living document — update it as you learn from each research project what works and what doesn't.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 3 (Set 5): Conduct User Interviews
  // ════════════════════════════════════════════
  "conduct-interviews": {
    questions: [
      {
        question: "What is the primary objective of conducting user interviews in UX research?",
        options: [
          "To persuade users to like the product",
          "To understand users' experiences, behaviors, needs, and pain points",
          "To market the product",
          "To teach users how to use the product",
        ],
        correctIndex: 1,
      },
      {
        question: "Which type of interview provides the greatest flexibility while maintaining consistency across participants?",
        options: [
          "Structured interview",
          "Semi-structured interview",
          "Unstructured interview",
          "Group interview",
        ],
        correctIndex: 1,
      },
      {
        question: "What should a UX researcher do before beginning an interview?",
        options: [
          "Obtain informed consent",
          "Start asking questions immediately",
          "Begin recording secretly",
          "Explain the solution before the interview",
        ],
        correctIndex: 0,
      },
      {
        question: "Which question is most appropriate during a UX interview?",
        options: [
          '"Can you describe how you normally complete this task?"',
          '"Don\'t you think our app is easy to use?"',
          '"Wouldn\'t you agree our design is modern?"',
          '"You like this feature, don\'t you?"',
        ],
        correctIndex: 0,
      },
      {
        question: "Why are open-ended questions valuable during user interviews?",
        options: [
          "They encourage participants to provide detailed responses.",
          "They reduce interview time.",
          "They eliminate follow-up questions.",
          "They guarantee positive feedback.",
        ],
        correctIndex: 0,
      },
      {
        question: "What is active listening?",
        options: [
          "Interrupting participants frequently",
          "Paying close attention, asking clarifying questions, and avoiding judgment",
          "Reading questions without listening",
          "Correcting participants when they make mistakes",
        ],
        correctIndex: 1,
      },
      {
        question: "If a participant goes off-topic, the interviewer should:",
        options: [
          "Politely guide the conversation back to the research objectives",
          "End the interview immediately",
          "Ignore the participant",
          "Change the research goals",
        ],
        correctIndex: 0,
      },
      {
        question: "Which behavior should interviewers avoid?",
        options: [
          "Asking neutral follow-up questions",
          "Maintaining eye contact when appropriate",
          "Leading participants toward expected answers",
          "Taking notes",
        ],
        correctIndex: 2,
      },
      {
        question: "What is the advantage of recording interviews (with permission)?",
        options: [
          "It allows researchers to review responses accurately.",
          "It replaces note-taking completely.",
          "It shortens the interview.",
          "It guarantees perfect analysis.",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should silence sometimes be allowed during interviews?",
        options: [
          "It gives participants time to think and provide more meaningful responses.",
          "It shortens the interview.",
          "It reduces data quality.",
          "It encourages yes/no answers.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which response best demonstrates empathy during an interview?",
        options: [
          '"Can you tell me more about that experience?"',
          '"You\'re using the product incorrectly."',
          '"That shouldn\'t be a problem."',
          '"Most users don\'t experience that."',
        ],
        correctIndex: 0,
      },
      {
        question: "When should follow-up questions be asked?",
        options: [
          "When clarification or deeper understanding is needed",
          "At the beginning of every interview only",
          "Never",
          "Only after usability testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Which note-taking practice is recommended?",
        options: [
          "Capture important quotes, behaviors, observations, and emotions",
          "Write only personal opinions",
          "Ignore participant emotions",
          "Record only demographic information",
        ],
        correctIndex: 0,
      },
      {
        question: "Which interviewer behavior helps build participant trust?",
        options: [
          "Remaining respectful, neutral, and non-judgmental",
          "Arguing with participants",
          "Defending the product",
          "Rushing participants",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should interviewers avoid explaining or defending the product?",
        options: [
          "It may influence participants' responses.",
          "It increases interview duration.",
          "It improves research quality.",
          "It encourages participants to criticize the product.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which interview technique helps researchers understand the sequence of user actions?",
        options: [
          "Asking participants to describe each step they took",
          "Showing the final design first",
          "Explaining the solution before questioning",
          "Skipping behavioral questions",
        ],
        correctIndex: 0,
      },
      {
        question: "What should researchers do immediately after an interview?",
        options: [
          "Organize notes and document key observations while the session is still fresh",
          "Delete the recording",
          "Ignore the findings",
          "Begin designing immediately without analysis",
        ],
        correctIndex: 0,
      },
      {
        question: "If multiple participants report the same frustration, the UX team should:",
        options: [
          "Investigate it as a potential usability issue",
          "Ignore the pattern",
          "Remove the feature immediately without validation",
          "Assume it is an isolated opinion",
        ],
        correctIndex: 0,
      },
      {
        question: "Which ethical practice applies throughout user interviews?",
        options: [
          "Protecting participant confidentiality and privacy",
          "Sharing recordings publicly",
          "Collecting unnecessary personal information",
          "Recording without consent",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of conducting user interviews is to:",
        options: [
          "Generate reliable insights that inform user-centered design decisions",
          "Convince users the design is correct",
          "Replace usability testing",
          "Eliminate further research",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Budgeting App Interview Guide",
        description:
          "A startup is developing a mobile budgeting application for young professionals. Create a complete interview guide including research objectives, participant introduction script, consent process, warm-up questions, behavioral questions, pain-point questions, follow-up questions, and closing questions.",
        instructions: [
          "Research objectives: understand budgeting habits, identify pain points with current tools, evaluate feature priorities.",
          "Introduction script: welcome, study overview, confidentiality assurance, and consent confirmation.",
          "Warm-up (3-4 questions): daily financial habits, current budgeting methods, general app usage patterns.",
          "Behavioral (4-5 questions): specific budgeting scenarios, decision-making process, tool evaluation criteria.",
          "Pain-point (3-4 questions): frustrations with current budgeting, moments of financial stress, unmet needs.",
          "Follow-up: probing questions to deepen understanding of interesting responses.",
          "Closing: opportunity for participant questions, next steps, and thank-you.",
          "Explain how each section contributes to achieving the research objectives.",
        ],
        hint: "Money is a sensitive topic. Build rapport thoroughly before asking about financial behaviors or frustrations.",
      },
      {
        title: "Five User Interview Research Report",
        description:
          "Conduct five user interviews for a digital product of your choice. Prepare a professional research report containing participant profiles, interview summaries, direct user quotes, key observations, emerging themes, and design recommendations.",
        instructions: [
          "Select a digital product and recruit 5 participants who match the target user profile.",
          "Prepare a semi-structured interview guide with 8-12 questions.",
          "Conduct and record (with consent) all 5 interviews.",
          "Create participant profiles: age, occupation, tech literacy, product usage frequency.",
          "Write interview summaries (1 page each): key quotes, behaviors, and observations.",
          "Identify 3-5 emerging themes across all participants.",
          "Propose 3 actionable UX improvements with supporting evidence from interview data.",
        ],
        hint: "Look for patterns across participants, not just individual stories. A frustration mentioned by 3 out of 5 users is a pattern worth investigating.",
      },
      {
        title: "Interviewer Behavior Critique",
        description:
          "Review common interviewer behaviors and identify which violate UX research best practices: interrupting participants, defending the product, asking leading questions, ignoring participant emotions, finishing participants' sentences, and explaining how the interface should be used.",
        instructions: [
          "Interrupting participants: breaks their train of thought, signals their input isn't valued. Better: wait for natural pauses, note questions for later.",
          "Defending the product: makes participants reluctant to share criticism. Better: remain neutral, thank participants for all feedback.",
          "Asking leading questions: biases responses toward expected answers. Better: use open-ended, neutral phrasing.",
          "Ignoring participant emotions: misses critical data about user experience. Better: acknowledge emotions with empathetic responses.",
          "Finishing sentences: assumes what participant will say, introduces bias. Better: allow silence, let participants complete their thoughts.",
          "Explaining interface: teaches rather than learns from participant. Better: observe how participants naturally interact.",
          "For each behavior, explain why it is problematic and recommend a better approach.",
        ],
        hint: "Record a practice interview and review it. You'll be surprised how many of these behaviors creep in unconsciously.",
      },
      {
        title: "International Interview Strategy",
        description:
          "Your UX team must interview users across three countries with different languages and cultures. Develop an international interview strategy covering participant recruitment, language translation, cultural sensitivity, accessibility, scheduling across time zones, data privacy, and interview moderation.",
        instructions: [
          "Recruitment: use local research agencies, community partners, and localized recruitment materials.",
          "Translation: employ professional translators for materials and interpreters for sessions (not machine translation).",
          "Cultural sensitivity: research cultural norms around politeness, criticism, and decision-making in each country.",
          "Accessibility: ensure accommodations are culturally appropriate and available in local languages.",
          "Scheduling: use world clock tools, offer time slots across multiple time zones, record sessions for later review.",
          "Data privacy: comply with local regulations (GDPR in Europe, LGPD in Brazil, etc.).",
          "Moderation: consider using local moderators who understand cultural nuances.",
          "Explain how each strategy ensures reliable and unbiased research findings.",
        ],
        hint: "What works in one culture may fail in another. In some cultures, participants avoid direct criticism — use indirect questioning techniques.",
      },
      {
        title: "User Interview Toolkit Design",
        description:
          "Design a complete User Interview Toolkit for UX researchers. Include templates for recruitment email, consent form, interview guide, note-taking sheet, observation log, audio/video recording checklist, debrief template, and research summary.",
        instructions: [
          "Recruitment email template: clear subject, study description, time commitment, incentive, scheduling link.",
          "Consent form template: study purpose, procedures, risks, confidentiality, recordings, right to withdraw, signature.",
          "Interview guide template: header (study name, date, participant ID), script, questions by category, space for notes.",
          "Note-taking sheet: columns for question, participant response, observer notes, and emotional cues.",
          "Observation log: timestamp, user action, behavior, quote, and researcher interpretation.",
          "Recording checklist: ___ device charged, ___ storage available, ___ consent confirmed, ___ test recording.",
          "Debrief template: key findings, surprising insights, quotes to remember, improvements for next session.",
          "Research summary: goals, methods, participant overview, top 5 findings, recommendations, next steps.",
          "Explain how each template improves consistency, data quality, and ethical research practices.",
        ],
        hint: "Standardized templates ensure consistency across researchers and studies, making it easier to compare and combine findings.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 1 (Set 6): Understand and Build User Persona
  // ════════════════════════════════════════════
  "user-persona": {
    questions: [
      {
        question: "What is a user persona?",
        options: [
          "A real customer profile containing confidential information",
          "A fictional representation of a target user based on research data",
          "A software testing report",
          "A project schedule",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the primary purpose of creating user personas?",
        options: [
          "To replace user interviews",
          "To help design teams understand and empathize with target users",
          "To estimate project costs",
          "To develop source code",
        ],
        correctIndex: 1,
      },
      {
        question: "User personas should be created using:",
        options: [
          "Personal opinions",
          "Research findings and user data",
          "Competitor websites only",
          "Random assumptions",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is commonly included in a user persona?",
        options: ["Goals", "Pain points", "Behaviors", "All of the above"],
        correctIndex: 3,
      },
      {
        question: "Why should personas include user goals?",
        options: [
          "To understand what users are trying to achieve",
          "To increase development costs",
          "To determine programming languages",
          "To improve office productivity",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a pain point in a user persona?",
        options: [
          "A feature request",
          "A challenge or frustration experienced by the user",
          "A business objective",
          "A design pattern",
        ],
        correctIndex: 1,
      },
      {
        question: "Which persona element helps explain how users interact with technology?",
        options: ["Behaviors", "Company revenue", "Product roadmap", "Marketing strategy"],
        correctIndex: 0,
      },
      {
        question: "Why should personas include motivations?",
        options: [
          "They explain why users perform certain actions.",
          "They increase project complexity.",
          "They replace usability testing.",
          "They determine color palettes.",
        ],
        correctIndex: 0,
      },
      {
        question: "A persona represents:",
        options: [
          "One specific real customer",
          "A group of users with similar characteristics",
          "The development team",
          "The company CEO",
        ],
        correctIndex: 1,
      },
      {
        question: "How many personas should a project typically have?",
        options: [
          "Only one for every project",
          "As many as necessary to represent major user groups without unnecessary duplication",
          "One for every employee",
          "At least twenty",
        ],
        correctIndex: 1,
      },
      {
        question: "Which statement about user personas is TRUE?",
        options: [
          "Personas should never be updated.",
          "Personas should evolve as new research becomes available.",
          "Personas are created before research.",
          "Personas replace user testing.",
        ],
        correctIndex: 1,
      },
      {
        question: "Which section of a persona often describes age, occupation, and education?",
        options: [
          "Demographic information",
          "Technical architecture",
          "Business metrics",
          "Source code",
        ],
        correctIndex: 0,
      },
      {
        question: "Which persona detail helps UX Designers prioritize accessibility features?",
        options: [
          "Accessibility needs",
          "Favorite movie",
          "Salary information",
          "Office location",
        ],
        correctIndex: 0,
      },
      {
        question: "A persona that is based on assumptions instead of research is:",
        options: [
          "Reliable",
          "Risky and potentially misleading",
          "Recommended",
          "More accurate",
        ],
        correctIndex: 1,
      },
      {
        question: "Which activity usually comes before creating user personas?",
        options: [
          "User research",
          "Product launch",
          "Software deployment",
          "Marketing campaign",
        ],
        correctIndex: 0,
      },
      {
        question: "Personas help stakeholders by:",
        options: [
          "Providing a shared understanding of target users",
          "Replacing project planning",
          "Eliminating business goals",
          "Removing design reviews",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best represents a user goal?",
        options: [
          '"I want to pay my electricity bill in less than two minutes."',
          '"The company should increase revenue."',
          '"Developers should use React."',
          '"Marketing needs more customers."',
        ],
        correctIndex: 0,
      },
      {
        question: "A UX team designs only for themselves instead of using personas. What is the greatest risk?",
        options: [
          "Creating solutions that do not meet user needs",
          "Faster development",
          "Better usability",
          "Reduced research costs",
        ],
        correctIndex: 0,
      },
      {
        question: "Personas are most valuable when they are:",
        options: [
          "Evidence-based and regularly referenced during design decisions",
          "Created once and forgotten",
          "Based on opinions",
          "Written by marketing alone",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of a user persona is to:",
        options: [
          "Keep the design process focused on real user needs and behaviors",
          "Replace user interviews",
          "Increase project documentation",
          "Reduce stakeholder involvement",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Fintech Savings App Personas",
        description:
          "A fintech company is building a mobile savings application. Create three research-based user personas representing a university student, a young working professional, and a small business owner.",
        instructions: [
          "Student persona: age 18-24, part-time income, saving for tuition/expenses, uses mobile-first, price-sensitive.",
          "Professional persona: age 25-35, full-time salary, saving for major purchases, values automation and goal tracking.",
          "Business owner persona: age 30-50, irregular income, saving for taxes/expansion, needs separation of personal and business.",
          "For each persona include: demographics, goals, motivations, behaviors, pain points, accessibility considerations, preferred devices, tech proficiency, and a representative quote.",
          "Explain how each persona would influence product design decisions (features, UI, tone, onboarding).",
        ],
        hint: "Each persona should have distinct enough characteristics that they would make different design decisions.",
      },
      {
        title: "Research-Based Persona Creation",
        description:
          "Conduct user research with at least five participants for any digital product. Analyze the findings and create two detailed personas. Justify every persona characteristic using research evidence rather than assumptions.",
        instructions: [
          "Conduct 5+ user interviews or surveys about a specific digital product.",
          "Analyze responses to identify patterns in goals, behaviors, and pain points.",
          "Create 2 distinct personas representing different user segments.",
          "For each persona characteristic (age, goal, pain point, behavior), cite specific research evidence (e.g., '3 of 5 participants mentioned this').",
          "Explain how each persona would be used in design decisions.",
        ],
        hint: "If you can't cite at least one participant quote for a persona characteristic, it may be an assumption rather than research evidence.",
      },
      {
        title: "Government Persona Framework Critique",
        description:
          "A government digital service currently has one generic persona. Critically evaluate why this approach may be insufficient. Develop a new persona framework that represents diverse citizen groups and explain how it improves inclusive design.",
        instructions: [
          "Critique the single-persona approach: oversimplifies diverse citizen needs, may exclude vulnerable populations, leads to one-size-fits-none design.",
          "Identify 4-6 distinct citizen groups (e.g., tech-savvy young adults, elderly with low digital literacy, non-native language speakers, users with disabilities, rural vs urban).",
          "Create persona templates for each group with characteristics relevant to government services.",
          "Explain how the multi-persona framework improves inclusive design decisions.",
        ],
        hint: "Government services must serve everyone. A single persona cannot represent the full diversity of citizens.",
      },
      {
        title: "Cross-Cultural Persona Comparison",
        description:
          "Compare personas for the same product across two different countries. Analyze differences in goals, behaviors, technology usage, accessibility, and cultural expectations. Explain how these differences affect UX decisions.",
        instructions: [
          "Select a global product (e.g., WhatsApp, Uber, Airbnb) and research its usage in two different countries.",
          "Create a persona for each country's typical user.",
          "Compare across dimensions: goals (e.g., social connection vs utility), behaviors (e.g., sharing vs privacy), tech usage (e.g., mobile vs desktop), accessibility needs, and cultural expectations (e.g., direct vs indirect communication).",
          "Explain how these differences would influence UX decisions for each market.",
        ],
        hint: "A feature that delights users in one culture may confuse or offend users in another. Research cultural UX norms.",
      },
      {
        title: "Professional Persona Template",
        description:
          "Create a complete Persona Template for a UX team. Include every section required for professional UX projects and provide guidance on what information belongs in each section and why it is important.",
        instructions: [
          "Header: persona name, role/tagline, and representative photo (diverse, respectful imagery).",
          "Demographics: age, occupation, location, education, income range — context for decision-making.",
          "Goals: what the user wants to achieve — drives feature prioritization.",
          "Motivations: why the user wants these goals — informs messaging and engagement strategies.",
          "Behaviors: how the user acts — guides interaction design and information architecture.",
          "Pain points: frustrations and obstacles — directly informs problem-solving.",
          "Needs: what the user requires — defines success criteria for design solutions.",
          "Accessibility: relevant disabilities or limitations — ensures inclusive design.",
          "Tech proficiency: device usage, digital literacy — guides complexity and platform decisions.",
          "Quote: a real participant quote that captures the persona's essence.",
          "For each section, explain why it is important and what type of information belongs there.",
        ],
        hint: "Keep personas to one page. If they need multiple pages, they're too complex and won't be used.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 2 (Set 6): Understand and Craft User Story
  // ════════════════════════════════════════════
  "user-stories": {
    questions: [
      {
        question: "What is a user story?",
        options: [
          "A detailed technical specification",
          "A short description of a feature from the user's perspective",
          "A marketing advertisement",
          "A project budget",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is the standard format of a user story?",
        options: [
          "As a [user], I want [goal], so that [benefit].",
          "When [event], then [result].",
          "If [condition], then [action].",
          "User → System → Database",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of a user story?",
        options: [
          "To describe technical architecture",
          "To communicate user needs and product value",
          "To estimate project budgets",
          "To write source code",
        ],
        correctIndex: 1,
      },
      {
        question: "In the statement, 'As a customer, I want to save items to my wishlist so that I can purchase them later,' who is the user?",
        options: ["Wishlist", "Customer", "Purchase", "Product Manager"],
        correctIndex: 1,
      },
      {
        question: "In a user story, the phrase 'I want to...' describes the:",
        options: [
          "Business objective",
          "User goal",
          "Technical requirement",
          "Acceptance criteria",
        ],
        correctIndex: 1,
      },
      {
        question: "In a user story, 'so that...' represents the:",
        options: [
          "Technical limitation",
          "Business budget",
          "User benefit or value",
          "Sprint duration",
        ],
        correctIndex: 2,
      },
      {
        question: "User stories help development teams focus on:",
        options: [
          "User value",
          "Programming languages",
          "Marketing strategies",
          "Company structure",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is a well-written user story?",
        options: [
          "As a student, I want to download lecture notes so that I can study offline.",
          "Build a download button.",
          "Improve the website.",
          "Create a database.",
        ],
        correctIndex: 0,
      },
      {
        question: "User stories are commonly used in:",
        options: [
          "Agile software development",
          "Payroll management",
          "Financial auditing",
          "Network administration",
        ],
        correctIndex: 0,
      },
      {
        question: "Which characteristic makes a good user story?",
        options: [
          "Clear, concise, and user-focused",
          "Long and highly technical",
          "Focused only on system architecture",
          "Written from the developer's perspective",
        ],
        correctIndex: 0,
      },
      {
        question: "Acceptance criteria are used to:",
        options: [
          "Define when a user story is considered complete",
          "Recruit participants",
          "Build personas",
          "Conduct interviews",
        ],
        correctIndex: 0,
      },
      {
        question: "Which question should a user story answer?",
        options: [
          "Who needs something?",
          "What do they need?",
          "Why do they need it?",
          "All of the above",
        ],
        correctIndex: 3,
      },
      {
        question: "Who is the primary focus of a user story?",
        options: [
          "The end user",
          "Investors",
          "Company executives",
          "Developers only",
        ],
        correctIndex: 0,
      },
      {
        question: "A user story should avoid:",
        options: [
          "Ambiguous language",
          "Clear benefits",
          "Simple wording",
          "User-centered thinking",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement is NOT a user story?",
        options: [
          "As a teacher, I want to upload assignments so that students can access them online.",
          "As a customer, I want secure payment options so that I feel confident shopping online.",
          "Implement OAuth authentication.",
          "As a patient, I want appointment reminders so that I don't miss my consultations.",
        ],
        correctIndex: 2,
      },
      {
        question: "User stories encourage collaboration between:",
        options: [
          "Designers, developers, product managers, and stakeholders",
          "Marketing teams only",
          "Finance departments only",
          "Human Resources only",
        ],
        correctIndex: 0,
      },
      {
        question: "A user story should represent:",
        options: [
          "One user need or feature",
          "An entire application",
          "Multiple unrelated features",
          "A marketing campaign",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the relationship between personas and user stories?",
        options: [
          "Personas help identify who the user story represents",
          "They are unrelated",
          "Personas replace user stories",
          "User stories replace personas",
        ],
        correctIndex: 0,
      },
      {
        question: "Which practice improves the quality of user stories?",
        options: [
          "Validating them with research findings",
          "Writing them without user input",
          "Making them highly technical",
          "Avoiding stakeholder feedback",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of user stories is to:",
        options: [
          "Ensure product development delivers meaningful value to users",
          "Increase documentation",
          "Replace wireframes",
          "Eliminate prototyping",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "University Learning Platform User Stories",
        description:
          "A university is redesigning its online learning platform. Write 20 user stories covering student registration, course enrollment, assignment submission, quiz participation, grade viewing, instructor communication, notifications, accessibility, mobile learning, and account management.",
        instructions: [
          "Write 2 stories per area (10 areas × 2 = 20 stories total).",
          "Each story must follow the standard format: As a [user], I want [goal], so that [benefit].",
          "Areas: student registration, course enrollment, assignment submission, quiz participation, grade viewing, instructor communication, notifications, accessibility, mobile learning, account management.",
          "For each story, create at least 3 acceptance criteria defining when the story is complete.",
        ],
        hint: "Include stories for different user types: students, instructors, and administrators.",
      },
      {
        title: "Persona-Based Banking User Stories",
        description:
          "Choose a mobile banking application. Develop user stories for the following personas: student, salary earner, small business owner, senior citizen, and visually impaired user. Explain how each user story reflects the persona's unique goals and needs.",
        instructions: [
          "Student: stories about micro-savings, parent transfers, student account features.",
          "Salary earner: stories about salary alerts, bill payments, savings goals.",
          "Business owner: stories about invoice tracking, multi-account management, tax reporting.",
          "Senior citizen: stories about simplified login, large fonts, easy balance checking.",
          "Visually impaired: stories about screen reader compatibility, voice commands, high contrast.",
          "For each persona, write 3 user stories and explain how the story reflects their unique needs.",
        ],
        hint: "The same feature (e.g., money transfer) would be written differently for each persona based on their goals and context.",
      },
      {
        title: "Dashboard User Story Critique",
        description:
          "A UX team has written the following user story: 'Create a better dashboard.' Critique this statement. Rewrite it into multiple high-quality user stories using the standard format. Develop acceptance criteria for each rewritten story.",
        instructions: [
          "Critique: 'Create a better dashboard' is vague, not user-focused, not testable, and doesn't specify who benefits.",
          "Rewrite into 5+ specific user stories (e.g., 'As a project manager, I want to see task completion rates so that I can track team progress.').",
          "For each rewritten story, define 3-5 acceptance criteria.",
          "Explain how the improved stories will lead to better design and development outcomes.",
        ],
        hint: "Break 'dashboard' into its component features: each chart, filter, or notification is a potential user story.",
      },
      {
        title: "Ride-Hailing Product Backlog",
        description:
          "Create a Product Backlog for a ride-hailing application using user stories. Include at least 25 user stories, priority level (High, Medium, Low), business value, acceptance criteria, and dependencies.",
        instructions: [
          "Cover all major feature areas: user onboarding, booking, payment, driver communication, safety, ratings, history, support.",
          "For each story: define priority based on user value and business impact.",
          "Define business value: how does this story contribute to business goals?",
          "Write acceptance criteria (3-5 per story).",
          "Identify dependencies between stories (e.g., payment stories depend on user account stories).",
          "Explain your prioritization framework (e.g., MoSCoW or Impact vs Effort).",
        ],
        hint: "Prioritize stories that deliver core value first (booking a ride) before delight features (ride history).",
      },
      {
        title: "User Story Writing Guide",
        description:
          "Design a User Story Writing Guide for a UX team. Include standard format, writing principles, common mistakes, examples, acceptance criteria guidelines, INVEST principles, and review checklist.",
        instructions: [
          "Standard format: 'As a [user], I want [goal], so that [benefit].' Explain each component.",
          "Writing principles: user-centered, specific, testable, independent, negotiable, valuable, estimable, small.",
          "Common mistakes: too vague, solution-focused, too large, missing acceptance criteria, no user value.",
          "Examples: include 5 good and 5 bad user stories with explanations.",
          "Acceptance criteria: use Given/When/Then format, define edge cases, include error states.",
          "INVEST principles: Independent, Negotiable, Valuable, Estimable, Small, Testable.",
          "Review checklist: ___ follows format, ___ user is identified, ___ goal is clear, ___ benefit is stated, ___ criteria are testable.",
          "Explain how the guide improves collaboration and product quality.",
        ],
        hint: "The best user stories spark conversation, not replace it. If a story is too detailed, it may stifle collaboration.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 3 (Set 6): Understand and Build Empathy Map
  // ════════════════════════════════════════════
  "empathy-map": {
    questions: [
      {
        question: "What is an empathy map in UX Design?",
        options: [
          "A software architecture diagram",
          "A visual tool used to organize what users say, think, do, and feel",
          "A project timeline",
          "A financial planning document",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the primary purpose of an empathy map?",
        options: [
          "To estimate project costs",
          "To better understand users and support user-centered design",
          "To replace usability testing",
          "To develop wireframes",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is a standard section of an empathy map?",
        options: ["Says", "Thinks", "Does", "All of the above"],
        correctIndex: 3,
      },
      {
        question: 'What information belongs in the "Says" section of an empathy map?',
        options: [
          "Direct quotes or statements from users",
          "Developer notes",
          "Technical specifications",
          "Marketing objectives",
        ],
        correctIndex: 0,
      },
      {
        question: 'The "Thinks" section captures:',
        options: [
          "Hidden thoughts, beliefs, concerns, and motivations inferred from research",
          "User demographics",
          "Product features",
          "Business requirements",
        ],
        correctIndex: 0,
      },
      {
        question: "Which section records users' observable actions?",
        options: ["Says", "Thinks", "Does", "Goals"],
        correctIndex: 2,
      },
      {
        question: 'The "Feels" section represents:',
        options: [
          "Users' emotions and emotional reactions",
          "Company values",
          "Design patterns",
          "Revenue projections",
        ],
        correctIndex: 0,
      },
      {
        question: "What should empathy maps be based on?",
        options: [
          "Research evidence",
          "Personal opinions",
          "Competitor websites",
          "Marketing campaigns",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX activity often precedes creating an empathy map?",
        options: [
          "User interviews",
          "Product launch",
          "Coding",
          "Graphic design",
        ],
        correctIndex: 0,
      },
      {
        question: "Empathy maps help UX teams identify:",
        options: [
          "User needs and pain points",
          "Software bugs",
          "Budget forecasts",
          "Employee salaries",
        ],
        correctIndex: 0,
      },
      {
        question: 'Which statement belongs in the "Says" section?',
        options: [
          '"I wish paying my bills were faster."',
          "User seems anxious about making mistakes.",
          "User hesitates before clicking 'Pay.'",
          "User values convenience.",
        ],
        correctIndex: 0,
      },
      {
        question: 'Which statement belongs in the "Does" section?',
        options: [
          "Clicks the Help button before completing payment.",
          "Thinks online payments are unsafe.",
          'Says, "I\'m worried about security."',
          "Wants to save time.",
        ],
        correctIndex: 0,
      },
      {
        question: 'Which statement belongs in the "Feels" section?',
        options: [
          "Frustrated by repeated login failures.",
          "Uses the mobile app every morning.",
          'Says, "I don\'t trust this website."',
          "Opens the settings menu.",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should empathy maps be reviewed with the entire design team?",
        options: [
          "To develop a shared understanding of users",
          "To replace design meetings",
          "To assign programming tasks",
          "To prepare financial reports",
        ],
        correctIndex: 0,
      },
      {
        question: "An empathy map is most effective when it focuses on:",
        options: [
          "One specific persona or user segment",
          "Every possible user simultaneously",
          "Competitors",
          "Business stakeholders only",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity commonly follows creating an empathy map?",
        options: [
          "Defining user needs and opportunities for design",
          "Launching the product immediately",
          "Hiring developers",
          "Conducting marketing campaigns",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best describes empathy mapping?",
        options: [
          "It transforms research findings into meaningful user insights.",
          "It replaces user interviews.",
          "It focuses only on visual design.",
          "It measures business profitability.",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the greatest risk of creating an empathy map without research?",
        options: [
          "Producing inaccurate assumptions about users",
          "Improving usability",
          "Increasing customer satisfaction",
          "Shortening development time",
        ],
        correctIndex: 0,
      },
      {
        question: 'Empathy maps primarily help UX Designers answer which question?',
        options: [
          '"What is the user really experiencing?"',
          '"Which programming language should be used?"',
          '"How much will development cost?"',
          '"How many developers are required?"',
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of an empathy map is to:",
        options: [
          "Build a deeper understanding of users that leads to better design decisions",
          "Replace personas",
          "Replace usability testing",
          "Reduce project documentation",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Hospital Appointment Empathy Maps for Multiple Personas",
        description:
          "A hospital wants to redesign its online appointment booking system. Conduct user research with patients and create complete empathy maps for a first-time patient, a returning patient, and an elderly patient.",
        instructions: [
          "First-time patient: capture anxiety about the unknown, confusion about terminology, need for guidance.",
          "Returning patient: capture familiarity with process, expectations based on past experience, desire for efficiency.",
          "Elderly patient: capture potential tech anxiety, need for clear instructions, accessibility requirements.",
          "For each empathy map, include Says, Thinks, Does, Feels, pain points, and opportunities.",
          "Explain how each empathy map would influence specific redesign decisions.",
        ],
        hint: "Compare the three maps side by side — differences between them reveal where the interface needs to adapt per user type.",
      },
      {
        title: "App Usage Empathy Map with Research",
        description:
          "Choose a popular mobile application (e.g., WhatsApp, Uber, Spotify, Netflix, or a banking app). Observe or interview users and create a research-based empathy map. Identify top five pain points, top five unmet needs, and five design opportunities.",
        instructions: [
          "Observe 2-3 users interacting with the app, or interview them about their experience.",
          "Create an empathy map with Says, Thinks, Does, and Feels populated from research.",
          "Identify 5 pain points with supporting evidence from the empathy map.",
          "Identify 5 unmet needs that the current product doesn't address.",
          "Propose 5 design opportunities with sketches or descriptions of potential solutions.",
        ],
        hint: "The richest empathy maps come from combining observation (what users do) with interviews (what they say and think).",
      },
      {
        title: "Affinity Diagram to Empathy Map",
        description:
          "Your UX team has completed interviews for an e-commerce website. Create an affinity diagram from the interview findings and use it to develop an empathy map. Explain how organizing research data before empathy mapping improves the quality of design decisions.",
        instructions: [
          "Review interview transcripts and extract key observations, quotes, and behaviors.",
          "Group similar findings into themes using affinity diagram techniques.",
          "Use the themes to populate a team empathy map with evidence from research.",
          "Identify which themes appear most frequently and carry the most emotional weight.",
          "Explain how the structured approach (affinity mapping first) leads to more accurate empathy maps.",
        ],
        hint: "Affinity mapping before empathy mapping prevents confirmation bias — you see patterns in the data before interpreting them.",
      },
      {
        title: "Cross-Persona Empathy Map Comparison",
        description:
          "Compare empathy maps for two different personas using the same product (e.g., an experienced online shopper and a first-time online shopper). Analyze differences in thoughts, feelings, behaviors, goals, and frustrations. Explain how these differences should influence the user interface.",
        instructions: [
          "Create empathy maps for two personas: experienced shopper and first-time shopper.",
          "Compare Says, Thinks, Does, and Feels across both personas.",
          "Identify key differences: expert values efficiency, novice needs guidance; expert trusts the process, novice is anxious.",
          "Explain how the interface should adapt: progressive disclosure for experts, tooltips and confirmation for novices.",
        ],
        hint: "A good design serves both personas — not by averaging their needs, but by adapting to each.",
      },
      {
        title: "Empathy Mapping Workshop Guide",
        description:
          "Develop a reusable Empathy Mapping Workshop Guide for a UX team. Include workshop objectives, required materials, participants, step-by-step facilitation process, rules for organizing research evidence, affinity mapping process, prioritization techniques, expected deliverables, and common mistakes to avoid.",
        instructions: [
          "Workshop objectives: synthesize user research into shared understanding, identify user needs and pain points.",
          "Materials: whiteboard or digital board (Miro/Figma), sticky notes, markers, research findings printouts.",
          "Participants: UX designers, researchers, product managers, developers (4-8 people ideal).",
          "Process: review research → individual note-taking → share and cluster → populate empathy map → identify insights.",
          "Rules: base everything on research evidence, no opinions without data, one insight per sticky note.",
          "Prioritization: use dot voting to identify top insights from the empathy map.",
          "Deliverables: completed empathy map, prioritized insights list, design opportunities.",
          "Mistakes to avoid: filling sections based on assumptions, creating maps for all users at once, skipping the research review.",
        ],
        hint: "The workshop's value is not the map itself but the shared understanding the team builds while creating it together.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 1 (Set 7): Identify User Pain Points and Create a Solution
  // ════════════════════════════════════════════
  "pain-points": {
    questions: [
      {
        question: "What is a user pain point?",
        options: [
          "A software bug found by developers",
          "A problem, frustration, or obstacle that prevents users from achieving their goals",
          "A business objective",
          "A marketing campaign",
        ],
        correctIndex: 1,
      },
      {
        question: "Why is identifying user pain points important in UX Design?",
        options: [
          "It helps designers create solutions that address real user problems.",
          "It increases project costs.",
          "It replaces user research.",
          "It reduces stakeholder involvement.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX activity is most effective for identifying user pain points?",
        options: [
          "User interviews",
          "Guessing user preferences",
          "Reviewing company profits",
          "Reading programming documentation",
        ],
        correctIndex: 0,
      },
      {
        question: '"I always get confused during checkout." This statement indicates a:',
        options: [
          "User pain point",
          "Technical requirement",
          "Business goal",
          "Marketing strategy",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an example of a usability pain point?",
        options: [
          "Long and confusing registration process",
          "High internet speed",
          "Attractive branding",
          "Strong customer loyalty",
        ],
        correctIndex: 0,
      },
      {
        question: "What should designers do after identifying a user pain point?",
        options: [
          "Validate it and explore possible solutions",
          "Ignore it",
          "Launch the product immediately",
          "Replace the research participants",
        ],
        correctIndex: 0,
      },
      {
        question: "Which technique helps organize multiple pain points into meaningful categories?",
        options: [
          "Affinity mapping",
          "Wireframing",
          "Storyboarding",
          "Card sorting",
        ],
        correctIndex: 0,
      },
      {
        question: "A solution should primarily address:",
        options: [
          "The underlying cause of the pain point",
          "The designer's personal preferences",
          "Competitor features only",
          "Marketing objectives alone",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best reflects a user-centered solution?",
        options: [
          "Simplify the checkout flow based on research findings.",
          "Add more features without testing.",
          "Increase the number of form fields.",
          "Redesign based on assumptions.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which research artifact often helps identify recurring pain points?",
        options: [
          "Interview notes",
          "Company budget",
          "Payroll records",
          "Source code",
        ],
        correctIndex: 0,
      },
      {
        question: "A user repeatedly abandons a form because it asks for unnecessary information. This pain point relates to:",
        options: ["Efficiency", "Branding", "Marketing", "Typography"],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an emotional pain point?",
        options: [
          "Feeling anxious before making an online payment",
          "Slow internet connection",
          "Small font size",
          "Low device battery",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should solutions be tested before implementation?",
        options: [
          "To validate that they effectively solve the identified problem",
          "To reduce documentation",
          "To eliminate research",
          "To replace development",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the relationship between user pain points and opportunities?",
        options: [
          "Pain points reveal opportunities for innovation and improvement.",
          "They are unrelated.",
          "Opportunities replace pain points.",
          "Pain points should be ignored.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity is most appropriate after proposing a design solution?",
        options: [
          "Conduct usability testing",
          "Delete research findings",
          "Launch without validation",
          "Recruit developers",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an accessibility-related pain point?",
        options: [
          "Buttons that cannot be used with a screen reader",
          "Fast loading times",
          "Responsive layouts",
          "Simple navigation",
        ],
        correctIndex: 0,
      },
      {
        question: "What should UX teams prioritize when multiple pain points are identified?",
        options: [
          "Issues with the greatest impact on users and business goals",
          "The easiest issues only",
          "Stakeholder preferences only",
          "Cosmetic improvements only",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement demonstrates evidence-based design?",
        options: [
          "Users struggled to locate the search function, so navigation was redesigned and tested.",
          "Designers preferred a new layout.",
          "A competitor changed its homepage.",
          "Marketing requested additional banners.",
        ],
        correctIndex: 0,
      },
      {
        question: "A solution that removes unnecessary registration steps primarily improves:",
        options: [
          "User efficiency",
          "Product pricing",
          "Employee productivity",
          "Marketing reach",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate goal of identifying user pain points is to:",
        options: [
          "Design meaningful solutions that improve the user experience",
          "Increase documentation",
          "Replace business goals",
          "Eliminate usability testing",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Food Delivery Checkout Pain Point Analysis",
        description:
          "A food delivery application has received thousands of complaints about its checkout experience. Conduct a UX analysis to identify at least ten user pain points, categorize them (usability, accessibility, technical, emotional, business), prioritize using an Impact vs. Effort matrix, recommend evidence-based solutions, and define success metrics.",
        instructions: [
          "Review complaints and identify 10+ specific pain points in the checkout flow.",
          "Categorize each: usability (confusing steps), accessibility (small buttons), technical (slow loading), emotional (anxiety about payment), business (hidden fees).",
          "Create an Impact vs. Effort matrix: High Impact/Low Effort = quick wins, High Impact/High Effort = strategic projects.",
          "Recommend solutions for each pain point with supporting evidence.",
          "Define success metrics: completion rate, time to checkout, support tickets, satisfaction score.",
        ],
        hint: "Not all pain points are equal. Focus on quick wins first (high impact, low effort) to build momentum.",
      },
      {
        title: "Product Pain Point Interview Study",
        description:
          "Choose any digital product and conduct user interviews with at least five users. Identify recurring pain points and organize them using an affinity diagram. For each pain point, identify the root cause, recommend one UX solution, and explain how you would validate the improvement.",
        instructions: [
          "Recruit 5+ users of a digital product and conduct 20-30 minute semi-structured interviews.",
          "Transcribe and extract all mentioned pain points onto sticky notes.",
          "Group similar pain points into themes using affinity diagramming.",
          "For each theme, identify the root cause (not just the symptom).",
          "Propose one UX solution per theme with rationale.",
          "Explain how you would validate each solution (usability testing, A/B testing, prototype testing).",
        ],
        hint: "Ask 'why' five times to go from symptom to root cause. 'Users abandon checkout' → 'Why?' → 'Fees are unexpected' → 'Why?' → 'Fees shown after entering card' → etc.",
      },
      {
        title: "Government Portal Task Completion Improvement",
        description:
          "A government service portal has a task completion rate of only 42%. Develop a UX improvement plan by identifying likely pain points, mapping them to stages of the user journey, prioritizing improvements, designing low-fidelity solution concepts, and defining KPIs for measuring success.",
        instructions: [
          "Identify likely pain points: complex language, unclear steps, poor error messages, long forms, accessibility barriers.",
          "Map each pain point to a specific stage of the user journey (awareness → initiation → completion → confirmation).",
          "Prioritize using a matrix of user impact and implementation feasibility.",
          "Sketch low-fidelity concepts for the top 3 improvements.",
          "Define KPIs: completion rate, time on task, error rate, support calls, user satisfaction.",
        ],
        hint: "A 42% completion rate means over half of users fail. Start by understanding where in the journey they drop off.",
      },
      {
        title: "Novice vs Expert Pain Point Comparison",
        description:
          "Compare pain points experienced by novice users and expert users of the same application. Analyze differences in goals, behaviors, expectations, frustrations, and accessibility needs. Explain how the interface should adapt to serve both groups effectively.",
        instructions: [
          "Select an app used by both novices and experts (e.g., a photo editor, project management tool, or IDE).",
          "Interview or observe 3 novice users and 3 expert users.",
          "Compare pain points: novices struggle with discoverability and complexity; experts struggle with efficiency and advanced features.",
          "Analyze goals: novices want to complete one task; experts want to complete many tasks quickly.",
          "Propose adaptive interface patterns: contextual help for novices, shortcuts for experts, progressive disclosure.",
        ],
        hint: "The best designs serve both groups without compromising either — e.g., simple default view with advanced settings available but not required.",
      },
      {
        title: "User Pain Point Analysis Framework",
        description:
          "Develop a User Pain Point Analysis Framework for a UX team. Include research methods, data collection techniques, affinity mapping process, prioritization model, root cause analysis, solution ideation, validation strategy, and reporting template.",
        instructions: [
          "Research methods: interviews, surveys, analytics review, support ticket analysis, usability testing.",
          "Data collection: session recordings, clickstream data, heatmaps, customer feedback, observation notes.",
          "Affinity mapping: extract findings → group into themes → name categories → identify patterns.",
          "Prioritization: Impact vs. Effort matrix, user frequency × severity scoring.",
          "Root cause analysis: 5 Whys technique, fishbone diagram, user journey mapping.",
          "Solution ideation: brainstorming, Crazy Eights, SCAMPER, design studio method.",
          "Validation: prototype testing, A/B testing, guerrilla testing, survey of proposed solution.",
          "Reporting: executive summary, pain point inventory, prioritized recommendations, success metrics.",
          "Explain how each stage contributes to evidence-based UX design.",
        ],
        hint: "A framework ensures consistency across projects. Teams spend less time figuring out the process and more time solving problems.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 2 (Set 7): Understand and Build a User Journey Map
  // ════════════════════════════════════════════
  "journey-map": {
    questions: [
      {
        question: "What is a user journey map?",
        options: [
          "A software architecture diagram",
          "A visual representation of the steps a user takes to accomplish a goal while interacting with a product or service",
          "A financial report",
          "A marketing campaign",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the primary purpose of a user journey map?",
        options: [
          "To identify opportunities for improving the user experience across every stage of interaction",
          "To estimate project costs",
          "To create wireframes",
          "To replace user personas",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is typically the first step in creating a user journey map?",
        options: [
          "Identify the target user or persona",
          "Launch the product",
          "Create a prototype",
          "Develop the final interface",
        ],
        correctIndex: 0,
      },
      {
        question: "Which journey map component describes what the user is trying to achieve?",
        options: [
          "User goals",
          "Revenue model",
          "Marketing strategy",
          "Technical architecture",
        ],
        correctIndex: 0,
      },
      {
        question: "What does a touchpoint represent in a user journey map?",
        options: [
          "Any point where the user interacts with the product, service, or organization",
          "A software bug",
          "A programming language",
          "A business budget",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should user emotions be included in a journey map?",
        options: [
          "They reveal how users feel at different stages of the experience",
          "They replace usability testing",
          "They improve company branding",
          "They reduce research costs",
        ],
        correctIndex: 0,
      },
      {
        question: "Which research method commonly provides information for journey maps?",
        options: [
          "User interviews",
          "Payroll analysis",
          "Financial auditing",
          "Marketing surveys unrelated to UX",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a pain point in a journey map?",
        options: [
          "A moment where the user experiences difficulty, frustration, or confusion",
          "A software license",
          "A stakeholder meeting",
          "A technical specification",
        ],
        correctIndex: 0,
      },
      {
        question: 'Which stage is most likely to occur before "Purchase" in an e-commerce journey?',
        options: [
          "Product discovery",
          "Account deletion",
          "Maintenance",
          "Feedback analysis",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is it useful to identify opportunities in a journey map?",
        options: [
          "They highlight where the experience can be improved",
          "They replace user interviews",
          "They increase project costs",
          "They reduce documentation",
        ],
        correctIndex: 0,
      },
      {
        question: "Which journey map element shows the order of user interactions?",
        options: [
          "Stages of the journey",
          "Product roadmap",
          "Business objectives",
          "Technical requirements",
        ],
        correctIndex: 0,
      },
      {
        question: "A user repeatedly searches for the Help page during checkout. This observation most likely indicates:",
        options: [
          "A usability issue",
          "Excellent navigation",
          "Increased productivity",
          "Successful onboarding",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should journey maps be based on research?",
        options: [
          "To accurately reflect real user experiences",
          "To reduce stakeholder involvement",
          "To replace personas",
          "To speed up coding",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an example of a user touchpoint?",
        options: [
          "Receiving an order confirmation email",
          "Updating the company budget",
          "Attending a board meeting",
          "Deploying software",
        ],
        correctIndex: 0,
      },
      {
        question: "A user journey map focuses primarily on:",
        options: [
          "The complete user experience from beginning to end",
          "Only the application's homepage",
          "Technical documentation",
          "Business profits",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX artifact is commonly used alongside a user journey map?",
        options: [
          "Persona",
          "Server architecture diagram",
          "Payroll report",
          "Marketing budget",
        ],
        correctIndex: 0,
      },
      {
        question: "What should happen after identifying pain points on a journey map?",
        options: [
          "Brainstorm and prioritize design improvements",
          "Ignore them",
          "Launch immediately",
          "Recruit developers",
        ],
        correctIndex: 0,
      },
      {
        question: "A journey map shows that users abandon registration after identity verification. What does this suggest?",
        options: [
          "There may be friction during the verification stage",
          "Users dislike the product logo",
          "Marketing is ineffective",
          "The database is too large",
        ],
        correctIndex: 0,
      },
      {
        question: "Who benefits from using user journey maps?",
        options: [
          "Designers, developers, product managers, and stakeholders",
          "Developers only",
          "Marketing teams only",
          "Customers only",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of a user journey map is to:",
        options: [
          "Understand and improve the end-to-end user experience",
          "Replace usability testing",
          "Eliminate user research",
          "Increase documentation",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Patient Appointment Journey Map",
        description:
          "A healthcare provider wants to redesign its patient appointment booking service. Create a complete user journey map for a first-time patient including journey stages, user goals, actions, touchpoints, thoughts, emotions, pain points, opportunities, and success metrics.",
        instructions: [
          "Stages: awareness (finding the service), scheduling (booking appointment), preparation (pre-visit info), visit (appointment experience), follow-up (post-visit care).",
          "For each stage, document: user goals, specific actions, touchpoints (website, phone, email, in-person), thoughts, emotions (anxiety, relief, frustration), and pain points.",
          "Identify opportunities for improvement at each stage.",
          "Define success metrics: booking completion rate, no-show rate, patient satisfaction, time to appointment.",
          "Explain how the journey map informs specific design improvements.",
        ],
        hint: "The patient journey often extends beyond the digital interface — include phone calls, paperwork, and in-person interactions as touchpoints.",
      },
      {
        title: "Mobile Banking End-to-End Journey Map",
        description:
          "Select a mobile banking application. Develop an end-to-end journey map covering account creation, login, money transfer, bill payment, transaction confirmation, and customer support. Identify user emotions, pain points, and UX opportunities at each stage.",
        instructions: [
          "Create journey stages: account creation → login → money transfer → bill payment → confirmation → support.",
          "For each stage, note: user goal, actions taken, digital touchpoints, emotional state, and friction points.",
          "Identify at least 3 pain points per stage.",
          "Propose UX improvements for each pain point.",
          "Highlight moments of delight that could be enhanced.",
        ],
        hint: "Banking journeys involve high stakes — even small friction points (e.g., unclear error messages) can cause significant anxiety and drop-off.",
      },
      {
        title: "E-Commerce Checkout Journey Map",
        description:
          "An e-commerce company experiences a 60% cart abandonment rate. Create a journey map of the checkout process identifying at least 10 touchpoints, 10 user actions, 10 pain points, and 10 design recommendations. Prioritize improvements based on user impact and business value.",
        instructions: [
          "Map the complete checkout journey: cart review → login/guest → shipping → payment → review → confirm → confirmation email.",
          "For each micro-step, document touchpoints, actions, and potential pain points.",
          "Identify 10+ specific pain points with evidence from user research.",
          "Propose 10+ design recommendations with expected impact.",
          "Prioritize using an Impact vs. Effort or Value vs. Complexity matrix.",
        ],
        hint: "Each additional step in checkout reduces conversion. Look for opportunities to remove, combine, or defer steps.",
      },
      {
        title: "Cross-Persona Journey Comparison",
        description:
          "Compare the user journeys of two personas using the same digital product: a first-time user and a returning experienced user. Analyze differences in goals, behaviors, expectations, emotional states, decision-making, and pain points. Explain how the interface should adapt to each journey.",
        instructions: [
          "Create journey maps for both personas using the same product.",
          "Compare: first-time user needs guidance and reassurance; experienced user wants speed and shortcuts.",
          "Analyze differences in emotional journey — first-timer may feel anxiety, expert may feel impatience.",
          "Propose adaptive design patterns: progressive disclosure for novices, power features for experts.",
          "Explain how persona-specific journey maps lead to more targeted design decisions.",
        ],
        hint: "The ideal interface adapts to the user's journey stage — showing more guidance early and more efficiency over time.",
      },
      {
        title: "User Journey Mapping Workshop Design",
        description:
          "Design a reusable User Journey Mapping Workshop for a UX team. Include objectives, participants, required materials, research inputs, journey mapping process, opportunity identification, prioritization techniques, deliverables, and facilitation guidelines.",
        instructions: [
          "Objectives: visualize end-to-end user experience, identify pain points and opportunities, align team on priorities.",
          "Participants: UX designers, researchers, product managers, developers, stakeholders (6-10 people).",
          "Materials: large wall or whiteboard, sticky notes (different colors), markers, research printouts, personas.",
          "Research inputs: personas, empathy maps, interview findings, analytics data, support tickets.",
          "Process: define scope → identify stages → map actions → add emotions → identify pain points → brainstorm opportunities.",
          "Opportunity identification: assign teams to each journey stage, brainstorm improvements, present to group.",
          "Prioritization: dot voting, Impact vs. Effort matrix, or Value vs. Complexity scoring.",
          "Deliverables: completed journey map, prioritized improvement list, design brief for top opportunities.",
          "Facilitation: keep sessions to 2-3 hours, ensure every voice is heard, base everything on research.",
          "Explain how the workshop improves collaboration and product decision-making.",
        ],
        hint: "The map itself is less important than the conversation it sparks. Different stakeholders see different things in the same journey.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 3 (Set 7): Create Problem Statements
  // ════════════════════════════════════════════
  "problem-statements": {
    questions: [
      {
        question: "What is a problem statement in UX Design?",
        options: [
          "A description of a solution",
          "A clear definition of the user's problem based on research",
          "A list of product features",
          "A marketing strategy",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the primary purpose of a problem statement?",
        options: [
          "To define the user problem that the design should solve",
          "To describe the final interface",
          "To estimate development costs",
          "To recruit participants",
        ],
        correctIndex: 0,
      },
      {
        question: "A good problem statement should be based on:",
        options: [
          "Assumptions",
          "Stakeholder opinions",
          "User research and evidence",
          "Competitor features",
        ],
        correctIndex: 2,
      },
      {
        question: "Which of the following is a characteristic of a strong problem statement?",
        options: [
          "Clear and specific",
          "Solution-focused",
          "Vague and broad",
          "Based on personal opinions",
        ],
        correctIndex: 0,
      },
      {
        question: "A problem statement should focus primarily on:",
        options: [
          "User needs",
          "Technical implementation",
          "Marketing campaigns",
          "Company hierarchy",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX activity usually comes before writing a problem statement?",
        options: [
          "Conducting user research",
          "Launching the product",
          "Developing source code",
          "Creating advertisements",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement is an example of a UX problem statement?",
        options: [
          "Users struggle to complete online payments because the checkout process is confusing and requires too many steps.",
          "Add a new payment button.",
          "Use a blue color scheme.",
          "Implement biometric login.",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should a problem statement avoid suggesting solutions?",
        options: [
          "To encourage exploration of multiple design possibilities",
          "To reduce creativity",
          "To increase project costs",
          "To speed up coding",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is NOT a problem statement?",
        options: [
          "First-time users cannot easily find the registration page.",
          "Elderly users find the text difficult to read.",
          "Redesign the navigation menu.",
          "Customers abandon checkout due to unexpected fees.",
        ],
        correctIndex: 2,
      },
      {
        question: "Problem statements help UX teams:",
        options: [
          "Stay focused on solving real user problems",
          "Replace usability testing",
          "Ignore stakeholder input",
          "Eliminate research",
        ],
        correctIndex: 0,
      },
      {
        question: "Which research artifact often provides evidence for writing problem statements?",
        options: [
          "Interview findings",
          "Payroll reports",
          "Financial statements",
          "Marketing brochures",
        ],
        correctIndex: 0,
      },
      {
        question: "A problem statement should describe:",
        options: [
          "The gap between the user's goal and current experience",
          "The company's annual revenue",
          "The software architecture",
          "The programming language",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the benefit of writing problem statements before ideation?",
        options: [
          "It ensures brainstorming addresses the correct problem.",
          "It eliminates user research.",
          "It speeds up coding.",
          "It replaces prototypes.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement is written from the user's perspective?",
        options: [
          "Busy professionals cannot quickly schedule appointments because the booking process requires multiple unnecessary steps.",
          "The application should use green buttons.",
          "Developers should rewrite the backend.",
          "Increase server capacity.",
        ],
        correctIndex: 0,
      },
      {
        question: "A well-written problem statement should be:",
        options: [
          "Research-driven and user-centered",
          "Based on assumptions",
          "Focused on technology",
          "Written after development",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best describes the relationship between pain points and problem statements?",
        options: [
          "Pain points provide evidence that shapes problem statements.",
          "They are unrelated.",
          "Problem statements replace pain points.",
          "Pain points are created after problem statements.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which question should a UX Designer ask when evaluating a problem statement?",
        options: [
          "Does this statement accurately reflect a validated user problem?",
          "Which programming language should be used?",
          "How many developers are available?",
          "What is the marketing budget?",
        ],
        correctIndex: 0,
      },
      {
        question: "Problem statements are commonly used before creating:",
        options: [
          "Design solutions and concepts",
          "Payroll systems",
          "Marketing budgets",
          "Technical documentation",
        ],
        correctIndex: 0,
      },
      {
        question: "A problem statement should remain valid until:",
        options: [
          "New research provides evidence that changes the team's understanding of the problem",
          "Development begins",
          "The first prototype is built",
          "Stakeholders request new features",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of a UX problem statement is to:",
        options: [
          "Clearly define the right problem before designing the solution",
          "Replace user research",
          "Eliminate brainstorming",
          "Increase documentation",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Banking Registration Problem Statements",
        description:
          "A mobile banking application has experienced a significant increase in user complaints about account registration. Using interview findings, usability testing results, and customer support data, identify key user pain points, write five research-based problem statements, justify each using UX evidence, and explain how each problem statement will guide design decisions.",
        instructions: [
          "Review available research data (complaints, test findings, support tickets) to identify key pain points.",
          "Write 5 problem statements following the format: '[User group] struggles with [specific problem] because [root cause], which leads to [negative outcome].'",
          "For each statement, cite specific evidence (e.g., '67% of support tickets mention ID verification confusion').",
          "Explain how each problem statement focuses the design team on solving the right problem.",
        ],
        hint: "A strong problem statement should make you think 'aha, that's the real issue!' rather than 'let's add a button.'",
      },
      {
        title: "Learning Platform Research-Based Problem Statements",
        description:
          "Conduct UX research for an online learning platform. Develop three user personas, an empathy map for each persona, a user journey map, and five validated problem statements. Explain how each artifact contributes to the creation of accurate problem statements.",
        instructions: [
          "Create 3 personas (e.g., busy professional student, full-time university student, self-paced learner).",
          "Create empathy maps for each persona based on research.",
          "Create a journey map showing the learning experience end-to-end.",
          "Synthesize findings into 5 problem statements.",
          "Explain how each artifact (persona, empathy map, journey map) contributed to writing accurate problem statements.",
        ],
        hint: "Problem statements are the bridge between research and design. Each artifact provides a different lens on the same user problem.",
      },
      {
        title: "Dashboard Problem Statement Critique",
        description:
          "Review the following statement: 'The application needs a better dashboard.' Critique why this is not an effective UX problem statement. Rewrite it into five user-centered problem statements based on different user groups including first-time users, returning users, mobile users, older adults, and users with disabilities.",
        instructions: [
          "Critique: lacks user perspective, doesn't identify specific problem, suggests solution, not research-based.",
          "First-time users: struggle to understand key metrics because dashboard lacks contextual guidance.",
          "Returning users: cannot quickly find relevant data because dashboard lacks personalization.",
          "Mobile users: cannot interact with charts because dashboard isn't touch-optimized.",
          "Older adults: find text too small to read because dashboard lacks accessibility settings.",
          "Users with disabilities: screen readers cannot navigate dashboard because it lacks proper ARIA labels.",
          "For each, explain the research assumptions that should be validated.",
        ],
        hint: 'Every time you hear "make it better" or "redesign the X," ask "better for whom?" and "what specific problem does this solve?"',
      },
      {
        title: "Digital Identity Portal Problem Analysis",
        description:
          "A government digital identity portal has a completion rate of only 48%. Develop a UX analysis report including user research summary, key findings, affinity diagram, prioritized pain points, five problem statements, risks of solving the wrong problem, and recommendations for future research.",
        instructions: [
          "Summarize existing research: analytics, support data, any available user feedback.",
          "Create an affinity diagram from research findings to identify patterns.",
          "Prioritize pain points using frequency, severity, and business impact.",
          "Write 5 problem statements based on the top pain points.",
          "Discuss risks: what happens if the team solves the wrong problem (wasted resources, no improvement).",
          "Recommend additional research to validate assumptions.",
        ],
        hint: "With a 48% completion rate, half your users are failing. The problem statement must identify why — not just that it happens.",
      },
      {
        title: "Problem Statement Framework Design",
        description:
          "Design a professional Problem Statement Framework for UX teams. Include definition, writing guidelines, required research inputs, validation checklist, common mistakes, examples of weak vs strong problem statements, review criteria, and approval process.",
        instructions: [
          "Definition: a concise, research-driven description of a user problem to solve.",
          "Writing guidelines: user-centered, specific, problem-focused (not solution-focused), evidence-based, actionable.",
          "Research inputs: interview findings, analytics data, usability test results, support ticket analysis.",
          "Validation checklist: ___ based on research, ___ identifies specific users, ___ describes current experience, ___ explains impact, ___ avoids solutions.",
          "Common mistakes: being too vague, including solutions, lacking evidence, focusing on business instead of users.",
          "Examples: weak = 'The app is confusing.' Strong = 'First-time users cannot find the search function because it is hidden behind a hamburger menu, causing 40% to abandon the task.'",
          "Review criteria: is it user-centered? Is it specific? Is it evidence-based? Does it avoid solutions?",
          "Approval process: drafted by researcher → reviewed by team → validated with stakeholders → approved for design.",
          "Explain how the framework helps teams remain user-centered throughout the design process.",
        ],
        hint: "The framework is most valuable when teams use it to challenge each other: 'Is this problem statement based on evidence or assumptions?'",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 1 (Set 8): Create Hypothesis Statements
  // ════════════════════════════════════════════
  "hypothesis-statements": {
    questions: [
      {
        question: "What is a hypothesis statement in UX Design?",
        options: [
          "A confirmed research finding",
          "A testable assumption about how a design change will affect users",
          "A marketing slogan",
          "A software requirement specification",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the primary purpose of a hypothesis statement?",
        options: [
          "To prove a design is correct",
          "To create a testable prediction that can be validated through research",
          "To replace usability testing",
          "To define the product budget",
        ],
        correctIndex: 1,
      },
      {
        question: "A good UX hypothesis should be based on:",
        options: [
          "Personal opinions",
          "User research and evidence",
          "Competitor branding",
          "Developer preferences",
        ],
        correctIndex: 1,
      },
      {
        question: "Which of the following is an example of a UX hypothesis?",
        options: [
          "If we simplify the registration form, first-time users will complete registration faster because fewer fields reduce cognitive load.",
          "Users will like our application.",
          "We should redesign the homepage.",
          "Blue is the best interface color.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which format is commonly used for writing UX hypotheses?",
        options: [
          "If we..., then..., because...",
          "Once..., unless..., therefore...",
          "Problem → Solution → Launch",
          "User → Developer → Tester",
        ],
        correctIndex: 0,
      },
      {
        question: 'Why should a hypothesis include a reason ("because")?',
        options: [
          "To explain the logic behind the expected outcome",
          "To increase document length",
          "To reduce testing time",
          "To replace research",
        ],
        correctIndex: 0,
      },
      {
        question: "A UX hypothesis should be:",
        options: [
          "Testable",
          "Impossible to measure",
          "Based on assumptions only",
          "Written after product launch",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity is typically used to validate a UX hypothesis?",
        options: [
          "Usability testing",
          "Guessing",
          "Financial forecasting",
          "Marketing campaigns",
        ],
        correctIndex: 0,
      },
      {
        question: "Which metric could help validate the hypothesis that simplifying checkout improves usability?",
        options: [
          "Checkout completion rate",
          "Company revenue",
          "Employee attendance",
          "Office expenses",
        ],
        correctIndex: 0,
      },
      {
        question: "What happens if research disproves a hypothesis?",
        options: [
          "The team learns from the findings and refines the design",
          "The research is discarded",
          "The hypothesis becomes a fact",
          "The product launches immediately",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement is NOT a hypothesis?",
        options: [
          "If we add search suggestions, users will find products faster because fewer keystrokes reduce effort.",
          "Users are frustrated during checkout.",
          "If navigation labels are clearer, task completion will improve because users can find information more easily.",
          "If larger buttons are used, users with motor impairments will make fewer errors because the touch targets are easier to select.",
        ],
        correctIndex: 1,
      },
      {
        question: "A UX hypothesis should address:",
        options: [
          "A specific user problem",
          "Every possible design issue",
          "Marketing goals only",
          "Programming standards",
        ],
        correctIndex: 0,
      },
      {
        question: "Which research artifact often informs hypothesis creation?",
        options: [
          "Problem statement",
          "Payroll report",
          "Financial statement",
          "Source code",
        ],
        correctIndex: 0,
      },
      {
        question: "Which outcome makes a hypothesis valuable?",
        options: [
          "It can be measured objectively",
          "It guarantees success",
          "It avoids research",
          "It replaces user feedback",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the relationship between a problem statement and a hypothesis?",
        options: [
          "The hypothesis proposes a testable solution to the problem identified in the problem statement.",
          "They are unrelated.",
          "A hypothesis replaces a problem statement.",
          "A problem statement validates a hypothesis.",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should UX teams avoid writing vague hypotheses?",
        options: [
          "They are difficult to test and measure.",
          "They improve research quality.",
          "They reduce project costs.",
          "They eliminate usability testing.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which hypothesis is strongest?",
        options: [
          "If we reduce the checkout process from five steps to three, completion rates will increase because users will experience less friction.",
          "Our users will probably like the redesign.",
          "We think this homepage looks better.",
          "Users should use dark mode.",
        ],
        correctIndex: 0,
      },
      {
        question: "What should happen after a hypothesis is validated?",
        options: [
          "Consider implementing or iterating the design based on the evidence",
          "Ignore the findings",
          "Delete the research",
          "Skip usability testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Which characteristic is essential for a UX hypothesis?",
        options: [
          "It predicts an observable outcome",
          "It guarantees positive results",
          "It focuses on company profits only",
          "It eliminates uncertainty",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of a UX hypothesis statement is to:",
        options: [
          "Guide evidence-based experimentation and design decisions",
          "Replace research",
          "Eliminate prototyping",
          "Increase documentation",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Ride-Sharing Booking Abandonment Hypotheses",
        description:
          "A ride-sharing company has observed that many users abandon the booking process before confirming a ride. Using available UX research, identify the core problem, develop five evidence-based hypothesis statements, define measurable success metrics for each, and explain how each hypothesis would be tested.",
        instructions: [
          "Core problem: users start booking but don't confirm — investigate why (price shock? wait time? confusion?).",
          "Hypothesis 1: If we show the total price earlier, abandonment will decrease because users won't experience price shock at confirmation.",
          "Hypothesis 2: If we show driver ETA before booking, completion will increase because users will know what to expect.",
          "Hypothesis 3: If we simplify the booking screen, completion rates will improve because users won't feel overwhelmed.",
          "For each hypothesis: define success metrics (completion rate, time to book), and testing method (A/B test, prototype test).",
        ],
        hint: "Each hypothesis should isolate one variable. If you change multiple things at once, you won't know what caused the improvement.",
      },
      {
        title: "E-Commerce Usability Hypotheses",
        description:
          "Choose an e-commerce website and identify three usability issues. For each issue, write a problem statement, develop a corresponding UX hypothesis, define the research method you would use to validate it, and explain the expected outcome if the hypothesis is confirmed.",
        instructions: [
          "Issue 1: unclear shipping costs → problem statement → hypothesis about showing costs earlier → A/B test.",
          "Issue 2: difficult product comparison → problem statement → hypothesis about comparison table → prototype test.",
          "Issue 3: confusing checkout → problem statement → hypothesis about reducing steps → usability test.",
          "For each: problem statement → hypothesis (If/Then/Because format) → research method → success metrics → expected outcome.",
        ],
        hint: "The best hypotheses come from observations. 'Users keep clicking X' → 'If we change X to Y, users will complete Z because...'",
      },
      {
        title: "University Portal Hypothesis Set",
        description:
          "Your team is redesigning a university registration portal. Create ten UX hypotheses related to navigation, accessibility, form completion, mobile responsiveness, search, and notifications. For each, define research evidence, expected user behavior, success metrics, and validation method.",
        instructions: [
          "Navigation (2): hypothesis about menu structure, breadcrumbs, or search placement.",
          "Accessibility (2): hypothesis about font size, contrast, or screen reader compatibility.",
          "Form completion (2): hypothesis about field reduction, auto-fill, or error messages.",
          "Mobile responsiveness (2): hypothesis about layout adaptation or touch targets.",
          "Search and notifications (2): hypothesis about search filters or notification timing.",
          "For each: reference the research evidence that inspired the hypothesis, define expected behavior change, metrics, and validation approach.",
        ],
        hint: "Prioritize hypotheses that address the most critical user pain points. Not all hypotheses need to be tested immediately.",
      },
      {
        title: "Healthcare Hypothesis Testing Plan",
        description:
          "A healthcare application has low appointment completion rates. Develop a hypothesis testing plan including user pain points, problem statements, five hypotheses, research methods, KPIs, risk analysis, and decision criteria.",
        instructions: [
          "Identify pain points: complex booking flow, unclear insurance information, lack of provider details.",
          "Write problem statements for each pain point.",
          "Create 5 hypotheses: e.g., 'If we show insurance acceptance before login, completion rates will increase because users will know if they're eligible upfront.'",
          "Define research methods: A/B testing for UI changes, usability testing for flow changes.",
          "Define KPIs: booking completion rate, time to book, user satisfaction, support call volume.",
          "Risk analysis: what if the hypothesis is wrong? What if it's right but expensive to implement?",
          "Decision criteria: minimum improvement threshold for implementation (e.g., 10% increase in completion rate).",
        ],
        hint: "Set a minimum bar for success before testing. This prevents implementing changes that are 'statistically significant' but practically meaningless.",
      },
      {
        title: "UX Hypothesis Statement Framework",
        description:
          "Design a UX Hypothesis Statement Framework for a product team. Include standard writing format, required research inputs, validation checklist, success metrics, examples of weak vs strong hypotheses, common mistakes, testing workflow, and documentation template.",
        instructions: [
          "Format: 'If we [design change], then [expected outcome], because [reason].'",
          "Research inputs: problem statements, user research findings, analytics data, usability test results.",
          "Validation checklist: ___ specific, ___ testable, ___ measurable, ___ evidence-based, ___ includes rationale.",
          "Success metrics: completion rate, time on task, error rate, satisfaction score, retention, conversion.",
          "Weak example: 'Users will like the new design.' Strong example: 'If we reduce form fields from 10 to 5, registration completion will increase by 20% because users experience less friction.'",
          "Common mistakes: vague predictions, no rationale, untestable outcomes, solution-focused.",
          "Testing workflow: write hypothesis → define metrics → design test → run test → analyze → decide (implement, iterate, or discard).",
          "Documentation: hypothesis ID, date, author, research evidence, expected outcome, metrics, test results, decision.",
        ],
        hint: "A hypothesis that can't be tested isn't a hypothesis — it's an opinion. Make every hypothesis falsifiable.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 2 (Set 8): Create Goal Statements
  // ════════════════════════════════════════════
  "goal-statements": {
    questions: [
      {
        question: "What is a goal statement in UX Design?",
        options: [
          "A description of the application's interface",
          "A clear statement describing the desired outcome for users and the business",
          "A programming guideline",
          "A list of technical requirements",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the primary purpose of a goal statement?",
        options: [
          "To define what success looks like for a design project",
          "To replace usability testing",
          "To create user personas",
          "To develop source code",
        ],
        correctIndex: 0,
      },
      {
        question: "A good UX goal statement should be:",
        options: [
          "Specific and measurable",
          "Broad and ambiguous",
          "Based only on assumptions",
          "Written after product launch",
        ],
        correctIndex: 0,
      },
      {
        question: "Which framework is commonly used to create effective goal statements?",
        options: [
          "SMART Goals",
          "SWOT Analysis",
          "MoSCoW Prioritization",
          "Kano Model",
        ],
        correctIndex: 0,
      },
      {
        question: 'In the SMART framework, the letter "M" stands for:',
        options: ["Manageable", "Meaningful", "Measurable", "Modern"],
        correctIndex: 2,
      },
      {
        question: "Which statement is an example of a UX goal statement?",
        options: [
          "Increase first-time checkout completion from 60% to 85% within three months by simplifying the checkout process.",
          "Improve the application.",
          "Create a better homepage.",
          "Redesign the navigation.",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should UX goals align with business objectives?",
        options: [
          "To ensure design efforts support organizational success while meeting user needs",
          "To replace user research",
          "To reduce usability testing",
          "To eliminate stakeholder collaboration",
        ],
        correctIndex: 0,
      },
      {
        question: "Which metric would best measure the success of a redesigned onboarding experience?",
        options: [
          "User onboarding completion rate",
          "Office attendance",
          "Employee salaries",
          "Marketing budget",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is NOT a good UX goal?",
        options: [
          "Reduce task completion time by 30%.",
          "Increase accessibility compliance to WCAG standards.",
          "Make users happier somehow.",
          "Improve customer satisfaction scores by 20%.",
        ],
        correctIndex: 2,
      },
      {
        question: "Goal statements should primarily focus on:",
        options: [
          "Desired outcomes",
          "Programming languages",
          "Company hierarchy",
          "Technical architecture",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX activity usually comes before creating goal statements?",
        options: [
          "Identifying user problems through research",
          "Product launch",
          "Marketing campaigns",
          "Source code review",
        ],
        correctIndex: 0,
      },
      {
        question: "Who benefits from well-written goal statements?",
        options: [
          "Designers, developers, stakeholders, and product managers",
          "Developers only",
          "Marketing teams only",
          "Customers only",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement demonstrates a measurable UX goal?",
        options: [
          "Reduce support requests related to password resets by 40% within six months.",
          "Improve customer experience.",
          "Make the interface attractive.",
          "Build a dashboard.",
        ],
        correctIndex: 0,
      },
      {
        question: "A UX goal should be realistic because:",
        options: [
          "Unrealistic goals are difficult or impossible to achieve",
          "Realistic goals reduce innovation",
          "They eliminate research",
          "They replace prototypes",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is a user-centered goal?",
        options: [
          "Enable elderly users to complete online appointment booking without assistance.",
          "Increase the number of meetings.",
          "Reduce office expenses.",
          "Hire additional developers.",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should goal statements include a timeframe?",
        options: [
          "To define when success should be achieved and evaluated",
          "To increase documentation",
          "To replace testing",
          "To improve branding",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the relationship between problem statements and goal statements?",
        options: [
          "Goal statements describe the desired outcome after solving the identified problem.",
          "They are unrelated.",
          "Goal statements replace problem statements.",
          "Problem statements measure success.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best reflects a business and user goal together?",
        options: [
          "Increase online loan applications by 20% while reducing application completion time for users.",
          "Increase profits only.",
          "Launch more products.",
          "Improve branding.",
        ],
        correctIndex: 0,
      },
      {
        question: "A project should evaluate goal statements by:",
        options: [
          "Measuring outcomes against predefined success metrics",
          "Personal opinions",
          "Stakeholder assumptions only",
          "Developer preferences",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of a UX goal statement is to:",
        options: [
          "Provide a clear and measurable target for improving the user experience",
          "Replace user research",
          "Eliminate prototyping",
          "Increase documentation",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Fintech SMART UX Goals",
        description:
          "A fintech startup wants to improve its mobile banking application. Develop five SMART UX goal statements related to user onboarding, money transfers, accessibility, security perception, and customer support. For each goal, define success metrics, timeframe, research methods, and business impact.",
        instructions: [
          "Onboarding: 'Increase onboarding completion from 55% to 80% within 2 months by reducing steps and clarifying instructions.'",
          "Money transfers: 'Reduce transfer time from 4 minutes to 90 seconds within 3 months by redesigning the transfer flow.'",
          "Accessibility: 'Achieve WCAG 2.1 AA compliance within 6 months to serve users with disabilities.'",
          "Security perception: 'Improve security trust score from 3.2 to 4.5 within 4 months by adding visible security indicators.'",
          "Customer support: 'Reduce support tickets related to common tasks by 50% within 3 months through UX improvements.'",
          "For each: define metrics (completion rate, time, compliance score, survey score, ticket volume), timeframe, and how research will validate progress.",
        ],
        hint: "SMART = Specific, Measurable, Achievable, Relevant, Time-bound. Each goal must satisfy all five criteria.",
      },
      {
        title: "E-Commerce UX Goals from Research",
        description:
          "Choose an e-commerce platform and conduct a UX evaluation. Based on your findings, write five problem statements, create five corresponding UX goal statements, explain how each goal supports both user needs and business objectives, and define measurable KPIs.",
        instructions: [
          "Evaluate the platform: identify 5 usability issues through heuristic evaluation or user testing.",
          "Write 5 problem statements based on findings.",
          "Create 5 SMART goal statements that address each problem.",
          "For each goal, explain how it benefits users (e.g., faster checkout) and the business (e.g., higher conversion).",
          "Define KPIs: conversion rate, average order value, customer satisfaction, support volume, retention.",
        ],
        hint: "The best goals sit at the intersection of user needs and business objectives. A goal that only serves one side is incomplete.",
      },
      {
        title: "Student Portal UX Strategy",
        description:
          "A university wants to redesign its student portal. Develop a UX strategy document containing research summary, user pain points, problem statements, goal statements, success metrics, risks, and evaluation plan.",
        instructions: [
          "Research summary: current pain points from student surveys, analytics, and support data.",
          "Pain points: 5-8 specific issues students face with the current portal.",
          "Problem statements: convert pain points into clear problem statements.",
          "Goal statements: 5 SMART goals addressing the top problems.",
          "Success metrics: task completion rate, time on task, satisfaction score, support tickets.",
          "Risks: integration with legacy systems, stakeholder alignment, student adoption concerns.",
          "Evaluation plan: pre/post launch surveys, usability testing, analytics comparison.",
        ],
        hint: "A strategy document isn't just a list of goals — it tells the story of how you'll move from current state to desired state.",
      },
      {
        title: "Goal Statement Critique and Rewrite",
        description:
          "Review the following goal statement: 'Make the application easier to use.' Critique why this goal is ineffective. Rewrite it into five SMART UX goal statements for different user groups including first-time users, returning users, mobile users, users with disabilities, and older adults.",
        instructions: [
          "Critique: 'Easier to use' is vague, not measurable, no timeframe, no specific user group, no baseline.",
          "First-time users: 'Reduce time to complete first task from 5 minutes to 2 minutes within 1 month.'",
          "Returning users: 'Increase weekly active usage from 3 to 5 sessions within 2 months.'",
          "Mobile users: 'Achieve 90% task completion rate on mobile within 3 months.'",
          "Users with disabilities: 'Achieve WCAG 2.1 AA compliance within 6 months.'",
          "Older adults: 'Increase satisfaction score among 65+ users from 3.0 to 4.5 within 4 months.'",
          "Justify each rewritten goal with reference to the specific user group's needs.",
        ],
        hint: "Whenever someone says 'make it better,' ask 'better for whom, by how much, and by when?'",
      },
      {
        title: "UX Goal Statement Framework",
        description:
          "Design a professional UX Goal Statement Framework for your organization. Include definition, SMART criteria, required research inputs, writing guidelines, validation checklist, examples of weak vs strong goal statements, measurement strategy, and review/approval process.",
        instructions: [
          "Definition: a clear, measurable statement of desired UX outcome aligned with business objectives.",
          "SMART criteria: explain each letter with UX-specific examples.",
          "Research inputs: problem statements, user research, analytics, competitive benchmarks.",
          "Writing guidelines: start with user, focus on outcome, be specific, include metrics and timeframe.",
          "Validation checklist: ___ user-centered? ___ measurable? ___ time-bound? ___ aligned with business? ___ research-informed?",
          "Weak examples: 'Improve the website.' 'Make users happier.' 'Redesign navigation.'",
          "Strong examples: 'Reduce checkout abandonment from 70% to 40% within 3 months by simplifying the payment flow.'",
          "Measurement strategy: define what tools will track each metric (analytics, surveys, usability tests).",
          "Review process: draft → team review → stakeholder alignment → final approval.",
        ],
        hint: "Goal statements are a contract between the UX team and the organization. They define what success looks like and how it will be measured.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 3 (Set 8): Determine Value Proposition
  // ════════════════════════════════════════════
  "value-proposition": {
    questions: [
      {
        question: "What is a value proposition in UX Design?",
        options: [
          "A programming guideline",
          "A clear statement explaining why users should choose a product because of the value it provides",
          "A project schedule",
          "A software architecture diagram",
        ],
        correctIndex: 1,
      },
      {
        question: "What is the primary purpose of a value proposition?",
        options: [
          "To communicate the unique value a product delivers to its target users",
          "To replace user research",
          "To estimate project costs",
          "To create wireframes",
        ],
        correctIndex: 0,
      },
      {
        question: "A strong value proposition should focus primarily on:",
        options: [
          "User benefits",
          "Technical specifications",
          "Company structure",
          "Programming languages",
        ],
        correctIndex: 0,
      },
      {
        question: "Which question does a value proposition answer?",
        options: [
          "Why should users choose this product instead of alternatives?",
          "Which programming language should be used?",
          "How many developers are required?",
          "What is the company's annual revenue?",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an example of a value proposition?",
        options: [
          "Manage your finances securely in minutes with an easy-to-use mobile banking app designed for everyone.",
          "We use modern technologies.",
          "Our database is scalable.",
          "We hired experienced developers.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which component is essential in a value proposition?",
        options: [
          "The problem being solved",
          "Office location",
          "Programming language",
          "Development budget",
        ],
        correctIndex: 0,
      },
      {
        question: "A value proposition should be based on:",
        options: [
          "User research and validated needs",
          "Personal opinions",
          "Competitor assumptions",
          "Marketing trends alone",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX artifact often informs a value proposition?",
        options: [
          "User persona",
          "Payroll report",
          "Source code",
          "Business license",
        ],
        correctIndex: 0,
      },
      {
        question: "What makes a value proposition unique?",
        options: [
          "It highlights how the product solves user problems better or differently than alternatives.",
          "It includes technical documentation.",
          "It lists every product feature.",
          "It guarantees market success.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement is NOT part of a value proposition?",
        options: [
          "The product solves users' problems.",
          "The product provides meaningful benefits.",
          "The product uses JavaScript.",
          "The product creates value for users.",
        ],
        correctIndex: 2,
      },
      {
        question: "Which group should benefit from the value proposition?",
        options: [
          "Target users",
          "Developers only",
          "Company executives only",
          "Investors only",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should value propositions be concise?",
        options: [
          "Users should quickly understand the product's value.",
          "To reduce research.",
          "To increase documentation.",
          "To replace marketing.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best reflects a user-centered value proposition?",
        options: [
          "Save time by completing government services online in just a few simple steps.",
          "Our servers use cloud infrastructure.",
          "We use modern programming frameworks.",
          "Our office is open 24 hours.",
        ],
        correctIndex: 0,
      },
      {
        question: "A value proposition should evolve when:",
        options: [
          "User needs or research findings change",
          "The product launches",
          "Developers change programming languages",
          "Marketing creates advertisements",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity helps validate a value proposition?",
        options: [
          "User testing and customer feedback",
          "Guessing",
          "Competitor advertising",
          "Financial auditing",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following strengthens a value proposition?",
        options: [
          "Clearly communicating measurable user benefits",
          "Listing technical specifications only",
          "Using complex terminology",
          "Describing company history",
        ],
        correctIndex: 0,
      },
      {
        question: "A value proposition primarily connects:",
        options: [
          "User needs with product benefits",
          "Developers with programming languages",
          "Stakeholders with budgets",
          "Marketing with payroll",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best demonstrates a competitive advantage?",
        options: [
          "Complete secure online payments in under one minute with biometric authentication.",
          "We have a large office.",
          "We hired more developers.",
          "We redesigned our database.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which characteristic makes a value proposition effective?",
        options: [
          "It is relevant, differentiated, and supported by evidence.",
          "It contains every product feature.",
          "It focuses only on business goals.",
          "It guarantees customer loyalty.",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of a value proposition is to:",
        options: [
          "Clearly communicate why the product matters to its intended users",
          "Replace user research",
          "Eliminate usability testing",
          "Increase documentation",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Healthcare Startup Value Proposition Canvas",
        description:
          "A startup is launching a digital healthcare platform. Develop a complete Value Proposition Canvas including customer profile, customer jobs, customer pains, customer gains, products and services, pain relievers, and gain creators. Conclude with a concise value proposition statement.",
        instructions: [
          "Customer profile: describe the target patient and healthcare provider segments.",
          "Customer jobs: what tasks are patients trying to accomplish (book appointments, access records, communicate with doctors)?",
          "Customer pains: frustrations with current healthcare (long wait times, confusing forms, lack of information).",
          "Customer gains: desired outcomes (quick appointments, clear communication, peace of mind).",
          "Products and services: what the platform offers (online booking, telemedicine, medical records).",
          "Pain relievers: how the platform addresses specific pains (24/7 booking, auto-reminders, plain language).",
          "Gain creators: how the platform delivers desired outcomes (faster appointments, better health tracking).",
          "Value proposition statement: 'Get the care you need, when you need it — with easy online booking, telemedicine, and your medical records at your fingertips.'",
        ],
        hint: "The Value Proposition Canvas ensures your product solves real customer problems rather than assuming what customers want.",
      },
      {
        title: "Banking App Value Proposition Comparison",
        description:
          "Select two competing mobile banking applications. Compare their value propositions by analyzing target users, user problems addressed, key benefits, competitive differentiators, accessibility, and user experience. Recommend improvements for the weaker value proposition.",
        instructions: [
          "Select 2 banking apps and analyze their stated or implied value propositions.",
          "Compare: target users (students, professionals, businesses), problems addressed, benefits offered.",
          "Evaluate competitive differentiators: what makes each unique?",
          "Assess accessibility and overall UX of each app.",
          "Recommend 3 improvements for the weaker value proposition based on UX research principles.",
        ],
        hint: "A value proposition isn't just what the company says — it's what users actually experience. Test both apps yourself.",
      },
      {
        title: "LMS Value Proposition from Research",
        description:
          "Conduct UX research for a university learning management system. Using your findings, create three user personas, identify user goals and pain points, develop a Value Proposition Canvas, write three alternative value proposition statements, and justify which best aligns with user needs and business objectives.",
        instructions: [
          "Research: interview students and instructors about their LMS experience.",
          "Personas: create 3 personas representing different user types.",
          "Goals and pain points: identify what users need and what frustrates them.",
          "Value Proposition Canvas: map customer profile and value map based on research.",
          "Write 3 alternative value propositions targeting different user segments.",
          "Justify your recommended value proposition with research evidence.",
        ],
        hint: "Different user segments may need different value propositions. A single statement may not serve all users equally.",
      },
      {
        title: "Government Service Value Proposition",
        description:
          "A government agency wants to digitize its driver's license renewal process. Develop a UX strategy including research findings, problem statements, goal statements, value proposition, success metrics, and a validation plan.",
        instructions: [
          "Research findings: citizens find current process time-consuming, confusing, and inconvenient.",
          "Problem statements: 'Citizens spend an average of 3 hours renewing licenses due to unclear requirements and multiple office visits.'",
          "Goal statements: 'Reduce license renewal time from 3 hours to 15 minutes within 6 months.'",
          "Value proposition: 'Renew your driver's license in minutes from anywhere — no office visits, no paperwork, no waiting.'",
          "Success metrics: completion rate, average time, user satisfaction, support volume.",
          "Validation plan: prototype testing with citizens, A/B test of online vs offline process.",
        ],
        hint: "Government value propositions must emphasize trust, security, and simplicity — citizens need to feel confident using digital services.",
      },
      {
        title: "Value Proposition Development Framework",
        description:
          "Design a professional Value Proposition Development Framework for UX teams. Include definition, required research inputs, Value Proposition Canvas, writing guidelines, validation checklist, examples of weak vs strong value propositions, testing methods, and review/approval process.",
        instructions: [
          "Definition: a concise statement explaining why a target user should choose your product.",
          "Research inputs: user personas, pain points, competitive analysis, market research.",
          "Value Proposition Canvas: customer profile (jobs, pains, gains) and value map (products, pain relievers, gain creators).",
          "Writing guidelines: user-centered, specific, differentiated, concise, evidence-based.",
          "Validation checklist: ___ based on research, ___ addresses real user needs, ___ differentiates from competitors, ___ clear and concise, ___ testable.",
          "Weak examples: 'Best app ever.' 'We use AI.' 'Modern solution for modern problems.'",
          "Strong examples: 'File your taxes in under 30 minutes with step-by-step guidance and human support when you need it.'",
          "Testing methods: A/B testing of value proposition on landing page, user interviews to test comprehension, surveys to measure appeal.",
          "Review process: draft → user testing → stakeholder review → refinement → final approval.",
        ],
        hint: "A value proposition isn't just for marketing — it guides product decisions. Every feature should support the value proposition.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 1 (Set 9): Understand Design Ideation
  // ════════════════════════════════════════════
  "design-ideation": {
    questions: [
      {
        question: "What is design ideation in UX Design?",
        options: [
          "The process of generating, exploring, and refining possible solutions to a design problem",
          "Writing source code",
          "Conducting financial analysis",
          "Launching a product",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of the ideation phase?",
        options: [
          "To produce a wide range of potential solutions before selecting the best one",
          "To begin software development immediately",
          "To finalize the user interface",
          "To conduct market research only",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Design Thinking stage comes immediately before ideation?",
        options: ["Define", "Prototype", "Test", "Launch"],
        correctIndex: 0,
      },
      {
        question: "Which Design Thinking stage follows ideation?",
        options: ["Prototype", "Empathize", "Define", "Research"],
        correctIndex: 0,
      },
      {
        question: "Which principle is most important during the early stages of ideation?",
        options: [
          "Encourage quantity before quality",
          "Criticize every idea immediately",
          "Focus on one solution",
          "Avoid collaboration",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity is commonly used during design ideation?",
        options: [
          "Brainstorming",
          "Financial auditing",
          "Software deployment",
          "Server optimization",
        ],
        correctIndex: 0,
      },
      {
        question: "What is divergent thinking?",
        options: [
          "Generating many different ideas without judging them initially",
          "Selecting one final design",
          "Testing prototypes",
          "Writing user stories",
        ],
        correctIndex: 0,
      },
      {
        question: "What is convergent thinking?",
        options: [
          "Evaluating and narrowing ideas to identify the most promising solutions",
          "Creating as many ideas as possible",
          "Conducting interviews",
          "Developing source code",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is a benefit of brainstorming?",
        options: [
          "It encourages creativity and multiple perspectives",
          "It guarantees perfect solutions",
          "It eliminates the need for research",
          "It replaces usability testing",
        ],
        correctIndex: 0,
      },
      {
        question: "A successful ideation session should be based on:",
        options: [
          "User research and clearly defined problems",
          "Personal preferences",
          "Competitor opinions",
          "Technical limitations only",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should ideas be postponed from judgment during brainstorming?",
        options: [
          "To encourage creativity and reduce fear of sharing ideas",
          "To eliminate collaboration",
          "To increase documentation",
          "To reduce innovation",
        ],
        correctIndex: 0,
      },
      {
        question: "Which ideation technique involves rapidly generating ideas individually before discussing them as a group?",
        options: [
          "Crazy Eights",
          "SWOT Analysis",
          "A/B Testing",
          "Card Sorting",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best describes ideation?",
        options: [
          "Exploring multiple possible solutions before deciding on one",
          "Writing detailed technical specifications",
          "Coding the application",
          "Conducting usability tests",
        ],
        correctIndex: 0,
      },
      {
        question: "What is one risk of skipping ideation?",
        options: [
          "Choosing the first solution instead of the best solution",
          "Increasing innovation",
          "Reducing design bias",
          "Improving creativity",
        ],
        correctIndex: 0,
      },
      {
        question: "Which team members should participate in ideation?",
        options: [
          "Cross-functional stakeholders, including designers, developers, researchers, and product managers",
          "Developers only",
          "Executives only",
          "Marketing only",
        ],
        correctIndex: 0,
      },
      {
        question: "Which artifact often serves as input for ideation?",
        options: [
          "Problem statement",
          "Payroll report",
          "Financial statement",
          "Technical manual",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity helps prioritize ideas after brainstorming?",
        options: [
          "Dot voting",
          "Wireframing",
          "User interviews",
          "Card sorting",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the role of constraints during ideation?",
        options: [
          "They help shape realistic and feasible solutions without limiting creativity too early",
          "They eliminate creativity",
          "They replace research",
          "They prevent collaboration",
        ],
        correctIndex: 0,
      },
      {
        question: "Which outcome indicates a successful ideation session?",
        options: [
          "Multiple research-informed concepts ready for prototyping",
          "One idea generated without discussion",
          "Immediate product launch",
          "Completed source code",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of design ideation is to:",
        options: [
          "Generate innovative, user-centered solutions to validated problems",
          "Replace research",
          "Eliminate prototyping",
          "Reduce collaboration",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "University Registration Ideation Workshop",
        description:
          "A university wants to redesign its online student registration system. Facilitate a complete ideation workshop by reviewing UX research findings, defining the design challenge, running three ideation techniques, prioritizing ideas, and selecting concepts for prototyping.",
        instructions: [
          "Review research: share personas, pain points, and problem statements from earlier research.",
          "Design challenge: 'How might we make course registration intuitive, fast, and stress-free for students?'",
          "Brainstorming: 15 minutes of free idea generation (quantity over quality, no judgment).",
          "Crazy Eights: each person sketches 8 ideas in 8 minutes (rapid visual thinking).",
          "SCAMPER technique: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse.",
          "Dot voting: each person gets 3 votes to prioritize the most promising ideas.",
          "Select 2-3 concepts for prototyping and document the rationale.",
        ],
        hint: "Mix individual and group activities. Individuals generate more diverse ideas; groups help build on and refine ideas.",
      },
      {
        title: "Mobile App Ideation Exercise",
        description:
          "Choose an existing mobile application with poor usability. Conduct a structured ideation exercise by identifying key user pain points, generating at least 30 design ideas, grouping ideas into themes, evaluating with an Impact vs. Effort Matrix, and selecting the top five concepts for prototyping.",
        instructions: [
          "Identify 5-8 pain points from your own experience or user reviews of the app.",
          "Generate at least 30 ideas (6-10 per pain point) using brainwriting or brainstorming.",
          "Group ideas into themes (e.g., navigation improvements, content clarity, feature additions).",
          "Create an Impact vs. Effort matrix and plot each idea.",
          "Select the top 5 ideas (prioritize high impact, low effort for quick wins).",
          "Sketch or describe each selected concept for prototyping.",
        ],
        hint: "Use 'How Might We' questions for each pain point. 'How might we make checkout faster?' generates better ideas than 'Fix checkout.'",
      },
      {
        title: "90-Minute Ideation Session Agenda",
        description:
          "Your UX team has only 90 minutes to improve a food delivery application. Design an ideation session agenda including objectives, participants, icebreaker, brainstorming rules, idea generation techniques, prioritization process, and expected outputs.",
        instructions: [
          "0-5 min: welcome and objectives (e.g., 'Generate concepts to reduce cart abandonment').",
          "5-10 min: icebreaker (e.g., 'Share your best and worst food delivery experience').",
          "10-15 min: review research (share 3 key pain points from user research).",
          "15-40 min: brainstorming (25 minutes of rapid idea generation following the rules).",
          "40-55 min: Crazy Eights (15 minutes of rapid sketching).",
          "55-70 min: group share and cluster ideas.",
          "70-80 min: dot voting to prioritize.",
          "80-90 min: select top concepts and assign next steps.",
          "Explain why each activity is included and how it contributes to the goal.",
        ],
        hint: "Tight time constraints force faster decisions. Don't let perfect be the enemy of good in a 90-minute session.",
      },
      {
        title: "Ideation Technique Comparison",
        description:
          "Compare three ideation techniques: Brainstorming, Crazy Eights, and SCAMPER. For each technique, analyze purpose, advantages, limitations, best use cases, and expected deliverables. Recommend which technique is most suitable for a government digital service project.",
        instructions: [
          "Brainstorming: free-form verbal idea generation in a group. Best for breadth of ideas but can be dominated by loud voices.",
          "Crazy Eights: rapid individual sketching. Best for visual thinkers and ensuring everyone contributes equally.",
          "SCAMPER: structured prompts (Substitute, Combine, Adapt...). Best for improving existing solutions rather than starting from scratch.",
          "For each: explain purpose, 3 advantages, 3 limitations, ideal use case, and expected deliverables (list of ideas, sketches, refined concepts).",
          "Recommendation: SCAMPER may be best for government services because it improves existing processes rather than starting from zero.",
        ],
        hint: "The best technique depends on the problem, team, and time available. Use multiple techniques in longer sessions.",
      },
      {
        title: "UX Ideation Playbook",
        description:
          "Develop a professional UX Ideation Playbook for your organization. Include objectives, workshop preparation, team roles, ideation principles, rules for encouraging creativity, recommended techniques, prioritization methods, documentation templates, and common mistakes to avoid.",
        instructions: [
          "Objectives: generate innovative solutions to validated user problems.",
          "Preparation: gather research artifacts, define design challenge, invite diverse participants, prepare materials.",
          "Team roles: facilitator, note-taker, time-keeper, participants (designers, researchers, PMs, developers).",
          "Ideation principles: defer judgment, encourage wild ideas, build on others' ideas, stay focused, one conversation at a time.",
          "Creativity rules: go for quantity, encourage visual thinking, use constraints creatively, take breaks.",
          "Techniques: brainstorming, brainwriting, Crazy Eights, SCAMPER, mind mapping, worst possible idea.",
          "Prioritization: dot voting, Impact vs. Effort matrix, heat mapping, affinity grouping.",
          "Documentation: photos of outputs, digital capture of sticky notes, summary of top concepts, action items.",
          "Common mistakes: skipping research review, criticizing ideas too early, letting one person dominate, not capturing all ideas.",
          "Explain how the playbook supports innovation while keeping teams focused on user needs.",
        ],
        hint: "A playbook ensures consistency across teams and projects. It's a living document — update it as you learn what works.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 2 (Set 9): Recognize Business Needs During Design Ideation
  // ════════════════════════════════════════════
  "business-needs": {
    questions: [
      {
        question: "Why is it important to consider business needs during design ideation?",
        options: [
          "To ensure design solutions create value for both users and the organization",
          "To replace user research",
          "To eliminate usability testing",
          "To focus only on profits",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is a business need?",
        options: [
          "Increasing customer retention",
          "Changing the application's font",
          "Creating wireframes",
          "Conducting usability testing",
        ],
        correctIndex: 0,
      },
      {
        question: "A successful UX solution should balance:",
        options: [
          "User needs and business goals",
          "Business goals only",
          "User preferences only",
          "Technical specifications only",
        ],
        correctIndex: 0,
      },
      {
        question: "Which business metric is commonly influenced by UX improvements?",
        options: [
          "Customer retention rate",
          "Font size",
          "Screen resolution",
          "Programming language",
        ],
        correctIndex: 0,
      },
      {
        question: "Which stakeholder is most likely to define business objectives?",
        options: [
          "Product owner",
          "End user",
          "Graphic designer",
          "Usability participant",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a Key Performance Indicator (KPI)?",
        options: [
          "A measurable value used to evaluate business success",
          "A wireframe",
          "A user persona",
          "A prototype",
        ],
        correctIndex: 0,
      },
      {
        question: "Which KPI would best measure an improvement in an e-commerce checkout experience?",
        options: [
          "Checkout conversion rate",
          "Employee attendance",
          "Office electricity usage",
          "Number of meetings",
        ],
        correctIndex: 0,
      },
      {
        question: "Which business objective aligns with improving user onboarding?",
        options: [
          "Increasing user activation",
          "Increasing office space",
          "Purchasing new computers",
          "Hiring accountants",
        ],
        correctIndex: 0,
      },
      {
        question: "During ideation, business constraints should:",
        options: [
          "Help shape realistic solutions without preventing creativity",
          "Eliminate innovation",
          "Replace research",
          "Be ignored completely",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best demonstrates alignment between UX and business goals?",
        options: [
          "Simplifying account creation to increase completed registrations and customer acquisition",
          "Adding animations because they look modern",
          "Using a new font without research",
          "Redesigning every screen without identifying problems",
        ],
        correctIndex: 0,
      },
      {
        question: "Which business metric is directly affected by improving customer satisfaction?",
        options: [
          "Customer loyalty",
          "Screen brightness",
          "Server capacity",
          "Typography",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should UX Designers understand the organization's strategy?",
        options: [
          "To ensure design decisions support long-term business objectives",
          "To replace stakeholder meetings",
          "To eliminate research",
          "To reduce prototyping",
        ],
        correctIndex: 0,
      },
      {
        question: "What is Return on Investment (ROI) in UX?",
        options: [
          "The value gained from UX improvements compared to their cost",
          "The number of wireframes created",
          "The amount of research conducted",
          "The number of interviews completed",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following best represents a business constraint?",
        options: [
          "Limited budget and project timeline",
          "User interviews",
          "Personas",
          "Empathy maps",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the best next step when a feature users love is extremely expensive and provides little business value?",
        options: [
          "Evaluate alternatives that balance user value with business feasibility",
          "Implement it immediately",
          "Ignore business concerns",
          "Remove all user feedback",
        ],
        correctIndex: 0,
      },
      {
        question: "Which framework is commonly used to prioritize features based on business value and user impact?",
        options: [
          "MoSCoW Prioritization",
          "Waterfall Model",
          "Binary Search",
          "Bubble Sort",
        ],
        correctIndex: 0,
      },
      {
        question: "Business goals should be validated by:",
        options: [
          "Measurable outcomes and performance indicators",
          "Personal opinions",
          "Developer preferences",
          "Competitor advertisements",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best demonstrates user-centered business thinking?",
        options: [
          "Improve accessibility to increase product adoption among a wider audience",
          "Reduce accessibility to save development time",
          "Remove help documentation",
          "Eliminate usability testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Which department typically collaborates with UX to define business priorities?",
        options: [
          "Product Management",
          "Security Guards",
          "Facility Management",
          "Reception",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of recognizing business needs during ideation is to:",
        options: [
          "Develop solutions that are desirable for users, feasible to build, and viable for the business",
          "Maximize profits regardless of users",
          "Replace user research",
          "Eliminate innovation",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Fintech Acquisition and Onboarding Strategy",
        description:
          "A fintech startup wants to increase customer acquisition while reducing onboarding abandonment. Develop an ideation strategy that identifies business objectives, user needs, highlights potential conflicts, generates multiple design concepts, prioritizes using business value and user impact, and defines measurable KPIs.",
        instructions: [
          "Business objectives: increase new account sign-ups by 30%, reduce onboarding abandonment from 60% to 30%.",
          "User needs: quick and easy setup, clear value proposition, trust and security reassurance.",
          "Potential conflicts: business wants more data collection (for risk assessment), users want minimal data entry.",
          "Generate 8-10 design concepts addressing both business and user needs.",
          "Prioritize using a Value vs. Complexity matrix.",
          "Define KPIs: sign-up completion rate, time to complete, user satisfaction, data quality.",
        ],
        hint: "When business and user needs conflict, look for creative solutions that serve both. 'How might we collect necessary data without burdening users?'",
      },
      {
        title: "E-Commerce Business-Goal UX Strategy",
        description:
          "Choose an e-commerce platform and analyze its business objectives. Develop a UX strategy that aligns with increasing conversion rate, reducing cart abandonment, improving customer retention, and increasing average order value.",
        instructions: [
          "Analyze current business objectives for your chosen platform.",
          "For each objective (conversion, abandonment, retention, order value):",
          "Propose 2-3 UX improvements with rationale.",
          "Define success metrics with baseline and target values.",
          "Explain how each UX improvement supports the business objective.",
        ],
        hint: "UX improvements often serve multiple business goals. Reducing friction in checkout improves both conversion and satisfaction.",
      },
      {
        title: "Government Passport Digitization Ideation",
        description:
          "A government agency wants to digitize passport applications. Develop a UX ideation report including business goals, citizen needs, regulatory constraints, accessibility considerations, prioritized design concepts, risk assessment, and KPIs.",
        instructions: [
          "Business goals: reduce processing time, lower operational costs, increase citizen satisfaction.",
          "Citizen needs: clear instructions, simple forms, status tracking, multiple submission channels.",
          "Regulatory constraints: identity verification requirements, data protection laws, anti-fraud measures.",
          "Accessibility: support for diverse users including elderly, non-digital-literate, and users with disabilities.",
          "Generate 5 concepts, prioritize using citizen impact and implementation feasibility.",
          "Risk assessment: what could go wrong with each concept (fraud, exclusion, technical failure)?",
          "KPIs: application completion rate, processing time, error rate, citizen satisfaction.",
        ],
        hint: "Government projects have unique constraints. Solutions must be secure, inclusive, and compliant with regulations — not just user-friendly.",
      },
      {
        title: "Business Model UX Comparison",
        description:
          "Compare two products that serve similar users but have different business models (e.g., free streaming service vs subscription streaming service). Analyze how business needs influence feature prioritization, user experience, monetization, user retention, accessibility, and long-term product strategy.",
        instructions: [
          "Select 2 similar products with different business models (ad-supported vs subscription, freemium vs paid).",
          "Compare: how does the business model affect feature prioritization (e.g., ads vs no ads)?",
          "Compare: how does monetization affect user experience (e.g., paywalls, upgrade prompts)?",
          "Compare: user retention strategies (e.g., free vs paid lock-in).",
          "Compare: accessibility of premium vs free features.",
          "Propose UX improvements for each product that balance user needs with business constraints.",
        ],
        hint: "The business model shapes the UX in fundamental ways. A 'free' product may need to balance user experience with advertising revenue.",
      },
      {
        title: "Business-Aware UX Ideation Framework",
        description:
          "Design a professional Business-Aware UX Ideation Framework for your organization. Include business objectives, user research inputs, stakeholder mapping, success metrics, prioritization methods, feasibility analysis, risk assessment, decision-making process, and review checklist.",
        instructions: [
          "Business objectives: document strategic goals, revenue targets, market position, and growth metrics.",
          "User research: personas, pain points, needs, and behavioral data that inform design.",
          "Stakeholder mapping: identify who influences decisions and what each stakeholder values.",
          "Success metrics: balanced scorecard of user metrics (satisfaction, completion) and business metrics (conversion, retention).",
          "Prioritization: combine user value and business value scoring.",
          "Feasibility analysis: technical complexity, development effort, resource availability.",
          "Risk assessment: user adoption risk, technical risk, business risk, timeline risk.",
          "Decision-making: define who decides when UX and business needs conflict.",
          "Review checklist: ___ user needs addressed? ___ business value demonstrated? ___ feasible to build? ___ risks identified?",
        ],
        hint: "The best frameworks help teams make trade-off decisions transparently. When UX and business conflict, document the trade-off rather than ignoring it.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 3 (Set 9): Competitive Audit
  // ════════════════════════════════════════════
  "competitive-audit": {
    questions: [
      {
        question: "What is a competitive audit in UX Design?",
        options: [
          "A systematic evaluation of competing products to understand their strengths, weaknesses, and opportunities",
          "A financial audit of a company",
          "A software testing process",
          "A project management technique",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of conducting a competitive audit?",
        options: [
          "To identify opportunities for creating a better user experience",
          "To copy competitors' designs exactly",
          "To reduce development costs",
          "To eliminate user research",
        ],
        correctIndex: 0,
      },
      {
        question: "Which products should typically be included in a competitive audit?",
        options: [
          "Direct and indirect competitors",
          "Only products developed by your company",
          "Products from unrelated industries",
          "Products released more than 20 years ago",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is commonly evaluated during a competitive audit?",
        options: [
          "Navigation and usability",
          "Office furniture",
          "Employee salaries",
          "Company building size",
        ],
        correctIndex: 0,
      },
      {
        question: "What is a direct competitor?",
        options: [
          "A product that solves the same problem for the same target users",
          "A company in a different industry",
          "A supplier",
          "A government agency",
        ],
        correctIndex: 0,
      },
      {
        question: "What is an indirect competitor?",
        options: [
          "A product that solves a similar problem using a different approach or serves a related need",
          "A product from the same company",
          "A software framework",
          "A testing tool",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is it important to evaluate competitors' strengths?",
        options: [
          "To understand effective practices that may inspire improvements",
          "To copy every feature",
          "To avoid user research",
          "To reduce accessibility",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should UX Designers identify competitors' weaknesses?",
        options: [
          "To discover opportunities for differentiation and improvement",
          "To criticize competitors publicly",
          "To replace usability testing",
          "To increase project costs",
        ],
        correctIndex: 0,
      },
      {
        question: "Which artifact is commonly used to document findings from a competitive audit?",
        options: [
          "Competitive Audit Report",
          "Payroll Report",
          "Financial Statement",
          "Technical Manual",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX factor should be compared during a competitive audit?",
        options: [
          "Accessibility",
          "Office location",
          "Programming language",
          "Company ownership",
        ],
        correctIndex: 0,
      },
      {
        question: "A competitive audit should focus primarily on:",
        options: [
          "User experience and product value",
          "Marketing slogans only",
          "Employee performance",
          "Legal contracts",
        ],
        correctIndex: 0,
      },
      {
        question: "Which research method complements a competitive audit?",
        options: [
          "User interviews",
          "Payroll analysis",
          "Inventory management",
          "Accounting",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement about competitive audits is TRUE?",
        options: [
          "They should inform design decisions but not replace user research.",
          "They eliminate the need for usability testing.",
          "They guarantee market success.",
          "They should focus only on visual design.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which criterion helps evaluate the usability of a competing product?",
        options: [
          "Ease of completing common tasks",
          "Annual revenue",
          "Number of employees",
          "Office size",
        ],
        correctIndex: 0,
      },
      {
        question: "What is one risk of relying only on competitive audits?",
        options: [
          "Designing for competitors instead of users",
          "Better user research",
          "Higher accessibility",
          "More innovation",
        ],
        correctIndex: 0,
      },
      {
        question: "Which element should be included in a competitive audit comparison table?",
        options: [
          "Product features and user experience observations",
          "Employee names",
          "Source code",
          "Company tax records",
        ],
        correctIndex: 0,
      },
      {
        question: "After completing a competitive audit, the UX team should:",
        options: [
          "Identify opportunities to create unique value for users",
          "Duplicate the leading competitor",
          "Stop conducting research",
          "Begin coding immediately",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement demonstrates ethical competitive analysis?",
        options: [
          "Study competitors to understand market standards while creating original, research-driven solutions",
          "Copy competitors' entire interface",
          "Reuse copyrighted content",
          "Ignore user needs",
        ],
        correctIndex: 0,
      },
      {
        question: "A competitive audit is most valuable when combined with:",
        options: [
          "User research and usability testing",
          "Personal opinions",
          "Guesswork",
          "Marketing advertisements",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of a competitive audit is to:",
        options: [
          "Discover opportunities to create a more valuable and user-centered product",
          "Replace UX research",
          "Eliminate design thinking",
          "Reduce collaboration",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking Competitive Audit",
        description:
          "Conduct a comprehensive competitive audit of three mobile banking applications. Include direct and indirect competitors, product overview, feature comparison matrix, navigation analysis, accessibility evaluation, SWOT analysis, and UX recommendations.",
        instructions: [
          "Select 3 banking apps: 2 direct competitors and 1 indirect (e.g., fintech like Revolut or Chime).",
          "Create a product overview for each: target users, core features, unique selling points.",
          "Feature comparison matrix: compare 15-20 features across all 3 products.",
          "Navigation analysis: evaluate menu structure, search functionality, and task completion ease.",
          "Accessibility evaluation: test with screen reader, check contrast, assess font sizes.",
          "SWOT analysis: identify strengths, weaknesses, opportunities, and threats for each.",
          "Conclude with UX recommendations and identify the most significant market gap.",
        ],
        hint: "Don't just list features — evaluate the quality of each feature. Two apps may both have 'bill pay' but one may be much easier to use.",
      },
      {
        title: "E-Commerce Competitor Comparison",
        description:
          "Choose an e-commerce platform and identify its five closest competitors. Develop a competitive audit report covering user personas served, core features, information architecture, visual design consistency, interaction design, checkout experience, accessibility compliance, and performance observations.",
        instructions: [
          "Identify 5 competitors with different approaches (e.g., Amazon, Etsy, Shopify store, niche marketplace, direct-to-consumer brand).",
          "Evaluate each across: user personas (who do they serve?), core features, IA (how is content organized?), visual design (consistent? modern?), interaction design (animations, feedback, transitions), checkout (steps, friction, payment options), accessibility (WCAG compliance), performance (load time, responsiveness).",
          "Recommend improvements that would differentiate your product from each competitor.",
        ],
        hint: "Look for patterns across competitors. If all 5 competitors do something the same way, it may be an industry standard worth adopting — or an opportunity to differentiate.",
      },
      {
        title: "Tax Filing Platform Competitive Audit",
        description:
          "A government agency plans to launch a digital tax filing service. Conduct a competitive audit comparing at least four national or international tax filing platforms. Evaluate ease of use, security communication, accessibility, mobile responsiveness, error prevention, user guidance, and overall UX.",
        instructions: [
          "Select 4 tax filing platforms (e.g., IRS Free File, TurboTax, H&R Block, and a non-US equivalent).",
          "Ease of use: how easy is it to complete a basic tax return?",
          "Security communication: how does each platform reassure users about data safety?",
          "Accessibility: can users with disabilities complete their taxes?",
          "Mobile responsiveness: is the full experience available on mobile?",
          "Error prevention: how does each prevent common mistakes?",
          "User guidance: how does each help users understand complex tax concepts?",
          "Develop a UX strategy for the new service based on findings.",
        ],
        hint: "Tax filing is high-anxiety. The best platforms reduce anxiety through clear guidance, progress indicators, and reassuring language.",
      },
      {
        title: "Ride-Hailing App Competitive Comparison",
        description:
          "Compare two ride-hailing applications. Develop a competitive audit matrix covering user onboarding, navigation, booking experience, payment flow, accessibility, customer support, trust and safety features, and visual hierarchy. Create five design recommendations supported by UX principles.",
        instructions: [
          "Select 2 ride-hailing apps (e.g., Uber and Lyft, or local alternatives).",
          "Compare: onboarding (sign-up time, verification steps), navigation (map interaction, pickup selection), booking (car selection, ETA display, fare estimate), payment (options, transparency, receipt), accessibility (options for users with disabilities), customer support (how to report issues, response quality), trust features (driver info, safety toolkit, share trip).",
          "Create 5 actionable UX recommendations supported by UX principles (e.g., visibility of system status, consistency, user control).",
        ],
        hint: "Pay special attention to trust and safety features — these are key differentiators in ride-hailing.",
      },
      {
        title: "Competitive Audit Framework Design",
        description:
          "Design a professional Competitive Audit Framework for your UX team. Include objectives, competitor selection criteria, data collection methods, evaluation categories, scoring rubric, SWOT analysis template, opportunity identification process, reporting template, ethical considerations, and review checklist.",
        instructions: [
          "Objectives: understand market landscape, identify UX gaps, inform product strategy, inspire innovation.",
          "Selection criteria: direct competitors (same problem, same audience), indirect competitors (similar problem, different approach), aspirational competitors (best-in-class UX in any industry).",
          "Data collection: product testing, heuristic evaluation, user reviews analysis, expert interviews.",
          "Evaluation categories: onboarding, core task flow, navigation, content, visual design, accessibility, performance, support.",
          "Scoring rubric: 1-5 scale for each category with defined criteria (1=poor, 3=average, 5=excellent).",
          "SWOT template: internal (strengths, weaknesses) and external (opportunities, threats) for each competitor.",
          "Opportunity identification: where competitors are weak and user needs are unmet.",
          "Reporting: executive summary, competitor profiles, comparison matrix, SWOT analysis, UX opportunities, action plan.",
          "Ethical considerations: do not copy, respect intellectual property, focus on learning not imitation.",
          "Review checklist: ___ diverse competitors selected? ___ objective criteria used? ___ findings backed by evidence? ___ opportunities identified?",
        ],
        hint: "The best competitive audits don't just describe what competitors do — they reveal opportunities to do something better.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 28: Storyboarding
  // ════════════════════════════════════════════
  "storyboarding": {
    questions: [
      {
        question: "What is a storyboard in UX Design?",
        options: [
          "A visual sequence that illustrates how a user interacts with a product to accomplish a goal",
          "A software architecture diagram",
          "A programming flowchart",
          "A project budget",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of a storyboard?",
        options: [
          "To visualize the user's experience before designing the interface",
          "To replace user interviews",
          "To develop source code",
          "To estimate project costs",
        ],
        correctIndex: 0,
      },
      {
        question: "A storyboard is most commonly created during which stage of the UX process?",
        options: ["Ideation", "Product launch", "Software deployment", "Maintenance"],
        correctIndex: 0,
      },
      {
        question: "Which UX artifact often provides input for creating a storyboard?",
        options: ["User persona", "Payroll report", "Marketing budget", "Server documentation"],
        correctIndex: 0,
      },
      {
        question: "A storyboard should primarily focus on:",
        options: ["The user's journey and interactions", "Programming languages", "Company profits", "Technical architecture"],
        correctIndex: 0,
      },
      {
        question: "Which type of storyboard focuses on the overall user experience in context?",
        options: ["Big-picture storyboard", "Close-up storyboard", "Technical storyboard", "Development storyboard"],
        correctIndex: 0,
      },
      {
        question: "Which type of storyboard focuses on detailed interactions with a product?",
        options: ["Close-up storyboard", "Big-picture storyboard", "Business storyboard", "Marketing storyboard"],
        correctIndex: 0,
      },
      {
        question: "Which element is essential in every storyboard?",
        options: ["Sequential scenes showing user actions", "Source code", "Revenue projections", "Database schema"],
        correctIndex: 0,
      },
      {
        question: "Why do UX Designers create storyboards before designing screens?",
        options: ["To understand user context and identify opportunities for improvement", "To finalize colors", "To replace prototypes", "To reduce research"],
        correctIndex: 0,
      },
      {
        question: "Which statement best describes a storyboard?",
        options: ["It tells the story of the user's experience step by step.", "It lists software requirements.", "It replaces wireframes.", "It documents technical architecture."],
        correctIndex: 0,
      },
      {
        question: "A storyboard usually begins with:",
        options: ["A user who has a goal or problem", "The completed interface", "Source code", "Product analytics"],
        correctIndex: 0,
      },
      {
        question: "Which activity commonly follows storyboarding?",
        options: ["Wireframing or prototyping", "Product launch", "Marketing campaign", "Financial auditing"],
        correctIndex: 0,
      },
      {
        question: "What is the benefit of using storyboards during stakeholder presentations?",
        options: ["They make user experiences easy to understand visually", "They replace usability testing", "They eliminate research", "They guarantee approval"],
        correctIndex: 0,
      },
      {
        question: "Which of the following should be shown in a storyboard?",
        options: ["User actions, environment, and interactions", "Programming syntax", "Server logs", "Employee salaries"],
        correctIndex: 0,
      },
      {
        question: "Storyboards are especially useful for:",
        options: ["Exploring real-life scenarios before building solutions", "Writing technical specifications", "Managing payroll", "Database optimization"],
        correctIndex: 0,
      },
      {
        question: "Which statement is TRUE about storyboards?",
        options: ["They can be simple sketches and do not require artistic skill", "They must be professionally illustrated", "They replace user personas", "They are created after development"],
        correctIndex: 0,
      },
      {
        question: "What should influence the scenes included in a storyboard?",
        options: ["Research findings and user needs", "Personal opinions", "Competitor advertisements", "Company office layout"],
        correctIndex: 0,
      },
      {
        question: "Which UX principle does storyboarding support most directly?",
        options: ["User-centered design", "Waterfall development", "Database normalization", "Software maintenance"],
        correctIndex: 0,
      },
      {
        question: "A storyboard helps teams identify:",
        options: ["Potential usability issues before designing the interface", "Programming errors", "Employee performance", "Marketing budgets"],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of storyboarding is to:",
        options: ["Visualize and communicate the user's experience to inspire better design solutions", "Replace user research", "Eliminate prototyping", "Increase documentation"],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Hospital Appointment Booking Redesign",
        description: "A hospital wants to redesign its online appointment booking service. Create both a big-picture storyboard and a close-up storyboard for a first-time patient.",
        instructions: [
          "Define user goals, environment, emotions, actions, and touchpoints for each storyboard.",
          "Identify pain points and opportunities in the current experience.",
          "Sketch sequential scenes showing the user's journey from start to finish.",
          "Explain how each storyboard informs later design decisions such as wireframes and prototypes.",
        ],
        hint: "The big-picture storyboard shows the overall context (what happens before and after the app), while the close-up focuses on screen-by-screen interactions.",
      },
      {
        title: "Food Delivery Customer Journey",
        description: "Choose a food delivery application and develop a storyboard showing the complete customer experience from deciding to order food until delivery is completed.",
        instructions: [
          "Define the context, user actions, and emotional changes throughout the journey.",
          "Identify friction points and design opportunities.",
          "Create sequential scenes capturing key moments.",
          "Recommend improvements based on your storyboard analysis.",
        ],
        hint: "Pay attention to emotional highs (placing an order) and lows (long wait times, missing items) — these are where design can have the biggest impact.",
      },
      {
        title: "University Course Registration Storyboards",
        description: "A university wants to improve its online course registration process. Create a storyboard for a new student, a returning student, and a student with visual impairment.",
        instructions: [
          "Define the unique goals and challenges for each user type.",
          "Create three separate storyboards showing each student's journey.",
          "Compare the three storyboards and identify differences in experience.",
          "Explain how accessibility influences each experience and propose inclusive design improvements.",
        ],
        hint: "Consider how different user characteristics (familiarity with the system, accessibility needs) change the way the same product is experienced.",
      },
      {
        title: "Big-Picture vs Close-Up Storyboard Comparison",
        description: "Compare big-picture and close-up storyboards for the same ride-hailing application.",
        instructions: [
          "Define the purpose, level of detail, and user context for each storyboard type.",
          "Evaluate how each type supports decision-making during design.",
          "Identify appropriate use cases, advantages, and limitations of each.",
          "Recommend when each storyboard should be used during the UX process.",
        ],
        hint: "Big-picture storyboards help stakeholders understand the overall context, while close-ups help designers refine specific interaction details.",
      },
      {
        title: "Storyboarding Guide for UX Teams",
        description: "Design a professional Storyboarding Guide for your UX team that establishes standards and best practices.",
        instructions: [
          "Define objectives and different storyboard types your team will use.",
          "Specify required research inputs before storyboarding begins.",
          "Create drawing guidelines that accommodate all skill levels.",
          "Develop a review checklist, collaboration process, and documentation standards.",
          "Include common mistakes and best practices with examples.",
        ],
        hint: "A good guide makes storyboarding accessible to everyone on the team, not just artists. Focus on clarity of communication over visual polish.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 29: User Flow and Task Flow
  // ════════════════════════════════════════════
  "user-flow": {
    questions: [
      {
        question: "What is a user flow in UX Design?",
        options: [
          "A visual representation of the steps a user takes to complete a task within a product",
          "A software deployment process",
          "A database relationship diagram",
          "A marketing campaign",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of creating a user flow?",
        options: [
          "To understand and optimize the user's path toward completing a goal",
          "To replace usability testing",
          "To estimate development costs",
          "To write source code",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX artifact commonly serves as input for creating a user flow?",
        options: ["A user journey map", "A payroll report", "A financial statement", "Technical architecture"],
        correctIndex: 0,
      },
      {
        question: "A user flow typically begins with:",
        options: ["The user's entry point", "The final confirmation screen", "Product launch", "Source code"],
        correctIndex: 0,
      },
      {
        question: "What does a decision point represent in a user flow?",
        options: ["A point where the user chooses between two or more paths", "A software bug", "A database table", "A project deadline"],
        correctIndex: 0,
      },
      {
        question: "Which symbol is commonly used to represent a decision in a flowchart?",
        options: ["Diamond", "Rectangle", "Circle", "Triangle"],
        correctIndex: 0,
      },
      {
        question: "Which symbol is commonly used to represent a process or action in a user flow?",
        options: ["Rectangle", "Diamond", "Hexagon", "Star"],
        correctIndex: 0,
      },
      {
        question: "A well-designed user flow should:",
        options: ["Minimize unnecessary steps and user effort", "Include as many screens as possible", "Focus only on visual design", "Ignore accessibility"],
        correctIndex: 0,
      },
      {
        question: "Why should user flows be created before wireframes?",
        options: ["They establish the logical structure of user interactions", "They replace prototypes", "They eliminate research", "They define branding"],
        correctIndex: 0,
      },
      {
        question: "Which activity commonly follows creating a user flow?",
        options: ["Wireframing", "Product launch", "Marketing campaign", "Database optimization"],
        correctIndex: 0,
      },
      {
        question: "A user flow primarily answers which question?",
        options: ["How does the user accomplish a goal?", "Which programming language should be used?", "What is the company's revenue?", "How many developers are required?"],
        correctIndex: 0,
      },
      {
        question: "Which UX principle is supported by simplifying user flows?",
        options: ["Reducing cognitive load", "Increasing complexity", "Eliminating accessibility", "Maximizing navigation depth"],
        correctIndex: 0,
      },
      {
        question: "Why should alternate paths be included in user flows?",
        options: ["Users may make different decisions or encounter different scenarios", "To increase documentation", "To replace usability testing", "To improve marketing"],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an example of an alternate path?",
        options: ["User forgets their password during login", "User successfully completes checkout", "User opens the homepage", "User closes the application after completing a task"],
        correctIndex: 0,
      },
      {
        question: "A user flow can help identify:",
        options: ["Bottlenecks and unnecessary complexity", "Employee performance", "Company revenue", "Office layout"],
        correctIndex: 0,
      },
      {
        question: "What should influence the design of a user flow?",
        options: ["User goals and research findings", "Personal preferences", "Competitor branding", "Office policies"],
        correctIndex: 0,
      },
      {
        question: "Which stakeholder benefits from reviewing user flows?",
        options: ["Designers, developers, product managers, and stakeholders", "Developers only", "Marketing only", "Human Resources only"],
        correctIndex: 0,
      },
      {
        question: "Why are user flows useful before development begins?",
        options: ["They clarify functionality and reduce misunderstandings", "They replace coding", "They eliminate user testing", "They reduce accessibility"],
        correctIndex: 0,
      },
      {
        question: "Which characteristic makes a user flow effective?",
        options: ["Clear, logical, and easy to follow", "Highly technical", "Extremely detailed with unnecessary paths", "Focused only on interface colors"],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of a user flow is to:",
        options: ["Design the most efficient path for users to achieve their goals", "Replace prototypes", "Eliminate research", "Increase documentation"],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking Application User Flow",
        description: "Design a complete user flow for a mobile banking application covering registration, identity verification, login, money transfer, transaction confirmation, and logout.",
        instructions: [
          "Map the primary flow showing the ideal user path.",
          "Include alternate flows for different user decisions.",
          "Document error states and recovery paths.",
          "Add accessibility considerations at each step.",
        ],
        hint: "Think about real-world scenarios: What happens if a user enters the wrong PIN? What if the transfer fails mid-process?",
      },
      {
        title: "University Course Registration User Flow",
        description: "Create a user flow for first-time students, returning students, and academic advisors in a redesigned online course registration system.",
        instructions: [
          "Identify decision points for each user type.",
          "Document error scenarios such as scheduling conflicts or prerequisite issues.",
          "Identify opportunities for simplification.",
          "Define success metrics for each flow.",
        ],
        hint: "Each user type has different goals — first-time students need guidance, returning students want efficiency, and advisors need oversight.",
      },
      {
        title: "E-Commerce Checkout Redesign",
        description: "Analyze the checkout process of an e-commerce platform and develop both current-state and improved user flows.",
        instructions: [
          "Map the current-state user flow and identify bottlenecks.",
          "Design an improved user flow addressing each issue.",
          "Create a side-by-side comparison of both flows.",
          "Provide UX recommendations with justification.",
        ],
        hint: "Common checkout bottlenecks include mandatory account creation, hidden fees, and multi-page forms. Each step you remove improves conversion.",
      },
      {
        title: "Ride-Hailing App User Flow Comparison",
        description: "Compare the user flows of two ride-hailing applications.",
        instructions: [
          "Map entry points, navigation paths, and decision points for both apps.",
          "Evaluate error handling and accessibility in each flow.",
          "Compare task completion efficiency.",
          "Recommend improvements supported by UX principles.",
        ],
        hint: "Look at how each app handles common scenarios like booking for someone else, splitting fares, or canceling a ride.",
      },
      {
        title: "User Flow Documentation Framework",
        description: "Design a professional User Flow Documentation Framework for your UX team.",
        instructions: [
          "Define objectives and standard symbols for your flow diagrams.",
          "Establish diagram conventions and naming standards.",
          "Include guidelines for alternate paths, error states, and accessibility.",
          "Create a review checklist and collaboration workflow.",
        ],
        hint: "A consistent framework ensures that flows created by different designers are equally understandable by developers and stakeholders.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 30: Sketching in UX
  // ════════════════════════════════════════════
  "sketching": {
    questions: [
      {
        question: "What is sketching in UX Design?",
        options: [
          "A quick, low-cost method of visualizing and exploring design ideas before creating digital designs",
          "A software development technique",
          "A usability testing method",
          "A project management process",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of sketching during the design process?",
        options: [
          "To rapidly generate and communicate multiple design ideas",
          "To finalize the user interface",
          "To write source code",
          "To estimate project costs",
        ],
        correctIndex: 0,
      },
      {
        question: "Sketching is most commonly used during which stage of UX Design?",
        options: ["Ideation", "Product launch", "Software maintenance", "Marketing"],
        correctIndex: 0,
      },
      {
        question: "Why do UX Designers prefer sketching before creating digital wireframes?",
        options: [
          "It is fast, inexpensive, and encourages experimentation",
          "It produces production-ready interfaces",
          "It eliminates user testing",
          "It replaces prototypes",
        ],
        correctIndex: 0,
      },
      {
        question: "What is one major advantage of paper sketching?",
        options: [
          "Ideas can be changed quickly with little effort",
          "It automatically generates code",
          "It guarantees usability",
          "It replaces research",
        ],
        correctIndex: 0,
      },
      {
        question: "Which tool is commonly used for paper sketching?",
        options: ["Pencil and paper", "Database software", "Spreadsheet software", "Video editing software"],
        correctIndex: 0,
      },
      {
        question: "Which statement best describes low-fidelity sketches?",
        options: [
          "Simple representations focused on layout and functionality rather than visual details",
          "Fully interactive prototypes",
          "Final visual designs",
          "Production-ready interfaces",
        ],
        correctIndex: 0,
      },
      {
        question: "Sketching encourages designers to:",
        options: [
          "Explore multiple ideas before choosing one",
          "Settle on the first idea immediately",
          "Avoid collaboration",
          "Ignore user research",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX principle is reinforced through sketching?",
        options: ["Iterative design", "Waterfall development", "Database normalization", "Code optimization"],
        correctIndex: 0,
      },
      {
        question: "Why is it useful to create several sketches for the same problem?",
        options: [
          "Different ideas can be compared before selecting the strongest solution",
          "It increases project costs",
          "It replaces usability testing",
          "It guarantees product success",
        ],
        correctIndex: 0,
      },
      {
        question: "Which technique encourages generating eight ideas in eight minutes?",
        options: ["Crazy Eights", "Card Sorting", "Affinity Mapping", "A/B Testing"],
        correctIndex: 0,
      },
      {
        question: "What should influence the content of design sketches?",
        options: ["User research findings and problem statements", "Personal preferences", "Competitor advertisements", "Office policies"],
        correctIndex: 0,
      },
      {
        question: "Which statement about sketching is TRUE?",
        options: [
          "Artistic skill is not required to create useful UX sketches",
          "Sketches must look like finished products",
          "Sketches replace wireframes",
          "Sketches eliminate usability testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Sketching helps reduce:",
        options: [
          "The cost of making design changes early in the project",
          "User research",
          "Accessibility",
          "Product quality",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX artifact commonly follows paper sketches?",
        options: ["Digital wireframes", "Product launch", "Financial reports", "Marketing campaigns"],
        correctIndex: 0,
      },
      {
        question: "What should be evaluated when reviewing multiple sketches?",
        options: ["Which design best solves the user's problem", "Which sketch has the best artwork", "Which sketch took the longest", "Which sketch contains the most colors"],
        correctIndex: 0,
      },
      {
        question: "Sketching sessions are often most effective when they involve:",
        options: ["Cross-functional collaboration and idea sharing", "Designers working completely alone", "Executives only", "Marketing only"],
        correctIndex: 0,
      },
      {
        question: "Which of the following is NOT an objective of sketching?",
        options: [
          "Producing a fully coded application",
          "Exploring ideas quickly",
          "Visualizing concepts",
          "Supporting collaborative design",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should designers avoid becoming attached to a single sketch?",
        options: [
          "Better ideas often emerge through iteration and feedback",
          "Sketches are final designs",
          "Sketches replace prototypes",
          "Sketches eliminate user testing",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of sketching is to:",
        options: [
          "Explore, communicate, and refine user-centered design ideas before investing in detailed designs",
          "Replace research",
          "Eliminate prototyping",
          "Produce production-ready interfaces",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Food Delivery App Sketching Session",
        description: "A food delivery startup wants to redesign its mobile application. Conduct a structured sketching session with multiple techniques.",
        instructions: [
          "Define the problem statement and user goals.",
          "Run a Crazy Eights exercise to generate diverse ideas.",
          "Create at least 10 paper sketches exploring different layouts and interactions.",
          "Compare concepts and select the strongest solution with justification.",
        ],
        hint: "In Crazy Eights, fold a paper into 8 sections and spend 1 minute on each sketch. The time pressure forces creativity over perfection.",
      },
      {
        title: "Government Digital Service Sketches",
        description: "Choose a government digital service (e.g., passport application, tax filing, driver's license renewal) and develop a complete sketching portfolio.",
        instructions: [
          "Sketch home screen concepts showing different layout approaches.",
          "Explore navigation ideas for the service.",
          "Sketch the task completion flow.",
          "Design error handling screens and accessibility improvements.",
        ],
        hint: "Government services serve a broad audience including elderly users and non-native speakers — your sketches should prioritize clarity and simplicity.",
      },
      {
        title: "Online Learning Platform Sketches",
        description: "A university wants to improve its online learning platform. Create multiple paper sketches for key screens.",
        instructions: [
          "Sketch the student dashboard with different content layouts.",
          "Design course registration flow sketches.",
          "Create assignment submission screen concepts.",
          "Sketch grade viewing options and evaluate each using usability heuristics.",
        ],
        hint: "Use Nielsen's heuristics like consistency, error prevention, and recognition rather than recall to evaluate your sketches.",
      },
      {
        title: "Sketching Technique Comparison",
        description: "Compare freehand sketching, Crazy Eights, and collaborative whiteboard sketching techniques.",
        instructions: [
          "Evaluate each technique on purpose, speed, creativity, and collaboration.",
          "Identify advantages and limitations of each approach.",
          "Determine the best use cases for each technique.",
          "Recommend the most appropriate technique for a startup developing its first MVP.",
        ],
        hint: "Consider trade-offs: individual sketching generates more ideas, while collaborative sketching builds consensus faster.",
      },
      {
        title: "UX Sketching Playbook",
        description: "Design a professional UX Sketching Playbook for your organization.",
        instructions: [
          "Define objectives, required materials, and sketching rules.",
          "Document brainstorming methods including Crazy Eights instructions.",
          "Create collaboration guidelines and evaluation criteria.",
          "Include documentation standards, common mistakes, and best practices.",
        ],
        hint: "The playbook should lower the barrier for non-designers to participate in sketching sessions while maintaining focus on user needs.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 31: Design Sprints
  // ════════════════════════════════════════════
  "design-sprint": {
    questions: [
      {
        question: "What is a Design Sprint?",
        options: [
          "A structured, time-boxed process used to solve design problems through ideation, prototyping, and testing",
          "A software deployment method",
          "A project budgeting technique",
          "A programming language",
        ],
        correctIndex: 0,
      },
      {
        question: "Who originally developed the Design Sprint framework?",
        options: ["Google Ventures (GV)", "Apple", "Microsoft", "IBM"],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of a Design Sprint?",
        options: [
          "To validate ideas quickly before investing in full product development",
          "To replace user research",
          "To eliminate prototyping",
          "To complete software development",
        ],
        correctIndex: 0,
      },
      {
        question: "How long does a traditional Design Sprint typically last?",
        options: ["Five days", "One day", "Two weeks", "One month"],
        correctIndex: 0,
      },
      {
        question: "Which activity is usually completed on Day 1 of a traditional Design Sprint?",
        options: [
          "Understanding the problem and mapping the challenge",
          "Building the final product",
          "Launching the application",
          "Conducting maintenance",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity commonly takes place on Day 2?",
        options: ["Sketching possible solutions", "Writing production code", "Marketing the product", "Deploying the application"],
        correctIndex: 0,
      },
      {
        question: "What is the primary focus of Day 3?",
        options: ["Deciding which solution to prototype", "Conducting usability testing", "Product launch", "Bug fixing"],
        correctIndex: 0,
      },
      {
        question: "Which activity is completed on Day 4?",
        options: ["Building a realistic prototype", "Conducting stakeholder interviews", "Writing technical documentation", "Launching the product"],
        correctIndex: 0,
      },
      {
        question: "What happens on Day 5 of a Design Sprint?",
        options: ["Testing the prototype with real users", "Completing software development", "Marketing the product", "Performing security audits"],
        correctIndex: 0,
      },
      {
        question: "Which UX activity is essential at the end of a Design Sprint?",
        options: ["User testing", "Payroll review", "Financial analysis", "Database optimization"],
        correctIndex: 0,
      },
      {
        question: "Why are Design Sprints considered time-boxed?",
        options: [
          "Every activity has a fixed time limit to encourage focus and decision-making",
          "The project has unlimited time",
          "Developers work independently",
          "Testing is optional",
        ],
        correctIndex: 0,
      },
      {
        question: "Which team members commonly participate in a Design Sprint?",
        options: ["Designers, developers, product managers, researchers, and stakeholders", "Developers only", "Executives only", "Marketing only"],
        correctIndex: 0,
      },
      {
        question: "What is one major benefit of a Design Sprint?",
        options: [
          "It reduces the risk of investing in poor design decisions",
          "It guarantees product success",
          "It eliminates user research",
          "It replaces accessibility testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Which deliverable is typically produced during a Design Sprint?",
        options: ["A testable prototype", "Production-ready software", "Marketing campaign", "Final business report"],
        correctIndex: 0,
      },
      {
        question: "Which activity is most likely to happen during the Sketch phase?",
        options: [
          "Generating multiple solution ideas individually",
          "Writing source code",
          "Creating high-fidelity mockups for launch",
          "Conducting payroll analysis",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should real users participate in the final day of a Design Sprint?",
        options: [
          "To validate whether the proposed solution solves their problems",
          "To replace designers",
          "To estimate development costs",
          "To approve marketing materials",
        ],
        correctIndex: 0,
      },
      {
        question: "A Design Sprint is especially valuable when:",
        options: [
          "A team needs to solve an important problem quickly with limited resources",
          "A product has already launched successfully",
          "Only developers are involved",
          "No research is available",
        ],
        correctIndex: 0,
      },
      {
        question: "Which statement best describes a successful Design Sprint?",
        options: [
          "It provides validated insights that guide future product decisions",
          "It guarantees commercial success",
          "It eliminates the need for iteration",
          "It replaces agile development",
        ],
        correctIndex: 0,
      },
      {
        question: "What should happen if user testing reveals major usability problems during the sprint?",
        options: [
          "Iterate on the design and refine the solution before development",
          "Launch the product immediately",
          "Ignore user feedback",
          "Cancel future testing",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of a Design Sprint is to:",
        options: [
          "Rapidly validate solutions through collaboration, prototyping, and user feedback before significant development investment",
          "Replace UX research",
          "Eliminate iteration",
          "Complete software engineering",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Fintech Peer-to-Payment Design Sprint",
        description: "A fintech startup wants to launch a peer-to-peer payment feature within three months. Design a complete five-day Design Sprint plan.",
        instructions: [
          "Define sprint goals, team roles, and daily agenda.",
          "Plan activities, deliverables, and risks for each day.",
          "Design the user testing plan with success metrics.",
          "Explain how the sprint reduces uncertainty before development.",
        ],
        hint: "Focus the sprint on the riskiest assumption — is the payment flow intuitive enough for non-tech-savvy users?",
      },
      {
        title: "University Registration Design Sprint",
        description: "A university plans to redesign its student registration portal. Develop a Design Sprint playbook covering all five days.",
        instructions: [
          "Plan problem mapping and expert interviews for Day 1.",
          "Design How Might We (HMW) note exercises and Crazy Eights for Day 2.",
          "Create storyboarding and prototype development plans.",
          "Define user testing activities for the final day.",
        ],
        hint: "Map the entire registration ecosystem first — the problem may not be the interface but the underlying process and policies.",
      },
      {
        title: "Design Sprint vs Traditional UX Project",
        description: "Compare a Design Sprint with a traditional UX project approach.",
        instructions: [
          "Analyze differences in duration, team structure, and research approach.",
          "Compare deliverables, risk management, and cost.",
          "Evaluate how decision-making differs between the two approaches.",
          "Recommend situations where each approach is most appropriate.",
        ],
        hint: "Design Sprints excel when you need answers quickly; traditional UX projects are better for complex, long-term strategic problems.",
      },
      {
        title: "Government Digitization Design Sprint",
        description: "A government agency wants to digitize its driver's license renewal process. Develop a complete Design Sprint strategy.",
        instructions: [
          "Address accessibility, security, and regulatory compliance requirements.",
          "Plan stakeholder collaboration activities.",
          "Design the user testing strategy.",
          "Define success metrics specific to government services.",
        ],
        hint: "Government projects have unique constraints — security, accessibility laws, and serving the entire population including non-digital users.",
      },
      {
        title: "Design Sprint Framework",
        description: "Design a professional Design Sprint Framework for your organization.",
        instructions: [
          "Define sprint preparation activities and team roles.",
          "Document the five-day workflow with facilitation guidelines.",
          "Create decision-making techniques and documentation templates.",
          "Include user testing procedures, common mistakes, and post-sprint activities.",
        ],
        hint: "The framework should be flexible enough to adapt to different types of problems while maintaining the core sprint structure.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 32: Laws of UX
  // ════════════════════════════════════════════
  "ux-laws": {
    questions: [
      {
        question: "What are the Laws of UX?",
        options: [
          "A collection of psychological principles and best practices that guide the design of intuitive user experiences",
          "Legal regulations governing software development",
          "Programming standards for front-end development",
          "Financial guidelines for product teams",
        ],
        correctIndex: 0,
      },
      {
        question: "Why do UX Designers use the Laws of UX?",
        options: [
          "To create products that align with human behavior and expectations",
          "To replace user research",
          "To eliminate usability testing",
          "To reduce project budgets",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Law of UX states that the time required to reach a target depends on its size and distance?",
        options: ["Fitts's Law", "Hick's Law", "Jakob's Law", "Miller's Law"],
        correctIndex: 0,
      },
      {
        question: "According to Fitts's Law, which button is easier to select?",
        options: [
          "A large button placed close to the user's cursor or thumb",
          "A small button placed far away",
          "A hidden button",
          "A button with no label",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Law of UX states that increasing the number of choices increases decision time?",
        options: ["Hick's Law", "Tesler's Law", "Pareto Principle", "Parkinson's Law"],
        correctIndex: 0,
      },
      {
        question: "Which design practice helps apply Hick's Law?",
        options: ["Reducing unnecessary menu options", "Adding more navigation items", "Using complex layouts", "Increasing cognitive load"],
        correctIndex: 0,
      },
      {
        question: "Jakob's Law states that:",
        options: [
          "Users expect your product to work similarly to products they already know",
          "Users prefer completely unique interfaces",
          "Every screen should be different",
          "Innovation should replace consistency",
        ],
        correctIndex: 0,
      },
      {
        question: "According to Jakob's Law, why should designers follow familiar design patterns?",
        options: [
          "They reduce the learning curve and improve usability",
          "They eliminate creativity",
          "They replace user testing",
          "They increase development costs",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Law suggests that people can hold only a limited number of items in working memory?",
        options: ["Miller's Law", "Fitts's Law", "Hick's Law", "Parkinson's Law"],
        correctIndex: 0,
      },
      {
        question: "To apply Miller's Law, designers should:",
        options: [
          "Chunk information into smaller, meaningful groups",
          "Display as much information as possible on one screen",
          "Remove navigation",
          "Increase cognitive load",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Law states that users spend most of their time on other websites and expect similar interactions?",
        options: ["Jakob's Law", "Doherty Threshold", "Occam's Razor", "Pareto Principle"],
        correctIndex: 0,
      },
      {
        question: "Tesler's Law suggests that:",
        options: [
          "Every application has inherent complexity that should be managed carefully",
          "More features always improve usability",
          "Complexity should always be transferred to users",
          "Simplicity means removing all functionality",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Law states that users perceive aesthetically pleasing designs as easier to use?",
        options: ["Aesthetic-Usability Effect", "Hick's Law", "Miller's Law", "Pareto Principle"],
        correctIndex: 0,
      },
      {
        question: "What does the Doherty Threshold emphasize?",
        options: [
          "Fast system responses encourage user engagement and productivity",
          "Users enjoy waiting longer",
          "Slow systems improve usability",
          "Loading screens should always exceed 10 seconds",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Law explains that people remember unfinished or interrupted tasks better than completed ones?",
        options: ["Zeigarnik Effect", "Fitts's Law", "Hick's Law", "Miller's Law"],
        correctIndex: 0,
      },
      {
        question: "Which Law states that users are more likely to remember the first and last items in a sequence?",
        options: ["Serial Position Effect", "Parkinson's Law", "Pareto Principle", "Occam's Razor"],
        correctIndex: 0,
      },
      {
        question: "How can the Serial Position Effect be applied in interface design?",
        options: [
          "Place the most important actions at the beginning or end of menus",
          "Hide important actions in the middle of long lists",
          "Use identical layouts for every screen",
          "Increase the number of menu items",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an example of applying Fitts's Law?",
        options: [
          "Making a Submit button larger and easier to tap on mobile devices",
          "Hiding navigation options",
          "Adding more choices to a menu",
          "Using complex animations",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should UX Designers understand psychological principles?",
        options: [
          "They help predict user behavior and improve interaction design",
          "They replace usability testing",
          "They eliminate user research",
          "They guarantee product success",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of applying the Laws of UX is to:",
        options: [
          "Design products that feel intuitive, efficient, and aligned with human behavior",
          "Replace UX research",
          "Eliminate prototyping",
          "Standardize all interfaces regardless of user needs",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking Heuristic Evaluation",
        description: "Conduct a heuristic evaluation of a mobile banking application using at least eight Laws of UX.",
        instructions: [
          "Identify where each law is applied correctly in the app.",
          "Identify usability issues related to each law.",
          "Recommend improvements for each issue found.",
          "Explain the expected impact on user experience for each recommendation.",
        ],
        hint: "Start with Fitts's Law (button sizing), Hick's Law (menu complexity), and Jakob's Law (familiar patterns) — these three often reveal the most issues.",
      },
      {
        title: "E-Commerce Website Laws of UX Evaluation",
        description: "Select an e-commerce website and evaluate how it applies Fitts's Law, Hick's Law, Jakob's Law, Miller's Law, the Aesthetic-Usability Effect, Tesler's Law, and the Doherty Threshold.",
        instructions: [
          "Document where each law is applied correctly.",
          "Identify violations or missed opportunities.",
          "Create a comparative evaluation report.",
          "Support your findings with screenshots or sketches.",
        ],
        hint: "Look at the checkout process specifically — this is where poor application of UX laws most directly impacts business metrics like conversion rate.",
      },
      {
        title: "Government Passport Application Redesign",
        description: "A government agency wants to redesign its online passport application system. Develop a UX strategy showing how each major Law of UX will influence the design.",
        instructions: [
          "Apply Fitts's Law to navigation and form elements.",
          "Use Hick's Law and Miller's Law to simplify forms and information hierarchy.",
          "Apply Jakob's Law for familiar patterns and Tesler's Law for managing complexity.",
          "Address accessibility and mobile responsiveness through UX laws.",
        ],
        hint: "Government forms are notoriously complex — Tesler's Law is particularly important here. Move complexity to the system, not the user.",
      },
      {
        title: "UX Law Comparison and Priority Analysis",
        description: "Compare Fitts's Law, Hick's Law, Jakob's Law, and Miller's Law in depth.",
        instructions: [
          "Explain the definition and psychological foundation of each law.",
          "Describe design implications with real-world examples.",
          "Identify common mistakes and best practices for each.",
          "Recommend which law should receive the highest priority when designing for first-time users.",
        ],
        hint: "First-time users benefit most from Jakob's Law (familiar patterns reduce the learning curve) and Hick's Law (fewer choices reduce overwhelm).",
      },
      {
        title: "Laws of UX Design Guide",
        description: "Design a professional Laws of UX Design Guide for your organization.",
        instructions: [
          "Define major UX laws with practical examples.",
          "Create design checklists and accessibility considerations for each law.",
          "Document common violations with before/after examples.",
          "Include evaluation criteria and a team review process.",
        ],
        hint: "Make the guide actionable — each law should include a checklist designers can use during design reviews rather than just theoretical explanations.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 40: Information Architecture
  // ════════════════════════════════════════════
  "information-architecture": {
    questions: [
      {
        question: "What is Information Architecture (IA) in UX Design?",
        options: [
          "The practice of organizing, structuring, and labeling content so users can easily find information and complete tasks",
          "The process of writing application code",
          "A method for testing software performance",
          "A project budgeting technique",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary goal of Information Architecture?",
        options: [
          "To help users find information quickly and efficiently",
          "To increase the number of pages in a website",
          "To improve server performance",
          "To replace user research",
        ],
        correctIndex: 0,
      },
      {
        question: "Which of the following is a key component of Information Architecture?",
        options: ["Navigation system", "Programming language", "Database server", "Marketing campaign"],
        correctIndex: 0,
      },
      {
        question: "Which Information Architecture principle focuses on grouping related content together?",
        options: ["Organization", "Authentication", "Optimization", "Encryption"],
        correctIndex: 0,
      },
      {
        question: "What is the purpose of a navigation system in Information Architecture?",
        options: [
          "To help users move efficiently between pages and features",
          "To store application data",
          "To improve internet speed",
          "To write business logic",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is content labeling important in Information Architecture?",
        options: [
          "Clear labels help users understand where information is located",
          "Labels improve coding performance",
          "Labels replace usability testing",
          "Labels reduce storage requirements",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX research method is commonly used to improve Information Architecture?",
        options: ["Card sorting", "A/B testing", "Unit testing", "Regression testing"],
        correctIndex: 0,
      },
      {
        question: "What is the purpose of card sorting?",
        options: [
          "To understand how users naturally organize information",
          "To evaluate application performance",
          "To identify software bugs",
          "To improve graphic design",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity helps validate an Information Architecture after it has been designed?",
        options: ["Tree testing", "Source code review", "Stress testing", "Financial auditing"],
        correctIndex: 0,
      },
      {
        question: "What is tree testing used to evaluate?",
        options: [
          "Whether users can easily find information using the proposed navigation structure",
          "The speed of an application",
          "Color accessibility",
          "Database performance",
        ],
        correctIndex: 0,
      },
      {
        question: "Which navigation structure allows users to move from general categories to more specific content?",
        options: ["Hierarchical navigation", "Circular navigation", "Random navigation", "Linear programming"],
        correctIndex: 0,
      },
      {
        question: "Why should Information Architecture be based on user mental models?",
        options: [
          "Users can find information more intuitively when content matches their expectations",
          "It reduces coding effort",
          "It improves marketing",
          "It replaces user testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Information Architecture deliverable visually represents the structure of a website or application?",
        options: ["Sitemap", "Persona", "Empathy map", "Storyboard"],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of a sitemap?",
        options: [
          "To illustrate the organization and hierarchy of content",
          "To define application branding",
          "To document business requirements",
          "To replace prototypes",
        ],
        correctIndex: 0,
      },
      {
        question: "Which characteristic indicates effective Information Architecture?",
        options: [
          "Users can complete tasks without confusion",
          "Pages contain more content than competitors",
          "Navigation menus are as large as possible",
          "Every page contains identical information",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is consistency important in Information Architecture?",
        options: [
          "Consistent organization reduces cognitive load and improves usability",
          "It increases development costs",
          "It replaces accessibility",
          "It eliminates user research",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Information Architecture practice improves accessibility?",
        options: [
          "Using clear labels, logical headings, and predictable navigation",
          "Hiding navigation menus",
          "Using inconsistent page structures",
          "Removing page titles",
        ],
        correctIndex: 0,
      },
      {
        question: "Who should influence Information Architecture decisions?",
        options: ["Users, based on research findings", "Designers' personal opinions only", "Marketing teams only", "Software developers only"],
        correctIndex: 0,
      },
      {
        question: "Why should Information Architecture be evaluated before development?",
        options: [
          "Changes are easier and less expensive before implementation",
          "It eliminates the need for testing",
          "It guarantees usability",
          "It replaces wireframes",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of Information Architecture is to:",
        options: [
          "Create a logical, intuitive structure that enables users to find information and complete tasks efficiently",
          "Replace user research",
          "Finalize visual branding",
          "Improve database performance",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking IA Development",
        description: "Develop a complete Information Architecture for a mobile banking application including content inventory, user goals, sitemap, navigation structure, content hierarchy, labeling system, and accessibility considerations.",
        instructions: [
          "Conduct a content inventory of all banking features and information.",
          "Define user goals for different customer types.",
          "Create a sitemap showing the complete content hierarchy.",
          "Design navigation structure and labeling system with accessibility in mind.",
        ],
        hint: "Banking apps must balance comprehensive financial features with simplicity. Group related actions (transfers, payments, history) under clear categories.",
      },
      {
        title: "University Student Portal IA Redesign",
        description: "A university wants to redesign its student portal. Create a complete IA including sitemap, global and local navigation, search strategy, card sorting plan, and tree testing plan.",
        instructions: [
          "Design a sitemap covering all student tasks (registration, grades, payments, schedules).",
          "Create global and local navigation systems.",
          "Develop a search strategy for finding courses and resources.",
          "Plan card sorting and tree testing activities to validate the structure.",
        ],
        hint: "Students visit the portal for different reasons at different times — registration period, grade release, payment deadlines. The IA should support time-sensitive tasks.",
      },
      {
        title: "E-Commerce IA Evaluation",
        description: "Choose an e-commerce website and evaluate its Information Architecture including navigation, product categories, search, filters, labels, breadcrumbs, and mobile navigation.",
        instructions: [
          "Analyze the current navigation and product categorization system.",
          "Evaluate search functionality and filtering options.",
          "Assess label clarity and breadcrumb navigation.",
          "Recommend improvements supported by UX research.",
        ],
        hint: "E-commerce sites with thousands of products need especially careful IA. Look at how the site handles category overlap (e.g., a product that belongs in multiple categories).",
      },
      {
        title: "IA Model Comparison",
        description: "Compare hierarchical, sequential, matrix, and database-driven Information Architecture models. For each model, explain the definition, structure, advantages, limitations, typical use cases, and real-world examples.",
        instructions: [
          "Define each IA model and describe its structure.",
          "Evaluate advantages and limitations of each.",
          "Provide real-world examples for each model.",
          "Recommend the most appropriate model for mobile banking, online learning, government services, and e-commerce.",
        ],
        hint: "Most large products use a hybrid approach — hierarchical navigation for browsing, search for finding, and database-driven for personalized content.",
      },
      {
        title: "Information Architecture Framework",
        description: "Design a professional Information Architecture Framework for your UX team including objectives, content inventory process, organization strategy, labeling guidelines, navigation standards, sitemap conventions, card sorting methodology, tree testing workflow, accessibility checklist, and review process.",
        instructions: [
          "Define IA objectives and content inventory process.",
          "Create organization strategy and labeling guidelines.",
          "Document navigation standards and sitemap conventions.",
          "Include card sorting methodology, tree testing workflow, and accessibility checklist.",
        ],
        hint: "A good IA framework helps teams make consistent structural decisions across products, especially important when multiple teams contribute to the same ecosystem.",
      },
    ],
  },
  // ════════════════════════════════════════════
  "intro-wireframing": {
    questions: [
      {
        question: "What is a wireframe in UX Design?",
        options: [
          "A low-fidelity visual blueprint that shows the structure, layout, and functionality of a digital interface",
          "A fully coded application",
          "A marketing strategy",
          "A financial report",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of a wireframe?",
        options: [
          "To communicate the layout and functionality of a design before visual styling begins",
          "To define the brand colors",
          "To replace usability testing",
          "To write source code",
        ],
        correctIndex: 0,
      },
      {
        question: "At which stage of the UX process are wireframes typically created?",
        options: [
          "After ideation and user flows, before high-fidelity design",
          "After product launch",
          "During software maintenance",
          "During marketing campaigns",
        ],
        correctIndex: 0,
      },
      {
        question: "Which element is commonly included in a wireframe?",
        options: ["Navigation structure", "Final color palette", "Brand photography", "Animation effects"],
        correctIndex: 0,
      },
      {
        question: "What type of wireframe focuses on structure rather than visual appearance?",
        options: ["Low-fidelity wireframe", "High-fidelity prototype", "Final UI mockup", "Marketing storyboard"],
        correctIndex: 0,
      },
      {
        question: "Which statement best describes a low-fidelity wireframe?",
        options: [
          "A simple layout showing content placement and functionality without detailed styling",
          "A production-ready interface",
          "A fully interactive application",
          "A completed visual design",
        ],
        correctIndex: 0,
      },
      {
        question: "Why are wireframes created before high-fidelity mockups?",
        options: [
          "They allow teams to validate structure and usability before investing in visual design",
          "They finalize branding",
          "They eliminate user testing",
          "They replace prototypes",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX artifact commonly provides input for creating wireframes?",
        options: ["User flow", "Payroll report", "Financial statement", "Database schema"],
        correctIndex: 0,
      },
      {
        question: "Which design question does a wireframe primarily answer?",
        options: [
          "Where should information and interface elements be placed?",
          "Which font family should be used?",
          "What marketing campaign should be launched?",
          "What programming language should be selected?",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should wireframes avoid excessive visual detail?",
        options: [
          "To keep the focus on layout, hierarchy, and functionality",
          "To reduce accessibility",
          "To finalize branding",
          "To increase project costs",
        ],
        correctIndex: 0,
      },
      {
        question: "Which stakeholder benefits from reviewing wireframes?",
        options: ["Designers, developers, product managers, clients, and stakeholders", "Developers only", "Human Resources only", "Finance teams only"],
        correctIndex: 0,
      },
      {
        question: "Wireframes help identify:",
        options: [
          "Navigation and usability issues early in the design process",
          "Programming errors",
          "Financial risks",
          "Marketing opportunities",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity commonly follows wireframing?",
        options: ["Creating prototypes", "Product launch", "Software maintenance", "Marketing analysis"],
        correctIndex: 0,
      },
      {
        question: "What is one advantage of low-fidelity wireframes?",
        options: [
          "They are quick to create and easy to revise",
          "They require advanced graphic design skills",
          "They automatically generate code",
          "They replace user research",
        ],
        correctIndex: 0,
      },
      {
        question: "Which tool is commonly used to create digital wireframes?",
        options: ["Figma", "Microsoft Excel", "Adobe Premiere Pro", "Visual Studio Code"],
        correctIndex: 0,
      },
      {
        question: "Which statement about wireframes is TRUE?",
        options: [
          "They emphasize functionality over visual aesthetics",
          "They always include final branding",
          "They replace prototypes",
          "They are created after development",
        ],
        correctIndex: 0,
      },
      {
        question: "A wireframe should primarily be influenced by:",
        options: ["User research, personas, and user flows", "Personal design preferences", "Competitor logos", "Office layout"],
        correctIndex: 0,
      },
      {
        question: "Why are annotations sometimes added to wireframes?",
        options: [
          "To explain interactions, behaviors, and functionality",
          "To improve visual appeal",
          "To replace user testing",
          "To define marketing content",
        ],
        correctIndex: 0,
      },
      {
        question: "Which characteristic makes a wireframe effective?",
        options: [
          "Clear information hierarchy and logical content organization",
          "Detailed visual styling",
          "Extensive animations",
          "Complex illustrations",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of wireframing is to:",
        options: [
          "Create a clear structural foundation for designing user-centered digital products",
          "Replace prototypes",
          "Finalize branding",
          "Produce production-ready interfaces",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking Wireframe Set",
        description: "Create a complete set of low-fidelity wireframes for a mobile banking application including splash screen, login, dashboard, money transfer, transaction history, settings, and error states.",
        instructions: [
          "Sketch or design each screen with clear information hierarchy.",
          "Annotate each screen to explain user interactions and navigation.",
          "Add accessibility considerations for each screen.",
          "Explain how each screen supports user goals.",
        ],
        hint: "Start with paper sketches for each screen, then move to digital wireframes. Focus on layout and flow, not visual polish.",
      },
      {
        title: "University Online Learning Portal Wireframes",
        description: "A university wants to redesign its online learning portal. Develop wireframes for the student dashboard, course catalog, assignment submission, gradebook, notifications, and user profile.",
        instructions: [
          "Create wireframes showing clear information hierarchy for each screen.",
          "Explain how each screen supports user goals.",
          "Ensure the navigation structure is consistent across all screens.",
          "Include mobile-responsive layout considerations.",
        ],
        hint: "Consider different user needs: students need quick access to grades and assignments, while instructors need course management tools.",
      },
      {
        title: "E-Commerce Homepage Wireframe Redesign",
        description: "Analyze the homepage of an existing e-commerce website and redesign it with a new low-fidelity wireframe.",
        instructions: [
          "Identify issues in the current information hierarchy and navigation.",
          "Create a wireframe that improves layout, search, and calls-to-action.",
          "Add accessibility improvements to the design.",
          "Ensure the wireframe is mobile-responsive.",
        ],
        hint: "E-commerce homepages often suffer from too many competing calls-to-action. Prioritize one primary user goal per section.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 34: Benefit of Wireframing
  // ════════════════════════════════════════════
  "benefit-wireframing": {
    questions: [
      {
        question: "What is the primary benefit of wireframing in UX design?",
        options: [
          "It helps teams visualize and validate layout, structure, and functionality before development.",
          "It automatically generates source code.",
          "It replaces usability testing.",
          "It finalizes branding.",
        ],
        correctIndex: 0,
      },
      {
        question: "Wireframes are primarily used to:",
        options: [
          "Explore design ideas without focusing on visual styling.",
          "Create final marketing assets.",
          "Produce production-ready interfaces.",
          "Build backend systems.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which project phase benefits most from wireframing?",
        options: ["Early design and planning", "Product launch", "Maintenance", "Customer support"],
        correctIndex: 0,
      },
      {
        question: "How do wireframes reduce project costs?",
        options: [
          "They make it easier to identify and fix design issues before development begins.",
          "They reduce employee salaries.",
          "They eliminate testing.",
          "They shorten marketing campaigns.",
        ],
        correctIndex: 0,
      },
      {
        question: "Wireframes help UX teams:",
        options: ["Validate navigation and information hierarchy.", "Improve database performance.", "Increase advertising reach.", "Manage project budgets."],
        correctIndex: 0,
      },
      {
        question: "Why are wireframes considered low-risk design artifacts?",
        options: ["They are inexpensive and easy to revise.", "They are production-ready.", "They cannot be modified.", "They replace final interfaces."],
        correctIndex: 0,
      },
      {
        question: "Which benefit of wireframing improves communication among stakeholders?",
        options: [
          "Providing a shared visual understanding of the product structure",
          "Producing finished graphics",
          "Generating software documentation automatically",
          "Eliminating meetings",
        ],
        correctIndex: 0,
      },
      {
        question: "Wireframes are especially useful because they:",
        options: [
          "Encourage rapid iteration before development.",
          "Eliminate accessibility requirements.",
          "Replace user interviews.",
          "Guarantee usability.",
        ],
        correctIndex: 0,
      },
      {
        question: "A UX team uses wireframes to:",
        options: ["Test layout concepts before creating prototypes.", "Finalize typography.", "Publish the application.", "Develop APIs."],
        correctIndex: 0,
      },
      {
        question: "Which of the following is NOT a benefit of wireframing?",
        options: ["Automatically writing application code", "Improving collaboration", "Clarifying functionality", "Reducing redesign costs"],
        correctIndex: 0,
      },
      {
        question: "Wireframes allow designers to focus primarily on:",
        options: ["Structure and user flow", "Brand identity", "Marketing content", "Animation effects"],
        correctIndex: 0,
      },
      {
        question: "Why should usability issues be identified during wireframing?",
        options: ["They are less expensive to fix before development.", "They become impossible to fix later.", "They eliminate the need for testing.", "They improve branding."],
        correctIndex: 0,
      },
      {
        question: "How do wireframes support developers?",
        options: [
          "By providing a clear blueprint of screen layouts and functionality",
          "By generating backend logic",
          "By replacing technical specifications",
          "By writing documentation",
        ],
        correctIndex: 0,
      },
      {
        question: "Wireframes improve collaboration because they:",
        options: ["Create a common reference point for discussions.", "Replace stakeholder meetings.", "Remove the need for designers.", "Eliminate product requirements."],
        correctIndex: 0,
      },
      {
        question: "Why is feedback easier during the wireframing stage?",
        options: ["Changes can be made quickly before detailed design begins.", "The interface is already complete.", "Development has finished.", "Marketing materials have been published."],
        correctIndex: 0,
      },
      {
        question: "Wireframing contributes to better accessibility by:",
        options: [
          "Allowing designers to evaluate layout and navigation early.",
          "Automatically meeting accessibility standards.",
          "Eliminating accessibility testing.",
          "Replacing screen reader testing.",
        ],
        correctIndex: 0,
      },
      {
        question: "A successful wireframe should help answer which question?",
        options: [
          "Does the layout effectively support users in completing their goals?",
          "Which logo should be used?",
          "What marketing campaign should be launched?",
          "Which programming language should be selected?",
        ],
        correctIndex: 0,
      },
      {
        question: "Which outcome demonstrates the value of wireframing?",
        options: [
          "Reduced design revisions during development",
          "Increased coding complexity",
          "More navigation levels",
          "Longer development cycles",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate benefit of wireframing is to:",
        options: [
          "Build a strong structural foundation for an effective user experience before visual design and development.",
          "Replace usability testing.",
          "Finalize product branding.",
          "Produce production-ready software.",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Wireframing Benefit Analysis Report",
        description: "A startup is building a mobile healthcare application. Prepare a report explaining how wireframing can reduce development costs and improve collaboration.",
        instructions: [
          "List the key advantages of wireframing for the project.",
          "Identify risks of skipping wireframing before development.",
          "Explain how each stakeholder benefits from reviewing wireframes.",
          "Include examples from real-world projects and success metrics.",
        ],
        hint: "Healthcare applications have strict usability requirements — wireframing helps catch accessibility and compliance issues early.",
      },
      {
        title: "Wireframing Standard for UX Teams",
        description: "Design a professional Wireframing Standard for your UX team including naming conventions, grid system, annotation guidelines, accessibility checklist, and review process.",
        instructions: [
          "Define naming conventions and grid system standards.",
          "Create annotation guidelines for documenting interactions.",
          "Develop an accessibility checklist for wireframe reviews.",
          "Establish version control practices and review process.",
        ],
        hint: "A good wireframing standard ensures consistency across designers and makes handoff to developers smoother.",
      },
      {
        title: "Government Service Wireframing Proposal",
        description: "A government agency wants to redesign its online driver's license renewal service. Develop a proposal demonstrating how wireframing should be integrated into the UX process.",
        instructions: [
          "Create a timeline showing when wireframing activities occur.",
          "Define team responsibilities for wireframe creation and review.",
          "List deliverables for each wireframing phase.",
          "Plan user testing activities to validate wireframes.",
        ],
        hint: "Government services must be accessible to all citizens. Include specific accessibility testing checkpoints in your plan.",
      },
      {
        title: "Wireframing vs No Wireframing Comparison",
        description: "Compare projects completed with wireframing versus projects completed without wireframing in terms of development cost, rework, communication, usability, accessibility, and time to market.",
        instructions: [
          "Analyze differences in development cost and amount of rework.",
          "Compare communication effectiveness and stakeholder feedback.",
          "Evaluate usability and accessibility outcomes.",
          "Recommend best practices for organizations adopting UX workflows.",
        ],
        hint: "Research shows that fixing a usability issue found during wireframing costs significantly less than fixing the same issue found during development.",
      },
      {
        title: "Wireframing Benefits Framework",
        description: "Develop a professional Wireframing Benefits Framework for your UX team including objectives, expected outcomes, team responsibilities, evaluation criteria, and success indicators.",
        instructions: [
          "Define wireframing objectives and expected outcomes for projects.",
          "Document team responsibilities and communication strategy.",
          "Create evaluation criteria for wireframe quality.",
          "Include accessibility considerations and risk mitigation strategies.",
        ],
        hint: "The framework should help teams justify wireframing effort to stakeholders by linking it to measurable outcomes like reduced development rework.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 35: Gestalt Principles When Wireframing
  // ════════════════════════════════════════════
  "gestalt-wireframing": {
    questions: [
      {
        question: "What are the Gestalt Principles in UX Design?",
        options: [
          "Psychological principles that explain how people perceive and organize visual elements into meaningful groups",
          "Software development methodologies",
          "Project management techniques",
          "Database design standards",
        ],
        correctIndex: 0,
      },
      {
        question: "Why are Gestalt Principles important in wireframing?",
        options: [
          "They help designers create layouts that users can easily understand and navigate.",
          "They replace usability testing.",
          "They determine programming languages.",
          "They improve server performance.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Gestalt Principle states that elements placed close together are perceived as related?",
        options: ["Proximity", "Similarity", "Closure", "Figure-Ground"],
        correctIndex: 0,
      },
      {
        question: "Which Gestalt Principle explains that similar elements are perceived as belonging together?",
        options: ["Similarity", "Continuity", "Symmetry", "Common Region"],
        correctIndex: 0,
      },
      {
        question: "A designer groups navigation links closely together in a menu. Which Gestalt Principle is being applied?",
        options: ["Proximity", "Closure", "Figure-Ground", "Common Fate"],
        correctIndex: 0,
      },
      {
        question: "Using the same color and icon style for all primary buttons demonstrates which Gestalt Principle?",
        options: ["Similarity", "Continuity", "Closure", "Pragnanz"],
        correctIndex: 0,
      },
      {
        question: "Which Gestalt Principle describes the tendency to perceive incomplete shapes as complete?",
        options: ["Closure", "Similarity", "Proximity", "Symmetry"],
        correctIndex: 0,
      },
      {
        question: "Which principle helps users distinguish the main content from the background?",
        options: ["Figure-Ground", "Common Fate", "Proximity", "Continuity"],
        correctIndex: 0,
      },
      {
        question: "Which Gestalt Principle suggests that the human eye naturally follows smooth, continuous paths?",
        options: ["Continuity", "Closure", "Similarity", "Proximity"],
        correctIndex: 0,
      },
      {
        question: "A form arranges input fields in a clear top-to-bottom sequence to guide users naturally. Which principle is applied?",
        options: ["Continuity", "Closure", "Figure-Ground", "Similarity"],
        correctIndex: 0,
      },
      {
        question: "Which Gestalt Principle states that elements enclosed within the same boundary are perceived as related?",
        options: ["Common Region", "Similarity", "Figure-Ground", "Closure"],
        correctIndex: 0,
      },
      {
        question: "A card component uses a border to group an image, title, and button together. Which principle is demonstrated?",
        options: ["Common Region", "Continuity", "Closure", "Symmetry"],
        correctIndex: 0,
      },
      {
        question: "Which Gestalt Principle explains that objects moving in the same direction are perceived as related?",
        options: ["Common Fate", "Similarity", "Figure-Ground", "Proximity"],
        correctIndex: 0,
      },
      {
        question: "Which Gestalt Principle suggests that users tend to perceive balanced layouts as more organized?",
        options: ["Symmetry", "Closure", "Similarity", "Continuity"],
        correctIndex: 0,
      },
      {
        question: "What is the Principle of Pragnanz (Law of Simplicity)?",
        options: [
          "People perceive the simplest and most stable interpretation of a visual design.",
          "Users prefer complex interfaces.",
          "Interfaces should contain as many elements as possible.",
          "Symmetry should always be avoided.",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should designers apply Gestalt Principles in wireframes?",
        options: [
          "To improve visual organization and reduce users' cognitive load.",
          "To eliminate accessibility testing.",
          "To replace user research.",
          "To improve coding efficiency.",
        ],
        correctIndex: 0,
      },
      {
        question: "Which Gestalt Principle is most directly related to visual hierarchy?",
        options: ["Figure-Ground", "Common Fate", "Closure", "Symmetry"],
        correctIndex: 0,
      },
      {
        question: "A designer intentionally groups related settings into separate cards instead of displaying everything together. Which principle is primarily being used?",
        options: ["Proximity", "Figure-Ground", "Common Region", "Both Proximity and Common Region"],
        correctIndex: 3,
      },
      {
        question: "Which statement best describes the relationship between Gestalt Principles and usability?",
        options: [
          "Proper application of Gestalt Principles makes interfaces easier to understand and navigate.",
          "Gestalt Principles replace usability testing.",
          "Gestalt Principles focus only on aesthetics.",
          "Gestalt Principles eliminate accessibility requirements.",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of applying Gestalt Principles during wireframing is to:",
        options: [
          "Create interfaces that naturally align with how users perceive, organize, and interpret visual information.",
          "Replace user research.",
          "Finalize branding.",
          "Reduce development costs through automation.",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Gestalt Principles Homepage Evaluation",
        description: "Evaluate the homepage of a mobile banking application using eight Gestalt Principles: Proximity, Similarity, Closure, Figure-Ground, Continuity, Common Region, Symmetry, and Pragnanz.",
        instructions: [
          "Identify where each principle is applied correctly.",
          "Identify usability issues related to each principle.",
          "Recommend improvements for each issue.",
          "Explain the expected impact on user experience.",
        ],
        hint: "Pay special attention to Common Region — cards and containers that group related information significantly improve scannability.",
      },
      {
        title: "Gestalt Principles Student Portal Strategy",
        description: "A university wants to redesign its online student portal. Develop a wireframe strategy demonstrating how Gestalt Principles will improve navigation, information hierarchy, forms, accessibility, dashboard layout, and mobile responsiveness.",
        instructions: [
          "Explain how Proximity and Similarity will improve navigation grouping.",
          "Use Common Region to organize dashboard content into meaningful cards.",
          "Apply Figure-Ground to create clear visual hierarchy.",
          "Use Continuity to guide users through forms and multi-step processes.",
        ],
        hint: "The student portal serves many different tasks — Gestalt Principles help users quickly find what they need without reading every label.",
      },
      {
        title: "E-Commerce Gestalt Analysis",
        description: "Choose an e-commerce website and analyze how Gestalt Principles influence product listings, shopping cart, checkout, search, navigation, and promotional banners.",
        instructions: [
          "Identify Gestalt Principle applications in each section.",
          "Evaluate effectiveness and identify violations.",
          "Create sketches illustrating recommended improvements.",
          "Explain how improvements will impact user behavior.",
        ],
        hint: "Look at how products are displayed — inconsistent spacing (violating Proximity) or mixed card styles (violating Similarity) can confuse users.",
      },
      {
        title: "Gestalt Principles Comparison",
        description: "Compare Proximity, Similarity, Closure, Figure-Ground, Continuity, and Common Region. For each principle, explain the definition, psychological foundation, UX application, real-world example, common mistakes, and best practices.",
        instructions: [
          "Provide a detailed definition and psychological foundation for each principle.",
          "Describe UX application with real-world interface examples.",
          "Identify common mistakes designers make with each principle.",
          "Recommend which principle has the greatest influence on navigation design.",
        ],
        hint: "Proximity and Similarity are the most fundamental — they form the basis of how users perceive relationships between elements without conscious effort.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 36: Wireframing for Mobile
  // ════════════════════════════════════════════
  "paper-wireframe": {
    questions: [
      {
        question: "What is a paper wireframe?",
        options: [
          "A hand-drawn representation of a user interface used to visualize layout and functionality before creating digital designs",
          "A fully interactive prototype",
          "A production-ready application",
          "A marketing mockup",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of creating a paper wireframe?",
        options: [
          "To quickly explore and communicate interface ideas before investing in digital design",
          "To write application code",
          "To finalize branding",
          "To conduct marketing research",
        ],
        correctIndex: 0,
      },
      {
        question: "Which material is most commonly used to create a paper wireframe?",
        options: ["Paper and pencil", "Spreadsheet software", "Video editing software", "Database software"],
        correctIndex: 0,
      },
      {
        question: "Paper wireframes are generally considered:",
        options: ["Low-fidelity design artifacts", "High-fidelity prototypes", "Finished visual designs", "Marketing assets"],
        correctIndex: 0,
      },
      {
        question: "What should a paper wireframe emphasize?",
        options: ["Layout, structure, and functionality", "Colors and animations", "Typography and branding", "Marketing copy"],
        correctIndex: 0,
      },
      {
        question: "Which UX artifact commonly provides guidance for drawing a paper wireframe?",
        options: ["User flow", "Payroll report", "Financial statement", "Technical documentation"],
        correctIndex: 0,
      },
      {
        question: "Why should designers avoid focusing on visual details in paper wireframes?",
        options: [
          "To encourage rapid iteration and feedback on functionality",
          "To finalize branding early",
          "To reduce accessibility",
          "To replace prototypes",
        ],
        correctIndex: 0,
      },
      {
        question: "What is one major advantage of paper wireframing?",
        options: [
          "Design ideas can be modified quickly with minimal cost",
          "It automatically generates code",
          "It guarantees usability",
          "It replaces digital prototypes",
        ],
        correctIndex: 0,
      },
      {
        question: "Which screen element is typically represented by a simple rectangle in a paper wireframe?",
        options: ["Image placeholder", "Animation", "Video playback", "Source code"],
        correctIndex: 0,
      },
      {
        question: "When creating paper wireframes, designers should primarily focus on:",
        options: ["User goals and task completion", "Final brand identity", "Marketing strategy", "Programming language"],
        correctIndex: 0,
      },
      {
        question: "Why are labels often added to paper wireframes?",
        options: ["To explain interface elements and functionality", "To improve visual aesthetics", "To replace user testing", "To define backend logic"],
        correctIndex: 0,
      },
      {
        question: "Paper wireframes are particularly useful during:",
        options: ["Early ideation and concept exploration", "Product launch", "Software maintenance", "Marketing campaigns"],
        correctIndex: 0,
      },
      {
        question: "Which activity commonly follows paper wireframing?",
        options: ["Creating digital wireframes", "Launching the application", "Conducting financial audits", "Writing production code"],
        correctIndex: 0,
      },
      {
        question: "Why should multiple paper wireframes be created for the same screen?",
        options: [
          "To compare different design solutions before selecting one",
          "To increase documentation",
          "To eliminate usability testing",
          "To satisfy branding requirements",
        ],
        correctIndex: 0,
      },
      {
        question: "What role does user feedback play during paper wireframing?",
        options: [
          "It helps improve the layout before investing in detailed design",
          "It replaces prototypes",
          "It is unnecessary",
          "It is collected only after launch",
        ],
        correctIndex: 0,
      },
      {
        question: "Which characteristic makes a paper wireframe effective?",
        options: [
          "Clear organization and logical information hierarchy",
          "Detailed illustrations",
          "Final color palette",
          "High-resolution graphics",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX principle is reinforced by paper wireframing?",
        options: ["Iterative design", "Waterfall development", "Database optimization", "Marketing automation"],
        correctIndex: 0,
      },
      {
        question: "Paper wireframes support collaboration because they:",
        options: [
          "Encourage discussion and rapid design changes",
          "Replace stakeholder meetings",
          "Eliminate usability testing",
          "Generate production-ready assets",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is paper wireframing considered a user-centered activity?",
        options: [
          "It allows designers to test ideas based on user needs before development",
          "It focuses only on aesthetics",
          "It eliminates research",
          "It guarantees accessibility",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of drawing a paper wireframe is to:",
        options: [
          "Explore and validate interface concepts quickly before creating digital designs and prototypes",
          "Produce final user interfaces",
          "Replace usability testing",
          "Complete software development",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking Paper Wireframes",
        description: "Create a complete set of paper wireframes for a mobile banking application covering welcome screen, sign up, login, dashboard, transfer money, pay bills, transaction history, settings, and error states.",
        instructions: [
          "Draw each screen on paper with clear layout and structure.",
          "Annotate each screen to explain layout decisions and user interactions.",
          "Add accessibility considerations to your annotations.",
          "Review and refine based on usability principles.",
        ],
        hint: "Use simple rectangles for images, lines for text, and arrows for navigation. The goal is clarity, not artistry.",
      },
      {
        title: "University Admission Portal Paper Wireframes",
        description: "A university is redesigning its online admission portal. Develop paper wireframes for the homepage, application form, document upload, payment, application tracking, and profile management.",
        instructions: [
          "Sketch each screen focusing on information hierarchy.",
          "Ensure the flow between screens is logical and efficient.",
          "Label all interface elements clearly.",
          "Explain how each screen simplifies task completion for applicants.",
        ],
        hint: "Admission applications are stressful — every unnecessary field or confusing step increases abandonment. Keep forms simple.",
      },
      {
        title: "Passport Renewal Paper Wireframes",
        description: "A government agency plans to digitize passport renewal. Create paper wireframes for the complete user journey including eligibility check, application form, appointment booking, payment, confirmation, and status tracking.",
        instructions: [
          "Design each screen to minimize user effort and confusion.",
          "Include clear progress indicators showing where the user is in the process.",
          "Add accessibility features like clear labels and sufficient contrast.",
          "Explain how your wireframes improve usability and information hierarchy.",
        ],
        hint: "Government services must work for users of all ages and technical abilities. Design for the least tech-savvy user first.",
      },
      {
        title: "Paper vs Digital Wireframe Comparison",
        description: "Compare paper wireframes and digital wireframes based on speed, cost, flexibility, collaboration, stakeholder communication, user testing, accessibility planning, and documentation.",
        instructions: [
          "Evaluate the advantages and limitations of each approach.",
          "Analyze how each supports collaboration and iteration.",
          "Compare their effectiveness for user testing and stakeholder reviews.",
          "Recommend when each should be used during the UX design lifecycle.",
        ],
        hint: "Paper is best for early exploration when ideas change rapidly; digital is better for detailed iteration and remote collaboration.",
      },
      {
        title: "Paper Wireframing Toolkit",
        description: "Design a professional Paper Wireframing Toolkit for your UX team including objectives, required materials, standard symbols, annotation guidelines, sketching conventions, accessibility checklist, and review process.",
        instructions: [
          "Define standard symbols and annotation conventions for consistency.",
          "Create an accessibility checklist specifically for paper wireframes.",
          "Document the review process and collaboration workflow.",
          "Include common mistakes and best practices with examples.",
        ],
        hint: "Standardizing symbols (e.g., a crosshatch rectangle = image, wavy lines = text) helps teams read each other's wireframes consistently.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 37: Wireframing for Desktop
  // ════════════════════════════════════════════
  "digital-wireframe": {
    questions: [
      {
        question: "What is a digital wireframe?",
        options: [
          "A low- or mid-fidelity interface created using digital design software to represent the structure and functionality of a product",
          "A fully coded application",
          "A marketing presentation",
          "A database schema",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the primary purpose of creating a digital wireframe?",
        options: [
          "To transform paper concepts into structured digital layouts for review and iteration",
          "To finalize the product's branding",
          "To generate source code automatically",
          "To launch the application",
        ],
        correctIndex: 0,
      },
      {
        question: "Which tool is commonly used to create digital wireframes?",
        options: ["Figma", "Microsoft Word", "Adobe Premiere Pro", "MySQL"],
        correctIndex: 0,
      },
      {
        question: "A digital wireframe should primarily focus on:",
        options: ["Layout, navigation, and content organization", "Final animations", "Brand photography", "Marketing slogans"],
        correctIndex: 0,
      },
      {
        question: "Why are digital wireframes easier to modify than paper wireframes?",
        options: [
          "Elements can be edited, duplicated, aligned, and rearranged quickly",
          "They cannot be changed after creation",
          "They automatically become prototypes",
          "They eliminate design reviews",
        ],
        correctIndex: 0,
      },
      {
        question: "Which feature of design software improves consistency across wireframes?",
        options: ["Components", "Videos", "Audio effects", "Spreadsheets"],
        correctIndex: 0,
      },
      {
        question: "What is the benefit of using layout grids when creating digital wireframes?",
        options: ["They improve alignment, spacing, and consistency", "They increase cognitive load", "They replace usability testing", "They generate code"],
        correctIndex: 0,
      },
      {
        question: "Digital wireframes should be based on:",
        options: ["User research, user flows, and information architecture", "Personal preferences", "Marketing campaigns", "Competitor logos"],
        correctIndex: 0,
      },
      {
        question: "Why should digital wireframes include placeholder content?",
        options: [
          "To demonstrate layout without distracting reviewers with final copy",
          "To finalize product messaging",
          "To improve branding",
          "To replace prototypes",
        ],
        correctIndex: 0,
      },
      {
        question: "Which activity commonly follows digital wireframing?",
        options: ["Building a low-fidelity prototype", "Product launch", "Software deployment", "Marketing analysis"],
        correctIndex: 0,
      },
      {
        question: "Why are reusable components valuable in digital wireframes?",
        options: ["They ensure consistency and speed up design", "They replace accessibility", "They eliminate collaboration", "They reduce research"],
        correctIndex: 0,
      },
      {
        question: "Which feature allows multiple designers to work on the same wireframe simultaneously?",
        options: ["Real-time collaboration", "File compression", "Offline editing", "Version deletion"],
        correctIndex: 0,
      },
      {
        question: "Why should annotations be included in digital wireframes?",
        options: [
          "To explain interactions, behaviors, and functionality",
          "To improve aesthetics",
          "To replace prototypes",
          "To generate code",
        ],
        correctIndex: 0,
      },
      {
        question: "Which characteristic makes a digital wireframe effective?",
        options: [
          "Clear hierarchy, consistent spacing, and logical navigation",
          "High-resolution graphics",
          "Complex animations",
          "Detailed branding",
        ],
        correctIndex: 0,
      },
      {
        question: "Why is feedback easier with digital wireframes?",
        options: [
          "Revisions can be made quickly and shared instantly",
          "Changes require rebuilding the interface",
          "Only developers can edit them",
          "They cannot be versioned",
        ],
        correctIndex: 0,
      },
      {
        question: "What is the role of auto layout (or similar tools) in digital wireframing?",
        options: [
          "To maintain responsive spacing and alignment efficiently",
          "To generate application code",
          "To create animations automatically",
          "To replace accessibility testing",
        ],
        correctIndex: 0,
      },
      {
        question: "Why should digital wireframes be tested with users?",
        options: [
          "To validate layout and usability before high-fidelity design",
          "To finalize the logo",
          "To replace prototypes",
          "To determine programming languages",
        ],
        correctIndex: 0,
      },
      {
        question: "Which UX principle is reinforced by digital wireframing?",
        options: ["Iterative design", "Waterfall development", "Database normalization", "Marketing automation"],
        correctIndex: 0,
      },
      {
        question: "Digital wireframes improve communication by:",
        options: [
          "Providing a visual reference for designers, developers, and stakeholders",
          "Eliminating meetings",
          "Replacing technical documentation",
          "Reducing accessibility",
        ],
        correctIndex: 0,
      },
      {
        question: "The ultimate purpose of digital wireframing is to:",
        options: [
          "Develop an accurate and collaborative blueprint that prepares a design for prototyping and user testing",
          "Produce production-ready software",
          "Replace user research",
          "Finalize branding",
        ],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking Digital Wireframes",
        description: "Create a complete digital wireframe for a mobile banking application using a UX design tool of your choice, covering onboarding, login, dashboard, money transfer, transaction history, notifications, and settings.",
        instructions: [
          "Design each screen with consistent spacing and alignment using a grid system.",
          "Use reusable components for common elements like buttons and input fields.",
          "Annotate each screen to explain layout decisions and interaction patterns.",
          "Include accessibility considerations for each screen.",
        ],
        hint: "Leverage your design tool's component system — creating a master component for buttons, cards, and inputs will save significant time.",
      },
      {
        title: "University Course Registration Digital Wireframes",
        description: "A university wants to digitize its course registration system. Develop a complete digital wireframe set including student dashboard, course search, registration, payment, timetable, and academic profile.",
        instructions: [
          "Create wireframes with clear information hierarchy and logical navigation.",
          "Use layout grids to ensure consistent alignment across screens.",
          "Design for efficiency — minimize the number of steps to complete registration.",
          "Include accessibility features like focus indicators and proper heading hierarchy.",
        ],
        hint: "Course registration is time-sensitive — students need to find and enroll in courses quickly. Every extra click causes frustration.",
      },
      {
        title: "E-Commerce Homepage Digital Wireframe Redesign",
        description: "Choose an existing e-commerce website and redesign its homepage using digital wireframes, focusing on improving navigation, information hierarchy, product discovery, accessibility, calls-to-action, and mobile responsiveness.",
        instructions: [
          "Analyze the current homepage and identify usability issues.",
          "Create wireframes that address each identified issue.",
          "Design for both desktop and mobile breakpoints.",
          "Support each improvement with UX principles.",
        ],
        hint: "Start with mobile-first — constraints of small screens force better prioritization, which you can then expand for desktop layouts.",
      },
      {
        title: "Paper vs Digital Wireframe Comparison",
        description: "Compare paper wireframes and digital wireframes based on flexibility, collaboration, cost, speed, accuracy, version control, accessibility planning, and stakeholder communication.",
        instructions: [
          "Evaluate each criterion with specific examples from your experience.",
          "Analyze the strengths and weaknesses of each approach.",
          "Determine which stages of the UX process benefit most from each type.",
          "Recommend a workflow that effectively combines both approaches.",
        ],
        hint: "The best workflows use paper for early exploration (when speed matters) and digital for detailed iteration (when consistency matters).",
      },
      {
        title: "Digital Wireframing Standard",
        description: "Design a professional Digital Wireframing Standard for your UX team including naming conventions, component library usage, grid system, auto layout guidelines, accessibility checklist, annotation standards, and version control.",
        instructions: [
          "Define file naming conventions and page organization structure.",
          "Document component library standards and usage guidelines.",
          "Create grid system and auto layout specifications.",
          "Include accessibility checklist and annotation standards for developer handoff.",
        ],
        hint: "A good standard balances consistency with flexibility — it should guide decisions without slowing down creative exploration.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 38: Prototyping in UX
  // ════════════════════════════════════════════
  "prototyping": {
    questions: [
      {
        question: "A UX team wants to test the flow of a mobile banking app before investing in visual design. Which deliverable is most appropriate?",
        options: ["High-fidelity prototype", "Low-fidelity prototype", "Brand style guide", "Design system"],
        correctIndex: 1,
      },
      {
        question: "What is the primary purpose of a low-fidelity prototype?",
        options: ["Finalize branding", "Validate user flows and functionality with minimal investment", "Produce development-ready assets", "Replace usability testing"],
        correctIndex: 1,
      },
      {
        question: "Which characteristic best describes a low-fidelity prototype?",
        options: ["Fully interactive with polished graphics", "Simple, quick to build, and focused on functionality", "Production-ready interface", "Optimized for developer handoff"],
        correctIndex: 1,
      },
      {
        question: "A UX designer asks users to complete a checkout task using clickable grayscale screens. What type of artifact is being tested?",
        options: ["Mood board", "Information architecture diagram", "Low-fidelity prototype", "High-fidelity mockup"],
        correctIndex: 2,
      },
      {
        question: "Why do UX teams often test low-fidelity prototypes before high-fidelity prototypes?",
        options: ["They require less user feedback.", "Changes are faster and less expensive to make.", "They eliminate accessibility reviews.", "They guarantee a successful final product."],
        correctIndex: 1,
      },
      {
        question: "Which activity most commonly follows the creation of digital wireframes?",
        options: ["Building a low-fidelity prototype", "Publishing the application", "Creating marketing campaigns", "Conducting server testing"],
        correctIndex: 0,
      },
      {
        question: "Which type of feedback is most valuable during low-fidelity prototype testing?",
        options: ["Opinions about brand colors", "Comments on typography", "Feedback on task completion and navigation", "Marketing preferences"],
        correctIndex: 2,
      },
      {
        question: "What is the greatest advantage of clickable low-fidelity prototypes?",
        options: ["They simulate interactions without requiring software development.", "They automatically generate production code.", "They replace user interviews.", "They eliminate usability testing."],
        correctIndex: 0,
      },
      {
        question: "A participant struggles to find the Transfer Money button during prototype testing. What should the UX team do first?",
        options: ["Launch the application", "Ignore the issue if only one user struggled", "Investigate whether the navigation or layout caused the confusion", "Immediately redesign the visual style"],
        correctIndex: 2,
      },
      {
        question: "Which UX principle is most closely supported by low-fidelity prototyping?",
        options: ["Iterative design", "Waterfall development", "Feature prioritization", "Software deployment"],
        correctIndex: 0,
      },
      {
        question: "Which statement about low-fidelity prototypes is TRUE?",
        options: ["They should closely resemble the final product.", "They are intended to validate concepts rather than aesthetics.", "They eliminate the need for usability testing.", "They are used only after development."],
        correctIndex: 1,
      },
      {
        question: "Why should designers avoid spending too much time polishing a low-fidelity prototype?",
        options: ["Users expect polished visuals.", "It shifts attention away from testing usability and functionality.", "It improves accessibility.", "Developers cannot interpret polished designs."],
        correctIndex: 1,
      },
      {
        question: "Which stakeholder benefits most from reviewing a low-fidelity prototype early?",
        options: ["Only developers", "Designers, stakeholders, and users", "Marketing teams only", "Finance teams only"],
        correctIndex: 1,
      },
      {
        question: "A team wants to compare two navigation concepts before choosing one. What is the best approach?",
        options: ["Develop both as low-fidelity prototypes and test them with users.", "Choose the first idea.", "Build the full application.", "Wait until after launch."],
        correctIndex: 0,
      },
      {
        question: "Which outcome indicates a successful low-fidelity prototype test?",
        options: ["Users praise the color palette.", "Users complete key tasks with minimal confusion.", "The prototype resembles the final product.", "Developers approve the typography."],
        correctIndex: 1,
      },
      {
        question: "Why is iteration important after prototype testing?",
        options: ["It helps refine solutions based on evidence from user feedback.", "It delays development.", "It eliminates accessibility reviews.", "It guarantees market success."],
        correctIndex: 0,
      },
      {
        question: "A UX researcher observes that three out of five users become confused during onboarding. What should the team conclude?",
        options: ["The issue is likely significant enough to investigate and improve.", "Users need more training.", "The prototype should be ignored.", "The onboarding is successful."],
        correctIndex: 0,
      },
      {
        question: "Which deliverable is most likely to be created after validating a low-fidelity prototype?",
        options: ["High-fidelity prototype", "User persona", "Empathy map", "Competitive audit"],
        correctIndex: 0,
      },
      {
        question: "What is the biggest risk of skipping low-fidelity prototyping?",
        options: ["Increased development costs due to late design changes", "Better collaboration", "Faster accessibility testing", "Fewer usability issues"],
        correctIndex: 0,
      },
      {
        question: "A product team wants to reduce design risk while maintaining rapid progress. Which UX practice best supports this goal?",
        options: ["Moving directly to development", "Conducting multiple rounds of low-fidelity prototyping and usability testing", "Finalizing branding before testing", "Reducing stakeholder involvement"],
        correctIndex: 1,
      },
    ],
    tasks: [
      {
        title: "Mobile Banking Lo-Fi Prototype Testing",
        description: "Design and test a low-fidelity prototype for a mobile banking application. Conduct usability testing with five participants, document observations, prioritize issues by severity, and propose design improvements supported by evidence.",
        instructions: [
          "Create a clickable low-fidelity prototype for core banking tasks.",
          "Recruit five participants matching your target user profile.",
          "Conduct usability testing and document all observations.",
          "Prioritize issues by severity and propose evidence-based improvements.",
        ],
        hint: "Focus on 3-4 core tasks (login, check balance, transfer money, pay bill) rather than trying to prototype every feature.",
      },
      {
        title: "E-Commerce Checkout Prototype Comparison",
        description: "Create two competing low-fidelity prototypes for an e-commerce checkout flow. Plan and conduct a comparative usability study, analyze user performance, and recommend which design should proceed to high-fidelity prototyping.",
        instructions: [
          "Design two different checkout flow approaches.",
          "Create clickable prototypes for both approaches.",
          "Conduct a comparative usability study with target users.",
          "Analyze performance data and recommend the stronger design.",
        ],
        hint: "Try meaningfully different approaches (e.g., single-page vs multi-step checkout) rather than superficial variations.",
      },
      {
        title: "University Registration Lo-Fi Prototype",
        description: "Develop a complete low-fidelity prototype for a university course registration system including onboarding, course search, enrollment, payment, and confirmation screens.",
        instructions: [
          "Build a clickable prototype connecting all key screens.",
          "Test the prototype with current students and identify usability issues.",
          "Iterate on the design based on user feedback.",
          "Document how each iteration addresses specific user problems.",
        ],
        hint: "Map the complete registration flow first. Students often need to search courses, check prerequisites, verify schedules, and pay — all in one session.",
      },
      {
        title: "Existing App Lo-Fi Recreation and Redesign",
        description: "Evaluate an existing mobile application by recreating its core workflow as a low-fidelity prototype, identifying usability problems, redesigning the workflow, and justifying changes using UX principles and research findings.",
        instructions: [
          "Choose an existing app and recreate its core workflow as a lo-fi prototype.",
          "Conduct a heuristic evaluation to identify usability problems.",
          "Redesign the workflow addressing identified issues.",
          "Justify each change with UX principles and research findings.",
        ],
        hint: "Recreating an existing app's flow helps you understand why certain design decisions were made before you critique them.",
      },
      {
        title: "Low-Fidelity Prototyping Playbook",
        description: "Create a Low-Fidelity Prototyping Playbook for a UX team including objectives, tools, fidelity guidelines, testing procedures, iteration cycles, documentation standards, accessibility considerations, and success metrics.",
        instructions: [
          "Define what constitutes low-fidelity and when to use it.",
          "Document tool recommendations and fidelity guidelines.",
          "Create testing procedures and iteration cycle standards.",
          "Include accessibility considerations and success metrics.",
        ],
        hint: "The playbook should help teams know exactly when to move from low-fidelity to high-fidelity prototyping based on evidence, not deadlines.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 40: Avoid Bias in UX Design
  // ════════════════════════════════════════════
  "avoid-bias": {
    questions: [
      {
        question: "A UX designer assumes all users are comfortable with mobile banking because they personally use it every day. Which type of bias is most evident?",
        options: ["Survivorship bias", "Self-reference bias (false-consensus bias)", "Automation bias", "Hindsight bias"],
        correctIndex: 1,
      },
      {
        question: "Why is it important to recognize bias during the UX design process?",
        options: ["It guarantees product success.", "It helps designers make decisions based on evidence rather than assumptions.", "It eliminates the need for user research.", "It reduces development costs."],
        correctIndex: 1,
      },
      {
        question: "During user interviews, a researcher asks, 'You found the checkout process easy, didn't you?' What type of bias is introduced?",
        options: ["Recency bias", "Observer bias", "Leading-question bias", "Survivorship bias"],
        correctIndex: 2,
      },
      {
        question: "Which practice is most effective in reducing bias during user research?",
        options: ["Recruiting participants with diverse backgrounds and experiences", "Interviewing only existing customers", "Asking only closed-ended questions", "Testing with members of the design team"],
        correctIndex: 0,
      },
      {
        question: "A product team ignores feedback from older adults because they believe younger users are more valuable. Which principle of UX is being violated?",
        options: ["Inclusive design", "Visual hierarchy", "Progressive disclosure", "Consistency"],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an example of confirmation bias?",
        options: ["A designer only pays attention to research findings that support an existing design idea.", "A designer conducts usability testing with diverse participants.", "A researcher updates a design after conflicting evidence.", "A team compares multiple design alternatives."],
        correctIndex: 0,
      },
      {
        question: "A UX team wants to reduce bias when creating personas. What should they do?",
        options: ["Base personas on stereotypes.", "Create personas from validated user research and behavioral patterns.", "Use assumptions from stakeholders.", "Focus only on demographic information."],
        correctIndex: 1,
      },
      {
        question: "Why should UX designers challenge their own assumptions?",
        options: ["Assumptions are always incorrect.", "Assumptions can influence decisions without evidence.", "Users prefer assumption-driven products.", "It shortens the design process."],
        correctIndex: 1,
      },
      {
        question: "Which scenario best demonstrates inclusive decision-making?",
        options: ["A design decision is made after considering feedback from users with different abilities, ages, and backgrounds.", "The product manager makes every design decision alone.", "Only experienced users participate in testing.", "Designers rely only on competitor products."],
        correctIndex: 0,
      },
      {
        question: "A researcher unintentionally interprets ambiguous user comments as positive because they expect the design to succeed. This is an example of:",
        options: ["Observer bias", "Selection bias", "Availability bias", "Automation bias"],
        correctIndex: 0,
      },
      {
        question: "What is selection bias in UX research?",
        options: ["Choosing participants who do not accurately represent the intended user population", "Organizing navigation poorly", "Using inconsistent typography", "Prioritizing accessibility"],
        correctIndex: 0,
      },
      {
        question: "A design team only tests its application with employees of the company. What is the biggest risk?",
        options: ["The findings may not represent real users.", "The prototype will become high fidelity.", "Accessibility testing becomes unnecessary.", "The interface will load slowly."],
        correctIndex: 0,
      },
      {
        question: "Which question is least likely to introduce bias during an interview?",
        options: ["'What challenges did you experience while completing this task?'", "'Don't you think this design is intuitive?'", "'Wasn't the navigation straightforward?'", "'Wouldn't you agree this feature is useful?'"],
        correctIndex: 0,
      },
      {
        question: "A UX designer notices that research participants from rural communities have different needs than urban users. What is the most appropriate response?",
        options: ["Ignore the differences to simplify the design.", "Update research findings and explore solutions that accommodate both user groups where appropriate.", "Focus only on the larger user group.", "Remove the feature entirely."],
        correctIndex: 1,
      },
      {
        question: "Which activity helps reduce bias before making design decisions?",
        options: ["Reviewing evidence from multiple research methods", "Relying on intuition alone", "Copying competitor designs", "Limiting user feedback"],
        correctIndex: 0,
      },
      {
        question: "A team discovers that users with visual impairments struggle to complete a task. What should the team do?",
        options: ["Exclude those users from future testing.", "Redesign the experience to improve accessibility and validate the changes.", "Ignore the issue because it affects a minority.", "Replace usability testing with surveys."],
        correctIndex: 1,
      },
      {
        question: "Why is diversity among research participants valuable?",
        options: ["It increases the likelihood of identifying a broader range of user needs and pain points.", "It guarantees positive usability results.", "It reduces the need for interviews.", "It shortens development time."],
        correctIndex: 0,
      },
      {
        question: "Which statement best reflects evidence-based UX design?",
        options: ["Design decisions should be supported by research rather than personal opinions.", "Stakeholder opinions should always override research.", "Designers should trust their instincts over user feedback.", "Competitor products should determine every decision."],
        correctIndex: 0,
      },
      {
        question: "A team realizes that most of its usability participants are experienced technology users. What should the team do next?",
        options: ["Conclude that the design works for everyone.", "Recruit additional participants who better represent the full target audience.", "Stop testing.", "Remove beginner-friendly features."],
        correctIndex: 1,
      },
      {
        question: "What is the most important outcome of minimizing bias in UX design?",
        options: ["Creating products that are more equitable, inclusive, and effective for a wider range of users.", "Reducing the number of design meetings.", "Eliminating user research.", "Making every interface identical."],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Bias Assessment Plan for Fintech",
        description: "A fintech company is launching a digital wallet for both urban and rural users. Develop a Bias Assessment Plan.",
        instructions: [
          "Identify potential biases throughout the UX process.",
          "Recommend strategies to minimize bias in research, ideation, wireframing, prototyping, and usability testing.",
          "Define success metrics for evaluating inclusivity.",
        ],
        hint: "Consider how urban-centric assumptions might exclude rural users who have different connectivity, literacy, and financial behaviors.",
      },
      {
        title: "Mobile App Bias Review",
        description: "Review a popular mobile application of your choice and identify at least five examples of potential UX bias.",
        instructions: [
          "Describe each bias you identify.",
          "Explain its impact on different user groups.",
          "Recommend evidence-based design improvements.",
          "Prioritize the issues by severity.",
        ],
        hint: "Look at who the app seems designed for by default — language, imagery, pricing, and feature assumptions can all reveal bias.",
      },
      {
        title: "Healthcare UX Recruitment Strategy",
        description: "Design a UX Research Recruitment Strategy for a healthcare application ensuring diverse representation.",
        instructions: [
          "Include participants from different age groups.",
          "Include varying levels of digital literacy.",
          "Include people with disabilities.",
          "Include diverse socioeconomic backgrounds and geographic regions.",
        ],
        hint: "Healthcare affects everyone differently. A recruitment strategy that only reaches tech-savvy urban users will miss critical needs of rural and elderly populations.",
      },
      {
        title: "Bias Review Checklist",
        description: "Create a Bias Review Checklist for a UX team to use before every design review.",
        instructions: [
          "Include criteria for research methods and participant selection.",
          "Include criteria for interview questions and personas.",
          "Include criteria for user journeys, wireframes, and prototypes.",
          "Include criteria for accessibility and design decisions.",
        ],
        hint: "The checklist should be short enough to use regularly but comprehensive enough to catch common biases. Focus on the highest-impact items.",
      },
      {
        title: "Government Inclusive UX Strategy",
        description: "A government agency wants to redesign its online tax filing portal. Develop a Comprehensive Inclusive UX Strategy.",
        instructions: [
          "Identify potential biases specific to tax filing.",
          "Conduct inclusive user research.",
          "Validate assumptions and design accessible interfaces.",
          "Test with diverse user groups and measure fairness after launch.",
        ],
        hint: "Tax filing affects every citizen. The design must account for users with varying income, education, language proficiency, and trust in government systems.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 41: Avoid Deceptive Patterns in Design
  // ════════════════════════════════════════════
  "avoid-deceptive-patterns": {
    questions: [
      {
        question: "A website automatically adds travel insurance to a customer's booking without explicit consent. Which deceptive pattern is being used?",
        options: ["Confirmshaming", "Forced Action", "Sneak into Basket", "Roach Motel"],
        correctIndex: 2,
      },
      {
        question: "What is the primary characteristic of a deceptive (dark) pattern?",
        options: ["It improves accessibility for all users.", "It manipulates users into making decisions that primarily benefit the business rather than the user.", "It increases page loading speed.", "It simplifies user navigation."],
        correctIndex: 1,
      },
      {
        question: "A subscription service makes it easy to sign up but intentionally difficult to cancel. Which dark pattern does this represent?",
        options: ["Privacy Zuckering", "Bait and Switch", "Roach Motel", "Hidden Costs"],
        correctIndex: 2,
      },
      {
        question: "A dialog box highlights the 'Accept' button in bright color while hiding the 'Decline' option in small gray text. Which UX principle is being violated?",
        options: ["Transparency and informed user choice", "Progressive disclosure", "Recognition over recall", "Visual consistency"],
        correctIndex: 0,
      },
      {
        question: "Why should UX designers avoid deceptive patterns?",
        options: ["They may increase short-term conversions but reduce user trust, satisfaction, and long-term loyalty.", "They eliminate usability testing.", "They improve accessibility.", "They simplify product development."],
        correctIndex: 0,
      },
      {
        question: "Which of the following is an example of confirmshaming?",
        options: ["'No thanks, I don't care about protecting my family.'", "A hidden unsubscribe button.", "A required password reset.", "A clearly labeled privacy notice."],
        correctIndex: 0,
      },
      {
        question: "A checkout page displays an attractive product price, but unexpected charges appear only on the final payment screen. Which deceptive pattern is this?",
        options: ["Hidden Costs", "Forced Continuity", "Misdirection", "Disguised Ads"],
        correctIndex: 0,
      },
      {
        question: "Which design practice best promotes ethical UX?",
        options: ["Presenting all important options clearly and allowing users to make informed decisions.", "Making important actions difficult to locate.", "Hiding cancellation options.", "Using misleading button labels."],
        correctIndex: 0,
      },
      {
        question: "A website requires users to create an account before viewing publicly available information, even though registration is unnecessary. This is an example of:",
        options: ["Forced Action", "Social Proof", "Progressive Disclosure", "Consistency"],
        correctIndex: 0,
      },
      {
        question: "A button labeled 'Continue' actually submits payment instead of proceeding to the next step. Which deceptive pattern is most closely illustrated?",
        options: ["Bait and Switch", "Roach Motel", "Confirmshaming", "Hidden Costs"],
        correctIndex: 0,
      },
      {
        question: "Which action demonstrates ethical consent collection?",
        options: ["Providing clear explanations and allowing users to freely accept or decline data collection.", "Pre-selecting all marketing checkboxes.", "Hiding privacy settings.", "Bundling unrelated permissions together."],
        correctIndex: 0,
      },
      {
        question: "Which statement best reflects user-centered design?",
        options: ["Business goals should be balanced with users' rights, expectations, and well-being.", "Revenue should always take priority over user trust.", "Users should accept any design decision.", "Conversion rates are the only success metric."],
        correctIndex: 0,
      },
      {
        question: "A mobile application repeatedly interrupts users with subscription pop-ups after they have declined multiple times. Which deceptive practice is being demonstrated?",
        options: ["Nagging", "Hidden Costs", "Forced Action", "Disguised Ads"],
        correctIndex: 0,
      },
      {
        question: "Which of the following is the best indicator of an ethical interface?",
        options: ["Users understand what will happen before they take an action.", "Important information is intentionally hidden.", "Users are pressured into making quick decisions.", "Declining an offer requires significantly more effort than accepting it."],
        correctIndex: 0,
      },
      {
        question: "A cookie banner provides equal visibility and effort for both 'Accept All' and 'Reject All' options. This design demonstrates:",
        options: ["Ethical transparency", "Misdirection", "Forced Continuity", "Confirmshaming"],
        correctIndex: 0,
      },
      {
        question: "Why is long-term user trust more valuable than short-term conversion gains?",
        options: ["Trust encourages customer loyalty, positive reputation, and sustainable business growth.", "Trust reduces software development costs.", "Trust eliminates competition.", "Trust guarantees product success."],
        correctIndex: 0,
      },
      {
        question: "A designer discovers that a marketing team wants to hide cancellation instructions to reduce churn. What is the most appropriate response?",
        options: ["Recommend a transparent cancellation process and explain the long-term impact of deceptive practices.", "Implement the request without discussion.", "Make cancellation even more difficult.", "Remove cancellation entirely."],
        correctIndex: 0,
      },
      {
        question: "Which research method is most useful for identifying deceptive design patterns before launch?",
        options: ["Usability testing with representative users", "Database optimization", "Load testing", "Unit testing"],
        correctIndex: 0,
      },
      {
        question: "Which question should a UX designer ask before releasing a new feature?",
        options: ["'Would users still choose this option if every choice were presented fairly and transparently?'", "'Can we make acceptance easier than rejection?'", "'Can we reduce the visibility of important information?'", "'Can we increase accidental clicks?'"],
        correctIndex: 0,
      },
      {
        question: "What is the ultimate goal of ethical UX design?",
        options: ["To create experiences that respect user autonomy, build trust, and support informed decision-making while meeting business objectives.", "To maximize conversions regardless of user impact.", "To eliminate user choice.", "To prioritize visual appeal over usability."],
        correctIndex: 0,
      },
    ],
    tasks: [
      {
        title: "Ethical UX Audit",
        description: "Conduct an Ethical UX Audit of an e-commerce website or mobile application.",
        instructions: [
          "Identify at least 10 potential deceptive patterns.",
          "Classify each pattern by type.",
          "Assess its impact on users and the business.",
          "Recommend ethical alternatives and prioritize issues using a severity matrix.",
        ],
        hint: "Look for patterns in checkout flows, subscription management, cookie consent, and privacy settings — these are common areas for deceptive design.",
      },
      {
        title: "Streaming Platform Ethical UX Strategy",
        description: "A streaming platform has experienced increased subscription cancellations. Management proposes making cancellation more difficult. Develop an Ethical UX Strategy.",
        instructions: [
          "Improve customer retention without using deceptive patterns.",
          "Recommend transparent alternatives.",
          "Balance business objectives with user trust.",
          "Include measurable success metrics.",
        ],
        hint: "Instead of making cancellation hard, investigate WHY users are canceling. Improving the product experience is more sustainable than trapping users.",
      },
      {
        title: "Ethical Cookie Consent Design",
        description: "Design a Cookie Consent Experience that complies with ethical UX principles.",
        instructions: [
          "Provide equal choice for acceptance and rejection.",
          "Use clear language and privacy explanations.",
          "Include accessibility considerations.",
          "Ensure mobile responsiveness and regulatory compliance.",
        ],
        hint: "The 'Reject All' button should be as prominent and easy to tap as 'Accept All'. No dark patterns in cookie consent.",
      },
      {
        title: "Financial App Onboarding Review",
        description: "Review the onboarding flow of a financial services application for ethical concerns.",
        instructions: [
          "Evaluate whether informed consent is respected.",
          "Check for manipulation in the flow.",
          "Verify that permissions are clearly explained.",
          "Ensure users can opt out where appropriate.",
        ],
        hint: "Financial apps often use urgency ('limited time offer') and complex language to rush users into decisions. These are red flags for ethical design.",
      },
      {
        title: "Ethical Design Review Framework",
        description: "Develop a comprehensive Ethical Design Review Framework for your UX organization.",
        instructions: [
          "Define ethical design principles.",
          "Create a checklist for identifying deceptive patterns.",
          "Establish privacy and consent standards.",
          "Include accessibility requirements, review workflow, and escalation process.",
        ],
        hint: "The framework should empower designers to push back against requests that manipulate users. Include a clear escalation path for ethical concerns.",
      },
    ],
  },

  // ════════════════════════════════════════════
  // Topic 42: Your Importance as a UX Designer
  // ════════════════════════════════════════════
  "your-importance": {
    questions: [
      {
        question: "A startup is preparing to launch a new mobile application. What is the primary contribution of a UX designer during product development?",
        options: ["Writing the backend architecture", "Ensuring the product meets user needs while supporting business objectives", "Managing company finances", "Developing the marketing strategy"],
        correctIndex: 1,
      },
      {
        question: "Which statement best describes the role of a UX designer?",
        options: ["UX designers focus only on creating attractive interfaces.", "UX designers bridge user needs, business goals, and technology through research-driven design.", "UX designers are responsible only for coding user interfaces.", "UX designers replace product managers."],
        correctIndex: 1,
      },
      {
        question: "A company notices that many users abandon the registration process halfway through. Which responsibility of the UX designer is most relevant?",
        options: ["Increasing server capacity", "Conducting usability research to identify and address friction points", "Writing backend APIs", "Negotiating with investors"],
        correctIndex: 1,
      },
      {
        question: "Which activity demonstrates user advocacy?",
        options: ["Prioritizing user needs while balancing business and technical constraints", "Ignoring stakeholder concerns", "Designing only for experienced users", "Copying a competitor's interface without research"],
        correctIndex: 0,
      },
      {
        question: "How does a UX designer contribute to business success?",
        options: ["By ensuring products are easier to use, increasing customer satisfaction and retention", "By replacing the sales department", "By eliminating product testing", "By reducing the need for developers"],
        correctIndex: 0,
      },
      {
        question: "A UX designer recommends simplifying a complex checkout process after observing users struggle during testing. Which competency is being demonstrated?",
        options: ["Evidence-based decision making", "Financial forecasting", "Database optimization", "Graphic illustration"],
        correctIndex: 0,
      },
      {
        question: "Which skill is most critical for understanding user needs?",
        options: ["Active listening and empathy", "Video editing", "Financial accounting", "Network administration"],
        correctIndex: 0,
      },
      {
        question: "Why should UX designers collaborate with developers throughout a project?",
        options: ["To ensure designs are technically feasible and implemented effectively", "To replace software testing", "To reduce stakeholder involvement", "To eliminate design documentation"],
        correctIndex: 0,
      },
      {
        question: "A UX designer receives conflicting feedback from users and stakeholders. What is the best course of action?",
        options: ["Ignore stakeholder input", "Make decisions based only on personal preference", "Analyze the evidence and balance user needs, business goals, and technical constraints", "Always prioritize the loudest opinion"],
        correctIndex: 2,
      },
      {
        question: "Which deliverable best communicates a user's interaction with a product over time?",
        options: ["Style guide", "User journey map", "Marketing plan", "Database schema"],
        correctIndex: 1,
      },
      {
        question: "A UX designer identifies accessibility issues before development begins. What is the primary benefit?",
        options: ["Accessibility improvements become less expensive and easier to implement", "The product automatically complies with every regulation", "Development can skip testing", "Branding becomes stronger"],
        correctIndex: 0,
      },
      {
        question: "Which characteristic best distinguishes UX designers from visual designers?",
        options: ["UX designers focus on user experience, research, and usability, while visual designers focus primarily on aesthetics", "UX designers only create logos", "UX designers only work after development", "UX designers never collaborate with developers"],
        correctIndex: 0,
      },
      {
        question: "A company launches a feature without user testing, resulting in low adoption. Which UX principle was most likely overlooked?",
        options: ["Iterative validation through user research and usability testing", "Visual hierarchy", "Progressive disclosure", "Brand consistency"],
        correctIndex: 0,
      },
      {
        question: "What is one way UX designers reduce business risk?",
        options: ["Validating ideas before significant development investment", "Eliminating user interviews", "Increasing feature complexity", "Designing without research"],
        correctIndex: 0,
      },
      {
        question: "Which metric would best indicate that a UX redesign has been successful?",
        options: ["Increased task completion rate with fewer user errors", "More pages in the application", "Larger file sizes", "Higher development costs"],
        correctIndex: 0,
      },
      {
        question: "A UX designer notices that users complete tasks successfully but report frustration during the process. What should the designer do?",
        options: ["Ignore user emotions because tasks were completed", "Investigate pain points and improve the overall experience", "Launch the product immediately", "Add more features"],
        correctIndex: 1,
      },
      {
        question: "Why is continuous learning important for UX designers?",
        options: ["User expectations, technology, and design practices continue to evolve", "UX methods never change", "Research becomes unnecessary over time", "Design systems eliminate learning"],
        correctIndex: 0,
      },
      {
        question: "Which action best demonstrates leadership as a UX designer?",
        options: ["Encouraging evidence-based decisions and facilitating collaboration across teams", "Rejecting all stakeholder feedback", "Designing independently without communication", "Prioritizing aesthetics over usability"],
        correctIndex: 0,
      },
      {
        question: "A UX designer presents research findings that contradict management's assumptions. What should the designer do?",
        options: ["Hide the findings", "Modify the research to match expectations", "Present the evidence objectively and recommend solutions supported by the data", "Ignore the research results"],
        correctIndex: 2,
      },
      {
        question: "What is the ultimate importance of a UX designer within a product team?",
        options: ["To ensure every screen looks visually impressive", "To represent users, solve meaningful problems, and create experiences that deliver value for both users and the business", "To replace developers and product managers", "To maximize the number of product features"],
        correctIndex: 1,
      },
    ],
    tasks: [
      {
        title: "90-Day UX Strategy for a Startup",
        description: "You have been hired as the first UX Designer in a startup. Develop a 90-day UX Strategy.",
        instructions: [
          "Outline how you will introduce UX practices to the team.",
          "Plan research activities for the first 90 days.",
          "Describe collaboration with product managers and developers.",
          "Define success metrics and expected business outcomes.",
        ],
        hint: "Focus on quick wins that demonstrate UX value early — a usability test finding a critical issue, or a simple redesign that improves a key metric.",
      },
      {
        title: "UX Evaluation Report",
        description: "Select a digital product that you frequently use and prepare a professional UX Evaluation Report.",
        instructions: [
          "Explain the UX designer's contribution to the product.",
          "Identify three strengths of the user experience.",
          "Identify five usability issues.",
          "Provide recommendations supported by UX principles.",
        ],
        hint: "Choose a product where you can identify both good and bad UX. The contrast makes for a more compelling report.",
      },
      {
        title: "Executive UX Value Presentation",
        description: "A company's leadership believes UX is 'just making things look pretty.' Prepare a 10-minute executive presentation.",
        instructions: [
          "Demonstrate the strategic value of UX.",
          "Explain the relationship between UX and business success.",
          "Provide examples of UX-driven improvements with metrics.",
          "Show the ROI of investing in UX.",
        ],
        hint: "Use concrete numbers — case studies showing improved conversion rates, reduced support tickets, or faster task completion after UX improvements.",
      },
      {
        title: "UX Designer Competency Framework",
        description: "Develop a Professional UX Designer Competency Framework covering all skill levels.",
        instructions: [
          "Define technical competencies and research competencies.",
          "Include communication and leadership skills.",
          "Address ethical responsibilities and accessibility knowledge.",
          "Map career progression from Junior to Lead UX Designer.",
        ],
        hint: "A good competency framework helps both designers understand their growth path and organizations evaluate candidates consistently.",
      },
      {
        title: "UX Leadership Plan for Government",
        description: "A government agency plans to redesign its online citizen services portal. As the Lead UX Designer, create a Comprehensive UX Leadership Plan.",
        instructions: [
          "Plan stakeholder engagement and user research strategy.",
          "Address accessibility compliance and information architecture.",
          "Include wireframing, prototyping, and usability testing plans.",
          "Define design governance, risk management, and success metrics.",
        ],
        hint: "Government projects require extensive accessibility compliance and stakeholder management. Plan for usability testing with citizens of all abilities and backgrounds.",
      },
    ],
  },
};
