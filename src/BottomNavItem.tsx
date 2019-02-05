import React from 'react';
import styled from 'styled-components';

export interface BottomNavItemProps {
	label: string;
	onClick?: (label: string) => void;
	selected?: boolean;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80px;
	color: #0006;
	justify-content: center;

	svg {
		fill: currentColor;
	}
`;

const Label = styled.div`
	padding-top: 6px;
	font-size: 14px;
`;

export default class BottomNavItem extends React.Component<BottomNavItemProps> {
	onClick = () => {
		if (typeof this.props.onClick === 'function') {
			this.props.onClick(this.props.label);
		}
	}

	render() {
		return (
			<Container onClick={this.onClick} >
				{this.props.children}

				<Label>{this.props.label}</Label>
			</Container>
		);
	}
}
