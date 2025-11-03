import type { Incident } from './types';

export const incidents: Incident[] = [
  {
    id: 'air-india-breach-2021',
    title: 'Air India Data Breach',
    date: '2021-05-21',
    sector: 'Aviation',
    incident_type: 'Data Breach',
    severity: 'High',
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
    affected_entities: ['Air India', 'SITA'],
  },
  {
    id: 'kudankulam-malware-2019',
    title: 'Kudankulam Nuclear Power Plant Malware Attack',
    date: '2019-09-04',
    sector: 'Energy',
    incident_type: 'Malware',
    severity: 'Critical',
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
