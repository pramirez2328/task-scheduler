import React from "react";

function Input() {
  return (
    <div>
      <form>
        <label>
          Enter Task:
          <input type="text" name="task" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Input;
