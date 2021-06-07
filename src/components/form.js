function Form() {
  const handleInput = (event) => {
    event.preventDefault();
    let task = document.getElementById("task");
    let ulList = document.querySelector(".tasks");
    ulList.insertAdjacentHTML(
      "beforeend",
      `<div class="d-flex justify-content-between w-75 mr-auto ml-auto mb-3">
        <div> <li class="h4">${task.value}</li> </div>
        <div class="d-flex w-25 justify-content-between ">
          <div>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label ml-3" for="defaultCheck1">
            task done
            </label>
          </div>
           <div id="deleteButton" class="btn btn-danger ml-3">delete</div>
        </div>

      </div> `
    );
    task.value = "";
  };

  return (
    <div className="w-100">
      <form className="d-flex justify-content-center">
        <label className="mb-0 mt-1 mr-3">TASK:</label>
        <div className="border border-primary rounded">
          <input type="text" id="task" name="task" />
          <input onClick={handleInput} type="submit" value="...add a task" />
        </div>
      </form>
    </div>
  );
}

export default Form;
