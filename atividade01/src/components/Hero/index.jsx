import style from './style.module.css'

export const Hero = (props) => {

    return (
        <div className={style.container}>
            <img className={style.imageContainer} src={props.image} alt={props.name} />
            <div className={style.nameContainer}>
                <h2 >{props.name}</h2>
            </div>
            <div className={style.information}>
                <ul>
                    {props?.statuses?.map(status => (
                        <li>
                            <h3>{status.skill}</h3>
                            <div>
                                <span>{status.value}</span>
                                <sup>points</sup>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}