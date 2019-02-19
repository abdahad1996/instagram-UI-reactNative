import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import CardComponent from "../CardComponent";
import {Card,CardItem,Thumbnail,Container,Content} from "native-base"


class HomeTab extends Component {
    

    render() {
        return (

        <Container style = {styles.container}>
            <Content>
                <CardComponent imageSource = "1" likes = "223">
                </CardComponent>
                <CardComponent imageSource = "2" likes = "123">
                </CardComponent>
                <CardComponent imageSource = "3" likes = "333">
                </CardComponent>
            </Content>
        </Container>
        
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor : "white",
       color : "blue"
    }
});