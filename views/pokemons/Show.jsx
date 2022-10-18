const React = require('react');
const Default = require('../layouts/SingleDefault')

class Show extends React.Component {
   
    render(){
        const {name, category, image, time, _id} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(



        <Default title={`${capName} Show Page`}>
                
            <div className="user-picture">
                <img src={`${image}`} className="shadow-sm rounded-circle" height="140" width="140" />
            </div>
            <div className="user-content">
                <h5 className="text-capitalize user-name">{capName}</h5>
                <p className=" text-capitalize  medium "><b>Category: </b><br />{category}</p>
                
                <button className="delete"><a href={`/pokemons/${_id}/edit`}><i className="fa-solid fa-pencil"></i> Edit </a></button><br /><br />
                <button className="delete"><a href={`/pokemons/${_id}`}><i className="fa-solid fa-eye"></i> Details</a></button><br />
                
            </div>
                       
        </Default>


             
        
        )
   } 
}

module.exports = Show