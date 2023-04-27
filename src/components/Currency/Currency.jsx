

import React from 'react';
import '../Currency/Currency.css'
import { currency } from '../../Data/CurrencyData'
import { BiCheck } from 'react-icons/bi'

const Currency = () => {
    return (
        <div className='currency__basket'>
            {
                currency.map(({ code, name, Symbol }) => {
                    return (

                        <div className="currency__sec" key={name}>
                            <div className='currency__choice'>
                                {<BiCheck />}
                            </div>
                            <div>{code}</div>
                            <div>{name}</div>
                            <div>({Symbol})</div>
                        </div>

                    )

                })
            }

        </div>
    )
}

export default Currency