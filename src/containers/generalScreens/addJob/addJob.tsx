
import React from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Metrics } from '@/assets/metrics/metrics'
import theme from '@/assets/styles/theme'
import SafeScrollView from '@/components/safeScrollView'
import SettingHeader from '@/components/settingStackHeader'
import { useNavigation } from '@react-navigation/native'
import { FONT_FAMILY, RouteNames } from '@/constants'
import { AddJobData } from '@/utils/data'

const AddJob = () => {

    const navigation = useNavigation();

    function JopTypes() {

      function renderItem({item}) {
        return(
          <TouchableOpacity onPress={()=> Navigation(item) } style={{ height: 100, marginTop: 20, justifyContent: "center", alignItems: "center", backgroundColor: theme.lightblue, marginHorizontal: 40, borderRadius: 10 }} >
          <Text style={{ color: theme.white, fontSize: 20, fontFamily: FONT_FAMILY.MontserratSemiBold, textAlign: "center" }} >{item.txt}</Text>
          </TouchableOpacity>
        )
      }

      function Navigation(item) {
        const{id} = item
        if (id == 0) {
          navigation.navigate(RouteNames.getRequirements)
        }
        else if (id == 1) {
          navigation.navigate(RouteNames.avgEstimatePrice)
        }
        
      }

      return(
        <FlatList
          data={AddJobData}
          renderItem={renderItem}
        />
      )
    }

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white} >
      <View style={{ marginHorizontal: 20 }} >
        <SettingHeader name="Add Job" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>

        {JopTypes()}

      </ScrollView>
    </SafeScrollView>
  )
}

export default AddJob