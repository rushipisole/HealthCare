import React from "react";
import { Text, View, TextInput, ScrollView, StyleSheet } from "react-native";
import { Fonts, Sizes } from "../../constant/styles";
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const trendingsList = [
    'Homoeopath',
    'Gynecologist',
    'Pediatrician',
    'Physiotherapist',
    'Nutritionist',
    'Spine and Pain Specialist',
    'Dentist',
    'Cough & Fever',
    'Physiotherapist ',
    'Nutritionist ',
    'Spine and Pain Specialist ',
    'Dentist ',
    'Cough & Fever ',
];

const SearchScreen = ({ navigation }) => {

    const recentSearchList = ['Cough & Fever', 'Nutrition'];

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {header()}
            <ScrollView showsVerticalScrollIndicator={false}>
                {recentSearchesText()}
                {recentSearches()}
                {trendingText()}
                {trendings()}
            </ScrollView>
        </View>
    );

    function recentSearches() {
        return (
            recentSearchList.map((item) =>
                <View key={item} style={styles.recentSearchesListStyle}>
                    <MaterialIcons name="history" size={24} color="gray" />
                    <Text style={{ marginLeft: Sizes.fixPadding, fontSize: Sizes.fixPadding + 5.0, }}>{item}</Text>
                </View>
            )
        )
    }

    function trendingText() {
        return (
            <View style={styles.trendingTextContainerStyle}>
                <Text style={{ ...Fonts.black18Bold }}>Trending around you</Text>
            </View>
        )
    }

    function trendings() {
        return (
            trendingsList.map((item) =>
                <View key={item} style={styles.trendingListStyle}>
                    <MaterialCommunityIcons name="arrow-top-right" size={24} color="#5CB2F6" />
                    <Text style={{ marginLeft: Sizes.fixPadding, fontSize: Sizes.fixPadding + 5.0, }}>{item}</Text>
                </View>
            )
        )
    }

    function header() {
        return <View style={{
            backgroundColor: 'white', elevation: 4.0,
            height: 63.0, paddingHorizontal: Sizes.fixPadding * 2.0,
            justifyContent: 'center'
        }}>
            <View style={styles.searchContainerStyle}>
                <Ionicons name="search" size={24} color="gray" />
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder="Search for doctors & labs"
                        style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding, }}
                    />
                </View>
            </View>
        </View>
    }

    function recentSearchesText() {
        return (
            <View style={styles.recentSearchesContainerTextStyle}>
                <Text style={{ ...Fonts.black18Bold }}>Your reacnt searches</Text>
                <Text style={{ ...Fonts.primaryColorRegular }}>Show more</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchContainerStyle: {
        backgroundColor: '#F5F5F5',
        borderRadius: 30.0,
        height: 45.0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: Sizes.fixPadding + 5.0,
    },
    recentSearchesContainerTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        marginBottom: Sizes.fixPadding,
    },
    recentSearchesListStyle: {
        flexDirection: 'row',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding,
        alignItems: 'center'
    },
    trendingTextContainerStyle: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding,
        marginVertical: Sizes.fixPadding,
        justifyContent: 'center'
    },
    trendingListStyle: {
        flexDirection: 'row',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding,
        alignItems: 'center'
    }
})

export default SearchScreen;