import type { NextPage } from 'next';
import Posts from '@/components/Posts';
import Reels from '@/components/Reels';
import styles from '@/styles/pages/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <Reels />
      <Posts />
    </div>
  )
}

export default Home
