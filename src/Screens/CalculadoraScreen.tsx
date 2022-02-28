import React from 'react'
import { View, Text} from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from './../theme/AppTheme';
import { useCalculadora } from '../Hooks/useCalculadora';

export const CalculadoraScreen = () => {
    const {numero,numeroAnterior, limpiar,armarNumero,positivoNegativo,BtnDel,btnDividir,btnMultiplicar,
      btnRestar,btnSumar, calcular} = useCalculadora()
  return (
    <View style={styles.calculadoraContainer}>
      {/*PANTALLA DE OPERACIONES*/}
      {(numeroAnterior !== '0' && <Text style={ styles.resultadoPequeño }>{numeroAnterior}</Text>)}
      <Text 
        style={ styles.resultado }
        numberOfLines ={1}
        adjustsFontSizeToFit
      >{numero}</Text>
      {/*FILA DE BOTONES*/}
      <View style= { styles.fila}>
        <BotonCalc texto='C' color = '#9B9B9B' accion = {limpiar}/>
        <BotonCalc texto='+/-' color = '#9B9B9B' accion = {positivoNegativo}/>
        <BotonCalc texto='del' color = '#9B9B9B' accion = {BtnDel}/>
        <BotonCalc texto='/' color = '#FF9427' accion = {btnDividir}/>
      </View>
      {/*FILA DE BOTONES*/}
      <View style= { styles.fila}>
        <BotonCalc texto='7'  accion = {armarNumero}/>
        <BotonCalc texto='8'  accion = {armarNumero}/>
        <BotonCalc texto='9'  accion = {armarNumero}/>
        <BotonCalc texto='X' color = '#FF9427' accion = {btnMultiplicar}/>
      </View>
      {/*FILA DE BOTONES*/}
      <View style= { styles.fila}>
        <BotonCalc texto='4'  accion = {armarNumero}/>
        <BotonCalc texto='5'  accion = {armarNumero}/>
        <BotonCalc texto='6'  accion = {armarNumero}/>
        <BotonCalc texto='-' color = '#FF9427' accion = {btnRestar}/>
      </View>
      {/*FILA DE BOTONES*/}
      <View style= { styles.fila}>
        <BotonCalc texto='3'  accion = {armarNumero}/>
        <BotonCalc texto='2'  accion = {armarNumero}/>
        <BotonCalc texto='1'  accion = {armarNumero}/>
        <BotonCalc texto='+' color = '#FF9427' accion = {btnSumar}/>
      </View>
      {/*FILA DE BOTONES*/}
      <View style= { styles.fila}>
        <BotonCalc texto='0' ancho accion = {armarNumero}/>
        <BotonCalc texto='.' accion = {armarNumero} />
        <BotonCalc texto='=' color = '#FF9427' accion = {calcular}/>
      </View>
    </View>
  )
}