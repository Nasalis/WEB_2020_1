import { Enemy } from "../../Enemy"
import { Hero } from "../../Hero"


import HeroImg from "./../../../assets/images/hero.jpg"
import EnemyImg from "./../../../assets/images/enemy.png"

import style from './style.module.css'

export const Question01 = () => {
    return (
        <div className={style.container}>
            <div className={style.containerContent}>
                <Hero name="Mr. Fantastic" image={HeroImg} />
                <Enemy name="Darksider" image={EnemyImg} />
            </div>
        </div>
    )
}