export const salesforceSkills = {
  development: {
    label: 'Development',
    items: [
      'Apex (pattern Controller / Service / Selector)',
      'SOQL (dont clause WITH USER_MODE)',
      'Lightning Web Components (LWC)',
      'JavaScript pour LWC',
    ],
  },
  automation: {
    label: 'Automatisation & configuration',
    items: [
      'Flow (Screen Flow, automatisation de statut)',
      'Validation Rules',
      'Dynamic Forms',
      'Quick Actions & Path',
    ],
  },
  dataModeling: {
    label: 'Data Model & Reporting',
    items: [
      'Modélisation de données (Schema Builder)',
      'Relations Master-Detail & Lookup',
      'Champs formule',
      'Reports & Dashboards (Lightning App Page)',
    ],
  },
  tooling: {
    label: 'Outils & méthode',
    items: [
      'Salesforce CLI (SFDX)',
      'Environnements Sandbox / UAT / Production',
      'Trailhead — 75 badges, rang Adventurer',
      'Méthodologie Agile / Scrum',
    ],
  },
}

export const dataSkills = {
  languages: {
    label: 'Langages',
    items: ['Python', 'SQL', 'Java', 'C#', 'JavaScript'],
  },
  engineeringBI: {
    label: 'Data Engineering & BI',
    items: [
      'ETL avec Talend',
      'Conception de Data Warehouse décisionnel',
      'Microsoft Power BI',
      'PostgreSQL (pgAdmin)',
    ],
  },
  mlAi: {
    label: 'Machine Learning & IA',
    items: [
      'Machine Learning',
      'Deep Learning (PyTorch)',
      "Techniques d'augmentation de données (CutMix, MixUp)",
      'Pipelines ML',
    ],
  },
  librariesDb: {
    label: 'Bibliothèques & bases de données',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'MySQL', 'NoSQL'],
  },
}

// Descriptions "storytelling" — ce que je peux FAIRE avec la techno, pas un pourcentage arbitraire
export const skillStories = [
  {
    name: 'Salesforce',
    domain: 'salesforce',
    description:
      'Conception de solutions CRM avec modèle de données, automatisation déclarative et sécurisation des processus métier.',
  },
  {
    name: 'Apex & LWC',
    domain: 'salesforce',
    description:
      "Développement d'interfaces dynamiques sur-mesure quand les outils déclaratifs ne suffisent plus, avec une architecture back-end séparant contrôleur, service et accès aux données.",
  },
  {
    name: 'SQL',
    domain: 'data',
    description: 'Analyse, transformation et interrogation de données relationnelles.',
  },
  {
    name: 'Power BI',
    domain: 'data',
    description: 'Construction de dashboards permettant de suivre des indicateurs métier.',
  },
  {
    name: 'Python',
    domain: 'data',
    description:
      'Nettoyage, analyse et modélisation de données avec Pandas, NumPy et PyTorch.',
  },
  {
    name: 'ETL / Talend',
    domain: 'data',
    description:
      "Intégration et nettoyage de données depuis plusieurs sources jusqu'à un data warehouse décisionnel.",
  },
]
