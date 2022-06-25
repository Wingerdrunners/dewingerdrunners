import Footer from '/components/Footer';
import { Navbar } from '/components/Navbar';
import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
export default function slider() {
  return (
    
                  <Layout>
                  <Head>
                    <title>Wingerdrunners</title>
                  </Head>
                  <Navbar />
                  <div className="container mx-auto bg-blue-40 ">
    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
    >
      <SplideSlide>
        <img src="/images/image1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
              <img  src="/images/image2.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/image3.jpg" alt="Image 3"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/image4.jpg" alt="Image 4"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/image5.jpg" alt="Image 5"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/image6.jpg" alt="Image 6"/>
      </SplideSlide>

      <SplideSlide>
        <img src="/images/image7.jpg" alt="Image 7"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/image8.jpg" alt="Image 8"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/image9.jpg" alt="Image 9"/>
      </SplideSlide>


    </Splide>
    <Footer/>   
    </div>
  </Layout>
  );
    }