import { createRoot } from "react-dom/client";
import App from "./App";

// ! createRoot()=>attaching html page to react
// ! render() : whatever data is there in app we need to show in ui
createRoot(document.getElementById('root')).render(
    <App/>
)
