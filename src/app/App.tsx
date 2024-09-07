import { Suspense } from "react";
import { AppRouter } from "./routes";
import './styles/index.scss'


const App = () => {
    return (
        <div>
            <Suspense fallback="Load...">
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;