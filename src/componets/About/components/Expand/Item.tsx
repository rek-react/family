import React from "react"

const ItemExpand: React.FC<{ title: string, text: string }> = ({ title, text }) => {
    return (
        <div className="expand-about__item item-expand-about">
            <div className="item-expand-about__title">{title}</div>
            <div className="item-expand-about__text">
                {text}
            </div>
        </div>
    )
}
export default ItemExpand