import React, {Component} from 'react';

export default class ContentNumbersStart extends Component {
    render() {

        const {tabOpen} = this.props;

        let body = '';
        if (tabOpen === 'tabNumbers') {
            body = (
                <div className="exam__cardstable">
                    <table className="cardstable">
                        <tbody>
                        <tr>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №1</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="1">Билет №01</button>
                            </td>
                            <td className="cardstable__td">
                                <button className="btn btn1 btn_ticket" data-ticket="80">Билет №80</button>
                            </td>
                        </tr>
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
}