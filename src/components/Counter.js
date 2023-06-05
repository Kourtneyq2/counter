import { Component } from "react"

export class Counter extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="border m-3 p-4 rounded">
            <div className="text-center ">Counter: 0</div>
            <div className="d-flex justify-content-evenly">
                <button className="btn btn-success">Decrement</button>
                <button className="btn btn-danger">Reset</button>
                <button className="btn btn-success">Increment</button>
            </div>
        </div>
    )}
}