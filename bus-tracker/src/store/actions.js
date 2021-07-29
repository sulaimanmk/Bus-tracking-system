import {GET_BUSES, SET_CURRENT_STOP, SET_STATE_PROPERTY} from "./action-types";
import {BASE_URI} from "../constants";
import axios from "axios";
import {Alert} from "react-native";

export const authenticateUser = (user) => dispatch => {
    let obj = {
        key: 'user',
        value: user
    };

    dispatch({
        type: SET_STATE_PROPERTY,
        payload: obj
    });
};

export const setRoute = (route) => dispatch => {
    let obj = {
        key: 'route',
        value: route
    };

    dispatch({
        type: SET_STATE_PROPERTY,
        payload: obj
    });
};

export const setBus = (bus) => dispatch => {
    let obj = {
        key: 'bus',
        value: bus
    };

    dispatch({
        type: SET_STATE_PROPERTY,
        payload: obj
    });
};

export const setCurrentStop = (bus, stop) => dispatch => {
    axios.post(`${BASE_URI}/buses/update-bus-location`, {
        busId: bus._id ,
        busLocation: stop._id
    },{
        headers: {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}
    }).then(async (response) => {
        dispatch({
            type: SET_CURRENT_STOP,
            payload: stop
        });
    }).catch( (error) => {
        Alert.alert("Error", error.message);
    });
};

export const getBuses = () => dispatch => {
    axios.post(`${BASE_URI}/buses/fetch-all`, {
    },{
        headers: {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}
    }).then(async (response) => {
        dispatch({
            type: GET_BUSES,
            payload: response.data.buses
        });
    }).catch( (error) => {
        Alert.alert("Error", error.message);
    });
};

export const startBusUpdateTimer = () => dispatch => {
    setInterval(()=> {
        dispatch(getBuses());
    }, 1000 * 5)
};