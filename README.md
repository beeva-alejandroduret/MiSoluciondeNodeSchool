# MiSoluciondeNodeSchool
## HTTP JSON API SERVER (Ejercicio 13 de 13)  
   
  Escribe un servidor de HTTP que sirva datos en formato JSON cuando reciba  
  una petición GET con la ruta (endpoint) '/api/parsetime'. Asume que la  
  petición tiene un parámetro 'iso' cuyo valor es un fecha hora en formato  
  ISO.  
   
  Por ejemplo:  
   
  /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
  La respuesta JSON debe contener únicamente los propiedades 'hour',  
  'minute' y 'second' correspondientes a la fecha recibida. Ejemplo:  
   
     {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }  
   
  Luego, agrega un segundo endpoint con ruta '/api/unixtime' que reciba los  
  mismos parámetros que la anterior pero que devuelva la fecha en formato  
  UNIX, por ejemplo:  
   
     {   
         "unixtime": 1376136615474   
     }  
   
  El servidor deberá escuchar en un puerto cuyo número será el primer  
  argumento del programa.  