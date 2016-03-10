# MiSoluciondeNodeSchool
## HTTP FILE SERVER (Ejercicio 11 de 13)  
   
  Escribe un servidor HTTP que sirva un mismo archivo de texto para todas  
  las peticiones que reciba.  
   
  El servidor deberá escuchar en un puerto cuyo número será el primer  
  argumento del programa. Como segundo argumento recibirá la ruta a la  
  ubicación del archivo. Debes usar fs.createReadStream() para servir como  
  stream los contenidos del archivo en la respuesta del servicio.