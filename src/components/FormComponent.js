import React, { Component } from 'react'

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            textAreaValue: "",
            selectValue: "Mango"
        }
    }
    handleChange(event, type) {
        if (type === 'input') {
            this.setState({
                inputValue: event.target.value,
            })
        } else if (type === "textarea") {
            this.setState({
                textAreaValue: event.target.value,
            })
        }
        else if (type === "select") {
            this.setState({
                selectValue: event.target.value,
            })
        }
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <h3 className='text-left'>React Forms</h3>
                <form style={{ width: 400 + 'px' }}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input autoComplete="false" type="text" onChange={(event) => this.handleChange(event, "input")}
                            value={this.state.inputValue} className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea autoComplete="false" value={this.state.textAreaValue}
                            onChange={(event) => this.handleChange(event, "textarea")}
                            className="form-control" rows="5" id="comment"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sel1">Select list:</label>
                        <select onChange={(event) => this.handleChange(event, "select")}
                            value={this.state.selectValue} className="form-control" id="sel1">
                            <option>Banana</option>
                            <option>Mango</option>
                            <option>Apple</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;