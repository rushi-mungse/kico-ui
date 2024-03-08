import * as React from "react";
import { clsx } from "clsx";
import { ButtonBorder } from "../svgs/button-border";

type ButtonProps = {
  white?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({
  className,
  children,
  white = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "button relative inline-flex font-light tracking-wider items-center justify-center h-11 transition-colors px-7 hover:text-sky-600",
        white ? "text-black" : "text-white",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <ButtonBorder white={white} />
    </button>
  );
};

export { Button };
