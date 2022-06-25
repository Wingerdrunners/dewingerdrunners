import Footer from '/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'
import Image from 'next/image'
import { Navbar } from '/components/Navbar';

export default function regen() {
  return (
    <Layout>
      <Head>
        <title>REGEN</title>
      </Head>
      <Navbar />
      <Image src="/images/regen.jpg" alt="regen" width={650} height={434} />
      <div className="mt-0 bg-red-200 p-">
      <h5 className="font-serif font-thin text-center text-yellow-600 bg-yellow-200 rounded-sm title-font md:text-4xl">
          REGEN, REGEN, REGEN
        </h5>
        <div className="bg-red-200">
           
        <div className="text-center first-letter:text-red-600 first-letter:font-bold first-letter:text-7xl md:text-2xl">
                <p>Regen, regen, regen, regen</p>
									<p>Lopend de druppels van je bril vegen.</p>
									<p>Want zicht geeft een verademende blijdschap</p>
									<p>Op paden met modder, wortels, water en rottend blad.</p>
									<p>Met schoenen doorweekt en minder toonbaar</p>
									<p>naast voeten nat en hopelijk zonder blaar.</p>
									<p>Een tempo gedrukt door hoogte verschillen</p>
									<p>frustreert het kunnen en het willen.</p>
									<p>Echter begonnen aan een route rood</p>
									<p>voor de marathonloper een kleinood.</p>
									<p>Een afstand gemeten in 7 kilometer</p>
									<p>op weg naar beter, steeds beter.</p>
									<p>Regen, regen, regen, regen</p>
									<p>Lopend de druppels van je bril vegen.</p>
									<h2 className="mb-1 text-xs font-medium tracking-widest text-center title-font text-white-500">
                                16 november 2014 Ton de Haan.
                            </h2>


    </div>
      </div> </div>  
                            <Footer/>

    </Layout>
      )
}