import { twMerge } from "tailwind-merge";

const Button = ({
  type = "button",
  icon,
  size = "medium",
  variant = "primary",
  className = "",
  wording = "",
  onClick,
  active = false,
  disabled = false,
}) => {
  const ButtonVariant = {
    primary: "bg-verdigris hover:bg-deep-verdigris",
    secondary: "bg-light-dark-charcoal",
  };

  const ButtonSize = {
    big: "h-14",
    medium: "h-12",
  };

  const buttonClasses = twMerge(
    "relative flex items-center font-commissionerBold text-base text-white rounded-full group/button",
    ButtonVariant[variant],
    ButtonSize[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const iconWrapperClasses = twMerge(
    "flex justify-center items-center h-14 w-14 rounded-full bg-dark-charcoal group-hover/button:bg-dark-silver",
    active && "bg-deep-verdigris group-hover/button:bg-deep-verdigris"
  );

  const iconSvgClasses = twMerge(
    "w-[10px]",
    active ? "fill-white" : "fill-philippine-silver"
  );

  const wordingClasses = twMerge(
    size === "big" ? "px-9" : "px-8",
    variant === "secondary" &&
      "last:hidden sm:last:block sm:text-sonic-silver sm:py-4 sm:pl-4 sm:pr-6",
    active && variant === "secondary" && "sm:!text-deep-verdigris"
  );

  return (
    <button
      type={type}
      aria-pressed={active}
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon && (
        <span className={iconWrapperClasses}>
          <svg
            className={iconSvgClasses}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 18"
          >
            <path d="m0,0v18l5-5.06,5,5.06V0H0Z" />
          </svg>
        </span>
      )}
      <span className={twMerge(wordingClasses)}>{wording}</span>
    </button>
  );
};

export default Button;
