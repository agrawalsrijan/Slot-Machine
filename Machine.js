class Machine extends React.Component {
	render(){
		const {s1,s2,s3} = this.props;
		// set winner to either true or false
		const winner = (s1===s2) && (s2===s3);
		return(
			<div>
				<h1>{s1} {s2} {s3}</h1>
				<h2>{winner ? "You win!" : "You lose"}</h2> 
			</div>
		);
	}
}