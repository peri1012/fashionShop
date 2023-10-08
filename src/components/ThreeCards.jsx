import InfoCard from "./InfoCard";
function ThreeCards() {
  return (
    <section className="three-cards">
        <div className="container">
            <div className="row">
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>
            </div>
        </div>
    </section>
  )
}

export default ThreeCards