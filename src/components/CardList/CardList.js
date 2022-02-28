import { ImgMediaCard } from "./Card/ImgMediaCard";
import { DEFAULT_BOOK_DESCRIPTION, DEFAULT_BOOK_IMAGE_SRC } from "./constants";
import { CardContainer, classes } from "./styles";

export function CardList({ searchValue, books }) {
    return (
        <CardContainer>
            {(books.length > 0)
                ? <div className={classes.searchValueInfo}>Search result for '{searchValue}'</div>
                : null}

            <div className={classes.cardList}>
                {books.map((bookItem) => {
                    const bookItemVolumeInfo = bookItem.volumeInfo;
                    const imgLink = 
                        (bookItem.volumeInfo.imageLinks && bookItem.volumeInfo.imageLinks.smallThumbnail)
                        ?? DEFAULT_BOOK_IMAGE_SRC;
                    const bookTitle = bookItemVolumeInfo.title;
                    const bookDescription = (bookItemVolumeInfo.description?.slice(0, 500)) ?? DEFAULT_BOOK_DESCRIPTION;
                    const bookAuthor = bookItemVolumeInfo.authors?.slice(0, 40).join(', ') ?? '-';
                    const bookPreviewLink = bookItemVolumeInfo.previewLink;
                    const publicationDate = bookItemVolumeInfo.publishedDate ?? '-';
                    const bookLanguage = bookItemVolumeInfo.language ?? '-';

                    return bookTitle !== undefined && bookPreviewLink !== undefined
                        ? (
                            <ImgMediaCard
                                src={imgLink}
                                key={bookItem.id}
                                title={bookTitle}
                                description={bookDescription}
                                authors={bookAuthor}
                                previewLink={bookPreviewLink}
                                publicationDate={publicationDate}
                                language={bookLanguage}
                            />
                        ) : null;
                })}
            </div>
        </CardContainer>
    )
}