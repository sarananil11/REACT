import React from 'react'
import './rhf.css'
import { useForm } from 'react-hook-form'


function BasicHookForm() {

  // initialize the useForm hook

  const {
    register, //used to register input fields
    handleSubmit, //function to handle form submission
    formState: { errors }, //object containing validation errors
    reset // function to reset the form to initial value
  } = useForm();

  //function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
    reset()// resets the form after submission

  }
  return (

    <form onSubmit={handleSubmit(onSubmit)}>


      {/* name */}
      <label>Name:</label>
      <input
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      {/* email */}
      <label>Email:</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid Email"
          }
        })}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}


      {/* submission button */}
      <button type='submit'>Submit</button>

      {/* reset button */}
      <button type='reset' onClick={()=>reset()}>Reset</button>


    </form>
  )
}

export default BasicHookForm
