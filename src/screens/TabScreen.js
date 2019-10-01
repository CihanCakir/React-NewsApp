import React, { Component } from 'react';
import { Container, Header, Content, Body ,Title ,Tab, Tabs, Left, Right } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor:'#009387'}} hasTabs>
            <Left/>
            <Body>
                <Title style={{color:'#fff'}}>DörtAdım</Title> 
            </Body>
            <Right/>
             </Header> 
        <Tabs tabBarUnderlineStyle={{ backgroundColor:'#fff'}}>
          <Tab tabStyle={{ backgroundColor:'#009387'}}  activeTabStyle={{backgroundColor:'#009387'}} activeTextStyle={{color:'#167427'}}   heading="Hayvan">
            <Tab1 />
          </Tab> 
          <Tab tabStyle={{ backgroundColor:'#009387'}}  activeTabStyle={{backgroundColor:'#009387'}} activeTextStyle={{color:'#f26513'}}   heading="Doga">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{ backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} activeTextStyle={{color:'#03a6a6'}}   heading="İnsan">
            <Tab3 />
          </Tab>
          <Tab  tabStyle={{ backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} activeTextStyle={{color:'#03a6a6'}}    heading="Bilim">
            <Tab4  />
          </Tab>
        </Tabs>
      </Container>
    );
  }
} 