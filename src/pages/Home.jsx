import Hero from '../components/Hero';
import Swiper from '../components/Swiper';
import ShopHome from '../components/ShopHome';
import ThreeCards from '../components/ThreeCards';
import Find from '../components/Find';


function Home() {
  return (
    <>
        <main>
        <Hero/>
        <Swiper/>
        <ShopHome/>
        <ThreeCards/>
        <Find/>
        </main>
    </>
  )
}

export default Home;