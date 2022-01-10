import react from 'react';
import HomeIcon from './nav-icons/HomeIcon';
import MessagesIcon from './nav-icons/MessagesIcon';
import NewPostIcon from './nav-icons/NewPostIcon';
import ExploreIcon from './nav-icons/ExploreIcon';
import ActivityIcon from './nav-icons/ActivityIcon';
import styles from '@/styles/components/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className='uk-navbar-container' uk-navbar>
      <div className={styles.navbar}>
        <div className={styles.col1}>
          <h2 className={styles.brand}>
            Instagram
          </h2>
        </div>
        <div className={styles.col2}>
          <input
            id={styles.searchbar}
            className='uk-input'
            placeholder='Search'
            type='text'
          />
        </div>
        <div className={styles.col3}>
          <div className={styles.home}>
            <HomeIcon />
          </div>
          <div className={styles.icons}>
            <MessagesIcon />
          </div>
          <div className={styles.icons}>
            <NewPostIcon />
          </div>
          <div className={styles.icons}>
            <ExploreIcon />
          </div>
          <div className={styles.icons}>
            <ActivityIcon />
          </div>
          <div className={styles.icons}>
            <ExploreIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
