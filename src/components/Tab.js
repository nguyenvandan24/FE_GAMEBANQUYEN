import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.string.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label){
            className += ' tab-list-active'
        }
        return (
            <Wrapper>
                <li
                    className={className}
                    onClick={onClick}
                >
                    {label}
                </li>
            </Wrapper>

        );
    }
}

const Wrapper = styled.section`
  .tab-list-item {
    font-size: 20px;
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.75rem 1rem;
  }

  .tab-list-active {
    //background-color: white;
    color: blue;
    //border: solid #282c34;
    border-width: 1px 1px 0 1px;
    border-radius: 0.5rem;
  }
`;
export default Tab;