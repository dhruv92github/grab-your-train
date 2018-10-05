import React, { Component } from 'react';

import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import Details from './component/Details';


const API_KEY="gf9s983r9d";

class App extends Component {

  state={
    train_name:undefined,
    train_no: undefined,
    route: [],
    days:[]



    // error:undefined
  }


  getTrainDetails= async(TRAIN_NO)=>{


    const api_call= await fetch('https://api.railwayapi.com/v2/route/train/'+TRAIN_NO+'/apikey/gf9s983r9d/');
    const data= await api_call.json();
    console.log(data);

  
// if(data.error){
//       if(data.error.code===1003){

//         this.setState({
           
//           train_name:undefined,
//           train_no:undefined,
//           error:"Please enter Train no"})
//       }
//       else{
//       this.setState({
//       train_name:undefined,
//     train_no:undefined,
//     error: data && data.error && data.error.message

//     })
//     }

//     }else{
       this.setState({
      train_name:data && data.train && data.train.name,
      train_no: data && data.train && data.train.number,
      route: data && data.route,
      days: data && data.train && data.train.days
      // error: ""
    })
       console.log(this.state.route);
    // }
}


  render() {
    return (<div>
        <Header />
        <div className="container">
        <Form getTrainDetails={this.getTrainDetails}/>
        <Details   
              train_no= {this.state.train_no} 
              train_name= {this.state.train_name}
              route= {this.state.route}
              days={this.state.days}

        />
          </div>

      </div>

    );
  }
}

export default App;
