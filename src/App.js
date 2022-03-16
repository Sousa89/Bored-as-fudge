import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import UserOptionsForm from "./UserOptionsForm";
import GeneratedContentSection from "./GeneratedContentSection";

function App() {
  const [bafData, setBafData] = useState({});

  const [friends, setFriends] = useState(5);

  // const [funds, setFunds] = useState("");

  useEffect(() => {
    axios({
      url: "http://www.boredapi.com/api/activity",
      params: {
        participants: friends,
      },
    }).then((apiData) => {
      setBafData(apiData.data);
      console.log(apiData.data);
    });
  }, [friends]);

  const selectNumberOfFriends = function (event, chosenFriends) {
    event.preventDefault();
    console.log(chosenFriends);
    setFriends(chosenFriends);
  };

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
      <UserOptionsForm userSubmit={selectNumberOfFriends} />
      <GeneratedContentSection generatedData={bafData} />
    </div>
  );
}

export default App;
