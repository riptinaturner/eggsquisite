import Page from "./Page"
import ProductPreview from "./ProductPreview"

import prod1 from "../assets/shirt1.jpg"
import prod2 from "../assets/shirt2.jpg"
import prod3 from "../assets/shirt3.jpg"
import prod4 from "../assets/shirt4.jpg"
import prod5 from "../assets/shirt5.jpg"
import prod6 from "../assets/shirt6.jpg"
import prod7 from "../assets/shirt7.jpg"
import prod8 from "../assets/shirt8.jpg"
import prod9 from "../assets/shirt9.jpg"
import prod10 from "../assets/shirt10.jpg"

export default function Products({ style }) {
    return (
        <Page style={style}>
            <h1>Our Tees</h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                gap: "1em",
                marginTop: "2em",

            }}>
                <ProductPreview
                    title="Good Egg"
                    img={prod1}
                    id="good-egg"
                />
                <ProductPreview
                    title="Cute Fried Egg"
                    img={prod2}
                    id="cute-fried-egg"
                />
                <ProductPreview
                    title="Crecced Egg"
                    img={prod3}
                    id="crecced-egg"
                />
                <ProductPreview
                    title="Chillin Fried Egg"
                    img={prod4}
                    id="chillin-fried-egg"
                />
                <ProductPreview
                    title="Egg"
                    img={prod5}
                    id="egg"
                />
                <ProductPreview
                    title="Fried Egg"
                    img={prod6}
                    id="fried-egg"
                />
                <ProductPreview
                    title="Oh?"
                    img={prod7}
                    id="oh"
                />
                <ProductPreview
                    title="Egg Stack"
                    img={prod8}
                    id="egg-stack"
                />
                <ProductPreview
                    title="Glitz and Glamour"
                    img={prod9}
                    id="glitz-and-glamour"
                />
                <ProductPreview
                    title="Moon Egg"
                    img={prod10}
                    id="moon-egg"
                />
            </div>
        </Page>
    )
}