import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, Linking, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ReservationImage from '../common/ReservationImage';
import RNCarousel from '../common/Carousel';
import ClickableImage from '../common/ClickableImage';
import Communications from 'react-native-communications';
import formStyles from '../common/FormStyles';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 60,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  title: {
    fontSize: 20,
    color: '#0B2D3A',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#0B2D3A',
  },
  info: {
    fontSize: 14,
    color: '#0B2D3A',
  },
  section: {
    fontSize: 16,
    color: '#0B2D3A',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  icon: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 6,
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
          <Text style={[styles.title, formStyles.font]}>{this.props.item.title}</Text>
          <Text style={[styles.subtitle, formStyles.font]}>{this.props.item.subtitle}</Text>
          <Text style={[styles.section, formStyles.font]}>Address </Text>
          <Text style={[styles.info, formStyles.font]}>{this.props.item.address}</Text>
          <Text style={[styles.section, formStyles.font]}>Openings</Text>
          <Text style={[styles.info, formStyles.font]}>{this.props.item.opened}</Text>
          <Text style={[styles.section, formStyles.font]}>Description</Text>
          <Text style={[styles.info, formStyles.font]}>{this.props.item.description}</Text>
          <Text style={[styles.section, formStyles.font]}>Prices</Text>
          <Text style={[styles.info, formStyles.font]}>{this.props.item.price}</Text>
        </View>

      </ScrollView>
      {this.props.item.reservation && <TouchableOpacity
        style={styles.submit}
        onPress={()=> Actions.reservation({item: this.props.item, title: this.props.item.title})}
      >
        <View style={styles.submit}>
          <Text style={[styles.submitText, formStyles.font]}>
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
