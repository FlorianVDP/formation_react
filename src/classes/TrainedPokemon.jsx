import React, {Component} from "react";

class TrainedPokemon extends Component{
    constructor() {
        super();

        this.state = {
            exp: 0,
            idInterval: null,
        }
        this.trainPokemon = this.trainPokemon.bind(this);
    }
    trainPokemon(){
        this.setState({
            exp : this.state.exp + 10
        })
    }

    componentDidMount() {
        const idInterval = setInterval(
            ()=>{
                this.setState({
                    exp : this.state.exp + 100
                })
            }, 1000
        );
        this.setState({
            idInterval
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.idInterval);
    }

    render() {
        const { name, weight, src, action } = this.props;
        const { exp } = this.state;

        return (
            <li className='TrainedPokemon' onClick={action} onMouseMove={this.trainPokemon}>
                <div className='name'>{name}</div>
                <div className='weight'>{weight}</div>
                {src && <img src={src} alt={name} />}
                <div className={exp}>exp : {exp}</div>
            </li>
        );
    }
}
export default TrainedPokemon