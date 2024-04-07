interface WayToTeachProps {
    title: string;
    description: string;
}

export default function WayToTeach({ title, description }: WayToTeachProps) {
    return (
        <li>
            <p>
                <strong>{title} </strong>
                {description}
            </p>
        </li>
    );
}
