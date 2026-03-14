# IEMA App

Aplicativo mobile desenvolvido com React Native + Expo para alunos, com foco em busca de vagas, gerenciamento de candidaturas e perfil/curriculo.

## Sobre o projeto

O IEMA App oferece um fluxo completo para o usuario:

- Acesso por login, cadastro e recuperacao de senha
- Navegacao principal com Drawer e abas
- Visualizacao de vagas gerais e vagas compativeis
- Acompanhamento de candidaturas
- Edicao/consulta de curriculo e configuracoes do aluno

## Tecnologias utilizadas

- React Native
- Expo (Dev Client)
- TypeScript
- React Navigation
  - Native Stack
  - Drawer
  - Bottom Tabs
- Expo Vector Icons
- React Native Reanimated / Gesture Handler

## Estrutura principal

```text
src/
  app/
    login/
    cadastro/
    esqueciSenha/
    Dashboard/
    VagasgeraisBuca/
    PerfilAluno/
    notificacoes/
  navigation/
    StackNavigator.tsx
    DrawerNavigator.tsx
    TabNavigation.tsx
  screens/
    VagasCompativeis/
    Candidaturas/
    Curriculo/
    configuracaoAluno/
  components/
  constants/
```

## Pre-requisitos

- Node.js (LTS recomendado)
- npm
- Expo CLI (via npx)
- Android Studio (para Android)
- Xcode (para iOS, apenas macOS)

## Como executar o projeto

1. Clone o repositorio:

```bash
git clone <url-do-repositorio>
cd iema-app
```

2. Instale as dependencias:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm run start
```

4. Execute no dispositivo/emulador:

```bash
npm run android
```

```bash
npm run ios
```

```bash
npm run web
```

## Scripts disponiveis

- `npm run start`: inicia o Metro/Expo Dev Client
- `npm run android`: executa no Android
- `npm run ios`: executa no iOS
- `npm run web`: executa versao web

## Fluxo de navegacao

- `StackNavigator`: telas de autenticacao e entrada no app
- `DrawerNavigator`: menu lateral com secoes principais
- `TabNavigation`: navegacao inferior (Home, Vagas, Perfil)

## Status do projeto

Projeto em desenvolvimento.

## Contribuicao

1. Crie uma branch para sua feature:

```bash
git checkout -b feat/minha-feature
```

2. Commit suas alteracoes:

```bash
git commit -m "feat: descricao da feature"
```

3. Envie para o repositorio remoto:

```bash
git push origin feat/minha-feature
```

4. Abra um Pull Request.

## Licenca

Defina aqui a licenca do projeto (MIT, Apache-2.0, etc.).
