import { useState } from "react";

function UserOptionsForm(props) {
  const [peopleValue, setPeopleValue] = useState("");
  console.log(props);

  const peopleHandleChange = function (event) {
    // console.log(event.target.value);
    console.log(`people has been changed`);
    setPeopleValue(event.target.value);
  };
  console.log(peopleValue);
  return (
    <div className="formSection">
      <form
        action=""
        onSubmit={(event) => {
          props.userSubmit(event, peopleValue);
        }}
        onChange={peopleHandleChange}
        value={peopleValue}
      >
        <select name="amountOfPeople" id="amountOfPeople">
          <option value="0">Random</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>

        <button>
          Free me from from the clutches of existential dread due to boredom!
        </button>
      </form>
    </div>
  );
}

export default UserOptionsForm;
