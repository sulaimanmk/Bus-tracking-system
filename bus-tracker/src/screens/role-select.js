import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {startBusUpdateTimer} from "../store/actions";
import {connect} from "react-redux";

class RoleSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    clickEventListener(route) {
        const { navigation } = this.props;
        navigation.navigate(route);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{height: 70, width: '75%', marginTop: 50}} source={{uri: 'https://alvi-consult.com/images/bau/bau.jpg'}}/>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener('DriverNavigation')}}>
                        <Image style={styles.cardImage} source={{uri: 'https://img.icons8.com/color/70/000000/traffic-jam.png'}}/>
                        <Text style={{color: '#000'}}> I'm A Driver </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.card} onPress={() => {
                        this.clickEventListener('StudentNavigation')
                    }}>
                        <Image style={styles.cardImage} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
                        <Text style={{color: '#000'}}> I'm a Student</Text>
                    </TouchableOpacity>

                </View>

                <Text style={{ color: '#fff'}}>BAU Bus Tracking Application @ 2021</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#095188'
    },
    /******** card **************/
    card:{
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor:"#e2e2e2",
        width:120,
        height:120,
        borderRadius:60,
        alignItems:'center',
        justifyContent:'center'
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage:{
        height: 50,
        width: 50,
        alignSelf:'center'
    },
    title:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#000"
    },
});

const mapStateToProps = (state) => {
    return {

    }
};

const matchDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, matchDispatchToProps)(RoleSelect);