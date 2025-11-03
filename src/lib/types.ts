export type Incident = {
  id: string;
  title: string;
  date: string; // ISO 8601 format e.g., "2023-10-26"
  sector: string;
  incident_type: 'Data Breach' | 'Ransomware' | 'Phishing' | 'DDoS' | 'Malware';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  summary: string;
  description: string;
  sources: { url: string; title: string }[];
  affected_entities: string[];
};

export type Source = {
  domain: string;
  references: {
    url: string;
    title: string;
    incidentId: string;
    incidentTitle: string;
  }[];
};
