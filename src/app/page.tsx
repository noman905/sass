import  Header  from "@/Components/Header"
import Hero from "@/Components/hero"
import LogoImage from "@/Components/logoimage"
import Productshow from "@/Components/Productshow"
import Price from "@/Components/pricesection"
import Testimonials from "@/Components/testimonials"
import Calltoaction from "@/Components/calltoaction"
import Last from "@/Components/footer"

export default function Homepage(){


return(
<>
  <Header />
  <main>
  <Hero />
  <LogoImage />
  <Productshow />
  <Price />
  </main>
  <Testimonials />
  <Calltoaction />
  <Last />

   </>
)



}