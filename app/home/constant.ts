import { deepClone } from "../lib/parse-resume-from-pdf/deep-clone";
import { initialEducation, initialProfile, initialProject, initialWorkExperience } from "../lib/redux/resumeSlice";
import { Resume } from "../lib/redux/types";



export const END_HOME_RESUME: Resume = {
    profile: {
        name: "Duc Thai",
        summary: "Brokeass Software Developer obsessed with not being broke no more.",
        email: "ducthai060501@gmai.com",
        phone: "+358-40-257-9979",
        location: "Tampere,FIN",
        url: "linkedin.com/in/username",
    },
    workExperiences: [
        {
          company: "ABC Company",
          jobTitle: "Software Engineer",
          date: "May 2023 - Present",
          descriptions: [
            "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
            "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
            "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
          ],
        },
        {
          company: "DEF Organization",
          jobTitle: "Software Engineer",
          date: "May 2022 - May 2023",
          descriptions: [
            "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
            "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
            "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
          ],
        },
        {
          company: "XYZ Company",
          jobTitle: "Software Engineer",
          date: "May 2021 - May 2022",
          descriptions: [
            "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
          ],
        },
      ],
      educations: [
        {
          school: "XYZ University",
          degree: "Bachelor of Science in Computer Science",
          date: "Sep 2018 - Aug 2022",
          gpa: "8.55",
          descriptions: [
            "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
          ],
        },
      ],
      projects: [
        {
          project: "Project1",
          url: "dsadsa.com",
          descriptions: [
            "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
          ],
        },
      ],
      skills: {
        featuredSkills: [
          { skill: "Python", rating: 3, details : ["from uni"] },
          { skill: "TypeScript", rating: 3, details : ["from uni"] },
          { skill: "React", rating: 3 , details : ["from uni"]},
        ],
        descriptions: [
          "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
          "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
        ],
      },
      custom: {
        descriptions: [],
      },
}

export const START_HOME_RESUME: Resume ={
    profile: deepClone(initialProfile),
    educations : [deepClone(initialEducation)],
    projects: [deepClone(initialProject)],
    custom: {
        descriptions: []
    },
    workExperiences: END_HOME_RESUME.workExperiences.map(( ) => 
        deepClone(initialWorkExperience)
    ),
    skills: {
        featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
            skill: "Skill",
            rating: item.rating,
            details: item.details 
        })),
        descriptions: []
    }
}