import { A4_HEIGHT_PX, LETTER_HEIGHT_PT } from "@/app/lib/constants";
import { useEffect, useState } from "react";

export const getPxPerRem = () => {
  const bodyComputedStyle = getComputedStyle(
    document.querySelector("body")!
  ) as any;
  return parseFloat(bodyComputedStyle["font-size"]) || 16;
};

export const CSS_VARIABLES = {
  "--top-nav-bar-height": "3.5rem",
  "--resume-control-bar-height": "3rem",
  "--resume-padding": "1.5rem",
} as const;

export const useSetDefaultScale = ({
  setScale,
  documentSize,
}: {
  setScale: (scale: number) => void;
  documentSize: string;
}) => {
  const [scaleOnReszie, setScaleOnResize] = useState(true);

  useEffect(() => {
    const getDefaultScale = () => {
      const screenHeightPx = window.innerHeight;
      const PX_PER_REM = getPxPerRem();
      const screenHeightRem = screenHeightPx / PX_PER_REM;
      const topNavBarHeight = parseFloat(CSS_VARIABLES["--top-nav-bar-height"]);
      const resumeControlBarheight = parseFloat(
        CSS_VARIABLES["--resume-control-bar-height"]
      );
      const resumePadding = parseFloat(CSS_VARIABLES["--resume-padding"]);
      const topAndBottomResumePadding = resumePadding * 2;
      const defaultResumeHeightrem =
        screenHeightRem -
        topNavBarHeight -
        resumeControlBarheight -
        topAndBottomResumePadding;
      const resumeHeightPx = defaultResumeHeightrem * PX_PER_REM;
      const height = documentSize === "A4" ? A4_HEIGHT_PX : LETTER_HEIGHT_PT;
      const defaultScale = Math.round((resumeHeightPx / height) * 100) / 100;
      return defaultScale;
    };

    const setDefaultScale = () => {
      const defaultScale = getDefaultScale();
      setScale(defaultScale);
    };

    if (scaleOnReszie) {
      setDefaultScale();
      window.addEventListener("resize", setDefaultScale);
    }

    return () => {
      window.removeEventListener("resize", setDefaultScale);
    };
  }, [setScale, scaleOnReszie, documentSize]);

  return { scaleOnReszie, setScaleOnResize };
};
