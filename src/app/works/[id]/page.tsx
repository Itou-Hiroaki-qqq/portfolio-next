import "./worksPage.css";
import WorksList from "@/app/components/WorksList";
import ContactForm from "@/app/components/ContactForm";

import { works } from "@/app/data/works";

type WorkDetailProps = {
    params: {
        id: string;
    };
};

export default function WorkDetailPage({ params }: WorkDetailProps) {
    const workId = Number(params.id);
    const work = works.find((item) => item.id === params.id);

    if (!work) {
        return (
            <section className="s-wrapper">
                <p>作品が見つかりませんでした。</p>
            </section>
        );
    }

    return (
        <>
            <section className="work-detail s-wrapper">
                {/* タイトル */}
                <h2 className="page-title">{work.title}</h2>

                {/* メイン画像 */}
                <img
                    src={work.imageMain}
                    alt={work.title}
                    className="work_mainImg"
                />

                <div className="ss-wrapper">
                    {/* 制作情報 */}
                    <ul className="work_info-list">
                        {/* 制作期間 */}
                        {work.period && work.period.length > 0 && (
                            <li className="work_info-item">
                                <h3 className="work_info-img">
                                    <img
                                        src="/assets/img/woksPage_period.png"
                                        alt="製作期間"
                                    />
                                </h3>
                                <dl className="works_info-periodList">
                                    {work.period.map((p, index) => (
                                        <div key={index}>
                                            <dt>{p.task}</dt>
                                            <dd>{p.duration}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </li>
                        )}

                        {/* 使用ツール */}
                        {work.tools && (
                            <li className="work_info-item">
                                <h3 className="work_info-img">
                                    <img
                                        src="/assets/img/woksPage_tools.png"
                                        alt="使用ツール"
                                    />
                                </h3>
                                <p className="work_info-txt">{work.tools}</p>
                            </li>
                        )}

                        {/* GitHub */}
                        {work.github && (
                            <li className="work_info-item">
                                <h3 className="work_info-img">
                                    <img
                                        src="/assets/img/woksPage_gitHub-url.png"
                                        alt="GitHubのURL"
                                    />
                                </h3>
                                <a
                                    href={work.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-hover"
                                >
                                    {work.github}
                                </a>
                            </li>
                        )}
                    </ul>

                    {/* 詳細説明 */}
                    <dl className="work_detail-list">
                        {work.description.map((desc, index) => (
                            <div key={index}>
                                <dt>{desc.dt}</dt>
                                <dd
                                    dangerouslySetInnerHTML={{ __html: desc.dd }}
                                />
                            </div>
                        ))}
                    </dl>

                    {/* ページショット */}
                    {work.shots && (
                        <div className="work_pageShot-zone">
                            <img
                                className="work_pageShot-pc"
                                src={work.shots.pc}
                                alt={`${work.title}のPCサイズのページショット画像`}
                            />
                            <img
                                className="work_pageShot-sp"
                                src={work.shots.sp}
                                alt={`${work.title}のSPサイズのページショット画像`}
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* 下部に WorksList / ContactForm を再表示 */}
            <WorksList />
            <ContactForm />
        </>
    );
}
