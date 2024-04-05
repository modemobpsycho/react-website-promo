import WayToTeach from "./WayToTeach";
import { ways } from "../data";

export default function TeachingSection() {
    return (
        <section>
            <h3>Hello React</h3>

            <ul>
                {ways.map((way) => {
                    return <WayToTeach key={way.title} {...way} />;
                })}
            </ul>
        </section>
    );
}
