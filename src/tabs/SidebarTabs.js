import React from 'react';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: { position: 'absolute', top: 0 },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    margin: 5,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 200,
    backgroundColor: 'black',
  },
});

const SidebarTabs = ({ navigation, descriptors }) => {
  const { routes, index } = navigation.state;

  return (
    <View style={styles.tabContainer}>
        {routes.map((route, tabIndex) => {
            const { routeName, params } = route;
            const { icon, tabName } = params || {};
            const color = tabIndex === index ? 'white' : 'grey';

            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate(routeName)}
                    style={styles.tab}
                    key={route.routeName}
                >
                    <FontAwesome name={icon} size={24} color={color} style={{ marginRight: 10 }} />
                    <View style={{ flex: 1, }}>
                        <Text style={{ color }}>
                            {tabName}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        })}
    </View>
  );
};

export default SidebarTabs;

