import React from 'react';
import { useForm } from 'react-hook-form';

const Admisson = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (info: any) => {
        const { name, fathersName, mothersName, address, phone, gender, admissonClass, photo } = info;
        const userInfo = {
            name,
            fathersName,
            mothersName,
            address,
            phone,
            gender,
            admissonClass,
            photo:photo[0].name
        }
        console.log(userInfo);

        fetch('http://localhost:5000/admission', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div>
            Comming Soon
            <div className="card mx-auto my-6 rounded-lg w-full max-w-lg shadow-2xl ">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", {
                                required: "Name is Required"
                            })} placeholder="Name" className="input input-bordered" />
                            {
                                errors.name && <p className='text-red-500'><>{errors.name.message}</></p>
                            }
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Fathers Name</span>
                            </label>
                            <input type="text" {...register("fathersName", {
                                required: "Fathers Name is Required"
                            })} placeholder="Fathers Name" className="input input-bordered" />
                            {
                                errors.fathersName && <p className='text-red-500'><>{errors.fathersName.message}</></p>
                            }
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mothers Name</span>
                            </label>
                            <input type="text" {...register("mothersName", {
                                required: "Mother Name is Required"
                            })} placeholder="Mother Name" className="input input-bordered" />
                            {
                                errors.mothersName && <p className='text-red-500'><>{errors.mothersName.message}</></p>
                            }
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea {...register("address", {
                                required: "Address is Required"
                            })} placeholder="Address" className="input input-bordered" />
                            {
                                errors.address && <p className='text-red-500'><>{errors.address.message}</></p>
                            }
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" {...register("phone", {
                                required: "Phone is Required"
                            })} placeholder="Phone" className="input input-bordered" />
                            {
                                errors.phone && <p className='text-red-500'><>{errors.phone.message}</></p>
                            }
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select defaultValue={'DEFAULT'} {...register("gender", {
                                required: "Gender is Required"
                            })} className="input input-bordered">

                                <option value="DEFAULT" disabled>--Gender--</option>
                                <option >Male</option>
                                <option >Female</option>
                                <option>Others</option>
                            </select>
                            {
                                errors.gender && <p className='text-red-500'><>{errors.gender.message}</></p>
                            }
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class</span>
                            </label>
                            <select defaultValue={'DEFAULT'} {...register("admissonClass", {
                                required: "Class is Required"
                            })} className="input input-bordered">

                                <option value="DEFAULT" disabled>--Class--</option>
                                <option >6</option>
                                <option >7</option>
                                <option >8</option>
                                <option >9</option>
                            </select>
                            {
                                errors.class && <p className='text-red-500'><>{errors.class.message}</></p>
                            }
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file"{...register("photo", {
                                required: "Photo is Required"
                            })} className="file-input file-input-bordered w-full max-w-xs" />
                            {
                                errors.photo && <p className='text-red-500'><>{errors.photo.message}</></p>
                            }
                        </div>
                        <div className="form-control">
                            <input className='btn btn-primary w-full mt-4' value="Submit" type="submit" />
                        </div>
                    </form>

                </div>

            </div >
        </div >
    );
};

export default Admisson;