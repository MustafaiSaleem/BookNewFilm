import { StyleSheet , Text, View , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE } from '../../theme/theme'
// import { Switch } from 'react-native-switch';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = ({navigation} : any) => {
  return (
    <View style = {{backgroundColor : '#333' , flex : 1  }}>

      {/* for the Image to get Visible on the Top inside of the circle */}
      <View style = {{alignItems : 'center' , marginTop : '10%'}}>
        <Image style = {{width : 150 , height : 150 , borderRadius : 150 / 2}} source={{uri : 'https://images.unsplash.com/photo-1500629723675-4d6b0685936a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'}}/>
        <View style = {{marginTop : '5%'}}>
        </View>
      </View>


      <View style = {{marginTop : '20%' , flexDirection : 'row' , marginHorizontal : '10%' , alignItems : 'center'}}>
        <AntDesign name="home" size={28} color='orange' />
        <Text style = {[styles.homeText , {color : 'orange'}]}>Home</Text>
      </View>

      {/* Explore Movies Search Movies */}
      <View style = {{marginTop : '12%' , flexDirection : 'row' , marginHorizontal : '10%' , alignItems : 'center'}}>
        <AntDesign name="search1" size={24} color="white" />
        <TouchableOpacity style = {{justifyContent : 'center' , alignItems : 'center'}} onPress={() => navigation.navigate('Search')}><Text style = {styles.homeText}>Search Movies</Text></TouchableOpacity>
      </View>

      {/* Filter Movies by Category  */}
      <View style = {{marginTop : '12%' , flexDirection : 'row' , marginHorizontal : '10%' , alignItems : 'center'}}>
        <MaterialIcons name="filter-list-alt" size={24} color="white" />
        <Text style = {styles.homeText}>Filter by Category</Text>
        </View>

      {/* Stream Movies */}
      <View style = {{marginTop : '12%' , flexDirection : 'row' , marginHorizontal : '10%' , alignItems : 'center'}}>
        <Ionicons name="ios-tv-sharp" size={24} color="white" />
        <TouchableOpacity onPress={() => navigation.navigate('WelcomeRoomScreen')}><Text style = {styles.homeText}>Create Room</Text></TouchableOpacity>
      </View>

      {/* Book Tickets */}
      <View style = {{marginTop : '12%' , flexDirection : 'row' , marginHorizontal : '10%' , alignItems : 'center'}}>
        <Entypo name="ticket" size={24} color="white" />
        <Text style = {styles.homeText}>Book Tickets</Text>
      </View>

        {/* Invite Friends by Sending Messages  */}
        <View style = {{marginTop : '12%' , flexDirection : 'row' , marginHorizontal : '10%' , alignItems : 'center'}}>
          <Feather name="share-2" size={24} color="white" />
          <Text style = {styles.homeText}>Invite Friends</Text>
        </View>

        {/* About Application */}
        <View style = {{marginTop : '12%' , flexDirection : 'row' , marginHorizontal : '10%' , alignItems : 'center'}}>
          <Entypo name="info-with-circle" size={24} color="white" />
          <TouchableOpacity style = {{justifyContent : 'center' , alignItems : 'center'}} onPress={() => navigation.navigate('About')}><Text style = {styles.homeText}>About</Text></TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style = {{marginTop : '12%' , flexDirection : 'row' , marginHorizontal : '10%' , alignItems : 'center'}}>
          <Feather name="user" size={24} color="white" />
          <TouchableOpacity style = {{justifyContent : 'center' , alignItems : 'center'}} onPress={() => navigation.navigate('Profile')}><Text style = {styles.homeText}>Profile</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  homeText : {
    color : '#fff' , 
    fontSize : FONTSIZE.size_20 , 
    fontWeight : 'bold' ,
    marginHorizontal : '10%'
  }
})