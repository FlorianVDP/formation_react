import React from "react";
import Pokemon from "./Pokemon";

function PokemonList (props){
        const {data, action} = props;

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
export default PokemonList;