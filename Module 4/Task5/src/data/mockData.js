export const jobs = [
  {
    id: 1,
    company: "TCS",
    role: "Software Developer",
    location: "Chennai",
    package: "6 LPA",
    type: "Full Time",
    skills: ["Java", "SQL", "React"],
    deadline: "15 Oct 2026",
  },
  {
    id: 2,
    company: "Infosys",
    role: "Frontend Developer",
    location: "Bangalore",
    package: "7 LPA",
    type: "Full Time",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    deadline: "18 Oct 2026",
  },
  {
    id: 3,
    company: "Accenture",
    role: "Associate Software Engineer",
    location: "Chennai",
    package: "6.5 LPA",
    type: "Full Time",
    skills: ["Python", "SQL", "Cloud"],
    deadline: "20 Oct 2026",
  },
  {
    id: 4,
    company: "Zoho",
    role: "Web Developer",
    location: "Chennai",
    package: "8 LPA",
    type: "Full Time",
    skills: ["JavaScript", "React", "Node.js"],
    deadline: "25 Oct 2026",
  },
  {
    id: 5,
    company: "Wipro",
    role: "Graduate Engineer Trainee",
    location: "Hyderabad",
    package: "5.5 LPA",
    type: "Full Time",
    skills: ["Java", "Python", "SQL"],
    deadline: "28 Oct 2026",
  },
];

export const applications = [
  {
    id: 1,
    company: "TCS",
    role: "Software Developer",
    date: "02 Oct 2026",
    status: "Under Review",
  },
  {
    id: 2,
    company: "Infosys",
    role: "Frontend Developer",
    date: "28 Sep 2026",
    status: "Shortlisted",
  },
  {
    id: 3,
    company: "Wipro",
    role: "Graduate Engineer Trainee",
    date: "25 Sep 2026",
    status: "Rejected",
  },
];

export const interviews = [
  {
    id: 1,
    company: "Infosys",
    role: "Frontend Developer",
    date: "12 Oct 2026",
    time: "10:00 AM",
    mode: "Online",
  },
  {
    id: 2,
    company: "TCS",
    role: "Software Developer",
    date: "16 Oct 2026",
    time: "2:00 PM",
    mode: "Online",
  },
];

export const notifications = [
  {
    id: 1,
    title: "Interview Scheduled",
    message: "Your Infosys interview is scheduled for 12 Oct 2026.",
    date: "06 Oct 2026",
  },
  {
    id: 2,
    title: "New Job Opening",
    message: "Zoho has posted a new Web Developer position.",
    date: "05 Oct 2026",
  },
  {
    id: 3,
    title: "Application Update",
    message: "Your Infosys application has been shortlisted.",
    date: "04 Oct 2026",
  },
];

export const placementStats = {
  totalJobsApplied: 3,
  applicationsUnderReview: 1,
  interviewsScheduled: 2,
  studentsSelected: 24,
};

export const placementTrends = [
  { month: "June", applications: 12 },
  { month: "July", applications: 18 },
  { month: "August", applications: 25 },
  { month: "September", applications: 32 },
  { month: "October", applications: 40 },
];