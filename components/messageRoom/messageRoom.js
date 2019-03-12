// renders the text form and all the messages

import React, { Component } from 'react';
import { convo } from '../../data/convo';
import SingleMessage from '../singleMessage/singleMessage';
import StyledForm from './styles';
import moment from 'moment';

class MessageRoom extends Component {
	state = {
		convo,
		message: ''
	};

	componentDidMount() {
		this.refs.mes.scrollTop = this.refs.mes.scrollHeight;
	}

	handleChange = e => {
		const message = e.target.value;
		this.setState({ message });
	};

	onSubmit = e => {
		e.preventDefault();
		if (this.state.message) {
			const text = {
				message: this.state.message,
				owner: 0,
				date: moment()
			};

			this.setState({ convo: [...this.state.convo, text], message: '' });

			//scroll to bottom here
			this.refs.mes.scrollTop = this.refs.mes.scrollHeight;
		}
	};

	render() {
		return (
			<StyledForm>
				<div className="messages" ref="mes">
					{this.state.convo.map(text => (
						<SingleMessage text={text} key={text.date} />
					))}
				</div>
				<div>
					<form
						onSubmit={e => {
							this.onSubmit(e);
						}}
					>
						<input
							type="text"
							placeholder="Type a message"
							value={this.state.message}
							onChange={this.handleChange}
						/>
						<button type="submit"> Send </button>
					</form>
				</div>
			</StyledForm>
		);
	}
}

export default MessageRoom;
