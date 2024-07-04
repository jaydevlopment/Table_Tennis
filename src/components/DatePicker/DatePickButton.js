// import React, { useState } from 'react';
// import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
// import { View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from 'react-native';

// const DatePickButton = () => {

//     const [date, setDate] = useState(new Date());
//     const [mode, setMode] = useState("date");
//     const [show, setShow] = useState(false);
//     const [text, setText] = useState(" YY/MM/DD");

//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setShow(Platform.OS === 'ios');
//         setDate(currentDate);

//         let tempDate = new Date(currentDate);
//         let fDate = tempDate.getFullYear() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getDate(); 
//         setText(fDate);
//         console.log(fDate);

//     }

//     const showMode = (currentMode) => {
//         setShow(true);
//         setMode(currentMode);

//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.inputTitleStyle}>Date of Birth *</Text>
//                 <TouchableOpacity onPress={() => showMode("date")}>
//                     <View style={styles.dateinput}>
//                       <Text style={text === " YY/MM/DD" ? styles.txtDOB : styles.txtDOB1}>{text}</Text>  
//                     </View>
//                 </TouchableOpacity>
//                 {show && (
//                     <DateTimePicker
//                      testID='dateTimePicker'
//                      value={date}
//                      mode={mode}
//                      is24Hour={true}
//                      display="default"
//                      onChange={onChange}
                     
//                      />
//                 )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container1: {
//         flex: 1,
//         marginLeft:3
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // backgroundColor: 'red'
//     },
//     dateinput: {
//         height: 50,
//         fontSize: 15,
//         marginVertical: 6,
//         borderRadius: 6,
//         borderWidth: 1,
//         borderColor: '#C0C0C0',
//         padding: 12,
//         width:325
//     },
//     inputTitleStyle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         padding: 2,
//         color: '#fff',
//         marginLeft:5,
//       },
//       txtDOB: {
//         fontSize: 15,
//         color:"grey"
//       },
//       txtDOB1: {
//         fontSize: 15,
//         color:"white"
//       },

// });

// export default DatePickButton;
