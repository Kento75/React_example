import React from 'react';

export default function ToDoApp({ task, tasks, inputTask, addTask }) {
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.terget.value)} />
      <input type="button" value="add" onClick={() => addTask(task)} />
      <ul>
        {
          tasks.map(function(item, i) {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  );
}
