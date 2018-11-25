import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Alert, Button } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons';



  export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {// estados en cero comienza la partida
        gameState: [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ],
        currentPlayer: 1
      }
    }
  
    componentDidMount() { 
      this.initializeGame();
    }
  
    initializeGame = () => {
      this.setState({ 
        gameState: [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ],
        currentPlayer: 1
      });
    }

    getWinner = () => {
      const NUM_TILES = 3;
      let arr = this.state.gameState;
      let sum;
      
      for(let i = 0; i < NUM_TILES; i++) {//filas
        sum = arr[i][0] + arr [i][1] + arr[i][2];
        if (sum == 3) {return 1;}
        else if (sum == -3) {return -1;}
      }
      
      for(let i = 0; i < NUM_TILES; i++) {//columnas
        sum = arr[0][i] + arr [1][i] + arr[2][i];
        if (sum == 3) {return 1;}
        else if (sum == -3) {return -1;}
      }
      
      sum = arr[0][0] + arr [1][1] + arr[2][2];// diagonal
        if (sum == 3) {return 1;}
        else if (sum == -3) {return -1;}
  
      sum = arr[2][0] + arr [1][1] + arr[0][2];
      if (sum == 3) {return 1;}
      else if (sum == -3) {return -1;}

      return 0;
    }
  
    onNewGamePress = () => {
      this.initializeGame ();
    }

    onTilePress = (row, col) => {
      
      let value = this.state.gameState[row][col];// permite seleccionar solo una vez la celda
       if (value != 0) {return;}
       
      
      let currentPlayer = this.state.currentPlayer;// pasa el estado del jugador en turno
  
      
      let arr = this.state.gameState.slice();
      arr[row][col] = currentPlayer;
      this.setState({gameState: arr});
  
      
      let nextPlayer = (currentPlayer == 1) ? -1 : 1;// estado del siguiente jugador
      this.setState({currentPlayer: nextPlayer});

    
      let winner = this.getWinner();// calcula el ganador
      if(winner == 1) {
        Alert.alert("¡El jugador 1 gano!");
        this.initializeGame(); 
      } else if (winner == -1) {
        Alert.alert("¡El jugador 2 gano!");
        this.initializeGame();
      } 
}

  
    renderIcon = (row, col) => { 
      let value = this.state.gameState[row][col];// filas y columnas
      switch(value) { 
        case 1: return  <Icon name="heart" style={styles.titleX}/>;
        case -1: return  <Icon name="star" style={styles.titleO}/>;
        default: return <View/>; 
      }
    }


  render() {
    return (
      <View style={styles.container}>
            <Text style={{paddingBottom:30, color:'#ffffff', fontSize:45}}> Super Tic-Tac-Toe</Text>
            
         
         <View style={{flexDirection: "row"}}>
            <TouchableOpacity onPress={() => this.onTilePress(0,0)} style={[styles.title, {borderLeftWidth:0, borderTopWidth:0}]}> 
            {this.renderIcon(0,0)} 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(0,1)} style={[styles.title, {borderTopWidth:0}]}>
            {this.renderIcon(0,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(0,2)} style={[styles.title, {borderRightWidth:0, borderTopWidth:0}]}>
            {this.renderIcon(0,2)}
            </TouchableOpacity>
         </View>
         
         <View style={{flexDirection: "row"}}>
            <TouchableOpacity onPress={() => this.onTilePress(1,0)} style={[styles.title, {borderLeftWidth:0}]}>
            {this.renderIcon(1,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(1,1)} style={styles.title}>
            {this.renderIcon(1,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(1,2)} style={[styles.title, {borderRightWidth:0}]}>
            {this.renderIcon(1,2)}
            </TouchableOpacity>
         </View>
         <View style={{flexDirection: "row"}}>
            <TouchableOpacity onPress={() => this.onTilePress(2,0)} style={[styles.title, {borderLeftWidth:0, borderBottomWidth:0}]}>
            {this.renderIcon(2,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(2,1)} style={[styles.title, {borderBottomWidth:0}]}>
            {this.renderIcon(2,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onTilePress(2,2)} style={[styles.title, {borderBottomWidth:0, borderRightWidth:0}]}>
            {this.renderIcon(2,2)}
            </TouchableOpacity>
         </View>
         <View style={{paddingTop: 30}}/>
         
        <Button style={styles.btn} title="Comienza el juego" onPress={this.onNewGamePress}/>    
    </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    borderWidth:6,
    width:100,
    height:100,
    borderColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  titleX: {
    color: "#ff5c33",
    fontSize: 60,
    justifyContent:"center",

  },
  titleO: {
    color: "#00ff99",
    fontSize: 60,
    justifyContent:"center",
  },

});