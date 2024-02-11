import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { changeSkills, selectSkills } from "@/app/lib/redux/resumeSlice";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
  selectThemeColor,
} from "@/app/lib/redux/settingsSlice";
import { Form } from "./Form";
import { BulletListTextArea, InputGroupWrapper } from "./Form/InputGroup";
import { BulletListiconButton } from "./Form/IconButton";
import { FeaturedSkillInput } from "./Form/FeaturedSkillInput";

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
          <div className="absolute left-[4.5rem] top-[0.07rem]">
            <BulletListiconButton
              showBulletPoints={showBulletPoints}
              onClick={handleShowBulletPoints}
            />
          </div>
        </div>
        <div className="col-span-full mb-4 mt-6 border-t-2 border-dotted border-gray-200" />
        <InputGroupWrapper
          label="Featured Skills (Optional)"
          className="col-span-full"
        >
          <p className="mt-2 text-sm font-normal text-gray-600">
            Featured skill is optional to hightlight top skills, with more
            circles mean higher proficiency
          </p>
        </InputGroupWrapper>
      </div>
      {featuredSkills.map(({ skill, rating }, idx) => (
        <FeaturedSkillInput
          key={idx}
          className="col-span-3"
          skill={skill}
          rating={rating}
          setSkillRating={(newSkill, newRating) => {
            handleFeaturedSkillsChange(idx, newSkill, newRating);
          }}
          placeholer={`Featured Skill ${idx + 1}`}
          circleColor={themeColor}
        />
      ))}
    </Form>
  );
};
