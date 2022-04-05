import style from "./style.module.css"

export const World = (props) => {
    return (
        <div className={style.worldContainer}>
            {props.children}
        </div>
    )
}