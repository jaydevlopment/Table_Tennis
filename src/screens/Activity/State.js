import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity, Image,
} from 'react-native';
import backImg from '../../../assets/images/back.png';
import activitytabel from '../../../assets/images/activitiy_statetabel.png'

const Activitystate = ({navigation}) => {
  return (


    <View style={{ backgroundColor: 'black', flex: 1,}}>
          <View style={{flexDirection:'row'}}>   
         <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
       <Text style={{color:'red',fontSize:35,textAlign:'center',fontWeight:'bold'}}>Activity State</Text>
       </View>
 </View>
    <View style={styles.Headers}> 
    <Image source={activitytabel} style={{marginTop: 30,height: 230,width: 400,marginHorizontal:100,alignSelf:'center',}}/>
    </View>
    <View>
        <Text style={{color:'white',marginTop:25,fontSize:20,marginHorizontal:15}}>Filter</Text>
    </View>
<View style={{flexDirection:'row',marginTop:15}}>
    <View style={{width:15,height:15,borderRadius:150/2,backgroundColor:'green',marginHorizontal:10}}>
    </View>
    <Text style={{fontSize:20,color:'white',marginHorizontal:-4,marginTop:-6}}>Serve</Text>

    <View style={{width:15,height:15,borderRadius:150/2,backgroundColor:'yellow',marginHorizontal:87}}>
    </View>
    <Text style={{fontSize:20,color:'white',marginHorizontal:-82,marginTop:-6}}>Forehand</Text>

    <View style={{width:15,height:15,borderRadius:150/2,backgroundColor:'white',marginHorizontal:120}}>
    </View>
    <Text style={{fontSize:20,color:'white',marginHorizontal:-115,marginTop:-6}}>Backhand</Text>
</View>
<View style={{flexDirection:'row',marginTop:25}}>
    <View style={{width:15,height:15,borderRadius:150/2,backgroundColor:'#b8860b',marginHorizontal:10}}>
    </View>
    <Text style={{fontSize:20,color:'white',marginHorizontal:-4,marginTop:-6}}>Backhand</Text>

    <View style={{width:15,height:15,borderRadius:150/2,backgroundColor:'#00ffff',marginHorizontal:50}}>
    </View>
    <Text style={{fontSize:20,color:'white',marginHorizontal:-45,marginTop:-6}}>Volley</Text>
    <View style={{width:15,height:15,borderRadius:150/2,backgroundColor:'#cd5c5c',marginHorizontal:111}}>
    </View>
    <Text style={{fontSize:20,color:'white',marginHorizontal:-105,marginTop:-6}}>Drop shot</Text>
</View>
<View style={styles.line}>
</View>
<View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
<TouchableOpacity style={{marginHorizontal:20}}>
    <Text style={{color:'green',fontSize:16,textAlign:'center'}}>SHOT</Text>
    <Text style={{color:'green',fontSize:16,textAlign:'center'}}>STATS</Text>
</TouchableOpacity>
<TouchableOpacity style={{marginHorizontal:75}}>
    <Text style={{color:'#d3d3d3',fontSize:16,textAlign:'center'}}>SMART</Text>
    <Text style={{color:'#d3d3d3',fontSize:16,textAlign:'center'}}>INSIGHTS</Text>
</TouchableOpacity>
<TouchableOpacity style={{marginHorizontal:20}}>
    <Text style={{color:'white',fontSize:16,textAlign:'center'}}>MY</Text>
    <Text style={{color:'white',fontSize:16,textAlign:'center'}}>NOTES</Text>
</TouchableOpacity>
</View>
<View style={{marginTop:10}}>
    <Text style={{color:'white',fontSize:30,textAlign:'center',fontWeight:'bold'}}>Combined Stats</Text>
</View>
<View style={styles.combinedline}>
</View>
<View style={{flexDirection:'row'}}>
<View style={{marginHorizontal:20}}>
    <Text style={{color:'white',fontSize:30,}}>68%</Text>
    <Text style={{color:'white',fontSize:12,}}>Shots In</Text>
</View>
<View style={{marginHorizontal:130}}>
    <Text style={{color:'white',fontSize:30}}>482</Text>
    <Text style={{color:'white',fontSize:12,}}>Shots PER HOUR</Text>
</View>
</View>
<View style={{flexDirection:'row',marginTop:12}}>
<View style={{marginHorizontal:20}}>
    <Text style={{color:'white',fontSize:30,}}>54 mph</Text>
    <Text style={{color:'white',fontSize:12}}>AVERAGE SHOT SPEED</Text>
</View>
<View style={{marginHorizontal:60}}>
    <Text style={{color:'white',fontSize:30}}>72%</Text>
    <Text style={{color:'white',fontSize:12,}}>SHOTS BEYOND SERVICE BOX</Text>
</View>
</View>
<View style={{flexDirection:'row',marginTop:12}}>
<View style={{marginHorizontal:20}}>
    <Text style={{color:'white',fontSize:30,}}>13%</Text>
    <Text style={{color:'white',fontSize:12}}>RELLIES ABOVE 8 SHOTS</Text>
</View>
<View style={{marginHorizontal:60}}>
    <Text style={{color:'white',fontSize:30}}>15</Text>
    <Text style={{color:'white',fontSize:12,}}>LONGEST RALLY </Text>
</View>
</View>

</View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop:10
  },
  imgBtn: {
    height: 30,
    width: 30,
    top: 18,
    marginLeft: 7
  },
  Headers: {
    width: '100%',
    height: '35%',
    backgroundColor: "#292929",
    borderRadius: 10,
    marginTop:15
  },
  line:{
    width:'90%',
    height:1,
    backgroundColor: "#292929",
    marginTop:15,
    alignSelf:'center'
  },
  combinedline:{
    width:'30%',
    height:1,
    backgroundColor: "#292929",
    marginTop:4,
    alignSelf:'center'
  }
 });
export default Activitystate;
