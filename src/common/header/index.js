import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFouces: false
        }
        this.focusSearch = this.focusSearch.bind(this);
        this.blurSearch = this.blurSearch.bind(this);
    }
    render(){
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={300} classNames='slide' in={this.state.isFouces}>
                            <NavSearch onFocus={this.focusSearch} onBlur={this.blurSearch}
                                className={this.state.isFouces === true ? 'focused' : ''}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.isFouces === true ? 'focused iconfont' : 'iconfont'}>&#xe613;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='reg'>注册</Button>
                    <Button className='writting'>
                        <i className='iconfont'>&#xe615;</i>
                        写文章
                    </Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    focusSearch(){
        this.setState({
            isFouces: true
        });
    }
    blurSearch(){
        this.setState({
            isFouces: false
        });
    }
}

export default Header;