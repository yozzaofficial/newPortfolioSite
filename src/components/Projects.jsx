import project from "./../project.js"

export default function Projects() {
    let divElement = project.map(e => {
        return <div className="projects">{e.name}</div>
    })
    return (
        <>
            {divElement}
        </>
    )
}