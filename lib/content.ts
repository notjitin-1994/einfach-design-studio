export type Service = {
  index: string;
  title: string;
  description: string;
  bullets: string[];
};

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Workplaces";
  year: string;
  location: string;
  summary: string;
  image: string;
  tags: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Architecture",
    description:
      "From new homes to commercial developments, we design buildings that respond to people, place, and purpose.",
    bullets: ["Concept to documentation", "Context-led planning", "Long-life detailing"],
  },
  {
    index: "02",
    title: "Interior Design",
    description:
      "Thoughtfully designed interiors that enhance everyday living, working, and interaction.",
    bullets: ["Spatial planning", "Material & finish direction", "Bespoke joinery"],
  },
  {
    index: "03",
    title: "Workplace Strategy",
    description:
      "Helping organisations create workplaces that support productivity, collaboration, and employee wellbeing.",
    bullets: ["Workstyle analysis", "Agile planning", "Wellbeing-led design"],
  },
  {
    index: "04",
    title: "Spatial Branding",
    description:
      "Transforming brand values into memorable physical environments that strengthen customer experience.",
    bullets: ["Brand translation", "Experiential design", "Signature moments"],
  },
  {
    index: "05",
    title: "Independent Design Review",
    description:
      "An expert review of existing architectural or interior proposals to identify opportunities for improvement before construction.",
    bullets: ["Function & circulation audit", "Value engineering", "Risk flagging"],
  },
  {
    index: "06",
    title: "Design Consultancy",
    description:
      "Professional advice for clients seeking clarity, direction, or a second opinion at any stage of a project.",
    bullets: ["Decision frameworks", "Feasibility guidance", "Ongoing advisory"],
  },
];

export const processSteps: ProcessStep[] = [
  { index: "01", title: "Understand", description: "We begin by listening. Every project starts with understanding your goals, lifestyle, business, and the way you use a space." },
  { index: "02", title: "Define", description: "We analyse opportunities, identify challenges, and establish a clear direction for the project." },
  { index: "03", title: "Design", description: "Ideas are developed into architectural and interior solutions supported by drawings, visualisations, and thoughtful detailing." },
  { index: "04", title: "Refine", description: "Through discussion and feedback, every element is evaluated, improved, and simplified until the design feels complete." },
  { index: "05", title: "Deliver", description: "We prepare the final drawings, documentation, and specifications required to confidently move the project into execution." },
  { index: "06", title: "Support", description: "During construction, we remain available to clarify details, review progress, and help ensure the design intent is carried through." },
];

export const principles: string[] = [
  "Designed around people and the way they live or work",
  "Practical solutions before unnecessary complexity",
  "Timeless thinking over short-lived trends",
  "Honest, transparent design advice",
  "Collaborative decision-making throughout the process",
  "Careful attention to the details that shape everyday experience",
];

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const projects: Project[] = [
  { id: "alma-house", title: "Alma House", category: "Residential", year: "2025", location: "Dubai, UAE", summary: "A calm family residence built around natural light, cross-ventilation and a quiet material palette of lime plaster and oak.", image: img("1600585154340-be6161a56a0c"), tags: ["New Build", "Interior", "Landscape"] },
  { id: "dune-villa", title: "Dune Villa", category: "Residential", year: "2024", location: "Sharjah, UAE", summary: "A desert villa whose deep reveals and shaded courtyards reduce solar gain while framing uninterrupted dune views.", image: img("1512917774080-9991f1c4c750"), tags: ["Villa", "Passive", "Bespoke"] },
  { id: "garden-flat", title: "The Garden Flat", category: "Residential", year: "2024", location: "Dubai, UAE", summary: "A full renovation that reorganised a fragmented plan into one continuous, light-filled living landscape.", image: img("1502672260266-1c1ef2d93688"), tags: ["Renovation", "Interior", "Joinery"] },
  { id: "north-office", title: "North Office", category: "Workplaces", year: "2025", location: "Dubai, UAE", summary: "A 1,400m² headquarters designed around focus, chance encounters and a flexible neighbourhood planning model.", image: img("1497366216548-37526070297c"), tags: ["HQ", "Workplace Strategy", "Brand"] },
  { id: "studio-collective", title: "Studio Collective", category: "Workplaces", year: "2023", location: "Abu Dhabi, UAE", summary: "A creative studio for a 60-person team, balancing deep-focus zones with generous social and making space.", image: img("1497366811353-6870744d04b2"), tags: ["Fit-out", "Acoustics", "Making"] },
  { id: "meridian-hub", title: "Meridian Hub", category: "Workplaces", year: "2024", location: "Dubai, UAE", summary: "A post-pandemic reimagining of a corporate floor into an activity-based, hospitality-led work setting.", image: img("1524758631624-e2822e304c36"), tags: ["Refit", "Agile", "Wellbeing"] },
  { id: "maison-store", title: "Maison Store", category: "Commercial", year: "2025", location: "Dubai, UAE", summary: "A flagship retail interior translating a fashion brand's identity into a calm, tactile spatial sequence.", image: img("1441986300917-64674bd600d8"), tags: ["Retail", "Spatial Branding", "Lighting"] },
  { id: "aria-restaurant", title: "Aria Restaurant", category: "Commercial", year: "2024", location: "Dubai, UAE", summary: "A 120-cover restaurant where acoustics, circulation and a warm, low-lit palette shape an intimate evening ritual.", image: img("1517248135467-4c7edcad34c4"), tags: ["Hospitality", "Acoustics", "FF&E"] },
  { id: "linen-gallery", title: "Linen Gallery", category: "Commercial", year: "2023", location: "Sharjah, UAE", summary: "A showroom and event gallery built on a modular wall system that reconfigures in under an hour.", image: img("1567496898669-ee935f5f647a"), tags: ["Showroom", "Modular", "Events"] },
];

export const projectCategories = ["All", "Residential", "Commercial", "Workplaces"] as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
