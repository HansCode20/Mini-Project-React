import {  CarouselCaption, CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import BG from './assets/BG.jpg'
import BG2 from './assets/BG2.jpg'
import BG3 from './assets/BG3.jpg'
import BG4 from './assets/BG4.jpg'

const CourcelPage = () => {
  return (
    <Carousel style={{width:'100%',maxWidth:'100vw'}}  className=' w-100  carousel slide border border-black' >
      <CarouselItem>
        <img style={{width:'100svh',objectFit:'cover'}} src={BG} className='d-block w-100' text="First slide" />
        <CarouselCaption>
        <h5 >Sinar Bulan</h5>
              <p>Selamat datang di Sinar Bulan, tempat di mana keindahan malam dan cita rasa lezat bertemu! Di sini, kami mengundang Anda untuk merasakan pesona bulan yang memancarkan cahaya kehangatan. Setibanya Anda, sambutlah kelezatan tak terlupakan dari hidangan istimewa kami.</p>
              <p><a href="">Learn More</a></p>
          
 </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={BG2} className='object-fit-cover d-block w-100' style={{width:'100vw',maxWidth:'100vw'}} text="First slide" />
        <CarouselCaption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={BG3} className='d-block w-100' text="First slide" />
        <CarouselCaption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={BG4} style={{width:'100svh'}} className='d-block w-100' text="First slide" />
        <CarouselCaption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  );
}

export default CourcelPage