import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import IconLabel from './IconLabel';

const iconColor = '#6c5ce7';
const MealCard = ({ info }) => {
    const { name, categories, deliveryTime, distance, image } = info;

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={image} />
                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{name}</Text>
                    <Text style={styles.categoryStyle}>{categories}</Text>

                    <View style={styles.iconLabelStyle}>
                        <IconLabel name="ios-time" label={deliveryTime} color={iconColor} />
                        <IconLabel name="ios-pin" label={distance} color={iconColor} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: '#a29bfe',
        height: 200,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    iconLabelStyle: {
        flexDirection: 'row',
        marginTop: 10,
    },
});

export default MealCard;