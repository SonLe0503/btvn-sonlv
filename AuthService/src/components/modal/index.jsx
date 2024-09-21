/* eslint-disable react/prop-types */

import "./index.css";
import { useState } from "react";
function Modal(props) {
  const { isShow, setShowModal, addUser, users } = props;

  const [formData, setFormData] = useState({
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  if (isShow !== "create") {
    return null;
  }
  const validateField = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "id":
        if (!/^HE[0-9]{6}/.test(value)) {
          errorMsg = 'ID must start with "HE" followed by 6 numbers.';
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMsg = "Please enter a valid email.";
        }
        break;
      case "firstName":
      case "lastName":
      case "city":
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          errorMsg = "This field should contain only letters.";
        }
        break;
      case "phoneNumber":
        if (!/^\d{10}$/.test(value)) {
          errorMsg = "Phone number should be exactly 10 digits.";
        }
        break;
      case "address":
        if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
          errorMsg = "Address should contain both letters and numbers.";
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: errorMsg });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn reload trang
    const isEmpty = Object.values(formData).some(value => value.trim() === "");
    if (isEmpty) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) {
      alert("Please fix the errors before submitting.");
      return;
    }
    const isDuplicateId = users.some((user) => user.id === formData.id);
    const isDuplicateEmail = users.some(
      (user) => user.email === formData.email
    );

    if (isDuplicateId) {
      alert("User ID already exists. Please enter a different ID.");
      return;
    }

    if (isDuplicateEmail) {
      alert("Email already exists. Please enter a different email.");
      return;
    }
    addUser(formData); // Gọi hàm thêm người dùng
    setShowModal(""); // Đóng modal sau khi thêm
    setFormData({
      // Reset form
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      city: "",
      phoneNumber: "",
      address: "",
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            setShowModal("");
            setFormData({
              // Reset form data
              id: "",
              email: "",
              firstName: "",
              lastName: "",
              city: "",
              phoneNumber: "",
              address: "",
            });
            setErrors({});
          }}
        >
          &times;
        </span>
        <h2>Create New User</h2>
        <form>
          <label>
            User ID:
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
            {errors.id && <p className="error">{errors.id}</p>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </label>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
