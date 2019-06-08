import styled from 'styled-components';
import Logopic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0px;
    left: 0px;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${Logopic}) no-repeat;
    background-size: contain;
`;
export const Nav = styled.div`
    display: block;
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;
export const NavItem = styled.div`
    line-height: 56px;
    margin-right: 10px;
    &.left{
        float: left;
        font-size: 17px;
        color: #333;
    }
    &.right{
        float: right;
        font-size: 15px;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    margin-left: 20px;
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 19px;
    background: #eee;
    margin-top: 9px;
    outline: none;
    &::placeholder{
        color: #999;
    }
`;

export const Addition = styled.div`
    position: absolute;
    top: 0px;
    right: 60px;
`;
export const Button = styled.div`
    float: left;
    height: 38px;
    line-height: 38px;
    margin-top: 9px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    &.reg{
        width: 80px;
        margin-right: 20px;
        color: #ea6f5a;
    }
    &.writting{
        width: 90px;
        color: #fff;
        background: #ea6f5a;
    }

`;