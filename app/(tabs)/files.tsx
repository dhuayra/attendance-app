import { Text, View, TouchableOpacity, Alert, FlatList, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as XLSX from 'xlsx';
import styleApp from '../../assets/styles/style';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabFiles() {
  const [archivos, setArchivos] = useState([]);

  useEffect(() => {
    cargarArchivos();
  }, []);

  const cargarArchivos = async () => {
    const archivosEnCarpeta = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
    setArchivos(archivosEnCarpeta.filter((file) => file.endsWith('.json')));
  };

  const verContenidoArchivo = async (archivo) => {
    try {
      const fileUri = FileSystem.documentDirectory + archivo;
      const data = await FileSystem.readAsStringAsync(fileUri);
      const contenido = JSON.parse(data);
      Alert.alert('Contenido del archivo', JSON.stringify(contenido, null, 2));
    } catch (error) {
      Alert.alert('Error', 'No se pudo leer el archivo.');
      console.error(error);
    }
  };

  const eliminarArchivo = async (archivo) => {
    const fileUri = FileSystem.documentDirectory + archivo;

    Alert.alert('Eliminar Archivo', '¿Estás seguro de que quieres eliminar este archivo?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Eliminar',
        onPress: async () => {
          try {
            await FileSystem.deleteAsync(fileUri);
            Alert.alert('Éxito', 'Archivo eliminado exitosamente.');
            cargarArchivos();
          } catch (error) {
            Alert.alert('Error', 'No se pudo eliminar el archivo.');
            console.error(error);
          }
        },
      },
    ]);
  };

  const exportarAExcel = async (archivo) => {
    try {
      const fileUri = FileSystem.documentDirectory + archivo;
      const data = await FileSystem.readAsStringAsync(fileUri);
      const registros = JSON.parse(data);

      const ws = XLSX.utils.json_to_sheet(registros);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Registros');

      const excelBuffer = XLSX.write(wb, {
        bookType: 'xlsx',
        type: 'array',
      });

      const excelUri = FileSystem.documentDirectory + archivo.replace('.json', '.xlsx');
      const base64Data = btoa(
        String.fromCharCode(...new Uint8Array(excelBuffer))
      );
      await FileSystem.writeAsStringAsync(excelUri, base64Data, {
        encoding: FileSystem.EncodingType.Base64,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(excelUri);
      } else {
        Alert.alert('Error', 'No se puede compartir el archivo en este dispositivo.');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo exportar el archivo a Excel.');
      console.error(error);
    }
  };

  const updateList = async () => {
    cargarArchivos();
  };

  return (
    <SafeAreaView style={styleApp.container}>
      <Text style={styleApp.title}>LISTA DE ARCHIVOS</Text>
      <TouchableOpacity style={styleApp.btnSync} onPress={updateList}>
        <MaterialIcons name='cloud-sync' size={25} color="#ddd" />
      </TouchableOpacity>
      <View style={styleApp.table}>
        <View style={[styleApp.row, styleApp.headerRow]}>
          <Text style={[styleApp.headerText, styleApp.colHeadFile]}>Archivo</Text>
          <Text style={[styleApp.headerText, styleApp.colHeadAction]}>Acción</Text>
        </View>
        <FlatList
          data={archivos}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styleApp.row}>
              <View style={[styleApp.colBodyFile]}>
                <TouchableOpacity onPress={() => verContenidoArchivo(item)} >
                  <Text style={styleApp.cellText}>{item}</Text>
                </TouchableOpacity>
              </View>

              <View style={[styleApp.colBodyAction]}>
                <TouchableOpacity onPress={() => eliminarArchivo(item)} >
                  <MaterialIcons name="delete-forever" size={25} color="red" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => exportarAExcel(item)} style={{ marginLeft: 10 }}>
                  <MaterialIcons name="file-open" size={25} color="green" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
