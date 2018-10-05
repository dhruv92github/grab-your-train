import React from 'react';
import '../mystyle.css';

class Details extends React.Component {
	render(){
var a = this.props.route.map(
     		(item,index)=>
     		<tr key={index} >
     			<td>{item.no}</td>
     			<td>{item.day}</td>
				
				<td>{item.station.name}</td>
				
				<td>{item.scharr}</td>
				<td>{item.schdep}</td>
				<td>{item.halt}</td>
				<td>{item.distance}</td>
				
     		</tr>
     		);
var daysRun= this.props.days.map(
		(item,index)=>
			<tr key={index}>
				<td>{item.code}</td>
     			<td>{item.runs}</td>
				
		</tr>

	)
var route=this.props.route && (this.props.route.length>0) && (<p> Route:
     	
     	<table>
		      <tr>
					<td>S No</td>
					<td>Day</td>
					<td>Station Name</td>
					<td>Schedule Arrival</td>
					<td>Schedule Departure</td>
					<td>Halt</td>
					<td>Distance</td>
		      </tr>
				{a}
      	</table>	</p> )


		return(<div >
	<br/>

	{this.props.train_no && <p>Train No : {this.props.train_no}</p>}
     {this.props.train_name && <p>Train Name : {this.props.train_name}</p>}  
     

     {this.props.days && <p>
		 <table>
      {daysRun}
      </table>
     </p>}
     { route} 
       
    
      
     
      </div>
	)
	}


	
}
export default Details;