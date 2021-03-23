import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  Dimensions,
  Button,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView
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
        // barStyle="light-content" // to be removed
        barStyle={ filterVisible ? "light-content"  : "dark-content"}
        backgroundColor="transparent"
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
                <Text style={styles.cardContainerTitleContainerText}>
                  Pasta & Noodles
                </Text>
              </View>
              <View style={styles.cardContainerTitleContainerRight}>
                <TouchableOpacity
                  onPress={() => showList()}
                >
                  <Image 
                    source={require('./assets/icons/filterSlider2.png')}
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
          <View style={styles.filterContainerTitleView}> 
            <View style={styles.backFilterScreenView}>
              <TouchableOpacity
                onPress={() => hideList()}
              >
                <Image 
                  style={styles.filterBackImg}
                  source={require('./assets/icons/chevronLeftWhite.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.filterContainerTitleTextView}>
              <Text style={styles.filterContainerTitleViewText}>
                Filters
              </Text>
            </View>
          </View>
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
  cardsContainer: {
    width: SCREENWIDTH,
    height: SCREENHEIGHT > 640 ? (SCREENHEIGHT * 0.93) : (SCREENHEIGHT * 0.87),
    backgroundColor: '#fdf9eb',
    borderBottomRightRadius: SCREENHEIGHT > 640 ? 38 : 28,
    borderBottomLeftRadius: SCREENHEIGHT > 640 ? 38 : 28
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
    paddingLeft: 18,
    // paddingTop: SCREENHEIGHT > 640 ? null : 13
    paddingTop: SCREENHEIGHT > 640 ? null : 13
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
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row'
  },
  cardContainerTitleContainerLeft: {
    width: '12%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  cardContainerTitleContainerCenter: {
    height: 60,
    width: '74%',
    justifyContent: 'center',
    paddingLeft: '7%'
  },
  cardContainerTitleContainerRight: {
    width: '14%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  filterIconImg: {
    height: SCREENHEIGHT > 640 ? 29 : 20,
    width: SCREENHEIGHT > 640 ?  29 : 20
  },
  backIconImg: {
    height: SCREENHEIGHT > 640 ? 30 : 25,
    width: SCREENHEIGHT > 640 ? 30 : 25
  },
  cardContainerTitleContainerText: {
    color: '#292929',
    fontSize: 19,
    fontFamily: 'Product Sans Bold 700'
  },
  filterContainer: {
    backgroundColor: '#000',
    width: SCREENWIDTH,
    height: SCREENHEIGHT + StatusBar.currentHeight,
    position: 'relative',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',

    // to be removed
    // marginLeft: -SCREENWIDTH
  },
  filterContainerTitleView: {
    width: SCREENWIDTH,
    height: 60 + StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  backFilterScreenView: {
    height: 60,
    width: '13%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  filterContainerTitleTextView: {
    height: 60,
    // backgroundColor: 'blue',
    width: '87%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: (SCREENWIDTH * 0.13)
  },
  filterBackImg: {
    height: SCREENHEIGHT > 640 ? 30 : 25,
    width: SCREENHEIGHT > 640 ? 30 : 25
  },
  filterContainerTitleViewText: {
    color: '#fff',
    fontFamily: 'Product Sans Medium 500',
    fontSize: 19,
    letterSpacing: 0.25
  }
  

})

export default Routes;