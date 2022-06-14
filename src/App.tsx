
import { Header } from './components/header/Header';
import { ProfileBox } from './components/profile/ProfileBox';
import { Post } from './components/body/Post';
import { posts } from './assets/mocks';

import styles from './App.module.css';
import './global.css'

const App = () => <>
  <Header />
  <div className={styles.wrapper}>

    <ProfileBox />
    <main>
      {posts.map(posts => {
        return (
          <Post
            key={posts.id+1}
            author={posts.author}
            content={posts.content}
            publishedAt={posts.publishedAt}
          />
        )})
      }
      
      
    </main>
  </div>

</>

export { App }

