import LANGUAGE from "@/type/language";

export interface DropDownHolderProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    onSelect: (item: T) => void;
    style?: React.CSSProperties;
    className?: string;
}

const DropDownHolder = <T extends {},>({
    items,
    renderItem,
    onSelect,
    style,
    className,
}: DropDownHolderProps<T>) => {
    return (<>
        <div className={className} style={style}>
            {items.map((item, index) => (
                <div style={{ width: "100%" }} key={index} onClick={() => onSelect(item)}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    </>)
}

export interface CountryDropDownProps {
    language: LANGUAGE;
    isSelected: boolean;
}

const CountryDropDownItem = ({
    language,
    isSelected,
}: CountryDropDownProps) => {
    return (
        <div className={"item"}>
            <img className={"wh-18"} src={language.image.src} alt={language.image.alt} />
            <div className={"mr-10"} />
            <span>{language.native}</span>
            {isSelected && <img className="wh-16 ml-at" src="https://image.smartscore.kr/smartscore_gloabl/icon/ic_checkbox_selected_lang.svg" />}
        </div>
    )
}

export interface PlainDropDownProps {
    text: string;
}

const PlainDropDownItem = ({
    text,
}: PlainDropDownProps) => {
    return (<>
        <li >{text}</li>
    </>)
}

export { DropDownHolder, CountryDropDownItem, PlainDropDownItem }
