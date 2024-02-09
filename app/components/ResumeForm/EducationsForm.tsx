import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import {
  changeEducations,
  selectEducations,
} from "@/app/lib/redux/resumeSlice";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
} from "@/app/lib/redux/settingsSlice";
import { Form, FormSection } from "./Form";
import { CreatehandleChangeArgsWithDescriptions } from "./types";
import { ResumeEducation } from "@/app/lib/redux/types";
import { BulletListTextArea, Input } from "./Form/InputGroup";
import { BulletListiconButton } from "./Form/IconButton";

export const EducationsForm = () => {
  const educations = useAppSelector(selectEducations);
  const dispatch = useAppDispatch();
  const showDelete = educations.length > 1;
  const form = "educations";
  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

  return (
    <Form form={form} addButtonText="Add Schools/Campuses">
      {educations.map(({ school, degree, gpa, date, descriptions }, idx) => {
        const handleEducationsChange = (
          ...[
            field,
            value,
          ]: CreatehandleChangeArgsWithDescriptions<ResumeEducation>
        ) => {
          dispatch(changeEducations({ idx, field, value } as any));
        };

        const handleShowBulletPoints = (value: boolean) => {
          dispatch(changeShowBulletPoints({ field: form, value }));
        };

        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== educations.length - 1;

        return (
          <FormSection
            key={idx}
            form="educations"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText={"Delete school"}
          >
            <Input
              label="School"
              labelClassName="col-span-4"
              name="school"
              placeholder="XYZ University"
              value={school}
              onChange={handleEducationsChange}
            />
            <Input
              label="Date"
              labelClassName="col-span-2"
              name="date"
              placeholder="Jan 2022 - Present"
              value={date}
              onChange={handleEducationsChange}
            />
            <Input
              label="Degree & Major"
              labelClassName="col-span-4"
              name="degree"
              placeholder="Bachelor of Science in Software Engineering"
              value={degree}
              onChange={handleEducationsChange}
            />
            <Input
              label="GPA"
              labelClassName="col-span-2"
              name="gpa"
              placeholder="4.35"
              value={gpa}
              onChange={handleEducationsChange}
            />
            <div className="relative col-span-full">
              <BulletListTextArea
                label="Additional Information (Optional)"
                labelClassName="col-span-full"
                name="descriptions"
                placeholder="Feel free to enter additional activities and so on..."
                value={descriptions}
                onChange={handleEducationsChange}
                showBulletPoints={showBulletPoints}
              />
              <div className="absolute left-[15.6rem] top-[0.07rem]">
                <BulletListiconButton 
                  showBulletPoints={showBulletPoints}
                  onClick={handleShowBulletPoints}
                />
              </div>
            </div>
          </FormSection>
        );
      })}
    </Form>
  );
};
