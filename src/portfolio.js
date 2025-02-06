/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Samundeeswari Muthukumaran",
  title: "Hi all, I'm Samu",
  subTitle: emoji(
    "I am passionate Data analyst 🚀 having an experience in Advanced Excel, SQL, Python, Tableau, Power BI and advanced statistical analysis, with a proven track record and delivering results."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1W1vPjfXzocPoiBmvydYd8B6Z-H54ypY3rhKl74dPFcg/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Samu-git07",
  linkedin: "www.linkedin.com/in/Samu-learn07",
  gmail: "samu.analyst@gmail.com",
  medium: "https://medium.com/@samundeeswaridhakshnamoorthy",
  YouTube: "https://www.youtube.com/@BrainofDataScience",
  Youtube: "https://www.youtube.com/@easyexamcare3222",
  Tableau : "https://public.tableau.com/app/profile/samundeeswari.muthukumaran/vizzes",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Data Analyst with a strong background in transforming complex datasets into actionable insights."
    ),
    emoji("⚡ Proficient in developing and deploying user-friendly data visualization tools to empower small businesses and drive data-driven decisions."),
    emoji(
      "⚡  Experienced in SQL, Python, Tableau, and advanced statistical analysis, with a proven track record of optimizing processes and delivering results."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Advanced Excel",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Jvascirpt",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
   
 ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BHARATH INSTITUTE OF HIGHER EDUCATION AND RESEARCH",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science and Engineering",
      duration: "June 2010 - May 2012",
      desc: "Participated in the research of Inclusion Of Road Network In The Spatial Database For Features Searching Using Dynamic Index published a papers-Read Paper.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },

};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Advanced Excel", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Pyhton",
      progressPercentage: "70%"
    },
    {
      Stack: "Tableau",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst",
      company: "Redmind Technologies",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "April 2022 – November 2022",
      desc: "Developed and deployed web applications integrating front-end and back-end technologies (HTML, CSS, JavaScript, MySQL).
Collaborated with senior developers to maintain and optimize database systems, writing complex SQL queries for data retrieval and manipulation.
Created small-scale web applications with embedded analytics to track and visualize project performance.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Academic Assistant",
      company: "Bharath University",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: " March 2021 – August 2022",
      desc: "Assessed student learning outcomes, achieving a 13% improvement in undergraduate course performance.
Conducted 30+ weekly tutoring sessions via online platforms and in-person settings.
Coordinated weekly appointments and submitted bi-weekly curriculum progress reports to professors."
    }
    {
      role: "Freelance Data Analyst",
      company: "Chennai Institute of Technology",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: " June 2012 – May 2015",
      desc: "Analyzed 20GB+ datasets using SQL in three hackathons, showcasing expertise in handling large-scale data.
Delivered a seminar presentation on data analytics to 180 students and industry professionals.
Conducted freelance projects involving data collection, cleaning, and analysis using Python and SQL.
Reduced reporting time by 20% through the creation of dynamic dashboards."
    }
{
      role: "Film Review Data Analyst",
      company: "Independent Project",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: " August 2017 – August 2019",
      desc: "Aggregated entertainment data and utilized K-Nearest Neighbors in Tableau to improve content targeting for ages 15-25.
Enhanced methodology, reducing selection time by 12 minutes per movie and 3 minutes per song."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications",

  achievementsCards: [
    {
      title: "Tableau",
      footerLink: [
        {
          name: "Certification",
          url: " View Certificate"
        },
      ]
    },

    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Breath Easy with Engg Notes.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://enggnotescit.blogspot.com/",
      title: "All Recent trends news",
      description:
        "All trending news with coding"
    },
    {
      url: "https://medium.com/@samundeeswaridhakshnamoorthy",
      title: "Chat GPT vs DeepSeek",
      description:
        "Which one is best."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-0000000000",
  email_address: "mssamu.me@gmail.com"
};




const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
