import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MainApp extends React.Component {

  constructor() {
    super();
    this.state={
      counter:0
    };

    this.helloPhrases = [
      'Hello World!',
      'Hola Mundo!',
      'Hallo Welt!',
      '你好，世界!',
      '안녕 지구촌!', 
      'नमस्ते विश्व!'
    ]
    
  }

  render() {
    let hello=-1;
    hello=setTimeout(()=>{
      this.setState({counter:this.state.counter+1})
    },1000);


    return (
      <View style={styles.container}>
        <View style={styles.view1}>
        <View style={styles.square1}>
          <Text style={styles.label1}>{this.helloPhrases[this.state.counter%6]}</Text>
         </View>
        </View>
        <View style={styles.view2}>
        <View style={styles.square2}>
        <Text style={styles.label2}>{this.helloPhrases[4]}</Text>
        </View>
        <View style={styles.square3}>
        <Text style={styles.label3}>{this.helloPhrases[3]}</Text>
        </View>
        </View>
        <View style={styles.view3}>
        <View style={styles.square4}>
        <Text style={styles.label4}>{this.helloPhrases[5]}</Text>
        </View>
        <View style={styles.square5}>
        <Text style={styles.label5}>{this.helloPhrases[1]}</Text>
        </View>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  view1: {
    flex:0.3,
    backgroundColor: 'grey',
    width: '90%',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  label1 : {
    fontSize: 44,
    color: 'pink',
   

  }, 
  view2: {
    flex: 0.2,
    backgroundColor: 'gray',
    width: '90%',
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection:'row'
  },
  view3: {
    flex: 0.1,
    width: '90%',
    backgroundColor: 'gray',
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection:'row',
  },
  square1:{
    flex:1,
    width: '80%',
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    margin: '8% 8% 8% 8%'
    
  },
  square2:{
    flex:1,
    backgroundColor: 'white',
    height:'65%',
    alignItems:'center',
    justifyContent:'center',
    margin:'5%'

  },
  square3:{
    flex:1,
    backgroundColor:'green',
    height:'65%',
    alignItems:'center',
    justifyContent:'center',
    margin:'5%'


  },
  square4:{
    flex:1,
    backgroundColor:'purple',
    height:'35%',
    alignItems:'center',
    justifyContent:'center',
    margin:'5%'

  },
  square5:{
    flex:1,
    backgroundColor:'yellow',
    height:'35%',
    alignItems:'center',
    justifyContent:'center',
    margin:'5%'



  },
  label2:{
    fontSize:20,
    color:'green'

  },
  label3:{
    fontSize:20,
    color:'white'

  },
  label4:{
    fontSize:15,
    color:'yellow'

  },
  label5:{
    fontSize:15,
    color:'purple'

  }


});

export default MainApp;
