import type { ReactNode } from "react";

interface IInputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string;
    width?: number;
    name?: string;
    labelText?: string;
    className?: string;
    adorenment?: ReactNode;
};

export type { IInputProps };
