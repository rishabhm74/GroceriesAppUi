import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  Dimensions,
  Button,
  Animated
} from 'react-native';


const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Routes = () => {
  const [ filterVisible, setFilterVisible ] = useState(false);
  
  const filterIn  = useRef(new Animated.Value(0)).current;
  const transformFilterIn = {
    transform: [{
      translateX: filterIn
    }]
  };
  const animateFilterIn = () => {
    Animated.timing(filterIn, {
      toValue: -SCREENWIDTH,
      duration: 500,
      useNativeDriver: true
    }).start()
  };
  const animateFilterOut = () => {
    Animated.timing(filterIn, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  };

  const listOut  = useRef(new Animated.Value(0)).current;
  const transformListOut = {
    transform: [{
      translateX: listOut
    }]
  };
  const animateListOut = () => {
    Animated.timing(listOut, {
      toValue: -SCREENWIDTH,
      duration: 500,
      useNativeDriver: true
    }).start()
  };
  const animateListIn = () => {
    Animated.timing(listOut, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  };



  const showList = () => {
    animateFilterIn();
    animateListOut();
  }

  const hideList = () => {
    animateFilterOut();
    animateListIn();
  }


  return (
    <View style={styles.mainContainer}>
      <StatusBar 
        translucent={true}
        barStyle="dark-content"
        backgroundColor="#ffffff00"
      />

      <View style={styles.pagesContainer}>

        <Animated.View 
          style={[styles.listContainer, 
            // right: filterVisible ? SCREENWIDTH : null 
            transformListOut
           ]}
        >
          <View style={styles.cardsContainer}>
            <Button 
              title="click"
              onPress={() => showList()}
            />
          </View>
          <View style={styles.cartContainer}>
            <View style={styles.cartNumberContainer} />
          </View>
        </Animated.View>

        <Animated.View 
          style={[styles.filterContainer, 
            // right: filterVisible ? SCREENWIDTH : null ,
            transformFilterIn
          ]}
        >
          <Button 
            title="click"
            onPress={() => hideList()}
          />
        </Animated.View>

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
    // backgroundColor: '#fff7dc',
    backgroundColor: 'red',
    width: SCREENWIDTH,
    // width: SCREENWIDTH * 0.9,
    height: SCREENHEIGHT + StatusBar.currentHeight,
    position: 'relative',
    flexDirection: 'column'
    // right: ( filterVisible ? SCREENWIDTH : null ),
    // paddingTop: StatusBar.currentHeight
  },
  filterContainer: {
    // backgroundColor: '#fff',
    backgroundColor: 'red',
    width: SCREENWIDTH,
    height: SCREENHEIGHT + StatusBar.currentHeight,
    position: 'relative',
    // right: ( filterVisible ? SCREENWIDTH : null )
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardsContainer: {
    width: SCREENWIDTH,
    height: (SCREENHEIGHT * 0.93),
    backgroundColor: '#fff7dc',
    // backgroundColor: '#ff00005b',
    borderBottomRightRadius: 38,
    borderBottomLeftRadius: 38,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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