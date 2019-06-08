import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button} from './style';

class Header extends Component{
    render(){
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首頁</NavItem>
                    <NavItem className='left'>下載APP</NavItem>
                    <NavItem className='right'>登錄</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className='reg'>注冊</Button>
                    <Button className='writting'>寫文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;