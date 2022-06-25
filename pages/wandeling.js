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
        <title>WANDELING</title>
      </Head>
      <Navbar />
      <Image src="/images/zomertijd.jpg" alt="uitzicht" width={600} height={380} />
      <div className="mt-0 bg-red-200 p-">
      <h5 className="font-serif font-thin text-center text-yellow-600 bg-yellow-200 rounded-sm title-font md:text-4xl">
      Wandeling door verboden gebied
        </h5>
        <div className="bg-red-200">
           
        <div className="text-center first-letter:text-red-600 first-letter:font-bold first-letter:text-7xl md:text-2xl">
       <p>De schemering der verten beving mij</p>
<p>en ik ging langs de Asselse heide</p>
<p>ik zag de liksteen bij de voederwei</p>
<p>het grofwild echter scheen die plek te mijden</p><br />
 
<p>Een kudde moeflons stond op ‘t verre veld</p>
<p>waarbij ik veertien rammen telde</p>
<p>ik hield de verrekijker ingesteld</p>
<p>om toe te zien dat ik mij niet vertelde</p><br />
 
<p>Een edelhert laveide bij het ven</p>
<p>het was de twaalfender die ik kende</p>
<p>een glimpje zon gleed langs de grove den</p>
<p>waarnaast ik nog een everzwijn verkende</p><br />
 
<p>Ik liep de heirand over naar Hoog Soeren</p>
<p>en terug via de Asselse boer</p>
<p>daar bleek een boswachter aan ‘t reeën voeren</p>
<p>hem te ontlopen was een hele toer</p><br />
									<h2 className="mb-1 text-xs font-medium tracking-widest text-center title-font text-white-500">
                                Kees Winkler vanoorschot.nl Vier Gedichten
                            </h2>


    </div>
      </div> </div>  
                            <Footer/>

    </Layout>
      )
}