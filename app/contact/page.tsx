"use client"

import React, { useState } from 'react'


const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(phone,email,name,description)

    const formData = {
      name,
      phone,
      email,
      description,
    };

    try {
      const res = await fetch("http://localhost:3000/api/postcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log(data);
      alert("Thanks for contacting Us");

      setName('');
      setPhone('');
      setEmail('');
      setDescription('');

    } catch (error) {
      console.log("Error:", error);
    }

  }

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value);
    }

    else if (e.target.name == 'phone') {
      setPhone(e.target.value);
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value);
    }
    else if (e.target.name == 'description') {
      setDescription(e.target.value);
    }
  }

  return (
    <div className=' dark:bg-black'>
      {/* <h1 className='text-3xl'>Contact Us</h1> */}
      <div className="min-h flex justify-center mt-10 ">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5">

          <h2 className="text-2xl font-bold text-center text-gray-800">
            Contact Form
          </h2>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input name="name" id="name"
              type="text" value={name} onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel" name="phone" id="phone" value={phone} onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email" name="email" id="email" value={email} onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description" id="description" value={description} onChange={handleChange}
              rows={2}
              placeholder="Enter your message"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}

export default Contact;
