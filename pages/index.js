import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Slideshow from "@/components/slideshow";
import Slideshow1 from "@/components/slideshow1";
import LandingStyles from '@/styles/landing';
import About from '../components/about';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Navbar />
      <div className="container">
        <Slideshow1 />
        <div className="centeredTxt">
          <div className="centeredTxt-first">
            GIVIN THE WORLD
          </div>
          <div className="centeredTxt-line"></div>
          <div className="centeredTxt-two">
            A DESIGN
          </div>
        </div>
      </div>
      <div className="container-two">
        <Slideshow />
      </div>
      <div className='outer-wrapper bgm1'></div>
      <div className="container-three" id='About'>
        <div >
          <div className="section-heading">
            <h2 className="aboutTex">About Me</h2>
            <div className="heading-line"></div>
            <div>
              <About />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fore">
        <div id='Contact'>
          <div className="section-heading">
            <h2 className="aboutTex">Get In Touch</h2>
          </div>
          <Footer />
        </div>
      </div>

      <div className="container-fifth">
        <div>
          <div className="footerTxt-one">
            Copyright © VJ Company. All rights reserved.
          </div>
          <div className="footerTxt-two">
            Designed by Viraj Joshi
          </div>
        </div>
      </div>
      <style jsx>{LandingStyles}</style>
    </div>
  )
}
