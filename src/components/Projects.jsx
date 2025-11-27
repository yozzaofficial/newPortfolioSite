import project from "./../project.js"
import pokeballBg from "./../assets/pokeball-red.png"
export default function Projects() {
    let divElement = project.map(e => {
        return <div className="projects">
            <header className="projectsHeader">{e.name}</header>
            <div className="hp"></div>
            <div className="projectDetails">
                <p>{e.level}</p>
                <p>{e.hp}/{e.hp}</p>
            </div>
            <img src={pokeballBg} className="pokeballBg"></img>
        </div>
    })
    return (
        <>
            {divElement}
        </>
    )
}