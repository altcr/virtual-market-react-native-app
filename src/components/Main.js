import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, Image, RefreshControl} from 'react-native';
import axios from 'axios';

/*Custom Components*/
import MainItem from './MainItem';

class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: false,
        };
    }

    fetchData = async() => {
        axios.get('https://koineks.com/ticker')
        .then(response => this.setState({ data: response.data }));
    }

    componentWillMount(){
        this.fetchData(); 
    }

    componentDidMount(){
        this.fetchData();
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
          this.setState({refreshing: false});
        });
      }

    renderData() { 
        var coins = this.state.data;
        var coinKeys = Object.keys(coins);

        return coinKeys.map((val, Id) => 
            <MainItem 
                key={Id} 
                name={coins[val].name}
                short_code={coins[val].short_code}
                high={coins[val].high}
                low={coins[val].low}
                current={coins[val].current}>
            </MainItem>
        );
    }

    render(){
        return(
            <View style={styles.mainContainer}>
                <ScrollView style={{flex:1}} refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                    }>
                    {this.renderData()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer : {
        flex:1,
        flexDirection: 'column',
        paddingTop: 10,
        backgroundColor: '#ddd'
    },
    titleIcon : {
        height:17,
        width: 17
    }
});



export default Main;