import React from "react";

const FlexboxSpacer = ({maxWidth, minWidth=0, className=""}: {
  maxWidth: number;
  minWidth?: number;
  className: string;
}) => {
  return <div className={`insivisble shrink-[10000] grow ${className}`}
    style={{maxWidth:`${maxWidth}px`, minWidth: `${minWidth}px`}}
  />
};

export default FlexboxSpacer;
