import React from "react"
import style from "./style.module.css"

export const Arena = (props) => {
    return (
        <div className={style.arenaContainer}>
            {React.Children.map(
                props.children,
                (child, index) => {
                    return React.cloneElement(
                        index === 1 ? (
                            <div>
                                {child}
                            </div>
                        ) : (
                            <div className={style.arenaName}>
                                {child}
                                <small>
                                    {props.arena}
                                </small>
                            </div>
                        )
                    )
                }
            )}
        </div>
    )
}