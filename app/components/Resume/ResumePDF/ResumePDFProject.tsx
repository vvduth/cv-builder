import {
  ResumeEducation,
  ResumeProject,
  ResumeWorkExperience,
} from "@/app/lib/redux/types";
import { ResumePDFBulletList, ResumePDFLink, ResumePDFSection, ResumePDFText } from "./common";
import { View } from "@react-pdf/renderer";
import { spacing, styles } from "./styles";

export const ResumePDFProject = ({
  heading,
  projects,
  themeColor,
}: {
  heading: string;
  projects: ResumeProject[];
  themeColor: string;
}) => {
  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      {projects.map(({ project, url, descriptions }, idx) => {
        return (
          <View key={idx}>
            <View
              style={{
                ...styles.flexRowBetween,
                marginTop: spacing["0.5"],
              }}
            >
              <ResumePDFText bold={true}>{project}</ResumePDFText>
              
              
            </View>

            <View style={{ ...styles.flexCol, marginTop: spacing["0.5"] }}>
              <ResumePDFBulletList items={descriptions} showBulletPoints />     
            </View>
          </View>
        );
      })}
    </ResumePDFSection>
  );
};
