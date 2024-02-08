import { ArrowSmallDownIcon, EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import { IconButton } from "../../Button";

type MoveIconButtonType = "up" | "down";

export const ShowIconButton = ({show, setShow}: {
  show: boolean, 
  setShow: (show: boolean) => void, 

}) => {
  const tooltipText = show ? "Hide section" : "Show section";
  const onClick = () => {
    setShow(!show);
  }

  const Icon  = show ? EyeIcon : EyeSlashIcon
  return (
    <IconButton onClick={onClick} tooltipText={tooltipText}>
      <Icon  className="h-6 w-6 text-gray-400" aria-hidden="true" />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
  )
}

export const MoveIconButton = ({
  type,
  size,
  onClick,
}: {
  type: MoveIconButtonType;
  size?: "small" | "medium";
  onClick: (type: MoveIconButtonType) => void;
}) => {

    const toolTipText = type === "up" ? "Move up" : "Move down";
    const sizeClassName = size === "medium" ? "h-6 w-6" : "h-4 w-4"
    const Icon = type === "up" ? ArrowSmallUpIcon : ArrowSmallDownIcon; 
  return (
    <IconButton onClick={() => onClick(type) }  
      tooltipText={toolTipText}
    >
      <Icon className={`${sizeClassName} text-gray-400`} aria-hidden="true" />
      <span className="sr-only">{toolTipText}</span>
    </IconButton>
  );
};
