import React from 'react';
import Button from '../Button';
import style from './style.module.scss';

class Forms extends React.Component {
    render (){
        return(
         <form className={style.novaTarefa}>
             <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                </label>
                <input 
                type = "text"
                name="tarefa"
                id="tarefa"
                placeholder="O que você quer estudar"
                required/>    
             </div>
             <div className={style.inputContainer}>
            
                <label htmlFor="tempo">
                </label>
                <input 
                type = "time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required/>
             </div>
             <div>
                <Button/>
             </div>
         </form>   
        )
    }
}

export default Forms;