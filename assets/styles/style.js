import { StyleSheet } from "react-native";
const styleApp = StyleSheet.create({
    // GENERAL STYLE
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    btnPrimary: {
        backgroundColor: '#65a30d',
        height: 50,
        width: "60%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    txtBtnPrimary: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    title: {
        color: '#395314',
        fontSize: 35,
        fontWeight: 'bold',
        width: '60%',
        textAlign: 'center',
        marginTop: 30,
    },

    // SCANNER
    scannerContainer: {
        width: '80%',
        height: '15%',
        borderWidth: 2,
        borderColor: '#65a30d',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 15,
    },
    barCodeScannerStyle: {
        height: '360%',
        width: '100%',
    },
    colHeadItem: {
        width: '10%',
    },
    colHeadCod: {
        width: '50%',
        textAlign: 'left',
        paddingStart: 15,

    },
    colHeadHour: {
        width: '30%',
        textAlign: 'left',
        paddingStart: 15,
    },
    colHeadType: {
        width: '10%',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: '#395314',
    },

    colBodyItem: {
        width: '10%',
        paddingStart: 5,
    },
    colBodyCod: {
        width: '50%',
        paddingStart: 15,
    },
    colBodyHour: {
        width: '30%',
        textAlign: 'left',
    },
    colBodyType: {
        width: '10%',
        textAlign: 'center',
    },
    scanText: {
        fontSize: 16,
    },


    // FILES
    cardForm: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#b7f264',
        width: '80%',
        padding: 20,
    },
    formGroup: {
        width: '100%',
        height: 'auto',
        margin: 2,
        marginBottom: 20,
    },
    txtForm: {
        color: '#395314',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // LIST FILES
    table: {
        borderWidth: 1,
        borderColor: '#65a30d',
        marginTop: 20,
        borderRadius: 5,
        overflow: 'hidden',
        width: '95%',
        maxHeight: '65%',
    },
    row: {
        flexDirection: 'row',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#65a30d',
        justifyContent: 'space-between',
    },
    headerRow: {
        backgroundColor: '#65a30d',
        fontWeight: 'bold',
    },
    colHeadFile: {
        width: '60%',
    },
    colHeadAction: {
        width: '40%',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#395314',
    },
    colBodyAction: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    colBodyFile: {
        width: '60%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    cellText: {
        fontSize: 16,
        paddingStart: 20,
    },
    btnSync: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#65a30d',
        position: 'absolute',
        bottom: 50,
        end: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },

    // HOME
    containerHome: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    cardHead: {
        backgroundColor: '#65a30d',
        width: '120%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 50,
    },
    textHeadHome: {
        color: '#65a30d',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        overflow: 'hidden',
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 25, 
        paddingTop: 50,
    },
    card: {
        width: '40%',
        backgroundColor: '#fff',
        borderColor: '#65a30d',
        borderWidth: 1,
        padding: 20,
        borderStartWidth: 5,
        margin: 10,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    cardLarge: {
        width: '90%',
        backgroundColor: '#fff',
        borderColor: '#65a30d',
        borderWidth: 1,
        borderStartWidth: 5,
        padding: 20,
        borderRadius: 10,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },


});
export default styleApp;