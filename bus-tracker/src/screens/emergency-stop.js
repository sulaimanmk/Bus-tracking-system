import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, View,} from 'react-native';
import axios from "axios";
import {BASE_URI} from "../constants";
import {connect} from "react-redux";

class EmergencyStop extends Component {

    updateBusStatus = (status)=>{
        axios.post(`${BASE_URI}/buses/update-bus-location`, {
            busId: this.props.bus._id,
            status: status
        },{
            headers: {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}
        }).then(async (response) => {
            Alert.alert("Emergency State", 'Students Updated');
        }).catch( (error) => {

        });
    }

    render() {
        const reasons = [
            {code: 'Active', message: 'In working State'},
            {code: 'Flat Tire', message: 'I Have A Flat Tire'},
            {code: 'Traffic Jam', message: 'Stuck In Traffic'},
            {code: 'Road Block', message: 'Stopped At A Roadblock'}
        ]
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#095188'}}>
                {
                    reasons.map(reason => {
                        return(
                            <View style={{width:"90%", marginVertical: 10}}>
                                <Button
                                    title={reason.message}
                                    onPress={() => this.updateBusStatus(reason.code)}
                                    style={{width: 400}}
                                />
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
        bus: state.globalReducer.bus,
    }
};

const matchDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(EmergencyStop);
