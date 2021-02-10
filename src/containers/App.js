import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json()) //convert to json format
			.then(users => this.setState({robots: users}));
	}

	//create a function change the input
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}
	render() {
		const { robots, searchfield } = this.state;
		const filterdRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ?
			<h1 className='f1 tc vc'>Loading</h1> //this can be a loading screen
			:
			(
			<div className = 'tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterdRobots}/>
				</Scroll>
			</div>
			);
	}
}

export default App;