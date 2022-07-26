import React from 'react';
import style from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + " " +style.active}>
                    Andrey
                </div>
                <div className={style.dialog}>
                    Andrey
                </div>
                <div className={style.dialog}>
                    Andrey
                </div>
                <div className={style.dialog}>
                    Andrey
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>hi</div>
                <div className={style.message}>how are you?</div>
                <div className={style.message}>YO</div>
            </div>
        </div>
    );
};

export default Dialogs;