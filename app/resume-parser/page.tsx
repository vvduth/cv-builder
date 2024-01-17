"use client";

import Link from "next/link";
import { useState } from "react";
import { TextItems } from "../lib/parse-resume-from-pdf/types";
import { groupTextItemsIntoLines } from "../lib/parse-resume-from-pdf/group-text-items-into-lines";
import { groupLinesIntoSections } from "../lib/parse-resume-from-pdf/group-lines-into-sections";
import { extractResumeFromSections } from "../lib/parse-resume-from-pdf/extract-resume-from-sections";
import FlexboxSpacer from "../components/FlexboxSpacer";
import { Heading } from "../components/documentation/Heading";
import { Paragraph } from "../components/documentation/Paragraph";

const RESUME_EXAMPLE = [
  {
    fileUrl: "resume-example/public-resume.pdf",
    description: <span>Took from public sources</span>,
  },
  {
    fileUrl: "resume-example/inhouse-resume.pdf",
    description: (
      <span>
        Created with inhouse resume Builder - <Link href={"/resume-builder"} />
      </span>
    ),
  },
];

const defaultFileUrl = RESUME_EXAMPLE[1]["fileUrl"];
export default function ResumeParser() {
  const [fileUrl, setFileUrl] = useState(defaultFileUrl);

  const [textItems, setTextItems] = useState<TextItems>([]);
  const lines = groupTextItemsIntoLines(textItems || []);
  const sections = groupLinesIntoSections(lines);
  const resume = extractResumeFromSections(sections);

  return (
    <main className="h-full w-full overflow-hidden">
      <div className="grid md:grid-cols-6">
        <div className="flex justify-center px-2 md:col-span-3 md-h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end">
          <section className="mt-5 grow px-4 md:max-w-[600px] md:px-0">
            <div className="aspect-h-[9.5] aspect-w-7">
              <iframe src={`${fileUrl}#navpanes=0`} className="h-full w-full" />
            </div>
          </section>
          <FlexboxSpacer maxWidth={45} className="hidden md:block" />
        </div>
        <div className="flex px-6 text-gray-900 md:col-span-3 md-h-[calc(100vh-var(--top-nav-bar-height))] md:overflow-y-5">
          <FlexboxSpacer maxWidth={45} className="hidden md:block" />
          <section className="max-w-[600px] grow">
            <Heading className="text-primary !mt-4">
              Resume parser Playground
            </Heading>
            <Paragraph smallMarginTop={true}>
              This playground showcases the Inhouse resume parser and its
              ability to parse information froma resume PDF. Click around the
              PDF examples below to observe different parsing results.
            </Paragraph>
          </section>
        </div>
      </div>
    </main>
  );
}
