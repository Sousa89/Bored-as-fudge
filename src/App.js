// App.js

import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import UserOptionsForm from "./UserOptionsForm";
import GeneratedContentSection from "./GeneratedContentSection";
import Footer from "./Footer";

function App() {
  const [bafData, setBafData] = useState({});

  const [friends, setFriends] = useState(!true);

  // this recall function lets the user re-submit form, getting new data each time
  const [recall, setRecall] = useState(true);
  useEffect(() => {
    axios({
      url: "https://www.boredapi.com/api/activity",
      params: {
        participants: friends,
      },
    }).then((apiData) => {
      setBafData(apiData.data);
    });
  }, [recall]);

  const selectNumberOfFriends = function (event, chosenFriends) {
    event.preventDefault();
    setRecall(!recall);
    setFriends(chosenFriends);
  };

  return (
    <div className="App">
      <header>
        <h1>Bored As Fudge</h1>
        <div className="imgContainer">
          <img src="https://unsplash.com/photos/avmHWOuRThM" alt="" />
        </div>
        <p>
          Look at you sitting there. You haven't moved in 3 hours, have you?
          Probably distracting yourself with cute cat pictures, or thinking
          about how terrifyingly vast the universe is.
        </p>
        <p>You must be Bored, As, Fudge.</p>

        <p>Let us fix that for you! </p>
      </header>
      <UserOptionsForm userSubmit={selectNumberOfFriends} />
      {/* this ternary operators prevents generated section from displaying before user clicks on submit button (on app start, a random option is rendered) */}
      {friends === false ? null : (
        <GeneratedContentSection generatedData={bafData} />
      )}
      <Footer />
    </div>
  );
}

export default App;
