import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export const Button = ({
    className = "",
    type = "button",
    children = <p></p>,
    ...props
}: ButtonProps) => {
    return (
        <>
            <button
                className={twMerge(
                    `h-[4rem]  bg-emerald-600 rounded-md text-white text-2xl ${className}`
                )}
                {...props}
                type={type}
            >
                {children}
            </button>
        </>
    );
};
