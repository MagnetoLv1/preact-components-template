import "object-assign-polyfill";
import { h, render } from "preact";
import "promise-polyfill/src/polyfill";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";

const renderDom = (rootDom) => {
    if (rootDom == null) {
        // Handle fatal errors in your app.
        throw new Error("Could not find root element");
    }
    render(<HelloWorld name="World1" />, rootDom);
};
export { Counter, HelloWorld };
export default renderDom;
