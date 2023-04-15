
import React from 'react';
import '../CheckInOut/CheckInOut.css';
import ArrowRight from '../../assets/vector.svg';
import Calendar from '../../assets/vector4.svg';

const CheckInOut = () => {
    return (
        <div>
            <div className="check__in">

                <img src={Calendar} alt="calendar" className="img__icon" />
                <button>Check-in</button>
                <img src={ArrowRight} alt="arrow-right" className="img__icon" />
                <button>Check-out</button>

            </div>
        </div>
    )
}

export default CheckInOut