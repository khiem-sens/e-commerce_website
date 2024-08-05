import React from 'react'
import Hero from './Hero'
import { BannerDataType, ProductType } from '@/lib/interface'
import Featured from './Featured'

interface LandingPageProps {
  bannerData: BannerDataType
  featuredProducts: ProductType[]
}

const LandingPage: React.FC<LandingPageProps> = ({bannerData, featuredProducts}) => {
  return (
    <section className='flex flex-col w-full'>
        <Hero bannerData={bannerData}/>
        <Featured featuredProducts= {featuredProducts}/>
    </section>
  )
}

export default LandingPage