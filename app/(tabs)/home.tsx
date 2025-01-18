import { Text, View, Image, SafeAreaView } from 'react-native';
import styleApp from '../../assets/styles/style';

export default function TabHome() {
    return (
        <SafeAreaView style={styleApp.containerHome}>
            <View style={styleApp.cardHead}>
                <Image
                    source={require("../../assets/img/4.png")}
                    style={{ height: '90%' }}
                />
            </View>

            <Text style={styleApp.textHeadHome}>FEAUTURES</Text>

            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <View style={styleApp.card}>
                    <Text>Scan the barcode on your credential</Text>
                </View>
                <View style={styleApp.card}>
                    <Text>View the list of files created for the attendance list</Text>
                </View>
            </View>
            <View >
                <View style={styleApp.cardLarge}>
                    <Text>Export and share the files generated daily in Excel format</Text>
                </View>
            </View>
            <View>
                <Image
                    source={require("../../assets/img/1.png")}
                />
            </View>

        </SafeAreaView>
    );
}