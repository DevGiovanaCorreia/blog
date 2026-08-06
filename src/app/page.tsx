

import { Container } from '@/components/Container';
import { Header } from '@/components/header';
import { PostList } from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import Link from 'next/link';
import { Suspense } from 'react';
import  Image  from 'next/image';



export default async function HomePage() {

 return (
    <Container>

       <Header/>

       <section className="grid grid-cls-1 gap-8 mb-16 sm:grid-cols-2 group:">
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl ">
         < Image src="/imagem/imagem1.jpg" alt="titulo do post" width={1200} height={720} priority
         className="hover:scale-105 transition" />

        </Link>


        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi cumque commodi quisquam assumenda autem voluptatem qui vitae officia officiis blanditiis. Fugiat asperiores placeat a, iste vel nobis similique soluta ipsam.</div>



       </section>



    <Suspense fallback={<SpinLoader/>}>
    <PostList />
       </Suspense>

       <footer><h1 className="text-6xl font-bold">footer</h1></footer>

    </Container>
 )
}
