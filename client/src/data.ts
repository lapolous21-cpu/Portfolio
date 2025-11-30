export interface Education {
  institution: string;
  degree: string;
  field: string;
  start_date: string;
  end_date: string;
}

export interface Experience {
  title: string;
  company: string;
  employment_type: string;
  start_date: string;
  end_date: string;
  location: string;
  work_mode: string;
  skills?: string[];
}

export interface Project {
  name: string;
  description: string;
}

export interface PortfolioData {
  about: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  social_media: string;
}

export const portfolioData: PortfolioData = {
  "about": "I work as a technician and am passionate about the field.",
  "education": [
    {
      "institution": "Cégep Édouard-Montpetit",
      "degree": "Diplôme d'Études Collégiales",
      "field": "Electrical, Electronic and Communications Engineering Technology / Technician",
      "start_date": "2022-08",
      "end_date": "2025-06"
    },
    {
      "institution": "Centre de Formation du Transport Routier",
      "degree": "Diplôme d'Étude Professionnel",
      "field": "Transportation and Materials Moving",
      "start_date": "2021-09",
      "end_date": "2022-04"
    }
  ],
  "experience": [
    {
      "title": "Technician",
      "company": "Zone Signature",
      "employment_type": "Permanent Full-time",
      "start_date": "2025-07",
      "end_date": "Present",
      "location": "Boucherville, Quebec, Canada",
      "work_mode": "On-site",
      "skills": [
        "Equipment Installation",
        "Network Administration"
      ]
    },
    {
      "title": "Fisheries & Aquaculture Technician",
      "company": "Merinov",
      "employment_type": "Contract Full-time",
      "start_date": "2017-07",
      "end_date": "2017-12",
      "location": "Sept-Îles, Quebec, Canada",
      "work_mode": "On-site"
    }
  ],
  "projects": [
    {
      "name": "Disaster Response Robot",
      "description": "A robot designed for catastrophic natural events equipped with a camera and remote sensors."
    },
    {
      "name": "Ski Station Simulation",
      "description": "Simulation project focused on access control and station operations."
    }
  ],
  "social_media": ""
};
