import React, {FC} from 'react';
import style from "./StyledLink.module.css";
import {NavLink} from "react-router-dom";

type StyledLinkPropsType = {
    redirectTo: string,
    title: string
}
const StyledLink: FC<StyledLinkPropsType> = ({redirectTo, title}) => {
    return (
        <NavLink className={({isActive}) => isActive ? style.selectedLink : style.Link}
                 to={redirectTo}>{title}</NavLink>
    );
};

export default StyledLink;