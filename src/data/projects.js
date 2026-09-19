export const projects = [
  {
    slug: 'gestion-reclamations-salesforce',
    name: 'Gestion des Réclamations Clients',
    company: 'D&A Technologies (stage, 2 mois)',
    domain: 'salesforce',
    featured: true,
    businessProblem:
      "Les réclamations clients arrivaient par des canaux multiples (e-mails, appels, notes manuscrites) sans être systématiquement rattachées au dossier client, avec un suivi manuel lourd, des risques d'erreur (clôture sans résolution tracée) et aucune visibilité globale sur les délais et la performance du service.",
    objective:
      "Concevoir et déployer un module Salesforce complet et sécurisé pour centraliser les réclamations, automatiser leur cycle de vie et fournir un reporting en temps réel.",
    solution:
      "Application Salesforce combinant configuration déclarative (Validation Rules, Flows, Dynamic Forms) pour sécuriser la logique métier, et développement sur-mesure (Apex, LWC) pour les interfaces et processus complexes.",
    dataModel: {
      diagram: 'Account ──(Master-Detail)──▶ Reclamation_Client__c ──(Lookup)──▶ User',
      fields: [
        'Statut (Nouvelle, Affectée, En cours, Résolue) — piloté par Path',
        'Priorité, Type, Responsable (Lookup User)',
        'Date de réclamation, Date limite, Date de clôture',
        'Est_En_Retard__c — champ formule calculé automatiquement',
      ],
    },
    automation: [
      'VR_Cloture_Obligatoire — bloque la clôture sans résolution et date renseignées',
      'VR_Responsable_Obligatoire — bloque l’affectation sans responsable désigné',
      'VR_DateLimiteCoherente — empêche une date limite antérieure à la date de réclamation',
      'VR_Transition_Statut_Interdite — empêche de sauter des étapes du cycle de vie',
      'Screen Flow "Résoudre la réclamation" guidant la saisie obligatoire',
    ],
    security: [
      'Requêtes SOQL exécutées avec la clause WITH USER_MODE (respect strict des droits de l’utilisateur connecté)',
      'Règle de validation empêchant la modification d’un dossier par un utilisateur non responsable',
    ],
    reporting: [
      '4 rapports Salesforce : réclamations par Statut, par Compte, par Type, par Priorité',
      'Dashboard centralisé (Lightning App Page) combinant les rapports et l’outil de recherche LWC',
    ],
    architecture: [
      'Back-end Apex structuré en Controller / Service / Selector / Exception',
      'Front-end en Lightning Web Components (composant gestionReclamationsClient)',
      'Recherche globale avec debouncing (300ms) pour limiter la charge serveur',
      'Flattening des données relationnelles côté JavaScript pour l’affichage en lightning-datatable',
    ],
    keyFeatures: [
      'Centralisation des réclamations liées aux comptes clients',
      'Cycle de vie guidé (Path + Quick Actions + Screen Flow)',
      'Recherche et filtrage instantanés de milliers de réclamations',
      'Indicateur "En retard" calculé automatiquement',
      'Centre de pilotage avec KPIs en temps réel',
    ],
    role:
      'Développement de bout en bout : analyse des besoins, modélisation UML, configuration Salesforce, développement Apex/LWC, tests unitaires et documentation.',
    technologies: ['Salesforce', 'Apex', 'Lightning Web Components', 'SOQL', 'Flow', 'Validation Rules'],
    results: [
      '100% de couverture de code sur les tests unitaires Apex',
      'Méthodologie Agile (Scrum) sur 2 mois, en 4 phases',
    ],
  },
  {
    slug: 'data-warehouse-decisionnel',
    name: 'Data Warehouse Décisionnel',
    company: 'Projet BI / Data Engineering',
    domain: 'data',
    featured: true,
    businessProblem:
      "Des données dispersées et non structurées limitent la capacité à produire des rapports décisionnels fiables.",
    objective:
      "Construire un flux data engineering complet, de l'intégration et du nettoyage des données jusqu'à la création de dashboards décisionnels.",
    solution:
      "Pipeline ETL avec Talend pour l'intégration et le nettoyage, base PostgreSQL (pgAdmin) pour le stockage structuré, et dashboards Microsoft Power BI pour la restitution.",
    dataModel: null,
    automation: [],
    security: [],
    reporting: ['Dashboards décisionnels construits avec Microsoft Power BI'],
    architecture: ['Talend (ETL)', 'PostgreSQL / pgAdmin (stockage)', 'Power BI (visualisation)'],
    keyFeatures: [
      "Intégration et nettoyage de données multi-sources",
      'Conception d’un data warehouse décisionnel',
      'Dashboards Power BI pour le pilotage métier',
    ],
    role: 'Conception et développement du flux complet, de l’intégration à la visualisation.',
    technologies: ['Talend', 'PostgreSQL', 'pgAdmin', 'Power BI'],
    results: [],
  },
  {
    slug: 'detection-maladies-plantes',
    name: 'Détection Automatique de Maladies des Plantes',
    company: 'PFA (Projet de Fin d’Année)',
    domain: 'data',
    featured: true,
    businessProblem:
      'Le diagnostic manuel des maladies de plantes est lent et nécessite une expertise spécialisée peu accessible.',
    objective:
      'Développer un système de diagnostic automatique basé sur le Deep Learning capable de classifier des maladies de plantes à partir d’images.',
    solution:
      "Modèle de Deep Learning entraîné avec PyTorch, optimisé via une analyse d'histogrammes et des techniques avancées d'augmentation de données.",
    dataModel: null,
    automation: [],
    security: [],
    reporting: [],
    architecture: ['PyTorch', 'Analyse d’histogrammes', 'CutMix', 'MixUp'],
    keyFeatures: [
      'Classification automatique de maladies à partir d’images',
      'Optimisation du modèle via analyse d’histogrammes',
      'Augmentation de données avancée (CutMix, MixUp) pour améliorer la généralisation',
    ],
    role: 'Conception, entraînement et optimisation du modèle de Deep Learning.',
    technologies: ['Python', 'PyTorch', 'Deep Learning'],
    results: [],
  },
  {
    slug: 'gestion-parc-materiel-ocp',
    name: 'Gestion du Parc Matériel',
    company: 'OCP (stage)',
    domain: 'data',
    featured: false,
    businessProblem:
      'Le suivi des équipements du parc matériel manquait d’un outil centralisé d’analyse et de structuration des données.',
    objective:
      'Développer une application web de suivi d’équipements intégrant l’analyse et la structuration des données.',
    solution: 'Application web développée avec Flask, données structurées dans une base MySQL.',
    dataModel: null,
    automation: [],
    security: [],
    reporting: [],
    architecture: ['Flask (back-end)', 'MySQL (base de données)'],
    keyFeatures: ['Suivi des équipements', 'Structuration et analyse des données du parc matériel'],
    role: 'Développement de l’application web de bout en bout.',
    technologies: ['Flask', 'MySQL', 'Python'],
    results: [],
  },
]
