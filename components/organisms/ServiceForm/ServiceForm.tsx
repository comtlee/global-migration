import { Button } from "@/components/atoms/Button"
import InputField from "@/components/molecules/InputField"
import { PlainDropDownButton } from "@/components/molecules/Select"

interface ServiceFormProp {
    style?: React.CSSProperties,
    className?: string,
}

const ServiceForm = (props: ServiceFormProp) => {
    return (
        <div
            className={props.className}
            style={
                {
                    display: "grid",
                    placeContent: "center",
                    gridTemplateColumns: "repeat(832, 1fr)",
                    gridTemplateRows: "repeat(6, 1fr)",
                    ...props.style
                }
            }>
            {/** 첫번째 ROW */}
            <div style={{ gridColumn: "1 / 833" }}>
                <InputField
                    id="inputCourse"
                    label="Name of Glof Course"
                    required={true}
                    style={
                        { width: "100%", height: "60px" }} />
            </div>

            {/** 두번째 ROW */}
            <div style={{ gridColumn: "1 / 410" }}>
                <InputField id="firstName" label="First Name" required={true} style={{ width: "100%", height: "60px" }} />
            </div>
            <div style={{ gridColumn: "411 / 424", }}></div>
            <div style={{ gridColumn: "425 / 833" }}>
                <InputField id="lastName" label="Last Name" required={true} style={{ width: "100%", height: "60px" }} />
            </div>

            {/** 세번째 ROW */}
            <div style={{ gridColumn: "1 / 276" }}>
                <PlainDropDownButton labelText={"Country"} list={[
                    'Vietnam', 'Thailand', 'Indonesia', 'Malaysia', 'Philippines', 'Taiwan', 'Singapore', 'Other'
                ]} onSelected={value => { }} error={false} />
            </div>
            <div style={{ gridColumn: "277 / 307" }}></div>
            <div style={{ gridColumn: "308 / 833" }}>
                <InputField id="contactNumber" label="Contact Number" required={true} style={{ width: "100%", height: "60px" }} />
            </div>

            {/** 네번째 ROW */}
            <div style={{ gridColumn: "1 / 833" }}>
                <InputField id="emailA" label="E-mail Address" required={true} style={{ width: "100%", height: "60px" }} />
            </div>
            <div style={{ gridColumn: "1 / 833" }}>
                <Button className="button-common primary size-100 mt-40 hp-69" >SUBMIT</Button>
            </div>
        </div>
    )
}

export default ServiceForm
