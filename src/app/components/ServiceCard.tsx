// app/components/ServiceCard.tsx
type Service = {
    id: number;
    title: string;
    imagePc: string;
    imageSp: string;
    alt: string;
    description: string; // HTMLを含む
};

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <li className="services_item">
            <picture className="services_img">
                <source srcSet={service.imagePc} media="(min-width: 768px)" />
                <img src={service.imageSp} alt={service.alt} />
            </picture>

            <h3 className="services_title">{service.title}</h3>

            {/* v-html 相当 → dangerouslySetInnerHTML */}
            <p
                className="services_txt"
                dangerouslySetInnerHTML={{ __html: service.description }}
            />
        </li>
    );
}
