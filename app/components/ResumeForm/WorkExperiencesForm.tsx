import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { selectWorkExperiences } from "@/app/lib/redux/resumeSlice";
import React from "react";

const WorkExperiencesForm = () => {
  const workExperiences = useAppSelector(selectWorkExperiences);
  const dispatch = useAppDispatch();

  const showDelete = workExperiences.length > 1; 


  return (
    <></>
  );
};

export default WorkExperiencesForm;
