import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  Button,
  ToastAndroid
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText,BK } from '../components/StyledText';
import { yellow } from '../node_modules/ansi-colors';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      {this._maybeRenderDevelopmentModeWarning()}

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            {/*<Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />*/}
          </View>

          <View style={styles.row}>
          <Button title="click" style={styles.btn} onPress={this._handleclick}></Button>
          <TouchableOpacity>
            <Text style={styles.title}>
            Programming Languages
            </Text>
          </TouchableOpacity>
          <Text style={styles.child}>
          C/C++, Java, Python, Objective-C, Nodejs, Reactjs, Ruby, and much more
          </Text>
          
          </View>

          <View style={styles.row}>

          <Text style={styles.title}>
          Courses
          </Text>

          <Text style={styles.child}>
          Computer Basics, Advnace Excel, Photoshop, Web Designing, Web scrapping
          </Text>  
          </View>

          <View style={styles.row}>

          <Text style={styles.title}>
          for Colleges
          </Text>

          <Text style={styles.child}>
          BCA/BCA/Btech(CSE) all subjects
          </Text>  
          </View>


          <View style={styles.row}>
          <Text style={styles.title}>
          for School
          </Text>

          <Text style={styles.child}>
          Informatic Practice(IP), Computer Science
          </Text>  
          </View>

          <View style={styles.row}>
          <Text style={styles.title}>
          Home Tuition
          </Text>

          <Text style={styles.child}>
          Home Tuition is available for all over delhi
          </Text>  
          </View>
              

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload dsflkj sdlfkj  sdflkj l dslkfj dslkf lsd.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>
    );
  }
  _handleclick=()=>{
    <ToastAndroid></ToastAndroid>

  };
  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <View style={styles.topheader}>
          <Text style={styles.developmentModeText}>
          <BK >NiXiS InstitutE </BK>
        </Text>
        </View>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    paddingTop:0,
    flex: 1,
    backgroundColor: '#fff',
  },
btn:{
backgroundColor:'red',
color:'red',
},
  topheader:{
    backgroundColor:'red',
    height:65,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 10,
      },
    })

  },

  developmentModeText: {
    marginTop: 30,
    color: 'white',
    fontSize: 25,
    /*fontWeight: 'bold',*/
    lineHeight: 30,
    textAlign: 'center',
    
  },
  contentContainer: {
    paddingTop: 5,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  child:{
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 30,
    textAlign: 'center',
    marginLeft:15,
  },
  title:{
    alignItems:'center',
    color: 'rgba(96,100,109, 1)',
    fontSize:20,
    fontWeight:'bold',
  },
  row:{
    marginHorizontal:10,
    alignItems:'center',
    marginTop:10,
    
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
