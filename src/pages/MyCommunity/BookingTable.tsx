/* eslint-disable import/order */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/order
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import PaperBox from '../../components/PaperBox';
import { Link } from 'react-router-dom';

const BookingTable: React.FC = () => {
    // Define the interface for booking units
    interface BookingUnit {
        name: string;
        id: string;
        building: string;
        email: string;
        address: string;
        type: string;
        city: string;
        // Add other properties if needed
    }

    // Virtual data for booking units
    const bookingUnitsData: BookingUnit[] = [
        {
            name: "Unit A",
            id: "001",
            building: "Building 1",
            email: "unita@example.com",
            address: "Address 1",
            type: "Type A",
            city: "City A"
        },
        {
            name: "Unit B",
            id: "002",
            building: "Building 2",
            email: "unitb@example.com",
            address: "Address 2",
            type: "Type B",
            city: "City B"
        },
        {
            name: "Unitc",
            id: "003",
            building: "Building 3",
            email: "unitb@example.com",
            address: "Address 3",
            type: "Type c",
            city: "City c"
        },
        {
            name: "Unit d",
            id: "004",
            building: "Building 4",
            email: "unitb@example.com",
            address: "Address 4",
            type: "Type d",
            city: "City d"
        },
        
    ];

    const [filteredData, setFilteredData] = useState<BookingUnit[]>([]);
    const [filters, setFilters] = useState<{ [key: string]: string }>({
        name: '',
        id: '',
        building: '',
        email: '',
    });

    useEffect(() => {
        // Initialize filteredData with bookingUnitsData on component mount
        setFilteredData(bookingUnitsData);
    }, []); // Empty dependency array to ensure this effect runs only once on mount

    const handleUpdateUnit = (id: string) => {
        console.log(`Updating booking unit with ID ${id}`);
    };

    const handleDeleteUnit = (id: string) => {
        console.log(`Deleting booking unit with ID ${id}`);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        let filteredUnits = bookingUnitsData.filter((unit) => {
            return Object.keys(filters).every((key) => {
                return unit[key as keyof BookingUnit].toLowerCase().includes(filters[key].toLowerCase());
            });
        });
        setFilteredData(filteredUnits);
    };

    return (
        <div className="container">
            <h2 className='mb-3 my-3'>Booking Unit</h2>
            <PaperBox>
                <div className="d-flex justify-content-end align-items-end mb-4">
                    <Link to="/dashboard/community/Booking-unit/BookingTabs">
                        <button className="btn btn-primary">Add booking unit</button>
                    </Link>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by Name"
                            name="name"
                            value={filters.name}
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
                            placeholder="Filter by Building"
                            name="building"
                            value={filters.building}
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
                                <th className="align-middle bg-primary text-white p-4">Name</th>
                                <th className="align-middle bg-primary text-white p-4">ID</th>
                                <th className="align-middle bg-primary text-white p-4">Building</th>
                                <th className="align-middle bg-primary text-white p-4">Email</th>
                                <th className="align-middle bg-primary text-white p-4">Address</th>
                                <th className="align-middle bg-primary text-white p-4">Type</th>
                                <th className="align-middle bg-primary text-white p-4">City</th>
                                <th className="align-middle bg-primary text-white p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((unit, index) => (
                                <tr key={index}>
                                    <td className="p-4">{unit.name}</td>
                                    <td className="p-4">{unit.id}</td>
                                    <td className="p-4">{unit.building}</td>
                                    <td className="p-4">{unit.email}</td>
                                    <td className="p-4">{unit.address}</td>
                                    <td className="p-4">{unit.type}</td>
                                    <td className="p-4">{unit.city}</td>
                                    <td className="p-4">
                                        <div className="btn-group" role="group">
                                            <Link to="/dashboard/community/Booking-unit/BookingTabs">
                                                {' '}
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    className="btn btn-sm btn-primary mx-1"
                                                    onClick={() => handleUpdateUnit(unit.id)}
                                                />
                                            </Link>
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                className="btn btn-sm btn-danger my-1"
                                                onClick={() => handleDeleteUnit(unit.id)}
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

export default BookingTable;
