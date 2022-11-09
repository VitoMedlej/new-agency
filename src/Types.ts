import { Dispatch, SetStateAction } from "react";

export interface ILayout {
    title ?: string;
    children  : JSX.Element;
    description ?: string;
}

export interface INavbar {
    animateMenu : (from: string , to: string, hide:boolean) => void
}
export interface MultiLang {en : string , ar : string}
export interface IContactBox {
    t1: string;
    t2: string;
    t3: string;
}