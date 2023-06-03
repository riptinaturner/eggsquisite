import Page from "./Page"
import logo from "../assets/logo.png"

export default function OurStory() {
    return (
        <Page>
            <h1>Our Story</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "2em"
            }}>
                <div style={{
                    marginTop: "1em",
                    fontSize: "1.1rem",
                    fontWeight: 600
                }}>
                    egg
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        src={logo}
                        alt="Egg."
                        style={{ height: "6rem" }}
                    />
                </div>
            </div>
        </Page>
    )
}