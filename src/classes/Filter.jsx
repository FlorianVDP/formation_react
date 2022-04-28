import React, {Component} from "react";

class Filter extends Component{
    render() {
        const {label, filter, buttonSate} = this.props;

        return(
            <li className={"Filter"}>
                <button className={buttonSate} onClick={filter}>{label}</button>
            </li>
        )
    }
}
export default Filter