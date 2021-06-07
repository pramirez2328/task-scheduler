import Form from "./form";

function TaskList() {
  return (
    <div>
      <Form />
      <ol className="tasks mt-3"></ol>
    </div>
  );
}

export default TaskList;
