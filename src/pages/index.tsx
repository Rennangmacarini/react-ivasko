import { Banner } from "../components/Banner"
import { ContentOne } from "../components/ContentOne"
import { ContentTwo } from "../components/ContentTwo"
import { Header } from "../components/Header"


export default function Home(){
  return(
    <> 
    <Header/>
    <Banner />
    <ContentOne />
    <ContentTwo/>
    </>
  )
}