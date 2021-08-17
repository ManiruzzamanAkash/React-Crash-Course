import React, {useState, useEffect} from 'react';

const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const tasks = [
            {
                id: 1,
                title: 'First task',
                status: 'Done'
            },
            {
                id: 2,
                title: 'Scond task',
                status: 'Pending'
            },
            {
                id: 3,
                title: 'Third task',
                status: 'Done'
            }
        ];

        setTasks( tasks );
    }, [])

    const addTask = () => {
        if(title.length === 0) {
            alert('Please give a task title !');
            return;
        }

        const taskItem = {
            id: 4,
            title,
            status: 'Pending'
        }

        const updatedTask = tasks.slice();
        updatedTask.unshift(taskItem)
        setTasks(updatedTask);

        setTitle('');
    }

    return ( 
        <div>
            <h2>My Tasks</h2>
            <div>
                <input placeholder="Please enter task" value={title} onChange={(e) => setTitle(e.target.value)} /> 
                <button className="btn btn-success" onClick={addTask}>+</button>
            </div>
            {
                tasks.map((task, index) => (
                    <div key={index} className={`card card-body text-white m-2 ${task.status === 'Done' ? 'bg-success' : 'bg-warning'}`}>
                        {task.title}
                    </div>
                ))
            }
        </div>
     );
}
 
export default TaskList;