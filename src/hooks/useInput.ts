import { useState } from "react";

export default function useInput(defaultValue = "") {
    const [value, setValue] = useState(defaultValue);

    return {
        value,
        onChange(event: React.ChangeEvent<HTMLInputElement>) {
            setValue(event.target.value);
        },
    };
}
