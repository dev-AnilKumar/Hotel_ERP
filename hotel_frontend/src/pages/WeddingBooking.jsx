import React from 'react';
import Swal from 'sweetalert2';
// import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import InputField from '../utils/InputField';
const WeddingBooking = () => {

    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        // emailjs.sendForm('service_vyyqvva', 'template_bsij832', e.target, 'user_L6uy9056Ba6ttSNKMXklQ')
        //     .then(res => {
        //         console.log(res);
        //         Swal.fire('Successful', 'Form Has Been Submitted, We’ll get back to you soon', 'success').then(result => {
        //             navigate("/");
        //         });
        //     }).catch(err => console.log(err));
    }

    const validateEmail = (value) => {
        if (!value) return 'Email is required';
        const regex = /\S+@\S+\.\S+/;
        if (!regex.test(value)) return 'Please enter a valid email address';
        return '';
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <br />
                <center>
                    <h2 className="text-3xl font-bold text-gray-800">Request a Proposal</h2>
                    <br />
                    <h6 className="text-lg text-gray-600">Please complete the following form with as many details as possible regarding your event requirements.</h6>
                </center>

                <form onSubmit={submitHandler} className="mt-8 space-y-6 max-w-4xl mx-auto">
                    {/* Contact Information */}
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <TextField
                            size="small"
                            required
                            // error
                            id="outlined-error-helper-text"
                            label="First Name"
                            // defaultValue="Hello World"
                            // helperText="Incorrect entry."
                            color="success & warning"
                            // focused
                        />
                        <InputField required label="Email*" type='email' validator={validateEmail} />
                        <div>
                            <label htmlFor="sName" className="block text-sm font-medium text-gray-700">Family Name/Surname</label>
                            <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="sName" name="sName" />
                        </div>

                        <div>
                            <label htmlFor="fName" className="block text-sm font-medium text-gray-700">First Name/Given Name</label>
                            <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="fName" name="fName" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="comName" className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="comName" name="comName" />
                        </div>

                        <div>
                            <label htmlFor="inType" className="block text-sm font-medium text-gray-700">Industry Type</label>
                            <select id="inType" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" name="inType">
                                <option>Associations</option>
                                <option>Biotechnology</option>
                                <option>Business Services</option>
                                <option>Conference Organizer</option>
                                <option>Consumer Products</option>
                                <option>Education</option>
                                <option>Electronic</option>
                                <option>Fashion and Garment</option>
                                <option>Finance and Banking</option>
                                <option>Other</option>
                                <option>Please select</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail Address</label>
                            <input type="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="email" name="email" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="number" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="phone" name="phone" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="address1" className="block text-sm font-medium text-gray-700">Address</label>
                        <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="address1" name="address1" />
                    </div>

                    <div>
                        <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Address 2</label>
                        <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="address2" name="address2" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City/Town</label>
                            <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="city" name="city" />
                        </div>

                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State/Province</label>
                            <select id="state" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" name="state">
                                <option>Central</option>
                                <option>Eastern</option>
                                <option>North Central</option>
                                <option>North Western</option>
                                <option>Sabaragamuwa</option>
                                <option>Uva</option>
                                <option>Western</option>
                                <option>Please Select</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip</label>
                        <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="zip" name="zip" />
                    </div>

                    {/* Event Information */}
                    <h4 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Event Information</h4>

                    <div>
                        <label htmlFor="evName" className="block text-sm font-medium text-gray-700">Event Name</label>
                        <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="evName" name="evName" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="sDate" className="block text-sm font-medium text-gray-700">Event Start</label>
                            <input type="date" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="sDate" name="sDate" />
                        </div>

                        <div>
                            <label htmlFor="eDate" className="block text-sm font-medium text-gray-700">Event End</label>
                            <input type="date" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="eDate" name="eDate" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="noAtend" className="block text-sm font-medium text-gray-700">Number of Attendees</label>
                            <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="noAtend" name="noAtend" />
                        </div>

                        <div>
                            <label htmlFor="estDate" className="block text-sm font-medium text-gray-700">Estimated Decision Date</label>
                            <input type="date" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="estDate" name="estDate" />
                        </div>
                    </div>

                    {/* Additional Requirements */}
                    <h4 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Additional Requirements</h4>

                    <div>
                        <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">Do you need any guestrooms?</label>
                        <select id="rooms" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" name="rooms">
                            <option>Yes</option>
                            <option>No</option>
                            <option>Please Select</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="spacing" className="block text-sm font-medium text-gray-700">Do you require function spacing?</label>
                        <select id="spacing" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" name="spacing">
                            <option>Yes</option>
                            <option>No</option>
                            <option>Please Select</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="adiReq" className="block text-sm font-medium text-gray-700">Additional Requests</label>
                        <input type="text" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" id="adiReq" name="adiReq" />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-center mt-4">
                        <input type="checkbox" className="mr-2 h-4 w-4 text-yellow-500 focus:ring-yellow-500" id="gridCheck" required />
                        <label htmlFor="gridCheck" className="text-sm text-gray-700">
                            By ticking this box, I agree to receive Meetings and Events marketing materials, promotional information, updates, and more from Shangri-La International Hotel Management Limited via email. I understand that I can withdraw my consent at any time without charge.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button type="submit" className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default WeddingBooking;
