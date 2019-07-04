import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, Image, RefreshControl} from 'react-native';
import axios from 'axios';

/*Custom Components*/
import FavouriteItem from './FavouriteItem';

class Favourite extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fav:[],
            refreshing: false,
        };
    }

    fetchData = async() => {
        axios.get('http://alitecer.tk/APIs/virtual.php')
        .then(response => this.setState({ data: response.data.data }));
    }

    fetchData2 = async() => {
        axios.get('https://koineks.com/ticker')
        .then(response => this.setState({ fav: response.data }));
    }

    componentWillMount(){
        this.fetchData(); 
        this.fetchData2(); 
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchData().then(() => {
          this.setState({refreshing: false});
        });
        this.fetchData2().then(() => {
            this.setState({refreshing: false});
          });
    }

    renderData() { 
            var coins = this.state.data;
            var favs = this.state.fav;
            var coinKeys = Object.keys(coins);
        
            return coinKeys.map((val, Id) => 
                <FavouriteItem 
                    key={Id} 
                    id={coins[val].id}
                    name={favs[coins[val].code].name}
                    short_code={favs[coins[val].code].short_code}
                    high={favs[coins[val].code].high}
                    low={favs[coins[val].code].low}
                    current={favs[coins[val].code].current}>
                </FavouriteItem>           
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

export default Favourite;