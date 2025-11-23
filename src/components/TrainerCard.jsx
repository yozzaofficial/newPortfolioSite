import "./css/TrainerCard.css"
import TrainerInfo from "./trainerInfo"
export default function TrainerCard() {
    return (
        <div className="trainercard">
            <header className="trainerCardHeader">
                <h2>Trainer Card</h2>
            </header>
            <div className="trainerCardInfoContainer">
                <TrainerInfo />
                <div className="trainerIcons">

                </div>
            </div>
        </div>

    )
}