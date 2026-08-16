export const conditions = [
  {
    slug: "abdominal-pain",
    title: "Abdominal Pain",
    description:
      "Explore patient stories and treatment insights related to abdominal pain, from diagnosis to recovery journeys.",
  },
  {
    slug: "antibiotics",
    title: "Antibiotics",
    description:
      "Learn how patients and doctors approach antibiotic treatments, resistance concerns, and recovery outcomes.",
  },
  {
    slug: "arrhythmia",
    title: "Arrhythmia",
    description:
      "Discover real experiences managing irregular heart rhythms, monitoring strategies, and treatment paths.",
  },
  {
    slug: "autoimmune-disorders",
    title: "Autoimmune Disorders",
    description:
      "Browse case studies and community insights on living with and treating autoimmune conditions.",
  },
  {
    slug: "cancer",
    title: "Cancer",
    description:
      "Find healing journeys, treatment analysis, and peer support for patients navigating cancer care.",
  },
  {
    slug: "chronic-pain",
    title: "Chronic Pain",
    description:
      "Understand approaches that help patients manage chronic pain, from therapies to community support.",
  },
  {
    slug: "depression",
    title: "Depression",
    description:
      "Read patient and clinician perspectives on depression treatment, recovery, and mental health support.",
  },
  {
    slug: "diabetes",
    title: "Diabetes",
    description:
      "Explore stories and strategies for managing diabetes, lifestyle changes, and long-term health outcomes.",
  },
  {
    slug: "high-blood-pressure",
    title: "High Blood Pressure",
    description:
      "See how patients monitor and improve blood pressure with medical guidance and daily habits.",
  },
  {
    slug: "skin-issues",
    title: "Skin Issues",
    description:
      "Browse dermatology-related case studies covering diagnosis, treatment options, and patient progress.",
  },
  {
    slug: "suicidal-thoughts",
    title: "Suicidal Thoughts",
    description:
      "Access supportive resources and shared experiences focused on mental health and crisis recovery.",
  },
  {
    slug: "ibd",
    title: "IBD",
    description:
      "Insights into inflammatory bowel disease journeys, flare management, and treatment approaches.",
  },
  {
    slug: "migraine",
    title: "Migraine",
    description:
      "Patient experiences with migraine triggers, prevention, and therapies that made a difference.",
  },
  {
    slug: "multiple-sclerosis",
    title: "Multiple Sclerosis (MS)",
    description:
      "Stories and analyses from patients managing MS symptoms, treatments, and daily living.",
  },
  {
    slug: "rheumatoid-arthritis",
    title: "Rheumatoid Arthritis",
    description:
      "Explore treatment success patterns and personal journeys with rheumatoid arthritis.",
  },
  {
    slug: "type-2-diabetes",
    title: "Type 2 Diabetes",
    description:
      "Community insights on Type 2 Diabetes management, lifestyle changes, and medical care.",
  },
  {
    slug: "acid-reflux",
    title: "Acid Reflux",
    description:
      "Learn from patients dealing with acid reflux, dietary changes, and lasting relief strategies.",
  },
  {
    slug: "adhd",
    title: "ADHD",
    description:
      "Shared experiences on ADHD diagnosis, treatment plans, and everyday coping tools.",
  },
  {
    slug: "allergies",
    title: "Allergies",
    description:
      "Case studies and tips for managing allergies, from mild reactions to chronic conditions.",
  },
  {
    slug: "alzheimers-dementia",
    title: "Alzheimer’s & Dementia",
    description:
      "Supportive journeys and caregiver insights related to Alzheimer’s and dementia care.",
  },
  {
    slug: "bipolar-disorder",
    title: "Bipolar Disorder",
    description:
      "Patient and clinician perspectives on bipolar disorder treatment and long-term wellness.",
  },
  {
    slug: "crohns-disease",
    title: "Crohn’s Disease",
    description:
      "Real stories about Crohn’s Disease flares, treatments, and community support.",
  },
  {
    slug: "cold-flu",
    title: "Cold & Flu",
    description:
      "Practical recovery insights and medical guidance for cold and flu management.",
  },
  {
    slug: "copd",
    title: "COPD",
    description:
      "Explore COPD treatment paths, breathing support strategies, and patient outcomes.",
  },
  {
    slug: "fibromyalgia",
    title: "Fibromyalgia",
    description:
      "Understand fibromyalgia symptom management through shared healing experiences.",
  },
  {
    slug: "heart-disease",
    title: "Heart Disease",
    description:
      "Cardiac recovery stories, prevention insights, and treatment analysis from the community.",
  },
  {
    slug: "high-cholesterol",
    title: "High Cholesterol",
    description:
      "Approaches patients use to manage cholesterol with medication, diet, and lifestyle.",
  },
  {
    slug: "hiv",
    title: "HIV",
    description:
      "Stories focused on HIV care, treatment adherence, and living well with support.",
  },
  {
    slug: "hypertension",
    title: "Hypertension",
    description:
      "Patient journeys managing hypertension with monitoring, medication, and habits.",
  },
  {
    slug: "ipf",
    title: "IPF",
    description:
      "Insights into Idiopathic Pulmonary Fibrosis care and community experiences.",
  },
  {
    slug: "osteoarthritis",
    title: "Osteoarthritis",
    description:
      "Mobility, pain management, and treatment stories related to osteoarthritis.",
  },
  {
    slug: "psoriasis",
    title: "Psoriasis",
    description:
      "Dermatology journeys covering psoriasis flare control and treatment options.",
  },
  {
    slug: "skin-disorders-care",
    title: "Skin Disorders Care",
    description:
      "Broader skin disorder case studies with treatment insights and recovery tips.",
  },
  {
    slug: "stds",
    title: "STDs",
    description:
      "Education-focused stories and care pathways related to sexually transmitted diseases.",
  },
];

export function getConditionBySlug(slug) {
  return conditions.find((item) => item.slug === slug) || null;
}

export function conditionPath(slug) {
  return `/conditions/${slug}`;
}
