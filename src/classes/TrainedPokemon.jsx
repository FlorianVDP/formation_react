import React, {Component} from "react";

class TrainedPokemon extends Component{
    constructor() {
        super();

        this.state = {
            exp: 0
        }
        this.trainPokemon = this.trainPokemon.bind(this);
    }
    trainPokemon(){
        this.setState({
            exp : this.state.exp + 10
        })
    }
    render() {
        const { name, weight, src } = this.props;
        const { exp } = this.state;

        function displayName() {
            console.log('Je suis', name);
        }

        return (
            <li className='TrainedPokemon' onClick={displayName} onMouseMove={this.trainPokemon}>
                <div className='name'>{name}</div>
                <div className='weight'>{weight}</div>
                {src && <img src={src} alt={name} />}
                <div className={exp}>exp : {exp}</div>
            </li>
        );
    }
}
export default TrainedPokemon