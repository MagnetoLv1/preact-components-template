import { Component, h } from "preact";
export interface HelloWorldProps {
    name: string;
}
export default class HelloWorld extends Component<HelloWorldProps, any> {
    render(props: any): h.JSX.Element;
}
