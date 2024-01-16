import { ResumeProject } from "../../redux/types";
import { isBold } from "../group-lines-into-sections";
import { FeatureSet, ResumeSectionToLines } from "../types";
import { getBulletPointsFromLines, getDescriptionsLineIdx } from "./lib/bullet-points";
import { DATE_FEATURE_SETS, getHasText } from "./lib/common-features";
import { getTextWithHighestFeatureScore } from "./lib/feature-scoring-system";
import { getSectionLinesByKeywords } from "./lib/get-section-lines";
import {divideSectionIntoSubsections} from "./lib/subsections"

export const extractProjects = (sections: ResumeSectionToLines) => {
    const projects : ResumeProject[] =  []
    const projectScores = []
    const url = ""
    const lines = getSectionLinesByKeywords(sections,["project"]) as any
    const subsections = divideSectionIntoSubsections(lines)

    for (const subsectionLines of subsections) {
        const descriptionLineIdx = getDescriptionsLineIdx(subsectionLines) ?? 1

        const subsectionsInfotextItems = subsectionLines.slice(0, descriptionLineIdx).flat()

        const   [date,dateScores] = getTextWithHighestFeatureScore(
            subsectionsInfotextItems, 
            DATE_FEATURE_SETS
        )

        const PROJECT_FEATURE_SET : FeatureSet[] = [
            [isBold, 2],
            [getHasText(date), -4]
        ]

        const [project, projectScore] = getTextWithHighestFeatureScore(
            subsectionsInfotextItems, 
            PROJECT_FEATURE_SET,
            false
        )

        const descriptionsLines = subsectionLines.slice(descriptionLineIdx);
        const descriptions = getBulletPointsFromLines(descriptionsLines)

        projects.push({project, descriptions, url})
        projectScores.push({
            projectScore,
            dateScores
        })
    }
    return {projects, projectScores, url}
}