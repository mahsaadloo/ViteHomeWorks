import {BoxProps} from "./types";

export const Box = (props: BoxProps) => {
    const el = document.createElement(props.element);
    if(props.attr)
        //@ts-ignore
        Object.keys(props.attr).forEach((key:string) => { el[key] = props.attr[key]});
    if(!Array.isArray(props.children)) el.append(props.children! ?? "");
    else el.append(...props.children);
    return el;
};