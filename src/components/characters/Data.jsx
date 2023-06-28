const CharacterData = ({ character = [] }) => {
  console.log("a")
  return (<>
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div>
        <h5>{character.name}</h5>
      </div>
    </div>
  </>)
}

export default CharacterData;