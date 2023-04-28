

import React from 'react';
import '../Language/Language.css';
import { language } from '../../Data/LanguageData';

const Language = () => {
    return (
        <div>

            <div className='language__pop'>
                <p>Select your language</p>
                <ul>
                    {
                        language.map(({ id, flag, language }) => {
                            return (
                                <li key={id}>
                                    <button type='button' className='lanuage-l'>
                                        <img src={flag} alt={language} />
                                        <p>{language}</p>

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
export default Language