import styled from 'styled-components';
import Logopic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    position: relative;
    overflow: hidden;
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
    .iconfont{
        font-size: 20px;
    }
`;
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .slide-enter{
        transition: all .3s ease-in-out;
    }
    .slide-enter-active{
        width: 240px;
    }
    .slide-exit{
        transition: all .3s ease-in-out;
    }
    .slide-exit-active{
        width: 160px;
    }
    .com{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        &.focused{
            background: #ccc;
        }
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
    &.focused{
        width: 240px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    top: 0px;
    right: 60px;
`;
export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    left: 20px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    width: 250px;
    border-radius: 4px;
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
`;
export const SearchInfoHeader = styled.div`
    overflow: hidden;
    margin-bottom: 20px;
`;
export const SearchInfoTitle = styled.div`
    float: left;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoChange = styled.div`
    float: right;
    font-size: 13px;
    color: #2f2f2f;
    .spin{
        display: block;
        float: left;
        margin: -2px 3px 0 0;
        transition: all .2s ease-in;
        transform: rotate(180deg);
        transform-origin: center center;
    }
`;
export const SearchItem = styled.div`
    overflow: hidden;
`;
export const SearchInfoItem = styled.div`
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 15px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    float: left;
    border: 1px solid #ddd;
    border-radius: 3px;
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
        width: 100px;
        color: #fff;
        background: #ea6f5a;
        .ic-write ::before{
            content: "\E60E";
        }
    }

`;