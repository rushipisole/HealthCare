import React, { useEffect, useRef, useState, } from "react";
import {
    Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, ImageBackground,
    Image, TouchableHighlight, TouchableOpacity,
    Dimensions,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Fonts, Colors, Sizes } from "../../constant/styles";
import RBSheet from "react-native-raw-bottom-sheet";
import { event } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const specialistsList = [
    {
        id: '1',
        name: 'Booking',
        image: require('../../assets/images/icons/patient.png'),
    },
    {
        id: '2',
        name: 'Video Conferencing ',
        image: require('../../assets/images/icons/stethoscope.png'),
    },
    {
        id: '3',
        name: 'Camp',
        image: require('../../assets/images/icons/woman.png'),
    },
    {
        id: '4',
        name: 'Medical',
        image: require('../../assets/images/icons/pediatrician.png'),
    },
    {
        id: '5',
        name: 'Lab',
        image: require('../../assets/images/icons/physiotherapist.png'),
    },
    {
        id: '6',
        name: 'Surgery',
        image: require('../../assets/images/icons/nutritionist.png'),
    },
    {
        id: '7',
        name: 'Insurence',
        image: require('../../assets/images/icons/pain.png'),
    },
];

const labAndCheckUpList = [
    {
        id: '1',
        labName: 'New York City DOHMH Public Health Laboratory',
        labAddress: '455 1st Avenue, New York, NY 10016, United States',
        image: require('../../assets/images/lab/lab_1.jpg')
    },
    {
        id: '2',
        labName: 'Enzo Clinical Labs-Upper East Side (STAT Lab)',
        labAddress: '44 E 67th St, New York, NY 10022, United States',
        image: require('../../assets/images/lab/lab_2.jpg')
    },
    {
        id: '3',
        labName: 'New York Startup \n Lab LLC',
        labAddress: '244 5th Ave #2575, New York, NY 10001, United States',
        image: require('../../assets/images/lab/lab_3.jpg')
    },
    {
        id: '4',
        labName: 'MEDTRICS LAB \n LLC',
        labAddress: '138 W 25th St 10th floor, New York, NY 10001, United States',
        image: require('../../assets/images/lab/lab_4.jpg')
    },
    {
        id: '5',
        labName: 'Enzo Clinical \n Labs',
        labAddress: '15005 21st Ave ,Flushing, NY 11357, United States',
        image: require('../../assets/images/lab/lab_5.jpg')
    },
    {
        id: '6',
        labName: 'Shiel \n Medical',
        labAddress: '128 Mott St,New York, NY 10013,United States',
        image: require('../../assets/images/lab/lab_6.jpg')
    },
];

const insurencelist = [
    {
        id: '1',
        insurenceName: 'Rn-doctorPro Insurence',
        insurenceInfo: 'Insurence your famiy for upto 6 cr*',
        insurenceimage: require('../../assets/images/insurance/first.jpg'),
        insurenceprice: 'Start @Rs. 500/Month'
    },
    {
        id: '2',
        insurenceName: 'Sampoorna Raksha Supreme',
        insurenceInfo: 'Life cover up to Rs 1 cr*',
        image: require('../../assets/images/insurance/first.jpg'),
        insurenceprice: 'Start @Rs. 500/Month'
    },
]
const healthCheckupList = [
    {
        id: '1',
        testName: 'Diabetes tests',
        // testInfo: 'Insurence your famiy for upto 6 cr*',
        testimage: require('../../assets/images/HealthCareImages/Diabetes.jpg'),
        testprice: 'Start from ₹150'
    },
    {
        id: '2',
        testName: 'Cancer Marker Checkup',
        // testInfo: 'Insurence your famiy for upto 6 cr*',
        testimage: require('../../assets/images/HealthCareImages/Cancer.jpg'),
        testprice: 'Checkups at ₹2199'
    },

    {
        id: '3',
        testName: 'Tests for Skin Issues',
        // testInfo: 'Insurence your famiy for upto 6 cr*',
        testimage: require('../../assets/images/HealthCareImages/Skin.jpg'),
        testprice: 'Start from ₹160'
    },
    {
        id: '3',
        testName: 'Sexual Wellness tests',
        // testInfo: 'Insurence your famiy for upto 6 cr*',
        testimage: require('../../assets/images/HealthCareImages/Sexual.jpg'),
        testprice: 'Start from ₹100'
    },
    {
        id: '5',
        testName: 'Tests for Bones & Joint Issues',
        // testInfo: 'Insurence your famiy for upto 6 cr*',
        testimage: require('../../assets/images/HealthCareImages/Bone.png'),
        testprice: 'Start from ₹147'
    },
    {
        id: '3',
        testName: 'Tests for Fever',
        // testInfo: 'Insurence your famiy for upto 6 cr*',
        testimage: require('../../assets/images/HealthCareImages/Fever.jpg'),
        testprice: 'Start from ₹200'
    },


]

