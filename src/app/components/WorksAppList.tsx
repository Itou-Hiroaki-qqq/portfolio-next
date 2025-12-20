"use client";

import Link from "next/link";
import { worksApp, WorkApp } from "../data/worksApp";

export default function WorksAppList() {
    return (
        <section className="works wrapper" id="works-app">
            <h2 className="section_title">Works - App</h2>

            <ul className="works_list">
                {worksApp.map((work: WorkApp) => (
                    <li className="works_item" key={work.id}>
                        <Link href={`/worksApp/${work.id}`}>
                            <div className="works_inner">
                                <div className="works_imgBox">
                                    <img
                                        className="works_img"
                                        src={work.imageMain}
                                        alt={work.title}
                                    />
                                </div>
                                <div className="works_txtZone">
                                    <h3 className="works_topic">{work.title}</h3>
                                    <p className="works_category">{work.category}</p>
                                    <p className="works_role manrope">{work.role}</p>
                                    <p className="works_tool manrope">{work.tools}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
