const React = require('react');

class Default extends React.Component {
    render(){
        const {pokemon, title} = this.props
        return(





            
            <html>
                <head>
                    <title>{title}</title>
                    <link rel="stylesheet" href="/css/style.css"></link>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
                </head>

                <body className="bg-light">
                    <main>
                        <section id="cards">
                            <div className="container py-2">
                                <div className="row pb-4">
                                    <div className="col-12 text-center">
                                        {/* <div className="display-3">Pokemon!</div> */}
                                        <img className='logo' src="https://i.imgur.com/o0xWZ3Z.png" alt="" />
                                            <nav>
                                                <a href={`/pokemons`}><i className="fa-solid fa-home"></i> Home</a>
                                                <a href={`/pokemons/new`}><i className="fa-solid fa-square-plus"></i> Create New log</a>
                                            </nav>
                                        </div>
                                    </div>
                                <div className="row">
                                    {this.props.children}
                                </div>
                            </div>
                        </section>
                    </main>
                </body>
            </html>
        )
    }
}

module.exports = Default