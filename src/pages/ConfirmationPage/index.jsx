import './styles.scss'

const ConfirmationPage = () => {
    const formArray = JSON.parse(localStorage.getItem('formData'))
    const formData = formArray.pop()
    return <section className="confirmation-section">
        <h1>Congratulations!</h1>
        <h2>Your table reservation is confirmed!</h2>
        <div className="booking-details">
            <h3>Here are your booking details:</h3>
            <ul>
                <li>Booking Date:{formData.bookingDate}</li>
                <li>Booking Time:{formData.bookingTime}</li>
                <li>Number of Guests:{formData.numberGuests}</li>
                <li>Occasion:{formData.bookingOccasion}</li>
            </ul>
        </div>
        <h3></h3>

    </section>
}

export default ConfirmationPage