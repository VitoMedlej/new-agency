import { Dispatch, SetStateAction } from "react";

export interface ILayout {
    title ?: string;
    children  : JSX.Element;
    description ?: string;
}

export interface INavbar {
    animateMenu : (from: string , to: string, hide:boolean) => void
}