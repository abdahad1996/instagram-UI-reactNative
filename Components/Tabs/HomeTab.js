import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import CardComponent from "../CardComponent";
import {Card,CardItem,Thumbnail,Container,Content, Icon,Header,Body, Left, Right} from "native-base"


class HomeTab extends Component {
    

    render() {
        return (

        <Container style = {styles.container}>
    <Header>
            <Left style = {{marginLeft : 5}}>
                <Icon name = "ios-camera">

                </Icon>
            </Left>
            <Body>
                <Text>
                    Instagram
                </Text>
            </Body>
            <Right style = {{marginRight : 5}}>
                <Icon name = "ios-send">

                </Icon>
            </Right>


    </Header>





            <Content>
                <View style = {{height:90}}>
                <View style = {{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:10}}>
                    <Text style = {{fontWeight:"bold"}}>
                        stories
                    </Text>

                    <View style = {{flexDirection:"row",alignItems:"centre"}}>
                    <Icon name = "md-play" style = {{fontSize : 14,marginHorizontal:5,paddingTop:2}}>

                    </Icon>
                    <Text style = {{fontWeight:"bold"}}>
                        watch All
                    </Text>
                    </View>
                    
                </View>
                <View style = {{flex:3}}>
                <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} style = {{paddingStart:5,paddingEnd:5}} >

                    <Thumbnail style = {{borderColor:"red",borderWidth:2,marginHorizontal:5} } source = {require("../../assets/images-2.jpeg")}></Thumbnail>
                    <Thumbnail style = {{borderColor:"red",borderWidth:2,marginHorizontal:5} } source = {require("../../assets/images-3.jpeg")}></Thumbnail>
                    <Thumbnail style = {{borderColor:"red",borderWidth:2,marginHorizontal:5} } source = {require("../../assets/images-4.jpeg")}></Thumbnail>
                    <Thumbnail style = {{borderColor:"red",borderWidth:2,marginHorizontal:5} } source = {require("../../assets/images-5.jpeg")}></Thumbnail>
                    <Thumbnail style = {{borderColor:"red",borderWidth:2,marginHorizontal:5} } source = {require("../../assets/images.jpeg")}></Thumbnail>
                    <Thumbnail style = {{borderColor:"red",borderWidth:2,marginHorizontal:5} } source = {require("../../assets/images-2.jpeg")}></Thumbnail>
                    <Thumbnail style = {{borderColor:"red",borderWidth:2,marginHorizontal:5} } source = {require("../../assets/images-4.jpeg")}></Thumbnail>

                </ScrollView>
                </View>
                </View>
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