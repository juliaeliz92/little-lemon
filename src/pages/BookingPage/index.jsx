import { useState } from 'react'
import { occasionOptions } from '../../constants'
import { PillInput, Button } from '../../components'
import { useBookingDateTime } from '../../hooks'
import './styles.scss'

const BookingPage = () => {
    const [initializeDateTime, updateTime] = useBookingDateTime()
    const [bookingDate, setBookingDate] = useState(initializeDateTime()[0])
    const [bookingTime, setBookingTime] = useState()
    const [numberGuests, setNumberGuests] = useState(1)
    const [bookingHours, setBookingHours] = useState(initializeDateTime()[1])

    const handleBookingDate = (e) => {
        e.preventDefault()
        setBookingDate(e.target.value)
        setBookingHours(updateTime(e.target.value)[1])
    } 

    return <main className='booking-container'>
        <section className="hero">
            <img src="greek salad.jpg" alt="hero" />
            <div className='header'>
                <h1>Table Reservation</h1>
                <h2>Enter reservation below and proceed to user information</h2>
            </div>
        </section>
        <section className='form-section'>
            <form>
                <div className='row'>
                    <div className="column">
                        <label htmlFor='booking-date'>Date</label>
                        <input 
                            type='date' 
                            id="booking-date" 
                            min={initializeDateTime()[0]}
                            value={bookingDate} 
                            onChange={handleBookingDate} />
                    </div>
                    <div className="column">
                        <label htmlFor='booking-time'>Time</label>
                        <select id="booking-time" value={bookingTime} onChange={(e) => setBookingTime(e.target.value)}>
                            {bookingHours.map((hour) => <option value={hour} key={hour}>{hour}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor='number-guests'>Number of Guests</label>
                        <div className='counter-container' id='number-guests'>
                            <div role='button' onClick={() => setNumberGuests(numberGuests => numberGuests + 1)}>+</div> 
                            <span>{numberGuests}</span>
                            <div role='button' onClick={() => setNumberGuests(numberGuests => numberGuests - 1)}>-</div> 
                        </div>
                    </div>
                    <div className="column">
                        <label htmlFor='occasion'>Occasion</label>
                        <div className='occasions-input-container' id="occasion">
                            {occasionOptions.map((occasion, ind) => <PillInput label={occasion} key={ind}/>)}
                        </div>
                    </div>
                </div>
                <div className="submit-button-container">
                    <Button className='submit-button'>Submit Booking</Button>
                </div>
            </form>
        </section>
    </main>
}
export default BookingPage