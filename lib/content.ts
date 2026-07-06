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

export type ProjectCategory = "Residential" | "Commercial" | "Workplaces";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type ProjectProcess = {
  understand: string;
  define: string;
  design: string;
  refine: string;
  deliver: string;
  support: string;
};

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  location: string;
  summary: string;
  image: string;
  tags: string[];
  hero: string;
  process: ProjectProcess;
  gallery: GalleryImage[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Architecture",
    description:
      "Thoughtfully planned homes and commercial buildings designed around function, context, and longevity.",
    bullets: ["Concept to documentation", "Context-led planning", "Long-life detailing"],
  },
  {
    index: "02",
    title: "Interior Design",
    description:
      "Interiors that balance comfort, functionality, and timeless aesthetics to support everyday life.",
    bullets: ["Spatial planning", "Material & finish direction", "Bespoke joinery"],
  },
  {
    index: "03",
    title: "Workplace Strategy",
    description:
      "Designing workplaces that improve collaboration, productivity, efficiency, and employee wellbeing.",
    bullets: ["Workstyle analysis", "Agile planning", "Wellbeing-led design"],
  },
  {
    index: "04",
    title: "Spatial Branding",
    description:
      "Translating a brand's identity into meaningful physical experiences through thoughtful spatial design.",
    bullets: ["Brand translation", "Experiential design", "Signature moments"],
  },
  {
    index: "05",
    title: "Independent Design Review",
    description:
      "Already have drawings? We provide an independent review to identify opportunities for better functionality, circulation, and user experience before construction begins.",
    bullets: ["Function & circulation audit", "Value engineering", "Risk flagging"],
  },
  {
    index: "06",
    title: "Design Consultancy",
    description:
      "Strategic guidance to help clients make informed architectural and interior design decisions with confidence.",
    bullets: ["Decision frameworks", "Feasibility guidance", "Ongoing advisory"],
  },
];

export const processSteps: ProcessStep[] = [
  { index: "01", title: "Understand", description: "Every project begins with people. We listen, observe, and understand what matters most before making any design decisions." },
  { index: "02", title: "Define", description: "Together, we establish a clear direction by identifying opportunities, priorities, and project goals." },
  { index: "03", title: "Design", description: "Thoughtful ideas take shape through architecture and interiors that are functional, timeless, and people-centred." },
  { index: "04", title: "Refine", description: "We review, simplify, and improve every detail until the design feels complete." },
  { index: "05", title: "Deliver", description: "Clear drawings and documentation prepare your project for confident execution." },
  { index: "06", title: "Support", description: "We're with you beyond the design phase, providing guidance and clarity throughout construction." },
];

export const principles: string[] = [
  "People before plans. We design around people, not assumptions.",
  "Purpose before preference. Every element should have a reason.",
  "Clarity before complexity. Simplicity often leads to better design.",
  "Listen before designing. Good design begins with understanding.",
  "Timeless over temporary. We create spaces that last beyond trends.",
  "Thoughtful, not excessive. We value what adds meaning, not just more.",
  "Designed for everyday life. Spaces should feel natural and effortless to use.",
  "Simple, by design. When only what matters remains, good design speaks for itself.",
];

export const projectCategories = ["All", "Residential", "Commercial", "Workplaces"] as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// ---------- Project assets & copy ----------

const SB_MEDIA = "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media";
const d = (slug: string) => `${SB_MEDIA}/projects/${slug}`;

