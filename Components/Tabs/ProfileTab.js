import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
import {Icon,Container,Header,Body,Left,Right,Content, Button} from "native-base";
import EntypoIcon from "react-native-vector-icons/Entypo"
import Entypo from "@expo/vector-icons/Entypo";
import CardComponent from "../CardComponent"

var { height, width } = Dimensions.get('window');


var images = [
    require("../../assets/images-2.jpeg"),
    require("../../assets/images-3.jpeg"),
    require("../../assets/images-4.jpeg"),
    require("../../assets/images-5.jpeg"),
    require("../../assets/1.jpg"),
    require("../../assets/2.jpg"),
    require("../../assets/3.jpg"),
    require("../../assets/2.jpg"),
    require("../../assets/1.jpg"),
    require("../../assets/3.jpg"),

];




class ProfileTab extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked(index) {
        this.setState({
            activeIndex: index
        })
    }
    checkActive = (index) => {
        if (this.state.activeIndex !== index) {
            return (
                { color: 'grey' }
            )
        }
        else {
            return (
                {}
            )
        }

    }

    renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,

                    }}
                        source={image}>
                    </Image>

                </View>
            )
        })

    }

    renderSection() {

        if (this.state.activeIndex == 0) {

            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {this.renderSectionOne()}
                </View>
            )

        }
        else if (this.state.activeIndex == 1) {
            return (
                <View>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="101" />
                    <CardComponent imageSource="3" likes="101" />
                </View>
            )
        }
    }

  
    render() {
        return (
            <Container style = {{flex:1}}>
                <Header>
                    <Left >
                        <Icon name = "md-person-add" style = {{paddingLeft:10}}>

                        </Icon>
                    </Left>
                    <Body>
                    <Text>
                        frodo
                    </Text>
                    </Body>
                    <Right >
                        <Entypo name = "back-in-time" style = {{fontSize :30,paddingRight:10}}>

                        </Entypo>
                    </Right>
                </Header>

                <Content>
                <View style = {{flexDirection:"row"}}>
                    <View style = {{flex:1,marginTop:10}}>
                            <Image source = {require("../../assets/profile.jpg")} style = {{width:90,height:90,borderRadius:45,marginLeft:10}}>

                            </Image>
                    </View>
                    <View style = {{flex:3,marginTop:10}}>
                            <View style = {{flexDirection:"row",justifyContent:"space-around"}}>
                                <View style = {{alignItems:"center"}}>
                                    <Text style = {{fontWeight:"800"}}>
                                        20
                                    </Text>
                                    <Text style = {{fontSize:10,fontWeight:"100",color:"grey"}}>
                                        post
                                    </Text>
                                </View>
                               
                                <View style = {{alignItems:"center"}}>
                                    <Text style = {{fontWeight:"800"}}>
                                        203
                                    </Text>
                                    <Text style = {{fontSize:10,fontWeight:"100",color:"grey"}}>
                                        followers
                                    </Text>
                                </View>
                                <View style = {{alignItems:"center"}}>
                                    <Text style = {{fontWeight:"800"}}>
                                        245
                                    </Text>
                                    <Text style = {{fontSize:10,fontWeight:"100",color:"grey"}}>
                                        following
                                    </Text>
                                </View>
                            </View>

                            <View style = {{flexDirection:"row",paddingTop:10}}>
                                <Button bordered dark style = {{flex:3,justifyContent:"center",height:40,marginLeft:25}}>
                                    <Text >
                                        Edit Profile
                                    </Text>
                                </Button>

                                <Button bordered dark style = {{flex:1,height:40,marginLeft:10,justifyContent:"center",marginRight:10}}>
                                    <Icon name = "ios-settings"></Icon>
                                </Button>
                            </View>

                    </View>
                </View>
                    


                    <View style = {{paddingVertical:10,paddingHorizontal:10}}>
                        <Text style = {{fontWeight:"bold"}}>frodo</Text>
                        <Text>IOS  | reactNative | football freak| fitness-obsessed</Text>
                    </View>

                    <View style = {{flexDirection:"row",justifyContent:"space-around",borderTopWidth:0.4,borderTopColor:"grey"}}>
                        <Button transparent onPress = {()=> this.segmentClicked(0)  } 
                        active = {this.state.activeIndex == 0}
                        >
                            <Icon name = "ios-apps" style = {[this.state.activeIndex == 0 ? {} : {color:"grey"}]}>
                            </Icon>
                        </Button>

                        <Button transparent onPress = {()=> this.segmentClicked(1)  } 
                        active = {this.state.activeIndex == 1}
                        >
                            <Icon name = "ios-list" style = {[this.state.activeIndex == 1 ? {} : {color:"grey"}]}>
                            </Icon>
                        </Button>

                        

                        <Button transparent onPress = {()=> this.segmentClicked(2)  } 
                        active = {this.state.activeIndex == 2}
                        >
                            <Icon name = "ios-people" style = {[this.state.activeIndex == 2? {} : {color:"grey"}]}>
                            </Icon>
                        </Button>

                        <Button transparent onPress = {()=> this.segmentClicked(3)  } 
                        active = {this.state.activeIndex == 3}
                        >
                            <Icon name = "ios-bookmark" style = {[this.state.activeIndex == 3 ? {} : {color:"grey"}]}>
                            </Icon>
                        </Button>
                    </View>

                    <View>
                        {this.renderSection()}
                    </View>
                </Content>
            </Container>
            
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});