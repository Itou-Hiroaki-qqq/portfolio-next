// app/components/WorksList.tsx
"use client";

import Link from "next/link";
import { works } from "../data/works";

type Work = {
    id: number;
    title: string;
    category: string;
    role: string;
    tools: string;
    imageMain: string;
};

export default function WorksList() {
    return (
        <section className="works wrapper" id="works">
            <h2 className="section_title">Works</h2>

            <ul className="works_list">
                {works.map((work: Work) => (
                    <li className="works_item" key={work.id}>
                        <Link href={`/works/${work.id}`}>
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
