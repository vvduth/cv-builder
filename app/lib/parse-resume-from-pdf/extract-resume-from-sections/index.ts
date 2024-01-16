import { Resume } from "../../redux/types";
import { ResumeSectionToLines } from "../types";
import { extractEducation } from "./extract-education";
import { extractProfile } from "./extract-profile";
import { extractProjects } from "./extract-project";
import { extractSkills } from "./extract-skill";
import { extractWorkExperience } from "./extract-work-experience";


export const extractResumeFromSections = (section: ResumeSectionToLines) : Resume => {
    const {profile} = extractProfile(section)
    const {educations} = extractEducation(section)
    const {workExperiences} = extractWorkExperience(section)
    const {projects} = extractProjects(section)
    const {skills}= extractSkills(section)


    return {
        profile, 
        educations, 
        workExperiences, 
        projects, 
        skills,
        custom: {
            descriptions: []
        }
    }
}   