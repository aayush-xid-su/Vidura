import type { Incident } from './types';

export const incidents: Incident[] = [
  {
    id: 'air-india-breach-2021',
    title: 'Air India Data Breach',
    date: '2021-05-21',
    sector: 'Technology',
    incident_type: 'Data Breach',
    severity: 'Critical',
    attack_method: 'Third-party supplier compromise',
    root_cause: 'Vulnerability in SITA PSS',
    summary:
      'Air India reported a massive data breach that affected around 4.5 million customers globally. The breach involved personal data such as names, credit card details, and passport information.',
    description:
      "The breach was part of a larger attack on SITA, a Geneva-based company that provides IT services to the airline industry. The compromised data spanned a period of nearly 10 years, from August 2011 to February 2021. Information leaked included names, dates of birth, contact information, passport information, ticket information, and credit card data. However, the airline assured that CVV/CVC numbers were not compromised.",
    sources: [
      {
        url: 'https://www.thehindu.com/news/national/air-india-data-breach-personal-info-of-45-lakh-fliers-leaked/article34614234.ece',
        title: 'The Hindu: Air India data breach',
      },
    ],
    affected_entities: ['Air India'],
  },
  {
    id: 'mumbai-power-grid-failure-2020',
    title: 'Mumbai Power Grid Failure',
    date: '2020-10-12',
    sector: 'Energy',
    incident_type: 'Malware',
    severity: 'Critical',
    attack_method: 'SCADA system compromise',
    root_cause: 'Unpatched vulnerability in PLC',
    summary:
      'A major power outage in Mumbai was linked to a cyberattack on the power grid infrastructure, raising concerns about the security of critical national systems.',
    description:
      "A study by a US-based cybersecurity firm suggested that the massive power outage in Mumbai could have been a result of a targeted cyberattack from a Chinese state-sponsored group. The attack allegedly involved malware being introduced into the systems that manage the city's power supply. While Indian authorities launched an investigation, the event served as a wake-up call for securing critical infrastructure.",
    sources: [
      {
        url: 'https://www.nytimes.com/2021/02/28/us/politics/china-india-hacking.html',
        title: 'NYT: China-India Hacking',
      },
    ],
    affected_entities: ['Mumbai Power Distribution Corp'],
  },
    {
    id: 'national-health-portal-breach-2020',
    title: 'National Health Portal Breach',
    date: '2020-08-27',
    sector: 'Healthcare',
    incident_type: 'Data Breach',
    severity: 'High',
    attack_method: 'SQL Injection',
    root_cause: 'Insecure web application development',
    summary: 'The National Health Portal of India suffered a data breach, exposing the personal information of millions of users.',
    description: 'A security researcher found a vulnerability in the National Health Portal that allowed access to a database containing personal information of users, including names, email addresses, and phone numbers. The government acknowledged the vulnerability and took steps to fix it.',
    sources: [
      {
        url: 'https://www.indiatoday.in/technology/news/story/india-s-national-health-portal-suffers-data-breach-report-1715769-2020-08-27',
        title: 'India Today: National Health Portal Data Breach'
      }
    ],
    affected_entities: ['Ministry of Health and Family Welfare']
  },
  {
    id: 'bangalore-tech-park-ransomware-2022',
    title: 'Bangalore Tech Park Ransomware',
    date: '2022-03-10',
    sector: 'Technology',
    incident_type: 'Ransomware',
    severity: 'High',
    attack_method: 'Phishing email with malicious attachment',
    root_cause: 'Lack of employee security awareness',
    summary: 'A major tech park in Bangalore was hit by a ransomware attack, disrupting operations for several companies.',
    description: 'The attack encrypted critical data and demanded a ransom for its release. Several companies housed in the tech park were affected, leading to operational downtime and financial losses. The incident highlighted the importance of employee training and robust cybersecurity measures.',
    sources: [
      {
        url: 'https://www.deccanherald.com/city/top-bengaluru-stories/ransomware-attack-on-bengaluru-tech-firm-803734.html',
        title: 'Deccan Herald: Ransomware attack on Bengaluru tech firm'
      }
    ],
    affected_entities: ['Infinite Solutions Pvt. Ltd.']
  },
    {
    id: 'reserve-bank-of-india-ddos-2018',
    title: 'Reserve Bank of India DDoS',
    date: '2018-06-05',
    sector: 'Finance',
    incident_type: 'DDoS',
    severity: 'Medium',
    attack_method: 'Botnet-driven volumetric attack',
    root_cause: 'Targeted attack by a hacktivist group',
    summary: 'The Reserve Bank of India\'s website was targeted by a DDoS attack, causing temporary disruptions.',
    description: 'The attack flooded the RBI\'s website with traffic, making it inaccessible for several hours. A hacktivist group claimed responsibility for the attack. The RBI confirmed the attack and stated that no sensitive data was compromised.',
    sources: [
      {
        url: 'https://www.business-standard.com/article/finance/rbi-website-faces-denial-of-service-attack-118060501173_1.html',
        title: 'Business Standard: RBI website faces denial-of-service attack'
      }
    ],
    affected_entities: ['Reserve Bank of India']
  },
  {
    id: 'aadhaar-auth-system-phishing-2017',
    title: 'Aadhaar Authentication System Phishing',
    date: '2017-05-01',
    sector: 'Government',
    incident_type: 'Phishing',
    severity: 'Medium',
    attack_method: 'Spear-phishing targeting system administrators',
    root_cause: 'Credential compromise',
    summary: 'A phishing attack targeted administrators of the Aadhaar authentication system, attempting to gain unauthorized access.',
    description: 'The attack involved sending spear-phishing emails to system administrators to steal their credentials. The Unique Identification Authority of India (UIDAI) detected the attack and took measures to prevent any data breach. The incident highlighted the risks associated with social engineering attacks.',
    sources: [
      {
        url: 'https://economictimes.indiatimes.com/tech/internet/uidai-detects-phishing-attempt-to-get-aadhaar-data/articleshow/58455799.cms',
        title: 'The Economic Times: UIDAI detects phishing attempt'
      }
    ],
    affected_entities: ['UIDAI']
  },
  {
    id: 'kudankulam-malware-2019',
    title: 'Kudankulam Nuclear Power Plant Malware Attack',
    date: '2019-09-04',
    sector: 'Energy',
    incident_type: 'Malware',
    severity: 'Critical',
    attack_method: 'Malware infection in IT network',
    root_cause: 'Network segmentation failure',
    summary:
      "A malware attack targeted the Kudankulam Nuclear Power Plant in Tamil Nadu. While the plant's operational systems were not affected, administrative networks were breached.",
    description:
      "The Nuclear Power Corporation of India Ltd (NPCIL) initially denied the breach but later confirmed that a malware, identified as 'Dtrack', had infected a computer in its administrative network. The infected machine was not connected to the critical internal network that controls the power plant. The incident highlighted the vulnerability of critical infrastructure to cyber attacks.",
    sources: [
      {
        url: 'https://www.reuters.com/article/us-india-nuclearpower-cyber/india-confirms-malware-attack-on-nuclear-power-plant-idUSKBN1X9285',
        title: 'Reuters: India confirms malware attack on nuclear power plant',
      },
    ],
    affected_entities: ['Kudankulam Nuclear Power Plant', 'NPCIL'],
  },
  {
    id: 'dominos-india-breach-2021',
    title: "Domino's India Data Breach",
    date: '2021-04-01',
    sector: 'Food & Beverage',
    incident_type: 'Data Breach',
    severity: 'High',
    attack_method: 'Unsecured database exposure',
    root_cause: 'Misconfiguration of cloud services',
    summary:
      'A massive data breach at Domino\'s India exposed the personal details of 18 crore (180 million) users, including their names, mobile numbers, email IDs, and delivery addresses.',
    description:
      "The data, which also included 1 million credit card details, was put up for sale on the dark web. The breach was discovered when a security researcher revealed that a search engine had been created on the dark web allowing anyone to query for user details. Jubilant FoodWorks, the parent company of Domino's in India, confirmed the breach but denied that any financial information was compromised.",
    sources: [
      {
        url: 'https://gadgets.ndtv.com/internet/news/dominos-india-data-breach-18-crore-orders-details-leaked-phone-number-email-address-name-payment-gps-location-2446726',
        title: "Gadgets 360: Domino's India Data of 18 Crore Orders Leaked",
      },
    ],
    affected_entities: ["Domino's India", 'Jubilant FoodWorks'],
  },
  {
    id: 'aiims-delhi-ransomware-2022',
    title: 'AIIMS Delhi Ransomware Attack',
    date: '2022-11-23',
    sector: 'Healthcare',
    incident_type: 'Ransomware',
    severity: 'Critical',
    attack_method: 'Exploitation of unpatched server vulnerability',
    root_cause: 'Delayed patching of known vulnerabilities',
    summary:
      'The All India Institute of Medical Sciences (AIIMS) in Delhi was hit by a major ransomware attack, crippling its servers and disrupting patient care services for nearly two weeks.',
    description:
      'The attack locked access to patient records, appointment systems, and other critical hospital functions. Services had to be managed manually, causing significant delays and chaos. The attackers reportedly demanded a ransom of ₹200 crore in cryptocurrency. The incident led to a massive effort by national cybersecurity agencies to restore the systems and prompted a review of security protocols at major hospitals.',
    sources: [
      {
        url: 'https://www.indiatoday.in/india/story/aiims-delhi-server-hack-ransomware-attack-patient-data-theft-2305018-2022-12-04',
        title: 'India Today: AIIMS Delhi server hack',
      },
    ],
    affected_entities: ['AIIMS Delhi'],
  },
  {
    id: 'upi-phishing-scams-2023',
    title: 'Widespread UPI Phishing Scams',
    date: '2023-06-15',
    sector: 'Finance',
    incident_type: 'Phishing',
    severity: 'Medium',
    attack_method: 'Social engineering via SMS and messaging apps',
    root_cause: 'Lack of user awareness about phishing tactics',
    summary:
      'Multiple reports emerged about widespread phishing scams targeting users of the Unified Payments Interface (UPI) across India, leading to significant financial losses for individuals.',
    description:
      'Scammers used various techniques, including fake payment requests, QR code scams, and fraudulent links sent via SMS and WhatsApp. They impersonated customer service representatives, government officials, or online merchants to trick users into authorizing payments or revealing their UPI PINs. The National Payments Corporation of India (NPCI) and various banks issued advisories urging users to be cautious.',
    sources: [
      {
        url: 'https://www.livemint.com/money/personal-finance/upi-frauds-on-the-rise-how-to-keep-your-money-safe-from-scammers-11686800000000.html',
        title: 'Livemint: UPI frauds on the rise',
      },
    ],
    affected_entities: ['UPI Users', 'Various Banks'],
  },
  {
    id: 'cdsl-breach-2022',
    title: 'CDSL KYC Data Breach',
    date: '2022-05-19',
    sector: 'Finance',
    incident_type: 'Data Breach',
    severity: 'High',
    attack_method: 'API vulnerability exploitation',
    root_cause: 'Insecure API endpoint',
    summary: 'Central Depository Services (India) Ltd (CDSL) experienced a data breach exposing the KYC data of over 4 crore (40 million) investors twice in a 10-day period.',
    description: 'A vulnerability in a CDSL subsidiary\'s system exposed sensitive investor data, including names, PAN numbers, dates of birth, and contact information. The breach was discovered by a security research firm, which alerted CERT-In. CDSL acknowledged the vulnerability and reported that it was patched immediately. This was a significant event as CDSL is one of the two major depositories in India.',
    sources: [
      {
        url: 'https://www.business-standard.com/article/companies/cdsl-arm-suffers-data-breach-kyc-details-of-43-9-mn-investors-exposed-122051900018_1.html',
        title: 'Business Standard: CDSL arm suffers data breach'
      }
    ],
    affected_entities: ['CDSL', 'Indian Investors']
  },
  {
    id: 'cowin-portal-leak-2023',
    title: 'CoWIN Portal Data Leak Allegations',
    date: '2023-06-12',
    sector: 'Government',
    incident_type: 'Data Breach',
    severity: 'Critical',
    attack_method: 'Leaked credentials to a Telegram bot',
    root_cause: 'Unclear; investigation ongoing. Possibly compromised partner systems.',
    summary: 'Personal data of vaccinated Indian citizens, allegedly sourced from the CoWIN portal, was made available on a Telegram bot, raising massive privacy concerns.',
    description: 'The leaked data reportedly included names, mobile numbers, Aadhaar numbers, passport numbers, and vaccination status. The government initially denied any breach of the CoWIN portal itself, suggesting the data may have been leaked from other databases that had access to CoWIN APIs. An investigation was launched to determine the source of the leak. The incident sparked a national debate on data security and privacy.',
    sources: [
      {
        url: 'https://www.thequint.com/tech-and-auto/tech-news/cowin-data-breach-indian-citizens-data-leaked-on-telegram-heres-what-we-know',
        title: 'The Quint: CoWIN Data Breach Explained'
      }
    ],
    affected_entities: ['Indian Citizens', 'Government of India']
  },
  {
    id: 'spicejet-ransomware-2022',
    title: 'SpiceJet Ransomware Attack',
    date: '2022-05-24',
    sector: 'Aviation',
    incident_type: 'Ransomware',
    severity: 'High',
    attack_method: 'Network-wide ransomware deployment',
    root_cause: 'Undisclosed entry point; likely unpatched system or phishing.',
    summary: 'Indian airline SpiceJet was hit by a ransomware attack that disrupted its flight operations, leading to delays and cancellations across its network.',
    description: 'The attack, which occurred overnight, impacted the systems that handle flight departures and scheduling. Many passengers were left stranded at airports as the airline struggled to dispatch flights manually. SpiceJet stated that its IT team contained and rectified the situation and that operations were returning to normal. The incident again highlighted the aviation sector\'s vulnerability.',
    sources: [
      {
        url: 'https://www.bbc.com/news/world-asia-india-61578130',
        title: 'BBC: SpiceJet: Ransomware attack disrupts flights of Indian airline'
      }
    ],
    affected_entities: ['SpiceJet']
  }
];
