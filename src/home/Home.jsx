import React from 'react'
import CourcelPage from './CarouselPage'
import { Container } from 'react-bootstrap'
import OurServices from './OurServices'
import Menu from './Menu'

const Home = () => {
  return (
    <div>
        <Container style={{width:'100%' ,maxWidth:'100vw'}} >
            <Container style={{width:'100%' ,maxWidth:'100vw'}}>
        <CourcelPage/>
            </Container>
        <OurServices/>
        </Container>
        <Menu/>
    </div>

  )
}

export default Home