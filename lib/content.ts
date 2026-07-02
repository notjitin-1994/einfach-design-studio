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
  caption: string;
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

export const projectCategories = ["All", "Residential", "Commercial", "Workplaces"] as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// ---------- Project assets & copy ----------

const dir = (slug: string) => `/projects/${slug}`;

export const projects: Project[] = [
  {
    id: "apartment-complex-ernakulam",
    title: "Apartment Complex",
    category: "Residential",
    year: "2025",
    location: "Ernakulam, Kerala",
    summary:
      "A multi-unit residential development shaped around Kerala's climate — deep overhangs, cross-ventilated cores, and a façade that balances privacy with street-level warmth.",
    image: `${dir("apartment-complex-ernakulam")}/thumb.png`,
    tags: ["Architecture", "New Build", "Climate-led"],
    hero:
      "Set on a tight urban plot in Ernakulam, this residential complex rethinks the typical apartment block as a series of layered, naturally-cooled homes rather than stacked identical floors. Each unit was planned for cross-ventilation, daylight from two sides, and a private outdoor extension.",
    process: {
      understand:
        "We began by listening to the developer's ambition for a building that would feel like a home rather than a unit number — and by studying how families in Ernakulam actually live through the humidity and monsoon.",
      define:
        "From those conversations we set clear priorities: every home needs daylight from two sides, natural cross-ventilation, acoustic privacy between neighbours, and a genuinely useable outdoor space.",
      design:
        "The massing splits the block into two slender wings around a central lightwell, opening up the deep plan. Deep concrete overhangs shade the glazing, and a screen of vertical fins modulates sun and privacy without sealing the building off from the street.",
      refine:
        "We tested fin spacing and overhang depth against the year's sun path, simplified the core plumbing runs, and reworked the balcony details until they read as part of the architecture rather than an addition.",
      deliver:
        "The final package — architectural drawings, structural coordination, façade details, and a material schedule tuned to local trades — gave the contractor a buildable, unambiguous set of instructions.",
      support:
        "During construction we stayed close, reviewing façade mock-ups, settling joinery on site, and protecting the design intent when contractor substitutions were proposed.",
    },
    gallery: [
      { src: `${dir("apartment-complex-ernakulam")}/01.png`, alt: "Principal elevation at golden hour", caption: "The principal elevation at golden hour — the vertical fin screen casts shifting shadows across the façade through the day." },
      { src: `${dir("apartment-complex-ernakulam")}/02.png`, alt: "Entrance sequence framing a tree", caption: "The entrance sequence frames a single tree, slowing the arrival from the street." },
      { src: `${dir("apartment-complex-ernakulam")}/03.png`, alt: "Side elevation showing the two-wing split", caption: "Side elevation showing the two-wing split and the central lightwell between them." },
      { src: `${dir("apartment-complex-ernakulam")}/04.png`, alt: "Deep concrete overhang detail", caption: "Detail of the deep concrete overhang shading the upper-floor glazing." },
      { src: `${dir("apartment-complex-ernakulam")}/05.png`, alt: "Street view at dusk", caption: "Street view at dusk, with warm interior light revealing the depth of the loggias." },
      { src: `${dir("apartment-complex-ernakulam")}/06.png`, alt: "Vertical fin screen close-up", caption: "The vertical fin screen — proportioned to block low afternoon sun while preserving outward views." },
      { src: `${dir("apartment-complex-ernakulam")}/07.png`, alt: "Aerial perspective of the footprint", caption: "Aerial perspective showing the building's footprint and the landscaped edges." },
      { src: `${dir("apartment-complex-ernakulam")}/08.png`, alt: "Rear elevation", caption: "Rear elevation, with the secondary stair core and service access kept discreet." },
    ],
  },
  {
    id: "apartment-interior-dubai",
    title: "Apartment Interior, Dubai",
    category: "Residential",
    year: "2024",
    location: "Dubai, UAE",
    summary:
      "A contemporary Dubai apartment designed for calm — warm material tones, layered lighting, and bespoke joinery that turns a generous plan into a series of intimate, purposeful rooms.",
    image: `${dir("apartment-interior-dubai")}/thumb.png`,
    tags: ["Interior", "Bespoke Joinery", "Lighting"],
    hero:
      "Designed for a young family in Dubai, this apartment interior sets aside the city's default of glossy surfaces and statement lighting in favour of calm, textural materials and a lighting strategy built on layers rather than spectacle. The plan opens the living, dining and kitchen into one continuous space while keeping the private wing quiet and separate.",
    process: {
      understand:
        "We started with how the family actually lives — morning routines, where the children do homework, how often they host, and what 'calm' meant to them in a busy city.",
      define:
        "The brief crystallised around three words: warm, quiet, flexible. Every later decision — material, lighting, layout — was tested against them.",
      design:
        "The public wing was opened into one continuous living–dining–kitchen landscape anchored by a fluted stone feature wall; the private wing stays cellular and hushed. Lighting was layered — ambient coves, task pendants, accent spikes — so the mood could shift from family evening to dinner party.",
      refine:
        "We softened the material palette, replaced a heavy stone island with a lighter oak-wrapped one, and reworked the joinery proportions until the rooms felt generous rather than full.",
      deliver:
        "Drawings, joinery schedules, finish and lighting specifications, and an FF&E package gave the fit-out contractor a complete, buildable set with no ambiguity.",
      support:
        "We reviewed prototypes on site, checked stone veining and veneer matching, and resolved the inevitable service clashes as walls went up.",
    },
    gallery: [
      { src: `${dir("apartment-interior-dubai")}/01.png`, alt: "Living room with fluted stone wall", caption: "The living room anchors around a fluted stone feature wall that catches layered cove light after dark." },
      { src: `${dir("apartment-interior-dubai")}/02.png`, alt: "Open-plan living and dining", caption: "The continuous living–dining landscape, with the oak-wrapped island marking the kitchen zone." },
      { src: `${dir("apartment-interior-dubai")}/03.png`, alt: "Kitchen detail", caption: "Kitchen detail — handleless oak cabinetry and a warm stone counter kept deliberately quiet." },
      { src: `${dir("apartment-interior-dubai")}/04.png`, alt: "Dining area at dusk", caption: "Dining area at dusk, showing the layered lighting strategy shifting the room toward evening." },
      { src: `${dir("apartment-interior-dubai")}/05.png`, alt: "Primary bedroom", caption: "The primary bedroom — upholstered headboard wall and a single pendant for a calm, low-lit close to the day." },
      { src: `${dir("apartment-interior-dubai")}/06.png`, alt: "Joinery detail", caption: "Bespoke joinery detail — the same oak language carries from kitchen to storage to bedside." },
      { src: `${dir("apartment-interior-dubai")}/07.png`, alt: "Foyer and entry", caption: "The entry foyer, where a low bench and a slot of light set the calm tone for the rest of the home." },
    ],
  },
  {
    id: "apartment-interior-ernakulam",
    title: "Apartment Interior, Ernakulam",
    category: "Residential",
    year: "2023",
    location: "Ernakulam, Kerala",
    summary:
      "A fully realised apartment interior — a layered, lived-in home where warm Kerala materials meet a contemporary, light-filled plan.",
    image: `${dir("apartment-interior-ernakulam")}/thumb.jpg`,
    tags: ["Interior", "Renovation", "Realised"],
    hero:
      "Completed and photographed, this Ernakulam apartment is a study in restraint — a limited palette of warm timber, limewashed walls, and natural stone, organised around a single axial living space that runs the length of the flat. The result is a home that feels settled and intentional the moment you walk in.",
    process: {
      understand:
        "We walked the existing flat with the owners, understanding which views mattered, where the family gathered, and how the original plan fought their daily routine.",
      define:
        "The direction was clear: open the living axis, reclaim wasted circulation, and let a single warm material palette carry through every room for continuity.",
      design:
        "The kitchen was pulled forward to meet the living room, a long storage wall unified the corridor, and timber, limewash, and honed stone were composed so each room felt both distinct and part of the same home.",
      refine:
        "We edited hard — removing a planned feature ceiling, simplifying the lighting, and trimming the furniture list so the architecture could breathe.",
      deliver:
        "A full set of interior drawings, joinery details, finish samples, and a lighting layout meant the contractor could execute without guesswork.",
      support:
        "We stayed on through fit-out, approving stone and veneer selections on site and resolving the small clashes that only appear once walls close up.",
    },
    gallery: [
      { src: `${dir("apartment-interior-ernakulam")}/01.jpg`, alt: "Axial living space", caption: "The axial living space running the length of the flat — timber, limewash, and stone in a single continuous composition." },
      { src: `${dir("apartment-interior-ernakulam")}/02.jpg`, alt: "Living room seating area", caption: "The seating area, oriented toward the best daylight and the long view through the home." },
      { src: `${dir("apartment-interior-ernakulam")}/03.jpg`, alt: "Dining and kitchen connection", caption: "Dining and kitchen, now connected rather than compartmentalised — the heart of the daily routine." },
      { src: `${dir("apartment-interior-ernakulam")}/04.jpg`, alt: "Kitchen detail", caption: "Kitchen detail showing the consistent material language carried from the living spaces." },
      { src: `${dir("apartment-interior-ernakulam")}/05.jpg`, alt: "Corridor storage wall", caption: "The corridor's long storage wall, which reclaimed wasted circulation and unified the private wing." },
      { src: `${dir("apartment-interior-ernakulam")}/06.jpg`, alt: "Bedroom", caption: "A bedroom kept deliberately quiet — the architecture does the work, not the furniture." },
      { src: `${dir("apartment-interior-ernakulam")}/07.jpg`, alt: "Material and detail close-up", caption: "Detail of the timber, limewash, and honed stone palette that carries through every room." },
    ],
  },
  {
    id: "commercial-renovation-ernakulam",
    title: "Commercial Renovation",
    category: "Commercial",
    year: "2024",
    location: "Ernakulam, Kerala",
    summary:
      "The renovation of a tired commercial space into a bright, branded, efficient premises — rethinking circulation, daylight, and the customer journey end to end.",
    image: `${dir("commercial-renovation-ernakulam")}/thumb.png`,
    tags: ["Renovation", "Commercial", "Branding"],
    hero:
      "What was a dark, compartmentalised commercial unit in Ernakulam is reimagined as a bright, legible premises with a clear customer journey. The renovation opens up the plan, brings daylight deep into the space, and uses a restrained brand-led palette to give the business a confident, recognisable identity.",
    process: {
      understand:
        "We studied how customers moved through the existing space, where they paused, and where the business lost them — and listened to staff on what made the old layout hard to work in.",
      define:
        "The brief centred on clarity: a single welcoming entry sequence, intuitive circulation, more usable display area, and a stronger brand presence without overspending.",
      design:
        "Partition walls came out to let daylight reach the back, a clear sightline was opened from entry to service counter, and a consistent material and signage system gave the brand a calm, confident face.",
      refine:
        "We value-engineered the fit-out — swapping specified finishes for locally available equivalents, simplifying the lighting runs, and protecting the few details that carried the brand identity.",
      deliver:
        "Drawings, a brand-compliant finishes schedule, signage artwork, and a lighting layout were packaged for a single contractor to deliver without gaps.",
      support:
        "We reviewed mock-ups, approved the final signage fabrication, and resolved the service coordination that always surfaces once an old shell is opened up.",
    },
    gallery: [
      { src: `${dir("commercial-renovation-ernakulam")}/01.png`, alt: "Renovated interior view 1", caption: "The renovated interior — daylight now reaches deep into a space that was previously dark at the back." },
      { src: `${dir("commercial-renovation-ernakulam")}/02.png`, alt: "Renovated interior view 2", caption: "The clear entry-to-service sightline that guides customers intuitively through the premises." },
      { src: `${dir("commercial-renovation-ernakulam")}/03.png`, alt: "Renovated interior view 3", caption: "Brand-led material and signage system, applied consistently across walls, counter, and wayfinding." },
      { src: `${dir("commercial-renovation-ernakulam")}/04.png`, alt: "Renovated interior view 4", caption: "Display area reorganised for more usable, flexible merchandising after the partition walls came out." },
    ],
  },
  {
    id: "e3-media-office-ajman",
    title: "E3 Media Office",
    category: "Workplaces",
    year: "2025",
    location: "Ajman, UAE",
    summary:
      "A media company headquarters in Ajman designed around focus, collaboration, and a strong brand presence — balancing deep-work studios with open social and production zones.",
    image: `${dir("e3-media-office-ajman")}/thumb.png`,
    tags: ["Workplace", "HQ", "Brand"],
    hero:
      "E3 Media's Ajman headquarters is planned as two halves of one working day: quiet, enclosed studios where creative deep-work happens, and an open, energetic social and production zone where ideas cross-pollinate. A confident brand language runs through both, making the office read as a single, deliberate place.",
    process: {
      understand:
        "We shadowed the team across a working week — seeing where focus broke down, where spontaneous collaboration happened, and how the brand currently felt (or didn't) inside their own space.",
      define:
        "The strategy separated deep-work studios from social and production zones, with brand identity carried materially through both so the office felt unmistakably like E3.",
      design:
        "Acoustically-treated studios line the quiet edge; an open collaboration hub with a branded feature volume sits at the heart; production and meeting rooms cluster around a shared, daylight-filled break area.",
      refine:
        "We reworked the acoustic detailing, trimmed an over-designed feature wall down to its essentials, and rebalanced the budget toward the spaces the team would actually live in.",
      deliver:
        "A complete workplace package — plans, joinery, acoustics, AV coordination, signage, and FF&E — gave the fit-out team a single coordinated source of truth.",
      support:
        "Through fit-out we approved fabric and finish samples, coordinated AV and acoustic install, and protected the brand moments from value-engineering erasure.",
    },
    gallery: [
      { src: `${dir("e3-media-office-ajman")}/01.png`, alt: "Open collaboration hub", caption: "The open collaboration hub at the heart of the office, with the branded feature volume anchoring the space." },
      { src: `${dir("e3-media-office-ajman")}/02.png`, alt: "Deep-work studio", caption: "A quiet, acoustically-treated studio where focused creative work can happen without interruption." },
      { src: `${dir("e3-media-office-ajman")}/03.png`, alt: "Production and meeting zone", caption: "The production and meeting rooms clustered around the shared daylight-filled break area." },
    ],
  },
  {
    id: "residence-design-tirur",
    title: "Residence, Tirur",
    category: "Residential",
    year: "2026",
    location: "Tirur, Kerala",
    summary:
      "A new-build family residence designed around a central courtyard — a home that breathes with Kerala's climate and gathers the household around a single shaded outdoor room.",
    image: `${dir("residence-design-tirur")}/thumb.png`,
    tags: ["New Build", "Courtyard", "Climate-led"],
    hero:
      "This new-build residence in Tirur is organised around a shaded central courtyard — the traditional Kerala response to heat, rain, and extended-family living, reinterpreted for a contemporary household. Every principal room opens onto the court, so the home feels generous, cross-ventilated, and centred on a single shared outdoor room.",
    process: {
      understand:
        "We sat with three generations of the family, understanding who needed privacy, who gathered where, and how the home had to perform through monsoon and the long hot months.",
      define:
        "The direction was a contemporary courtyard house: private wings around a shared shaded court, cross-ventilation through every room, and a plan that could absorb a growing family.",
      design:
        "Living, dining, and the elders' quarters wrap the courtyard on the cooler sides; bedrooms occupy the upper floor with shaded balconies; a single perforated screen wall filters the afternoon sun along the west.",
      refine:
        "We tested the courtyard proportions for shade and airflow, simplified the roof drainage, and reworked the stair so it became a feature rather than a leftover.",
      deliver:
        "Architectural drawings, structural and services coordination, courtyard detailing, and a material schedule tuned to local masons gave the builder a clear, buildable set.",
      support:
        "We stayed engaged through construction — reviewing the screen wall mock-up, settling the courtyard paving, and protecting the proportions as budget pressures arose.",
    },
    gallery: [
      { src: `${dir("residence-design-tirur")}/01.png`, alt: "Courtyard view", caption: "The shaded central courtyard — the heart of the home, around which every principal room is organised." },
      { src: `${dir("residence-design-tirur")}/02.png`, alt: "Principal elevation", caption: "The principal elevation, with the perforated screen wall filtering the western afternoon sun." },
      { src: `${dir("residence-design-tirur")}/03.png`, alt: "Living area opening to courtyard", caption: "The living area opening directly onto the courtyard — inside and outside held in deliberate balance." },
      { src: `${dir("residence-design-tirur")}/04.png`, alt: "Upper-floor balcony", caption: "An upper-floor shaded balcony, giving the bedrooms private outdoor space and cross-ventilation." },
      { src: `${dir("residence-design-tirur")}/05.png`, alt: "Entry and circulation", caption: "The entry sequence, which compresses before releasing into the light and air of the courtyard." },
    ],
  },
  {
    id: "residence-renovation-ernakulam",
    title: "Residence Renovation, Ernakulam",
    category: "Residential",
    year: "2024",
    location: "Ernakulam, Kerala",
    summary:
      "The renovation and extension of an existing residence — preserving its bones while reworking the plan, light, and materials into a calmer, more generous family home.",
    image: `${dir("residence-renovation-ernakulam")}/thumb.png`,
    tags: ["Renovation", "Extension", "Light"],
    hero:
      "Rather than demolish and start over, this Ernakulam renovation keeps the sound bones of the original house and reworks everything around them — a reorganised plan that pulls light deep into the interior, a rear extension that adds generous family space, and a calm, warm material palette that ties old and new together.",
    process: {
      understand:
        "We documented what the existing house did well and where it failed the family — dark rooms, dead corridors, and a kitchen cut off from the life of the home.",
      define:
        "The brief was to preserve the structure, reclaim the wasted space, bring daylight into the core, and add a single generous rear extension for family living.",
      design:
        "Internal walls were selectively removed to open the plan, a new rooflight dropped daylight into the centre, and the rear extension added a continuous kitchen–dining–living space connected to the garden.",
      refine:
        "We tested how new and old would meet — choosing a continuous floor finish and matching brick coursing so the extension read as a respectful continuation, not a graft.",
      deliver:
        "Demolition plans, new works drawings, joinery, lighting, and a material reconciliation schedule gave the builder a clear picture of what stayed, what went, and what was added.",
      support:
        "Renovations always hide surprises — we stayed close through the build, resolving structural findings behind the old walls and protecting the daylight strategy as details closed in.",
    },
    gallery: [
      { src: `${dir("residence-renovation-ernakulam")}/01.png`, alt: "Renovated living space view 1", caption: "The renovated living space — once dark, now opened and connected to the rest of the home." },
      { src: `${dir("residence-renovation-ernakulam")}/02.png`, alt: "Renovated living space view 2", caption: "The new rear extension, a continuous kitchen–dining–living space opening onto the garden." },
      { src: `${dir("residence-renovation-ernakulam")}/03.png`, alt: "Renovated living space view 3", caption: "Daylight reaching deep into the core, courtesy of the new central rooflight." },
      { src: `${dir("residence-renovation-ernakulam")}/04.png`, alt: "Renovated living space view 4", caption: "A continuous floor finish and matched brick coursing so new and old read as one calm home." },
      { src: `${dir("residence-renovation-ernakulam")}/05.jpg`, alt: "The house before renovation", caption: "Before — the original house, whose sound bones were preserved while the plan, light, and materials were reworked." },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.id === slug);
