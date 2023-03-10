import {Layout} from "./components/Layout";
import {Routes, Route} from "react-router-dom";


import {MainPage} from "./pages/MainPage";
import {ChatsPosts} from "./pages/ChatsPosts";
import {AboutPage} from "./pages/AboutPage";
import {ChatPage} from "./pages/ChatPage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getMe} from "./redux/features/auth/authSlice.js";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    },[dispatch])

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

      <ToastContainer position="bottom-right" />
    </Layout>
  );
}

export default App;
