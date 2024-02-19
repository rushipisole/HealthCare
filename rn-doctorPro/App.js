import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { LogBox, View } from 'react-native';
import LoadingScreen from './components/LoadingScreen';
import BottomTabScreen from "./components/BottomTab";
import NotificationScreen from './screens/Notifications/NotificationScreen';
import SearchScreen from "./screens/Search/SearchScreen";
import ViewAllScreen from './screens/ViewAll/ViewAllScreen';
import SpecialistScreen from './screens/Specialist/SpecialistScreen';
import TimeSlotScreen from './screens/TimeSlots/TimeSlotsScreen';
import ConsultaionScreen from './screens/ConsultationDetail/ConsultationDetailScreen';
import PaymentMethodScreen from './screens/PaymentMethod/PaymentMethodScreen';
import DoctorProfileScreen from './screens/DoctorProfile/DoctorProfileScreen';
import ReviewScreen from './screens/Review/ReviewScreen';
import LabTestAndHealthCheckUpScreen from './screens/LabAndTestCheckup/LabTestAndHealthCheckUpScreen';
import MessageScreen from './screens/Message/MessageScreen';
import EditProfileScreen from './screens/EditProfile/EditProfileScreen';
import PatientDirectoryScreen from './screens/PatientDirectory/PatientDirectoryScreen';
import AboutUsScreen from './screens/AboutUs/AboutUsScreen';
import WelcomeScreen from './screens/Auth/WelcomeScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import VerificationScreen from './screens/Auth/VerificationScreen';
import SplashScreen from './screens/SplashScreen';
import Popup from './screens/PopupWindow/Popup'
import listOfDiabetes from './components/DiabetesData';
// import TopPlacesCarousel from './components/TopPlacesCarousel';



LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const App = () => {
  return (



    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ViewAll" component={ViewAllScreen} />
        <Stack.Screen name="Specialist" component={SpecialistScreen} />
        <Stack.Screen name="TimeSlots" component={TimeSlotScreen} />
        <Stack.Screen name="Consultation" component={ConsultaionScreen} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="LabTestAndCheckUp" component={LabTestAndHealthCheckUpScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="PatientDirectory" component={PatientDirectoryScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        {/* <Stack.Screen name= "TopCarousel" component={TopPlacesCarousel}/> */}
        <Stack.Screen name="Popup" component={Popup} />
        <Stack.Screen name='DiabetesData' component={listOfDiabetes}/>

      </Stack.Navigator>
    </NavigationContainer>



  );
}

export default App;