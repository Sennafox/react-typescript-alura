import * as React from 'react';
import style from './style.module.scss';

class Button extends React.Component {
    render() {
        return(
            <button className={style.botao}>
                Button
            </button>
        )
    }
}

export default Button;