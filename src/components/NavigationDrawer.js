import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

class NavigationDrawer extends React.Component {
  render() {
    let navigationState = this.props.navigationState;

    // let NavigationButton = MKButton.coloredFlatButton()
    //     .withBackgroundColor(MKColor.Transparent)
    //     .withRippleColor(veryTransparent(MKColor.Orange))
    //     .withMaskColor(veryTransparent(MKColor.Orange))
    //     .withStyle({
    //         borderRadius: 0,
    //     })
    //     .build();

    let DrawerPanel =  (
        <View style={styles.container}>
            <Text>...</Text>
        </View>
    );

    return (
        <Drawer
            ref="navigation"
            type="overlay"
            content={DrawerPanel}
            open={navigationState.open}
            tapToClose={true}
            onOpen={() => Actions.refresh({key:navigationState.key, open: true})}
            onClose={() => Actions.refresh({key:navigationState.key, open: false})}
            onOpenStart={() => StatusBar.setBarStyle('default', true)}
            onCloseStart={() => StatusBar.setBarStyle('light-content', true)}
            openDrawerOffset={0.31}
            panCloseMask={0.2}
            closedDrawerOffset={0}
            styles={{
                drawer: {
                    shadowRadius: 3,
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.23,
                    shadowColor: 'black',
                    elevation: 6,
                    backgroundColor: 'white',
                }
            }}
            elevation={6}
            tweenHandler={
                (ratio) => ({
                    main: {
                        opacity:(2-ratio)/2,
                    }
                })
            }
        >
            <DefaultRenderer navigationState={navigationState.children[0]} onNavigate={this.props.onNavigate} />
        </Drawer>
    );
  }
}

const propTypes = {
  navigationState: PropTypes.object,
};

NavigationDrawer.propTypes = propTypes;

export default NavigationDrawer;
