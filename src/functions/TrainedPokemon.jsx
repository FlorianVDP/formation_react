import React, {Component} from "react";
import {MdClose} from "react-icons/all";

class TrainedPokemon extends Component{
    constructor(p) {
        super(p);

        this.state = {
            exp: 0,
            idInterval: null,
            surname : p.name,
            editMode : false
        }
        this.trainPokemon = this.trainPokemon.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    trainPokemon(){
        /*
        this.setState({
            exp : this.state.exp + 10
        })
         */
        this.setState(
            state => ({ exp : state.exp + 100})
        );
    }

    componentDidMount() {
        const idInterval = setInterval(
            ()=>{
                this.setState({
                    exp : this.state.exp + 10
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

    updateValue(e){
        this.setState({
            surname: e.target.value,
        });
    }

    render() {
        const { name, weight, src, action } = this.props;
        const { exp } = this.state;

        return (
            <li className='TrainedPokemon'>
                <button className={"close"} onClick={action}><MdClose /></button>
                <input className={"name"} value={this.state.surname} onChange={this.updateValue} type="text"/>
                <div className='weight'>{weight}</div>
                {src && <img src={src} alt={name} onMouseMove={this.trainPokemon} />}
                <div className={exp}>exp : {exp}</div>
            </li>
        );
    }
}
export default TrainedPokemon