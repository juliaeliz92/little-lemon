import './styles.scss'

const TestimonialPanel = ({testimonial}) => {
    const { name, review, rating } = testimonial
    return <article className="testimonial-panel">
        <span className='rating'>{rating} / 5</span>
        <div className='customer-profile'>
            <img src="john.jpg" alt="avatar" />
            <h3>{name}</h3>
        </div>
        <p>{review}</p>
    </article>
}

export default TestimonialPanel