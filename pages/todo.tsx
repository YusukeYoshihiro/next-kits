import * as React from "react";
import Head from '../components/templates/head'
import Navigation from '../components/templates/navigation'

const Todo: React.FC = () => {
  return (
    <div>
      <Head title="todo" />
      <Navigation />
      <h2>Todo with amplify</h2>
    </div>
  )
};

export default Todo;
