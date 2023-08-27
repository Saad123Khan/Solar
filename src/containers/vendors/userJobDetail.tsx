import theme from '@/assets/styles/theme'
import HeaderHomePage from '@/components/headerHomePage'
import JobCardAppliancesDetail from '@/components/jobCardAppliancesDetail'
import SafeScrollView from '@/components/safeScrollView'
import SettingHeader from '@/components/settingStackHeader'
import { FONT_FAMILY, RouteNames } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

const UserJobDetail = ({...props}) => {

    const navigation = useNavigation();
    const {List} = props?.route?.params?.data

    console.log("----",List);
    

  return (
    <SafeScrollView screenCol={theme.white} isDarkMode barCol={theme.purple}>
        <View style={{marginHorizontal: 20}}>
        <SettingHeader
          name="Item Detail"
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView>

        <View style={{ alignItems: "flex-end", margin: 15 }} >
          <TouchableOpacity style={{ width: 150, height: 50, backgroundColor: theme.darkgrey, borderRadius: 10, justifyContent: 'center', alignItems: "center" }} >
            <Text style={{ color: theme.white, fontSize: 15, fontFamily: FONT_FAMILY.MontserratSemiBold }} >Send Message ></Text>  
          </TouchableOpacity>
        </View>

         <JobCardAppliancesDetail
            data={List}
            marginTop={10}
            pakageHeading={'Pakage Detail:'}
          />    


      </ScrollView>
    </SafeScrollView>
  )
}

export default UserJobDetail