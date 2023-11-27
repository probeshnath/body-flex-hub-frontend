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

// const getGalleryImg = async () =>{
//     const res = await fetch("/galleryApi.json")
//     const data = await res.json()

//     return {data}
// }
// getGalleryImg()


const GalleryPage = () => {

    // const {data, fetchNextPage,hasNextPage} = useInfiniteQuery({
    //     queryKey: ["galleryImg"],
    //     queryFn: getGalleryImg,
    //     // getNextPageParam: (lastPage) =>{
    //     //     if()
    //     // }
    // })

    // console.log("first",data)
    return (
        <div>
            <Helmet>
                <title>BodyFlex Hub || Gallery Page</title>
            </Helmet>
            <Title >Gallery Page</Title>
        </div>
    )
}

export default GalleryPage