import React from 'react'
import Header from 'shared/components/common/header'
import './styles.css'
import MainBanner from 'shared/components/common/sliders/mainBanner'

function Home() {
  return (
    <>
    <div>
      <nav>
        <Header/>
      </nav>
      <section>
        <MainBanner/>
      </section>
      {/* <section className='FirstSec'>
        <div className='text-white text-center max-w-3xl p-4'>
          <h1 className='text-6xl'>Diversifying 
the DeFi Ecosystem </h1>
<small className='text-slate-400'>By introducing of cross-chain interoperability in everything Hyper for Defi 2.0  Defragmented</small>
        </div>
      </section> */}
    </div>
    </>
  )
}

export default Home
