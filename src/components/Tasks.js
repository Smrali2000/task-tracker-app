import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <div>
      {tasks.map((task) => (
      <Task key={task.id} task={task} deleteTask={onDelete} toggleReminder={onToggle}/>
      ))}
    </div>
  )
}

export default Tasks;