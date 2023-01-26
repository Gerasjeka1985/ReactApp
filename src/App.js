import {Layout} from "./components/Layout";
import {Routes, Route} from "react-router-dom";

import {MainPage} from "./pages/MainPage";
import {ChatsPosts} from "./pages/ChatsPosts";
import {AboutPage} from "./pages/AboutPage";
import {ChatPage} from "./pages/ChatPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chats" element={<ChatsPosts />} />
        <Route path=":id" element={<ChatPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
