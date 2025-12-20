export type Service = {
    id: number;
    imageSp: string;
    imagePc: string;
    alt: string;
    title: string;
    description: string; // HTML を含む
};

export const services: Service[] = [
    {
        id: 1,
        imageSp: "/assets/img/services_01_coding_sp.png",
        imagePc: "/assets/img/services_01_coding_pc.png",
        alt: "コーディング",
        title: "Webサイトのコーディング",
        description: `コーポレートサイトなどの複数ページサイトやランディングページのコーディングを承ります。<br>
        PC／タブレット／スマートフォンのレスポンシブ対応可。<br>
        カルーセルやアコーディオンメニューなど各種UIの実装も柔軟に対応いたします。`,
    },
    {
        id: 2,
        imageSp: "/assets/img/services_02_WebApp_sp.png",
        imagePc: "/assets/img/services_02_WebApp_pc.png",
        alt: "Webアプリ開発",
        title: "Webアプリケーション開発",
        description: `Firebase/Supabaseを用いたデータベース構築やユーザー認証機能、外部APIを利用したデータ取得など、実用的なWebアプリの開発を承ります。<br>レシピ検索アプリ、AIによる情報整理アプリ、在庫管理ツールなど、検索・登録・お気に入り・分類などの機能を備えたアプリケーションの制作が可能です。`,
    },
    {
        id: 3,
        imageSp: "/assets/img/services_03_WordPress_sp.png",
        imagePc: "/assets/img/services_03_WordPress_pc.png",
        alt: "WordPress",
        title: "WordPressの導入",
        description: `WordPressによるWebサイト作成を承ります。<br>
        クラシックテーマによる実装も対応可ですのでご要望のデザインを実現できます。<br>
        ブログやニュースなどご自身で更新ができる機能の実装も対応いたします。`,
    },
    {
        id: 4,
        imageSp: "/assets/img/services_04_WebWriting_sp.png",
        imagePc: "/assets/img/services_04_WebWriting_pc.png",
        alt: "Webライティング",
        title: "Web記事の作成",
        description: `オウンドメディアなどでの記事作成を承ります。<br>
        ターゲットとなる検索ワードに基づき、上位表示に必要な競合調査、付加価値のある情報の創出、SEO対策に対応可。<br>
        読者の知りたい情報に基づく構成、コンバージョンを意識した文章展開が可能です。`,
    },
    // コーディング、WordPress、ライティングの画像はどこからもってきたか忘れてしまった。そのためアプリ画像はGPTで作成
];
