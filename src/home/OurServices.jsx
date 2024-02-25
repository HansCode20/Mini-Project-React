import React from 'react'
import { Container } from 'react-bootstrap'

const OurServices = () => {
  return (
    <Container>
     <div class="container" id="DO">
          <h1 >Our Service</h1>
          <div class="row">
     
            <div data-aos="zoom-in" class="col-md-4">
              <div class="card">
                <div class="circle">
                  <i class="bi bi-truck"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Delivery Order</h5>
                  <p class="card-text">Layanan antar gratis setiap pembelian menu makanan kami. Area layanan hingga 3 KM</p>
                </div>
              </div>
            </div>
      
         
            <div data-aos="zoom-in" data-aos-delay="100" class="col-md-4">
              <div class="card">
                <div class="circle">
                  <i class="bi bi-cart"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Ala Carte</h5>
                  <p class="card-text">Menikmati hidangan kami langsung di rumah/kantor Anda. Minimal order Rp200,000.-</p>
                </div>
              </div>
            </div>
      
  
            <div data-aos="zoom-in" data-aos-delay="300" class="col-md-4">
              <div class="card">
                <div class="circle">
                  <i class="bi bi-cup-straw"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Prasmanan</h5>
                  <p class="card-text">Untuk setiap acara spesial Anda. Informasi dapat langsung hubungi Tempat kami.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
   </Container>
  )
}

export default OurServices