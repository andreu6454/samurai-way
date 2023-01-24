import React from 'react';
import style from './Suggestion.module.css'

type SuggestionPropsType = {
    title: string,
    description: string
}
const Suggestion = ({title, description}: SuggestionPropsType) => {
    return (
        <div className={style.Suggestion}>
            <div className={style.title}> {title} </div>
            <div className={style.description}> {description} </div>
        </div>
    );
};

export default Suggestion;