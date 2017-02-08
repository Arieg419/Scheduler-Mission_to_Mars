import React from 'react';
import AlertBox from './AlertBox';
import $ from 'jquery';

var divStyle = {
  color: "#fff"
};


var RegForm = React.createClass({
	getDefaultProps: function() {
		// To be filled in later
	},
	getInitialState: function() {
		return  {
			showAlert: 'none',
			constraintType: false,
			workerFight: false,
			shiftLove: false,
			shiftProblem: false,
			day: false,
			shift: false
		}
	},
	enableFormField: function(event) {
		this.setState({constraintType: event.target.value});
		if(event.target.value === "workerFight") {
			this.setState({
				workerFight: true,
				shiftLove: false,
				shiftProblem: false
			});	
		}
		if(event.target.value === "shiftLove") {
			this.setState({
				workerFight: false,
				shiftLove: true,
				shiftProblem: false
			});
		}
		if(event.target.value === "shiftProblem") {
			this.setState({
				workerFight: false,
				shiftLove: false,
				shiftProblem: true
			});	
		} 
		event.preventDefault();
		return;
	},
	updateDay: function(event) {
		this.setState({day: event.target.value});
	},
	updateShift: function(event) {
		this.setState({shift: event.target.value});
	},
	renderAlertBox: function() {
		if(this.state.showAlert === 'none') return null;
		if(this.state.showAlert === 'success') return <AlertBox type="success">Great Success!</AlertBox>;
		if(this.state.showAlert === 'failure') return <AlertBox type="danger">Please fill in all fields</AlertBox>;
	},
	addConstraints: function(payload) {
  		$.post( 'http://localhost:3000/addConstraint', payload, function(data) {
  		  console.log("data returned from post req is refactored code ");
		  console.log(data);
		});
	},
	getSolution: function() {
		alert("get called");
		$.ajax({
          type: 'GET', 
          url: 'http://localhost:3000/solve',
          success: function(data) {
            alert('success');
            console.log(data);
          }, error: function (data) {
            alert('failed');
          }
    	});
	},
	register: function(e) {
		e.preventDefault();
		var worker1 = this.refs.worker1.value.trim();
		var worker2 = this.refs.worker2.value.trim();
		var that = this;

		// No constraint type specified
		if(!that.state.constraintType) {
			this.setState({
				showAlert: 'failure'
			});
			return;
		}

		// Worker Fight
		if(this.state.shiftProblem === false && this.state.shiftLove === false) {
			if(!worker1 || !worker2) {
				this.setState({
					showAlert: 'failure'
				});
				return;
			}
		} else {
			if(!worker1 || !that.state.day || !that.state.shift) {
				alert(worker1, that.state.day, that.state.shift);
				this.setState({
					showAlert: 'failure'
				});
				return;
			}
		}

		var data = {
			worker1: worker1,
			worker2: worker2,
			constraintType: that.state.constraintType,
			day: that.state.day,
			shift: that.state.shift
		};

		console.log(data);

  		this.addConstraints(data);

		this.setState({
			showAlert: 'success'
		});

		this.refs.worker1.value = '';
		this.refs.worker2.value = '';
	},
	enableWorker: function() {
		if(this.state.workerFight) return false;
		return true;
	},
	enableDayShift: function() {
		if(this.state.shiftProblem || this.state.shiftLove) return false;
		return true;
	},
	render: function() {
		return (
			<div className="container">
				<form action="" onSubmit={this.register}>

					{this.renderAlertBox()}
					<h3 className="center-block form-title" style={divStyle}> Add Constraints </h3>
					
					<label htmlFor="constraintType">Select Type of Constraint</label>
					<select className="form-control form-group" onChange={this.enableFormField} value={this.state.constraintType}>
					  <option value="shiftProblem">Worker i cannot work shift</option>
					  <option value="shiftLove">Worker i prefers working shift </option>
					  <option value="workerFight">Worker i cannot work with Worker j</option>
					</select>

					<div className="form-group">
						<label htmlFor="firstName">Worker 1 </label>
						<input type="text" className="form-control" placeholder="1 <= index <= 100" ref="worker1"/>
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Worker 2 </label>
						<input type="text" className="form-control" placeholder="1 <= index <= 100" ref="worker2" disabled={this.enableWorker()}/>
					</div>
					<div className="form-group">
						<label htmlFor="Day">Day </label>
						<select className="form-control form-group" onChange={this.updateDay} value={this.state.day} disabled={this.enableDayShift()}>
						  <option>1</option>
						  <option>2</option>
						  <option>3</option>
						  <option>4</option>
						  <option>5</option>
						  <option>6</option>
						  <option>7</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="Shift">Shift </label>
						<select className="form-control form-group" onChange={this.updateShift} value={this.state.shift} disabled={this.enableDayShift()}>
						  <option>1</option>
						  <option>2</option>
						  <option>3</option>
						  <option>4</option>
						  <option>5</option>
						  <option>6</option>
						</select>
					</div>
					<input type="submit" className="btn btn-primary btn-lg center-block btn-warning col-md-6" value="Add Constraint" />
					<input className="btn btn-primary btn-lg center-block btn-success col-md-6" value="Solve Problem" onChange={this.getSolution} onClick={this.getSolution}/>
				</form>
			</div>
		)
	}
});

module.exports = RegForm;