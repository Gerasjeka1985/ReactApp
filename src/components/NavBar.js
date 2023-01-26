import React from "react";
import {Link, NavLink} from "react-router-dom";

export const NavBar = () => {

    const isAuth = false

    const activeStyles = {
        color:"orange"
    }

    return <div className="bg-black flex justify-around items-center py-4">
        <span className="text-white text-xl">React</span>
        {isAuth &&  <ul className="flex gap-8">
            <li className="p-5">
                <NavLink
                    to={'/'}
                    style={({isActive}) => isActive ? activeStyles : undefined }
                    className="text-xl text-gray-400 hover:text-orange-400"
                >
                    Главная
                </NavLink>
            </li>
            <li className="p-5">
                <NavLink
                    to={'/about'}
                    style={({isActive}) => isActive ? activeStyles : undefined }
                    className="text-xl text-gray-400 hover:text-orange-400"
                >
                    О сайте
                </NavLink>
            </li>
            <li className="p-5">
                <NavLink
                    to={'/chats'}
                    style={({isActive}) => isActive ? activeStyles : undefined }
                    className="text-xl text-gray-400 hover:text-orange-400"
                >
                    Посты
                </NavLink>
            </li>
        </ul>}
        <div className="flex justify-center items-center text-white-400 bg-amber-400 rounded-sl p-2">
            {isAuth ? (<button>Выйти</button>) : <Link to={"/login"}>Войти</Link> }
        </div>
    </div>
}