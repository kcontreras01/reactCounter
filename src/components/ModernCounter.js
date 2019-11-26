import React, {useState} from 'react'

const ModernCounter = () => {
	const [count, setCount] = useState(0)
	const [tags, setTags] = useState(['tag1','tag2','tag3'])

	const formatCount = () => {
		return count == 0 ? 'Zero' : count
	}

	const getBadgeClasses = () => {
		let classes = "badge m-2 badge-";
		return classes += count == 0 ? "warning" : "primary"
	}

	const handleClick = () => { 
		this.setState({count: count + 1});
	}

	return (
	<React.Fragment>
		<span className={getBadgeClasses()}>{formatCount()}</span>
		<button onClick={handleClick} className="btn btn-secondary btn-sm">Increment</button>
		<ul> 
			{ tags.map(tag => <li key={tag}>{tag}</li>) }
		</ul>
	</React.Fragment>
	)
}

export default ModernCounter