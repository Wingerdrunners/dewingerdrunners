import Footer from "/components/Footer";
import Head from "next/head";
import Link from "next/link";
import Layout from "/components/layout";
import Image from "next/image";
import { Navbar } from "/components/Navbar";
export default function programma() {
  return (
    <Layout>
      <Head>
        <title>Programma</title>
      </Head>
      <Navbar />
      <Image
        src="/images/bikkels.jpg"
        alt="programma"
        width={600}
        height={450}
      />
      <div className="p-0 bg-red-200 ">
        <table className="mx-auto ">
          <thead>
            <tr>
              <th>DATUM</th>
              <th>LOCATIE</th>
              <th>VERZORGING</th>
            </tr>
          </thead>  
                     
       <tbody className = "pt-12 font-mono text-2xl text-center text-red-800 border-4 border-red-600 cursor-pointer" >
        <tr className = "text-yellow-800 bg-transparent animate-bounce md:text-2xl " >   
                                
                           
                                <td>2022/05/01</td>
                                <td>Aardschoten</td>
                                <td>Lia</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/05/08</td>
                                <td>Loopark</td>
                                <td>Cita</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/05/15</td>
                                <td>Het Leesten</td>
                                <td>Jacques</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/05/22</td>
                           w     <td>Het Loopark</td>
                                <td>Jeroen</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/05/29</td>
                                <td>Wenum-Wiesel</td>
                                <td>Linda</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/06/05</td>
                                <td> Hoog-Soeren</td>
                                <td>Peter</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/06/12</td>
                                <td>Loenen</td>
                                <td>Henk</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/06/19</td>
                                <td>Orderbos</td>
                                <td>Cita</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/06/26</td>
                                <td>Echoput</td>
                                <td>Hans</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/07/03</td>
                                <td>Loopark</td>
                                <td>Esmeralda</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/07/10</td>
                                <td>Aardschoten</td>
                                <td>Ton</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/07/17</td>
                                <td>Wenum-Wiesel</td>
                                <td>Lia</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/07/24</td>
                                <td>Hoog-Soeren</td>
                                <td>Jacques</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/07/31</td>
                                <td>Loenen</td>
                                <td>Jeroen</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/08/07</td>
                                <td>Orderbos</td>
                                <td>Linda</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/08/14</td>
                                <td>Echoput</td>
                                <td>Peter</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/08/21</td>
                                <td>Loopark</td>
                                <td>Henk</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/08/28</td>
                                <td>Wenum-Wiesel</td>
                                <td>Cita</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/09/04</td>
                                <td>Het Leesten</td>
                                <td>Hans</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/09/11</td>
                                <td>Hoog Soeren</td>
                                <td>Esmeralda</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/09/18</td>
                                <td>Echoput</td>
                                <td>Ton</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/09/25</td>
                                <td>Aardschoten</td>
                                <td>Cees</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/10/02</td>
                                <td>Loenen</td>
                                <td>Lia</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/10/09</td>
                                <td>Het Leesten</td>
                                <td>Jacques</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/10/16</td>
                                <td>Echoput</td>
                                <td>Jeroen</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/10/23</td>
                                <td>Loopark</td>
                                <td>Linda</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/10/30</td>
                                <td>Het Leesten</td>
                                <td>Peter</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/11/06</td>
                                <td>Kootwijk</td>
                                <td>Henk</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/11/13</td>
                                <td>Orderbos</td>
                                <td>Cita</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/11/20</td>
                                <td>Loenen</td>
                                <td>Hans</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/11/27</td>
                                <td>Aardschoten</td>
                                <td>Esmeralda</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/12/04</td>
                                <td>Echoput</td>
                                <td>Ton</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/12/11</td>
                                <td>Loopark</td>
                                <td>Cees</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/12/18</td>
                                <td>Orderbos</td>
                                <td>Lia</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2022/12/26</td>
                                <td>Het Leesten</td>
                                <td>Jacques</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2023/01/08</td>
                                <td>Loenen</td>
                                <td>Jeroen</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2023/01/15</td>
                                <td>Het Loopark</td>
                                <td>Linda</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2023/01/22</td>
                                <td>Het Kootwijk</td>
                                <td>Peter</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2023/01/29</td>
                                <td>Het Leesten</td>
                                <td>Henk</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2023/02/05</td>
                                <td>Aardschoten</td>
                                <td>Cita</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2023/02/12</td>
                                <td>Loenen</td>
                                <td>Hans</td>
                            </tr>
                            <tr className="bg-transparent">
                                <td>2023/02/19</td>
                                <td>Orderbos</td>
                                <td>Esmeralda</td>
                                </tr>
                            <tr className="bg-transparent">
                                <td>2023/02/19</td>
                                <td>Aardschoten</td>
                                <td>Ton</td>
                            </tr>

        </tbody>


        
        </table>

        
       </div> 
        <Footer / >
        
        </Layout>
    );
}