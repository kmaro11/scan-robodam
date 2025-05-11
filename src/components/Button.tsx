import { twMerge } from "tailwind-merge";

export interface ButtonAnchorProps {
  href?: string;
  children: React.ReactNode;
  size?: "small" | "normal" | "green-small" | "green-normal";
  variant?: "primary" | "secondary" | "borderless" | "green" | "green-dark";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonAnchorProps> = ({
  href,
  children,
  size = "normal",
  variant = "primary",
  className,
  disabled,
  type = "button",
}) => {
  let variantClass = "";
  let sizeClass = "";
  switch (variant) {
    case "primary":
      variantClass = "bg-blue text-white";
      break;
    case "secondary":
      variantClass = "bg-white border-2 border-blue text-blue";
      break;
    case "green":
      variantClass = "bg-green text-primary";
      break;
    case "green-dark":
      variantClass = "bg-green-100 text-white";
      break;
    case "borderless":
      variantClass = "px-0";
      break;
  }

  switch (size) {
    case "small":
      sizeClass =
        "px-3 py-1 text-xl xl:text-[25px] xl:leading-[30px] h-max rounded-[5px] capitalize font-bold";
      break;
    case "normal":
      sizeClass =
        "px-4 py-2.5 text-2xl md:text-[40px] md:leading-[49px] h-max rounded-[5px] capitalize font-bold";
      break;
    case "green-small":
      sizeClass =
        "max-w-max text-[15px] lg:text-xl leading-[100%] px-6 rounded h-10 lg:h-[62px]";
      break;
    case "green-normal":
      sizeClass =
        "max-w-max text-[15px] lg:text-xl leading-[100%] px-6 rounded h-10 lg:h-[62px]";
      break;
  }

  return (
    <>
      {href ? (
        <a
          href={href}
          className={twMerge(
            "flex items-center  justify-center text-center ",
            sizeClass,
            variantClass,
            className,
            disabled && "pointer-events-none opacity-50"
          )}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          className={twMerge(
            "flex items-center justify-center text-center",
            sizeClass,
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
