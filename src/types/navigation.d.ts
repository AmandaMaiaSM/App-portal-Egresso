export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Cadastro: undefined;
    EsqueciSenha: undefined;
    Notificacoes: undefined;
    Drawer: undefined;
};

export type RootTabParamList = {
    Home: undefined;
    Vagas: undefined;
    Perfil: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
