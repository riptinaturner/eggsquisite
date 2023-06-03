export default function Page({ paddingBlock, paddingInline, children, style }) {
    return (
        <div className="page" style={{
            padding: "3rem 4rem",
            ...style
        }}>
            {children}
        </div>
    )
}