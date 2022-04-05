import { World } from "../../World"
import { Arena } from "../../Arena"
import { Hero } from "../../Hero"
import { Enemy } from "../../Enemy"


import HeroImg from "./../../../assets/images/hero.jpg"
import EnemyImg from "./../../../assets/images/enemy.png"

export const Question02 = () => {
    return (
        <World>
            <Arena>
                <Hero name="Mr. Fantastic" image={HeroImg} />
                <Enemy name="Darksider" image={EnemyImg} />
            </Arena>
            <Arena>
                <Hero name="Mr. Fantastic" image={HeroImg} />
                <Enemy name="Darksider" image={EnemyImg} />
            </Arena>
            <Arena>
                <Hero name="Mr. Fantastic" image={HeroImg} />
                <Enemy name="Darksider" image={EnemyImg} />
            </Arena>
        </World>
    )
}