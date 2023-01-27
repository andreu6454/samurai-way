import React from 'react';
import style from './NotFoundPage.module.css'
import words from '../../Assets/images/404words.png'
import item from '../../Assets/images/404boy.png'
import item2 from '../../Assets/images/item2.png'


const NotFoundPage = () => {
    return (
            <div className={style.notFoundPage}>
                <div className={style.container}>
                    <img src={words} className={style.words} alt={"404"}/>
                    <div>
                        <img src={item} className={style.item} alt={"404"}/>
                        <img src={item2} className={style.item2} alt={"404"}/>
                    </div>
                </div>
            </div>
    );
};

export default NotFoundPage;