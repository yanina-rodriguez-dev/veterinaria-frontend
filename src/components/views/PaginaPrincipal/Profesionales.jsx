import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Profesionales = () => {
    return (
        <Container>
            
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagen"
                    src="https://images.pexels.com/photos/6235664/pexels-photo-6235664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Dr. Messi Lionel</h5>
                    <p>Cirugía General</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagen"
                    src="https://images.pexels.com/photos/6234616/pexels-photo-6234616.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Dr. Suarez Luis</h5>
                    <p>Veterinario</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagen"
                    src="https://images.pexels.com/photos/7469497/pexels-photo-7469497.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Dr. Morales Ramiro</h5>
                    <p>
                        Auxiliar Veterinario
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagen"
                    src="https://plus.unsplash.com/premium_photo-1677165479422-bc6eb405bd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHZldGVyaW5hcmlvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Dr. Rodriguez Juan</h5>
                    <p>
                        Veterinario
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imagen"
                    src="https://plus.unsplash.com/premium_photo-1677165799082-10ac701cd940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmV0ZXJpbmFyaW9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Dra. Sosa Susana</h5>
                    <p>
                        Veterinaria
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </Container>
    );
};

export default Profesionales;