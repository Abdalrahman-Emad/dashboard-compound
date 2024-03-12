import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';

const FamilyDetails: React.FC = () => {
    const [family, setFamily] = useState({
        familyName: '',
        id: '',
        nationality: '',
        mobile: '',
        address: '',
        email: '',
        relation: '',
        job: '',
        placeOfWork: '',
        workMobile: '',
        passportNo: '',
        expiryDate: '',
        idExpiryDate: '',
        familyStatus: '',
        education: '',
        birthDate: '',
        gender: '',
        carNumber: '',
        familyKind: '',
        projectName: '',
        unitId: '',
        unitType: '',
        image: '',
        maritalStatus: '',
        notes: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFamily((prevFamily) => ({
            ...prevFamily,
            [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setFamily((prevFamily) => ({
                    ...prevFamily,
                    image: result,
                }));
            };
            reader.readAsDataURL(files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Family form submitted:', family);
        // Clear form after submission if needed
        setFamily({
            familyName: '',
            id: '',
            nationality: '',
            mobile: '',
            address: '',
            email: '',
            relation: '',
            job: '',
            placeOfWork: '',
            workMobile: '',
            passportNo: '',
            expiryDate: '',
            idExpiryDate: '',
            familyStatus: '',
            education: '',
            birthDate: '',
            gender: '',
            carNumber: '',
            familyKind: '',
            projectName: '',
            unitId: '',
            unitType: '',
            image: '',
            maritalStatus: '',
            notes: '',
        });
    };
    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <PageTitle title="Add Family Details" />
                <div className="col-md-12">
                    <div className="card shadow">
                        <PaperBox>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="familyName" className="form-label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Name"
                                                id="familyName"
                                                name="familyName"
                                                value={family.familyName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="id" className="form-label">
                                                ID
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="id"
                                                placeholder=" Enter ID"
                                                name="id"
                                                value={family.id}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="nationality" className="form-label">
                                                Nationality
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nationality"
                                                placeholder="Nationality"
                                                name="nationality"
                                                value={family.nationality}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="mobile" className="form-label">
                                                Mobile
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="mobile"
                                                placeholder="Mobile"
                                                name="mobile"
                                                value={family.mobile}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="address" className="form-label">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                placeholder="Enter an Address"
                                                value={family.address}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                value={family.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="relation" className="form-label">
                                                Relation
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="relation"
                                                placeholder="Relation"
                                                name="relation"
                                                value={family.relation}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="job" className="form-label">
                                                Job
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="job"
                                                name="job"
                                                placeholder="Job"
                                                value={family.job}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="placeOfWork" className="form-label">
                                                Place of Work
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="placeOfWork"
                                                placeholder="Place of Work"
                                                name="placeOfWork"
                                                value={family.placeOfWork}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="workMobile" className="form-label">
                                                Work Mobile
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="workMobile"
                                                placeholder="Work Mobile"
                                                name="workMobile"
                                                value={family.workMobile}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="passportNo" className="form-label">
                                                Passport Number
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="passportNo"
                                                placeholder="Passport Number"
                                                name="passportNo"
                                                value={family.passportNo}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="expiryDate" className="form-label">
                                                Expiry Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="expiryDate"
                                                placeholder="Expiry Date"
                                                name="expiryDate"
                                                value={family.expiryDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="idExpiryDate" className="form-label">
                                                ID Expiry Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="idExpiryDate"
                                                name="idExpiryDate"
                                                placeholder="ID Expiry Date "
                                                value={family.idExpiryDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="familyStatus" className="form-label">
                                                Status
                                            </label>
                                            <select
                                                className="form-select"
                                                id="familyStatus"
                                                name="familyStatus"
                                                value={family.familyStatus}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select status</option>
                                                <option value="active">Active</option>
                                                <option value="block">Blocked</option>
                                            </select>
                                        </div>{' '}
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="education" className="form-label">
                                                Education
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="education"
                                                name="education"
                                                placeholder="Education"
                                                value={family.education}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="birthDate" className="form-label">
                                                Birth Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="birthDate"
                                                placeholder="Birth Date"
                                                name="birthDate"
                                                value={family.birthDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="gender" className="form-label">
                                                Marital Status
                                            </label>
                                            <select
                                                className="form-select"
                                                id="MaritalStatus"
                                                name="maritalStatus"
                                                value={family.maritalStatus}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="Single">active</option>
                                                <option value="Married">Married</option>
                                                <option value="Divorced">Divorced</option>
                                                <option value="Widowed">Widowed</option>
                                            </select>
                                        </div>{' '}
                                        <div className="col">
                                            <label htmlFor="Notes" className="form-label">
                                                Notes
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="notes"
                                                placeholder="Notes"
                                                name="carNumber"
                                                value={family.notes}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="gender" className="form-label">
                                                Gender
                                            </label>
                                            <select
                                                className="form-select"
                                                id="gender"
                                                name="gender"
                                                value={family.gender}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>{' '}
                                        <div className="col">
                                            <label htmlFor="carNumber" className="form-label">
                                                Car Number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="carNumber"
                                                name="carNumber"
                                                placeholder="Car Number"
                                                value={family.carNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="ownerKind" className="form-label">
                                                Owner Kind
                                            </label>
                                            <select
                                                className="form-select"
                                                id="ownerKind"
                                                name="ownerKind"
                                                value={family.familyKind}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Owner Kind</option>
                                                <option value="Owner">Owner</option>
                                                <option value="Renter">Renter</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="projectName" className="form-label">
                                                Project Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="projectName"
                                                placeholder="Project Name"
                                                name="projectName"
                                                value={family.projectName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="unitId" className="form-label">
                                                Unit ID
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="unitId"
                                                placeholder="Unit ID"
                                                name="unitId"
                                                value={family.unitId}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="unitType" className="form-label">
                                                Unit Type
                                            </label>
                                            <select
                                                className="form-select"
                                                id="unitType"
                                                name="unitType"
                                                value={family.unitType}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select unit type</option>
                                                <option value="Apartment">Apartment</option>
                                                <option value="Villa">Villa</option>
                                                <option value="Townhouse">Townhouse</option>
                                                <option value="Duplex">Duplex</option>
                                            </select>
                                        </div>{' '}
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="image" className="form-label">
                                                Image
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="image"
                                                onChange={handleImageChange}
                                                accept=".jpg, .jpeg, .png"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <Link to="/dashboard/view-profile">
                                                {' '}
                                                <button type="submit" className="w-100 btn btn-primary">
                                                    Submit
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </PaperBox>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FamilyDetails;
