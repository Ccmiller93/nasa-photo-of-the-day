import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Display from './Components/Display'

function App() {
  const [data, setData] = useState({})
  const display = useState('')
  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
        setData(res.data)
        })
        .catch(err => {
        console.log("fetchData -> err", err);
      })
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      
    </div>
  );
}

export default App;
