// import axios from "axios";
// import { useState, useEffect } from "react";
import GeneratedResults from "./GeneratedResults";

function GeneratedContentSection(props) {
  console.log(props);
  return (
    <section className="generatedContent">
      <h2>We've Cured your boredom!</h2>

      {props.generatedData ? (
        <GeneratedResults
          activity={props.generatedData.activity}
          participants={props.generatedData.participants}
          type={props.generatedData.type}
          price={props.generatedData.price}
        />
      ) : null}

      {/* {props.generatedData((returnedObject) => {
        return (
          <GeneratedResults
            activity={returnedObject.activity}
            participants={returnedObject.participants}
            // type={returnedObject.type}
            price={returnedObject.price}
          />
        );
      })} */}
    </section>
  );
}

export default GeneratedContentSection;
