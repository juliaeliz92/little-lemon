import { useReducer, useState } from 'react'
import { useNavigate } from 'react-router'
import { occasionOptions } from '../../constants'
import { PillInput, Button } from '../../components'
import { useBookingDateTime } from '../../hooks'
import formReducer from '../../reducer/formReducer'
import './styles.scss'

const BookingPage = () => {
    const [initializeDateTime, updateTime] = useBookingDateTime()
    const [bookingDate, setBookingDate] = useState(initializeDateTime()[0])
    const [numberGuests, setNumberGuests] = useState(1)
    const [bookingHours, setBookingHours] = useState(initializeDateTime()[1])
    const [bookingOccasion, setBookingOccasion] = useState('Birthday')
    const [bookingTime, setBookingTime] = useState(bookingHours[0])
    const [, dispatch] = useReducer(formReducer, [])
    const navigate = useNavigate()

    const handleBookingDate = (e) => {
        e.preventDefault()
        setBookingDate(e.target.value)
        setBookingHours(updateTime(e.target.value)[1])
    } 

    const handleOccasion = (e, occasion) => {
        e.preventDefault()
        setBookingOccasion(occasion)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            bookingDate,
            bookingTime,
            numberGuests,
            bookingOccasion
        }
        const result = submitAPI()
        if(result) {
            dispatch({type: 'SUBMIT', payload: formData})
            let currentData = []
            let formString = localStorage.getItem('formData')
            if(formString) {
                let formArray = JSON.parse(formString)
                currentData = [...formArray]
            }
            currentData.push(formData)
            localStorage.setItem("formData", JSON.stringify(currentData))
            navigate('/booking-confirmed')
        }
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
            <form onSubmit={handleSubmit} >
                <div className='row'>
                    <div className="column">
                        <label htmlFor='booking-date'>Date</label>
                        <input 
                            type='date' 
                            id="booking-date"
                            data-testid="booking-date"
                            min={initializeDateTime()[0]}
                            value={bookingDate} 
                            onChange={handleBookingDate} />
                    </div>
                    <div className="column">
                        <label htmlFor='booking-time'>Time</label>
                        <select 
                            id="booking-time" 
                            data-testid="booking-time"
                            value={bookingTime} 
                            onChange={(e) => setBookingTime(e.target.value)}>
                            {bookingHours.map((hour) => <option value={hour} key={hour}>{hour}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <label htmlFor='number-guests'>Number of Guests</label>
                        <div className='counter-container' id='number-guests'>
                            <div 
                                role='button'
                                data-testid="increment-guests"
                                aria-label='Increment Guest Numbers'
                                onClick={() => setNumberGuests(numberGuests => numberGuests + 1)}
                            >+</div> 
                            <span data-testid="number-guests" aria-label='number of guests'>{numberGuests}</span>
                            <div 
                                role='button'
                                data-testid="decrement-guests"
                                aria-label='Decrement Guest Numbers'
                                onClick={() => setNumberGuests(numberGuests => numberGuests - 1)}
                            >-</div> 
                        </div>
                    </div>
                    <div className="column">
                        <label htmlFor='occasion'>Occasion</label>
                        <div className='occasions-input-container' id="occasion" aria-label='Select booking occasion'>
                            {occasionOptions.map((occasion, ind) => <PillInput 
                                label={occasion} 
                                key={ind}
                                isActive={occasion === bookingOccasion}
                                onClick={(e) => handleOccasion(e, occasion)}/>)}
                        </div>
                    </div>
                </div>
                <div className="submit-button-container">
                    <Button 
                        className='submit-button'
                        aria-label='click to submit booking'
                        
                    >Submit Booking</Button>
                </div>
            </form>
        </section>
    </main>
}
export default BookingPage