import { cx } from "@/app/lib/cx";

export const Paragraph = ({
  smallMarginTop,
  children,
  className,
}: {
  smallMarginTop?: boolean;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cx(
        smallMarginTop ? "ml-[0.8em]" : "mt-[1.5em]",
        "text-lg text-gray-700",
        className
      )}
    >
      {children}
    </p>
  );
};