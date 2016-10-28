import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 310,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null,
    height: null,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  top: {
    flex: 1,
    paddingTop: 10,
  },
  topUsername: {
    flex: 1,
    paddingTop: 100,
  },
  bottom: {
    flex: 2,
    marginTop: 110,
  },
  formSubmit: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: 50,
  },
  input: {
    marginBottom: 10,
    height: 40,
    paddingLeft: 5,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(255,255,255, 0.6)',
    borderWidth: 1,
    fontWeight: 'bold',
    width: 250,
    alignSelf: 'center',
    fontSize: 14,
    color: 'white',
  },
  reservationInput: {
    marginBottom: 10,
    height: 40,
    paddingLeft: 5,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(208,186,127, 0.6)',
    borderWidth: 1,
    fontWeight: 'bold',
    width: 250,
    alignSelf: 'center',
    fontSize: 14,
    color: 'white',
  },
  label: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'chalkduster',
  },
  image: {
    marginTop: 20,
    marginBottom: 15,
    width: 80,
    height: 45,
  },
});
