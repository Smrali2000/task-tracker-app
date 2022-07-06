import {useState} from 'react';

function AddTask({addedTask}) {
    const[taskName, setTaskName] = useState('')
    const[dateTime, setDateTime] = useState('')
    const[reminder, setReminder] = useState(false)
    
    const submit = (e) =>{
        e.preventDefault();
        if(taskName === '' || dateTime === ''){
            alert('Please enter all the fields!!!');
            return;
        }
        addedTask({taskName, dateTime, reminder});
        setTaskName('');
        setDateTime('');
        setReminder(false);
    }

  return (
    <form className="form-container" onSubmit={submit}>
        <label>
             Enter task name:
            <input 
                className="form-input"
                type='text' 
                name='taskName' 
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter the task..."
                />
        </label><br />
        <label>
            Date&Time:
            <input 
                className="form-input"
                type='datetime-local' 
                name='dateTime' 
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                />
        </label><br />
        <label>
            Set reminder
            <input 
                className="form-check"
                type='checkbox' 
                checked= {reminder}
                value= {reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
        </label><br />
        <input type='submit' value='Add' className='btn btn-block'/>
    </form>
  )
}

export default AddTask