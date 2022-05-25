import * as React from 'react';
import style from './style.module.scss';

class Button extends React.Component<{ texto: string}> {
    render() {
        return(
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button;