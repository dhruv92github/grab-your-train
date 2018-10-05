import React from 'react';

class Form extends React.Component {

getDetails=()=>{

	var train_no=this.refs.TrainNo.value;
	console.log(this.refs.TrainNo.value);
	this.props.getTrainDetails(train_no);
}

	render(){

		return(<div className="container">
	<br />

			<div className="row">
				<div className="col-sm-4 col-sm-offset-3">
					<p><b> Train Route</b></p>
					<input type="text" ref="TrainNo" className="form-control" name="trainDetails" placeholder="Enter train name or number" /> 
					<br />
					<input type="button" className="btn btn-primary" value="Get route" onClick={this.getDetails}/>

				</div>

			</div>

        
      </div>
	)

	}


	
}
export default Form;