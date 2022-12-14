import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function ButtonSign({ text, onPress }) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{ text }</Text>
        </TouchableOpacity>
    )
    //  El estilo del boton lo estabas poniendolo en un View cuando lo que tenias que hacer era estilar el TouchableOpacity
    //  El view no estaba haciendo basicamente
    // en este caso en particular TouchableOpacity en si es un View 
    //  entonces establas estilando un view detro de un view y eso no es necesario pues
    //OOHHHHH cojoyo no comprendo como a la gente de los tutoriales y paginas les funciona DIabbb
    // el deablo jajaj si aveces hacen una locurak
    //Deja seguir, ahora voy a crear otra pantalla para luego poner a que ese boton llegue a la otra pagina
    // Ok para eso el metodo onPress es el que te permite hacer eso 
}

const styles = StyleSheet.create({
    button:{
        padding: 2,
        width: '50%',
        height:'6%',
        marginTop:15,
        borderRadius:30,
        backgroundColor:'#48e375',

    },
    buttonText:{
        color:'red',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize: 80,
        textAlign:'center'
    }
})







