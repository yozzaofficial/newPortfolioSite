import React from "react"
import "./css/TrainerCard.css"
import StarIcon from "./StarIcon"
import TrainerInfo from "./trainerInfo"

export default function TrainerCard() {
    return (
        <div className="trainercard">
            <header className="trainerCardHeader">
                <i className="icon"></i>
                <h2>Trainer Card</h2>
                <i className="icon"></i>
            </header>
            <div className="trainerCardInfoContainer">
                <TrainerInfo />
                <div className="trainerIcons">
                    <div className="starContainer">
                        <StarIcon />
                    </div>
                    <div className="iconTrainer"></div>
                    <div className="linksContainer">
                        <a ><div className="gitHub-icon"></div></a>
                        <a><div className="linkedin-icon"></div></a>
                        <a><div className="mail-icon"></div></a>
                    </div>
                </div>
            </div>
        </div>

    )
}