import React from 'react'
import { Redirect} from "react-router-dom";
import axios from 'axios'
import './App.css'
class Show extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.topten = this.topten.bind(this);
     this.state = {
            data:[],
            loaded:false,
            buttonloaded:false,
            toptenButton:false,
            
            sendData:[]
        }
    }
    componentDidMount() {
    axios.get('http://starlord.hackerearth.com/TopRamen')
      .then(res => {
        const ramen = res.data;
        this.setState({ data: ramen,loaded:true });
      })
  }
  handleClick({currentTarget}) {    
     
    var newArray = this.state.data.filter(function (el) {
  return el.Country===currentTarget.value
});
this.setState({
sendData:newArray,
buttonloaded:true
})

  }
 topten({currentTarget}) {    
    var newArray = this.state.data.filter(function (el) {
  return el.Country===currentTarget.value
});
this.setState({
sendData:newArray,
toptenButton:true
})

  } 
    render() {
        //var unique = [...new Set(this.state.data.Country)]
       // console.log(this.state.data.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i))
        if (this.state.buttonloaded ) {
            
            return <Redirect to={{ pathname: '/Country', state: { data: this.state.sendData} }} />
        }
         if (this.state.toptenButton ) {
          
            return <Redirect to={{ pathname: '/Topten', state: { data: this.state.sendData} }} />
        }
        return (
           <div className="row">
                    {
                        this.state.data.filter((v,i,a)=>a.findIndex(t=>(t.Country === v.Country))===i).map((dat) => {
                            return (
                               
                                <div className="col-md-4">
                                <div className="card bg-light">
                                <div className="card-body">
            <h4 className="card-title">Brand:{dat.Brand}</h4>
                                        <p><b>Variety:{dat.Variety}</b></p>
                                        <p><b>Style:{dat.Style}</b></p>
                                        <p><b>Country:{dat.Country}</b></p>
                                        <p><b>Stars:{dat.Stars}</b></p>
                                        <button  className="btn btn-primary" value={dat.Country} onClick={this.handleClick}>   
        More Details
      </button>
       <button  className="btn btn-primary" value={dat.Country} onClick={this.topten}>   
        Top ten Order
      </button>
            
    
        </div>
    </div>
    </div>
                            )
                        })
                    }
                    </div>

        )
    }
}

export default Show