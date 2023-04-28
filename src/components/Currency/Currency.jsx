

import React from 'react';
import '../Currency/Currency.css'
import { currency } from '../../Data/CurrencyData'
import { BiCheck } from 'react-icons/bi'

const Currency = () => {
    return (
        <div className='currency__basket'>

            <div className='currency__pop'>
                <p>Select your currency</p>
                <ul>
                    {
                        currency.map(({ code, name, Symbol }) => {
                            return (
                                <li key={code}>
                                    <button type='button' className='currency-c'>
                                        <p>{code}</p>
                                        <p>{name}</p>
                                        <p>({Symbol})</p>
                                    </button>
                                </li>

                            )
                        })

                    }

                </ul>
            </div>


        </div>
    )
}

export default Currency