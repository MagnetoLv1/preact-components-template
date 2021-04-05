# Preact-Components-Template

React와 Script에서 가져다 사용할수 있는 Preact 컴포넌트 템플릿 입니다.

### React에서 Preact Component를 가져오는 방법

```jsx
import React, { useRef, useEffect } from "react";
import { render, h } from "preact";
import { HelloWorld } from "./whatever";

function ReactPreactBridge() {
    // Get the raw DOM node to render into
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            // Can't use two different JSX constructors in
            // the same file, so we're writing the JSX output
            // manually. (h is the same as createElement)
            render(h(HelloWorld, null), ref.current);
        }

        return () => {
            // Clear Preact rendered tree when the parent React
            // component unmounts
            render(null, ref.current);
        };
    }, [ref.current]);

    return <div ref={ref} />;
}
```

### Script에서 Preact Component를 가져오는 방법

```html
<div id="root"></div>
<script defer="defer" src="preact-components-template.js"></script>
<script>
    window.onload = function () {
        renderComponent(document.querySelector("#root"));
    };
</script>
```

## Libary name , Output Filename 설정 방법 (webpack.config.js)

```js
module.exports = {
    output: {
        libraryTarget: "var",
        library: "renderComponent",
        libraryExport: "default",
        path: path.resolve(__dirname, "build"),
        filename: "preact-components-template.js",
    },
};
```

## Issue

Webpack-dev-server 에서는 `libraryTarget : "var"` 로 선언한 변수가 참조가 안됨(?)

```json
{
    "output": {
        "libraryTarget": "var",
        "library": "renderComponent",
        "libraryExport": "default"
    }
}
```

### ts-loader issue

Typescript를 컴파일을 위해 ts-loader를 사용했으나 ie에서 arrow function 등이 컴파일 되지 않아 babel-loader 로 변경함
