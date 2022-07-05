import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  const [showAddTask, setShowTask] = useState
  (false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
  
  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
  
    return data
    
    //Add Task
    const addTask = (task) => {
      const res = await fetch('https://localhost/5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      
      const data = await res.json()
      
      setTasks([...task, data])
      
      //const id = Math.floor(Math.random() * 10000) + 1
      //const newTask = {id, ...task}
      //setTasks([...tasks, newTask])
    }
    //Delete tasks
    const deleteTask = async(id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      })
      res.status === 200 
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
    }
    //Toggle reminder
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
      
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method:'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })
      
      const data = await res.json()
      setTasks(
        tasks.map((task) => 
          task.id === id ? { ...task, reminder: data.reminder } : task
        )
      )
    }
    
  return (
    <Router>
      <div className="container">
        <Header title='Task Tracker'
          onAdd={() => setShowTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask}/>}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete= {deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No tasks to show'
                )}
              </>
            }
          />
          <Route path='/about' component={About}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
}

export default App