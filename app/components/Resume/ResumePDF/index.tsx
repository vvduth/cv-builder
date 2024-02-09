import { DEFAULT_FONT_COLOR, Settings } from "@/app/lib/redux/settingsSlice";
import { Resume } from "@/app/lib/redux/types";
import { Document, Page, View } from "@react-pdf/renderer";
import { styles, spacing } from "./styles";
import { ResumePDFProfile } from "./ResumePDFProfile";
import { ShowForm } from "@/app/lib/redux/settingsSlice";
import ResumePDFWorkExperience from "./ResumePDFWorkExperience";
import ResumePDFEducation from "./ResumePDFEducation";
import { ShowIconButton } from "../../ResumeForm/Form/IconButton";

export const ResumePDF = ({
  resume,
  settings,
  isPDF,
}: {
  resume: Resume;
  settings: Settings;
  isPDF: boolean;
}) => {
  const { profile, workExperiences, educations } = resume;
  const { name } = profile;

  const {
    documentSize,
    fontFamily,
    fontSize,
    themeColor,
    formToHeading,
    formsOrder,
    formToShow,
    showBulletPoints,
  } = settings;

  const showFormOrder = formsOrder.filter((form) => formToShow[form]);

  const formTypeComponent: { [type in ShowForm]: () => JSX.Element } = {
    workExperiences: () => (
      <ResumePDFWorkExperience
        heading={formToHeading["workExperiences"]}
        workExperiences={workExperiences}
        themeColor={themeColor}
      />
    ),
    educations: () => (
      <ResumePDFEducation
        heading={formToHeading["educations"]}
        educations={educations}
        themeColor={themeColor}
        showBulletPoints={showBulletPoints["educations"]}
      />
    ),
    projects: () => <></>,
    skills: () => <></>,
    custom: () => <></>,
  };

  return (
    <>
      <Document title={`${name}`} author={name} producer={"Inhouse"}>
        <Page
          size={documentSize === "A4" ? "A4" : "LETTER"}
          style={{
            ...styles.flexCol,
            color: DEFAULT_FONT_COLOR,
            fontFamily,
            fontSize: fontSize + "pt",
          }}
        >
          {Boolean(settings.themeColor) && (
            <View
              style={{
                width: spacing["full"],
                height: spacing[3.5],
                backgroundColor: themeColor,
              }}
            />
          )}
          <View
            style={{
              ...styles.flexCol,
              padding: `${spacing[0]} ${spacing[20]}`,
            }}
          >
            <ResumePDFProfile
              profile={profile}
              themeColor={themeColor}
              isPDF={isPDF}
            />
            {showFormOrder.map((form) => {
              const Component = formTypeComponent[form];
              return <Component key={form} />;
            })}
          </View>
        </Page>
      </Document>
    </>
  );
};
