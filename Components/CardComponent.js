import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
    
} from "react-native";
import {Ionicons,SimpleLineIcons} from "@expo/vector-icons";
import {Card,CardItem,Thumbnail,Container,Content,Body,Left,Right,Icon,Button} from "native-base";

class CardComponent extends Component {
     
    render() {
        const images = {
            "1": require( '../assets/1.jpg'),
            "2" :require('../assets/2.jpg'),
            "3" : require('../assets/3.jpg')
    }
        return (
           <Card>


               <CardItem>
                   <Left>
                       <Thumbnail source = {require("../assets/profile.jpg")}>
                       </Thumbnail>
                       <Body>
                           <Text>
                                frodo
                           </Text>
                           <Text note>
                            feb 19, 2019
                           </Text>
                       </Body>
                   </Left>
               </CardItem>


               <CardItem cardBody >
                    <Image source = {images[this.props.imageSource]} style = { {width : null , height : 400 , flex : 1}}  >
                    </Image>

               </CardItem>


               <CardItem style = {{height:45}}>
                   <Left>

                       <Button transparent>
                            <Icon name = "ios-heart" style = {{color:"black"}}>

                            </Icon>
                       </Button>

                       <Button transparent >
                           <Icon name = "ios-chatbubbles" style = {{color:"black"}}>

                           </Icon>
                       </Button>

                       <Button transparent>
                           <Icon name = "ios-send" style = {{color:"black"}}>

                           </Icon>
                       </Button>

                   </Left>
               </CardItem>

               <CardItem style = {{height : 35}}>
                
                    <Text style = {{fontWeight:"500"}}>
                        {this.props.likes} likes
                    </Text>
                
               </CardItem>

               <CardItem>
                   <Body>
                       <Text>
                       <Text style = {{fontWeight:"800"}}>Frodo </Text>
                           Veniam mollit velit quis incididunt est 
                           do do dolor veniam ullamco sint cillum adipisicing.
                            Magna dolor laborum sunt irure deserunt ad do exercit
                            ation consequat nostrud adipisicing Lorem labore enim. 
                            Ex id adipisicing fugiat velit. Pariatur laborum Lorem duis laboris enim dolor voluptate culpa quis. Velit qui do velit culpa ea non ullamco do sit laboris ullamco velit pariatur exercitation. Aliqua dolore laborum fugiat consequat. Excepteur officia minim magna ut aliquip ut cupidatat ipsum et occaecat incididunt aute proident magna.
                       </Text>
                   </Body>
               </CardItem>
           </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});