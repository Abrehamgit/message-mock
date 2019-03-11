//this file renders all the chat avatars

import React, { Component } from 'react';
import StyledChats from './styles';
import { Container } from './styles';

import Chat from '../chat/chat';
import { people } from '../../data/people';

class Chats extends Component {
	state = {
		people,
		isOpen: false
	};

	toggleNav = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<Container>
				<button onClick={this.toggleNav} className="toggle_btn">
					⬅
				</button>
				<StyledChats open={this.state.isOpen}>
					<button onClick={this.toggleNav} className="toggle_btn">
						✖
					</button>
					{this.state.people.map(person => (
						<Chat person={person} key={person.name} />
					))}
				</StyledChats>
			</Container>
		);
	}
}

export default Chats;
