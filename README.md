# Unleash React Native Example

Este proyecto es un ejemplo práctico de cómo integrar e implementar **Unleash** (gestión de Feature Flags) en una aplicación de **React Native**.

## Descripción

El objetivo de este repositorio es demostrar la configuración necesaria para consumir **flags** de Unleash de manera eficiente utilizando almacenamiento local (AsyncStorage) para persistencia.

## Bibliotecas Utilizadas

Para el funcionamiento de Unleash y la gestión del entorno, se han instalado las siguientes dependencias:

- **@unleash/proxy-client-react**: Proporciona los hooks y el Provider para integrar Unleash con React.
- **unleash-proxy-client**: El cliente base para la comunicación con el Proxy de Unleash.
- **@react-native-async-storage/async-storage**: Utilizado para persistir el estado de los flags localmente (`storageProvider`).
- **react-native-get-random-values**: Dependencia necesaria para la generación de IDs y valores aleatorios en el cliente.
- **react-native-dotenv**: Utilizada para extraer y proteger la configuración de Unleash (URL, API Key, etc.) mediante variables de entorno.

## Configuración y Uso

### 1. Requisitos previos

Asegúrate de tener un archivo `.env` en la raíz del proyecto con el siguiente formato:

```env
UNLEASH_URL=URL_FRONTEND_UNLEASH
UNLEASH_CLIENT_KEY=UNLEASH_CLIENT_KEY
UNLEASH_APP_NAME=YOUR_APP_NAME
```

### 2. Instalación

Instala las dependencias del proyecto:

```bash
yarn install
```

### 3. Ejecución

Para iniciar el proyecto limpiando el cache (recomendado tras cambios en `.env`):

```bash
yarn start --reset-cache
```

Luego, ejecuta la plataforma deseada en otra terminal:

```bash
yarn ios
# o
yarn android
```

## Estructura de Configuración

La configuración principal de Unleash se encuentra en `src/unleash/unleashConfig.ts`, donde se inicializa el cliente utilizando las variables de entorno importadas desde `@env`.
