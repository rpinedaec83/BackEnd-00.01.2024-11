# Comandos Básicos

```bash
  # Cambiar directorio
  cd rutaAbsoluta
  cd rutaRelativa (../)


  # Listar archivos y carpetas
  ls                   # Lista archivos del directorio actual
  ls -l                # Lista con detalles
  ls -a                # Incluye archivos ocultos
  ls -lh               # Tamaño de archivos en formato legible

  # Lugar donde me encuetro
  pwd

  # Crear una carpeta
  mkdir nombreCarpeta

  # Crear un archivo
  touch nombreArchivo.extension

  # Borrar un archivo
  rm nombreArchivo.extension

  # Eliminar un directorio vacío
  rmdir nombreCarpeta

  # Eliminar un directorio y su contenido de forma recursiva
  rm -r nombreCarpeta

  # Eliminar un directorio y su contenido de forma recursiva y forzada
  rm -rf nombreCarpeta

  # Mover o renombrar un archivo/directorio
  mv archivo.txt nuevaRuta/
  mv archivo.txt archivoRenombrado.txt

  # Copiar archivos o directorios
  cp archivo.txt copiaArchivo.txt
  cp -r carpetaOriginal carpetaCopia

  # Mostrar el contenido de un archivo
  cat archivo.txt

  # Concatenar y mostrar varios archivos
  cat archivo1.txt archivo2.txt > archivo3.txt


  # Buscar archivos
  # Buscar archivos por nombre
  find /ruta -name "archivo*"

  # Buscar contenido dentro de un archivo
  grep "textoBuscado" archivo.txt


  # Información del sistema
  # Ver uso de espacio en disco
  df -h

  # Ver uso de memoria
  free -h

  # Mostrar procesos en ejecución
  ps aux

  # Mostrar la dirección IP de la máquina
  ip a


  # Comprimir y Descomprimir
  # Comprimir archivos en un archivo .tar.gz
  tar -czvf archivo.tar.gz archivo1 archivo2

  # Descomprimir un archivo .tar.gz
  tar -xzvf archivo.tar.gz

  # Comprimir en .zip
  zip archivo.zip archivo1 archivo2

  # Descomprimir un archivo .zip
  unzip archivo.zip


  # Permisos
  # Cambiar permisos de un archivo
  chmod 755 archivo.sh

  # Cambiar propietario de un archivo
  chown usuario:grupo archivo.txt


  # Redirección de Salida
  # Guardar la salida de un comando en un archivo
  ls > salida.txt

  # Añadir la salida al final de un archivo existente
  echo "texto" >> archivo.txt


  # Encadenar comandos
  # Ejecutar dos comandos en secuencia
  comando1 && comando2

  # Ejecutar dos comandos independientemente
  comando1 & comando2

  # Descargar un archivo desde una URL
  curl -O http://ejemplo.com/archivo.zip

```

# Encabezado nivel 1
## Encabezado nivel 2
### Encabezado nivel 3
#### Encabezado nivel 4
##### Encabezado nivel 5
###### Encabezado nivel 6

**Texto en negrita**  
__Texto en negrita__

*Texto en cursiva*  
_Texto en cursiva_

~~Texto tachado~~

- Elemento 1
- Elemento 2
  - Subelemento 2.1
  - Subelemento 2.2
* También funciona con asteriscos

1. Primer elemento
2. Segundo elemento
   1. Sub-elemento 1
   2. Sub-elemento 2
3. Tercer elemento

> Esto es una cita.
>> Cita dentro de otra cita.

Usa el comando `ls` para listar archivos.

```bash
  Lineas de comando
```

[Texto del enlace](https://ejemplo.com)

![Texto alternativo](https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg)

Tablas
| Encabezado 1 | Encabezado 2 |
|--------------|--------------|
| Celda 1      | Celda 2      |
| Celda 3      | Celda 4      |

| Alineación izquierda | Centro            | Derecha           |
|:---------------------|:-----------------:|------------------:|
| Celda izquierda      | Celda centrada    | Celda derecha     |


Lineas horizontales 
---
---

Check list
- [x] Tarea 1 completada
- [ ] Tarea 2 pendiente


Ecuación en línea: \( E = mc^2 \)  
Ecuación en bloque:
$$
\int_{a}^{b} x^2 dx
$$

H<sub>2</sub>O (agua)  
x<sup>2</sup> (x al cuadrado)




