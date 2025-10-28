import type { JSX } from "react";

interface ButtonProps {
    children: JSX.Element;
    className?: string;
    onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
    return (
        <button className={`p-2 ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}
