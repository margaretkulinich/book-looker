import { Section, classes} from "./styles";

export function SectionItem({img, alt, title, text, index}) {
    return (
        <Section index={index}>
            <img
                src={img}
                alt={alt}
                className={classes.img}
            >
            </img>
            <div className={classes.info}>
                <h3 className={classes.title}>{title}</h3>
                <span className={classes.text}>{text}</span>
            </div>
        </Section>
    )
}