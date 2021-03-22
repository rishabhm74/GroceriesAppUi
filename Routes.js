import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  Dimensions,
  Button
} from 'react-native';


const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Routes = () => {
  const [ filterVisible, setFilterVisible ] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <StatusBar 
        translucent={true}
        barStyle="dark-content"
        backgroundColor="#ffffff00"
      />

      <View style={styles.pagesContainer}>

        <View 
          style={[styles.listContainer, { 
            right: filterVisible ? SCREENWIDTH : null 
           }]}
        >
          <View style={styles.cardsContainer}>

          </View>
          <View style={styles.cartContainer}>
            <View style={styles.cartNumberContainer} />
          </View>
        </View>

        <View 
          style={[styles.filterContainer, {
            right: filterVisible ? SCREENWIDTH : null ,
          }]}
        >

        </View>

      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    height: SCREENHEIGHT,
    width: SCREENWIDTH,
    backgroundColor: '#fff',
    flex: 1
  },
  pagesContainer: {
    height: SCREENHEIGHT + StatusBar.currentHeight,
    width: SCREENWIDTH,
    backgroundColor: '#fff7dc',
    flexDirection: 'row'
  },
  listContainer: {
    backgroundColor: '#fff7dc',
    width: SCREENWIDTH,
    height: SCREENHEIGHT + StatusBar.currentHeight,
    position: 'relative',
    flexDirection: 'column'
    // right: ( filterVisible ? SCREENWIDTH : null ),
    // paddingTop: StatusBar.currentHeight
  },
  filterContainer: {
    backgroundColor: '#fff',
    width: SCREENWIDTH,
    height: SCREENHEIGHT + StatusBar.currentHeight,
    position: 'relative',
    // right: ( filterVisible ? SCREENWIDTH : null )
    paddingTop: StatusBar.currentHeight
  },
  cardsContainer: {
    width: SCREENWIDTH,
    height: (SCREENHEIGHT * 0.93),
    backgroundColor: '#fff7dc',
    // backgroundColor: '#ff00005b',
    borderBottomRightRadius: 38,
    borderBottomLeftRadius: 38,
    zIndex: 1
  },
  cartContainer: {
    width: SCREENWIDTH,
    height:  SCREENHEIGHT * 0.2,
    // backgroundColor: '#130e0e49',
    backgroundColor: 'black',
    position: 'relative',
    top: -((SCREENHEIGHT *  0.2)/3.1),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 18
  },
  cartNumberContainer: {
    height: 60,
    width: 60,
    backgroundColor: '#fdbc3f',
    borderRadius: 70,
    
  }
})

export default Routes;