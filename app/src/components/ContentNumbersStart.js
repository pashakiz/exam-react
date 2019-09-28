import React, {Component} from 'react';

export default class ContentNumbersStart extends Component {
    render() {

        const {tabOpen} = this.props;

        let body = '';
        if (tabOpen === 'tabNumbers') {

            let buttons = [];
            for (let i=1; i<=20; i++) {
                buttons.push(
                    <tr key={i}>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket" onClick={this.handleClick.bind(this, i)}>Билет №{i}</button>
                        </td>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket" onClick={this.handleClick.bind(this, i+20)}>Билет №{i+20}</button>
                        </td>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket" onClick={this.handleClick.bind(this, i+40)}>Билет №{i+40}</button>
                        </td>
                        <td className="cardstable__td">
                            <button className="btn btn1 btn_ticket" onClick={this.handleClick.bind(this, i+60)}>Билет №{i+60}</button>
                        </td>
                    </tr>
                );
            }

            body = (
                <div className="exam__cardstable">
                    <table className="cardstable">
                        <tbody>
                            {buttons}
                        </tbody>
                    </table>
                </div>
            );
        }

        return(
            <div className="exam__content exam__content_numbers active">
                {body}
            </div>
        )
    }

    handleClick = (i) => {
        console.log(i);
    }

}