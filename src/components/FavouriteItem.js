import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { Icon, Button } from 'react-native-elements';

/*Custom Components*/
import axios from 'axios';

class FavouriteItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            icon : {
                "ADA" : require('../images/ADA.png'),
                "BCH" : require('../images/BCH.png'),
                "BTC" : require('../images/BTC.png'),
                "BTG" : require('../images/BTG.png'),
                "BTT" : require('../images/BTT.png'),
                "DASH" : require('../images/DASH.png'),
                "DOGE" : require('../images/DOGE.png'),
                "EOS" : require('../images/EOS.png'),
                "ETC" : require('../images/ETC.png'),
                "ETH" : require('../images/ETH.png'),
                "LTC" : require('../images/LTC.png'),
                "TRX" : require('../images/TRX.png'),
                "USDT" : require('../images/USDT.png'),
                "XEM" : require('../images/XEM.png'),
                "XLM" : require('../images/XLM.png'),
                "XMR" : require('../images/XMR.png'),
                "XRP" : require('../images/XRP.png')
            }
        };
    }

    addDelete(id){
        axios.delete('http://alitecer.tk/APIs/virtual.php', {
            data: {id : id}
          });
    }

    render(){
        return(
            <View style={styles.tableMainContainer}>
                <View style={styles.itemIconContainer}>
                    <Image source={this.state.icon[this.props.short_code]} style={styles.itemIcon}/>
                </View>
                <View style={styles.itemDetailContainer}>
                    <Text style={styles.itemTitle}>{this.props.name} ({this.props.short_code})</Text>
                    {/*<Text style={styles.itemHigh}>{this.props.high}</Text>
                    <Text style={styles.itemLow}>{this.props.low}</Text>*/}
                    <Text style={styles.itemCurrent}>Price : {this.props.current}</Text>
                </View>
                <View style={styles.itemFavContainer}>
                    <Button color='#fff' title="DEL" size={24} onPress={() => this.addDelete(this.props.id)}/>
                </View>
            </View>                                            
        )
    }
}

const styles = StyleSheet.create({
    tableMainContainer : {
        flexDirection: 'row',
        height:60,
        margin:10,
        marginTop:0,
        backgroundColor:'#414141',
    },
    itemIconContainer : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: "#eee"
    },
    itemDetailContainer : {
        flex:4,
        paddingLeft:10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    itemFavContainer : {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemIcon : {
        width:45,
        height:45
    },
    itemTitle : {
        height:30,
        color:'#ffa323',
        fontWeight: 'bold',
        fontSize:18,
        textAlignVertical: 'center',
    },
    itemCurrent : {
        height:30,
        color:'#eee',
        fontWeight: 'bold',
        fontSize:14,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
})

export default FavouriteItem;