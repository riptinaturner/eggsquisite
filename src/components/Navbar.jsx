import logo from "../assets/logo.png"
import bag from "../assets/shopping_bag.png"

import { useLocation } from "react-router-dom"

import useScroll from "../hooks/useScroll"

export default function Navbar() {
    const scroll = useScroll()
    const { pathname } = useLocation()

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "sticky",
                top: 0,
                left: 0,
                width: "100%",
                padding: "1rem 4rem",
                transition: ".3s",
                background: "white",
                zIndex: 999,
                boxShadow: scroll ? "0 .5rem 1rem rgba(0, 0, 0, .1)" : "",
                borderBottom: scroll || pathname === "/" ? "" : "1px solid black"
            }}
        >
            <a
                href="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".3em"
                }}
            >
                <img
                    src={logo}
                    alt="Eggsquisite Logo"
                    style={{ height: "2.1rem" }}
                />
                <span style={{
                    fontSize: "1.2rem",
                    fontWeight: 600
                }}>Eggsquisite</span>
            </a>

            <div className="navbarLinks" style={{
                display: "flex",
                alignItems: "center",
                gap: "1.7em",
                fontWeight: 600,
                fontSize: "1.1rem",
                marginInline: "auto"
            }}>
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/about">Our Story</a>
            </div>

            <a
                href="/cart"
                style={{ fontSize: "2rem" }}
            >
                <img
                    src={bag}
                    alt="Shopping Bag"
                    style={{ height: "1.8rem" }}
                />
            </a>
        </div>
    )
}