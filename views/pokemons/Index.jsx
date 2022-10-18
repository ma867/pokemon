const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){

        const {pokemons} = this.props

  
        return(
            <Default title="Fruits Index Page">
               
                    {
                        pokemons.map((pokemon) => {
                            const {name, category, image, time, _id} = pokemon
                            return (
                                
                    <div class="col-lg-4 col-md-6 mb-4 pt-5" key={pokemon._id}>
                        <div class="card shadow-sm border-0" >
                            <div class="card-body">
                                <div class="user-picture">
                                    <img src={`${image}`} class="shadow-sm rounded-circle" height="140" width="140" />
                                </div>
                                <div class="user-content">
                                    <h5 class="text-capitalize user-name">
                                        <a href={`/pokemons/${_id}`}> {name}</a></h5>
                                    <p class=" text-capitalize  medium "><b>Category: </b><br />{category} pokemon</p>
                                
                                    <form method="POST" action={`/pokemons/${pokemon._id}?_method=DELETE`}>
                                        <input className="delete" type="submit" value={`Delete ${name}`}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                                       
                            )
                        })
                    }
               
            </Default>
        )
    }
}

module.exports = Index