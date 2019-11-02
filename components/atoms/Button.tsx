import * as React from 'react';

interface Props {
  title: string,
  action: Function
}

const Button: React.FC<Props> = props => {
  const {title, action} = props;
  return <button type="button" onClick={() => action()}>{title}</button>
};

export default Button;
