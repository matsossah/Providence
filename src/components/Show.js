import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Dimensions, Linking, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ReservationImage from '../common/ReservationImage';
import Category from '../common/Category';
import RNCarousel from '../common/Carousel';
import ClickableImage from '../common/ClickableImage';
import DatePicker from 'react-native-datepicker';
import Communications from 'react-native-communications';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: '#F4E7CD',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4E7CD',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  body: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  footer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#D0BA7F',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#D0BA7F',
  },
  info: {
    fontSize: 14,
    color: '#D0BA7F',
  },
  section: {
    fontSize: 16,
    color: '#D0BA7F',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    width: 130,
    height: 35,
    borderWidth: 2,
    borderRadius: 17.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 6,

  },
  hotel: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  submit: {
    height: Dimensions.get('window').height / 12,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0BA7F',
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uberURL: 'uber://?client_id=eJCfG86Rz&action=setPickup&dropoff[latitude]=' + this.props.item.lat + '&dropoff[longitude]=' + this.props.item.long + '&dropoff[nickname]=' + this.props.item.title,
      appleMapsWalkingURL: 'http://maps.apple.com/?daddr=' + this.props.item.lat + ',' + this.props.item.long + '&dirflg=w',
      appleMapsTransitURL: 'http://maps.apple.com/?daddr=' + this.props.item.lat + ',' + this.props.item.long + '&dirflg=r',
      gmapsWalkingURL: 'comgooglemaps://?daddr=' + this.props.item.lat + ',' + this.props.item.long + '&directionsmode=walking',
      gmapsTransitURL: 'comgooglemaps://?daddr=' + this.props.item.lat + ',' + this.props.item.long + '&directionsmode=transit',
      isUberInstalled: false,
    };
  }
  componentWillMount() {
    Linking.canOpenURL(this.state.uberURL).then(isUberInstalled => {
        this.setState({ isUberInstalled });
    });
  }
  render() {
    return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <RNCarousel
          firstImage={this.props.item.image}
        />
        {
          //this.props.item.reservation ?
          //   <View style={styles.header}>
          //     <ReservationImage image={this.props.item.image} onPress={()=> Actions.reservation({item: this.props.item, title: 'Reservation Info'})} />
          //   </View>
          // :
          //   <View style={styles.header}>
          //     <Category image={this.props.item.image} onPress={console.log('hello')} />
          //   </View>
          //
        }
        <View style={styles.icons}>
          {(this.state.isUberInstalled) ?
            <ClickableImage onPress={() => Linking.openURL(this.state.uberURL)} image={require('../assets/uberLong.png')} imageStyle={styles.icon} />
          :
            <ClickableImage onPress={() => Communications.phonecall('+33141276699', true)} image={require('../assets/taxiLong.png')} imageStyle={styles.icon} />
          }
          {(Platform.os === 'ios') ?
            <ClickableImage onPress={() => Linking.openURL(this.state.appleMapsWalkingURL)} image={require('../assets/walkLong.png')} imageStyle={styles.icon} />
          :
            <ClickableImage onPress={() => Linking.openURL(this.state.gmapsWalkingURL)} image={require('../assets/walkLong.png')} imageStyle={styles.icon} />
          }
          {(Platform.os === 'ios') ?
            <ClickableImage onPress={() => Linking.openURL(this.state.appleMapsTransitURL)} image={require('../assets/publicLong.png')} imageStyle={styles.icon} />
          :
            <ClickableImage onPress={() => Linking.openURL(this.state.gmapsTransitURL)} image={require('../assets/publicLong.png')} imageStyle={styles.icon} />
          }
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{this.props.item.title}</Text>
          <Text style={styles.subtitle}>{this.props.item.subtitle}</Text>
          <Text style={styles.section}>* Address *</Text>
          <Text style={styles.info}>{this.props.item.address}</Text>
          <Text style={styles.section}>* Openings *</Text>
          <Text style={styles.info}>{this.props.item.opened}</Text>
          <Text style={styles.section}>* Description *</Text>
          <Text style={styles.info}>{this.props.item.description}</Text>
          <Text style={styles.section}>* Prices *</Text>
          <Text style={styles.info}>{this.props.item.price}</Text>
        </View>

      </ScrollView>
      {this.props.item.reservation && <TouchableOpacity
        style={styles.submit}
        onPress={()=> Actions.reservation({item: this.props.item, title: this.props.item.title})}
      >
        <View style={styles.submit}>
          <Text style={styles.submitText}>
            MAKE A RESERVATION
          </Text>
        </View>
      </TouchableOpacity>
      }
    </View>
    );
  }
}

Show.propTypes = {
  item: PropTypes.any.isRequired,
};

export default Show;
