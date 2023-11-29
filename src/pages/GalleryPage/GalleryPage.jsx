import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
    useInfiniteQuery,
} from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroll-component';
import Title from '../../components/shared/BgTitle';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import usePublicAxios from '../../hooks/usePublicAxios';

// const getGalleryImg = async ({pageParam = 0 }) =>{
//     const res = await fetch(`http://localhost:5000/gallerys?limit=10&offset=${pageParam}`)
//     const data = await res.json()

//     return {...data, prevOffset: pageParam}
// }
// getGalleryImg()


const GalleryPage = () => {
    const publicAxios = usePublicAxios()
    const [gallerys, setGallery] = useState(null)

    useEffect( ()  => {
       publicAxios.get("/gallerys")
       .then(res =>{
        setGallery(res.data)
       })
       .catch(error =>{
        console.log(error)
       })
             
      },[])

        // const {data, fetchNextPage,hasNextPage} = useInfiniteQuery({
        //     queryKey: ["galleryImg"],
        //     queryFn: getGalleryImg,
        //     getNextPageParam: (lastPage) =>{
        //         if(lastPage.prevOffset + 10 > lastPage.)
        //     }
        // })

        // console.log("first",data)
        return (
            <div>
                <Helmet>
                    <title>BodyFlex Hub || Gallery Page</title>
                </Helmet>
                <Title >Gallery Page</Title>
                <div className='max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-4 py-10'>
            {
                gallerys?.map(pic =>(
                    <div className='h-52' key={pic._id}>
                        <img className='w-full h-full object-contain' src={pic.img} alt="" />
                    </div>
                ))
            }
                </div>
            </div>
        )
    }

export default GalleryPage