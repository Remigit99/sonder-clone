
import React from 'react';
import '../Guest/Guest.css';
import GuestIcon from '../../assets/vector5.svg';
import Plus from '../../assets/vector3.svg';
import Minus from '../../assets/vector2.svg';

const Guest = () => {
    return (
        <div id='guest'>
            <img src={GuestIcon} alt="Guest__icon" className="img__icon" />
            <h4>Guests</h4>
            <div className="guests__counter">
                <button className="decrease__guest">
                    <img src={Minus} alt="decrease__guest" className="decrease__icon" />
                </button>

                <h4> 1 </h4>

                <button className="increase__guest">
                    <img src={Plus} alt="increase__guest" className="increase__icon" />
                </button>
            </div>
        </div>
    )
}

export default Guest;
