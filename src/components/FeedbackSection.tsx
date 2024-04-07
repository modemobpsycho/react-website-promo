import Button from "./Button/Button";
import { useRef, useState } from "react";

function StateVsRef() {
    const input = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState("");
    return (
        <div>
            <h3>State vs Ref</h3>
            <input
                ref={input}
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className="control"
            />
        </div>
    );
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: "",
        hasError: false,
        reason: "help",
    });

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }));
    }

    return (
        <section>
            <h3>Feedback</h3>

            <form style={{ marginBottom: "1rem" }}>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    id="name"
                    className="control"
                    value={form.name}
                    style={{
                        border: form.hasError ? "1px solid red" : undefined,
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Reason</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) =>
                        setForm((prev) => ({
                            ...prev,
                            reason: event.target.value,
                        }))
                    }
                >
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="suggest">Suggestion</option>
                </select>

                <Button
                    onClick={() => alert(`50 Cent`)}
                    isActive={form.name.length !== 0}
                    disabled={form.name.length === 0}
                >
                    Send
                </Button>
            </form>
            <StateVsRef />
        </section>
    );
}
