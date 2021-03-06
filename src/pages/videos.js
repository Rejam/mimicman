import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import style from '../css/video.module.css'

const videos = [
  {
    id: 'ZocJahCTZy0',
    caption: `Watch Cal's audition on Britain's Got Talent as one half of The MimicMen`,
  },
  {
    id: 'YDsWyOp9kSM',
    caption: 'Calling Michael McIntyre as Michael McIntyre'
  },
  { id: 'slB1oRyifJs', caption: 'Cal calls a nursery as Mrs Doubtfire' },
  {
    id: 'yzDqDMZIjUs',
    caption: 'Cal in a promotional video for a local taxi service!',
  },
]
export default () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="Description"
          content="Watch some of the videos that Cal has been in or created."
        />
        <title>Cal Halbert: Videos</title>
        <link rel="canonical" href="https://calhalbertcomedy.co.uk/videos" />
      </Helmet>
      <main>
        <section>
          <h1>Videos</h1>
          <div>
            {videos.map(({ id, caption }) => (
              <figure key={id} className={style.video}>
                <article className={style.frame}>
                  <iframe
                    title={id}
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allowFullScreen
                  />
                </article>
                <figcaption className={style.caption}>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
