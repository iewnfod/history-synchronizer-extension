export interface Translation {
    ServerAddress: string;
    Username: string;
    Password: string;
    OfficialServer: string;
    RegisterButton: string;
    LoginButton: string;
    SetupOwnServer: string;
    Required: string;
}

export const Chinese: Translation = {
    ServerAddress: "服务器地址",
    Username: "用户名",
    Password: "密码",
    OfficialServer: "官方服务器",
    RegisterButton: "注册账号",
    LoginButton: "登录同步服务器",
    SetupOwnServer: "搭建自己的服务器？",
    Required: "必填"
}

export const English: Translation = {
    ServerAddress: "Server Address",
    Username: "Username",
    Password: "Password",
    OfficialServer: "Official Server",
    RegisterButton: "Register",
    LoginButton: "Login to Sync Server",
    SetupOwnServer: "Set up your own server?",
    Required: "Required"
}

export const Japanese: Translation = {
    ServerAddress: "サーバーアドレス",
    Username: "ユーザー名",
    Password: "パスワード",
    OfficialServer: "公式サーバー",
    RegisterButton: "アカウントを登録",
    LoginButton: "同期サーバーにログイン",
    SetupOwnServer: "自分のサーバーをセットアップしますか？",
    Required: "必須"
}

export function getTrans(): Translation {
    const lang = chrome.i18n.getUILanguage();
    switch (lang) {
        case "zh-CN":
        case "zh-TW":
            return Chinese;
        case "ja":
            return Japanese;
        default:
            return English;
    }
}
