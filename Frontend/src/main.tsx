import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./context/store.ts";
import Hotjar from '@hotjar/browser';
import HotjarIntegration from "./components/HotjarIntegration/HotjarIntegration.tsx";

const siteId = 5088680;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter >
      <HotjarIntegration />
      <Provider store={store}>
        <App />
      </Provider> 
    </BrowserRouter>
);
