import React ,{Component} from "react";
import Trainer from "./Trainer";
import PokemonList from "./PokemonList";
import Filters from "./Filters";

class App extends Component {
    constructor() {
        super();
        this.state = {
            filterByType : "all",
            pokemonCatched : []
        }
        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter(type){
        this.setState({
            filterByType : type
        })
    }

    catchThemAll(allInfos){
        console.log(this.state.pokemonCatched)
        this.setState({
            pokemonCatched : [...allInfos]
        })
    }

    render() {
        const {data} = this.props;
        //const bag = [data[0]]
        const bag = this.state.pokemonCatched;

        // DataTypes
        const deeptypes = data.map(item => item.types.map(t => t.type.name));
        deeptypes.push("all");
        const flatTypes = deeptypes.flat();
        const dataTypes = [...new Set(flatTypes)];

        // FilterType
        let dataFiltred = null;
        if (this.state.filterByType === "all"){
            dataFiltred = data;
        }else{
            dataFiltred = data.filter(
                item => (item.types.map(t => t.type.name).includes(this.state.filterByType))
            );
        }
        return(
            <>
                <Trainer name={"Florian"} address={"8 rue du Bourg-palette"} bag={bag} />
                <Filters data={dataTypes} filter={this.changeFilter} />
                <PokemonList data={dataFiltred} filterByType={this.state.filterByType} action={this.catchThemAll}/>
            </>
        );
    }
}
export default App;