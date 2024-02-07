import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import React from "react";

type MoveIconButtonType = "up" | "down";
export const MoveIconButton = ({
  type,
  size,
  onClick,
}: {
  type: MoveIconButtonType;
  size?: "small" | "medium";
  onClick: (type: MoveIconButtonType) => void;
}) => {

    const toolTip = type === "up" ? "Move up" : "Move down";
    const sizeClassName = size === "medium" ? "h-6 w-6" : "h-4 w-4"
    const Icon = type === "up" ? ArrowSmallUpIcon : ArrowSmallDownIcon; 
  return (
    <>
    
    </>
  );
};
