import {FaTimes} from 'react-icons/fa';

function Task({task, deleteTask, toggleReminder}) {
    return(
        <div className={`taskList ${task.reminder ? 'reminderSet' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
            <h3 className="taskName">
                {task.taskName}
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => deleteTask(task.id)} />
            </h3>
            <p className="taskTime">{task.dateTime}</p>
        </div>
    )
}

export default Task