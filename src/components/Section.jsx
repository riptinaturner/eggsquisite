export default function Section({ src, heading, text }) {
    return (
        <div style={{
            display: "flex",
            gap: "3em"
        }}>
            <div style={{
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

            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                flex: 1
            }}>
                <img
                    src={src}
                    alt={heading}
                    style={{ width: "16rem" }}
                />
            </div>
        </div>
    )
}