const HomeScreen = ({ navigation }) => {



    const renderItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('LabTestAndCheckUp', {
                image: item.image, name: item.labName, address: item.labAddress
            })}
            style={styles.labAndCheckUpContainer}
        >
            <Image
                source={item.image}
                style={styles.labAndChackUpImageStyle}
                resizeMode="cover"
            />
            <View style={styles.labInformationContainer}>
                <Text numberOfLines={2} style={{ ...Fonts.black13Bold, marginTop: Sizes.fixPadding - 10.0, textAlign: 'center' }}>
                    {item.labName}
                </Text>
                <Text numberOfLines={2} style={{ ...Fonts.gray10Bold, marginTop: Sizes.fixPadding - 10.0, textAlign: 'center' }}>
                    {item.labAddress}
                </Text>
                <View style={styles.callNowButtonStyle}>
                    <Text style={{ ...Fonts.primaryColorBold }}>Book Appointment</Text>
                </View>
            </View>
            {/* <View style={{
                alignItems: 'center', justifyContent: 'center',
                marginRight: Sizes.fixPadding + 10.0
            }}>
                <Ionicons name="chevron-forward" size={25} color="black" />
            </View> */}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            <StatusBar translucent={false} backgroundColor={Colors.primary} />
            <FlatList
                ListHeaderComponent={
                    <>
                        {header()}
                        {search()}
                        {newlyLanched()}
                        {title({ title: 'Find your doctor by speciality' })}
                        {specialists()}
                        {viewAll()}
                        {featured({ title: 'Featured services' })}
                        {labAndCheckUp()}
                        {insuranceheading({ title: 'Insure your family with rn-Doctor Insurance' })}
                        {Insurence()}
                        {healthcheckup({ title: 'Popular health checkup and screening tests' })}
                        {health()}
                    </>
                }

            />
        </SafeAreaView>
    );

    function labAndCheckUp(item) {

        return (

            <FlatList
                horizontal
                data={labAndCheckUpList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVertisscalScrollIndicator={false}

            />
        )
    }

    function Insurence() {
        const renderItem = ({ item }) => (

            <TouchableOpacity
                underlayercolor="white"
                activeOpacity={0.9}
                style={{ flex: 1, }}
                onPress={() => navigation.navigate('', { name: item.insurenceName })}
            >
                <View style={styles.insurenceStyle}>
                    <Image
                        source={item.insurenceimage}
                        resizeMode="cover"
                        style={styles.insurenceImageStyle}
                    />

                    <Text
                        numberOfLines={2}
                        style={{ ...Fonts.black13Bold, marginTop: Sizes.fixPadding - 0.0, textAlign: 'center', fontSize:15 }}
                    >
                        {item.insurenceName}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{ ...Fonts.gray10Bold, marginTop: Sizes.fixPadding - 10.0, textAlign: 'center', fontSize: 11 }}
                    >
                        {item.insurenceInfo}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{ ...Fonts.gray10Bold, marginTop: Sizes.fixPadding - 10.0, textAlign: 'center', color:'green', fontSize: 13 }}
                    >
                        {item.insurenceprice}
                    </Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ backgroundColor: 'white', flex: 1, paddingTop: Sizes.fixPadding, }}>
                <FlatList
                    // showsHorizontalScrollIndicator={false}
                    data={insurencelist}
                    keyExtractor={(item) => `${item.id}`}
                    numColumns={2}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
    function health() {
        const renderItem = ({ item }) => (

            <TouchableOpacity
                underlayercolor="white"
                activeOpacity={0.9}
                style={{ flex: 1, }}
                onPress={() => navigation.navigate('DiabetesData', { name: item.testName })}
            >
                <View style={styles.healthStyle}>
                    <Image
                        source={item.testimage}
                        resizeMode="cover"
                        style={styles.healthImageStyle}
                    />

                    <Text
                        numberOfLines={2}
                        style={{ ...Fonts.black13Bold, marginTop: Sizes.fixPadding - 0.0, textAlign: 'center',fontSize:14 }}
                    >
                        {item.testName}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{ ...Fonts.gray10Bold, marginTop: Sizes.fixPadding * 1, textAlign: 'center', color:'green', fontSize:12 }}
                    >
                        {item.testprice}
                    </Text>
                    
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ backgroundColor: 'white', flex: 1, paddingTop: Sizes.fixPadding, }}>
                <FlatList
                    // showsHorizontalScrollIndicator={false}
                    data={healthCheckupList}
                    keyExtractor={(item) => `${item.id}`}
                    numColumns={2}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }



    function search() {
        return (
            <TouchableOpacity
                activeOpacity={0.99}
                onPress={() => { navigation.navigate('Search') }}
            >
                <View style={styles.searchStyle}>
                    <Ionicons name="search" size={24} color="gray" />
                    <Text style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding }}>What type of appointment?</Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                horizontal
                data={insurencelist}
                keyExtractor={(items) => `${items.id}`}
                renderItem={renderItem}
                showsVertisscalScrollIndicator={false}

            />
        )
    }

    function search() {
        return (
            <TouchableOpacity
                activeOpacity={0.99}
                onPress={() => { navigation.navigate('Search') }}
            >
                <View style={styles.searchStyle}>
                    <Ionicons name="search" size={24} color="gray" />
                    <Text style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding }}>What type of appointment?</Text>
                </View>
            </TouchableOpacity>

        )
    }

    // function newlyLanched() {
    //     return (
    //         <ImageBackground
    //             source={require('../../assets/images/banner.jpg')}
    //             resizeMode="stretch"
    //             style={{
    //                 height: 100.0,
    //                 marginTop: Sizes.fixPadding + 5.0,
    //                 marginHorizontal: Sizes.fixPadding * 2.0,
    //             }}
    //             borderRadius={5}
    //         >
    //         </ImageBackground>
    //     )
    // }

    //Carousal view

    function newlyLanched() {
        const flatListRef = useRef();
        const [activeIndex, setActiveIndex] = useState(0);
        const screenWidth = Dimensions.get("window").width;
        useEffect(() => {
            let interval = setInterval(() => {
                if (activeIndex === carouselData.length - 1) {
                    flatListRef.current.scrollToIndex({
                        index: 0,
                        animation: true,
                    });
                } else {
                    flatListRef.current.scrollToIndex({
                        index: activeIndex + 1,
                        animation: true,
                    });
                }

            }, 2000);
            return () => clearInterval(interval);

        });

        const getItemLayout = (data, index) => ({
            length: screenWidth,
            offset: screenWidth * index,
            index: index,
        })
        const carouselData = [
            {
                id: "01",
                image: require("../../assets/images/banner.jpg"),
            },
            {
                id: "02",
                image: require("../../assets/images/banner.jpg"),
            },
            {
                id: "03",
                image: require("../../assets/images/banner.jpg"),
            },
        ];

        //Display Inages // UI
        const renderItem = ({ item, index }) => {
            return (
                <View>
                    <Image source={item.image} style={{ height: 100, width: screenWidth, marginTop: 10, }} />
                </View>

            );

        };
        //Handle Scroll
        const handleScroll = (event) => {
            const scrollPosition = event.nativeEvent.contentOffset.x;
            console.log({ scrollPosition });
            const index = scrollPosition / width;
            console.log({ index });

            //Update The Index
            setActiveIndex(index);

        };

        //Render Dot Indicator
        // const renderDotIndicators = () => {
        //     return carouselData.map((dot, index) => {

        //         if (activeIndex === index){
        //             return(
        //                 <View style={{ backgroundColor: "green", height: 10, width: 10, borderRadius: 5, marginHorizontal: 6, }}></View>
        //             );

        //         } else {
        //             return (
        //                 <View key={index}
        //                     style={{ backgroundColor: "red", height: 10, width: 10, borderRadius: 5, marginHorizontal: 6, }}

        //                 ></View>
        //             );
        //         }

        //     });
        // };
        return (
            <View>
                <FlatList getItemLayout={getItemLayout}
                    keyExtractor={(item) => item.id}
                    data={carouselData}
                    ref={flatListRef}
                    renderItem={renderItem}
                    horizontal={true}
                    pagingEnabled={true}
                    onScroll={handleScroll} />
                {/* <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10, }}>{renderDotIndicators()}</View> */}
            </View>
        )
    };



    function title({ title }) {
        return (
            <Text style={{ ...Fonts.black18Bold, marginVertical: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {title}
            </Text>
        )
    }
    function featured({ title }) {
        return (
            <Text style={{ ...Fonts.black18Bold, marginVertical: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                {title}
            </Text>
        )
    }
    function insuranceheading({ title }) {
        return (
            <Text style={{ ...Fonts.black18Bold, marginVertical: 2, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {title}
            </Text>
        )
    }
    function healthcheckup({ title }) {
        return (
            <Text style={{ ...Fonts.black18Bold, marginVertical: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {title}
            </Text>
        )
    }

    function specialists() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                underlayercolor="white"
                activeOpacity={0.9}
                style={{ flex: 1, }}
                onPress={() => navigation.navigate('Specialist', { name: item.name })}
            >
                <View style={styles.specialistInfoContainer}>
                    <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{ height: 50.0, width: 50.0 }}
                    />
                    <Text
                        numberOfLines={2}
                        style={styles.specialistTextStyle}
                    >
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ backgroundColor: 'white', flex: 1, paddingTop: Sizes.fixPadding, }}>
                <FlatList
                    // showsHorizontalScrollIndicator={false}
                    data={specialistsList}
                    keyExtractor={(item) => "_" + `${item.id}`}
                    numColumns={3}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    function viewAll() {
        return (
            <TouchableOpacity
                activeOpacity={0.99}
                onPress={() => navigation.navigate('ViewAll')}
            >
                <View style={styles.viewAllStyle}>
                    <Text style={{ ...Fonts.primaryColor17Bold, marginRight: Sizes.fixPadding - 5.0 }}>View All</Text>
                    <Ionicons name="chevron-forward" size={23} color="black" />
                </View>
            </TouchableOpacity>
        );
    }


    function header() {

        const refRBSheet = useRef();
        const [city, setCity] = useState('Wallington');
        const cityList = ['Wallingtone', 'Central Park', 'Nerobi'];

        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity activeOpacity={0.99} onPress={() => refRBSheet.current.open()}>
                    <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        height={200}
                        openDuration={250}
                        customStyles={{
                            container: {
                                paddingHorizontal: Sizes.fixPadding * 2.0,
                            }
                        }}
                    >
                        <View>
                            <Text style={{ ...Fonts.black20Bold, alignSelf: 'center' }}>Choose City</Text>
                            {cityList.map((city) =>
                                <TouchableOpacity
                                    activeOpacity={0.99}
                                    key={city}
                                    onPress={() => {
                                        setCity(city)
                                        refRBSheet.current.close()
                                    }}
                                >
                                    <Text
                                        style={{ ...Fonts.black16Regular, marginVertical: Sizes.fixPadding }}>{city}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </RBSheet>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="location-sharp" size={22} />
                        <Text style={{ ...Fonts.black18Regular, marginLeft: 10.0 }}>{city}</Text>
                    </View>
                </TouchableOpacity>
                <Ionicons name="notifications" size={24} color="black" onPress={() => navigation.navigate('Notification')} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    },
    searchStyle: {
        height: 60.0,
        backgroundColor: 'white',
        borderWidth: 1.0,
        borderColor: Colors.lightGray,
        alignItems: 'center',
        borderRadius: Sizes.fixPadding - 3.0,
        flexDirection: 'row',
        paddingLeft: Sizes.fixPadding + 10.0,
        marginTop: 20.0,
        marginHorizontal: 20.0
    },
    viewAllStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: 1,
        marginBottom: 30
    },
    callNowButtonStyle: {
        width: 150.0,
        height: 30.0,
        borderColor: Colors.primary,
        borderRadius: Sizes.fixPadding,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding,
    },
    labAndCheckUpContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 320,
        width: width - 200,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding + 5.0,
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        elevation: 1.5,
        marginBottom: 30.0,
        marginHorizontal: 5.0,
        marginTop: Sizes.fixPadding,
        overflow: 'hidden',
    },
    labInformationContainer: {
        marginLeft: Sizes.fixPadding,
        marginRight: Sizes.fixPadding,
        width: width - 220,
        marginTop: Sizes.fixPadding + 5.0,
    },
    // specialistInfoContainer: {

    //     height: 100.0,
    //     width: 120.0,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'white',
    //     borderColor: Colors.lightGray,
    //     borderWidth: 1.0,
    //     marginHorizontal: 10.0,
    //     marginVertical: Sizes.fixPadding,
    //     borderRadius: Sizes.fixPadding,
    //     borderRadius: 15,
    //     shadowColor: "black",
    //     shadowOffset: { width: 0, height: 0 },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 10,
    //     elevation: 5.0,
    // },


    specialistInfoContainer: {
        height: 130.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        marginHorizontal: 10.0,
        marginVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 5.0,

    },
    insurenceStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 280,
        width: width - 220,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding + 5.0,
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        elevation: 1.5,
        marginBottom: 30.0,
        marginHorizontal: 5.0,
        marginTop: Sizes.fixPadding,
        overflow: 'hidden',

    },
    insurenceInfoContainar: {
        height: 130.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: Colors.lightGray,
        borderWidth: 1.0,
        marginHorizontal: 10.0,
        marginVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 5.0,


    },
    insurenceImageStyle: {
        margin: 'auto',
        height: 175.0,
        width: width - 200.0,
        borderTopLeftRadius: Sizes.fixPadding + 5.0,
        borderBottomLeftRadius: Sizes.fixPadding + 5.0,
        overflow: 'hidden',
       
    },
    labAndChackUpImageStyle: {
        margin: 'auto',
        height: 175.0,
        width: width - 200.0,
        borderTopLeftRadius: Sizes.fixPadding + 5.0,
        borderBottomLeftRadius: Sizes.fixPadding + 5.0,
        overflow: 'hidden'
    },
    specialistTextStyle: {
        ...Fonts.black13Bold,
        marginTop: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding,
        textAlign: 'center'
    },
    healthStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 245,
        width: width - 220,
        alignSelf: 'center',
        // borderRadius: Sizes.fixPadding + 55.0,
        // backgroundColor: 'white',
        // borderColor: Colors.lightGray,
        // borderWidth: 1.0,
        // elevation: 1.5,
        marginBottom: 30.0,
        marginHorizontal: 5.0,
        marginTop: Sizes.fixPadding,
        overflow: 'hidden',
        

    },
    healthImageStyle: {
        margin: 'auto',
        height: 175.0,
        width: width - 200.0,
        // borderTopLeftRadius: Sizes.fixPadding + 55.0,
        // borderBottomLeftRadius: Sizes.fixPadding + 5.0,
        overflow: 'hidden',
        borderRadius: Sizes.fixPadding,
    },
})

export default HomeScreen;