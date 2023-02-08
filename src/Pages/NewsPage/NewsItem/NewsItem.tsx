import React from 'react';
import style from './NewsItem.module.css'

const NewsItem = () => {
    return (
        <div className={style.newsItem}>
            <div className={style.postInfo}>
                <div className={style.authorInfo}>
                    <img className={style.authorAvatar}
                         src={"https://img3.socratify.net/31f8aea5cb02d4c711_150x182.jpg"} alt={"avatar"}/>
                    <div className={style.authorName}> Name Surname</div>
                </div>
                <div className={style.date}> 09.12.2022</div>
            </div>
            <div>
                // There should be text here, but the backend does not imply such functionality. //
                // Здесь должен быть текст, но backend не подразумевает такой функционал. //
                // Hier sollte Text stehen, aber das Backend impliziert keine solche Funktionalität. //
            </div>
            <img className={style.newsImg}
                 src={'https://as2.ftcdn.net/v2/jpg/02/50/35/31/1000_F_250353164_nsaIe1znGNR7hfVbwgAT1P0Y6AEdg9GJ.jpg'}
                 alt={'newsImg'}/>
        </div>
    );
};

export default NewsItem;