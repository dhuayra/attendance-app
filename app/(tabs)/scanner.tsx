import { Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import styleApp from '../../assets/styles/style';

export default function TabScanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scannedData, setScannedData] = useState([]);
    const [scanning, setScanning] = useState(false);

    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const anio = fechaActual.getFullYear();
    const fileName = `${dia}-${mes}-${anio}.json`;

    useEffect(() => {
        const requestPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        requestPermissions();
        cargarRegistros();
    }, []);

    const cargarRegistros = async () => {
        const fileUri = FileSystem.documentDirectory + fileName;

        try {
            const data = await FileSystem.readAsStringAsync(fileUri);
            const registrosCargados = JSON.parse(data);
            setScannedData(registrosCargados);
        } catch (error) {
            setScannedData([]);
        }
    };

    const handleScan = async () => {
        setScanning(true);
    };

    const handleBarCodeScanned = ({ type, data }) => {
        const currentDate = new Date();
        const currentTime = currentDate.toLocaleTimeString();
        const currentDateFormatted = currentDate.toLocaleDateString();
        setScanning(false);

        const nuevoRegistro = {
            key: `${data}`,
            type,
            date: currentDateFormatted,
            time: currentTime,
        };

        const nuevosRegistros = [...scannedData, nuevoRegistro];
        const jsonString = JSON.stringify(nuevosRegistros, null, 2);

        const fileUri = FileSystem.documentDirectory + fileName;
        FileSystem.writeAsStringAsync(fileUri, jsonString).then(() => {
            setScannedData(nuevosRegistros);
        });
    };

    if (hasPermission === null) {
        return <Text>Solicitando permisos...</Text>;
    }
    if (hasPermission === false) {
        return <Text>No se otorgaron permisos para usar la cámara</Text>;
    }

    return (
        <SafeAreaView style={styleApp.container}>
            <Text style={styleApp.title}>REGISTRAR</Text>
            <View style={styleApp.scannerContainer}>
                {scanning && (
                    <BarCodeScanner
                        onBarCodeScanned={handleBarCodeScanned}
                        style={styleApp.barCodeScannerStyle}
                    />
                )}
            </View>
            <TouchableOpacity
                onPress={handleScan}
                style={styleApp.btnPrimary}
            >
                <Text style={styleApp.txtBtnPrimary}>Escanear</Text>
            </TouchableOpacity>

            <View style={[styleApp.table, { maxHeight: '68%' }]}>
                <View style={[styleApp.row, styleApp.headerRow]}>
                    <Text style={[styleApp.headerText, styleApp.colHeadItem]}>#</Text>
                    <Text style={[styleApp.headerText, styleApp.colHeadCod]}>CÓDIGO</Text>
                    <Text style={[styleApp.headerText, styleApp.colHeadHour]}>HORA</Text>
                    <Text style={[styleApp.headerText, styleApp.colHeadType]}>TIPO</Text>
                </View>
                <FlatList
                    data={scannedData}
                    renderItem={({ item, index }) => (
                        <View style={styleApp.row}>
                            <Text style={[styleApp.colBodyItem, styleApp.scanText]}>{index + 1}</Text>
                            <Text style={[styleApp.colBodyCod, styleApp.scanText]}>{item.key}</Text>
                            <Text style={[styleApp.colBodyHour, styleApp.scanText]}>{item.time}</Text>
                            <Text style={[styleApp.colBodyType, styleApp.scanText]}>{item.type}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
            </View>
        </SafeAreaView>
    );
}

