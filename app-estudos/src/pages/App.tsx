import React from 'react';
import Forms from '../Components/Forms';
import List from '../Components/List';
import style from './style.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms/>
      <List/>
    </div>
  );
}

export default App;
