import React , {Component} from 'react';
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="pic" src="//upload.jianshu.io/admin_banners/web_images/4672/20312e92bba4622441b74ea42977598e0bbbe4c4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;