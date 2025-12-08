// app/components/SkillCard.tsx
type SkillItem = {
    id: string;
    name: string;
    img: string;
    text: string; 
    link?: string;
};

export default function SkillCard({
    item,
    first = false,
}: {
    item: SkillItem;
    first?: boolean;
}) {
    return (
        <li className={`skills_item ${first ? "skills_item--top" : ""}`}>
            <div className="skills_item-imgZone">
                <p className="skills_item-name">{item.name}</p>

                {/* Vue の <component is=""> を TSX で再現 */}
                {item.link ? (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="skills_item-img" src={item.img} alt={item.name} />
                    </a>
                ) : (
                    <div>
                        <img className="skills_item-img" src={item.img} alt={item.name} />
                    </div>
                )}
            </div>

            {/* v-html を再現 */}
            <p
                className="skills_item-txt"
                dangerouslySetInnerHTML={{ __html: item.text }}
            />
        </li>
    );
}
