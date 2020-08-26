import React from 'react'
import './App.css'
class Topten extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <h1>Details of top Brand </h1>
                <div className="row">
                    {
                        this.props.location.state.data.map((dat) => {
                            return (
                                <ul>
                               <li>{dat.Brand}</li>
                               </ul>
                            )
                        })
                    }
                   
                    </div>
            </div>

        )
    }
}

export default Topten