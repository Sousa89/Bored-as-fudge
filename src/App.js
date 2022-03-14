import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import UserOptionsForm from "./UserOptionsForm";
import GeneratedContentSection from "./GeneratedContentSection";

function App() {
  const [BafData, setBafData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://www.boredapi.com/api/activity",
      params: {
        participants: 4,
      },
    }).then((apiData) => {
      setBafData(apiData.data);
      console.log(apiData.data);
    });
  }, []);
  console.log(BafData.participants);
  return (
    <div className="App">
      <header>
        <h1>Bored As Fudge</h1>
        <img src="http://placekitten.com/700/300" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut a
          obcaecati debitis iure amet, non quo sunt, voluptas ipsa repudiandae
          culpa. Harum, similique repellendus. Laudantium ipsa provident veniam
          rem nam.
        </p>
      </header>
      <UserOptionsForm />
      <GeneratedContentSection />
    </div>
  );
}

export default App;
