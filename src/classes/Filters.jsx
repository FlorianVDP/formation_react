import React, {Component} from "react";
import Filter from "./Filter";

class Filters extends Component{
    render() {
        const {data, filter} = this.props;

        const instances = data.map(item =>{
            return(
                <Filter
                    label={item}
                    filter={()=>filter(item)}
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