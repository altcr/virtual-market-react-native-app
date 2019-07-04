/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ScrollableTabView  from 'react-native-scrollable-tab-view';

/*Custom Components*/
import Header from './src/components/Header';
import Main from './src/components/Main';
import Favourite from './src/components/Favourite';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Virtual Market"}></Header>
        <ScrollableTabView 
          tabBarActiveTextColor={'#313131'}
          tabBarInactiveTextColor={'#bbb'}
          tabBarTextStyle={{fontSize:16, fontWeight: 'bold'}}
          tabBarUnderlineStyle={{backgroundColor: '#313131'}}
          style={{marginTop:5}}>
            <Main tabLabel="All"></Main>
            <Favourite tabLabel="Favourite" />
        </ScrollableTabView>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container : {
    flex : 1
  }
})

export default App;
