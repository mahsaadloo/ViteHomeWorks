import { Box } from "../../lib/Box/Box";
import { firstButton } from "../Button/button";
import { textfield } from "../Textfields/textfields";

export const form = () => {
    return Box({ element: "div", children: [textfield(), firstButton()]})
}