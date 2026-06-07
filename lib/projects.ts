export type Project = {
  slug: string;
  name: string;
  repo: string;
  description: string;
  updated: string;
  language: string;
  stack: string[];
  gradient: string;
  demo?: string;
  summary: string;
  problem: string;
  whoItHelps: string;
  architecture: string;
  apis: string;
  database: string;
  deployment: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  diagram: string;
};

export const projects: Project[] = [
  {
    slug: "autonohire",
    name: "AutonoHire",
    repo: "https://github.com/GDharmik9/AutonoHire",
    description: "CPU-only AI recruiting pipeline that ranks 100,000 candidates with deterministic explainability and strict performance limits.",
    updated: "Jun 5, 2026",
    language: "Python",
    stack: ["Python", "XGBoost", "SHAP", "FAISS", "Sentence Transformers", "Pandas"],
    gradient: "from-indigo-500 via-violet-500 to-cyan-400",
    summary: "AutonoHire transforms large candidate pools into a ranked, auditable shortlist for senior AI roles without relying on external LLM calls at inference time.",
    problem: "Recruiting teams need trustworthy ranking at scale, but live LLM workflows are expensive, slow, and hard to reproduce under competition constraints.",
    whoItHelps: "Recruiters, hiring platforms, and technical evaluators who need fast shortlisting, factual rationale, and honeypot-resistant screening.",
    architecture: "A two-phase ML architecture separates expensive offline precomputation from fast reusable ranking. Phase 1 extracts behavioral signals, builds semantic embeddings, creates a FAISS index, and trains an XGBoost model. Phase 2 streams candidates, applies hard filters, scores profiles, and emits a compact submission CSV.",
    apis: "No external inference APIs are required; the system is intentionally offline and deterministic.",
    database: "File-based artifacts including pickled models, FAISS indexes, NumPy arrays, and metadata JSON.",
    deployment: "Designed as a CLI pipeline that can run on CPU-only evaluation infrastructure with reproducible outputs.",
    features: ["Ranks 100K candidates in under five minutes after precomputation", "Filters impossible honeypot profiles", "Combines semantic similarity with 23 behavioral signals", "Generates SHAP-backed explanations", "Produces competition-compliant CSV output"],
    challenges: ["Balancing semantic relevance with engagement and seniority signals", "Keeping memory usage under 16 GB", "Producing factual explanations without hallucination", "Designing deterministic tie-breaking for reproducible rankings"],
    learnings: ["Offline-first ML can outperform live API workflows for constrained evaluation", "Explainability must be designed as a first-class product feature", "Simple rule filters are powerful when paired with learned ranking"],
    diagram: "flowchart LR\nJD[Senior AI Engineer JD] --> Embed[Sentence Embeddings]\nCandidates[100K Candidates JSONL] --> Signals[23 Behavioral Signals]\nCandidates --> Embed\nEmbed --> FAISS[FAISS Similarity Index]\nSignals --> Model[XGBoost Ranker]\nFAISS --> Model\nModel --> Filters[Honeypot Filters]\nFilters --> SHAP[SHAP Reasoning]\nSHAP --> CSV[Top 100 Submission CSV]",
  },
  {
    slug: "matdatamitra",
    name: "MatdataMitra",
    repo: "https://github.com/GDharmik9/MatdataMitra",
    description: "AI-driven multilingual electoral assistant that turns complex government information into clear voter guidance.",
    updated: "May 1, 2026",
    language: "TypeScript",
    stack: ["TypeScript", "React", "AI UX", "Multilingual UI", "Government Data", "RAG-ready Architecture"],
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    summary: "MatdataMitra acts as a civic reasoning layer that helps voters understand registration, eligibility, documents, and electoral procedures in their preferred language.",
    problem: "Election information is often fragmented, jargon-heavy, and difficult for first-time or multilingual voters to navigate confidently.",
    whoItHelps: "Voters, civic volunteers, and public information teams that need accessible, multilingual answers and guided workflows.",
    architecture: "The product is structured around a conversational frontend, curated electoral knowledge, language-aware prompts, and a reasoning layer that can be extended with retrieval over official datasets.",
    apis: "Designed for AI completion, translation, and retrieval APIs while keeping the interface source-agnostic.",
    database: "Can be backed by structured election FAQs, document requirements, and vectorized policy content.",
    deployment: "TypeScript web application suitable for static hosting with API-backed AI services.",
    features: ["Multilingual voter question answering", "Step-by-step electoral process guidance", "Plain-language translation of legal and administrative jargon", "Accessible civic UX patterns", "Extensible RAG-ready knowledge layer"],
    challenges: ["Designing trustworthy AI answers for civic information", "Reducing jargon without losing procedural accuracy", "Supporting multiple languages and literacy levels", "Separating reusable knowledge from presentation"],
    learnings: ["High-trust AI products need source-aware responses", "Civic software benefits from progressive disclosure", "Language accessibility is both a UX and architecture concern"],
    diagram: "flowchart LR\nUser[Voter] --> UI[Multilingual Assistant UI]\nUI --> Intent[Question Intent + Language Detection]\nIntent --> Knowledge[Electoral Knowledge Base]\nKnowledge --> Reasoner[AI Reasoning Layer]\nReasoner --> Guidance[Plain-language Step-by-step Answer]\nGuidance --> User",
  },
  {
    slug: "stadiumflowx",
    name: "StadiumFlowX",
    repo: "https://github.com/GDharmik9/StadiumFlowX",
    demo: "https://drive.google.com/file/d/1ZukeUHV_bff6SxuYpiowW01Y8vLWgq8r/view?usp=sharing",
    description: "Real-time crowd-density and smart rerouting platform for mega stadiums using GPS, BLE beacons, and a 3D digital twin.",
    updated: "Apr 20, 2026",
    language: "TypeScript",
    stack: ["TypeScript", "Firebase", "BLE Beacons", "GPS", "3D Maps", "Cloud Build"],
    gradient: "from-emerald-400 via-cyan-500 to-blue-500",
    summary: "StadiumFlowX helps fans avoid bottlenecks by visualizing live congestion across stadium amenities and rerouting them to better alternatives.",
    problem: "Fans at large events lose time and miss moments because they cannot see where queues, corridors, and washrooms are congested in real time.",
    whoItHelps: "Fans, stadium operators, safety teams, and venue revenue teams managing high-density events.",
    architecture: "Mobile and web experiences collect anonymized location signals, combine GPS with BLE beacon data, aggregate density in Firebase, and render status zones on a digital twin map.",
    apis: "Location APIs, Bluetooth beacon signals, Firebase services, and venue-map data feeds.",
    database: "Firestore-style real-time collections for venue zones, crowd density, amenities, and route alternatives.",
    deployment: "Firebase and Google Cloud Build ready, with frontend and backend packages in one repository.",
    features: ["GPS + BLE indoor/outdoor positioning", "Green/orange/red congestion scoring", "3D digital twin heatmap", "One-tap smart rerouting", "Haptic warnings for high-density zones"],
    challenges: ["Merging imprecise GPS with indoor BLE beacon signals", "Updating density without exposing personal location data", "Designing route alternatives that reduce congestion rather than move it", "Making venue-scale data understandable on small screens"],
    learnings: ["Safety-critical UX must be immediate and glanceable", "Privacy-preserving aggregation is essential for location products", "Digital twins work best when paired with simple decisions"],
    diagram: "flowchart LR\nGPS[GPS Signals] --> Fusion[Location Fusion]\nBLE[BLE Beacons] --> Fusion\nFusion --> Firebase[Firebase Cloud Engine]\nFirebase --> Density[Density Scoring]\nDensity --> Twin[3D Digital Twin Map]\nTwin --> Alerts[Warnings + Reroutes]\nAlerts --> Fan[Fan Mobile Experience]",
  },
  {
    slug: "stadiumflow",
    name: "StadiumFlow",
    repo: "https://github.com/GDharmik9/StadiumFlow",
    demo: "https://drive.google.com/file/d/1ZukeUHV_bff6SxuYpiowW01Y8vLWgq8r/view?usp=sharing",
    description: "All-in-one mobile event experience combining ticketing, indoor wayfinding, and live crowd analytics.",
    updated: "Apr 20, 2026",
    language: "TypeScript",
    stack: ["TypeScript", "React", "Firebase", "Digital Ticketing", "Wayfinding", "Analytics"],
    gradient: "from-violet-500 via-fuchsia-500 to-rose-400",
    summary: "StadiumFlow packages ticketing, navigation, and congestion intelligence into a fan-facing product for high-traffic venues.",
    problem: "Sporting events create fragmented fan journeys: ticket checks, seat finding, queues, and safety advisories happen in disconnected systems.",
    whoItHelps: "Event attendees, operations managers, and venue teams improving speed, satisfaction, and safety.",
    architecture: "The app uses a frontend experience for tickets and maps, backend services for crowd zones, and real-time updates for routing and amenity status.",
    apis: "Ticketing, maps, Firebase real-time updates, and device location APIs.",
    database: "Venue, ticket, route, and crowd-state data can be modeled as Firebase collections.",
    deployment: "Firebase-ready full-stack repository with separate frontend and backend areas.",
    features: ["Digital ticketing entry flow", "Indoor wayfinding to seats and amenities", "Live crowd-density analytics", "Smart route recommendations", "Fan-first mobile interface"],
    challenges: ["Unifying ticketing and navigation into one clear journey", "Making operational data useful to fans", "Handling changing density during live events", "Prioritizing accessibility under crowded conditions"],
    learnings: ["Event apps must reduce cognitive load during stressful moments", "Operational telemetry becomes valuable when translated into direct next actions", "Mobile-first design is essential for venue products"],
    diagram: "flowchart LR\nTicket[Digital Ticket] --> App[Fan Mobile App]\nMap[Venue Map] --> App\nSensors[Location + Crowd Signals] --> Backend[Backend Services]\nBackend --> Firebase[Realtime Data Store]\nFirebase --> App\nApp --> Journey[Entry + Seat + Amenities + Reroute]",
  },
  {
    slug: "foodorderingapp-frontend",
    name: "FoodOrderingApp Frontend",
    repo: "https://github.com/GDharmik9/FoodOrderingApp-Frontend-",
    description: "React-based food ordering frontend focused on restaurant browsing, ordering flows, and production build readiness.",
    updated: "Feb 13, 2026",
    language: "JavaScript",
    stack: ["React", "JavaScript", "CSS", "HTML", "Create React App", "REST API UI"],
    gradient: "from-amber-400 via-orange-500 to-red-500",
    summary: "A customer-facing food ordering interface built with React to support browsing, cart actions, and integration with a restaurant-order backend.",
    problem: "Food ordering products require intuitive browsing and checkout experiences that remain fast and familiar across devices.",
    whoItHelps: "Customers ordering meals online and restaurant teams digitizing their ordering workflow.",
    architecture: "A Create React App frontend organizes UI screens, static assets, and API-ready components for local development and production builds.",
    apis: "Prepared for REST API integration with menu, restaurant, order, and customer endpoints.",
    database: "Frontend-only repository; persistent data is expected from a backend food-ordering service.",
    deployment: "Builds to static assets that can be hosted on any web server or static hosting provider.",
    features: ["React single-page application foundation", "Responsive customer ordering UI", "Production build pipeline", "Componentized frontend structure", "Backend integration ready"],
    challenges: ["Creating a clean frontend foundation around a generic starter", "Keeping UI extensible for carts and checkout", "Separating frontend concerns from backend order management"],
    learnings: ["A reliable SPA foundation accelerates feature iteration", "Food-ordering UX depends on fast state feedback", "Static frontend deployments are simple and effective for customer UIs"],
    diagram: "flowchart LR\nCustomer --> React[React Frontend]\nReact --> Browse[Restaurant + Menu Browse]\nReact --> Cart[Cart + Checkout UI]\nCart --> API[Food Ordering REST API]\nAPI --> DB[(Orders Database)]",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
