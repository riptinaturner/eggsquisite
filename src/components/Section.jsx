export default function Section({ src, heading, text }) {
    return (
        <div className="section" style={{
            display: "flex",
            gap: "3em"
        }}>
            <div className="sectionText" style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                width: "60%"
            }}>
                <div style={{
                    fontWeight: 600,
                    fontSize: "1.4rem"
                }}>{heading}</div>
                <div style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.7rem",
                    color: "rgb(40, 40, 40)"
                }}>{text}</div>
            </div>

            <div className="sectionContainer" style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center"
            }}>
                <img
                    src={src}
                    alt={heading}
                    style={{ maxWidth: "16rem" }}
                />
            </div>
        </div>
    )
}