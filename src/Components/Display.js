import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

export default function Display(props) {
    const { data } = props
    return (
        <div className='big-container'>
            <img src={data.url}/>
        </div>
    )
}
