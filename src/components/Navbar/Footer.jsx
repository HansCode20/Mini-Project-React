import React from 'react'

const Footer = () => {
  return (
<>
<footer>
  <div class="container-fluid bg-black text-white" >
    <div class="container" >
        <div class="row" id="row-Footer">
            <div class="col-md-6 col-lg-3" >
                  <h2 >Sinar Bulan</h2>
                  <p>Sinar Bulan adalah tempat yang tenteram dan indah, terinspirasi dari pancaran sinar bulan yang mempesona. Kami berusaha menciptakan suasana di mana Anda dapat bersantai, menikmati, dan menciptakan kenangan abadi.</p>
                  <div class="iconn">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-whatsapp"></i></a>
                  </div>
            </div>
            <div class="col-md-6 col-lg-3" >
                    <h2>Open-Close</h2>
                    <div class="Open-Clos">
                      <div class="Hari">
                        <p>Senin  09.00-21.00</p>
                        <p>Selasa 09.00-21.00</p>
                        <p>Rabu 09.00-21.00</p>
                        <p>Kamis 09.00-21.00</p>
                        <p>Jumat 09.00-21.00</p>
                        <p>Sabtu 09.00-21.00</p>
                      </div>
                    </div>
            </div>
            <div class="col-md-6 col-lg-3" >
                <h2 >Details</h2>
                <div class="Text">
                  <a href=""><p>Menu</p></a>
                  <a href=""><p>Ala Carte</p></a>
                  <a href=""><p>Delivery Order</p></a>
                </div>
            </div>
            <div class="col-md-6 col-lg-3" >
                <h2 >Newsletter</h2>
                <p>Dapatkan informasi dan promo terbaru dari kami.</p>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"></label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email Address"/>
                  <button class="subscribe-button">Subscribe</button>
                </div>
            </div>
        </div>
        <div class="text-center" id="Footer" >©Copyright 2024 Powered By <span>ILHAM</span><br/>Thanks For Unsplash & Freepik
        </div>
    </div>
  </div>
  </footer>
</>
  )
}

export default Footer