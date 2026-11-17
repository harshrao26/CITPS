import {
  LuFlaskConical,
  LuScanLine,
  LuSyringe,
  LuActivity,
  LuDroplet,
  LuEye,
} from "react-icons/lu";

export const courses = [
  {
    id: "medical-laboratory-technology",
    slug: "medical-laboratory-technology",
    title: "B.Sc. Medical Laboratory Technology (BMLT)",
    shortCode: "BMLT",
    degreeCode: "BMLT-102",
    level: "Undergraduate Degree",
    category: "Diagnostics & Pathology",
    duration: "3.5 Years",
    durationDetail: "3 Years Academic (6 Semesters) + 6 Months Hospital Internship",
    eligibility: "10+2 with PCB (Min 50% Aggregate)",
    eligibilityDetail: "Passed 10+2 (Higher Secondary) with Physics, Chemistry & Biology. 45% for reserved categories.",
    annualIntake: "60 Approved Seats",
    startingPackage: "₹3.8 - ₹7.2 LPA",
    clinicalHours: "1,200+ Hospital Clinical Training Hours",
    councilApproval: "Approved by Bihar State Paramedical Council & AICTE | NCAHP 2021 Aligned",
    summary:
      "A comprehensive 3.5-Year professional degree program integrating advanced hematology, clinical biochemistry, histopathology, immunohematology, and automated molecular diagnostics with compulsory 6-month hands-on hospital residency.",
    image: "/images/clinical-lab-stitch.jpg",
    alt: "Modern high-tech clinical medical pathology laboratory at CITPS Patna",

    disciplines: [
      {
        title: "Clinical Biochemistry & Automated Analyzers",
        desc: "Automated serum chemistry, liver & renal panels, cardiac enzymes, and spectrophotometry on Roche Cobas systems.",
      },
      {
        title: "Hematology, Blood Banking & Transfusion",
        desc: "5-part differential cell counters, coagulation profiles, blood group cross-matching, and apheresis component separation.",
      },
      {
        title: "Medical Microbiology, Bacteriology & Mycology",
        desc: "Clinical specimen culture, antibiotic sensitivity testing (AST), Gram staining, and fungal diagnostic assays.",
      },
      {
        title: "Histopathology & Diagnostic Cytology",
        desc: "Tissue processing, rotary microtomy, Pap smear screening, special staining, and immunohistochemistry protocols.",
      },
      {
        title: "Molecular Diagnostics & Real-Time PCR",
        desc: "DNA/RNA extraction, viral load quantitation, automated thermal cyclers, and genetic biomarker screening.",
      },
    ],

    curriculum: [
      {
        sem: "Semester 01",
        credits: "18 Credits",
        labHours: "120 Laboratory Hours",
        subjects: [
          "Human Anatomy & Physiology I",
          "Fundamentals of Medical Laboratory Technology",
          "Basic Clinical Biochemistry & Lab Safety",
          "Professional Medical Ethics & Communication",
        ],
      },
      {
        sem: "Semester 02",
        credits: "18 Credits",
        labHours: "140 Laboratory Hours",
        subjects: [
          "Systematic Bacteriology & Specimen Processing",
          "Clinical Pathology & Urinalysis",
          "General Clinical Biochemistry & Reagents",
          "Emergency First Aid & Infection Control",
        ],
      },
      {
        sem: "Semester 03",
        credits: "20 Credits",
        labHours: "160 Laboratory Hours",
        subjects: [
          "Hematology-I (Anemias, Hemoglobinopathies & Cytology)",
          "Clinical Immunology & Diagnostic Serology",
          "Diagnostic Clinical Microbiology & Parasitology",
          "Applied Clinical Biochemistry & Electrolytes",
        ],
      },
      {
        sem: "Semester 04",
        credits: "20 Credits",
        labHours: "180 Laboratory Hours",
        subjects: [
          "Hematology-II, Coagulation & Blood Banking Tech",
          "Medical Parasitology, Virology & Mycology",
          "Clinical Enzymology & Endocrinology",
          "Advanced Diagnostic Instrumentation & Automation",
        ],
      },
      {
        sem: "Semester 05",
        credits: "22 Credits",
        labHours: "200 Laboratory Hours",
        subjects: [
          "Histotechnology, Biopsy Embedding & Microtomy",
          "Diagnostic Cytopathology & Exfoliative Staining",
          "Molecular Diagnostics & Real-Time PCR",
          "Hospital Waste Management & Biosafety Level-2",
        ],
      },
      {
        sem: "Semester 06",
        credits: "20 Credits",
        labHours: "220 Laboratory Hours",
        subjects: [
          "Quality Assurance, GLP & NABL/NABH Accreditation",
          "Advanced Molecular Genetics & Blotting Techniques",
          "Research Methodology & Clinical Biostatistics",
          "Academic Capstone Project & Viva Voce",
        ],
      },
    ],

    labFacilities: [
      {
        name: "Automated Clinical Biochemistry Suite",
        spec: "Roche Cobas & Mindray random-access chemistry analyzers, ISE electrolyte modules, 400 tests/hr capacity.",
      },
      {
        name: "Advanced Hematology & Flow Cytometry Center",
        spec: "Sysmex 5-part differential cell counters, automated ESR systems, and optical coagulometers.",
      },
      {
        name: "Molecular Diagnostics & RT-PCR Unit",
        spec: "Bio-Rad Thermal Cyclers, laminar flow Biosafety Level-2 cabinets, and gel documentation imaging.",
      },
      {
        name: "Immunohematology & Blood Bank Lab",
        spec: "Cross-matching centrifugation suites, deep blood bank refrigerators, and microplate ELISA readers.",
      },
    ],

    careerRoles: [
      {
        role: "Clinical Laboratory Technologist / Officer",
        ctc: "₹3.6 - ₹5.2 LPA",
        desc: "Supervising automated biochemistry and hematology runs in tertiary hospital laboratories.",
      },
      {
        role: "Blood Transfusion & Immunohematology Officer",
        ctc: "₹4.2 - ₹6.5 LPA",
        desc: "Managing blood bank donor screening, cross-matching, and component separation protocols.",
      },
      {
        role: "Quality Control & NABL Compliance Specialist",
        ctc: "₹4.8 - ₹7.5 LPA",
        desc: "Auditing diagnostic accuracy, standard operating procedures, and accreditation standards.",
      },
      {
        role: "Molecular Diagnostic Specialist / PCR Tech",
        ctc: "₹5.5 - ₹8.5 LPA",
        desc: "Conducting RT-PCR viral screening, oncology genetics, and specialized DNA assays.",
      },
      {
        role: "IVD Application Specialist (Roche / Abbott / Siemens)",
        ctc: "₹6.0 - ₹10.0 LPA",
        desc: "Providing technical consulting and instrument calibration for multinational biomedical corporations.",
      },
    ],

    faqs: [
      {
        q: "Is NEET UG mandatory for admission to BMLT at CITPS Patna?",
        a: "No, NEET is not mandatory for admission to B.Sc. MLT. Admissions are conducted directly through 10+2 science merit evaluation (minimum 50% aggregate in Physics, Chemistry, and Biology) followed by institutional counseling.",
      },
      {
        q: "Are CITPS BMLT graduates eligible for government hospital jobs?",
        a: "Yes. The BMLT degree awarded is fully recognized by the Bihar State Allied and Healthcare Professionals Council and aligned with the National Commission for Allied and Healthcare Professions (NCAHP) Act 2021. Graduates are eligible for recruitments in AIIMS, Railway Hospitals, ESIC, and State Health Society Bihar.",
      },
      {
        q: "Can I avail the Bihar Student Credit Card (MNSSBY) scheme for BMLT?",
        a: "Yes. CITPS is an approved institution under MNSSBY. Eligible Bihar domicile students can secure up to ₹4,00,000 for tuition, hostel, and books with zero collateral. Our on-campus DRCC desk provides immediate Bonafide documents.",
      },
      {
        q: "Where do students undergo their compulsory 6-month clinical internship?",
        a: "Internships are conducted across premier partner hospitals including AIIMS Patna corridor facilities, Paras HMRI Hospital, Ruban Memorial, Mahavir Cancer Sansthan, Apollo Diagnostics, and Dr. Lal PathLabs.",
      },
    ],
    icon: LuFlaskConical,
  },
  {
    id: "radiology-imaging-technology",
    slug: "radiology-imaging-technology",
    title: "B.Sc. Radiology & Imaging Technology (BRIT)",
    shortCode: "BRIT",
    degreeCode: "BRIT-204",
    level: "Undergraduate Degree",
    category: "Radiodiagnosis & Imaging",
    duration: "3.5 Years",
    durationDetail: "3 Years Academic + 6 Months Hospital Clinical Postings",
    eligibility: "10+2 with PCB/PCM (Min 50% Aggregate)",
    eligibilityDetail: "Passed 10+2 with Physics, Chemistry & Biology/Mathematics from a recognized board.",
    annualIntake: "40 Approved Seats",
    startingPackage: "₹4.0 - ₹7.8 LPA",
    clinicalHours: "1,200+ Clinical Diagnostic Hours",
    councilApproval: "Approved by Bihar State Paramedical Council & AICTE | AERB Guidelines Aligned",
    summary:
      "Advanced 3.5-Year degree in medical radiography, multi-slice Computed Tomography (CT), Magnetic Resonance Imaging (MRI), ultrasound physics, and radiation safety protocols.",
    image: "/images/course-radiology.jpg",
    alt: "Radiology technician operating scanner console at CITPS Patna",

    disciplines: [
      {
        title: "Radiation Physics & AERB Safety Standards",
        desc: "X-ray production, radiation dosimetry, ALARA principles, and lead shielding protection standards.",
      },
      {
        title: "Computed Tomography (CT) Principles & Protocols",
        desc: "Multi-detector CT scanning, contrast administration, cross-sectional anatomy, and 3D reconstruction.",
      },
      {
        title: "Magnetic Resonance Imaging (MRI) Physics",
        desc: "Superconducting magnets, RF pulse sequences, T1/T2 weighting, MR angiography, and artifact correction.",
      },
      {
        title: "Diagnostic Ultrasonography & Doppler",
        desc: "Transducer mechanics, abdominal sonography, vascular Doppler techniques, and acoustic impedance.",
      },
      {
        title: "Interventional Radiography & Cath Lab Assisting",
        desc: "Fluoroscopy, C-Arm console operation, angiography sterile fields, and DSA imaging.",
      },
    ],

    curriculum: [
      {
        sem: "Semester 01",
        credits: "18 Credits",
        labHours: "120 Laboratory Hours",
        subjects: [
          "Human Anatomy & Physiology I",
          "Radiation Physics & Principles of X-Ray",
          "Darkroom Techniques & Radiographic Film Processing",
          "Medical Terminology & Patient Communication",
        ],
      },
      {
        sem: "Semester 02",
        credits: "18 Credits",
        labHours: "140 Laboratory Hours",
        subjects: [
          "General Radiographic Positioning I (Skeletal System)",
          "AERB Radiation Protection & Safety Rules",
          "Special Radiographic Procedures & Contrast Media",
          "Hospital Practice & Care of Patients",
        ],
      },
      {
        sem: "Semester 03",
        credits: "20 Credits",
        labHours: "160 Laboratory Hours",
        subjects: [
          "Specialized Radiographic Positioning II (Skull & Spine)",
          "Physics of Diagnostic Ultrasound & Echocardiography",
          "Computed Radiography (CR) & Digital Radiography (DR)",
          "Pathology related to Diagnostic Imaging",
        ],
      },
      {
        sem: "Semester 04",
        credits: "20 Credits",
        labHours: "180 Laboratory Hours",
        subjects: [
          "Computed Tomography (CT Scan) Physics & Techniques",
          "CT Cross-Sectional Anatomy & Protocols",
          "Quality Assurance in Diagnostic Radiology",
          "Emergency Trauma Radiography & Mobile X-Ray",
        ],
      },
      {
        sem: "Semester 05",
        credits: "22 Credits",
        labHours: "200 Laboratory Hours",
        subjects: [
          "Magnetic Resonance Imaging (MRI) Physics & Hardware",
          "MRI Protocols (Neuro, Musculoskeletal, Body)",
          "Interventional Radiography & Fluoroscopy Suites",
          "Nuclear Medicine & PET-CT Fundamentals",
        ],
      },
      {
        sem: "Semester 06",
        credits: "20 Credits",
        labHours: "220 Laboratory Hours",
        subjects: [
          "Advanced PACS, DICOM & Hospital Information Systems",
          "Radiation Oncology Principles & Linear Accelerators",
          "Research Project & Clinical Case Presentations",
          "Comprehensive Practical Viva Voce",
        ],
      },
    ],

    labFacilities: [
      {
        name: "Digital Radiography (DR) Simulation Bay",
        spec: "High-frequency 500mA X-Ray unit with flat-panel digital detector and lead-lined console.",
      },
      {
        name: "CT & MRI Advanced Workstation Lab",
        spec: "Dedicated DICOM post-processing consoles with multi-planar reconstruction (MPR) software.",
      },
      {
        name: "Diagnostic Ultrasound Simulation Suite",
        spec: "Curvilinear, linear, and phased-array ultrasound transducers with vascular Doppler simulators.",
      },
      {
        name: "Radiation Safety & Dosimetry Station",
        spec: "Thermo-luminescent dosimeter (TLD) badges, radiation survey meters, and lead protection apparatus.",
      },
    ],

    careerRoles: [
      {
        role: "Senior Radiologic Technologist",
        ctc: "₹4.2 - ₹6.0 LPA",
        desc: "Conducting complex digital radiography and specialized fluoroscopic investigations.",
      },
      {
        role: "CT / MRI Diagnostic Specialist",
        ctc: "₹5.0 - ₹8.5 LPA",
        desc: "Operating 128-slice CT scanners and 3.0T MRI machines in tertiary trauma centers.",
      },
      {
        role: "Cath Lab & Interventional Tech",
        ctc: "₹5.5 - ₹9.0 LPA",
        desc: "Assisting interventional cardiologists and radiologists in coronary and neuro angiographies.",
      },
      {
        role: "Application Specialist (GE / Siemens / Philips)",
        ctc: "₹6.5 - ₹11.0 LPA",
        desc: "Training hospital radiology departments on advanced imaging machinery and clinical protocols.",
      },
    ],

    faqs: [
      {
        q: "What is the career scope of B.Sc. Radiology in Bihar and India?",
        a: "With the rapid expansion of diagnostic imaging centers, AIIMS facilities, and private hospital networks across India and Bihar, qualified radiology technologists command high starting compensation and rapid career progression.",
      },
      {
        q: "Do students get hands-on training on CT Scanners and MRI machines?",
        a: "Yes. Through CITPS partnerships with AIIMS Patna corridor centers, Paras HMRI, and Ruban Memorial, students rotate full-time through active multi-detector CT and high-field MRI units.",
      },
    ],
    icon: LuScanLine,
  },
  {
    id: "operation-theatre-technology",
    slug: "operation-theatre-technology",
    title: "B.Sc. Operation Theatre & Anesthesia Tech (BOTT)",
    shortCode: "BOTT",
    degreeCode: "BOTT-306",
    level: "Undergraduate Degree",
    category: "Surgical & Critical Care",
    duration: "3.5 Years",
    durationDetail: "3 Years Academic + 6 Months Hospital Surgical Internship",
    eligibility: "10+2 with PCB (Min 50% Aggregate)",
    eligibilityDetail: "Passed 10+2 with Physics, Chemistry & Biology. Minimum age 17 years.",
    annualIntake: "40 Approved Seats",
    startingPackage: "₹3.8 - ₹7.0 LPA",
    clinicalHours: "1,200+ Operating Theatre Clinical Hours",
    councilApproval: "Approved by Bihar State Paramedical Council & AICTE",
    summary:
      "Specialized 3.5-Year undergraduate program in surgical instrumentation, anesthesia delivery systems, CSSD sterile processing, and emergency resuscitation in modern operating rooms.",
    image: "/images/course-theatre.jpg",
    alt: "Surgical team inside operation theatre assisted by CITPS technologists",

    disciplines: [
      {
        title: "Aseptic Techniques & CSSD Sterilization",
        desc: "Autoclaving, plasma sterilization, chemical indicators, sterile barrier systems, and zero-infection protocols.",
      },
      {
        title: "Anesthesia Workstations & Medical Gases",
        desc: "Vaporizers, circle breathing circuits, pipeline gas distribution, and emergency oxygen fail-safes.",
      },
      {
        title: "Surgical Instrumentation & Scrub Assisting",
        desc: "Laparoscopic towers, electrosurgical cautery units, harmonic scalpels, and specialized surgical trays.",
      },
      {
        title: "Cardiopulmonary Monitoring & Life Support",
        desc: "Invasive hemodynamic monitors, capnography, defibrillators, crash cart readiness, and BLS/ACLS.",
      },
      {
        title: "Post-Anesthesia Care (PACU) & Surgical ICU",
        desc: "Extubation monitoring, airway management, fluid resuscitation, and surgical pain management protocols.",
      },
    ],

    curriculum: [
      {
        sem: "Semester 01",
        credits: "18 Credits",
        labHours: "120 Laboratory Hours",
        subjects: [
          "Human Anatomy & Physiology I",
          "Principles of Operation Theatre Technology",
          "Basic Anesthesia Equipment & Gas Physics",
          "Medical Ethics, Patient Safety & Sterile Practice",
        ],
      },
      {
        sem: "Semester 02",
        credits: "18 Credits",
        labHours: "140 Laboratory Hours",
        subjects: [
          "Microbiology & CSSD Sterilization Protocols",
          "Surgical Pharmacology & Anesthetic Drugs",
          "Basic Life Support (BLS) & Resuscitation",
          "Patient Positioning for Surgical Procedures",
        ],
      },
      {
        sem: "Semester 03",
        credits: "20 Credits",
        labHours: "160 Laboratory Hours",
        subjects: [
          "General Surgery & Laparoscopic Instrumentation",
          "Advanced Anesthesia Circuits & Ventilators",
          "Blood Transfusion & Fluid Therapy in OT",
          "Infection Control & OT Air Handling Units (AHU)",
        ],
      },
      {
        sem: "Semester 04",
        credits: "20 Credits",
        labHours: "180 Laboratory Hours",
        subjects: [
          "Orthopedic & Trauma Surgery Assisting",
          "Neurosurgical & Spine Instrumentation",
          "Pediatric & Geriatric Anesthesia Assisting",
          "Electrosurgery & Harmonic Scalpel Operation",
        ],
      },
      {
        sem: "Semester 05",
        credits: "22 Credits",
        labHours: "200 Laboratory Hours",
        subjects: [
          "Cardiothoracic Surgery Assisting & Perfusion Basics",
          "Critical Care Monitoring & Invasive Lines in ICU",
          "Emergency Trauma Resuscitation in OT",
          "Quality Assurance & NABH OT Standards",
        ],
      },
      {
        sem: "Semester 06",
        credits: "20 Credits",
        labHours: "220 Laboratory Hours",
        subjects: [
          "Post-Anesthesia Care Unit (PACU) Management",
          "Advanced Minimally Invasive Surgery (MIS)",
          "Research Project & Clinical Audit",
          "Comprehensive Surgical Practical Viva",
        ],
      },
    ],

    labFacilities: [
      {
        name: "Simulated Modular Operation Theatre Suite",
        spec: "Laminar airflow HEPA filtered room, hydraulic surgical table, ceiling shadowless LED OT lights.",
      },
      {
        name: "Advanced Anesthesia Workstation Bay",
        spec: "Modern Mindray & Datex-Ohmeda anesthesia machines with sevoflurane/isoflurane vaporizers.",
      },
      {
        name: "Central Sterile Services Department (CSSD) Lab",
        spec: "High-pressure vertical autoclaves, ultrasonic instrument cleaners, and sterile packing heat sealers.",
      },
      {
        name: "Crash Cart & Simulation ICU Unit",
        spec: "Multiparameter monitors, bi-phasic defibrillators, mechanical ventilators, and adult CPR manikins.",
      },
    ],

    careerRoles: [
      {
        role: "Operation Theatre Clinical Lead",
        ctc: "₹4.0 - ₹6.5 LPA",
        desc: "Supervising surgical theatre preparedness, instrument sterilization, and scrub teams.",
      },
      {
        role: "Anesthesia Technologist",
        ctc: "₹4.5 - ₹7.0 LPA",
        desc: "Administering gases, managing endotracheal intubation equipment, and monitoring vital signs.",
      },
      {
        role: "CSSD In-Charge / Sterilization Manager",
        ctc: "₹4.2 - ₹6.8 LPA",
        desc: "Directing infection control, autoclave operations, and sterile supply chain across hospital wings.",
      },
      {
        role: "Surgical Equipment Clinical Specialist",
        ctc: "₹5.5 - ₹9.5 LPA",
        desc: "Operating advanced robotic surgery consoles, laparoscopic cameras, and laser scalpels.",
      },
    ],

    faqs: [
      {
        q: "What is the role of an Operation Theatre Technologist during surgery?",
        a: "OTT technologists work alongside chief surgeons and anesthesiologists. They ensure sterile fields, calibrate anesthesia machines, prepare micro-surgical instruments, handle cautery units, and monitor vital signs during critical surgery phases.",
      },
    ],
    icon: LuSyringe,
  },
  {
    id: "physiotherapy-support",
    slug: "physiotherapy-support",
    title: "Bachelor of Physiotherapy (BPT)",
    shortCode: "BPT",
    degreeCode: "BPT-408",
    level: "Undergraduate Degree",
    category: "Rehabilitation Science",
    duration: "4.5 Years",
    durationDetail: "4 Years Academic Coursework + 6 Months Mandatory Rotational Hospital Internship",
    eligibility: "10+2 with PCB (Min 50% Aggregate)",
    eligibilityDetail: "Passed 10+2 with Physics, Chemistry & Biology. Minimum 50% aggregate (45% for reserved categories).",
    annualIntake: "60 Approved Seats",
    startingPackage: "₹4.2 - ₹8.0 LPA",
    clinicalHours: "1,500+ Hospital & Clinical Rehabilitation Hours",
    councilApproval: "Approved by Bihar State Paramedical Council & AICTE | NCAHP Aligned",
    summary:
      "A premier 4.5-Year professional clinical degree in musculoskeletal, neurological, cardiothoracic, pediatric, and sports physiotherapy with hands-on hospital rehabilitation.",
    image: "/images/course-physio.jpg",
    alt: "Physiotherapist guiding clinical rehabilitation at CITPS Patna",

    disciplines: [
      {
        title: "Orthopedic & Musculoskeletal Rehabilitation",
        desc: "Joint mobilization, spinal manual therapy, post-fracture recovery, and arthritis management.",
      },
      {
        title: "Neurological Physiotherapy & Stroke Recovery",
        desc: "Bobath/NDT concepts, PNF techniques, cerebral palsy management, and gait re-education.",
      },
      {
        title: "Cardiorespiratory Physiotherapy & ICU Care",
        desc: "Chest physiotherapy, postural drainage, pulmonary rehab, and mechanical ventilation weaning.",
      },
      {
        title: "Sports Medicine & Athletic Injury Prevention",
        desc: "Ligament rehabilitation (ACL/PCL), kinesio taping, dry needling, and high-performance conditioning.",
      },
      {
        title: "Electrotherapy & Therapeutic Modalities",
        desc: "Shortwave diathermy (SWD), TENS, therapeutic ultrasound, interferential therapy (IFT), and lasers.",
      },
    ],

    curriculum: [
      {
        sem: "Year 01",
        credits: "36 Credits",
        labHours: "240 Laboratory Hours",
        subjects: [
          "Human Anatomy & Histology",
          "Human Physiology & Hematology",
          "Biochemistry for Health Sciences",
          "Psychology & Sociology in Healthcare",
        ],
      },
      {
        sem: "Year 02",
        credits: "40 Credits",
        labHours: "300 Laboratory Hours",
        subjects: [
          "Biomechanics & Kinesiology",
          "Exercise Therapy I & II",
          "Electrotherapy I & II (Low & High Frequency)",
          "Pathology, Microbiology & Pharmacology",
        ],
      },
      {
        sem: "Year 03",
        credits: "42 Credits",
        labHours: "360 Clinical Hours",
        subjects: [
          "Clinical Orthopedics & Traumatology",
          "General Medicine, Pediatrics & Surgery",
          "Physiotherapy in Orthopedic Conditions",
          "Neurology & Neurosurgery Fundamentals",
        ],
      },
      {
        sem: "Year 04",
        credits: "44 Credits",
        labHours: "400 Clinical Hours",
        subjects: [
          "Physiotherapy in Neurological Conditions",
          "Cardiothoracic Physiotherapy & ICU Care",
          "Community-Based Rehabilitation & Geriatrics",
          "Sports Physiotherapy & Research Dissertation",
        ],
      },
    ],

    labFacilities: [
      {
        name: "Advanced Electrotherapy Clinical Suite",
        spec: "Multi-channel TENS, interferential therapy (IFT), computerized traction units, and therapeutic ultrasound.",
      },
      {
        name: "Therapeutic Exercise & Gait Training Gym",
        spec: "Parallel bars with posture mirrors, tilt tables, Swiss balls, shoulder wheels, and computerized dynamometers.",
      },
      {
        name: "Neurological Rehabilitation & Pediatric Bay",
        spec: "Sensory integration tools, balance boards, Bobath therapy mats, and suspension gait trainers.",
      },
      {
        name: "Cardiopulmonary Rehabilitation Lab",
        spec: "Treadmills with telemetry ECG, incentive spirometers, flutter valves, and peak flow meters.",
      },
    ],

    careerRoles: [
      {
        role: "Consultant Physiotherapist",
        ctc: "₹4.5 - ₹7.5 LPA",
        desc: "Treating inpatient and outpatient orthopedic and neurological cases in multi-specialty hospitals.",
      },
      {
        role: "Sports Injury & Team Physiotherapist",
        ctc: "₹5.5 - ₹10.0 LPA",
        desc: "Working with professional sports academies, athletic franchises, and fitness centers.",
      },
      {
        role: "Neurological Rehabilitation Specialist",
        ctc: "₹5.0 - ₹8.5 LPA",
        desc: "Directing stroke, spinal cord injury, and pediatric cerebral palsy rehabilitation.",
      },
      {
        role: "Independent Clinical Practitioner",
        ctc: "₹6.0 - ₹15.0+ LPA",
        desc: "Establishing private physiotherapy and pain management rehabilitation clinics.",
      },
    ],

    faqs: [
      {
        q: "Can BPT graduates practice independently and open their own clinic?",
        a: "Yes. BPT is a primary contact medical profession. Graduates registered with the Paramedical Council can legally establish independent private physiotherapy and physical rehabilitation clinics across India.",
      },
    ],
    icon: LuActivity,
  },
  {
    id: "dialysis-technology",
    slug: "dialysis-technology",
    title: "B.Sc. Renal Dialysis Technology",
    shortCode: "BRDT",
    degreeCode: "BRDT-510",
    level: "Undergraduate Degree",
    category: "Nephrology & Renal Care",
    duration: "3.5 Years",
    durationDetail: "3 Years Academic + 6 Months Hospital Nephrology Internship",
    eligibility: "10+2 with PCB (Min 50% Aggregate)",
    eligibilityDetail: "Passed 10+2 with Physics, Chemistry & Biology. Minimum 50% aggregate.",
    annualIntake: "30 Approved Seats",
    startingPackage: "₹3.8 - ₹6.8 LPA",
    clinicalHours: "1,200+ Hemodialysis Clinical Hours",
    councilApproval: "Approved by Bihar State Paramedical Council & AICTE",
    summary:
      "Comprehensive training in hemodialysis machines, peritoneal dialysis, continuous renal replacement therapy (CRRT), water treatment RO systems, and nephrology patient care.",
    image: "/images/course-dialysis.jpg",
    alt: "Technician operating hemodialysis equipment at CITPS Patna",

    disciplines: [
      {
        title: "Hemodialysis Machines & Dialyzer Mechanics",
        desc: "Blood pump calibration, heparin infusion, dialysate proportioning, and membrane flux dynamics.",
      },
      {
        title: "Water Treatment & RO Plant Systems",
        desc: "Multi-media filters, water softeners, reverse osmosis membranes, and endotoxin microbiological testing.",
      },
      {
        title: "Vascular Access Care & Cannulation",
        desc: "Arteriovenous (AV) fistula creation monitoring, buttonhole cannulation, and central venous catheter care.",
      },
      {
        title: "Peritoneal Dialysis & CRRT in Critical Care",
        desc: "CAPD/APD exchanges, pediatric dialysis, and continuous renal replacement therapy for septic ICU patients.",
      },
      {
        title: "Renal Pharmacology & Nutritional Management",
        desc: "Erythropoietin administration, phosphate binders, dialysate formulations, and fluid balance control.",
      },
    ],

    curriculum: [
      {
        sem: "Semester 01",
        credits: "18 Credits",
        labHours: "120 Laboratory Hours",
        subjects: [
          "Human Anatomy & Renal Physiology",
          "Biochemistry & Electrolyte Balance",
          "Fundamentals of Dialysis Technology",
          "Infection Control & Biomedical Ethics",
        ],
      },
      {
        sem: "Semester 02",
        credits: "18 Credits",
        labHours: "140 Laboratory Hours",
        subjects: [
          "Pathology of Kidney Diseases (CKD / AKI)",
          "Microbiology & Dialyzer Reprocessing",
          "Pharmacology for Renal Patients",
          "Emergency Management during Dialysis",
        ],
      },
      {
        sem: "Semester 03",
        credits: "20 Credits",
        labHours: "160 Laboratory Hours",
        subjects: [
          "Hemodialysis Apparatus & Dialysate Chemistry",
          "Vascular Access Care (AV Fistula / Graft / Catheter)",
          "Anticoagulation in Dialysis",
          "Patient Assessment & Fluid Balance Calculations",
        ],
      },
      {
        sem: "Semester 04",
        credits: "20 Credits",
        labHours: "180 Laboratory Hours",
        subjects: [
          "Water Treatment Systems & Reverse Osmosis (RO)",
          "Peritoneal Dialysis (CAPD & APD)",
          "Pediatric & Geriatric Dialysis Protocols",
          "Quality Standards in Dialysis Centers",
        ],
      },
      {
        sem: "Semester 05",
        credits: "22 Credits",
        labHours: "200 Laboratory Hours",
        subjects: [
          "Continuous Renal Replacement Therapy (CRRT) in ICU",
          "Hemoperfusion & Plasmapheresis Techniques",
          "Kidney Transplantation Immunology & Donor Workup",
          "NABH Dialysis Unit Accreditation Guidelines",
        ],
      },
      {
        sem: "Semester 06",
        credits: "20 Credits",
        labHours: "220 Laboratory Hours",
        subjects: [
          "Advanced Dialysis Technologies & Home Hemodialysis",
          "Research Project & Clinical Nephrology Audit",
          "Legal & Regulatory Aspects of Organ Replacement",
          "Comprehensive Practical Viva",
        ],
      },
    ],

    labFacilities: [
      {
        name: "Hemodialysis Training Unit",
        spec: "Modern Fresenius & Nipro hemodialysis stations with bicarbonate proportioning systems.",
      },
      {
        name: "Reverse Osmosis (RO) Water Plant Simulator",
        spec: "Dual-pass RO water purification demonstration unit with endotoxin sampling ports.",
      },
      {
        name: "Dialyzer Reprocessing Station",
        spec: "Automated dialyzer header cleaning and fiber volume bundling verification systems.",
      },
      {
        name: "Vascular Access & Cannulation Simulator",
        spec: "Realistic vascular access arm models for practicing painless buttonhole and rope-ladder cannulation.",
      },
    ],

    careerRoles: [
      {
        role: "Senior Dialysis Technologist",
        ctc: "₹4.0 - ₹6.5 LPA",
        desc: "Supervising hemodialysis runs and managing dialysis centers in corporate hospitals.",
      },
      {
        role: "ICU Nephrology / CRRT Specialist",
        ctc: "₹4.8 - ₹7.5 LPA",
        desc: "Operating emergency continuous dialysis machines for multi-organ failure ICU patients.",
      },
      {
        role: "Dialysis Center Operations Manager",
        ctc: "₹5.5 - ₹9.0 LPA",
        desc: "Directing standalone dialysis chains (NephroPlus, Apex Kidney Care, Fresenius Medical Care).",
      },
    ],

    faqs: [
      {
        q: "Why is Dialysis Technology in such high demand in India?",
        a: "Due to the rising incidence of diabetes and hypertension leading to chronic kidney disease (CKD), hospitals across India are aggressively expanding their dialysis units, creating immense career demand for certified technologists.",
      },
    ],
    icon: LuDroplet,
  },
  {
    id: "optometry",
    slug: "optometry",
    title: "Bachelor of Clinical Optometry (B.Optom)",
    shortCode: "B.Optom",
    degreeCode: "BOPT-612",
    level: "Undergraduate Degree",
    category: "Ophthalmic & Vision Care",
    duration: "4.0 Years",
    durationDetail: "3 Years Academic + 1 Year Mandatory Clinical Internship",
    eligibility: "10+2 with PCB (Min 50% Aggregate)",
    eligibilityDetail: "Passed 10+2 with Physics, Chemistry & Biology. Minimum 50% aggregate.",
    annualIntake: "30 Approved Seats",
    startingPackage: "₹3.8 - ₹7.0 LPA",
    clinicalHours: "1,400+ Clinical Refraction & Eye Clinic Hours",
    councilApproval: "Approved by Bihar State Paramedical Council & AICTE",
    summary:
      "A comprehensive 4-Year professional degree in visual science, subjective refraction, contact lens fitting, binocular vision therapy, and ocular disease diagnosis.",
    image: "/images/course-optometry.jpg",
    alt: "Optometrist conducting slit lamp examination at CITPS Patna",

    disciplines: [
      {
        title: "Visual Optics & Clinical Refraction",
        desc: "Streak retinoscopy, automated phoropters, subjective trial lens refraction, and astigmatic dials.",
      },
      {
        title: "Ophthalmic Diagnostic Instrumentation",
        desc: "Slit-lamp biomicroscopy, non-contact tonometry, optical coherence tomography (OCT), and fundus photography.",
      },
      {
        title: "Contact Lens Science & Specialty Fitting",
        desc: "Soft toric, rigid gas permeable (RGP), scleral contact lenses, and keratoconus management.",
      },
      {
        title: "Binocular Vision & Orthoptic Vision Therapy",
        desc: "Squint assessment, synoptophore exercises, vision therapy for amblyopia (lazy eye), and convergence insufficiency.",
      },
      {
        title: "Low Vision Aids & Pediatric Optometry",
        desc: "Telescopes, high-add magnifiers, digital reading aids, and visual rehabilitation for partially sighted patients.",
      },
    ],

    curriculum: [
      {
        sem: "Year 01",
        credits: "34 Credits",
        labHours: "200 Laboratory Hours",
        subjects: [
          "Ocular Anatomy & Physiology",
          "Physical & Geometric Optics",
          "Basic Biochemistry & Ocular Pharmacology",
          "English Communication & Medical Ethics",
        ],
      },
      {
        sem: "Year 02",
        credits: "38 Credits",
        labHours: "260 Laboratory Hours",
        subjects: [
          "Visual Optics & Retinoscopy",
          "Ophthalmic Lenses & Dispensing Optics",
          "Clinical Examination of Visual System",
          "Ocular Pathology & Microbiology",
        ],
      },
      {
        sem: "Year 03",
        credits: "40 Credits",
        labHours: "320 Clinical Hours",
        subjects: [
          "Contact Lens Practice I & II",
          "Binocular Vision & Ocular Motility",
          "Systemic & Ocular Diseases",
          "Low Vision Aids & Geriatric Optometry",
        ],
      },
      {
        sem: "Year 04",
        credits: "Compulsory Internship",
        labHours: "1 Year Full-Time Clinical Internship",
        subjects: [
          "Rotational clinical postings at premier eye hospitals, retina clinics, and refractive surgery centers.",
        ],
      },
    ],

    labFacilities: [
      {
        name: "Refraction & Visual Acuity Bay",
        spec: "Digital snellen charts, automated phoropters, streak retinoscopes, and trial lens sets.",
      },
      {
        name: "Slit Lamp & Diagnostic Imaging Lab",
        spec: "Haag-Streit style slit lamps, non-contact tonometers, and fundus ophthalmoscopes.",
      },
      {
        name: "Contact Lens & Fitting Suite",
        spec: "Keratometers, corneal topographers, and contact lens evaluation stations.",
      },
      {
        name: "Orthoptic Vision Therapy Clinic",
        spec: "Synoptophore units, prism bars, stereoscopic vision test books, and CAM visual stimulators.",
      },
    ],

    careerRoles: [
      {
        role: "Clinical Optometrist",
        ctc: "₹4.0 - ₹6.5 LPA",
        desc: "Running primary vision clinics, diagnosing refractive errors, and screening ocular pathology.",
      },
      {
        role: "Specialty Contact Lens Consultant",
        ctc: "₹4.5 - ₹7.5 LPA",
        desc: "Fitting specialized scleral lenses, keratoconus prosthetics, and orthokeratology lenses.",
      },
      {
        role: "Hospital Eye Care Department Lead",
        ctc: "₹5.0 - ₹8.5 LPA",
        desc: "Managing outpatient refraction wings and assisting ophthalmologists in tertiary eye centers.",
      },
      {
        role: "Independent Vision Care Center Owner",
        ctc: "₹6.0 - ₹12.0+ LPA",
        desc: "Operating licensed independent optical clinics and vision diagnostic practices.",
      },
    ],

    faqs: [
      {
        q: "What is the difference between an Optometrist and an Ophthalmologist?",
        a: "An Optometrist is a primary healthcare professional trained in vision examination, prescribing corrective lenses, diagnosing eye diseases, and managing binocular vision. An Ophthalmologist is an eye surgeon (MBBS + MS) who performs eye surgeries.",
      },
    ],
    icon: LuEye,
  },
];

export const courseCategories = ["All", ...new Set(courses.map((course) => course.category))];

export const getCourse = (slug) =>
  courses.find(
    (course) =>
      course.id === slug ||
      course.slug === slug ||
      (slug === "bsc-mlt" && course.id === "medical-laboratory-technology") ||
      (slug === "bsc-rit" && course.id === "radiology-imaging-technology") ||
      (slug === "bsc-ott" && course.id === "operation-theatre-technology") ||
      (slug === "bpt" && course.id === "physiotherapy-support") ||
      (slug === "bachelor-of-physiotherapy" && course.id === "physiotherapy-support")
  );
