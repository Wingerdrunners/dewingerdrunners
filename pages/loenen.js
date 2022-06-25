import Footer from '/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'
import Image from 'next/image'
import { Navbar } from '/components/Navbar';

export default function loenen() {
  return (
    <Layout>
      <Head>
        <title>Waterval</title>
      </Head>
      <Navbar />
      <Image src="/images/watervalLoenen.jpg" alt="waterval" width={650} height={434} />
      <div className="p-2 mt-0 bg-red-200">
        <h5 className="font-serif font-thin text-center text-red-800 bg-yellow-200 rounded-sm title-font md:text-4xl">
Loenense Waterval        </h5>
        <p className="mb-3 leading-relaxed text-red-600">
          <h6 className="first-letter:text-white first-letter:font-bold first-letter:text-7xl md:text-2xl">												
          <p>De hoogste waterval van Nederland</p>
                            <p>Je staat frappant in dit lage land</p>
                            <p>Een sprengbeek met 15 meter verval</p>
                            <p>Vanuit de heuvels naar het dal</p><br />

                            <p>Veel mensen gaan er wandelen</p>
                            <p>Sprengbeken, door seizoenen heen, te zien veranderen</p>
                            <p>Zijsprengen wandelend bekeken</p>
                            <p>En hoogteverschillen vergeleken</p><br />

                            <p>De Loenense waterval trekt veel bekijks</p>
                            <p>De omgeving is er bosrijk</p>
                            <p>Zo kun je er regelmatig wild speuren</p>
                            <p>Ook de dieren zullen het water keuren</p></h6>
                           <br/></p>                          
                              <h2   className="mb-1 text-xs font-medium tracking-widest text-center text-red-500 title-font">
                                Roel van Ekeris
                                        </h2></div> 
      <Footer/>

    </Layout>
      )
}