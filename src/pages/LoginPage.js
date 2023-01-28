import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, checkIsAuth} from "../redux/features/auth/authSlice";
import {toast} from "react-toastify";

export const LoginPage = () => {
    const isAuth = useSelector(checkIsAuth)
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const {status} = useSelector( (state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEnter = () => {
        try {
           dispatch(loginUser({email, password}))
        }catch (error){
            console.log(error);
        }
    }

    useEffect(() =>{
        if(status) toast(status)
        if(isAuth) navigate('/')
    }, [status, isAuth, navigate])

    return <form
        onSubmit={e => e.preventDefault()}
        className="w-1/4 h-60 mx-auto mt-40"
    >
        <h1 className="text-lg text-black text-center">Авторизация</h1>
        <label className="text-xs text-black-400">
            Email:
            <input type="text"
                   value={email}
                   onChange={e => setUserEmail(e.target.value)}
                   placeholder="email"
                   className="mt-1 text-black w-full rounded-lg bg-white-400 border-2 py-2 px-2 text-xs outline-none placeholder:text-black"

            />
        </label>
        <label className="text-xs text-black-400 ">
            Password:
            <input type="password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   placeholder="password"
                   className="mt-1 text-black w-full rounded-lg bg-white-400 border-2 py-2 px-2 text-xs outline-none placeholder:text-black"

            />
        </label>
        <div className="flex gap-8 justify-center mt-4">
            <button type="submit"
                    onClick={handleEnter}
                    className="flex justify-center items-center border-2 text-black text-xs rounded-sm py-2 px-4"
            >
                Войти
            </button>
            <Link to="/register" className="flex justify-center items-center text-xs text-black">
                Нет аккаунта ?
            </Link>
        </div>
    </form>
}