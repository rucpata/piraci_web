import React, {useState} from 'react';
import './Form.scss';
// import medalion from '../../../public/images/background/bg_medalion.jpg'

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
            <form onSubmit={handleSubmit}>
                <label> 
                    Twoje imię
                    <input 
                        type="text"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        required
                    />
                </label>

                <label> 
                    Twój e-mail
                    <input 
                        type="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        required
                    />
                </label>

                <label> 
                    Preferowana data
                    <input 
                        type="date"
                        value={date}
                        onChange={e=>setDate(e.target.value)}
                        required
                    />
                </label>

                <label> 
                    Miasto
                    <input 
                        type="text"
                        value={city}
                        onChange={e=>setCity(e.target.value)}
                        required
                    />
                </label>
                <button type='submit'>Wyślij</button>

            </form>
            {/* <img src='/images/background/bg_medalion.jpg' alt='tło' className="formback"/> */}
        </div>
        
    )
}

export default Form;