const React = require('react')
const Default = require('../layouts/SingleDefault')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Pokemon">
            <form method="POST" action="/pokemons">
                Name: <input className="form-control" type="text" name="name" placeholder='Name of Pokemon Here'></input><br/>
                Image Link: <input className="form-control" type="text" name="image" placeholder='Image link of Pokemon Here'></input><br/>
                <label for="category">Category:</label>
                    <select className="form-control" name="category" id="category">
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
                <input type="submit" className="delete" value="Submit Pokemon"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New