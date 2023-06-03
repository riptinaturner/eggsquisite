import shirt1 from "../assets/shirt1.jpg"
import shirt2 from "../assets/shirt2.jpg"
import shirt3 from "../assets/shirt3.jpg"
import shirt4 from "../assets/shirt4.jpg"
import shirt5 from "../assets/shirt5.jpg"
import shirt6 from "../assets/shirt6.jpg"
import shirt7 from "../assets/shirt7.jpg"
import shirt8 from "../assets/shirt8.jpg"
import shirt9 from "../assets/shirt9.jpg"
import shirt10 from "../assets/shirt10.jpg"

import { useLocation, useParams } from "react-router-dom"

import Page from "./Page"
import Products from "./Products"

export default function ProductDetails() {
    const { pathname } = useLocation()
    const { id } = useParams()

    return (
        <Page>
            <div style={{
                display: "flex",
                gap: "3em"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "20rem"
                }}>
                    <img
                        src={pathname === "/products/good-egg" ?
                            shirt1 : pathname === "/products/cute-fried-egg" ?
                                shirt2 : pathname === "/products/crecced-egg" ?
                                    shirt3 : pathname === "/products/chillin-fried-egg" ?
                                        shirt4 : pathname === "/products/egg" ?
                                            shirt5 : pathname === "/products/fried-egg" ?
                                                shirt6 : pathname === "/products/oh" ?
                                                    shirt7 : pathname === "/products/egg-stack" ?
                                                        shirt8 : pathname === "/products/glitz-and-glamour" ?
                                                            shirt9 : shirt10}
                        alt="Good Egg"
                    />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "3em"
                }}>
                    <div style={{
                        fontSize: "1.5rem",
                        fontWeight: 700
                    }}>
                        {pathname === "/products/good-egg" ?
                            "Good Egg" : pathname === "/products/cute-fried-egg" ?
                                "Cute Fried Egg" : pathname === "/products/crecced-egg" ?
                                    "Crecced Egg" : pathname === "/products/chillin-fried-egg" ?
                                        "Chillin Fried Egg" : pathname === "/products/egg" ?
                                            "Egg" : pathname === "/products/fried-egg" ?
                                                "Fried Egg" : pathname === "/products/oh" ?
                                                    "Oh?" : pathname === "/products/egg-stack" ?
                                                        "Egg Stack" : pathname === "/products/glitz-and-glamour" ?
                                                            "Glitz and Glamour" : "Moon Egg"}
                    </div>
                    <div style={{
                        marginTop: ".4em",
                        fontSize: "1.2rem",
                        fontWeight: 600
                    }}>
                        Price: $35
                    </div>
                    <div style={{
                        marginTop: "1.5em",
                        display: "flex",
                        gap: "1em"
                    }}>
                        {/* <button style={{
                            border: "1px solid gray",
                            background: "white",
                            fontSize: "1.1rem",
                            borderRadius: ".3em",
                            paddingInline: "1.2em"
                        }}>
                            Add to cart
                        </button> */}
                        <a
                            href={"/api/payment/" + id}
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: 600,
                                background: "black",
                                color: "white",
                                borderRadius: ".3em",
                                padding: ".5em 1.2em"
                            }}
                        >
                            Buy now!
                        </a>
                    </div>
                </div>
            </div>

            <Products style={{
                marginTop: "4em",
                padding: 0
            }} />
        </Page>
    )
}