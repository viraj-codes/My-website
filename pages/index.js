import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Slideshow from "@/components/slideshow";
import Slideshow1 from "@/components/slideshow1";
import LandingStyles from '@/styles/landing';

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


        {/* <div className="txtAnim">
                    <h1 className="maintxt">Welcome to my page...</h1>
                    <div >
                        <h1 className="subtxt">
                            <span>Think</span>
                            <div className="message">
                                <div className="word">Big</div>
                                <div className="word">fast</div>
                                <div className="word">ahead</div>
                            </div>
                        </h1>
                    </div>
                </div> */}
      </div>
      <div className="container-two">
        <Slideshow />
      </div>
      <div className="container-three">
        <div >
          <div className="section-heading">
            <h2 className="aboutTex">About us</h2>
            <div className="heading-line"></div>
          </div>
        </div>
      </div>
      <div className="footerBox">
        <Footer />
      </div>

      <div className="subfooterBox">
        <div className="footerTxt-one">
          Copyright © VJ Company. All rights reserved.
        </div>
        <div className="footerTxt-two">
          Designed by Viraj Joshi
        </div>
      </div>
      <style jsx>{LandingStyles}</style>
    </div>
  )
}
