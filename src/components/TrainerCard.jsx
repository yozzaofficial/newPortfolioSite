import "./css/TrainerCard.css"
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
                    <div className="starContainer"></div>
                    <div className="iconTraienr"></div>
                    <div className="linksContainer"></div>
                </div>
            </div>
        </div>

    )
}