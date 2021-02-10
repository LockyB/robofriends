import React from 'react';

const Card = ({ name, email, id }) => { //this is better without creating props at all
	// const { name, email, id } = props; //instead of typing props.name, etc.
	return (
		<div className = "tc dib bg-light-blue br3 pa4 ma2 grow bw2 shadow-5 link hover-bg-light-green">
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;