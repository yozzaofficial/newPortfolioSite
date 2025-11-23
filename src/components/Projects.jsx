import project from "./../project.js"

export default function Projects() {
    let divElement = project.map(e => {
        return <div className="projects">
            <header className="projectsHeader">{e.name}</header>
            <div className="hp"></div>
            <div className="projectDetails">
                <p>{e.level}</p>
                <p>{e.hp}/{e.hp}</p>
            </div>
        </div>
    })
    return (
        <>
            {divElement}
        </>
    )
}