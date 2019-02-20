import React from 'react';

class TemperatureDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            temperature: 37,
            description: "Couds"
        }
    }
    
    render() {
        return(
            <div>
                <h3>{this.state.temperature} C</h3>
                <p>{this.state.description}</p>
            </div>
        )
    }
}

export default TemperatureDisplay;

