## Introdução

<p align="center">
<img src="https://github.com/pedro-candido/store/blob/master/src/assets/Logo-white.png?raw=true" />
</p>

<p align="center">
</p>
Olá pessoal, espero que estejam muito bem!

Este projeto tem a intenção de validar meus conhecimentos perante o React Native.

## Tecnologias utilizadas

Segue lista das bibliotecas principais utilizadas no app para a realização:

- Expo
- TypeScript
- Styled-components
- Google fonts
- FlashList
- jest

## Escolha das Libs

- Expo: foi escolhida para agilizar o desenvolvimento sendo uma recomendação do próprio react-native utilizar um framework como expo.
- Styled-components: Foi escolhido o styled-components pois é a tecnologia de estilos que eu já utilizo no dia a dia, agilizando a parte de desenvolvimento.
- FlashList: Há alguns estudos referente a FlashList vs FlatList mostrando os ganhos de performance em momentos de renderização de listas. Exemplo: https://shopify.engineering/instant-performance-upgrade-flatlist-flashlist

## Arquitetura de Pastas

Atuei em alguns projetos durante minha carreira, com organizações diferentes, escolhi uma que se aproximasse ao máximo de uma estrutura que me agradasse, tudo separado ficando de fácil uso pra qualquer pessoa que entrasse e fosse utilizar o projeto.

```

├── src
│   ├── assets          # Assets folder for app icon and splashscreen
│   ├── types           # Types declarations to images .png.d.ts or .svg.d.ts
│   ├── assets          # Assets folder for icons, illustrations
│   ├── constants       # All constants reutilized
│   ├── components      # Components reutilized
│   ├── routes          # Navigation configuration
│   ├── screens         # Screens (can have or not a folder with specific components)
│   ├── api             # API creation
│   ├── hooks           # Hooks used on all project
│   ├── store           # Zustand stores
│   ├── utils           # Utils methods
```

Segue imagem com conteúdo representado.

<img src="https://raw.githubusercontent.com/pedro-candido/store/c963ca3c75d0ddfb21e3daac55d7434e4f4f8a25/src/assets/organization.svg"/>


## Setup

1. Instale o NVM ou Node.js LTS release - v20.12.0(Versão utilizada)
2. Git
3. Commitzen
4. Yarn
5. Expo CLI
6. Android Studio - Versão recomendada Jellyfish 2023.3.1
7. Graddle version - Versão 8.6
8. XCode - versão recomendada 15.4
9. Testes realizados no iOS 17.4 - iPhone 15 Pro e no Pixel 8(API 34)

## Rodar o projeto

1. Clone o projeto
   ```bash
    git clone https://github.com/pedro-candido/store.git
   ```
2. Instale as dependências rodando:

   ```bash
    yarn

    // Apenas rode se for utilizar o iOS
    yarn clean:ios
   ```

3. Instale os builds nos respectivos emuladores.
   ```
   yarn android
   yarn ios
   ```

## Para utilizar o storybook

1. Vá para o arquivo `./App.tsx` e troque o return

```javascript
   // from
  return <Routes />;
  // to
  return <AppEntryPoint />
```

2. Rode o yarn start novamente ou atualize o metro.

## Melhorias para o projeto caso fosse um projeto para Produção

- Adicionar rastreamento de erros e observabilidade com ferramentas como Dynatrace, Sentry, Crashlytics ou Datadog.
- Adicionar SplashScreen animada.
- Telas de Login, Cadastro, perfil.
- Ferramentas para Testes A/B, feature flags e tagueamento como o Firebase/Analytics.
- Adição de recursos OTA(Over the air).
- Documentação de Code Style.
