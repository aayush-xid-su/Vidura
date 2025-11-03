import type { Incident } from './types';

export const incidents: Incident[] = [
  {
    id: 'air-india-breach-2021',
    title: 'Air India Data Breach',
    date: '2021-05-21',
    sector: 'Aviation',
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
    affected_entities: ['Air India', 'SITA'],
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
  },
  {
    id: 'iloveyou-worm-2000',
    title: 'ILOVEYOU Worm Hits India',
    date: '2000-05-04',
    sector: 'Various',
    incident_type: 'Malware',
    severity: 'Critical',
    summary: 'The ILOVEYOU worm, one of the most destructive global malware outbreaks, caused widespread disruption in India, affecting businesses and government agencies.',
    description: 'The ILOVEYOU worm spread rapidly via email with the subject line "ILOVEYOU". The attachment, a VBScript file, would overwrite user files and send itself to all contacts in the user\'s address book. Indian companies and government departments were significantly impacted, leading to major data loss and system downtime.',
    sources: [
      {
        title: 'The \'I Love You\' worm, 2000 coverage (The Guardian)',
        url: '#',
      },
      {
        title: 'Rediff: The Indian who fought \'I Love You\' (May 2000)',
        url: '#',
      },
    ],
    affected_entities: ['Various Indian Businesses', 'Government of India'],
    attack_method: 'Email worm',
    root_cause: 'Social engineering and lack of email attachment security',
  },
  {
    id: 'zee-tv-defacement-2000',
    title: 'Zee TV Website Defacement',
    date: '2000-10-01',
    sector: 'Media',
    incident_type: 'Other',
    severity: 'Medium',
    summary: 'The official website of Zee TV (zeetv.com) was defaced by hackers, one of several high-profile website defacements in India during this period.',
    description: 'In a wave of cyberattacks, the website of major Indian broadcaster Zee TV was defaced. The incident was part of a larger trend of hacktivism and website vandalism that highlighted the poor security posture of many Indian websites at the time.',
    sources: [
      {
        title: 'India Today (June 2001 retrospective mentioning Zee defacement in 2000)',
        url: '#',
      },
    ],
    affected_entities: ['Zee TV'],
    attack_method: 'Website defacement',
    root_cause: 'Web server vulnerability',
  },
  {
    id: 'indian-railways-defacement-2002',
    title: 'Indian Railways Website Hacked',
    date: '2002-01-15',
    sector: 'Transportation',
    incident_type: 'Other',
    severity: 'Medium',
    summary: 'The official website of the Indian Railways was defaced by hackers, disrupting information services for passengers.',
    description: 'Hackers targeted and defaced the Indian Railways website, replacing its content. While booking systems were reportedly unaffected, the incident caused confusion and demonstrated the vulnerability of government web infrastructure.',
    sources: [
      { title: 'Hackers hit Indian Railways website', url: '#' },
    ],
    affected_entities: ['Indian Railways'],
    attack_method: 'Website defacement',
    root_cause: 'Web server vulnerability',
  },
  {
    id: 'mea-website-hack-2002',
    title: 'Ministry of External Affairs Website Hacked',
    date: '2002-02-10',
    sector: 'Government',
    incident_type: 'Other',
    severity: 'High',
    summary: 'The website of India\'s Ministry of External Affairs (MEA) was hacked and defaced by a group claiming to be from Pakistan.',
    description: 'A Pakistani hacker group called G-Force claimed responsibility for defacing the MEA website. This was a high-profile incident in the ongoing cyber conflict between Indian and Pakistani hacktivist groups.',
    sources: [
      { title: 'India\'s foreign ministry web site hacked', url: '#' },
      { title: 'Pakistani group G-Force hacked MEA site', url: '#' },
    ],
    affected_entities: ['Ministry of External Affairs'],
    attack_method: 'Website defacement',
    root_cause: 'Unpatched server vulnerability',
  },
  {
    id: 'code-red-worm-2001',
    title: 'Code Red Worm Infects Indian Systems',
    date: '2001-07-15',
    sector: 'Various',
    incident_type: 'Malware',
    severity: 'High',
    summary: 'The Code Red worm infected numerous servers in India running Microsoft\'s IIS web server, causing defacements and contributing to a global DDoS attack.',
    description: 'The Code Red worm exploited a vulnerability in Microsoft IIS. Infected servers would deface websites with the message "Hacked by Chinese!" and launch a DDoS attack against the White House website. Many Indian government and business servers were affected.',
    sources: [{ title: 'The Spread of the Code-Red Worm (CAIDA)', url: '#' }],
    affected_entities: ['Various Indian Businesses', 'Government of India'],
    attack_method: 'Network worm',
    root_cause: 'Vulnerability in Microsoft IIS',
  },
  {
    id: 'nimda-worm-2001',
    title: 'Nimda Worm Causes Havoc in India',
    date: '2001-09-18',
    sector: 'Various',
    incident_type: 'Malware',
    severity: 'Critical',
    summary: 'The complex Nimda worm spread rapidly across India, using multiple infection vectors including email, network shares, and web servers.',
    description: 'Just a week after the 9/11 attacks, the Nimda (admin spelled backwards) worm created widespread disruption. It used five different methods to propagate, causing significant slowdowns of internet traffic and compromising servers across India and the world.',
    sources: [
      { title: 'The Nimda Worm: An Overview (SANS Institute)', url: '#' },
      { title: 'Safe mail and worm attack — The Nimda worm', url: '#' },
    ],
    affected_entities: ['Various'],
    attack_method: 'Multi-vector worm',
    root_cause: 'Multiple vulnerabilities in Windows systems',
  },
  {
    id: 'bugbear-worm-2002',
    title: 'Bugbear Worm Steals Data in India',
    date: '2002-10-01',
    sector: 'Finance',
    incident_type: 'Malware',
    severity: 'High',
    summary: 'The Bugbear worm infected computers in India, stealing sensitive data like banking credentials and logging keystrokes.',
    description: 'Bugbear was a sophisticated worm that could bypass personal firewalls and antivirus software. It would terminate security software processes and log keystrokes, aiming to capture financial information. Many Indian users and businesses were affected.',
    sources: [
      { title: 'Bugbear Worm Spreads Rapidly (BBC News, Oct 2002)', url: '#' },
      { title: 'Bugbear Worm Analysis (Symantec)', url: '#' },
    ],
    affected_entities: ['Indian banking customers'],
    attack_method: 'Email worm with keylogger',
    root_cause: 'Vulnerability in Internet Explorer',
  },
  {
    id: 'sql-slammer-worm-2003',
    title: 'SQL Slammer Worm Impacts Indian Networks',
    date: '2003-01-25',
    sector: 'Technology',
    incident_type: 'Malware',
    severity: 'High',
    summary: 'The SQL Slammer worm caused a massive internet slowdown in India and globally by overwhelming networks with traffic from infected Microsoft SQL servers.',
    description: 'Slammer was a tiny worm that spread incredibly fast, infecting most of its victims within 10 minutes. It didn\'t write itself to disk, but resided in memory. It generated enormous amounts of network traffic, effectively causing a denial of service for many networks in India.',
    sources: [{ title: 'SQL Slammer (Wikipedia)', url: '#' }],
    affected_entities: ['ISPs', 'Businesses using MS SQL Server'],
    attack_method: 'Network worm',
    root_cause: 'Vulnerability in Microsoft SQL Server',
  },
  {
    id: 'blaster-worm-2003',
    title: 'Blaster Worm Disrupts Windows PCs in India',
    date: '2003-08-11',
    sector: 'Various',
    incident_type: 'Malware',
    severity: 'High',
    summary: 'The Blaster worm spread through Indian networks, causing Windows XP and 2000 machines to crash and reboot repeatedly.',
    description: 'Blaster exploited a vulnerability in the DCOM RPC service on Windows. Infected machines would display a shutdown message and launch a DDoS attack against windowsupdate.com. It caused significant productivity losses across India.',
    sources: [{ title: 'Blaster (computer worm) (Wikipedia)', url: '#' }],
    affected_entities: ['Windows PC users'],
    attack_method: 'Network worm',
    root_cause: 'DCOM RPC vulnerability in Windows',
  },
  {
    id: 'sobig-worm-2003',
    title: 'Sobig.F Worm Clogs Email Systems in India',
    date: '2003-08-19',
    sector: 'Various',
    incident_type: 'Malware',
    severity: 'High',
    summary: 'The Sobig.F worm became the dominant malware threat in India, generating massive volumes of spam and clogging email servers.',
    description: 'Sobig.F spread as an email attachment. When activated, it would search for email addresses on the local machine and send itself to them. It also had a payload to download other malware. Its sheer volume brought many email systems to a crawl.',
    sources: [
      { title: 'Sobig (Wikipedia)', url: '#' },
      { title: 'When worms strike (Times of India, Sep 2003)', url: '#' },
    ],
    affected_entities: ['Email users', 'Businesses'],
    attack_method: 'Email worm',
    root_cause: 'Social engineering via email',
  },
  {
    id: 'suhas-katti-case-2004',
    title: 'First Conviction under IT Act 2000',
    date: '2004-11-01',
    sector: 'Legal',
    incident_type: 'Other',
    severity: 'Low',
    summary: 'In a landmark case, Suhas Katti was convicted for online harassment, marking the first conviction under India\'s Information Technology Act, 2000.',
    description: 'Suhas Katti was found guilty of posting obscene and defamatory messages about a woman on a Yahoo message group. The case was notable for the speed of the conviction and for being the first case to result in a conviction under the new IT Act, setting a precedent for cybercrime prosecution in India.',
    sources: [
      { title: 'Suhas Katti v. Tamil Nadu (Wikipedia)', url: '#' },
    ],
    affected_entities: ['Individual'],
    attack_method: 'Online harassment',
    root_cause: 'Cyberstalking and defamation',
  },
  {
    id: 'pune-bpo-fraud-2005',
    title: 'Major BPO Fraud in Pune',
    date: '2005-04-01',
    sector: 'IT',
    incident_type: 'Data Breach',
    severity: 'High',
    summary: 'A large-scale fraud at a Pune-based BPO resulted in the siphoning of $426,000 from US bank accounts, shaking confidence in India\'s BPO industry.',
    description: 'Employees at a BPO firm in Pune used customer data they had access to, in order to illegally withdraw money from several US bank accounts. The incident was a major blow to the reputation of India\'s booming outsourcing industry and led to calls for stronger data protection laws and security measures.',
    sources: [
      { title: 'BPO fraud: another Rs 38 lakh traced | Pune News', url: '#' },
      { title: 'Pune call centre fraud rattles India\'s booming BPO sector, raises questions on security', url: '#' }
    ],
    affected_entities: ['MphasiS (BPO)', 'US Banking Customers'],
    attack_method: 'Insider threat',
    root_cause: 'Abuse of access to sensitive customer data',
  },
  {
    id: 'zotob-worm-2005',
    title: 'Zotob Worm Affects Indian Media Companies',
    date: '2005-08-16',
    sector: 'Media',
    incident_type: 'Malware',
    severity: 'Medium',
    summary: 'The Zotob worm, targeting Windows 2000 systems, infected several media organizations in India and globally, disrupting their operations.',
    description: 'The Zotob worm exploited a Plug and Play vulnerability in Windows 2000. It disrupted operations at several major international media companies. While not as widespread as previous worms, its targeted nature showed the evolving threat landscape.',
    sources: [{ title: 'Zotob (computer worm) - Wikipedia', url: '#' }],
    affected_entities: ['Media companies'],
    attack_method: 'Network worm',
    root_cause: 'Plug and Play vulnerability in Windows 2000',
  },
  {
    id: 'kama-sutra-worm-2006',
    title: 'Kama Sutra Worm Threatens Data Deletion',
    date: '2006-02-03',
    sector: 'Various',
    incident_type: 'Malware',
    severity: 'High',
    summary: 'The Kama Sutra (or Nyxem) worm spread through India, threatening to overwrite files on infected computers on the 3rd of every month.',
    description: 'The worm spread via email attachments. Its payload was set to trigger on the third day of each month, at which point it would attempt to overwrite files with various extensions (like .doc, .xls, .pdf). This destructive potential caused widespread concern among users and businesses in India.',
    sources: [
      { title: 'Kama Sutra (computer worm) - Wikipedia', url: '#' },
      { title: 'The Nyxem Email Virus: Analysis and Inferences - CAIDA.org', url: '#' }
    ],
    affected_entities: ['PC users'],
    attack_method: 'Email worm with destructive payload',
    root_cause: 'Social engineering via email',
  },
  {
    id: 'wannacry-ransomware-2017',
    title: 'WannaCry Ransomware Hits India',
    date: '2017-05-12',
    sector: 'Various',
    incident_type: 'Ransomware',
    severity: 'Critical',
    summary: 'The global WannaCry ransomware attack impacted thousands of computers in India, affecting police departments, businesses, and individuals.',
    description: 'WannaCry exploited a Windows vulnerability (EternalBlue) to spread rapidly. It encrypted files and demanded a Bitcoin ransom. In India, systems in Andhra Pradesh, Gujarat, and West Bengal police departments were among those affected. The attack was a major wake-up call for ransomware threats.',
    sources: [
        { title: 'CERT-In Advisory on WannaCry', url: '#' },
    ],
    affected_entities: ['Andhra Pradesh Police', 'Gujarat State Police', 'West Bengal State Electricity Distribution Company'],
    attack_method: 'Ransomware worm',
    root_cause: 'Exploitation of SMB vulnerability (EternalBlue)',
  },
  {
    id: 'sbi-phishing-2018',
    title: 'Massive Phishing Attack on SBI Customers',
    date: '2018-08-01',
    sector: 'Finance',
    incident_type: 'Phishing',
    severity: 'High',
    summary: 'A large-scale phishing campaign targeted customers of the State Bank of India (SBI), attempting to steal login credentials and financial information.',
    description: 'The campaign involved sending SMS messages and emails that looked like official SBI communications, directing users to fake websites to update their details. Many customers reported losing money. SBI issued several warnings and advisories to its customers.',
    sources: [
        { title: 'Livemint Report on SBI Phishing', url: '#' },
    ],
    affected_entities: ['State Bank of India Customers'],
    attack_method: 'SMS and Email Phishing',
    root_cause: 'Social engineering',
  },
  {
    id: 'justdial-data-leak-2019',
    title: 'Justdial Data Leak Exposes Millions',
    date: '2019-04-20',
    sector: 'Technology',
    incident_type: 'Data Breach',
    severity: 'High',
    summary: 'A data leak at Justdial, a major Indian local search engine, exposed the personal data of over 100 million users.',
    description: 'An unprotected API endpoint was discovered that allowed access to the data of any Justdial user, including names, email addresses, mobile numbers, and more. The issue affected users who had called the company\'s 8888888888 number. The vulnerability was present for a significant period before being discovered and reported.',
    sources: [
        { title: 'TechCrunch Exclusive on Justdial Leak', url: '#' },
    ],
    affected_entities: ['Justdial Users'],
    attack_method: 'Insecure API',
    root_cause: 'Lack of API security controls',
  },
  {
    id: 'cosmos-bank-heist-2018',
    title: 'Cosmos Bank Heist',
    date: '2018-08-11',
    sector: 'Finance',
    incident_type: 'Data Breach',
    severity: 'Critical',
    summary: 'In a sophisticated attack, hackers siphoned over ₹94 crore ($13.5 million) from Pune-based Cosmos Bank through simultaneous ATM withdrawals in 28 countries.',
    description: 'Hackers breached the bank\'s ATM server to clone thousands of debit cards and also initiated fraudulent SWIFT transactions. The money was withdrawn in a highly coordinated manner over two days. The attack was attributed to the Lazarus Group, a North Korean state-sponsored hacking collective.',
    sources: [
        { title: 'Reuters Insight: The Cosmos Bank Heist', url: '#' },
    ],
    affected_entities: ['Cosmos Bank'],
    attack_method: 'ATM malware, SWIFT fraud',
    root_cause: 'Compromise of core banking system and SWIFT endpoints',
  },
  {
    id: 'indane-gas-data-leak-2019',
    title: 'Indane Gas Aadhaar Data Leak',
    date: '2019-02-18',
    sector: 'Energy',
    incident_type: 'Data Breach',
    severity: 'High',
    summary: 'A vulnerability on the website of Indane Gas, a major LPG provider, exposed the Aadhaar details of millions of its customers.',
    description: 'A French security researcher found a flaw on an Indane dealer portal that allowed access to the names, addresses, and Aadhaar numbers of a vast number of customers. The lack of authentication on the portal meant that anyone with a valid customer ID could potentially access the data of other customers.',
    sources: [
        { title: 'ZDNet Report on Indane Leak', url: '#' },
    ],
    affected_entities: ['Indane Gas Customers'],
    attack_method: 'Insecure Direct Object Reference (IDOR)',
    root_cause: 'Poorly secured dealer portal API',
  },
  {
    id: 'cleartrip-data-breach-2022',
    title: 'Cleartrip Data Breach',
    date: '2022-07-18',
    sector: 'Travel',
    incident_type: 'Data Breach',
    severity: 'High',
    summary: 'Online travel booking company Cleartrip suffered a data breach, with the company acknowledging an unauthorized access to its internal systems.',
    description: 'Cleartrip sent an email to its customers confirming a security anomaly and advising a password reset. While the company stated that no sensitive information was compromised, reports suggested that customer data had appeared for sale on the dark web. This highlighted the ongoing risks faced by e-commerce platforms.',
    sources: [
        { title: 'TechCrunch Report on Cleartrip Breach', url: '#' },
    ],
    affected_entities: ['Cleartrip'],
    attack_method: 'Undisclosed',
    root_cause: 'Breach of internal systems',
  }
];
