import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways } from "./data";

function App() {
    let content = "Нажми на кнопку";
    function handleClick(type) {
        console.log("Button clicked, type: ", type);
        content = type;
    }
    return (
        <div>
            <Header />

            <main>
                <section>
                    <h3>Hello React</h3>

                    <ul>
                        <WayToTeach {...ways[0]} />
                        <WayToTeach {...ways[1]} />
                        <WayToTeach {...ways[2]} />
                    </ul>
                </section>

                <section>
                    <h3>Шо мы? Кто мы?</h3>
                    <Button onClick={() => handleClick("way")}>Подход</Button>
                    <Button onClick={() => handleClick("easy")}>
                        Доступность
                    </Button>
                    <Button onClick={() => handleClick("program")}>
                        Концентрация
                    </Button>
                    <p>{content}</p>
                </section>
            </main>
        </div>
    );
}

export default App;
