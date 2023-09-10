import { Box } from "../../lib/Box/Box";
import { BoxProps } from "../../lib/Box/types";

type layoutProps = {
    children?: BoxProps['children'];
}

export const layout = (props: layoutProps) => {
    return Box({
        element: "div",
        children: props.children,
        attr: { className: "bg-slate-100 max-w-lg mx-auto mt-10"}
    })
};