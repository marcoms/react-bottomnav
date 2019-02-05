import React from 'react';
import styled from 'styled-components';
import BottomNavItem, { BottomNavItemProps } from './BottomNavItem';

export interface BottomNavProps {
	selectedColor?: string;
	selectedLabel: string;
	onSelect: (label: string) => void;
}

const Bar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 64px;
	border-top: 1px solid #0001;
	background: white;
`;

export default class BottomNav extends React.Component<BottomNavProps> {
	onItemClick = (label: string) => {
		if (label !== this.props.selectedLabel) {
			this.props.onSelect(label);
		}
	}

	render() {
		const activeColor = this.props.selectedColor || 'blue';

		const items = React.Children.map(this.props.children, (child: React.ReactElement<BottomNavItemProps>) => {
			const itemProps: BottomNavItemProps = {
				onClick: this.onItemClick,
				label: child.props.label,
			};

			if (child.props.label === this.props.selectedLabel) {
				itemProps.fgColor = activeColor;
			}

			return React.cloneElement(child, itemProps);
		});

		return (
			<Bar>
				{items}
			</Bar>
		);
	}
}
