import * as React from "react";
import { NextComponentType, NextPageContext } from 'next';
import { useState } from 'react';
import Amplify from '@aws-amplify/core';
import API, { graphqlOperation } from '@aws-amplify/api';
// import nanoid from 'nanoid'
// import produce from 'immer'

import awsmobile from '../aws-exports';
// import { ListTodosQuery, GetTodoListQuery } from '../build/API'
// import config from '../aws-exports'; // awsの認証情報含む設定ファイル
// import {
//   createTodo,
//   deleteTodo,
//   updateTodo
// } from '../graphql/mutations';
import { getTodo, getAllTodo, listTodos } from '../graphql/queries';

import Head from '../components/templates/head'
import Navigation from '../components/templates/navigation'

// const MY_ID = nanoid()
Amplify.configure(awsmobile);

interface TodoType {
  id: number,
  description: string
  isDone: boolean
}

const Todo: NextComponentType<NextPageContext> = props => {

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

Todo.getInitialProps = async (props) => {
//   if(!process.server){
//     console.log();
//  }
  try {
    const data = await API.graphql(graphqlOperation(getAllTodo,{id: 0}));
    console.log(data);
  } catch(e) {
    console.log(e);
  }
  // console.log('getInitialToProps', data);
  return props;
};

export default Todo;
