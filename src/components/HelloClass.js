// imr cmd
import React, { Component } from 'react';

// cc cmd
class HelloClass extends Component {

    state = {
        age: 25,
        name: "Akash",
        address: {
            city: "Dhaka",
            location: "Dhaka-1212"
        }
    }

    // cdm cmd
    componentDidMount() {
        console.log(`cdm()`)
        // alert('Hello From cdm')
        this.setState({
            age: 30 
        });

        // Call the server api's here...
        // axios.get('')
    }
    

    render() {
        console.log(`render()`)
        return (
            <div>
                <p>Welcome to Class Base component</p>
                <hr />
                <p>Age = {this.state.age}</p>
                <p>{this.state.name}</p>
                <address>
                    City - {this.state.address.city} <br />
                    Location - {this.state.address.location} <br />
                </address>
            </div>
        )
    }
}

export default HelloClass;