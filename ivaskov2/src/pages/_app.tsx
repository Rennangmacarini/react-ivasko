import { AppProps } from "next/app" 
import { Banner } from "../components/Banner"
import { ContentOne } from "../components/ConteudoOne"
import { ContentTwo } from "../components/ConteudoTwo"
import { Header } from "../components/Header"

import '../styles/global.scss'

function MyApp({ Component, pageProps}: AppProps){
  return (

    <> 
    <Component {...pageProps} />

    <Header/>
    <Banner />
    <ContentOne />
    <ContentTwo/>
    </>

  ) 
}

export default MyApp