
export type Image = {
    url: string,
    alt: string,
}

export type BannerProps = {
    image: Image,
    text: string,
}

const TopBanner = (props: BannerProps) => {
    return (
        <div className={"common-page-visual-area contactus-form"}>
            <div
                className={"visual-banner-img bs-c"}
                style={{
                    backgroundImage: `url(${props.image.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "contain",
                }}
                title={props.image.alt} />
            <div className={"txt-box"}>
                <h1 style={{ fontSize: "clamp(1rem, 3vw, 3.7rem)" }}>{props.text}</h1>
            </div>
        </div>
    )
}

export default TopBanner;
