import { form } from "./components/Form/form";
import { layout } from "./components/Layout/layout";

export const App = () => {
    return layout({ children: form()});
}