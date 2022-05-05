import React ,{Component} from "react";
import Trainer from "./Trainer";
import PokemonList from "./PokemonList";
import Filters from "./Filters";
import fetchPokemons from "../utils/fetchPokemon";
import PuffLoader from "react-spinners/PuffLoader";

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            filterByType : null,
            bag : [],
            loading : true
        }
        this.changeFilter = this.changeFilter.bind(this);
        this.catchThemAll = this.catchThemAll.bind(this);
        this.goodByPokemon = this.goodByPokemon.bind(this);
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

    catchThemAll(allInfos){
        //let newPokemon = {...allInfos} // {... n} Créé un nouvel objet
        //newPokemon.trainedId = Date.now();

        const newPokemon = {...allInfos, trainedId : Date.now()} // Autre facon

        if (this.state.bag){
            this.setState({
                bag : [...this.state.bag, newPokemon]
            })
        }else{
            this.setState({
                bag : [newPokemon]
            })
        }
    }

    goodByPokemon(id){
        this.setState({
            bag : this.state.bag.filter(item => item.trainedId !== id )
        })
    }

    componentDidMount() {
            fetchPokemons()
                .then(
                    results => {
                        this.setState({
                            data : results,
                            loading : false
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

        const data = this.state.data ? this.state.data : [];
        const bag = this.state.bag ? this.state.bag : []
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
        const content = (
            <>
                <Filters data={dataTypes} filter={this.changeFilter} type={this.state.filterByType} />
                <PokemonList data={dataFiltred} action={this.catchThemAll}/>
            </>
        );
        const loader = <div className={"loader"}><PuffLoader color={"#ffffff"} size={250}/></div>

        return(
            <>
                <Trainer name={"Florian"} address={"8 rue du Bourg-palette"} bag={bag} action={this.goodByPokemon} />
                {this.state.loading ? loader : content}
            </>
        );
    }
}
export default App;