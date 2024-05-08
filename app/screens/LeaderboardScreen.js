import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text , ImageBackground } from 'react-native';


import colors from '../config/colors.js'
import background from '../assets/images/background.png'

const LeaderboardScreen = () => {
    return (
        <ImageBackground       
                source={background}
                style={styles.backgroundContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Leaderboard</Text>
                <Text style={styles.subTitleText}>Can you make it to the top?</Text>
            </View>
        </ImageBackground>       
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },
    
    titleContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 20,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'left,'
    },

    titleText: {
        color: colors.titles,
        fontSize: 32,
        marginLeft: 8,
        fontWeight: '900'
    },

    subTitleText: {
        color: colors.titles,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '500'
    },
})

export default LeaderboardScreen;
