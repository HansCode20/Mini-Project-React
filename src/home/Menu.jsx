import React, { useEffect, useState } from 'react'
import grid1 from '../home/assets/MenuImage/Grid (1).jpg'
import grid2 from '../home/assets/MenuImage/Grid (2).jpg'
import burnChicken from '../home/assets/MenuImage/burn chicken.jpg'
import satay from '../home/assets/MenuImage/Satay.jpg'
import friedRice from '../home/assets/MenuImage/Fried Rice.jpg'
import grid3 from '../home/assets/MenuImage/Grid (3).jpg'
import UudangKari from '../home/assets/MenuImage/Udang kari.jpg'
import grillFish from '../home/assets/MenuImage/Grill Fish.jpg'
import grid4 from '../home/assets/MenuImage/Grid (4).jpg'
import ChocolateIce from '../home/assets/MenuImage/Chocolate Ice.jpg'
import KiwiJuice from '../home/assets/MenuImage/Kiwi Juice.jpg'


import AOS from 'aos'
import 'aos/dist/aos.css'
const Menu = () => {
  useEffect(()=>{
AOS.init()
  },[])
  return (
    <div class=" container">
    <h1 class="text-center" >Menu</h1>
    <h2 class="text-center" >Favorite</h2>
    <div className='w-full'>
    <div className="d-flex justify-content-start overflow-scroll" >
      <div class="row-2" data-aos="zoom-in">
          <img width={300} src={grid1} />
      </div>
      <div class="col-1" data-aos="zoom-in">
          <img width={200} src={burnChicken}/>
      </div>
      <div class="" data-aos="zoom-in">
          <img width={400} src={grid2} />
      </div>
      <div class="" data-aos="zoom-in">
          <img width={500} src={burnChicken} />
      </div>
      <div class="" data-aos="zoom-in">
          <img width={300} src={satay} />
      </div>
      <div class="" data-aos="zoom-in">
          <img width={200} src={friedRice} />
      </div>
      <div class="" data-aos="zoom-in">
          <img width={400} src={grid3} />
      </div>
      <div class="" data-aos="zoom-in">
          <img width={400} src={UudangKari} />
      </div>
      <div class="" data-aos="zoom-in">
          <img width={200} src={grillFish} />
      </div>
      <div class="" data-aos="zoom-in">
          <img width={300} src={grid4} />
      </div>
      <div class="" data-aos="zoom-in">
          <img width={400} src={ChocolateIce} />
      </div>
      <div class="" data-aos="zoom-in">
          <img width={200} src={KiwiJuice} />
      </div>
    </div>
    </div>
</div>

  )
}

export default Menu