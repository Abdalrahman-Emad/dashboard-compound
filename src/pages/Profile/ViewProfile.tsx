import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import PaperBox from '../../components/PaperBox';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

// Define the interface for profile data
interface ProfileData {
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
    // Add other properties if needed
}

// Define the props interface for the ViewProfile component
interface ViewProfileProps {
    profileData: ProfileData[];
}

// Define the ViewProfile component
const ViewProfile: React.FC<ViewProfileProps> = ({ profileData }) => {
    const [filteredData, setFilteredData] = useState<ProfileData[]>(profileData);
    const [filters, setFilters] = useState<{ [key: string]: string }>({
        ownerName: '',
        id: '',
        nationality: '',
        email: '',
    });

    const handleUpdateProfile = (id: string) => {
        console.log(`Updating profile with ID ${id}`);
    };

    const handleDeleteProfile = (id: string) => {
        console.log(`Deleting profile with ID ${id}`);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        let filteredProfiles = profileData.filter((profile) => {
            return Object.keys(filters).every((key) => {
                return profile[key as keyof ProfileData].toLowerCase().includes(filters[key].toLowerCase());
            });
        });
        setFilteredData(filteredProfiles);
    };

    return (
        <div className="container">
            <h2 className='mb-3 my-3'>View Profile</h2>

            <PaperBox>
                <div className="d-flex justify-content-end align-items-end mb-4">
                    <Link to="/dashboard/profile-tabs">
                        <button className="btn btn-primary">Add Profile</button>
                    </Link>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by Name"
                            name="ownerName"
                            value={filters.ownerName}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by ID"
                            name="id"
                            value={filters.id}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by Nationality"
                            name="nationality"
                            value={filters.nationality}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by Email"
                            name="email"
                            value={filters.email}
                            onChange={handleFilterChange}
                        />
                    </div>
                    {/* <div className="col-auto">
                        <button className="btn btn-primary" onClick={applyFilters}>
                            Apply Filters
                        </button>
                    </div> */}
                    <div className="col">
                        <button className="btn btn-secondary">
                            Clear
                        </button>
                    </div>

                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th className="align-middle bg-primary text-white p-4">Owner Name</th>
                                <th className="align-middle bg-primary text-white p-4">ID</th>
                                <th className="align-middle bg-primary text-white p-4">Nationality</th>
                                <th className="align-middle bg-primary text-white p-4">Mobile</th>
                                <th className="align-middle bg-primary text-white p-4">Address</th>
                                <th className="align-middle bg-primary text-white p-4">Email</th>
                                <th className="align-middle bg-primary text-white p-4">Job</th>
                                <th className="align-middle bg-primary text-white p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((profile, index) => (
                                <tr key={index}>
                                    <td className="p-4">{profile.ownerName}</td>
                                    <td className="p-4">{profile.id}</td>
                                    <td className="p-4">{profile.nationality}</td>
                                    <td className="p-4">{profile.mobile}</td>
                                    <td className="p-4">{profile.address}</td>
                                    <td className="p-4">{profile.email}</td>
                                    <td className="p-4">{profile.job}</td>
                                    <td className="p-4">
                                        <div className="btn-group" role="group">
                                            <Link to="/dashboard/update-profile">
                                                {' '}
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    className="btn btn-sm btn-primary mx-1"
                                                    onClick={() => handleUpdateProfile(profile.id)}
                                                />
                                            </Link>
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                className="btn btn-sm btn-danger my-1"
                                                onClick={() => handleDeleteProfile(profile.id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </PaperBox>
        </div>
    );
};

export default ViewProfile;
