export type WorkPeriod = {
    task: string;
    duration: string;
};

export type WorkDescription = {
    dt: string;
    dd: string; // HTML を含む場合あり
};

export type WorkShots = {
    pc: string;
    sp: string;
};

export type Work = {
    id: string;
    title: string;
    category: string;
    role: string;
    tools: string;
    period?: WorkPeriod[];
    description: WorkDescription[];
    github?: string;
    imageMain: string;
    shots?: WorkShots;
};

export const works: Work[] = [
    {
        id: "sugutabe",
        title: "野菜宅配サービス",
        category: "LP ｜ スクール課題",
        role: "Direction / Design / Coding",
        tools: "Figma / Photoshop / Illustrator / HTML / CSS / jQuery",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "3日" },
            { task: "デザイン", duration: "1週間" },
            { task: "コーディング", duration: "2週間" }
        ],
        description: [
            { dt: "制作概要", dd: "Webデザインスクールの課題として、ヒアリングシートに基づき架空のLPを制作" },
            { dt: "ターゲット", dd: "食にお金をかけられ、食にこだわりもある30～40代の女性" },
            { dt: "目的", dd: "お試し購入へ誘導すること" },
            { dt: "情報設計", dd: "「なぜ選ばれるか」「競合との違い」を明確に整理し、段階的に配置。要所にお試し購入を挟み誘導。" },
            { dt: "デザイン", dd: "「新鮮さ」「安心感」を伝えるためナチュラルな配色と写真を中心に構成。余白やモバイル操作性にも配慮。" },
            { dt: "コーディング", dd: "HTML5とCSS3（SCSS）でレスポンシブ対応。BEM設計を採用し、SEOと表示速度を意識。" },
            {
                dt: "デモURL",
                dd: '<a href="https://ito-hiroaki.sakura.ne.jp/sugutabe/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ito-hiroaki.sakura.ne.jp/sugutabe/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/sugutabe",
        imageMain: "/assets/img/worksPage_sugutabe.jpg",
        shots: {
            pc: "/assets/img/works_pageshot_sugutabe-pc.jpg",
            sp: "/assets/img/works_pageshot_sugutabe-sp.jpg"
        }
    },

    {
        id: "portfolio",
        title: "ポートフォリオサイト(vue.js)",
        category: "Website ｜ 自主制作",
        role: "Direction / Design / Coding",
        tools: "Figma / Photoshop / Illustrator / HTML / CSS / JavaScript / vue.js / firebase",
        period: [
            { task: "企画・ワイヤーフレーム", duration: "2日" },
            { task: "デザイン", duration: "3日" },
            { task: "コーディング", duration: "12日" }
        ],
        description: [
            { dt: "制作概要", dd: "副業や転職に向けて、Webコーダー／フロントエンドエンジニアとしてのポートフォリオを制作" },
            { dt: "ターゲット", dd: "コーディング案件を募集しているクライアントや、採用担当者" },
            { dt: "情報設計", dd: "デザイン性は必要最低限に抑え、スキル・制作物に注目が集まるよう設計" },
            { dt: "デザイン", dd: "「信頼感」を伝えるために青みのある配色とシンプルな構成を採用" },
            { dt: "コーディング", dd: "HTML5＋CSS3でレスポンシブ対応。BEM設計を採用し、gridレイアウトで拡張性も確保。静的サイトとして制作したものを後にvue.js化。" },
            { dt: "工夫点", dd: "vue.js化に際しては、今後servicies、skills、worksの項目を効率的に増やせるようループ処理を施した。またコンタクトフォームをfirebase、SendGridを使って自作した。" },
            {
                dt: "デモURL",
                dd: '<a href="https://ito-hiroaki.sakura.ne.jp/tech_portfolio_vue/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ito-hiroaki.sakura.ne.jp/tech_portfolio_vue/</a>'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/tech_portfolio_vue",
        imageMain: "/assets/img/worksPage_tech-portfolio.jpg",
        shots: {
            pc: "/assets/img/works_pageshot_tech-portfolio-vue-pc.png",
            sp: "/assets/img/works_pageshot_tech-portfolio-vue-sp.png"
        }
    },

    {
        id: "tech_lp01",
        title: "Kira-Kira Juku",
        category: "LP ｜ スクール課題",
        role: "Coding",
        tools: "HTML / CSS / JavaScript / XD",
        period: [{ task: "コーディング", duration: "3日" }],
        description: [
            { dt: "制作概要", dd: "案件概要書、仕様書、チェックシートに基づき架空の学習塾LPを制作" },
            { dt: "レスポンシブ対応", dd: "PC／タブレット／スマホ対応" },
            { dt: "コーディング概要", dd: "BEM設計を採用。ほぼピクセルパーフェクトでドロワーメニュー、タブメニューを実装" },
            { dt: "工夫点", dd: "jQueryを使わずにJavaScriptでUIを実装。レスポンシブ崩れを防ぐためvw・%を活用" },
            {
                dt: "デモURL",
                dd: '<a href="https://ito-hiroaki.sakura.ne.jp/tech_LP01/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ito-hiroaki.sakura.ne.jp/tech_LP01/</a><br>※IDとpasswordを入力してご覧ください。<br>ID: ito-hiroaki<br>password: basic999qqq'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/lp1",
        imageMain: "/assets/img/worksPage_tech-LP01.jpg",
        shots: {
            pc: "/assets/img/works_pageshot_tech-LP01-pc.jpg",
            sp: "/assets/img/works_pageshot_tech-LP01-sp.jpg"
        }
    },

    {
        id: "tech_lp02",
        title: "Kirameki Cream",
        category: "LP ｜ スクール課題",
        role: "Coding",
        tools: "HTML / CSS / JavaScript / swiper / XD",
        period: [{ task: "コーディング", duration: "2日" }],
        description: [
            { dt: "制作概要", dd: "案件概要書、仕様書、チェックシートに基づき架空の化粧品LPを制作" },
            { dt: "レスポンシブ対応", dd: "PC／タブレット／スマホ対応" },
            { dt: "コーディング概要", dd: "BEM設計を採用。カルーセル・アコーディオン・ページトップボタンを実装" },
            { dt: "工夫点", dd: "Swiperを活用しカルーセルを実装。jQueryを使わずにJSでアコーディオンを構築" },
            {
                dt: "デモURL",
                dd: '<a href="https://ito-hiroaki.sakura.ne.jp/tech_LP02/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ito-hiroaki.sakura.ne.jp/tech_LP02/</a><br>※IDとpasswordを入力してご覧ください。<br>ID: ito-hiroaki<br>password: basic999qqq'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/lq_2",
        imageMain: "/assets/img/worksPage_tech-LP02.jpg",
        shots: {
            pc: "/assets/img/works_pageshot_tech-LP02-pc.jpg",
            sp: "/assets/img/works_pageshot_tech-LP02-sp.jpg"
        }
    },

    {
        id: "tech_lp03",
        title: "KIRAMEKI BEAUTY LABO",
        category: "LP ｜ スクール課題",
        role: "Coding",
        tools: "HTML / CSS / jQuery / Photoshop",
        period: [{ task: "コーディング", duration: "3日" }],
        description: [
            { dt: "制作概要", dd: "案件概要書、仕様書、チェックシートに基づき架空の美容LPを制作" },
            { dt: "レスポンシブ対応", dd: "PC／タブレット／スマホ対応" },
            { dt: "コーディング概要", dd: "BEM設計を採用。カルーセル・CTAボタンを実装" },
            { dt: "工夫点", dd: "jQueryでslickを使いカルーセルを実装。崩れ防止のためvw・%で配置を工夫" },
            {
                dt: "デモURL",
                dd: '<a href="https://ito-hiroaki.sakura.ne.jp/tech_LP03/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ito-hiroaki.sakura.ne.jp/tech_LP03/</a><br>※IDとpasswordを入力してご覧ください。<br>ID: ito-hiroaki<br>password: basic999qqq'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/lq_3",
        imageMain: "/assets/img/worksPage_tech-LP03.jpg",
        shots: {
            pc: "/assets/img/works_pageshot_tech-LP03-pc.jpg",
            sp: "/assets/img/works_pageshot_tech-LP03-sp.jpg"
        }
    },

    {
        id: "tech_website",
        title: "Kirameki Farm",
        category: "Website ｜ スクール課題",
        role: "Coding / WordPress",
        tools: "HTML / CSS / JavaScript / swiper / Photoshop / WordPress / PHP",
        period: [
            { task: "コーディング", duration: "3日" },
            { task: "WordPress化", duration: "1日" }
        ],
        description: [
            { dt: "制作概要", dd: "スクール課題としてLPを制作後、自主制作としてWordPress化" },
            { dt: "レスポンシブ対応", dd: "PC／タブレット／スマホ対応" },
            { dt: "コーディング概要", dd: "ドロワーメニュー・カルーセル・アコーディオンを実装。WP化はクラシックテーマで構築" },
            { dt: "工夫点", dd: "Swiperでカルーセルを実装。アクセシビリティ配慮としてdetailsタグを利用。WP化では条件分岐を活用" },
            {
                dt: "デモURL",
                dd: '<a href="https://ito-hiroaki.sakura.ne.jp/tech_website_wp/" target="_blank" rel="noopener noreferrer" class="link-hover">https://ito-hiroaki.sakura.ne.jp/tech_website_wp/</a><br>※IDとpasswordを入力してご覧ください。<br>ID: ito-hiroaki<br>password: basic999qqq'
            }
        ],
        github: "https://github.com/Itou-Hiroaki-qqq/tech_website_wp",
        imageMain: "/assets/img/worksPage_tech-website.jpg",
        shots: {
            pc: "/assets/img/works_pageshot_tech-website-pc.jpg",
            sp: "/assets/img/works_pageshot_tech-website-sp.jpg"
        }
    }
];
