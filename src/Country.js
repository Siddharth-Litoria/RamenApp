import React from 'react'
import './App.css'
class Country extends React.Component {
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
                                <div className="col-md-4">
                                <div className="card bg-light">
                                <div className="card-body">
                                <h4 className="card-title">Brand:{dat.Brand}</h4>
                                <p><b>Variety:{dat.Variety}</b></p>
                                <p><b>Style:{dat.Style}</b></p>
                                <p><b>Country:{dat.Country}</b></p>
                                <p><b>Stars:{dat.Stars}</b></p>
                                </div>
                                </div>
                                </div>
                            )
                        })
                    }
                   
                    </div>
            </div>

        )
    }
}

export default Country