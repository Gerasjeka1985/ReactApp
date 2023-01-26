import {Layout} from "./components/Layout";
import {Routes, Route} from "react-router-dom";

import {MainPage} from "./pages/MainPage";
import {ChatsPosts} from "./pages/ChatsPosts";
import {AboutPage} from "./pages/AboutPage";
import {ChatPage} from "./pages/ChatPage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chats" element={<ChatsPosts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        <Route path=":id" element={<ChatPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
