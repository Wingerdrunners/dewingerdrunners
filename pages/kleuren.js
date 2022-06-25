import Footer from '/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'
import Image from 'next/image'
import { Navbar } from '/components/Navbar';

export default function kleuren() {
  return (
    <Layout>
      <Head>
        <title>2022</title>
      </Head>
      <Navbar />
      <Image src="/images/oudjr2021.jpg" alt="oudjaar2021" width={650} height={434} />
      <div className="p-2 mt-0 bg-red-200">
        <h5 className="font-serif font-thin text-center text-red-800 bg-yellow-200 rounded-sm title-font md:text-4xl">
          2022
        </h5>
        <p className="mb-3 leading-relaxed text-red-600">
        <h6 className="p-2 first-letter:text-white first-letter:font-bold first-letter:text-7xl md:text-2xl">


<p>Een jaar in het verschiet</p>
<p>Na een jaar welke je achterliet.</p>
<p>Waarin mag de volgende verschillen</p>
<p>Wat zouden we graag anders willen.</p>
<p>Bepalend zijn zaken van uiteenlopende aard</p>
<p>Het een is minder, het ander is meer waard.</p>


<p>Echter bovenal ben je het zelf die kleurt</p>
<p>Wat er wel en wat er niet gebeurd.</p>
<p>Het roept, misschien te simpel</p>
<p>Te veel zoeken levert teveel rimpel.</p>
<p>Een ander mag niet bepalen wat te doen</p>
<p>Kies wat past in je eigen schoen.</p>
<p>Wanneer dat aangenaam loopt</p>
<p>Dan ben je daar waar je nu op hoopt.</p>
</h6></p></div>



<h2 className="mb-1 text-xs font-medium tracking-widest text-center title-font text-white-500">
    Suerte Ton.</h2>

      <Footer />
    </Layout>
     
    
  );
}