export const projects: Project[] = [
  {
    id: "apartment-complex-ernakulam",
    title: "Apartment Complex, Ernakulam",
    category: "Residential",
    year: "2025",
    location: "Ernakulam, Kerala",
    summary:
      "Sixteen compact 2BHK apartments across four floors — proof that density and dignity can coexist when every square foot earns its place.",
    image: `${d("apartment-complex-ernakulam")}/thumb.png`,
    tags: ["Architecture", "Interiors", "Multi-Unit"],
    hero:
      "A G+3 residential development of sixteen 2BHK homes, each held under 700 square feet without ever feeling small. Through disciplined planning, cross-ventilation, and a soft material palette, the complex proves that affordability and generosity can share the same address.",
    process: {
      understand:
        "The brief was deceptively simple — sixteen 2BHK apartments, each under 700 square feet, compact yet genuinely spacious. We studied how Kerala families live day to day, where privacy matters, and how a few square feet saved on circulation could be returned to living space.",
      define:
        "With both architecture and interiors in scope, we set a clear target: maximise usable area, admit daylight from two sides in every unit, and let cross-ventilation do the work of mechanical cooling — all within the compact footprint.",
      design:
        "Four units per floor wrap a shared core, keeping each apartment narrow enough for light to penetrate fully. Interiors follow a soft, simple language — pale surfaces, clean junctions, and openings placed to chase the day's light across the room.",
      refine:
        "We pressure-tested every plan against the 700-square-foot ceiling, trimming wasted circulation and merging functional zones until each home felt generous. Material junctions were simplified for clean construction and lower cost.",
      deliver:
        "Architectural drawings, interior layouts, and a buildable material schedule were packaged for the contractor — clear enough to execute without guesswork across all sixteen units.",
      support:
        "Through construction we reviewed the first typical floor as a prototype, settled details before the remaining three were repeated, and stayed available to resolve the questions that only surface on site.",
    },
    gallery: [
      { src: `${d("apartment-complex-ernakulam")}/01.png`, alt: "Principal elevation at golden hour" },
      { src: `${d("apartment-complex-ernakulam")}/02.png`, alt: "Entrance sequence framing a tree" },
      { src: `${d("apartment-complex-ernakulam")}/03.png`, alt: "Side elevation showing the two-wing split" },
      { src: `${d("apartment-complex-ernakulam")}/04.png`, alt: "Deep concrete overhang detail" },
      { src: `${d("apartment-complex-ernakulam")}/05.png`, alt: "Street view at dusk" },
      { src: `${d("apartment-complex-ernakulam")}/06.png`, alt: "Vertical fin screen close-up" },
      { src: `${d("apartment-complex-ernakulam")}/07.png`, alt: "Aerial perspective of the footprint" },
      { src: `${d("apartment-complex-ernakulam")}/08.png`, alt: "Rear elevation" },
    ],
  },
  {
    id: "apartment-interior-dubai",
    title: "Apartment Interior, Dubai",
    category: "Residential",
    year: "2024",
    location: "Dubai, UAE",
    summary:
      "Quiet luxury in a 3BHK — muted tones, layered lighting, and spatial zoning that turns a standard plan into a calm, purposeful home.",
    image: `${d("apartment-interior-dubai")}/thumb.png`,
    tags: ["Interiors", "Lighting Design", "Bespoke Joinery"],
    hero:
      "A full interior revamp of a Dubai 3BHK — foyer, living, kitchen, and two bedrooms — guided by one conviction: premium does not have to mean loud. Through spatial zoning, muted material tones, and a layered lighting strategy, the apartment reads as understated, intentional, and calm.",
    process: {
      understand:
        "We began with how the family actually lives — morning routines, where the children play, how often they host — and what 'premium' meant to them. It turned out to mean quiet, not glossy. They wanted a home, not a showroom.",
      define:
        "The brief crystallised around spatial zoning: distinct areas within an open plan, maximum kitchen storage as a non-negotiable, and lighting that was designed rather than just specified. A dedicated children's bedroom with its own personality rounded out the scope.",
      design:
        "A muted tonal palette runs through every room to reduce visual noise. Lighting was layered — ambient coves, task pendants, accent spikes — so the mood could shift from morning routine to evening hosting. The kitchen was planned around storage capacity first; the children's bedroom was given a distinct character within the calm language of the rest of the home.",
      refine:
        "We softened finishes further, removed a planned feature wall that would have added visual noise, and reworked the kitchen joinery internals until every cabinet earned its place rather than filling a gap.",
      deliver:
        "Interior drawings, joinery schedules, lighting design, and a full finish specification gave the fit-out contractor a complete, unambiguous set.",
      support:
        "On site we approved material samples, checked veneer matching, and resolved the inevitable service clashes that appear once walls close up.",
    },
    gallery: [
      { src: `${d("apartment-interior-dubai")}/01.png`, alt: "Living room with fluted stone feature wall" },
      { src: `${d("apartment-interior-dubai")}/02.png`, alt: "Open-plan living and dining" },
      { src: `${d("apartment-interior-dubai")}/03.png`, alt: "Kitchen with handleless oak cabinetry" },
      { src: `${d("apartment-interior-dubai")}/04.png`, alt: "Dining area at dusk" },
      { src: `${d("apartment-interior-dubai")}/05.png`, alt: "Primary bedroom" },
      { src: `${d("apartment-interior-dubai")}/06.png`, alt: "Bespoke joinery detail" },
      { src: `${d("apartment-interior-dubai")}/07.png`, alt: "Foyer and entry" },
    ],
  },
  {
    id: "apartment-interior-ernakulam",
    title: "Apartment Interior, Ernakulam",
    category: "Residential",
    year: "2023",
    location: "Ernakulam, Kerala",
    summary:
      "A realised apartment where real wood, bright accents, and traditional Indian warmth meet modern minimalist discipline.",
    image: `${d("apartment-interior-ernakulam")}/thumb.jpg`,
    tags: ["Interiors", "Execution", "Spatial Zoning"],
    hero:
      "An apartment interior designed and executed end to end — rethinking an existing layout through spatial zoning, relocating key functions for privacy and hygiene, and introducing a palette of real wood and bright colour drawn from traditional Indian interiors, balanced by modern minimalist restraint.",
    process: {
      understand:
        "We walked the existing flat with the owners, understanding where the layout fought their daily routine. The dining sink sat in the wrong place, private zones were exposed, and hygiene patterns the original plan ignored had become daily friction.",
      define:
        "The direction was spatial zoning — reorganise the plan so each function earns its rightful place. The dining sink was relocated, private zones were insulated, and a material direction was set: real wood, bright accents, rooted in traditional Indian interiors but held in check by modern minimalism.",
      design:
        "Real wood carries through every room, paired with a bright, considered colour palette. Traditional Indian warmth informs the proportions and the material choices, while modern minimalism keeps the spaces uncluttered and light-filled.",
      refine:
        "We edited the palette toward fewer, better materials — letting the wood and two accent colours do the work rather than layering decoration that would compete for attention.",
      deliver:
        "As a design-and-execute engagement, the interior drawings, joinery, finishes, and on-site execution were all under one roof — ensuring the design intent was carried through to completion without the usual handoff gaps.",
      support:
        "Because we executed the project, support was built in. Every detail was resolved on site, adjusted as real materials met real light, and carried through to the final handover.",
    },
    gallery: [
      { src: `${d("apartment-interior-ernakulam")}/01.jpg`, alt: "Axial living space" },
      { src: `${d("apartment-interior-ernakulam")}/02.jpg`, alt: "Living room seating area" },
      { src: `${d("apartment-interior-ernakulam")}/03.jpg`, alt: "Dining and kitchen connection" },
      { src: `${d("apartment-interior-ernakulam")}/04.jpg`, alt: "Kitchen detail" },
      { src: `${d("apartment-interior-ernakulam")}/05.jpg`, alt: "Corridor storage wall" },
      { src: `${d("apartment-interior-ernakulam")}/06.jpg`, alt: "Bedroom" },
      { src: `${d("apartment-interior-ernakulam")}/07.jpg`, alt: "Material and detail close-up" },
    ],
  },
  {
    id: "commercial-renovation-ernakulam",
    title: "Commercial Renovation, Ernakulam",
    category: "Commercial",
    year: "2024",
    location: "Ernakulam, Kerala",
    summary:
      "A budget-friendly facade transformation for a twenty-year-old building — minimal invasion, maximum impact, and a breath of green.",
    image: `${d("commercial-renovation-ernakulam")}/thumb.png`,
    tags: ["Facade", "Renovation", "Biophilic"],
    hero:
      "A twenty-year-old commercial building given a new face without losing its bones. Through a lightweight framework layered over the existing facade — without disrupting the structure or its natural ventilation — and the introduction of biophilic elements, the building reads as contemporary, alive, and inviting, all on a budget that respected the client's constraints.",
    process: {
      understand:
        "We assessed what the twenty-year-old building still offered structurally and where it had aged — a dull facade, tired interior, and a street presence that no longer served the business. The client needed impact without the cost or disruption of a full rebuild.",
      define:
        "The brief was clear: an attractive facade, budget-friendly, minimal invasion. We committed to working with the existing structure rather than against it, and to bringing life back through natural rather than manufactured means.",
      design:
        "A lightweight framework was introduced over the existing facade — a new skin that transforms the building's appearance without touching its structural bones or sealing its natural ventilation. Biophilic elements — planted pockets and green framing — soften the hard edges and connect the building back to its street. Inside, the interior was refreshed to match the confidence of the new exterior.",
      refine:
        "We value-engineered the facade framework, simplifying the detailing and sourcing locally to keep the budget intact while protecting the elements that delivered the visual transformation.",
      deliver:
        "Facade details, interior drawings, and a planting strategy were packaged for a single contractor, with clear instructions on what to preserve and what to renew.",
      support:
        "Through construction we reviewed the facade mock-up, oversaw the planting installation, and ensured the existing structure was respected at every junction.",
    },
    gallery: [
      { src: `${d("commercial-renovation-ernakulam")}/01.png`, alt: "Renovated facade view 1" },
      { src: `${d("commercial-renovation-ernakulam")}/02.png`, alt: "Renovated facade view 2" },
      { src: `${d("commercial-renovation-ernakulam")}/03.png`, alt: "Biophilic framework detail" },
      { src: `${d("commercial-renovation-ernakulam")}/04.png`, alt: "Renovated facade view 4" },
    ],
  },
  {
    id: "e3-media-office-ajman",
    title: "E3 Media Office, Ajman",
    category: "Workplaces",
    year: "2025",
    location: "Ajman, UAE",
    summary:
      "A podcast studio and nine-person office designed around wellbeing — clustered workspaces, a breakout zone built for decompression, and branding that works for staff and guests alike.",
    image: `${d("e3-media-office-ajman")}/thumb.png`,
    tags: ["Workplace", "Studio", "Branding"],
    hero:
      "An office interior with a dedicated podcast studio for a nine-person media team — designed under real space and budget constraints, yet planned as a genuinely positive work environment. Wellbeing, not just aesthetics, drove every decision: clustered workspaces that invite collaboration, a breakout space engineered for stress relief, and a brand language that elevates the experience for everyone who walks in.",
    process: {
      understand:
        "We spent time with the team — nine people sharing limited space, producing media daily, needing both a podcast studio and room to think. The constraints were real, but so was the ambition: a space that improved how they felt at work, not just how it looked.",
      define:
        "The brief combined a functional workspace for nine, a podcast studio, a breakout area designed for brainstorming and decompression, and branding that would signal identity to both staff and guests. Wellbeing was set as the primary measure of success — not aesthetics.",
      design:
        "Workspaces were clustered to create natural opportunities for teamwork, the breakout and meeting space was designed specifically to relieve stress and recharge focus, and brand elements were woven materially through the office so the space felt unmistakably its own. The podcast studio was acoustically isolated without feeling cut off from the energy of the rest of the office.",
      refine:
        "We rebalanced the budget toward the spaces the team would inhabit most, simplified the brand detailing to its strongest moments, and ensured the acoustic treatment served function without deadening the room visually.",
      deliver:
        "Interior plans, joinery, acoustic detailing, studio specification, and brand application were packaged into a single coordinated set.",
      support:
        "Through fit-out we approved fabric and finish samples, coordinated the studio's acoustic and AV install, and protected the brand moments from value engineering.",
    },
    gallery: [
      { src: `${d("e3-media-office-ajman")}/01.png`, alt: "Open collaboration hub" },
      { src: `${d("e3-media-office-ajman")}/02.png`, alt: "Podcast studio" },
      { src: `${d("e3-media-office-ajman")}/03.png`, alt: "Breakout and meeting zone" },
    ],
  },
  {
    id: "residence-design-tirur",
    title: "Residence, Tirur",
    category: "Residential",
    year: "2026",
    location: "Tirur, Kerala",
    summary:
      "A budget-conscious Kerala home with a built-in growth path — 2BHK today, 4BHK tomorrow, rooted in tropical modern style and rustic warmth.",
    image: `${d("residence-design-tirur")}/thumb.png`,
    tags: ["Architecture", "Interiors", "New Build"],
    hero:
      "A residence designed under real budget and area constraints, yet given the freedom to feel spacious. Planned as a 2BHK with a deliberate path to expand into a 4BHK, the home blends Kerala traditional character with simple rustic warmth inside and a tropical modern exterior — proof that constraint and generosity can share a roof.",
    process: {
      understand:
        "We sat with the family — a growing household with a clear budget ceiling and limited area to work with, but a genuine openness to design ideas. The home needed to serve them today and grow with them tomorrow.",
      define:
        "The brief was a 2BHK designed for future expansion into a 4BHK, under strict budget and area limits, with full design freedom. We committed to making the home feel larger than its footprint through planning, light, and proportion rather than added square footage.",
      design:
        "The exterior follows a tropical modern language — deep overhangs, clean lines, and openings tuned to Kerala's climate. Inside, a simple rustic palette — warm wood, honest materials, and traditional Kerala character — makes the rooms feel grounded and generous. The plan was structured so future bedrooms could be added without disrupting the lived-in home.",
      refine:
        "We value-engineered every detail toward cost-effectiveness without surrendering the sense of space — simplifying junctions, choosing materials that perform and age well, and protecting the proportions that make the home feel bigger than it is.",
      deliver:
        "Architecture and interior drawings, plus execution guidance and coordination, were delivered with a clear phasing plan for future expansion — so the family could build what they could afford now and grow later.",
      support:
        "Our scope included execution coordination — we stayed engaged through construction, guiding the builder, settling details on site, and ensuring the design intent survived the realities of budget building.",
    },
    gallery: [
      { src: `${d("residence-design-tirur")}/01.png`, alt: "Courtyard view" },
      { src: `${d("residence-design-tirur")}/02.png`, alt: "Principal elevation" },
      { src: `${d("residence-design-tirur")}/03.png`, alt: "Living area opening to courtyard" },
      { src: `${d("residence-design-tirur")}/04.png`, alt: "Upper-floor balcony" },
      { src: `${d("residence-design-tirur")}/05.png`, alt: "Entry and circulation" },
    ],
  },
  {
    id: "residence-renovation-ernakulam",
    title: "Residence Renovation, Ernakulam",
    category: "Residential",
    year: "2024",
    location: "Ernakulam, Kerala",
    summary:
      "A complete exterior, interior, and landscape renovation — exposed laterite, jali screens, an extended verandah, and an industrial staircase that transform a structurally sound but tired home.",
    image: `${d("residence-renovation-ernakulam")}/thumb.png`,
    tags: ["Renovation", "Landscape", "Facade"],
    hero:
      "A full renovation — exterior, interior, and landscape — of a structurally sound home whose facade, circulation, and outdoor life had all failed the family. The transformation introduces exposed laterite and jali screens, an extended verandah with new outdoor seating, an industrial staircase replacing a removed interior stair, and a calm interior palette of natural wood tones and neutral colours.",
    process: {
      understand:
        "We assessed what the existing house still offered structurally — sound bones — and where it had failed: a poor road-facing elevation, compromised bathroom windows, dead circulation, and no real connection between inside and outside. The family needed space, flow, and outdoor life without rebuilding from scratch.",
      define:
        "The scope was total: exterior facade, interior plan, and landscape, including the entry gate and elevation. The direction was rustic-meets-modern — exposed laterite and jalis, an extended verandah and outdoor seating, an industrial staircase inside, and simple natural-wood interiors.",
      design:
        "The road-facing facade was rebuilt with exposed laterite and jali screens for light, privacy, and character. The verandah was extended and a new outdoor seating area added, connecting the home to its landscape. Inside, the old stair was removed and replaced with an industrial-themed staircase that reorganised circulation. Interiors follow a simple language of natural wood tones and neutral colours.",
      refine:
        "We worked through the junctions where old structure meets new design — how the laterite meets the existing wall, how the industrial stair lands, how the extended verandah ties back — ensuring every transition felt deliberate rather than patched.",
      deliver:
        "Complete renovation drawings — demolition, new works, facade details, staircase design, interior finishes, and landscape — were packaged with a clear schedule of what stayed, what was removed, and what was added.",
      support:
        "Renovations always hide surprises behind old walls. We stayed close through the build, resolving structural findings as they surfaced, coordinating the stair installation, and protecting the design intent from the inevitable pressure to simplify.",
    },
    gallery: [
      { src: `${d("residence-renovation-ernakulam")}/01.png`, alt: "Renovated facade with laterite and jali" },
      { src: `${d("residence-renovation-ernakulam")}/02.png`, alt: "Extended verandah and outdoor seating" },
      { src: `${d("residence-renovation-ernakulam")}/03.png`, alt: "Industrial staircase" },
      { src: `${d("residence-renovation-ernakulam")}/04.png`, alt: "Interior with natural wood tones" },
      { src: `${d("residence-renovation-ernakulam")}/05.jpg`, alt: "The house before renovation" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.id === slug);
