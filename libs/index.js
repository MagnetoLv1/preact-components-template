import { h, render } from "preact";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
var renderDom = function (rootDom) {
    if (rootDom == null) {
        // Handle fatal errors in your app.
        throw new Error("Could not find root element");
    }
    render(h(HelloWorld, { name: "World1" }), rootDom);
};
export { Counter, HelloWorld };
export default renderDom;
