import React from 'react'
import Carousel from '../../Components/SlickCarousel/Carousel'
import Header from '../../Components/Header/Header'

export default function Home() {
  return (
    <div id="home">
      <Header title="Loja de roupas" />
      <Carousel />
    </div>
  )
}
