import * as React from 'react';
import { 
  classes,
  ActionLinks,
  BookCard,
  BookImage,
  DecorationButton,
  BootstrapDialog,
  StyledDialogContent
} from './styles';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 15,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export function ImgMediaCard(
  { 
    src,
    title,
    description,
    authors, previewLink,
    publicationDate,
    language
  }
) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <BookCard>
      <BookImage component="img" alt="green iguana" image={src} />

      <h4 className={classes.bookName}>{title.slice(0, 100)}</h4>
      <p className={classes.bookAuthors}>Authored By: {authors.slice(0, 50)}</p>

      <ActionLinks>
        <DecorationButton size="small">
          <a
            target="_blank"
            href={previewLink}
            rel="noreferrer"
            className={classes.linkRead}
          >
            Read now
          </a>
        </DecorationButton>
        <DecorationButton
          size="small"
          onClick={handleOpen}
        >
          Learn More
        </DecorationButton>
      </ActionLinks>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          sx={{ pr: 6 }}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <span className={classes.bookName}>"{title}"</span>
        </BootstrapDialogTitle>

        <StyledDialogContent dividers>
          <div className={classes.bookModalInfoContainer}>
            <img src={src} alt='book'></img>
            <div className={classes.bookModalInfo}>
              <p>By: {authors}</p>
              <p>Publication Date: {publicationDate}</p>
              <p>Language: {language}</p>
            </div>
          </div>
          <p>{(description === 'no added description') ? description : description + '...'}</p>
        </StyledDialogContent>

        <DecorationButton size="small">
          <a
            target="_blank"
            href={previewLink}
            rel="noreferrer"
            className={classes.linkRead}
          >
            Read now
          </a>
        </DecorationButton>
      </BootstrapDialog>
    </BookCard>
  );
}