import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';


export const Plugin = () => {
    const userSubmit = async (formdata) => {
        console.log(formdata);
        //1.url
        // 2. request method
        // 3.data
        // 4. data formate usually json
        //fetch() function is used to connect front end with back end
        const response = await fetch('http://localhost:5000/sub/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            console.log('user added');
            Swal.fire({
                icon: 'success',
                title: 'well done',
                text: 'Registered Successfull'
            })
        }

    }
    return (
        <div>

            <>
                {/* Section: Design Block */}
                <section className="">
                    {/* Jumbotron */}
                    <div
                        className="px-4 py-5 px-md-5 text-center text-lg-start"
                        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>

                        <Formik
                            initialValues={{ name: '', email: '', owner: '', createdAt: new Date() }}
                            onSubmit={userSubmit}>
                            {({ values, handleSubmit, handleChange }) => (
                                <div className="container">
                                    <div className="row gx-lg-5 align-items-center">
                                        <div className="col-lg-6 mb-5 mb-lg-0">
                                            <h1 className="my-5 display-3 fw-bold ls-tight">
                                                You need more Email <br />
                                                <span className="text-primary">connect with Anand's newsletter</span>
                                            </h1>
                                            <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                                                Never Miss What’s Happening In Business and Tech
                                            </p>
                                        </div>
                                        <div className="col-lg-6 mb-5 mb-lg-0">
                                            <div className="card">
                                                <div className="card-body py-5 px-md-5">

                                                    <form onSubmit={handleSubmit}>
                                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                                        <div className="row">
                                                            <div className="col-md-6 mb-4">
                                                                <div className="form-outline">
                                                                    <input
                                                                        type="text"
                                                                        id="name"
                                                                        onChange={handleChange}
                                                                        value={values.name}
                                                                        className="form-control"
                                                                    />
                                                                     {/* onChange={handleChange} value={values.age} */}
                                                                    <label className="form-label" htmlFor="form3Example1">
                                                                        Name
                                                                    </label>
                                                                </div>
                                                            </div>
                                                          
                                                        </div>
                                                        {/* Email input */}
                                                        <div className="form-outline mb-4">
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                onChange={handleChange}
                                                                value={values.email}
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example3">
                                                                Email address
                                                            </label>
                                                        </div>
                                                    
                                                        {/* Submit button */}
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary btn-block mb-4"
                                                        >
                                                            Subscribe for news letter
                                                        </button>
                                                     
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Formik>



                    </div>
                    {/* Jumbotron */}
                </section>
                {/* Section: Design Block */}
            </>

        </div>
    )
}
export default Plugin