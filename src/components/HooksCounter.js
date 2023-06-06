export const HooksCounter = () => {
    return(

            <div className="border m-3 p-4 rounded">
                <div className="text-center sub-title ">Counter: 0{this.state.count}</div>
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-success" onClick={this.handleDecrement}>Decrement</button>
                    <button className="btn btn-danger" onClick={this.handleReset}>Reset</button>
                    <button className="btn btn-success" onClick={this.handleIncrement}>Increment</button>
                </div>
            </div>
        )
};