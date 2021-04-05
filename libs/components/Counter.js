import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
export default function Counter() {
    var _a = useState(0), value = _a[0], setValue = _a[1];
    var increment = useCallback(function () {
        setValue(value + 1);
    }, [value]);
    return (h("div", null,
        "Counter: ",
        value,
        h("button", { onClick: increment }, "Increment")));
}
