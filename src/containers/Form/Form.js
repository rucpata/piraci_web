import React from 'react';
import './Form.css';

const Form = () => {

    return(
        <div className='orderForm'>
            <h2>Zamów</h2>
            <form>
                <label htmlFor=""> Twoje imię
                    <input type="text"/>
                </label>

                <label htmlFor=""> Twoj e-mail
                    <input type="email"/>
                </label>

                <label htmlFor=""> Preferowana data
                    <input type="date"/>
                </label>

                <label htmlFor=""> Miasto
                    <input type="text"/>
                </label>
                
                <input type="submit" />

            </form>
        </div>
        
    )
}

export default Form;