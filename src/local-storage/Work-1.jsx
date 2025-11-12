import { useState } from "react";
import "./Work-1.css";

function Work() {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        dob: "",
        email: "",
        mobile: "",
        customerId: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.gender) newErrors.gender = "Gender is required";

        if (!formData.dob) newErrors.dob = "Date of birth is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email";
        }

        const mobileRegex = /^[0-9]{10}$/;
        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = "Mobile must be 10 digits";
        }

        if (!formData.customerId.trim()) {
            newErrors.customerId = "Customer ID is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted");
            console.log("Form Data:", formData);
            setFormData({
                name: "",
                gender: "",
                dob: "",
                email: "",
                mobile: "",
                customerId: "",
            });
        }
    };

    return (
        <div className="form-container">
            <h2>Let's get you set up</h2>
            <h4>It should only take a couple of minutes to pair with your watch</h4>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <div className="gender-group">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                </div>

                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                    {errors.dob && <span className="error">{errors.dob}</span>}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label>Mobile:</label>
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && <span className="error">{errors.mobile}</span>}
                </div>

                <div className="form-group">
                    <label>Customer ID:</label>
                    <input
                        type="text"
                        name="customerId"
                        value={formData.customerId}
                        onChange={handleChange}
                    />
                    {errors.customerId && (
                        <span className="error">{errors.customerId}</span>
                    )}
                </div>
                <div>

                <button className="btn-cancel">Cancel</button>
                <button type="submit" className="btn-submit">Save</button>
                </div>

            </form>
        </div>
    );
}

export default Work;
