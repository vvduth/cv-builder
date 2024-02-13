import { ResumeSkills, ResumeWorkExperience } from "@/app/lib/redux/types";
import React from "react";
import {
  ResumeFeaturedSkill,
  ResumePDFBulletList,
  ResumePDFSection,
  ResumePDFText,
} from "./common";
import { View } from "@react-pdf/renderer";
import { spacing, styles } from "./styles";

const ResumePDFSkills = ({
  heading,
  skills,
  themeColor,
  showBulletPoints,
}: {
  heading: string;
  skills: ResumeSkills;
  themeColor: string;
  showBulletPoints: boolean;
}) => {
  const { featuredSkills, descriptions } = skills;
  const featuredSkillsWithtText = featuredSkills.filter((item) => item.skill);
  const featuredSkillsPair = [
    [featuredSkillsWithtText[0], featuredSkillsWithtText[3]],
    [featuredSkillsWithtText[1], featuredSkillsWithtText[4]],
    [featuredSkillsWithtText[2], featuredSkillsWithtText[5]],
  ];
  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      {featuredSkillsWithtText.length > 0 && (
        <View style={{ ...styles.flexRowBetween, marginTop: spacing["0.5"] }}>
          {featuredSkillsPair.map((pair, idx) => (
            <View
              key={idx}
              style={{
                ...styles.flexCol,
              }}
            >
              {pair.map((featuredSkill, idx) => {
                if (!featuredSkill) return null;
                return (
                  <ResumeFeaturedSkill
                    key={idx}
                    skill={featuredSkill.skill}
                    rating={featuredSkill.rating}
                    themeColor={themeColor}
                    style={{
                      justifyContent: "flex-end",
                    }}
                  />
                );
              })}
            </View>
          ))}
        </View>
      )}
      <View style={{ ...styles.flexCol }}>
        <ResumePDFBulletList
          items={descriptions}
          showBulletPoints={showBulletPoints}
        />
      </View>
    </ResumePDFSection>
  );
};

export default ResumePDFSkills;
