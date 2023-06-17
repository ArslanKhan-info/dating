import React from 'react'
import style from './custome-btn.module.scss'



export const custome-btn = ({text,disable,loading }) => {
    return (
        <button className={style.custome-btn}>{text}</button>
    )
}
