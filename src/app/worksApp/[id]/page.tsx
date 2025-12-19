import "../../works/[id]/worksPage.css";
import WorksAppList from "@/app/components/WorksAppList";
import ContactForm from "@/app/components/ContactForm";
import { worksApp } from "@/app/data/worksApp";

export default async function WorkAppDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const work = worksApp.find((item) => item.id === id);

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
                <h2 className="page-title">{work.title}</h2>

                <img
                    src={work.imageMain}
                    alt={work.title}
                    className="work_mainImg"
                />

                <div className="ss-wrapper">
                    <ul className="work_info-list">
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

                    <dl className="work_detail-list">
                        {work.description.map((desc, index) => (
                            <div key={index}>
                                <dt>{desc.dt}</dt>
                                <dd
                                    dangerouslySetInnerHTML={{
                                        __html: desc.dd,
                                    }}
                                />
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <WorksAppList />
            <ContactForm />
        </>
    );
}
