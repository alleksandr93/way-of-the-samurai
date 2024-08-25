import React from 'react';
import S from './Post.module.css';

type PostPropsType = {
    message:string
    likesCount:number
}

export const Post = ({message,likesCount}:PostPropsType) => {
    return (
        <div className={S.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                 alt=""/>
            {message}
            <div>
                <span>Like </span>{likesCount}
            </div>
        </div>
    );
};

