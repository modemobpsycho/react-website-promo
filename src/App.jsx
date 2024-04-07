import DifferencesSection from "./components/DifferencesSection";
import EffectSection from "./components/EffectSection";
import FeedbackSection from "./components/FeedbackSection";
import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import TeachingSection from "./components/TeachingSection";

import { useState } from "react";

function App() {
    const [tab, setTab] = useState("effect");
    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <TabsSection
                    active={tab}
                    onChange={(current) => setTab(current)}
                />
                {tab === "main" && (
                    <>
                        <TeachingSection />
                        <DifferencesSection />
                    </>
                )}
                {tab === "feedback" && <FeedbackSection />}
                {tab === "effect" && <EffectSection />}
            </main>
        </>
    );
}

export default App;
