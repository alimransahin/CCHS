import React from 'react';
import useFetch from '../../../CustomHooks/useFetch';
import useFilter from '../../../CustomHooks/useFilter';

const Quote = () => {
    const data = useFetch("https://jsonplaceholder.typicode.com/users");
    
    const filter=useFilter(data,'Leanne Graham');

    console.log(filter);
    if (data === 'loading') {
        return <progress className="progress progress-accent w-56"></progress>
    }
    return (
        <div className=' '>
            <div className="form-control my-6 ">
                <div className="text-center">
                    <input type="text" placeholder="Search Here…" className="input input-bordered" />
                </div>
            </div>
            
                    {
                        data === "error" ?
                            < h2 className="card-title mb-8">No Message</h2> :
                            <>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Sl</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Website</th>
                                        <th>Adddress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((info:any,i:number)=><tr key={i}>
                                            
                                        <th>{i+1}</th>
                                            <td>{info?.name}</td>
                                            <td>{info.email}</td>
                                            <td>{info.phone}</td>
                                            <td>{info.website}</td>
                                            <td>{info.address.city}</td>
                                        
                                    </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                            </>
                    }

                </div>
    );
};

export default Quote;