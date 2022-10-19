import { Dispatch, SetStateAction } from "react";

export interface ILayout {
    title ?: string;
    children  : JSX.Element;
    description ?: string;
}
export interface INavbar {
    isOpen:boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}