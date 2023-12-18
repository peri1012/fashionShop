import InfoCard from "./InfoCard";
import Gift from '../assets/images/gift.webp';
import About from '../assets/images/heart.avif';
import Facebook from '../assets/images/facebook.avif';
function ThreeCards() {
  return (
    <section className="three-cards">
        <div className="container">
            <div className="row">
                <InfoCard
                  imageSrc={Gift}
                  heading="Gift cards now available"
                  detail="Looking to give the perfect gift? Our gift cards can be spent online or in store. Available in £10, £25, £50, and £100. Why not send somebody special an email gift and let them choose from our fabulous range!"
                  linkTo="shop here"
                  linkPage="/err"
                />
                <InfoCard
                  imageSrc={About}
                  heading="About us"
                  detail="For over 40 years Mandy and Bev have been bringing affordable fashion to women with their focus on excellent service always at the forefront."
                  linkTo="Read more"
                  linkPage="/err"
                />
                <InfoCard
                  imageSrc={Facebook}
                  heading="Find us on Facebook"
                  detail="Follow us on Facebook and join our fashion shop family. We go live every weekday at 12:30pm! Stay connected with us as we show our most recent collections, have a giggle and a chat, and meet others with a passion for fashion."
                  linkTo="Find us here"
                  linkPage="https://www.facebook.com/thefashionshopwarsop/"
                />
            </div>
        </div>
    </section>
  )
}

export default ThreeCards