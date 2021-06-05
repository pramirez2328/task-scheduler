const Header = ({ lineBreak }) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return (
    <header className="d-flex flex-column justify-content-center align-items-center m-3">
      <h1>Task Scheduler</h1>
      <h4>Today is: {today}</h4>
      {lineBreak}
      <ul id="navUl">
        <li>You can add a task</li>
        <li>Edit a task</li>
        <li>Delete a task</li>
      </ul>
    </header>
  );
};

Header.defaultProps = {
  lineBreak: "****************",
};

export default Header;
