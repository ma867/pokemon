const React = require('react')
const Default = require('../layouts/SingleDefault')


class Edit extends React.Component {
    render(){
        const {name, category, image, time, _id} = this.props.pokemon
        return (
            <Default title={`${name} Edit Page`}>
                <h1>Edit Pokemon</h1>
                <form method="POST" action={`/pokemons/${_id}?_method=PUT`}>
                    Name: <input className="form-control"  type="text" name="name" defaultValue={name}></input><br/>
                    Image: <input className="form-control" type="text" name="image" defaultValue={image}></input><br />

                    <label for="category">Category:</label>
                    <select className="form-control" name="category" id="category" defaultValue={category}>

                        <option value="normal">Normal</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>           
                        <option value="electric">Electric</option>
                        <option value="ice">Ice</option>
                        <option value="fighting">Fighting</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="flying">Flying</option>         
                        <option value="psychic">Psychic</option>
                        <option value="bug">Bug</option>
                        <option value="fighting">Fighting</option>
                        <option value="rock">Rock</option>
                        <option value="ghost">Ghost</option>
                        <option value="dark">Dark</option>             
                        <option value="dragon">Dragon</option>
                        <option value="steel">Steel</option>
                        <option value="fairy">Fairy</option>
                    </select><br />
                    <input className='delete' type="submit" value="Edit" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit