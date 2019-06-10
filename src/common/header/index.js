import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style';
import {connect} from 'react-redux';
import * as actionCreator from './store/actionCreator';
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                <SearchWrapper>
                    <CSSTransition timeout={300} classNames='slide' in={props.isFouces}>
                        <NavSearch onFocus={props.focusSearch} onBlur={props.blurSearch}
                            className={props.isFouces === true ? 'focused' : ''}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.isFouces === true ? 'focused iconfont' : 'iconfont'}>&#xe613;</i>
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

const mapStateToProps = (state) => {
    return {
        isFouces: state.header.isFouces
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        focusSearch(){
            dispatch(actionCreator.searchFocus());
        },
        blurSearch(){
            dispatch(actionCreator.searchBlur());
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);
