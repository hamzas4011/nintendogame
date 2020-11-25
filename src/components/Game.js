
const Game = ( { id, title, category, image, price }) => {
    return (
        <article>
            <h3>{ title } (id: { id }) </h3>
            <p>Kategori: { category } </p>
            
        </article>
    )
}

export default Game;