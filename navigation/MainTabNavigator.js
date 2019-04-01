import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TodayScreen from '../screens/TodayScreen';

const TodayStack = createStackNavigator({
  Today: TodayScreen
});

TodayStack.navigationOptions = {
  tabBarLabel: 'Today',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-happy'
          : 'md-happy'
      }
      size={24}
    />
  )
};

const DiscoverStack = createStackNavigator({
  Discover: () => null,
});

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-navigate'}
      size={24}
    />
  )
}

const ProgressStack = createStackNavigator({
  Progress: () => null,
});

ProgressStack.navigationOptions = {
  tabBarLabel: 'Progress',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-stats'
          : 'md-stats'
      }
      size={24}
    />
  ),
};

const GuidedPathsStack = createStackNavigator({
  GuidedPaths: () => null,
});

GuidedPathsStack.navigationOptions = {
  tabBarLabel: 'GuidedPaths',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        'ios-bookmarks'
      }
      size={24}
    />
  ),
};

const CommunityStack = createStackNavigator({
  Community: () => null,
});

CommunityStack.navigationOptions = {
  tabBarLabel: 'Community',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        'ios-chatboxes'
      }
      size={24}
    />
  ),
};

export default createBottomTabNavigator({
  TodayStack,
  DiscoverStack,
  ProgressStack,
  GuidedPathsStack,
  CommunityStack
}, {
    tabBarOptions: {
      style: {
        backgroundColor: 'black',
      }
    }
  });