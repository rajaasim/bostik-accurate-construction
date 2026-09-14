import { CompanyProfile } from "@/types/company";

/**
 * SINGLE SOURCE OF TRUTH FOR BOSTIK ACCURATE CONSTRUCTION
 * 
 * IMPORTANT: No company names, phone numbers, email addresses, legal numbers,
 * addresses, or branding tokens should be hardcoded anywhere in the codebase.
 * Everything must be imported from this configuration module.
 */

// Choose between 'bostikaccurate.com' and 'bostikaccurateconstruction.com'
const PRIMARY_DOMAIN: string = "bostikaccurate.com";

export const companyConfig: CompanyProfile = {
  brand: {
    nameEn: "Bostik Accurate Construction",
    nameAr: "بوستيك اكيوريت للانشاءات",
    shortName: "Bostik Accurate",
    taglineEn: "Precision Engineering & High-Caliber Non-Residential Construction",
    taglineAr: "الدقة الهندسية والإنشاءات المتطورة للمباني غير السكنية",
    descriptionEn:
      "Bostik Accurate Construction is a premier Qatari commercial construction contractor specializing in comprehensive non-residential building, turnkey commercial developments, civil engineering, and bespoke architectural fit-outs across the State of Qatar.",
    descriptionAr:
      "بوستيك اكيوريت للانشاءات هي شركة مقاولات رائدة في دولة قطر متخصصة في تنفيذ المشاريع الإنشائية غير السكنية، والمباني التجارية، والأعمال المدنية والتشطيبات المعمارية وفق أعلى المعايير القياسية.",
    domainCandidates: [
      {
        domain: "bostikaccurate.com",
        isPrimary: PRIMARY_DOMAIN === "bostikaccurate.com",
        note: "Concise, modern, corporate brand domain",
      },
      {
        domain: "bostikaccurateconstruction.com",
        isPrimary: PRIMARY_DOMAIN === "bostikaccurateconstruction.com",
        note: "Descriptive, explicit industry match domain",
      },
    ],
    activeDomain: PRIMARY_DOMAIN,
    primaryEmail: `info@${PRIMARY_DOMAIN}`,
    supportEmail: `projects@${PRIMARY_DOMAIN}`,
    careersEmail: `careers@${PRIMARY_DOMAIN}`,
    colors: {
      navyDark: "#0B192C",
      navyLight: "#1E3E62",
      goldAccent: "#D4AF37", // Qatar luxury metallic gold
      slateBg: "#0F172A",
      slateCard: "#1E293B",
    },
  },

  registry: {
    crNumber: "226852",
    establishmentDate: "18/09/2025",
    expiryDate: "18/09/2026",
    capital: "QAR 20,000",
    status: "Active",
    legalFormEn: "Limited Liability Company Owned by One Person",
    legalFormAr: "شركة ذات مسؤولية محدودة مالكها شخص واحد",
    nationality: "State of Qatar (قطر)",
    authority: "Ministry of Commerce and Industry - Registration and Commercial Licenses Department",
    chamberMembership: "Member of Qatar Chamber of Commerce and Industry (عضو في غرفة تجارة وصناعة قطر)",
    unifiedEconomicNo: "17-2951-775007988702",
    taxRegistrationNo: "5007988702",
    primaryActivityCode: "410029",
    primaryActivityEn:
      "Construction of all types of other not previously mentioned non-residential buildings",
    primaryActivityAr: "الانشاءات العامة للمباني الغير السكنية لم ترد فيما سبق",
  },

  office: {
    building: "Building No. 23",
    street: "Street 784",
    zone: "Zone 53",
    floor: "Floor 1",
    city: "Doha",
    country: "State of Qatar",
    countryArabic: "دولة قطر",
    fullAddress: "Building No. 23, Street 784, Zone 53, Floor 1, Doha, State of Qatar",
    fullAddressArabic: "مبنى رقم 23، شارع 784، منطقة 53، الطابق 1، الدوحة، دولة قطر",
    googleMapsUrl: "https://maps.google.com/?q=Doha+Zone+53+Street+784",
  },

  contacts: {
    businessDevelopment: {
      name: "Jhunelle Anne Ballocanag Ogoy",
      role: "Business Development Manager",
      roleArabic: "مدير تطوير الأعمال",
      phone: "+97470834949",
      phoneFormatted: "+974 7083 4949",
      whatsapp: "97470834949",
      email: `jhunelle@${PRIMARY_DOMAIN}`,
      bio: "Spearheading strategic client partnerships, project tenders, commercial inquiries, and international business alliances across Qatar's evolving commercial real estate sector.",
    },
    operationsManager: {
      name: "Awais Qamar Ishaq",
      role: "Operations Manager / Managing Director",
      roleArabic: "مدير العمليات / المدير العام",
      phone: "+97477701945",
      phoneFormatted: "+974 7770 1945",
      whatsapp: "97477701945",
      email: `awais@${PRIMARY_DOMAIN}`,
      bio: "Holding full and absolute management authority under Qatar CR #226852. Overseeing on-site execution, engineering standards, procurement logistics, and stringent quality control.",
    },
  },

  stats: [
    {
      label: "Official Qatar CR",
      value: "226852",
      description: "Ministry of Commerce & Industry Certified",
    },
    {
      label: "On-Time Delivery",
      value: "100%",
      description: "Rigorous milestone scheduling & monitoring",
    },
    {
      label: "Safety Record",
      value: "Zero Incidents",
      description: "Strict QCS & OSHA-compliant HSE standards",
    },
    {
      label: "Service Coverage",
      value: "Qatar-Wide",
      description: "Turnkey execution across Doha, Lusail & industrial zones",
    },
  ],

  services: [
    {
      id: "commercial-construction",
      title: "Non-Residential & Commercial Construction",
      titleArabic: "إنشاءات المباني التجارية وغير السكنية",
      shortDescription:
        "Full-scope engineering and structural construction for commercial centers, offices, retail complexes, and specialized facilities.",
      fullDescription:
        "Specialized in Qatar Activity Code 410029, Bostik Accurate Construction delivers comprehensive non-residential structural engineering, from earthworks and reinforced concrete substructures to superstructure completion conforming with Qatar Construction Specifications (QCS).",
      iconName: "Building2",
      capabilities: [
        "Reinforced Concrete Frameworks & Core Walls",
        "Commercial Retail & Administrative Plazas",
        "Industrial Warehouses & Storage Facilities",
        "Pre-engineered Steel Building Systems",
        "Turnkey Project Management from Ground to Handover",
      ],
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "civil-structural",
      title: "Civil Engineering & Heavy Foundations",
      titleArabic: "الهندسة المدنية والأساسات الثقيلة",
      shortDescription:
        "Deep foundation works, retaining structures, grading, utility trenches, and concrete infrastructure.",
      fullDescription:
        "Robust civil engineering capabilities engineered to endure Qatar's geological and climatic environments, featuring specialized soil stabilization, raft foundations, and heavy load-bearing pavements.",
      iconName: "HardHat",
      capabilities: [
        "Excavation, Dewatering & Soil Improvement",
        "Deep Foundations, Piling & Ground Beams",
        "Underground Utility Ducting & Stormwater Channels",
        "Pavement, Asphalt & Heavy Asphaltic Roads",
        "Structural Reinforcement & Core Retrofitting",
      ],
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "commercial-fitout",
      title: "Interior Fit-Out & Architectural Finishes",
      titleArabic: "التشطيبات المعمارية والديكور الداخلي",
      shortDescription:
        "Premium turnkey fit-outs for corporate headquarters, hospitality, luxury retail, and healthcare institutions.",
      fullDescription:
        "Transforming raw shell-and-core spaces into high-functioning, aesthetically compelling commercial environments with acoustic ceilings, specialized flooring, custom millwork, and intelligent partition systems.",
      iconName: "Layers",
      capabilities: [
        "Corporate Executive Suites & Open Workstations",
        "Commercial Retail Boutiques & Showrooms",
        "Acoustic Partitions, Glass Glazing & Raised Flooring",
        "Specialized Stone, Porcelain & Epoxy Finishes",
        "Fire-Rated Doors, Hardware & Architectural Millwork",
      ],
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "mep-contracting",
      title: "MEP & Specialized Building Services",
      titleArabic: "الأعمال الكهروميكانيكية والخدمات الهندسية",
      shortDescription:
        "Integrated HVAC, electrical power distribution, plumbing, fire suppression, and building automation.",
      fullDescription:
        "Delivering energy-efficient mechanical, electrical, and plumbing engineering systems that comply strictly with Kahramaa, Civil Defence (QCDD), and international safety codes.",
      iconName: "Zap",
      capabilities: [
        "Chilled Water Systems, VRF & Commercial HVAC Ducting",
        "Kahramaa Approved Electrical Substations & Panels",
        "QCDD-Compliant Fire Detection & Automatic Sprinklers",
        "Sanitary Drainage, Water Supply & Booster Pumps",
        "BMS, CCTV & Low-Current Telecommunication Networks",
      ],
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  projects: [
    {
      id: "proj-doha-logistics",
      title: "Logistics & Distribution Hub",
      category: "Non-Residential",
      client: "Private Logistics Corporation",
      location: "Industrial Area, Doha, Qatar",
      completionYear: "2025-2026",
      scope: "Civil substructure, pre-engineered structural steel fabrication, high-bay concrete flooring, and MEP utility integration.",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      highlighted: true,
    },
    {
      id: "proj-lusail-hq",
      title: "Lusail Marina Commercial Office Fit-Out",
      category: "Fit-Out",
      client: "Financial Consulting Group",
      location: "Lusail City, Qatar",
      completionYear: "2025",
      scope: "Turnkey architectural fit-out covering 1,800 sqm, acoustic acoustic wall paneling, frameless glass partitions, and smart HVAC zoning.",
      imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      highlighted: true,
    },
    {
      id: "proj-commercial-plaza",
      title: "Commercial Retail Center Superstructure",
      category: "Commercial",
      client: "Commercial Property Investment Firm",
      location: "Zone 53, Doha, Qatar",
      completionYear: "2025-2026",
      scope: "Full reinforced concrete core, post-tensioned slabs, perimeter retaining structures, and external curtain wall framing.",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      highlighted: true,
    },
    {
      id: "proj-al-rayyan-showroom",
      title: "Automotive & Equipment Showroom",
      category: "Non-Residential",
      client: "Automotive Group Qatar",
      location: "Al Rayyan, Qatar",
      completionYear: "2025",
      scope: "Steel truss roofing, high-load polished concrete flooring, structural glass facade, and full QCDD fire safety installations.",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "proj-corporate-mep",
      title: "Hospitality Central MEP Retrofit",
      category: "Civil",
      client: "Hospitality Management Partner",
      location: "West Bay, Doha, Qatar",
      completionYear: "2026",
      scope: "Upgraded dual-chiller plant, main distribution board replacements, and energy management automation integration.",
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  methodology: [
    {
      phaseNumber: "01",
      phaseName: "Tender Review & Constructability Analysis",
      description:
        "Comprehensive review of architectural drawings, bill of quantities (BOQ), value engineering options, and site logistical constraints.",
      deliverable: "Constructability Report, Cost Baseline & Procurement Schedule",
    },
    {
      phaseNumber: "02",
      phaseName: "Authority Approvals & Mobilization",
      description:
        "Liaison with Qatar Municipality, Kahramaa, Civil Defence (QCDD), and site establishment including safety fencing and utilities.",
      deliverable: "Approved Building Permits, HSE Plan & Mobilized Site Compound",
    },
    {
      phaseNumber: "03",
      phaseName: "Substructure & Civil Engineering",
      description:
        "Precision earthworks, compaction testing, raft foundations, and waterproofing under strict geotechnical supervision.",
      deliverable: "Quality Assurance Inspection Reports & Substructure Sign-Off",
    },
    {
      phaseNumber: "04",
      phaseName: "Superstructure & Building Envelope",
      description:
        "Erection of reinforced concrete framework, structural steelwork, external blockwork, curtain glazing, and roofing envelopes.",
      deliverable: "Structural Milestone Certification & Envelope Weatherproofing",
    },
    {
      phaseNumber: "05",
      phaseName: "MEP Integration & Architectural Fit-Out",
      description:
        "Synchronized installation of HVAC ducting, power, plumbing, fire protection systems, acoustic partitions, and luxury finishes.",
      deliverable: "Pressure Test Certificates, Kahramaa Inspection Approvals",
    },
    {
      phaseNumber: "06",
      phaseName: "Testing, Commissioning & Handover",
      description:
        "Integrated systems testing, civil defence clearance, punch-list rectification, as-built documentation, and client handover.",
      deliverable: "QCDD Clearance, As-Built Drawings, Operation & Maintenance Manuals",
    },
  ],

  safetyPolicy: {
    title: "Health, Safety & Environmental (HSE) Policy",
    description:
      "Bostik Accurate Construction is unyieldingly dedicated to maintaining a Zero-Harm workplace environment. Every site operative, subcontractor, and visitor undergoes strict safety induction and adheres to Qatar Construction Specifications (QCS) and International Labor Standards.",
    commitments: [
      "Mandatory Personal Protective Equipment (PPE) enforcement on all active project zones",
      "Daily Tool-Box Talks (TBT) and hazard identification before daily work commencement",
      "Hot-work, working at heights, and confined space strict permit-to-work (PTW) protocols",
      "Comprehensive emergency response plans with certified first-aiders and fire marshals on-site",
      "Responsible waste management, material recycling, and dust suppression systems",
    ],
  },

  qualityPolicy: {
    title: "Quality Assurance & Quality Control (QA/QC)",
    description:
      "Our QA/QC framework guarantees that every concrete pour, weld, MEP connection, and architectural finish complies with design specifications and Qatar national building codes.",
    commitments: [
      "Material Approval Requests (MAR) verified against client and consultant technical specs",
      "Inspection & Test Plans (ITP) logged at every critical project milestone",
      "Independent third-party laboratory verification for soil, concrete compressive strength, and steel tension",
      "Continuous non-conformance prevention and corrective action loops",
    ],
  },

  plantAndEquipment: [
    {
      category: "Earthmoving & Heavy Machinery",
      items: [
        "Excavators (Tracked & Wheeled)",
        "Backhoe Loaders & Skid Steers",
        "Heavy Dump Trucks & Tipper Trailers",
        "Compactors & Single-Drum Rollers",
      ],
    },
    {
      category: "Concreting & Structural Equipment",
      items: [
        "Concrete Mixer Trucks & Mobile Boom Pumps",
        "High-Frequency Concrete Vibrators & Power Trowels",
        "Hydraulic Rebar Benders & Cutting Machinery",
        "Certified Heavy Duty Cup-Lock Scaffolding Systems",
      ],
    },
    {
      category: "Surveying & Precision Instruments",
      items: [
        "Total Stations & Optical Laser Levels",
        "Digital Theodolites & GPS Geo-Positioning Units",
        "Concrete Moisture & Cover Meter Testers",
        "Ultrasonic Weld Inspection Instruments",
      ],
    },
    {
      category: "Power & Site Utility Units",
      items: [
        "Heavy Duty Silent Diesel Generators (100 kVA - 500 kVA)",
        "Mobile Lighting Towers for Round-the-Clock Shifts",
        "High-Pressure Industrial Air Compressors",
        "Submersible Dewatering Pumps & Discharge Lines",
      ],
    },
  ],
};
