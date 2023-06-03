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

import { useEffect, useState } from "react"

import Page from "./Page"

export default function Hero() {
    const [curr, setCurr] = useState(0)

    const prodArr = [
        prod1,
        prod2,
        prod3,
        prod4,
        prod5,
        prod6,
        prod7,
        prod8,
        prod9,
        prod10
    ]

    const next = () => {
        setCurr(prev => {
            if (prev === prodArr.length - 1) {
                return 0
            }

            return prev + 1
        })
    }

    useEffect(() => {
        const interval = setInterval(next, 500)

        return () => clearInterval(interval)
    }, [])

    return (
        <Page style={{
            padding: "6em 10em",
            background: "linear-gradient(to bottom right, rgb(240, 240, 240), rgb(220, 255, 150))"
        }}>
            <div
                className="hero"
                style={{
                    display: "flex",
                    gap: "6em"
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{
                        fontSize: "1.8rem",
                        fontWeight: 700
                    }}>Egg Day is Here!</div>
                    <div style={{
                        fontSize: "1.05rem",
                        marginTop: "1em",
                        lineHeight: "1.8rem",
                    }}>
                        Welcome to Eggsquisite, the best place to celebrate the best day of the year, Egg Day!
                        Whether you love scrambled, boiled, fried or poached eggs, we have the perfect shirt for you. Celebrate the most eggciting day of the year with our fun and colorful designs. Hurry and order now before they sell out!
                    </div>
                    <a
                        className="heroExploreBtn"
                        href="/products"
                        style={{
                            marginTop: "2.5em",
                            color: "white",
                            width: "max-content",
                            padding: ".55em 1.8em",
                            borderRadius: ".2em",
                            fontSize: "1.05rem",
                            fontWeight: 600
                        }}
                    >Explore</a>
                </div>
                <div style={{
                    height: "15rem",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <img
                        src={prodArr[curr]}
                        alt={"Tee Shirt No. " + curr}
                        style={{ height: "100%" }}
                    />
                </div>
            </div>
        </Page>
    )
}