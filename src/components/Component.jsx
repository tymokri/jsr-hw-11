import React from "react";
import Content from "./Content";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            acc: []
        }
    }

    handleClick = (mark) => () => {
        if (mark === '+') {
            let count = this.state.count + 1;
            let arr = this.state.acc;
            arr.unshift(count);

            this.setState( {
                count: count,
                acc: arr
            })
        }

        if (mark === '-' && this.state.count > 0) {
            let count = this.state.count - 1;
            let arr = this.state.acc;
            arr.unshift(count);

            this.setState( {
                count: count,
                acc: arr
            })
        }
    }

    handleRemove = (event) => {
        event.preventDefault();
        let index = event.target.dataset.key;
        let arr = this.state.acc
        arr.splice(+(index),1);

        this.setState( {
                acc: arr
            }
        )
    }

    addItem = this.handleClick("+");
    removeItem = this.handleClick("-");

    render() {
        const markValues = this.state.acc;

        return (
            <div>
                <div className="btn-group font-monospace btn-margin" role="group">
                    <button onClick={this.addItem}
                        type="button" className="btn btn-outline-success">+</button>
                    <button onClick={this.removeItem}
                        type="button" className="btn btn-outline-danger">-</button>
                </div>

                <Content markValues={markValues} onRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default Component;