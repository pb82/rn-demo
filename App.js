import React, { Component } from 'react';
import { Alert, Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { RNFhSdk, RNFhSync } from 'react-native-fh-sdk';

const WELCOME_TEXT = `
  This is a basic React Native App that can take in your name, 
  send it to a cloud app and display the response.
`;

const Header = ({text}) => {
    return (
        <View style={{
            backgroundColor: '#85c1e9'
        }}>
            <Text>{text}</Text>
        </View>
    )
};

export default class HelloWorldApp extends Component {
    constructor() {
        super();
        this.state = {
            cloudReady: false,
            text: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        RNFhSync.init({
            "notify_sync_started": true
        }, function syncStarted(obj) {
            Alert.alert("Sync started " + obj.toString());
        }, function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){});

        RHFhSync.manage("myShoppingList");
    }

    handleSubmit() {
    }

    renderApp() {
        return (
            <View>
                <Header text={WELCOME_TEXT}/>
                <TextInput
                    style={{height: 40}}
                    onChangeText={(text) => {this.setState({text})}}
                />
                <Button title="Submit" onPress={this.handleSubmit} />
            </View>
        );
    }

    renderWaitForCloud() {
        return (
            <View>
                <Header text={WELCOME_TEXT}/>
                <Text>Waiting for cloud to become ready...</Text>
            </View>
        );
    }

    render() {
        let view = null;
        if (this.state.cloudReady) {
            view = this.renderApp();
        } else {
            view = this.renderWaitForCloud();
        }

        return (
            <View style={{
                flex: 1
            }}>
                {view}
            </View>
        );
    }
}

const styles = StyleSheet.create({

});