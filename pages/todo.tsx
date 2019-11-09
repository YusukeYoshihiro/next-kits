import * as React from "react";
import { useState } from 'react';
// import { API, graphqlOperation } from 'aws-amplify'
// import nanoid from 'nanoid'
// import produce from 'immer'

// import { ListTodosQuery, GetTodoListQuery } from '../build/API'
// import config from '../aws-exports'; // awsの認証情報含む設定ファイル
// import {
//   createTodo,
//   deleteTodo,
//   updateTodo
// } from '../graphql/mutations';
// import { getTodo, listTodos } from '../graphql/queries';

import Head from '../components/templates/head'
import Navigation from '../components/templates/navigation'

// const MY_ID = nanoid()
// API.configure(config)

interface TodoType {
  id: number,
  description: string
  isDone: boolean
}

const Todo: React.FC = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const submitTodo = (list: Array<string>, todo: string) => {
    const newItem: TodoType = {
      id: Math.floor(Math.random() * Math.floor(1000)),
      description: todo,
      isDone: false
    };
    setTodo('');
    setList([...list, newItem]);
  };

  const deleteTodo = (id) => {
    const deletedTodo: Array<TodoType> = list.filter(item => {
      return item.id != id;
    });
    setList(deletedTodo);
  };
  return (
    <div>
      <Head title="todo" />
      <Navigation />
      <h2>Todo with amplify</h2>
      <input style={{
        border: 'solid 1px #ddd',
        padding: 10,
        borderRadius: 4,
        fontSize: 18,
        WebkitAppearance: 'none',
        color: '#333'
      }} value={todo} type="text" placeholder="please write todo" onChange={e => setTodo(e.target.value)} />
      <button style={{
        padding: 10,
        background: '#F06292',
        color: '#eee',
        borderRadius: 4,
        fontSize: 18,
        WebkitAppearance: 'none'
      }} onClick={() => submitTodo(list, todo)}>add Todo</button>
      <ul className="ListContainer">{
        list.map( item => (
          <li key={item.id} className="ListItem">
            <span className="title">{item.description}</span>
            <input type="button" value="delete" onClick={() => deleteTodo(item.id)} />
          </li>
        ))
      }</ul>
    </div>
  )
};

export default Todo;
