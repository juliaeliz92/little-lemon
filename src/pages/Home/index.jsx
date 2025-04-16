import { Button, SpecialsPanel, TestimonialPanel } from '../../components'
import { specials, testimonials } from '../../constants'
import './styles.scss'

const Home = () => {
    return <div>
        <section className="reserve-table-section">
            <img src="chicago-food.jpg" alt="chicago" />
            <div className='text-section'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <Button>Reserve a table</Button>
            </div>
        </section>
        <section className='special-section'>
            <div className='special-header'>
                <h2>Specials</h2>
                <Button>Online Menu</Button>
            </div>
            <section className='specials-row'>
                {specials.map(special => <SpecialsPanel special={special} />)}
            </section>
        </section>
        <section className='testimonial-section'>
            <h1>Testimonials</h1>
            <section className='testimonials-row'>
                {testimonials.map(testimonial => 
                    <TestimonialPanel testimonial={testimonial} />
                )}
            </section>
        </section>
        <section className='about-us-section'>
            <div className='description'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className='gallery-container'>
                <div className='gallery'>
                    <img src='restaurant.jpg' className='img1' alt='kitchen' />
                    <img src='kitchen.jpg' className='img2' alt='restaurant' />
                </div>
            </div>
        </section>
    </div>
}

export default Home