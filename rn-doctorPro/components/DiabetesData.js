import React from "react";
import { Text, View, TextInput, StatusBar, FlatList, TouchableHighlight, Image, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import { Fonts, Colors, Sizes } from "../constant/styles";
import { AntDesign, Ionicons } from '@expo/vector-icons';
const { width } = Dimensions.get("window");

const DataList = [
    {
        id: '1',
        labName: 'HbA1c',
        labAddress: 'Known as Glycosylated Haemoglobin Blood',
        labAddress2: 'E-Reports on same day',
        price: '₹150',
        
    },
    {
        id: '2',
        labName: 'Lipid Profile',
        labAddress: 'Known the Lipid Profile Blood\n\n',
        labAddress2: 'E-Reports on same day',
        price: '₹434',
        
    },
    {
        id: '3',
        labName: 'Fasting Blood Sugar',
        labAddress: 'Known the Glucose Fasting Blood\n\n',
        labAddress2: 'E-Reports on same day',
        price: '₹484',
        image: require('../assets/images/lab/lab_3.jpg')
    },
    {
        id: '4',
        labName: 'Random Blood Sugar',
        labAddress: 'Known as Glucose Random Blood\n\n',
        labAddress2: 'E-Reports in 2 days',
        price: '₹584',
        image: require('../assets/images/lab/lab_4.jpg')
    },
    {
        id: '5',
        labName: 'C Peptide Blood ',
        labAddress: 'Known as C Peptide Random Blood\n\n',
        labAddress2: 'E-Reports in 2 days',
        price: '₹384',
        image: require('../assets/images/lab/lab_5.jpg')
    },
    {
        id: '6',
        labName: 'Liver Function Test',
        labAddress: 'Known as Liver Function Tests Blood\n\n',
        labAddress2: 'E-Reports on same day',
        price: '₹690',
        image: require('../assets/images/lab/lab_6.jpg')
    },
];

const DataList2 = [
    {
        id: '1',
        dataname: 'Diabetes Panel - Basic',
        datainfo1: 'Include 23 tests',
        datainfo2: 'Ideal for individuals agred 1 -100 years',
        price: '₹199',
        discount: '\n Upto 20% OFF',
        image: require('../assets/images/lab/lab_1.jpg')

    }, 
    {
        id: '1',
        dataname: 'Kidney and Diabetes Monitoring',
        datainfo1: 'Include 38 tests',
        datainfo2: 'Ideal for individuals agred 1 -100 years',
        price: '₹699',
        discount: '\n Upto 22% OFF',
        image: require('../assets/images/lab/lab_2.jpg')
    },
    {
        id: '1',
        dataname: 'Diabetes Panel - Advance',
        datainfo1: 'Include 49 tests',
        datainfo2: 'Ideal for individuals agred 1 -100 years',
        price: '₹999',
        discount: '\n Upto 20% OFF',
        image: require('../assets/images/lab/lab_2.jpg')
    },
    {
        id: '1',
        dataname: 'Vital Organs and Diabetes Monitoring',
        datainfo1: 'Include 63 tests',
        datainfo2: 'Ideal for individuals agred 1 -100 years',
        price: '₹1599',
        discount: '\n Upto 20% OFF',
        image: require('../assets/images/lab/lab_2.jpg')
    },




];

const listOfDiabetes = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('LabTestAndCheckUp', {
                image: item.image, name: item.labName, address: item.labAddress
            })}
            style={styles.DiabetesDataContainer}
        >
            {/* <Image
                source={item.image}
                style={styles.DiabetesDataImageStyle}
                resizeMode="cover"
            /> */}
            <View style={styles.DiabetesDataInfoContainer}>
                <Text numberOfLines={1} style={{ ...Fonts.black13Bold, marginTop: Sizes.fixPadding - 10.0, fontSize: 18, }}>
                    {item.labName}
                </Text>
                <Text numberOfLines={2} style={{ ...Fonts.gray10Bold, marginTop: 15.0, }}>
                    {item.labAddress}
                </Text>
                <Text numberOfLines={1} style={{ ...Fonts.black14Bold, marginTop: 15.0, fontSize: 13, }}>
                    {item.labAddress2}
                </Text>
                <Text numberOfLines={1} style={{ ...Fonts.black14Bold, marginTop: 15.0, fontSize: 19, }}>
                    {item.price}
                </Text>


                <View style={styles.callNowButtonStyle}>
                    <Text style={{ ...Fonts.primaryColorBold, color: 'green' }}>Book Appointment</Text>
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
                        {title({ title: 'Diabetes Related Tests' })}
                        {labAndCheckUp()}
                        {title2({ title2: 'Diabetes Related  Tests:' })}
                        {Insurence()}

                    </>
                }

            />
        </SafeAreaView>
    );
    function title({ title }) {
        return (
            <Text style={{ ...Fonts.black18Bold, marginVertical: 2, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {title}
            </Text>
        )
    }
    function title2({ title2 }) {
        return (
            <Text style={{ ...Fonts.black18Bold, marginVertical: 2, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {title2}
            </Text>
        )
    }

    function labAndCheckUp(item) {

        return (

            <FlatList
                horizontal
                data={DataList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVertisscalScrollIndicator={false}

            />
        )
    }
    function header() {
        return <View style={styles.headerStyle}>
            <View style={styles.headerTitleContainerStyle}>
                <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.navigate('BottomTabScreen')} />
                <Text style={{ ...Fonts.black20Bold, marginLeft: Sizes.fixPadding * 2.0 }}>Diabetes</Text>
            </View>
            <View style={styles.headerSearchStyle}>
                <Ionicons name="search" size={24} color="gray" />
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder="Search Diseases"
                        style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding, }}
                    />
                </View>
            </View>
        </View>
    }
    function Insurence() {
        const renderItem = ({ item }) => (

            <TouchableOpacity
                underlayercolor="white"
                activeOpacity={0.9}
                style={{ flex: 1, }}
                onPress={() => navigation.navigate('', { name: item.dataname })}
            >
                <View style={styles.DiabetesDataContainer2}>
                    <Image
                        source={item.image}
                        resizeMode="cover"
                        style={styles.DiabetesDataImageStyle}
                    />

                    <Text
                        numberOfLines={2}
                        style={{ ...Fonts.black13Bold, marginTop: Sizes.fixPadding + 5.0, fontSize: 16, width: width-220, }}
                    >
                        {item.dataname}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{ ...Fonts.gray10Bold, marginTop: Sizes.fixPadding + 5.0, fontSize: 11,width: width-220, }}
                    >
                        {item.datainfo1}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={{ ...Fonts.gray10Bold, marginTop: Sizes.fixPadding - 7.0, fontSize: 11,width: width-220, }}
                    >
                        {item.datainfo2}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{ ...Fonts.black13Bold, marginTop: Sizes.fixPadding - 5.0, fontSize: 16,width: width-220, }}
                    >
                        {item.price}
                    <Text
                        numberOfLines={1}
                        style={{ ...Fonts.gray10Bold, marginTop: Sizes.fixPadding - 10.0, fontSize: 11,width: width-220, color:'green', }}
                    >
                        {item.discount}
                    </Text>
                    </Text>
                    
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ backgroundColor: 'white', flex: 1, paddingTop: Sizes.fixPadding, }}>
                <FlatList
                    // showsHorizontalScrollIndicator={false}
                    data={DataList2}
                    keyExtractor={(item) => `${item.id}`}
                    numColumns={2}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    headerSearchStyle: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: Sizes.fixPadding,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingHorizontal: Sizes.fixPadding,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    specialistStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 320,
        width: 200,
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
    headerStyle: {
        backgroundColor: 'white',
        paddingTop: Sizes.fixPadding + 5.0,
        paddingBottom: Sizes.fixPadding
    },
    headerTitleContainerStyle: {
        flexDirection: 'row',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding + 10.0
    },
    specialistTextStyle: {
        ...Fonts.black16Bold,
        marginTop: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding,
        textAlign: 'center'
    },
    DiabetesDataContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 210,
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
    DiabetesDataContainer2: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 315,
        width: width - 210,
        alignSelf: 'center',
        // borderRadius: Sizes.fixPadding + 15.0,
        // backgroundColor: 'white',
        // borderColor: Colors.lightGray,
        // borderWidth: 1.0,
        // elevation: 5,
        marginBottom: 30.0,
        marginHorizontal: 5.0,
        marginTop: Sizes.fixPadding,
        overflow: 'hidden',
    },

    DiabetesDataImageStyle: {
        margin: 'auto',
        height: 175.0,
        width: width - 200.0,
        borderRadius: Sizes.fixPadding + 25.0,
        borderWidth: 1.0,
        elevation: 5,
        // borderTopLeftRadius: Sizes.fixPadding + 5.0,
        // borderBottomLeftRadius: Sizes.fixPadding + 5.0,
        // borderBottomRightRadius: Sizes.fixPadding + 5.0,
        // borderTopRightRadius:Sizes.fixPadding + 5.0,
        overflow: 'hidden'
    },
    DiabetesDataInfoContainer: {
        marginLeft: Sizes.fixPadding,
        marginRight: Sizes.fixPadding,
        width: width - 220,
        marginTop: Sizes.fixPadding + 5.0,
    },
    callNowButtonStyle: {
        width: 150.0,
        height: 30.0,
        borderColor: 'black',
        borderRadius: Sizes.fixPadding,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 15,
        marginHorizontal: Sizes.fixPadding,
    },

})

export default listOfDiabetes;