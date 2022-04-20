import React, { Component } from "react";

class MiComponente extends Component {
    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón cocido'],
            calorias: 400
        };
        return (
            <div className="mi-componente">
                <h1>{'Nombre: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr></hr>
                {
                    this.props.saludo &&
                    <React.Fragment id="content">
                        <h1>DESDE UNA PROP: </h1>
                        <h3>{this.props.saludo}</h3>
                    </React.Fragment>
                }

            </div>
        );
    }
}

export default MiComponente;