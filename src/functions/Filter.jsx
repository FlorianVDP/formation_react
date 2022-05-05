import React from "react";

function Filter(props){
        const {label, filter, buttonSate} = props;

        return(
            <li className={"Filter"}>
                <button className={buttonSate} onClick={filter}>{label}</button>
            </li>
        )
}
export default Filter