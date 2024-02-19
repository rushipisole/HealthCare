import React from "react";
import { Text, View, StatusBar, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet from 'react-native-simple-bottom-sheet';

const userList = [
    {
        id: '1',
        image: require('../../assets/images/user/user_1.jpg'),
        name: 'Ersel',
        date: 'August 2020',
        review: 'Really good doctor.',
    },
    {
        id: '2',
        image: require('../../assets/images/user/user_2.jpg'),
        name: 'Jane',
        date: 'August 2020',
        review: 'Great doctor i have ever seen.',
    },
    {
        id: '3',
        image: require('../../assets/images/user/user_3.jpg'),
        name: 'Apollonia',
        date: 'July 2020',
        review: 'Excellent',
    }
];

const { width, height } = Dimensions.get('screen');

const DoctorProfileScreen = ({ navigation, route }) => {

    const name = route.params.name;
    const type = route.params.type;
    const image = route.params.image;
    const rating = route.params.rating;
    const experience = route.params.experience;

    const renderContent = () => (
        <View style={styles.bottomSheetContainerStyle}>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Text style={{ ...Fonts.gray15Regular, marginBottom: Sizes.fixPadding }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tincidunt velit. Proin felis leo, porttitor at sollicitudin vel, lacinia vel libero. Etiam iaculis dui felis, in faucibus felis varius vitae. Nunc a laoreet justo.
                        </Text>
                        {titleInfo({ title: "Experience" })}
                        {descriptionInfo({ description: `${experience} Years` })}
                        {titleInfo({ title: "Availability" })}
                        {descriptionInfo({ description: '8:00 AM - 10:30PM' })}
                        {titleInfo({ title: "Location" })}
                        {mapInfo()}
                        {titleInfo({ title: "Review" })}
                    </View>
                }
                data={userList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => (
                    <View style={{
                        ...styles.userInfoContainerStyle,
                        marginTop: item.id == '1' ? Sizes.fixPadding : 0.0
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Image
                                source={item.image}
                                style={{ width: 80.0, height: 80.0, borderRadius: 40.0, }}
                                resizeMode="contain"
                            />
                            <View style={{ marginLeft: Sizes.fixPadding * 2.0 }}>
                                <Text style={{ ...Fonts.black16Bold }}>{item.name}</Text>
                                <Text style={{ ...Fonts.gray14Regular }}>{item.date}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Sizes.fixPadding - 5.0 }}>
                                    <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                                    <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                                    <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                                    <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                                    <FontAwesome name="star" size={18} color="#CDDC39" style={{ marginRight: Sizes.fixPadding - 5.0 }} />
                                </View>
                            </View>
                        </View>
                        <Text style={{ ...Fonts.black16Regular, marginTop: Sizes.fixPadding }}>
                            {item.review}
                        </Text>
                    </View>
                )}
                ListFooterComponent={
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.showAllReviewButtonStyle}
                        onPress={() => navigation.push('Review')}
                    >
                        <Text style={{ ...Fonts.primaryColorBold }}>Show all  reviews</Text>
                    </TouchableOpacity>
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0, }}
            />
        </View>
    );

    const sheetHeader = () => (
        <View style={styles.sheetHeaderContainer}>
            <Text>
                Hello</Text>
        </View>
    );


    return (
        <View style={{ flex: 1, backgroundColor: '#151C48' }}>
            <StatusBar translucent={false} backgroundColor="#151C48" />
            {backArrow()}
            {doctorInfo()}
            <BottomSheet
                isOpen={false}
                sliderMinHeight={height - 380}
                sliderMaxHeight={height - 150}
                lineContainerStyle={{ height: 0.0, }}
                lineStyle={styles.sheetIndicatorStyle}
                wrapperStyle={{ ...styles.bottomSheetWrapStyle, }}
            >
                {renderContent()}
            </BottomSheet>
        </View>
    )

    function backArrow() {
        return (
            <AntDesign name="arrowleft" size={24} color="white" style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding }}
                onPress={() => navigation.goBack()}
            />
        )
    }

    function doctorInfo() {
        return (
            <View>
                <View style={{ alignSelf: 'baseline', position: 'absolute', left: 20.0, top: width / 3.9, }}>
                    <Text numberOfLines={2} style={{ ...Fonts.white17Bold, }}>{name.substring(3, name.length)}</Text>
                    <Text style={{ ...Fonts.white16Regular, marginVertical: Sizes.fixPadding }}>{type}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="star" size={20} color="#CDDC39" />
                        <Text style={{ ...Fonts.white16Regular, marginLeft: Sizes.fixPadding }}>{rating} Rating</Text>
                    </View>
                </View>

                <View style={{ position: 'absolute', right: 20.0, }}>
                    <Image source={image}
                        resizeMode="contain"
                        style={{ overflow: 'hidden', height: 360.0, width: 210 }}
                    />
                </View>
            </View>
        )
    }

    function titleInfo({ title }) {
        return <Text style={{ ...Fonts.black18Bold, marginTop: Sizes.fixPadding }}>{title}</Text>
    }

    function descriptionInfo({ description }) {
        return <Text style={{ ...Fonts.gray15Regular, marginVertical: Sizes.fixPadding }}>{description}</Text>
    }

    function mapInfo() {
        return (
            <View style={styles.mapWrapStyle}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ height: 250.0, }}
                    initialRegion={{
                        latitude: 37.33233141,
                        longitude: -122.0312186,
                        latitudeDelta: 0.10,
                        longitudeDelta: 0.10,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: 37.33233141, longitude: -122.0312186 }}
                        pinColor={"red"}
                    />
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapWrapStyle: {
        borderRadius: Sizes.fixPadding,
        marginVertical: Sizes.fixPadding,
        overflow: 'hidden',
        elevation: 3.0,
    },
    contentContainerStyle: {
        padding: 16,
        backgroundColor: '#F3F4F9',
    },
    userInfoContainerStyle: {
        borderWidth: 1.0,
        borderColor: Colors.lightGray,
        padding: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding * 2.0,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 1.0,
        backgroundColor: 'white',
        marginBottom: Sizes.fixPadding * 2.0,
    },
    bottomSheetContainerStyle: {
        backgroundColor: 'white',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding * 2.0,
        borderTopRightRadius: Sizes.fixPadding * 2.5,
        borderTopLeftRadius: Sizes.fixPadding * 2.5,
    },
    doctorInfoContainerStyle: {
        alignItems: "center",
        flexDirection: 'row',
        marginHorizontal: Sizes.fixPadding * 2.0
    },
    header: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: Sizes.fixPadding * 2.0,
        borderTopLeftRadius: Sizes.fixPadding * 2.0,
        borderTopRightRadius: Sizes.fixPadding * 2.0
    },
    panelHandle: {
        width: 40,
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 4
    },
    item: {
        padding: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        marginVertical: Sizes.fixPadding,
    },
    sheetIndicatorStyle: {
        width: 0,
        height: 1.0,
    },
    bottomSheetWrapStyle: {
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: 0.0,
    },
    showAllReviewButtonStyle: {
        height: 47.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.primary,
        borderWidth: 1.0,
        backgroundColor: 'white',
        borderRadius: Sizes.fixPadding + 5.0,
    }
});

export default DoctorProfileScreen;