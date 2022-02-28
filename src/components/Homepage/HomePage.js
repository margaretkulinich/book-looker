import { NavLink } from 'react-router-dom';
import { SectionList } from '../SectionList/SectionsList';
import { HomepageContainer, classes, SearchButton } from './styles';

export function HomePage() {
    return (
        <HomepageContainer>
            <section className={classes.banner}>
                <div className={classes.bannerText}>
                    <h1 className={classes.bannerHeadline}>Find the books you are looking for!</h1>
                    <span className={classes.textDescription}>you can find the book even if you don’t know the name of book or the author, just type a phrase and search.</span>
                    <NavLink to='/search' className={classes.navLink}>
                        <SearchButton variant="contained">Search now</SearchButton>
                    </NavLink>
                </div>
            </section>

            <h2 className={classes.title}>Why Is Reading Important?</h2>

            <SectionList />

            <footer className={classes.footer}>
                <h2 className={classes.title}>All books in one place</h2>
            </footer>
        </HomepageContainer>
    )
}