import React, {Component} from "react";
import Filter from "./Filter";

class Filters extends Component{
    render() {
        const {data, filter, type} = this.props;
        const instances = data.map(item =>{
            let classe = null;
            if (type === item){
                classe = "active";
            }
            return(
                <Filter
                    label={item}
                    filter={()=>filter(item)}
                    buttonSate={classe}
                    key={item}
                />
            )
        });
        return(
            <ul className={"Filters"}>{instances}</ul>
        )
    }
}
export default Filters