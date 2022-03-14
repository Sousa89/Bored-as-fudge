import { useState } from "react";

function UserOptionsForm() {
  return (
    <div className="formSection">
      <form action="">
        <select name="amountOfPeople" id="amountOfPeople">
          <option value="placeholder">Random</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
        </select>

        <button>Free me from Boredom!</button>
      </form>
    </div>
  );
}

export default UserOptionsForm;
