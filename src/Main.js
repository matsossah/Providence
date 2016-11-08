import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Keyboard,
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import firebase from 'firebase';

import { Router, Scene, Actions } from 'react-native-router-flux';
import Backend from './firebase/Backend';

import Authentication from './components/Authentication/Authentication';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import Help from './components/Help';
import Reservation from './components/Reservation';
import Show from './components/Show';
import Home from './components/Home';
import HotelInfo from './components/Categories/HotelInfo';
import Experiences from './components/Categories/Experiences';
import Shopping from './components/Categories/Shopping';
import Food from './components/Categories/Food';
import Party from './components/Categories/Party';
import Art from './components/Categories/Art';
import Offers from './components/Categories/Offers';
import About from './components/HotelInfo/About';
import Bar from './components/HotelInfo/Bar';
import Wow from './components/Experiences/Wow';
import Urban from './components/Experiences/Urban';
import FoodLovers from './components/Experiences/Food';
import ArtCulture from './components/Experiences/Art';
import WithKids from './components/Kids/Kids';
import Showtime from './components/Experiences/Showtime';
import Chefs from './components/Food/Chefs';
import Chocolates from './components/Food/Chocolates';
import Gluten from './components/Food/Gluten';
import Pastries from './components/Food/Pastries';
import Seafood from './components/Food/Seafood';
import Street from './components/Food/Street';
import Vibes from './components/Food/Vibes';
import Concept from './components/Shopping/Concept';
import Men from './components/Shopping/Men';
import Tech from './components/Shopping/Tech';
import Design from './components/Shopping/Design';
import Private from './components/Shopping/Private';
import MultiBrands from './components/Shopping/MultiBrands';
import ShopKids from './components/Shopping/Kids';
import Pets from './components/Shopping/Pets';
import Cocktails from './components/Drinks/Cocktails';
import Wines from './components/Drinks/Wines';
import Pubs from './components/Drinks/Pubs';
import Clubs from './components/Drinks/Clubs';
import Museums from './components/Art/Museums';
import Galleries from './components/Art/Galleries';
import Walks from './components/Art/Walks';
import SmallMuseums from './components/Art/SmallMuseums';
import NavigationDrawer from './components/NavigationDrawer';

console.ignoredYellowBox = ['Warning'];

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontFamily: 'Avenir',
  },
  homeTitle: {
    color: 'white',
    fontFamily: 'Avenir',
  },
  backButton: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Avenir',
  },
  navBar: {
    backgroundColor: '#D0BA7F',
  },
  navbarButton: {
    height: 25,
    width: 25,
  },
  tallNavbarButton: {
    height: 24,
    width: 15,
  },
  closeButton: {
    height: 20,
    width: 20,
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    Backend.init();
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content');
    }
    this.popDismiss = this.popDismiss.bind(this);
  }
  popDismiss() {
    Actions.pop();
    dismissKeyboard();
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="authentication" component={Authentication} hideNavBar={true}/>
          <Scene key="signup" onBack={()=> this.popDismiss()} component={Signup} panHandlers={null} direction="vertical" title='Sign Up' hideNavBar={false} hideBackImage={true} backTitle={'CANCEL'} navigationBarStyle={styles.navBar} backButtonTextStyle={styles.backButton} titleStyle={styles.title}/>
          <Scene key="login" onBack={()=> this.popDismiss()} component={Login} panHandlers={null} direction="vertical" title='Login' hideNavBar={false} hideBackImage={true} backTitle={'CANCEL'} navigationBarStyle={styles.navBar} backButtonTextStyle={styles.backButton} titleStyle={styles.title}/>
          <Scene key="help" direction="vertical" panHandlers={null} component={Help} title='Help' hideNavBar={false} backButtonImage={require('./assets/hamburger.png')} hideBackImage={true} onBack={()=> Actions.authentication()} rightButtonImage={require('./assets/close.png')} onRight={()=> Actions.pop()} leftButtonStyle={styles.backButton} rightButtonIconStyle={styles.navbarButton} navigationBarStyle={styles.navBar} titleStyle={styles.homeTitle}/>
          <Scene key="reservation" direction="vertical" panHandlers={null} component={Reservation} title='Reservation' hideNavBar={false} backButtonImage={require('./assets/hamburger.png')} hideBackImage={true} onBack={()=> Actions.authentication()} rightButtonImage={require('./assets/close.png')} onRight={()=> this.popDismiss()} leftButtonStyle={styles.backButton} rightButtonIconStyle={styles.navbarButton} navigationBarStyle={styles.navBar} titleStyle={styles.homeTitle}/>
          <Scene key="show" component={Show} title='Info' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton}/>
          <Scene key="home" direction="vertical" panHandlers={null} component={Home} title='PROVIDENCE' hideNavBar={false} backButtonImage={require('./assets/hamburger.png')} hideBackImage={true} onBack={()=> Actions.home()} leftButtonStyle={styles.backButton} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} navigationBarStyle={styles.navBar} titleStyle={styles.homeTitle}/>
          <Scene key="hotelinfo" component={HotelInfo} title='Info & Services' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="about" component={About} title='About Us' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="bar" component={Bar} title='Bar & Restaurant' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="experiences" component={Experiences} title='Experiences' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="shopping" component={Shopping} title='Shopping' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="food" component={Food} title='Food' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="party" component={Party} title='Drinks & Nightlife' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="art" component={Art} title='Art & Culture' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="offers" component={Offers} title='Exclusive Offers' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="chefs" component={Chefs} title='Awesome Chefs' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="chocolates" component={Chocolates} title='Chocolates' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="gluten" component={Gluten} title='Gluten Free' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="pastries" component={Pastries} title='Pastries' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="seafood" component={Seafood} title='Seafood' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="street" component={Street} title='Street Food' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="vibes" component={Vibes} title='Great Vibes' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="wow" component={Wow} title='Wow Effect' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="urban" component={Urban} title='Urban & Underground' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="foodLovers" component={FoodLovers} title='Food Lovers' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="artCulture" component={ArtCulture} title='Art & Culture' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="withKids" component={WithKids} title='With Kids' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="showtime" component={Showtime} title='Show Time' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="men" component={Men} title='Men Only' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="concept" component={Concept} title='Concept Stores' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="tech" component={Tech} title='Tech Lovers' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="design" component={Design} title='Art & Design' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="private" component={Private} title='Private Shopping' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="multibrands" component={MultiBrands} title='MultiBrands' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="shopKids" component={ShopKids} title='Kids' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="pets" component={Pets} title='Pets' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="cocktails" component={Cocktails} title='Cocktail Bars' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="wines" component={Wines} title='Wine Bars' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="pubs" component={Pubs} title='Pubs' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="clubs" component={Clubs} title='Night Clubs' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="museums" component={Museums} title='Museums' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="galleries" component={Galleries} title='Galleries' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="walks" component={Walks} title='Walks & Talks' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
          <Scene key="smallmuseums" component={SmallMuseums} title='Small Yet Awesome' hideNavBar={false} navigationBarStyle={styles.navBar} backButtonImage={require('./assets/back.png')} leftButtonStyle={styles.backButton} titleStyle={styles.title} rightButtonImage={require('./assets/location.png')} onRight={()=> Actions.help()} rightButtonIconStyle={styles.tallNavbarButton} />
        </Scene>
      </Router>
    );
  }
}

export default Main;
