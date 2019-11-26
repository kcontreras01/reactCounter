import React, {Component} from 'react'
import ModernCounter from './ModernCounter';

class Counter extends Component {
	state = {
		count: 0,
		tags: ['tag1','tag2','tag3']
	}

	formatCount = () => {
		return this.state.count === 0 ? 'Zero' : this.state.count
	}

	getBadgeClasses = () => {
		let classes = "badge m-2 badge-";
		return classes += this.state.count === 0 ? "warning" : "primary"
	}

	handleClick = (product) => { 
		console.log(product)
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
		<React.Fragment>
			<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
			<button onClick={() => {
					this.handleClick(product)
				}} 
				className="btn btn-secondary btn-sm">
				Increment
			</button>
			<ul> 
				{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
			</ul>
			<ModernCounter />
		</React.Fragment>
		)
	
	}
	
}

export default Counter