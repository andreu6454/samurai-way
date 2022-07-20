import React from 'react';
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.appHeader}>
            <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" alt={"logo"}/>
        </header>
    );
};

export default Header;