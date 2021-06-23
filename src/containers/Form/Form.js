import React, {useState} from 'react';
import './Form.css';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState();
    const [city, setCity] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        setName('')
        setEmail('')
        setDate('')
        setCity('')
    }
   

    return(
        <div className='orderForm'>
            <h2>Zamów</h2>
            <form>
                <label> 
                    Twoje imię
                    <input 
                        type="text"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                </label>

                <label> 
                    Twój e-mail
                    <input 
                        type="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                </label>

                <label> 
                    Preferowana data
                    <input 
                        type="date"
                        value={date}
                        onChange={e=>setDate(e.target.value)}
                    />
                </label>

                <label> 
                    Miasto
                    <input 
                        type="text"
                        value={city}
                        onChange={e=>setCity(e.target.value)}
                    />
                </label>
                
                <input type="submit" onClick={handleSubmit}/>

            </form>
        </div>
        
    )
}

export default Form;