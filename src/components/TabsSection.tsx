import Button from "./Button/Button";

export type TabsSectionType = "main" | "feedback" | "effect";

export interface TabsSectionProps {
    active: TabsSectionType;
    onChange: (current: TabsSectionType) => void;
}

export default function TabsSection({ active, onChange }: TabsSectionProps) {
    return (
        <section style={{ marginBottom: "1rem" }}>
            <Button
                isActive={active === "main"}
                onClick={() => onChange("main")}
            >
                Main page
            </Button>
            <Button
                isActive={active === "feedback"}
                onClick={() => onChange("feedback")}
            >
                Feedback
            </Button>
            <Button
                isActive={active === "effect"}
                onClick={() => onChange("effect")}
            >
                Effect
            </Button>
        </section>
    );
}
