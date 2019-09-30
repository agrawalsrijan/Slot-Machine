class Machine extends React.Component {
	render(){
		const {s1,s2,s3} = this.props;
		// set winner to either true or false
		const winner = (s1===s2) && (s2===s3);
		// creating an object that has styles and then using it inline
		const colors = {fontSize:"60px"};
		return(
			// adding styles externally and inline
			<div className="Machine">
				<h1 style={colors}>{s1} {s2} {s3}</h1>
				<h2 className={winner?"win":"lose"}>{winner ? "You win!" : "You lose"}</h2> 
			</div>
		);
	}
}