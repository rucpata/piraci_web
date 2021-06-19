import React from 'react';

const Form = () => {

    return(
        <form>
            <label htmlFor=""> Imię
                <input type="text"/>
            </label>

            <label htmlFor=""> Nazwisko
                <input type="text"/>
            </label>

            <label htmlFor=""> coś
                <input type="text"/>
            </label>

            <label htmlFor=""> coś
                <input type="text"/>
            </label>
            
            <input type="submit" />

        </form>
    )
}

export default Form;