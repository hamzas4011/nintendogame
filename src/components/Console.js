
const Console = ( { id, name, year, price, image}) => {
    return (
        <article>
            <h3>{ name } (id: { id }) </h3>
            <p>År: { year } </p>
            <p>Price: { price }</p>
            <img asrc={`https://localhost:5001/images/${image}`}/>
        </article>
    )
}

export default Console;