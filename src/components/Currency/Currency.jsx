

import React from 'react';
import '../Currency/Currency.css'
import { currency } from '../../Data/CurrencyData'
import { BiCheck } from 'react-icons/bi'

const Currency = () => {
    return (
        <div className='currency__basket'>
            <p>Select your currency</p>
            <ul>

                {
                    currency.map(({ code, name, Symbol }) => {
                        return (

                            <div className="currency__sec" key={name}>
                                <li className='currency__choice'>
                                    {<BiCheck />}
                                </li>
                                <li>{code}</li>
                                <li>{name}</li>
                                <li>({Symbol})</li>
                            </div>

                        )

                    })
                }

            </ul>


        </div>
    )
}

export default Currency