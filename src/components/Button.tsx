import { twMerge } from "tailwind-merge";

export interface ButtonAnchorProps {
  href: string;
  children: React.ReactNode;
  size?: "small" | "normal";
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button: React.FC<ButtonAnchorProps> = ({
  href,
  children,
  size = "normal",
  variant = "primary",
  className,
}) => {
  return (
    <a
      href={href}
      className={twMerge(
        "flex items-center rounded-[5px] justify-center rounded-lg hover:shadow-md text-center capitalize font-bold",
        size === "normal"
          ? "px-4 py-2.5 text-2xl md:text-[40px] md:leading-[49px]"
          : "px-3 py-1.5",
        variant === "primary"
          ? "bg-blue text-white"
          : "bg-white border-2 border-blue text-blue",
        className
      )}
    >
      {children}
    </a>
  );
};
