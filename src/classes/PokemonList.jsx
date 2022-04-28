import React, {Component} from "react";
import Pokemon from "./Pokemon";

class PokemonList extends Component{
    render() {
        const {data, action} = this.props;

        const instances = data.map(item =>{
            return(
                <Pokemon
                    key={item.id} // Permet de ne pas re-instancier tous les pokemons
                    name={item.name}
                    weight={item.weight+" lb"}
                    allInfos={item}
                    src={item.sprites.front_default}
                    action={()=>action(item)}
                />
            )
        });

        return(
            <ul className={"PokemonList"}>{instances}</ul>
        )
    }
}
export default PokemonList;