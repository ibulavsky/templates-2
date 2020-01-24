import React, {useEffect, useState} from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

const DateContainer: React.FC = () => {
    const [startTime, changeStartTime] = useState(moment());
    const [finishTime, changeFinishTime] = useState(moment());
    console.log('start', startTime, moment(finishTime.diff(startTime)));

    useEffect(() => {
        changeStartTime(startTime);
        changeFinishTime(finishTime)
    }, [startTime, finishTime]);

    return (<div>
            Data
            <div>
                {moment().format('HH:mm:ss')}
            </div>
            <input type='time' onChange={(e => console.log(e.currentTarget.value))}/>
            <div>
                <TimePicker
                    showSecond={true}
                    defaultValue={moment()}
                    className="xxx"
                    onChange={changeFinishTime}
                />
                <TimePicker
                    showSecond={true}
                    defaultValue={moment()}
                    className="xxx"
                    onChange={changeStartTime}
                />
                <TimePicker
                    showSecond={true}
                    value={moment.utc(finishTime.diff(startTime))}
                    className="xxx"
                />
            </div>
        </div>
    );
};

export default DateContainer;
