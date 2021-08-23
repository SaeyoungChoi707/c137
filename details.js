import axios from 'axios'
import React, {Component} from 'react'
import { View,Text, Flatlist, StyleSheet, Alert, SafeAreaView, Button } from 'react-native'
import {Card} from 'react-native-elements'

export default class Details extends Component{
    constructor(props){
        super(props)
        this.state = {
            details:{},
            imagePath:"",
            url:`http://localhost:5000/star?name=${this.props.navigation.getParam(
                "Star_name"
            )}`
        }
    }
    render(){
        const {details,imagePath}=this.state
        if (details.specifications){
            return(
                <View style={styles.container}>
                    <Card
                    title = {details.name}
                    image = {imagePath}
                    imageProps = {{resizeMode:"contain",with:"100%"}}
                    >
                    <View>
                        <Text style={styles.cardItem}>
                            {`Distance : ${details.Distance}`}
                        </Text>
                        <Text style={styles.cardItem}>
                            {`Mass : ${details.Mass}`}
                        </Text>
                        <Text style={styles.cardItem}>
                            {`Radius : ${details.Radius}`}
                        </Text>
                    </View>
                    <View style={[styles.cardItem,{flexDirection:"column"}]}>
                        <Text>{details.specifications?`specifications:`:""}</Text>
                        {details.specifications.map((item,index)=>{(
                            <Text key={index.toString()} style={{marginLeft:50}}>
                                {item}
                            </Text>
                        )})}
                    </View>
                    </Card>
                </View>
            )
        }
        return null
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cardItem:{
        marginBottom:10
    }
})
