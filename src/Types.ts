
    export interface MultiLang {en : string , ar : string}
export interface ILayout {
    title : MultiLang;
    children  : JSX.Element;
    description : MultiLang;
}

export interface INavbar {
    animateMenu : (from: string , to: string, hide:boolean) => void
}
export interface IContactBox {
    t1: string;
    t2: string;
    t3: string;
}