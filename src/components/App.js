import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import AddTask from './AddTask';
import Header from './Header';
import Tasks from './Tasks';
import About from './About';
import Footer from './Footer';

const App = () => {
  const[showAddTask, setShowAddTask] = useState(false)
  const[tasks, setTask] = useState([])

  //Update tasks everytime task changes
  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchTask();
      setTask(dataFromServer);
    }
    getData()
  },[])

  //Fetch task from json server
  const fetchTask = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
  }

  //Add a new task to json server
  const addedTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',{
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const newData = await res.json()
    setTask([...tasks, newData])
  }
  
  //delete a task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    })       
    setTask(tasks.filter((task) => task.id !== id))
  }

  //Fetch the reminder
  const fetchReminder = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    return data;
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchReminder(id)
    const updateTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask),
    })
    const data = await res.json()
    setTask(
      tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
  }

  
  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} 
      />
      <hr style={{width:'90%'}}/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showAddTask && <AddTask addedTask={addedTask}/>}
              {
                tasks.length > 0 ? (
                  <Tasks 
                    tasks={tasks} 
                    onDelete={deleteTask} 
                    onToggle={toggleReminder} 
                    /> ): 
                  (<h2 style={{margin: '10px 0 30px 30px'}}>No more tasks left :)</h2> )
              }
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
