import React from 'react';
import {connect} from 'react-redux';


const InputMirror = (props) => {
	return (
    <div>
			<input value={props.inputValue} />
			<p>{props.inputValue}</p>
			</div>
  );
}

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		inputChanged: () => {
			console.log("Charged");
		}
	}
}
export default InputMirror;