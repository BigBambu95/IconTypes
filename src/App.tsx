import React from 'react';
import logo from './logo.svg';
import './App.css';

const IconNames = {
  Arrow: "Arrow" as const,
  Alert: "Alert" as const,
  ArrowV: "Arrow-V" as const,
} 

type ReturnType<T> = T extends {[key: string]: infer U} ? U : any;

type IconProps = {
  name: ReturnType<typeof IconNames>;
  age?: number;
}

const Icon = (props: IconProps) => {
  return(
    <div>
      {props.name}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Icon name="Arrow-V" />
    </div>
  );
}

export default App;
