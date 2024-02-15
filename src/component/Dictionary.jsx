import Data from "./Data"

const Dictionary = () => {
  return (
    <div>
        <h1>CODESTARS URBAN DICTIONARY</h1>
        <div className="abbr">
           { Data.map(data =>(
            <div key={data.id}  className="card">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
           ))}
        </div>

    </div>
  )
}

export default Dictionary