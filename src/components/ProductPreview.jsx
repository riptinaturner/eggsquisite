export default function ProductPreview({ title, img, price, id }) {
    return (
        <a
            className="productPreview"
            href={`/products/${id}`}
            style={{
                background: "rgb(250, 250, 250)",
                borderRadius: ".8rem",
                transition: ".3s",
                border: "1px solid rgb(230, 230, 230)"
            }}
        >
            <img
                src={img}
                alt={title}
                style={{
                    borderRadius: ".8rem .8rem 0 0",
                    background: "rgb(240, 240, 240)",
                    width: "100%",
                    objectFit: "cover",
                    aspectRatio: "5 / 4"
                }}
            />
            <div style={{
                padding: ".7em"
            }}>
                <div style={{
                    fontSize: "1.2rem",
                    fontWeight: 600
                }}>{title}</div>
                <div style={{
                    marginTop: ".2em",
                    fontWeight: 700
                }}>$35</div>
            </div>
        </a>
    )
}