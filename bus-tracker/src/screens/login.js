import React, {Component} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {connect} from "react-redux";
import {authenticateUser, setRoute, setBus} from "../store/actions";
import {BASE_URI} from "../constants";
import axios from "axios";

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    onClickListener = async (logout) => {
        if (logout){
            await this.props.authenticateUser(null);
        } else {
            const {navigation} = this.props;

            axios.post(`${BASE_URI}/users/login`, {
                username: this.state.username,
                password: this.state.password
            }, {
                headers: {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}
            }).then(async (response) => {
                let user = response.data.result.user;
                let bus = response.data.result.bus;
                let route = response.data.result.route
                await this.props.authenticateUser(user);
                await this.props.setRoute(route);
                await this.props.setBus(bus);
                navigation.navigate('MainNavigation');
            }).catch((error) => {
                Alert.alert("Error", error.message);
            });
        }
    }

    render() {
        const user = this.props.user;
        const {navigation} = this.props;

        if(user)
            return (
                <View style={styles.container}>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => {
                        navigation.navigate('MainNavigation');
                    }}>
                        <Text style={styles.loginText}>Continue As {user.username}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener(true)}>
                        <Text style={styles.loginText}>Logout</Text>
                    </TouchableHighlight>
                </View>
            )

        return (
            <View style={styles.container}>
                <Image style={{height: 70, width: '75%', marginBottom: 50}} source={{uri: 'https://alvi-consult.com/images/bau/bau.jpg'}}/>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="username"
                               underlineColorAndroid='transparent'
                               onChangeText={(username) => this.setState({username})}/>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener(false)}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#095188'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});

const mapStateToProps = (state) => {
    return {
        user: state.globalReducer.user
    }
};

const matchDispatchToProps = dispatch => {
    return {
        authenticateUser: (user) => dispatch(authenticateUser(user)),
        setRoute: (route) => dispatch(setRoute(route)),
        setBus: (bus) => dispatch(setBus(bus))
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);