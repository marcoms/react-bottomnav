import React from 'react';
import styled from 'styled-components';

export interface BottomNavItemProps {
	label: string;
	onClick?: (label: string) => void;
	fgColor?: string;
}

interface ContainerProps {
	fgColor: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	width: 80px;
	color: ${(props: ContainerProps) => props.fgColor};
	justify-content: center;

	svg {
		fill: currentColor;
		width: 24px;
		height: 24px;
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
		const color = this.props.fgColor || '#0008';

		return (
			<Container onClick={this.onClick} fgColor={color}>
				{this.props.children}

				<Label>{this.props.label}</Label>
			</Container>
		);
	}
}
