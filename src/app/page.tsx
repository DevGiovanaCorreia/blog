

import { Container } from '@/components/Container';
import { Header } from '@/components/header';
import { PostsList } from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

import { PostHeading } from '@/components/PostHeading';
import { PostCoverImage } from '@/components/PostCoverImage';




export default async function HomePage() {

 return (
    <Container>

       <Header/>

       <section className="grid grid-cls-1 gap-8 mb-16 sm:grid-cols-2 group:">

          <PostCoverImage
          linkProps={{
            href: '/post/asdfasdf',
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/imagem/bryen_9.png',
            alt: 'Alt da imagem',
            priority: true,
          }}
        />


        <div className="flex flex-col gap-4 justify-center">
            <time className='text-slate-600 block text-sm '   dateTime="2026-08-06">20/08/2026  14:00</time>


                <PostHeading as="h2" url="#">
                  lorem ipsum dolor sit amet
                </PostHeading>

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi cumque commodi quisquam assumenda autem voluptatem qui vitae officia officiis blanditiis. Fugiatasperiores placeat a, iste vel nobis similique soluta ipsam.</div>



       </section>



    <Suspense fallback={<SpinLoader/>}>
    <PostsList/>
       </Suspense>

       <footer><h1 className="text-6xl font-bold">footer</h1></footer>

    </Container>
 )
}
