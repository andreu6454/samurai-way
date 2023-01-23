import React, {FC} from 'react';
import style from "../../Pages/Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";

type StyledLinkPropsType = {
    redirectTo: string,
    title: string
}
const StyledLink: FC<StyledLinkPropsType> = ({redirectTo,title}) => {
    return (
        <div className={style.item}>
            <NavLink to={redirectTo}>{title}</NavLink>
        </div>
    );
};

export default StyledLink;