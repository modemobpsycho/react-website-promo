import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data";

export default function DifferencesSection() {
    const [contentType, setContentType] = useState<keyof typeof differences>();

    function handleClick(type: keyof typeof differences) {
        setContentType(type);
    }
    return (
        <section>
            <h3>About us</h3>
            <Button
                isActive={contentType == "way"}
                onClick={() => handleClick("way")}
            >
                Approach
            </Button>
            <Button
                isActive={contentType == "easy"}
                onClick={() => handleClick("easy")}
            >
                Availability
            </Button>
            <Button
                isActive={contentType == "program"}
                onClick={() => handleClick("program")}
            >
                Concentration
            </Button>

            {!contentType && <p>Click the button!</p>}
            {contentType && <p>{differences[contentType]}</p>}
        </section>
    );
}
