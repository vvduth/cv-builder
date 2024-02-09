import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { changeProjects, selectProjects } from "@/app/lib/redux/resumeSlice";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
} from "@/app/lib/redux/settingsSlice";
import { Form, FormSection } from "./Form";
import { CreatehandleChangeArgsWithDescriptions } from "./types";
import { ResumeEducation, ResumeProject } from "@/app/lib/redux/types";
import { BulletListTextArea, Input } from "./Form/InputGroup";
import { BulletListiconButton } from "./Form/IconButton";

export const ProjectsForm = () => {
  const projects = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const showDelete = projects.length > 1;
  const form = "projects";
  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

  return (
    <Form form={form} addButtonText="Add Schools/Campuses">
      {projects.map(({ url, project, descriptions }, idx) => {
        const handleProjectsChange = (
          ...[
            field,
            value,
          ]: CreatehandleChangeArgsWithDescriptions<ResumeProject>
        ) => {
          dispatch(changeProjects({ idx, field, value } as any));
        };

        const handleShowBulletPoints = (value: boolean) => {
          dispatch(changeShowBulletPoints({ field: form, value }));
        };

        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== projects.length - 1;

        return (
          <FormSection
            key={idx}
            form="projects"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText="Delete project"
          >
            <Input
              label="Project Name"
              labelClassName="col-span-4"
              name="project"
              placeholder="XYZ Project"
              value={project}
              onChange={handleProjectsChange}
            />
            <Input
              label="Url"
              labelClassName="col-span-2"
              name="url"
              placeholder="www.url.com"
              value={url}
              onChange={handleProjectsChange}
            />
            <BulletListTextArea
              label="Description"
              labelClassName="col-span-full"
              name="descriptions"
              placeholder="Bullet Points"
              value={descriptions}
              onChange={handleProjectsChange}
            />
          </FormSection>
        );
      })}
    </Form>
  );
};
