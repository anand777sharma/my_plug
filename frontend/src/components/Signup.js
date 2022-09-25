import { Formik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const Signup = () => {

    const userSubmit = async(formdata) => {
        console.log(formdata);
        //1.url
        // 2. request method
        // 3.data
        // 4. data formate usually json
        //fetch() function is used to connect front end with back end
      const response= await fetch('http://localhost:5000/user/add',{ 
            method:'POST',
            body:JSON.stringify(formdata),
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(response.status===200){
        console.log('user added');
Swal.fire({
    icon:'success',
    title:'well done',
    text:'Registered Successfull'
})
    }

    }

  return (
    <div>
        <div className="container pt-5">
            <div className="card">
                <div className="card-body">
                    <Formik 
                    initialValues={{name : '', email : '', password : '', age : ''}}
                    onSubmit={userSubmit}>
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                                <label>Name</label>
                                <input className='form-control' id="name" onChange={handleChange} value={values.name} />
                                <label>Email</label>
                                <input className='form-control' id="email" onChange={handleChange} value={values.email} />
                                <label>Password</label>
                                <input type="password" className='form-control' id="password" onChange={handleChange} value={values.password} />
                                <label>Age</label>
                                <input className='form-control' id="age" onChange={handleChange} value={values.age} />
                            <button type="submit" className='btn btn-primary mt-4'>Submit</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup