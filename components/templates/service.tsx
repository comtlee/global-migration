import TopBanner from "../atoms/Banner/topBanner"
import ServiceForm from "../organisms/ServiceForm/ServiceForm";

const Service = () => {
    return (
        <>
            <TopBanner
                image={{
                    url: "https://image.smartscore.kr/smartscore_gloabl/images/mab_blue_bg.png",
                    alt: "service top banner",
                }}
                text={"Get up-to-date information on SMARTSCORE Global"} />
            <ServiceForm
                style={{ width: "880px" }}
                className={"contents-line-box contactus-form-section-01"} />
        </>
    )
}

export default Service;
