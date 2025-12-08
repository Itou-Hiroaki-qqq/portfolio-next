export type SkillItem = {
    id: string;
    name: string;
    img: string;
    link?: string;
    text: string;
};

export type SkillGroup = {
    id: string;
    category: string;
    items: SkillItem[];
};

export const skills: SkillGroup[] = [
    {
        id: "lang",
        category: "開発言語",
        items: [
            {
                id: "html",
                name: "HTML",
                img: "/assets/img/skills_01_html.png",
                link: "https://icons8.com/icon/20909/html-5",
                text: "BEMによるクラス管理、セマンティックでアクセシビリティを考慮したマークアップを意識したコーディングが可能。"
            },
            {
                id: "css",
                name: "CSS",
                img: "/assets/img/skills_02_css.png",
                link: "https://icons8.com/icon/4d9YPiN04osD/css",
                text: "Flexbox / Grid によるレスポンシブ設計、CSS変数やアニメーションも対応可能。"
            },
            {
                id: "js",
                name: "JavaScript",
                img: "/assets/img/skills_03_JavaScript.png",
                link: "https://icons8.com/icon/PXTY4q2Sq2lG/javascript",
                text: "jQueryに依存せずにドロワー、モーダルウィンドウ、アコーディオン、タブメニューなどのUI実装が可能。"
            }
        ]
    },
    {
        id: "library",
        category: "ライブラリー",
        items: [
            {
                id: "jquery",
                name: "jQuery",
                img: "/assets/img/skills_04_jQuery.png",
                link: "https://icons8.com/icon/HKNzD81eiiSc/jquery",
                text: "Webサイトでよく見る各種UI実装が可能。"
            },
            {
                id: "swiper",
                name: "Swiper.js",
                img: "/assets/img/skills_05_swiper.png",
                text: "レスポンシブ対応のスライダー実装が可能。"
            },
            {
                id: "gsap",
                name: "GSAP",
                img: "/assets/img/skills_06_gsap.png",
                text: "アニメーションUIの実装が可能。"
            }
        ]
    },
    {
        id: "framework",
        category: "フレームワーク／CMS",
        items: [
            {
                id: "react",
                name: "React / Next.js",
                img: "/assets/img/skills_07_react.png",
                link: "https://icons8.com/icon/asWSSTBrDlTW/react",
                text: "ポートフォリオサイトを構築できるレベルの知識を有し、SPA開発や状態管理、コンポーネント設計に対応可能。"
            },
            {
                id: "vue",
                name: "Vue.js / Nuxt.js",
                img: "/assets/img/skills_08_vue.png",
                link: "https://icons8.com/icon/eETV3RNHVrWA/vuejs",
                text: "ポートフォリオサイトを構築できるレベルの知識を有し、SPA開発や状態管理、コンポーネント設計に対応可能。"
            },
            {
                id: "wp",
                name: "WordPress",
                img: "/assets/img/skills_09_WordPress.png",
                link: "https://icons8.com/icon/v9uZbuVoWleB/wordpress",
                text: "クラシックテーマによる自由なデザインの構築、サーバーアップロード、カスタム投稿タイプ・カスタムフィールドの実装が可能。"
            }
        ]
    },
    {
        id: "tools",
        category: "ツール",
        items: [
            {
                id: "vscode",
                name: "Visual Studio Code",
                img: "/assets/img/skills_10_vscode.png",
                link: "https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code-2019",
                text: "エメットによる効率的コーディング、拡張機能活用、Git連携が可能。"
            },
            {
                id: "figma",
                name: "Figma",
                img: "/assets/img/skills_11_figma.png",
                link: "https://icons8.com/icon/P5ROoX4rxKSE/figma",
                text: "デザインカンプの作成・確認が可能。"
            },
            {
                id: "xd",
                name: "Adobe XD",
                img: "/assets/img/skills_12_XD.png",
                link: "https://icons8.com/icon/4VVL78edhbW9/adobe-xd",
                text: "デザインカンプの確認が可能。"
            },
            {
                id: "git",
                name: "Git / GitHub",
                img: "/assets/img/skills_13_GitHub.png",
                link: "https://icons8.com/icon/3tC9EQumUAuq/github",
                text: "Gitを用いた基本的なバージョン管理（コミット、ブランチ作成、マージなど）が可能。GitHubを利用したコード共有やプルリクエストの作成・レビューの流れを理解している。"
            },
            {
                id: "ps",
                name: "Photoshop",
                img: "/assets/img/skills_14_photoshop.png",
                link: "https://icons8.com/icon/13677/adobe-photoshop",
                text: "WebデザインやLP制作に必要な基本操作、デザインカンプの確認が可能。"
            },
            {
                id: "ai",
                name: "Illustrator",
                img: "/assets/img/skills_15_illustrator.png",
                link: "https://icons8.com/icon/13631/adobe-illustrator",
                text: "WebデザインやLP制作に必要な基本操作が可能。"
            },
            {
                id: "slack",
                name: "Slack",
                img: "/assets/img/skills_16_slack.png",
                link: "https://icons8.com/icon/OXVeOEj6qZqX/slack",
                text: "チームコミュニケーションでの使用経験あり。"
            }
        ]
    },
    {
        id: "others",
        category: "その他のスキル",
        items: [
            {
                id: "writing",
                name: "Webライティング",
                img: "/assets/img/skills_17_WebWriting.png",
                link: "https://icons8.com/icon/8172/pen",
                text: "Writing Hacks卒業。<br>検索上位を獲得するための記事構成、タイトル、リード文、文章表現、文章展開、画像選定、SEO対策が可能。練習で運営したブログでは15記事中12記事（80％）で上位表示を達成。"
            }
        ]
    }
];
