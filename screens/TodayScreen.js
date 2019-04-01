import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground
} from 'react-native';
import TodaySection from '../components/TodaySection'
import background from '../assets/images/nature.jpg'

export default class TodayScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.scrollWrapper}>
            <ScrollView
              horizontal
              decelerationRate="normal"
              contentContainerStyle={styles.scrollChildrenContainer}
              showsHorizontalScrollIndicator={false}
              style={styles.scroll}
            >
              <TodaySection
                title="Meditate"
                iconName="md-bonfire"
                color="#28bd8e"
                suggestedTitle="Building Positivity."
                suggestedGradient={['rgba(40, 189, 142, 0.8)', 'rgba(45, 134, 210, 0.8)']} />
              <TodaySection
                title="Health"
                iconName={this.crossPlatformIcon('heart')}
                color="#fa676c"
                suggestedTitle="Go for a walk."
                suggestedGradient={['rgba(246, 104, 110, 0.8)', 'rgba(46, 129, 208, 0.8)']}
              />
              <TodaySection
                title="Hope"
                iconName="ios-sunny"
                color="#546ce2"
                suggestedTitle="Add an uplifting picture or quote."
                suggestedGradient={['rgba(83, 81, 188, 0.8)', 'rgba(42, 128, 208, 0.8)']} />
              <TodaySection
                title="Thoughts"
                iconName="ios-paper"
                color="#45b1f9"
                suggestedTitle="Complete a Basic thought entry."
                suggestedGradient={['rgba(67, 153, 232, 0.8)', 'rgba(106, 196, 235, 0.8)']}
              />
              <TodaySection
                title="Goals"
                iconName={this.crossPlatformIcon('flash')}
                color="#ff8971"
                suggestedTitle="Complete a challenge to do with others."
                suggestedGradient={['rgba(217, 126, 105, 0.8)', 'rgba(216, 90, 97, 0.8)']} />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
  }

  crossPlatformIcon(iconName) {
    return Platform.ios ? 'ios-' + iconName : 'md-' + iconName
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollWrapper: {
    height: '100%'
  },
  scrollChildrenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  text: {
    marginLeft: 3,
    marginRight: 3
  }
});
