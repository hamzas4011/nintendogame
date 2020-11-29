
const Console = ( { id, name, age, weapon, strength, image}) => {
    return (
        <article>
            <h3>{ name } (id: { id }) </h3>
            <p>Alder: { age }</p>
            <p>Våpen: { weapon } </p>
            <p>Styrke: { strength }</p>
            <img src={`https://localhost:5001/images/${image}`}/>
        </article>
    )
}

export default Console;