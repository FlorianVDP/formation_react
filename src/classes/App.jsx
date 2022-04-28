import React ,{Component} from "react";
import Trainer from "./Trainer";
import PokemonList from "./PokemonList";
import Filters from "./Filters";
import fetchPokemons from "../utils/fetchPokemon";
class App extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            filterByType : null,
            pokemonCatched : null,
        }
        this.changeFilter = this.changeFilter.bind(this);
        this.catchThemAll = this.catchThemAll.bind(this);
    }

    changeFilter(type){
        if (this.state.filterByType === type){
            this.setState({
                filterByType : null
            })
        }else{
            this.setState({
                filterByType : type
            })
        }
    }
/*
----------------------- Trouver la solution ici
 */
    catchThemAll(allInfos){
        if (this.state.pokemonCatched){
            console.log("Type of state : ",typeof this.state.pokemonCatched)
            this.setState({
                //pokemonCatched : this.state.pokemonCatched.push(allInfos)
                pokemonCatched : [...this.state.pokemonCatched, allInfos]
            })
        }else{
            this.setState({
                pokemonCatched : [allInfos]
            })
        }
    }

    componentDidMount() {
            fetchPokemons()
                .then(
                    results => {
                        this.setState({
                            data : results
                        })
                    }
                )
                .catch(
                    e => {
                        console.error(e)
                    }
                )
    }

    render() {
        //const {data} = this.props;

        const data = this.state.data ? this.state.data : [];
        //const bag = data.length > 0 ? [data[0]] : []
        const bag = this.state.pokemonCatched ? this.state.pokemonCatched : []
        console.log("What's in my bag : ", bag)
        //const bag = this.state.pokemonCatched;

        // DataTypes
        const deeptypes = data.map(item => item.types.map(t => t.type.name));
        const flatTypes = deeptypes.flat();
        const dataTypes = [...new Set(flatTypes)];

        // FilterType
        let dataFiltred = null;
        if (this.state.filterByType === null){
            dataFiltred = data;
        }else{
            dataFiltred = data.filter(
                item => (item.types.map(t => t.type.name).includes(this.state.filterByType))
            );
        }

        return(
            <>
                <Trainer name={"Florian"} address={"8 rue du Bourg-palette"} bag={bag} />
                <Filters data={dataTypes} filter={this.changeFilter} type={this.state.filterByType} />
                <PokemonList data={dataFiltred} action={this.catchThemAll}/>
            </>
        );
    }
}
export default App;