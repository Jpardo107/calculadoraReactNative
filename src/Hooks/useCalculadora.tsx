import { useRef, useState } from 'react'

enum Operadores{
  suma, resta, multiplicar, dividir
}
export const useCalculadora = () => {
  const [numero, setNumero] = useState('0')
  const [numeroAnterior, setNumeroAnterior] = useState('0')
  const ultimaOperacion = useRef<Operadores>()

  const limpiar = () =>{
    setNumero('0')
    setNumeroAnterior('0')
  }
  const armarNumero = (numeroTexto:string) =>{
    //NO ACEPTAR DOBLE PUTNO
    if(numero.includes('.') && numeroTexto === '.') return;
    if(numero.startsWith('0') || numero.startsWith('-0')){
      //PUNTO DECIMAL
      if(numeroTexto === '.'){
        setNumero(numero + numeroTexto)
        //EVALUAR SI ES OTRO CERO, Y HAY UN PUNTO, PERMITIR
      }else if(numeroTexto === '0' && numero.includes('.')){
        setNumero(numero + numeroTexto)
        //EVALUAR SI ES DIFERENTE DE CERO Y NO TIENE PUNTO
      }else if(numeroTexto !== '0' && !numero.includes('.')){
        setNumero(numeroTexto)
        //EVITAR 0000.0
      }else if(numeroTexto === '0' && !numero.includes('.')){
        setNumero(numero)
      }
      else{
        setNumero(numero + numeroTexto)
      }
    }else{
      setNumero(numero+numeroTexto)
    }
  }

  const positivoNegativo = () => {
    if(numero.includes('-')){
      setNumero(numero.replace('-', ''))
    }else{
      setNumero('-' + numero)
    }
  }

  const BtnDel = () => {
    let negativo = ''
    let numerotemp = numero
    if(numero.includes('-')){
      negativo = '-'
      numerotemp = numero.substring(1)
    }
    if(numerotemp.length > 1){
      setNumero( negativo + numerotemp.slice(0,-1))
    }else{
      setNumero('0')
    }
  }

  const cambiarNumPorAnterior = () =>{
    if(numero.endsWith('.')){
      setNumeroAnterior(numero.slice(0,-1))
    }else{
      setNumeroAnterior(numero)
    }
    setNumero('0')
  }

  const btnDividir = () =>{
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.dividir
  }
  const btnMultiplicar = () =>{
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.multiplicar
  }
  const btnRestar = () =>{
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.resta
  }
  const btnSumar = () =>{
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.suma
  }

  const calcular = () =>{
    const num1 = Number(numero)
    const num2 = Number(numeroAnterior)
    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setNumero(`${num1 + num2}`)
        break;
      case Operadores.resta:
        setNumero(`${-(num1 - num2)}`)
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`)
        break;
      case Operadores.dividir:
        (num1 !== 0) ? setNumero(`${num2 / num1}`) : setNumero('SyntaxError') 
        break;
    
      default:
        break;
    }
    setNumeroAnterior('0')
  }
  return {numero,numeroAnterior, limpiar,armarNumero,positivoNegativo,BtnDel,btnDividir,btnMultiplicar,
          btnRestar,btnSumar, calcular}
}