'use client';

import DirectionArrow, { Direction } from "@/components/atoms/Dropdown/directionArrow";
import { useEffect, useState } from "react";
import { CountryDropDownItem, CountryDropDownProps, DropDownHolder } from "../DropDown";
import LANGUAGE from "@/type/language";
import classNames from "classnames";

interface LanguageDropDownButtonProp {
    language?: LANGUAGE;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (language: LANGUAGE) => void;
}

const LanguageDropDownButton = ({
    language = LANGUAGE.english,
    className,
    style,
    onChange,
}: LanguageDropDownButtonProp) => {
    const [isFocus, setFocus] = useState(false);
    const [arrowDirection, setArrowDirection] = useState(Direction.Down)
    const renderItem = (countryDropDown: CountryDropDownProps) => <CountryDropDownItem language={countryDropDown.language} isSelected={countryDropDown.isSelected} />
    const dropDownLanguageList: CountryDropDownProps[] = Object.values(LANGUAGE).map((value) => ({
        language: value,
        isSelected: language == value
    }))
    const focusChange = () => {
        if (isFocus) {
            setFocus(false)
        } else {
            setFocus(true)
        }
    }
    useEffect(() => {
        if (isFocus) {
            setArrowDirection(Direction.Up)
        } else {
            setArrowDirection(Direction.Down)
        }
    }, [isFocus])
    return (
        <div
            className={className}
            style={style}
            onClick={focusChange}
            onBlur={() => { setFocus(false) }}
        >
            <img className={"wh-18"} src={language.image.src} alt={language.image.alt} />
            <div className={"mr-10"} />
            <span>{language.languageCode}</span>
            <div className={"ml-10"} />
            <DirectionArrow className={"wh-18"} direction={arrowDirection} />
            {
                isFocus && <DropDownHolder
                    className={"dropDown-lang-box"}
                    items={dropDownLanguageList}
                    renderItem={renderItem}
                    onSelect={(props) => {
                        onChange?.(props.language)
                    }} />
            }
        </div>
    )
}

type PlainDropDownProps = {
    labelText: string,
    list: string[],
    error: boolean,
    className?: string,
    onSelected: (value: string) => void
}

const PlainDropDownButton = ({
    labelText,
    list,
    error,
    className,
    onSelected,
}: PlainDropDownProps) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [selected, setSelected] = useState<string>()
    return (
        <div className={classNames(className, 'form-group', 'select-type-default', { error })}>
            <label>{labelText}<span className="fc-347eff ml-2">*</span></label>
            <div className="select-group hp-60" onClick={() => { setShowDropDown(!showDropDown) }}>
                <input type="search" readOnly className="form-control" placeholder="Please select" value={selected} />
                <div className="select-group__add"></div>
                <div className={'select-group__append'}></div>
                {
                    showDropDown &&
                    <ul className="select-group-dropwon">
                        {
                            list.map((item, index) => (
                                <li key={index} onClick={() => {
                                    setShowDropDown(false)
                                    setSelected(item)
                                    onSelected(item)
                                }}>{item}</li>
                            ))
                        }
                    </ul>
                }
            </div>
            {error && <p className="message">This field is required</p>}
        </div>
    )
}

export { LanguageDropDownButton, PlainDropDownButton }
