import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Expertise from '../components/Expertise'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Team from '../components/Team'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);
  return (
    <div >
      <Head>
        <title>MAGNUS TECHS</title>
        <meta name="description" content=" Magnus est une boite de développement informatique , composée d'une équipe jeune
            et dynamique qui s'adapte facilement à vos besoins, personnalise vos solutions et vous 
            accompagne tout au long de votre projet . Magnus est le partenaire idéal de vos idées , qui
             saura être à votre écoute , répondre à vos objectifs attendus et proposer les meilleures solutions 
             professionnelles façonnées à vos mesures. " />
             <meta name="google-site-verification" content="HjrgPIaLe6-BuZ0L3GSz08pR4M5tM_r1lOqjNg0r9T0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[#f6f6f6] font-bold w-full" >
      <div className="fixed top-0 w-full block bg-[#f6f6f6] z-50">
          <Logo/>
          <Header/>
      </div>
      <div className="relative mt-[calc(30vh)] z-30">
      <About/>
      
      <Expertise/>
     
      <Team/>
    
      <Contact/>
      <Footer/>
      </div>
      
        
     </div>
    </div>
  )
}
