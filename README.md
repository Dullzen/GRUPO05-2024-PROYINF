
# Grupo Lethal Company

Este es el repositorio del *Lethal Company*, cuyos integrantes son:

* Benjamin Ponce - 202173615-8
* Javiera Bobadilla - 202173584-4
* Cristóbal Lazcano - 202173567-4
* Elias Valle - 202173537-2
* **Ayudante**: José Southerland

## Wiki

> Obtener enlace desde el home de la wiki del repo.

Puede acceder a la Wiki mediante el siguiente [enlace](https://github.com/Dullzen/GRUPO05-2024-PROYINF/wiki)

## Hito 2
Cambios en el proyecto han sido realizados.

## Planning Pocker
### Escala 1-10:
* Descarga imagenes 3
* Autenticacion de usuarios 7
* Anotaciones en imagenes 5
* Exportacion de imagenes 4

## Hito 3
Durante los testeos, se obtuvo que para imágenes dentro de la página detectaba error al igual que para imágenes que no se encontraban dentro de la página 
![ImageN DICOM subida](https://github.com/Dullzen/GRUPO05-2024-PROYINF/blob/8a4120aa4a6b7a69a00bb8cd27105e64c0a35405/Captura%20de%20pantalla%202024-10-08%20001610.png)
*Figura 1: Captura de una imagen DICOM subida exitosamente.*
![Test para la vista](https://github.com/Dullzen/GRUPO05-2024-PROYINF/blob/efb5cd695d5bd9252436286177e8547c6d188925/Captura%20de%20pantalla%202024-10-08%20002645.png)
*Figura 2: Captura del testeo para esa imagen para la visualiazación.*
![Test para la descarga](https://github.com/Dullzen/GRUPO05-2024-PROYINF/blob/19db13f9a8eec07de1a89c4df335b88687a6fa9e/Captura%20de%20pantalla%202024-10-08%20003529.png)
*Figura 3: Captura del testeo para esa imagen para la descarga.*

## Hito 4

## Descripción General

Este proyecto permite la visualización y manipulación de imágenes médicas en formato DICOM. Incluye la funcionalidad para buscar imágenes DICOM mediante el ID o nombre del paciente, visualizar las imágenes en tres direcciones ortogonales (axial, coronal y sagital), y herramientas para manipular las imágenes, como ajustar el contraste, invertir la imagen a negativo, y aplicar distintos mapas de colores.

## Funcionalidades Principales

1. **Búsqueda por Cabecera DICOM**:
   - El usuario puede buscar imágenes DICOM mediante el **ID del paciente** o el **nombre del paciente**.
   - La cabecera DICOM (información del paciente) se muestra junto a la imagen seleccionada.

2. **Visualización en 3 Direcciones Ortogonales**:
   - Las imágenes DICOM pueden visualizarse en tres vistas ortogonales: **Axial**, **Coronal**, y **Sagital**.

3. **Manipulación de Imágenes**:
   - El usuario puede ajustar el **contraste** (Window Width) y el **brillo** (Window Center) mediante controles deslizantes.
   - Existe una opción para **invertir los colores** de la imagen, permitiendo visualizarla en negativo.
   - El usuario puede seleccionar distintos **mapas de colores**, como escala de grises o un mapa de calor (hot).

   Dentro de los commits e implementaciones de las historias de usuarios se tiene el siguiente avance:
1. Funcionalidad de visualización ortogonal de imágenes DICOM : En progreso
2. Herramienta de ajuste de contraste y brillo: En progreso
3. Botón para invertir imagen a negativo : En progreso
4. Aplicación de mapas de colores (grayscale, hot) en imágenes DICOM: En progreso
5.  Búsqueda de imágenes por cabecera DICOM (ID o nombre del paciente) 
