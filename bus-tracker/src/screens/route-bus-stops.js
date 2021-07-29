import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {connect} from "react-redux";
import {setCurrentStop} from "../store/actions";
import { Ionicons } from '@expo/vector-icons';

class RouteBusStops extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        headerRight: (
            <View>
                <Text>Refresh</Text>
            </View>
        )
    };

    renderItem = ({item}) => {
        const bus = this.props.bus;
        return (
            <TouchableOpacity onPress={ () => this.props.setCurrentStop(bus, item) }>
                <View style={styles.row}>
                    <View style={styles.pic}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            textDecorationStyle: 'solid'
                        }}>{item.number}</Text>
                    </View>
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={[
                                styles.nameTxt,
                                {textDecorationLine: item.isArrived ? 'none' : 'none'}
                            ]} numberOfLines={1} ellipsizeMode="tail">{item.readableName}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const route = this.props.route;
        const stops = route.stops;

        return(
            <View style={{ flex: 1, backgroundColor: '#095188' }} >
                <FlatList
                    extraData={this.state}
                    data={stops}
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
        padding: 20,
    },
    pic: {
        backgroundColor: 'lightgray',
        borderRadius: 15,
        width: 30,
        height: 30,
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
    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
    },
});

const mapStateToProps = (state) => {
    return {
        route: state.globalReducer.route,
        bus: state.globalReducer.bus,
    }
};

const matchDispatchToProps = dispatch => {
    return {
        setCurrentStop: (bus, stop) => dispatch(setCurrentStop(bus, stop))
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(RouteBusStops);
