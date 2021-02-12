import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';



export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottless, setBottless] = useState('');
  const [hours, setHours] = useState('');
  const [gender, setGender] = useState('male');
  const [promilles, setPromille] = useState(0);

  const genders = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    }
];
console.log(weight);
  const bottlesList = [
    {label: '1 Bottles', value: '1' },
    {label: '2 Bottles', value: '2'},
    {label: '3 Bottles', value: '3'},
    {label: '4 Bottles', value: '4'},
    {label: '5 Bottles', value: '5'},
    {label: '6 Bottles', value: '6'},
    {label: '7 Bottles', value: '7'},
    {label: '8 Bottles', value: '8'},
    {label: '9 Bottles', value: '9'},
    {label: '10 Bottles', value: '10'},
    {label: '11 Bottles', value: '11'},
    {label: '12 Bottles', value: '12'},
    {label: '13 Bottles', value: '13'},
    {label: '14 Bottles', value: '14'},
    {label: '15 Bottles', value: '15'},
    {label: '16 Bottles', value: '16'},
    {label: '17 Bottles', value: '17'},
    {label: '18 Bottles', value: '18'},
    {label: '19 Bottles', value: '19'},
    {label: '20 Bottles', value: '20'},
    {label: '21 Bottles', value: '21'},
    {label: '22 Bottles', value: '22'},
    {label: '23 Bottles', value: '23'},
    {label: '24 Bottles', value: '24'}
  ];

  const hoursList = [
        {label: '1 Hours', value: '1'},
        {label: '2 Hours', value: '2'},
        {label: '3 Hours', value: '3'},
        {label: '4 Hours', value: '4'},
        {label: '5 Hours', value: '5'},
        {label: '6 Hours', value: '6'},
        {label: '7 Hours', value: '7'},
        {label: '8 Hours', value: '8'},
        {label: '9 Hours', value: '9'},
        {label: '10 Hours', value: '10'},
        {label: '11 Hours', value: '11'},
        {label: '12 Hours', value: '12'},
        {label: '13 Hours', value: '13'},
        {label: '14 Hours', value: '14'},
        {label: '15 Hours', value: '15'},
        {label: '16 Hours', value: '16'},
        {label: '17 Hours', value: '17'},
        {label: '18 Hours', value: '18'},
        {label: '19 Hours', value: '19'},
        {label: '20 Hours', value: '20'},
        {label: '21 Hours', value: '21'},
        {label: '22 Hours', value: '22'},
        {label: '23 Hours', value: '23'},
        {label: '24 Hours', value: '24'}
  ];

  function calculate() {
    
    if (weight == 0 || weight === ''){
      alert("Fill in your weight!");
    }
    else 
    
    { 
    let result = 0;
    let litres = bottless * 0.33;
    let grams = (litres * 8) * 4.5;
    let burningtime = weight / 10;
    let gramsleft = grams - burningtime * hours;

    if (gender === "male") {
      result = gramsleft / (weight * 0.7);
    } 
    
    else
     {
      result = gramsleft / (weight * 0.6);
    }
    if (result < 0) {
      setPromille(0.00);
    }
    else
    {
      setPromille(result);
    }
    
  }
}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weight</Text>
      <TextInput style={styles.input}
       onChangeText={text => setWeight(text)} 
      placeholder="Weight in kilograms" keyboardType='numeric' editable></TextInput>
     
      <Text style={styles.text}>Bottles</Text>
      <DropDownPicker zIndex={5000} labelStyle={{color: '#000'}}containerStyle={{height: 40}}
       items={bottlesList} onChangeItem={item => setBottless(item.value)} />
      
      <Text style={styles.text}>Hours</Text>
      <DropDownPicker zIndex={4000} labelStyle={{color: '#000'}} containerStyle={{height: 40}}
      items={hoursList} onChangeItem={item => setHours(item.value)} />
      
      <Text style={styles.text}>Gender</Text>
      <RadioForm radio_props={genders} initial={0} onPress={(value) => setGender(value)} />
      <Text style={styles.text}>Promills</Text>
      <Text style={styles.text}>{promilles.toFixed(2)}</Text>
      <Button style={styles.button} onPress={calculate} title="Calculate"  ></Button>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    textAlign: 'left',
    flex: 3,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 10,
    },
  text: {
    marginBottom: 2,
    marginTop: 3,
    
  },
  button: {
    backgroundColor: '#00aeef',
    
  },
  RadioForm:  {
    marginBottom: 2,
    marginTop: 3,

  }
});