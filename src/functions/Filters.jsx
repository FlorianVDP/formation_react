import React from "react";
import Filter from "./Filter";

function Filters (props){
        const {data, filter, type} = props;
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
export default Filters