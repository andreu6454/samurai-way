import React from 'react';
import style from './NewsPage.module.css'
import NewsItem from "./NewsItem/NewsItem";

const NewsPage = () => {
    return (
        <div className={style.newsPage}>
            <h1> News: </h1>
            <div className={style.newsBlock}>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        </div>
    );
};

export default NewsPage;