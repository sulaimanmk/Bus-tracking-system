import React, {Component} from 'react';
import {ActivityIndicator, Button, StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import {authenticateUser} from "../store/actions";

class AuthLoader extends Component {

    componentDidMount() {
        const {navigation} = this.props;
        const user = this.props.user;

        if (user)
            navigation.navigate('MainNavigation');
        else
            navigation.navigate('Login');
    }

    render() {
        const {navigation} = this.props;
        return(
            <View style={styles.container}>
                {
                    !this.props.user && <ActivityIndicator size="large" color="#0000ff"/>
                }

                {
                    this.props.user && (
                        <>
                            <Button
                                onPress={() => {
                                    navigation.navigate('MainNavigation');
                                }}
                                title={`Continue as ${this.props.user.username}`}
                                color="#841584"
                            />
                            <View style={{ marginVertical: 20}}></View>
                            <Button
                                onPress={ async () => {
                                    await this.props.authenticateUser(null);
                                    navigation.navigate('Login');
                                }}
                                title={`Login As Different Driver`}
                                color="grey"
                            />
                        </>)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

const mapStateToProps = (state) => {
    return {
        user: state.globalReducer.user
    }
};

const matchDispatchToProps = dispatch => {
    return {
        authenticateUser: (user) => dispatch(authenticateUser(user))
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(AuthLoader);
