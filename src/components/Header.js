import React, { Component } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

class Header extends Component{
    render(){
        return(
            <View style={styles.header}>
                <View style={styles.menuIcon}>
                    <Image source={require('../images/menu-icon.png')} />
                </View>
                <View style={styles.headerTextCont}>
                    <Text style={styles.headerText}>{this.props.headerText}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height:60, 
        backgroundColor:"#313131",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontSize:20, 
        fontWeight: "bold",
        color: "white",
        left: 80
    },
    menuIcon: {
        flex: 1,
        height:60,
        justifyContent: "center",
        alignItems: 'center',
    },
    headerTextCont: {
        flex: 8,
        height:60,
        justifyContent: 'center',
    }
    
});

export default Header;