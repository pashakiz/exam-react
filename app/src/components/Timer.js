import React, {Component} from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);

        //this.sendTimerData = this.sendTimerData.bind(this);

        this.state = {
            min: '00',
            sec: '00',
            timeout: false,
        };
    }

    sendTimerData = () =>  {
        this.props.getTimerData(this.state.min+':'+this.state.sec);
        console.log('Timer.sendTimerData:', this.state.min+':'+this.state.sec);
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        this.sendTimerData.bind(this);
        //this.props.getTimerData(this.state.min+':'+this.state.sec);
        console.log('Timer.componentWillUnmount', this.state.min+':'+this.state.sec);
        clearInterval(this.timerID);
    }

    tick() {
        let min = this.state.min;
        let sec = this.state.sec;
        let timeOut = this.state.timeout;

        if (+sec+1 > 59) {
            min++;
            if (+min < 10) { min='0'+min }
            if (+min > 20) { timeOut = true }
            sec = '00';
        } else {
            sec++;
            if (+sec < 10) { sec='0'+sec }
        }

        this.setState({
            min: min,
            sec: sec,
            timeout: timeOut
        });
    }

    render() {
        let timerClasses = 'examtimer';
        if (this.state.timeout) {
            timerClasses = 'examtimer examtimer_overrun';
        }
        return (
            <div className={timerClasses} onClick={this.sendTimerData} >
                {this.state.min}:{this.state.sec}
            </div>
        );
    }
}