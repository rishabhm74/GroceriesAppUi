import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  Dimensions,
  Button,
  Animated,
  TouchableOpacity,
  Image
} from 'react-native';


const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Routes = () => {
  const [ cartVisible, setCartVisible ] = useState(false);
  const [ filterVisible, setFilterVisible ] = useState(false);
  
  const filterIn  = useRef(new Animated.Value(0)).current;
  const transformFilterIn = {
    transform: [{
      translateX: filterIn
    }]
  };
  const animateFilterIn = () => {
    Animated.timing(filterIn, {
      toValue: -(SCREENWIDTH),
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

  const cardUp  = useRef(new Animated.Value(0)).current;
  const transformCardUp = {
    transform: [{
      translateY: cardUp
    }]
  };
  const animateCardUp = () => {
    Animated.timing(cardUp, {
      toValue: -(SCREENHEIGHT * 0.65),
      duration: 500,
      useNativeDriver: true
    }).start()
  };
  const animateCardDown = () => {
    Animated.timing(cardUp, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  };

  const cartListUp  = useRef(new Animated.Value(0)).current;
  const transformCartListUp = {
    transform: [{
      translateY: cartListUp
    }]
  };
  const animateCartListUp = () => {
    Animated.timing(cartListUp, {
      toValue: -(SCREENHEIGHT * 0.65),
      duration: 500,
      useNativeDriver: true
    }).start()
  };
  const animateCartListDown = () => {
    Animated.timing(cartListUp, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  };


  const showList = () => {
    animateFilterIn();
    animateListOut();
    setFilterVisible(true);
  };

  const hideList = () => {
    animateFilterOut();
    animateListIn();
    setFilterVisible(false);
  };

  const showCart = () => {
    animateCardUp();
    animateCartListUp();
  };

  const hideCart = () => {
    animateCardDown();
    animateCartListDown();
  }

  const cartControl = () => {
    if ( cartVisible == false ) {
      showCart();
      setCartVisible(true)
    }
    if ( cartVisible == true ) {
      hideCart();
      setCartVisible(false)
    }
  }




  return (
    <View style={styles.mainContainer}>
      <StatusBar 
        translucent={true}
        barStyle={ filterVisible ? "light-content"  : "dark-content"}
        backgroundColor="#ffffff00"
      />

      <View style={styles.pagesContainer}>

        {/* listContainer starts */}
        <Animated.View 
          style={[styles.listContainer, 
            transformListOut
           ]}
        >
          {/* cardsContainer starts */}
          <Animated.View 
            style={[styles.cardsContainer,
              transformCardUp
            ]}
          >
            <View style={styles.cardContainerTitleContainer}>
              <View style={styles.cardContainerTitleContainerLeft}>
                <Image 
                  source={require('./assets/icons/chevronLeft.png')}
                  style={styles.backIconImg}
                />
              </View>
              <View style={styles.cardContainerTitleContainerCenter}>

              </View>
              <View style={styles.cardContainerTitleContainerRight}>
                <TouchableOpacity
                  onPress={() => showList()}
                >
                  <Image 
                    source={require('./assets/icons/filterSlider1.png')}
                    style={styles.filterIconImg}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
          {/* cardsContainer ends */}

          {/* cartContainer starts */}
          <Animated.View 
            style={[styles.cartContainer,
              transformCartListUp
          ]}
          > 
            <View style={styles.cartContainerTitleView}>
              <TouchableOpacity
                onPress={() => cartControl()}
              >
                <View style={styles.cartCountView} />
              </TouchableOpacity>
            </View>
          </Animated.View>
          {/* cartContainer ends */}

        </Animated.View>
        {/* listContainer ends */}

        {/* filterContainer starts */}
        <Animated.View 
          style={[styles.filterContainer, 
            transformFilterIn
          ]}
        >
          <Button 
            title="click"
            onPress={() => hideList()}
          />
        </Animated.View>
        {/* filterContainer ends */}

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
    backgroundColor: '#fff9e4',
    flexDirection: 'row'
  },
  listContainer: {
    backgroundColor: '#000',
    width: SCREENWIDTH,
    height: SCREENHEIGHT + StatusBar.currentHeight,
    position: 'relative',
    flexDirection: 'column',
  },
  filterContainer: {
    backgroundColor: '#000',
    width: SCREENWIDTH,
    height: SCREENHEIGHT + StatusBar.currentHeight,
    position: 'relative',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardsContainer: {
    width: SCREENWIDTH,
    height: (SCREENHEIGHT * 0.93),
    backgroundColor: '#fff9e4',
    borderBottomRightRadius: 38,
    borderBottomLeftRadius: 38,
  },
  cartContainer: {
    width: SCREENWIDTH,
    backgroundColor: 'black',
    height: (SCREENHEIGHT * 0.7) + StatusBar.currentHeight,
  },
  cartContainerTitleView: {
    width: SCREENWIDTH,
    height: (SCREENHEIGHT * 0.07) + StatusBar.currentHeight,
    backgroundColor: '#000',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 18,
    paddingLeft: 18
  },
  cartCountView: {
    height: SCREENHEIGHT * 0.08,
    width: SCREENHEIGHT * 0.08,
    backgroundColor: '#fdbc3f',
    borderRadius: SCREENHEIGHT
  },
  cardContainerTitleContainer: {
    width: SCREENWIDTH,
    height: 60 + StatusBar.currentHeight,
    // backgroundColor: 'red',
    paddingTop: StatusBar.currentHeight,
    // borderBottomWidth: 2,
    flexDirection: 'row'
  },
  cardContainerTitleContainerLeft: {
    width: '12%',
    height: 60,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  cardContainerTitleContainerCenter: {
    height: 60,
    width: '73%',
    // backgroundColor: 'blue'
  },
  cardContainerTitleContainerRight: {
    width: '15%',
    height: 60,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  filterIconImg: {
    height: 35,
    width: 35
  },
  backIconImg: {
    height: 32,
    width: 32
  }
  

})

export default Routes;