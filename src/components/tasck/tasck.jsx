import React, { Component } from 'react';

class Tasck extends Component {
    //state = {     }
    render() { 
        return (
            <div>
                <p>{this.props.value}</p>
                <button>Cross-Button</button>
                <hr />
            </div>
        );
    }
}
 
export default Tasck;