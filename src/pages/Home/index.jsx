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
    </div>
}

export default Home