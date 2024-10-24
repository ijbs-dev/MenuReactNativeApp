# MenuReactNativeApp - Aplicativo de Menu em React Native

Este repositório contém o código-fonte do **MenuReactNativeApp**, um aplicativo fictício desenvolvido para fins educacionais. Ele demonstra diversas funcionalidades, como cálculos, manipulação de strings, reprodução de vídeos, e mais.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Seções do Aplicativo](#seções-do-aplicativo)
- [Visualização Detalhada](#visualização-detalhada)
- [Customização](#customização)

## Visão Geral

O **MenuReactNativeApp** foi desenvolvido usando **React Native**. Ele inclui uma interface de menu com diversas funcionalidades como cálculos matemáticos, manipulação de strings, reprodução de vídeos do YouTube, entre outras. O aplicativo é otimizado tanto para **iOS** quanto para **Android**.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **TypeScript**: Linguagem utilizada para o desenvolvimento, garantindo segurança de tipos.
- **React Navigation**: Navegação entre telas.
- **Expo/CLI**: Ferramentas para rodar e testar o aplicativo.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **React Native Chart Kit**: Exibição de gráficos no aplicativo.

## Funcionalidades

- **Cálculo de Soma**: Permite somar dois números.
- **Cálculo Percentual**: Realiza cálculos percentuais.
- **Reversão de Strings**: Inverte a sequência de caracteres.
- **Reprodução de Vídeos do YouTube**: Mostra vídeos do YouTube no aplicativo.
- **Configurações**: Tela com opções de personalização.

## Estrutura do Projeto

O projeto segue uma estrutura de diretórios clara:

```
MenuReactNativeApp/
│
├── src/
│   ├── components/         # Componentes do aplicativo
│   ├── screens/            # Telas do aplicativo
│   ├── navigation/         # Navegação
│   └──img/                 # Imagens e vídeos
|
├── App.tsx                 # Arquivo principal
├── backend.js              # Logica backend
├── package.json            # Dependências e scripts
└── README.md               # Documentação
```

## Pré-requisitos

Para rodar o projeto, você precisará de:

- **Node.js** >= 18.
- Um emulador Android ou iOS configurado, ou um dispositivo físico.
- Ferramentas de desenvolvimento para **React Native** (CLI ou Expo).

## Como Rodar o Projeto

1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/MenuReactNativeApp.git
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Iniciar o servidor Metro**:
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Executar no Emulador/Dispositivo**:

### Para Android:

```bash
npm run android
# ou
yarn android
```

### Para iOS:

```bash
npm run ios
# ou
yarn ios
```

## Seções do Aplicativo

- **Tela de Soma**: Permite somar dois números.
- **Tela de Cálculo Percentual**: Faz cálculos percentuais.
- **Tela de Reversão de Strings**: Reverte strings inseridas.
- **Tela de Vídeo do YouTube**: Reproduz vídeos do YouTube.
- **Tela de Configurações**: Permite personalizar algumas opções do aplicativo.

## Visualização Detalhada

Aqui estão algumas imagens e vídeos do **MenuReactNativeApp** em ação:

### Galeria de Imagens 

| **Diretório do Projeto** | **Tela de Home** | **Tela de Configurações** |
| --- | --- | --- |
| <img src="https://github.com/ijbs-dev/MenuReactNativeApp/blob/main/src/img/screen/dir.png" width="300"/> | <img src="https://github.com/ijbs-dev/MenuReactNativeApp/blob/main/src/img/screen/home.png" width="300"/> | <img src="https://github.com/ijbs-dev/MenuReactNativeApp/blob/main/src/img/screen/img-seetings.png" width="300"/> |

### Galeria de Videos

| **Função Soma** | **Função Cálculo Percentual** | **Função Reversão de String** |
| --- | --- | --- |
| ![GIF - Soma](https://github.com/ijbs-dev/MenuReactNativeApp/blob/main/src/img/screen/plus.gif) | ![GIF - Percentual](https://github.com/ijbs-dev/MenuReactNativeApp/blob/main/src/img/screen/perc.gif) | ![GIF - Reversão de String](https://github.com/ijbs-dev/MenuReactNativeApp/blob/main/src/img/screen/reverse.gif) |

| **Reprodução de Vídeo do YouTube** | **Tela de Configurações (Animação)** | |
| --- | --- | --- |
| ![GIF - Vídeo do YouTube](https://github.com/ijbs-dev/MenuReactNativeApp/blob/main/src/img/screen/youtube.gif) | ![GIF - Configurações](https://github.com/ijbs-dev/MenuReactNativeApp/blob/main/src/img/screen/seetings.gif) | |


## Customização

Para personalizar o conteúdo:

- **Imagens**: Substitua as imagens no diretório `src/img/`.
- **Lógica**: Modifique os arquivos de lógica na pasta `src/components/`.
- **Estilo**: Ajuste os estilos diretamente no código ou utilize bibliotecas de estilo.
