import{ useEffect, useState } from 'react';

const useFetch = (url:string) => {
    const [data,setData]:any=useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(result=>setData(result))
        .catch(error=>setData("error"));
    },[url]);
    if(data===null){
        return 'loading';
    }
    // else if(data==="error") {
    //     return "error";
    // }
    return (data);
};
export default useFetch;