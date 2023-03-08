import React,{useEffect,useState} from 'react'
import axios from 'axios'
import NCard from './NCard';

const options = {
    method: 'GET',
    url: 'https://api.opensea.io/api/v1/assets',
    params: {order_direction: 'desc', limit: '110', include_orders: 'true'},
    headers: {accept: 'application/json'}
  };

function Nft() {
    const nft = {
        data: [],
        loading: true
    }

    const [posts,setPosts] = useState(nft);
    
// getting all post on mounting component

    useEffect(() => {
        axios.request(options)
        .then(res => {
            setPosts({data:res.data , loading:false})
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

  return (
    <div>
        {!posts.loading && <NCard post={posts.data.assets}/>}
    </div>
  )
}

export default Nft