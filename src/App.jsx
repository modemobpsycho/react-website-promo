import Header from "./components/Header";
import Button from "./components/Button/Button";
import TeachingSection from "./components/TeachingSection";
import { useState } from "react";
import { differences } from "./data";

function App() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
        setContentType(type);
    }

    return (
        <div>
            <Header />
            <main>
                <TeachingSection />
                <section>
                    <h3>Шо мы? Кто мы?</h3>
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

                    {!contentType && <p>Нажми на кнопку!</p>}
                    {contentType && <p>{differences[contentType]}</p>}
                </section>
            </main>
        </div>
    );
}

export default App;
