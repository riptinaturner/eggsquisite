import { useState, useEffect } from "react"

export default function useScroll() {
    const [scroll, setScroll] = useState(window.scrollY)

    useEffect(() => {
        window.addEventListener("scroll", () => setScroll(window.scrollY))
        return () => {
            window.removeEventListener("scroll", () => setScroll(window.scrollY))
        }
    })

    return scroll
}