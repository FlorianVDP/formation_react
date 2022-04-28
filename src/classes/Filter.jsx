import React, {Component} from "react";

class Filter extends Component{
    constructor() {
        super();
        this.addCurrentClass = this.addCurrentClass.bind(this);
    }
    addCurrentClass(){
        document.querySelectorAll(".filter-button").forEach(button =>{
            button.classList.remove("active");
        })
    }
    render() {
        const {label, filter} = this.props;
        return(
            <li className={"Filter"}>
                <button className={"filter-button"} onClick={filter}>{label}</button>
            </li>
        )
    }
}
export default Filter