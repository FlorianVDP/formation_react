import React from "react";
import TrainedPokemon from "./TrainedPokemon";

class Trainer extends React.Component {
    render() {
        const {name, address, bag, action} = this.props

        const instances = bag.map((item) =>{
            return(
                <TrainedPokemon
                    key={item.trainedId} // Permet de ne pas re-instancier tous les pokemons
                    name={item.name}
                    weight={item.weight+" lb"}
                    src={item.sprites.front_default}
                    action = {()=>action(item.trainedId)}
                />
            )
        });

        return(
            <div className={"Trainer"}>
                <div className={"name"}>{name}</div>
                <div className={"address"}>{address}</div>
                <ul className={"bag"}>
                    {instances}
                </ul>
            </div>
        )
    }
}

export default Trainer