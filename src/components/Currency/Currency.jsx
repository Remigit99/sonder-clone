

import Modal from '@mui/material/Modal';
import '../Currency/Currency.css'
import { currency } from '../../Data/CurrencyData'
import { BiCheck } from 'react-icons/bi'
import { useState } from 'react'

const Currency = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div className='currency__basket'>

            <div className='currency__pop'>

                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <>
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

                    </>

                </Modal>



            </div>


        </div>
    )
}

export default Currency