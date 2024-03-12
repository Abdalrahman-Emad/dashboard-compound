import React from 'react';
import { Link } from 'react-router-dom';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';

interface AddOwnerProfileProps {
    onAddOwner: (owner: OwnerData) => void;
}

interface OwnerData {
    maritalStatus: string | number | readonly string[] | undefined;
    unitType: string | number | readonly string[] | undefined;
    unitId: string | number | readonly string[] | undefined;
    projectName: string | number | readonly string[] | undefined;
    gender: string | number | readonly string[] | undefined;
    relation: string | number | readonly string[] | undefined;
    ownerName: string;
    id: string;
    nationality: string;
    mobile: string;
    address: string;
    email: string;
    job: string;
    placeOfWork: string;
    passportNo: string;
    workMobile: string;
    expiryDate: string;
    region: string;
    idExpiryDate: string;
    ownerStatus: string;
    ownerNotes: string;
    customerType: string;
    education: string;
    birthDate: string;
    carNumber: string;
    ownerKind: string;
    image: string;
}

const AddOwnerProfile: React.FC<AddOwnerProfileProps> = ({ onAddOwner }) => {
    const [owner, setOwner] = React.useState<OwnerData>({
        ownerName: '',
        id: '',
        nationality: '',
        mobile: '',
        address: '',
        email: '',
        relation: '',
        job: '',
        placeOfWork: '',
        passportNo: '',
        workMobile: '',
        expiryDate: '',
        region: '',
        idExpiryDate: '',
        ownerStatus: '',
        ownerNotes: '',
        customerType: '',
        education: '',
        birthDate: '',
        gender: '',
        carNumber: '',
        ownerKind: '',
        image: '',
        projectName: '',
        unitId: '',
        unitType: '',
        maritalStatus:'',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setOwner((prevOwner) => ({
            ...prevOwner,
            [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setOwner((prevOwner) => ({
                    ...prevOwner,
                    image: result,
                }));
            };
            reader.readAsDataURL(files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddOwner(owner);
        // Clear form after submission if needed
        setOwner({
            ownerName: '',
            id: '',
            nationality: '',
            mobile: '',
            address: '',
            email: '',
            relation: '',
            job: '',
            placeOfWork: '',
            passportNo: '',
            workMobile: '',
            expiryDate: '',
            region: '',
            idExpiryDate: '',
            ownerStatus: '',
            ownerNotes: '',
            customerType: '',
            education: '',
            birthDate: '',
            gender: '',
            carNumber: '',
            ownerKind: '',
            image: '',
            projectName: '',
            unitId: '',
            unitType: '',
            maritalStatus:'',
        });
    };

    return (
        <>
            <div className="container py-4">
                <div className="row justify-content-center">
                    <PageTitle title="Add Owner Profile" />
                    <div className="col-md-12">
                        <div className="card shadow">
                            <PaperBox>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="ownerName" className="form-label">
                                                    Owner Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="ownerName"
                                                    placeholder="Enter Owner Name"
                                                    name="ownerName"
                                                    value={owner.ownerName}
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
                                                    placeholder="Enter ID"
                                                    name="id"
                                                    value={owner.id}
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
                                                    value={owner.nationality}
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
                                                    value={owner.mobile}
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
                                                    placeholder="Enter an Address"
                                                    name="address"
                                                    value={owner.address}
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
                                                    placeholder="Email"
                                                    name="email"
                                                    value={owner.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="region" className="form-label">
                                                    Region
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="region"
                                                    placeholder="Region"
                                                    name="region"
                                                    value={owner.region}
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
                                                    placeholder="Job"
                                                    name="job"
                                                    value={owner.job}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="placeOfWork" className="form-label">
                                                    Place of Work
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="placeOfWork"
                                                    name="placeOfWork"
                                                    value={owner.placeOfWork}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Place of Work</option>
                                                    <option value="office">Office</option>
                                                    <option value="home">Home</option>
                                                    <option value="remote">Remote</option>
                                                    {/* Add more options as needed */}
                                                </select>
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
                                                    value={owner.workMobile}
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
                                                    value={owner.passportNo}
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
                                                    value={owner.expiryDate}
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
                                                    placeholder="ID Expiry Date"
                                                    name="idExpiryDate"
                                                    value={owner.idExpiryDate}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="ownerStatus" className="form-label">
                                                    Status
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="ownerStatus"
                                                    name="ownerStatus"
                                                    value={owner.ownerStatus}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Block">Block</option>
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
                                                    placeholder="Education"
                                                    name="education"
                                                    value={owner.education}
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
                                                    name="birthDate"
                                                    value={owner.birthDate}
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
                                                    value={owner.maritalStatus}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Status</option>
                                                    <option value="single">Single</option>
                                                    <option value="married">Married</option>
                                                    <option value="divorced">Divorced</option>
                                                    <option value="widowed">Widowed</option>
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
                                                    placeholder="Car Number"
                                                    name="carNumber"
                                                    value={owner.carNumber}
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
                                                    value={owner.ownerKind}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Owner Kind</option>
                                                    <option value="Owner">Owner</option>
                                                    <option value="Renter">Renter</option>
                                                    {/* Add more options as needed */}
                                                </select>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="customerType" className="form-label">
                                                    Customer Type
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="customerType"
                                                    name="customerType"
                                                    value={owner.customerType}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Customer type</option>
                                                    <option value="VIP">VIP</option>
                                                    <option value="Normal">Normal</option>
                                                </select>
                                            </div>{' '}
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="ownerNotes" className="form-label">
                                                    Owner Notes
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="ownerNotes"
                                                    placeholder="Any additional information about the owner "
                                                    name="ownerNotes"
                                                    value={owner.ownerNotes}
                                                    onChange={handleChange}
                                                />
                                            </div>
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


        </>
    );
};

export default AddOwnerProfile;
