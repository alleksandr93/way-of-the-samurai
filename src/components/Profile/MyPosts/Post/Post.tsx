import React from 'react';
import S from './Post.module.css';

export const Post = () => {
    return (
        <div className={S.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                 alt=""/>
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

