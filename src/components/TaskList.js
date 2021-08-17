import React from 'react';

const TaskList = () => {
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

    return ( 
        <div>
            {
                tasks.map((task, index) => (
                    <div className={`card card-body text-white m-2 ${task.status === 'Done' ? 'bg-success' : 'bg-warning'}`}>
                        {task.title}
                    </div>
                ))
            }
        </div>
     );
}
 
export default TaskList;