import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from '../components/templates/head'
import Navigation from '../components/templates/navigation'
import Button from '../components/atoms/Button'

interface List {
  title: string,
  isDone: boolean
}

const Lists: React.FC<any> = props => {
  const { todo } = props;
  return (
    <ul>
    {
      todo.map(({title, isDone}, i) => {
        const doneClass = isDone ? 'is-done' : '';
        return <li key={i} className={doneClass}>{title}</li>
      })
    }
    </ul>
  )
};

const Index: React.FC = () => {
  // use local state
  const [count, setCount] = useState(0);
  const todoList: Array<List> = [{
    title: 'aaaa',
    isDone: false
  },{
    title: '掃除',
    isDone: true
  }];

  // use side effect hooks
  // DOMの更新があると逐一呼び出される
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <Head title="Index page" />
      <Navigation />
      <p style={{color: '#e74c3c'}}>state & effect hooks sample</p>
      <div>count: {count}</div>
      <Button title="+1" action={() => setCount(count + 1)} />
      <Button title="-1" action={() => setCount(count - 1)} />
      <Lists todo={todoList} />
    </div>
  )
}

export default Index
