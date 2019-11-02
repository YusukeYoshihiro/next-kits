import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from '../components/templates/head'
import Navigation from '../components/templates/navigation'
import Button from '../components/atoms/Button'

// useContext
// useReducer
interface List {
  title: string,
  isDone: boolean
}

interface ListProps {
  list: [List]
}

const Lists: React.FC = props => {
  // const { list } = props;
  console.log(props);
  return <div>{props}</div>

  // return (
  //   <ul>
  //   {
  //     list.map(item => <li key={item}>{item}</li>)
  //   }
  //   </ul>
  // )
};

const Index: React.FC = () => {
  // use local state
  const [count, setCount] = useState(0);
  // const [todo, addTodo] = useState([]);
  const todoList: [List] = [{
    title: 'aaaa',
    isDone: false
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
      <p>hooks sample</p>
      <div>count: {count}</div>
      <Button title="+1" action={() => setCount(count + 1)} />
      <Button title="-1" action={() => setCount(count - 1)} />
    </div>
  )
}

export default Index
