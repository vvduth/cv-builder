import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { changeSkills, selectSkills } from "@/app/lib/redux/resumeSlice";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
  selectThemeColor,
} from "@/app/lib/redux/settingsSlice";
import { Form } from "./Form";
import { BulletListTextArea } from "./Form/InputGroup";

export const SkillsForm = () => {
  const skills = useAppSelector(selectSkills);
  const dispatch = useAppDispatch();
  const { featuredSkills, descriptions } = skills;
  const form = "skills";
  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));
  const themeColor = useAppSelector(selectThemeColor) || "#38bdf8";

  const handleSkillsChanges = (field: "descriptions", value: string[]) => {
    dispatch(changeSkills({ field, value }));
  };

  const handleFeaturedSkillsChange = (
    idx: number,
    skill: string,
    rating: number
  ) => {
    dispatch(changeSkills({ field: "featuredSkills", idx, skill, rating }));
  };

  const handleShowBulletPoints = (value: boolean) => {
    dispatch(changeShowBulletPoints({ field: form, value }));
  };

  return (
    <Form form={form}>
      <div className="col-span-bull grid grid-cols-6 gap-3">
        <div className="relative col-span-full">
          <BulletListTextArea
            label="Skills List"
            labelClassName="col-span-full"
            name="descriptions"
            placeholder="Bullet Points"
            value={descriptions}
            onChange={handleSkillsChanges}
            showBulletPoints={showBulletPoints}
          />
        </div>
      </div>
    </Form>
  );
};
