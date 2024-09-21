
import "./index.css";
import { useState, useEffect } from "react";
function Edit(props) {
  
  // eslint-disable-next-line react/prop-types
  const {isShow, setEdit, users, setUsers, currentUserId } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps, react/prop-types
  const currentUser = users.find(user => user.id === currentUserId) || {};
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    phoneNumber: '',
    address: '',
  });
  useEffect(() => {
    if (isShow === 'edit') {
      setFormData({
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        city: currentUser.city || '',
        phoneNumber: currentUser.phoneNumber || '',
        address: currentUser.address || '',
      });
    }
  }, [isShow, currentUser]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };
  const validateFields = () => {
    const { firstName, city, phoneNumber, address } = formData;
    const newErrors = {};

    if (!/^[a-zA-Z]+$/.test(firstName)) {
      newErrors.firstName = "First name should contain only letters.";
    }
    if (!/^[a-zA-Z\s]+$/.test(city)) {
      newErrors.city = "City should contain only letters.";
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(address)) {
      newErrors.address = "Address can contain both letters and numbers.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // eslint-disable-next-line react/prop-types
    const updatedUsers = users.map(user => 
      user.id === currentUserId ? { ...user, ...formData } : user
    );
    setUsers(updatedUsers);
    setEdit('');
  };
  if(isShow !== 'edit'){
    return null;
  }
  return (
    <div className="edit">
      <div className="edit-content">
        <span className="close" onClick={() => {
          setEdit('');
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
          }}>&times;</span>
        <h2>Edit User </h2>
        <form>
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
            {errors.city && <span className="error">{errors.city}</span>}
          </label>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange}/>
            {errors.address && <span className="error">{errors.address}</span>}
          </label>
          <button type="submit" onClick={handleSubmit}>Edit</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
