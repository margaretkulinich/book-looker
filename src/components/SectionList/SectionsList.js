import { sectionInfo } from "./constants";
import { SectionItem } from "./SectionItem/SectionItem";

export function SectionList() { 
    return (
        sectionInfo.map((section, index) => {
            return (
                <SectionItem
                    key={section.id}
                    index={index + 1}
                    img={section.img}
                    alt={section.alt}
                    title={section.title}
                    text={section.text}
                />
            )
        })
    )
};