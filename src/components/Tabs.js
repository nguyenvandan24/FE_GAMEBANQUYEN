import React, {Component} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tab from "./Tab";


class Tabs extends Component{
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label
        };
    }

    onClickTabItem = (tab) => {
        this.setState({activeTab: tab});
    }


    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return(
            <Wrapper>
                <div className="tabs">
                    <ol className="tab-list-x">
                        {children.map((child) => {
                            const { label } = child.props;

                            return (
                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClickTabItem}
                                />
                            );
                        })}
                    </ol>
                    <div className="tab-content">
                        {children.map(( child) => {
                            if (child.props.label !== activeTab){
                                return undefined;
                            }else {
                                return child.props.children;
                            }
                        })}
                    </div>
                </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.section`
  padding-top: 5rem;
  .tab-list-x {
    display: flex;
    border-bottom: 1px solid #282c34;
    padding-left: 0;
  }
  .tabs {
    padding: 2rem;
    width: auto;
    height: auto;
    //display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: ${({ theme }) => theme.colors.bg};
    //text-align: center;
    //align-items: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .tab-content {
    padding: 10px;
    font-size: 1.65rem;
  }
`;
export default Tabs;