import { twMerge } from "tailwind-merge";

export interface ButtonAnchorProps {
  href?: string;
  children: React.ReactNode;
  size?: "small" | "normal";
  variant?: "primary" | "secondary" | "borderless";
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonAnchorProps> = ({
  href,
  children,
  size = "normal",
  variant = "primary",
  className,
  disabled,
}) => {
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "bg-blue text-white";
      break;
    case "secondary":
      variantClass = "bg-white border-2 border-blue text-blue";
      break;
    case "borderless":
      variantClass = "px-0";
      break;
  }

  return (
    <>
      {href ? (
        <a
          href={href}
          className={twMerge(
            "flex items-center rounded-[5px] justify-center rounded-lg text-center capitalize font-bold",
            size === "normal"
              ? "px-4 py-2.5 text-2xl md:text-[40px] md:leading-[49px]"
              : "px-3 py-1 text-xl xl:text-[25px] xl:leading-[30px] h-max",
            variantClass,
            className,
            disabled && "pointer-events-none opacity-50"
          )}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          className={twMerge(
            "flex items-center rounded-[5px] justify-center rounded-lg text-center capitalize font-bold",
            size === "normal"
              ? "px-4 py-2.5 text-2xl md:text-[40px] md:leading-[49px]"
              : "px-3 py-1 text-xl xl:text-[25px] xl:leading-[30px] h-max",
            variantClass,
            className,
            disabled && "pointer-events-none opacity-50"
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};
