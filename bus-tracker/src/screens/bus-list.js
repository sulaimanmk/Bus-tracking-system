import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {connect} from "react-redux";
import {getBuses, startBusUpdateTimer} from "../store/actions";

class BusList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getBuses();
        this.props.startBusUpdateTimer()
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity>
                <View style={styles.row}>
                    <View style={styles.pic}>
                        <Text style={{ fontSize: 20, fontWeight: '600'}}>{item.number}</Text>
                    </View>
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item?.readableName}</Text>
                        </View>
                        <View style={styles.msgContainer}>
                            <Text style={[styles.msgTxt, {fontWeight: '200', color: '#fff'}]}>{item?.busLocation?.readableName}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={[styles.msgTxt, {color: item.status ==='Active' ? 'green' : 'red'}]}>{item.status ? item.status : 'Active'}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const buses = this.props.buses
        return(
            <View style={{ flex: 1, backgroundColor: '#095188' }} >
                <FlatList
                    extraData={this.state}
                    data={buses}
                    keyExtractor = {(item) => {
                        return item.id;
                    }}
                    renderItem={this.renderItem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#095188',
        borderBottomWidth: 1,
        padding: 10,
    },
    pic: {
        backgroundColor: 'lightgray',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#fff',
        fontSize: 16,
        width:'100%',
    },
    mblTxt: {
        fontWeight: '200',
        color: '#fff',
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#fff'
    },
    msgTxt: {
        fontWeight: '400',
        color: '#fff',
        fontSize: 12,
        marginLeft: 15,
    },
});

const mapStateToProps = (state) => {
    return {
        buses: state.globalReducer.buses
    }
};

const matchDispatchToProps = dispatch => {
    return {
        getBuses: () => dispatch(getBuses()),
        startBusUpdateTimer: () => dispatch(startBusUpdateTimer())
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(BusList);
