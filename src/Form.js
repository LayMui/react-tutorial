import React, {Component} from 'react';
import InputMask from 'react-input-mask';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 
        const maskString = new Array(5).fill(9).join('');
        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} />
                    <InputMask   
                        mask={maskString}
                        maskChar="&#9675;"
                        alwaysShowMask
                        data-testid="myDate">
                    </InputMask>
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
