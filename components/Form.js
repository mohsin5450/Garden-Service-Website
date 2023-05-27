import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import styles from "./styles/check.module.css"
import style from "./styles/form.module.css"
function Form(){
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setphoneNo] = useState('')
    const [service, setService] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
      let data = {
          firstName,
          lastName,
          email,
          phoneNo,
          service,
          message
        }
      fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true)

            setfirstName('')
            setlastName('')
            setEmail('')
            setphoneNo('')
            setService('')
            setBody('')
          }
        })
      
    }
  return (
    <div className='flex flex-col w-screen md:w-4/6  items-center mt-8 mb-6'>
<p className='text-2xl text-green-600 font-bold'>Let us know how we can help you!</p>
    <form className="flex flex-col m-10 w-2/3 md:w-1/2  justify-center items-center" >
      <div className="flex flex-col w-full mb-6">
        <label className="text-gray-700 font-bold mb-2">First Name</label>
        <input
          name="firstName"
          className={` py-2 px-4 rounded shadow ${style.inputs}`}
          type="text"
          placeholder="Enter your First Name"
          onChange={(e)=>{setfirstName(e.target.value)}}
        //  {...register('firstName', { required: true })}
        />
      </div>

      <div className="flex flex-col w-full mb-6">
        <label className="text-gray-700 font-bold mb-2">Last Name</label>
        <input
          name="lastName"
          className={` py-2 px-4 rounded shadow ${style.inputs}`}
          type="text"
          placeholder="Enter your Last Name"
          onChange={(e)=>{setlastName(e.target.value)}}
        // {...register('lastname', { required: true })}
        />
      </div>

      <div className="flex flex-col w-full mb-6">
        <label className="text-gray-700 font-bold mb-2">Email</label>
        <input
          name="email"
          className={` py-2 px-4 rounded shadow ${style.inputs}`}
          type="email"
          placeholder="Enter your Email"
          onChange={(e)=>{setEmail(e.target.value)}}
        // {...register('email', { required: true })}
        />
      </div>

      <div className="flex flex-col w-full mb-6">
        <label className="text-gray-700 font-bold mb-2">Phone Number</label>
        <input
          name="phoneNumber"
          className={` py-2 px-4 rounded shadow ${style.inputs}`}
          type="tel"
          placeholder="Enter your Phone Number(e.g 4212345678)"
          onChange={(e)=>{setphoneNo(e.target.value)}}
          pattern="[0-9]{10}"
        // {...register('phoneNumber', { required: true })}
        />
      </div>

      <div className="flex flex-col w-full mb-6">
        <label className="text-gray-700 font-bold mb-2">Service</label>
        <select
          name="service"
          className={` py-2 px-4 rounded shadow ${style.inputs}`}
          onChange={(e)=>{setService(e.target.value)}}
        // {...register('service', { required: true })}
        >
          <option value="">Select Service</option>
          <option value="Service 1">Service 1</option>
          <option value="Service 2">Service 2</option>
          <option value="Service 3">Service 3</option>
        </select>
      </div>

      <div className="flex flex-col w-full mb-6">
        <label className="text-gray-700 font-bold mb-2">Message</label>
        <textarea
          name="message"
          className={` py-2 px-4 rounded shadow ${style.inputs}`}
          placeholder="Your Message"
          rows="5"
          onChange={(e)=>{setMessage(e.target.value)}}
        // {...register('message', { required: true })}
        ></textarea>
      </div>

  < input type='submit' className='w-1/2 bg-[#3ab349] text-white p-1' onClick={(e)=>{handleSubmit(e)}}/>
  </form >
    </div>

  );

}

export default Form