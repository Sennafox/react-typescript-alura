import React from 'react';
import Button from '../Button';
import style from './style.module.scss';

class Forms extends React.Component {
    
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    
    adicionarTarefa(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log('state: ', this.state);
    }


    render (){
        return(
         <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
             <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                </label>
                <input 
                type = "text"
                name="tarefa"
                value={this.state.tarefa}
                onChange={e => this.setState({...this.state, tarefa: e.target.value})}
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
                value={this.state.tempo}
                onChange={e => this.setState({ ...this.state, tempo: e.target.value })}
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required/>
             </div>
             <div>
                <Button
                    texto="Adicionar"
                />
             </div>
         </form>   
        )
    }
}

export default Forms;