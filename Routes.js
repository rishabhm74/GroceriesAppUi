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
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  listContainer: {
    backgroundColor: '#fff',
    width: SCREENWIDTH,
    height: SCREENHEIGHT + StatusBar.currentHeight,
    position: 'relative',
    // right: ( filterVisible ? SCREENWIDTH : null ),
    paddingTop: StatusBar.currentHeight
  },
  filterContainer: {
    backgroundColor: '#fff',
    width: SCREENWIDTH,
    height: SCREENHEIGHT + StatusBar.currentHeight,
    position: 'relative',
    // right: ( filterVisible ? SCREENWIDTH : null )
    paddingTop: StatusBar.currentHeight
  }
})

export default Routes;