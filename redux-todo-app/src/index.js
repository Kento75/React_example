import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

// 初期のStateを設定(空)
const initialState = {
  task: '',
  tasks: []
};

// Reducer：Actionによってstateを制御
function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

// Storeの生成
const store = createStore(tasksReducer);

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input type="text" onChange={ (e) => store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={ (e) => store.dispatch(addTask(task))} />
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

function renderApp(store) {
  render(
    <TodoApp store= { store } />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);
