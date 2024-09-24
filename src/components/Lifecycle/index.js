import React from "react";
import Timer from "../Timer";


class Lifecycle extends React.Component {
constructor() {
    super()
    console.log("constructor")
    console.log(this)
    this.state = {
        isOpen:true
    }
}

componentDidMount () {
    const myDiv = document.getElementById("divElement");
    console.log(myDiv);
}

handleChangeIsOpen = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
}

render() {
    console.log("render");
    return (
        <div>
            <h2>Lifecycle</h2>

            <div id="divElement">

            </div>

            <button onClick={this.handleChangeIsOpen}>
                {this.state.isOpen ? "close" : "open"}
            </button>

            {
                this.state.isOpen &&  <Timer />
            }

           

        </div>
    )
}
}
export default Lifecycle;