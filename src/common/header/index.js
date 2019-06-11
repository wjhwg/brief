import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, 
    SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoHeader, SearchInfoChange,SearchItem, SearchInfoItem} from './style';
import {connect} from 'react-redux';
import * as actionCreator from './store/actionCreator';

const getListArea = (show) => {
    if(show){
        return (
            <SearchInfo>
                <SearchInfoHeader>
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoChange>换一批</SearchInfoChange>
                </SearchInfoHeader>
                <SearchItem>
                        <SearchInfoItem>1ewewe</SearchInfoItem>
                        <SearchInfoItem>1weww</SearchInfoItem>
                        <SearchInfoItem>1</SearchInfoItem>
                        <SearchInfoItem>1111111</SearchInfoItem>
                        <SearchInfoItem>111111</SearchInfoItem>
                        <SearchInfoItem>11111111</SearchInfoItem>
                        <SearchInfoItem>11111</SearchInfoItem>
                        <SearchInfoItem>1111</SearchInfoItem>
                        <SearchInfoItem>1</SearchInfoItem>
                </SearchItem>
            </SearchInfo>
        )
    }else {
        return;
    }
}
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
                    {getListArea(props.isFouces)}
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
        isFouces: state.header.get("focused")
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
