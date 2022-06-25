import Footer from "/components/Footer";
import Head from "next/head";
import Link from "next/link";
import Layout from "/components/layout";
import Image from "next/image";
import { Navbar } from "/components/Navbar";
export default function laatstenieuws() {
  return (
    <Layout>
      <Head>
        <title>Laatste Nieuws</title>
      </Head>
      <Navbar />
      <Image
        src="/images/zomertijd.jpg"
        alt="loopark"
        width={600}
        height={400}
      />
      <div className="bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300">
        <div
          className="pt-1 text-blue-700 border-4 border-blue-700 bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 rounded-xl"
          role="alert"
        >
          <h5 className="font-serif font-thin text-center text-yellow-600 bg-yellow-200 rounded-sm title-font md:text-4xl">
          Laatste Nieuws
        </h5>
             </div>
      </div>
      <div className="bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300">
      <div className="bg-red-200">
        <div
          className="order-4 p-1 text-center text-yellow-600 border-yellow-600 md:text-2xl px-auto ">
         <Image
        src="/images/loopark3op6maart2022.jpg"
        alt="ijshaar"
        width={600}
        height={488}
      />
          <h1 className="text-4xl te:xt-center md:text-6xl ">19 juni 2022 </h1><br />
            <p className="">ik poep zelf Lekker fris in Hoog Soeren.</p>
             <p> Het begin van de lente      
            <p>De zomertijd werd voor het eerst ingevoerd in Nederland van 1916 tot 1945. </p>
            <p>In 1977, vanwege de oliecrisis, vond de herintroductie plaats. </p>
            <p>Want, zo dacht men, het is energiebesparend als het ’s avonds langer licht blijft. </p>
            <p>“En de meeste mensen vinden het vaak prettig om een uurtje langer licht te hebben,” vertelt Marijke Gordijn.</p>
<p><a href="https://www.nemokennislink.nl/publicaties/biologische-klok-van-slag-door-zomertijd/">Lees meer...</a></p>     

      </div>
    
      </div>
      </div>
    
      
              <Footer />
          </Layout>
  );
}
