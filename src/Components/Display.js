import React from "react";
import "../App.css";


export default function Display(props) {
    const { data } = props
    return (
        <div className='big-container'>
            <h1>{data.title}</h1>
            <h2>{data.date}</h2>
            <img src={data.url} alt='' />
            <p>{data.explanation}</p>
        </div>
    )
}
