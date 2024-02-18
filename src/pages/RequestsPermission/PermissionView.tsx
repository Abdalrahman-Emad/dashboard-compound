import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Sample static permission data for demonstration
const samplePermissionData = [
    {
        id: 1,
        laborName: 'Labor A',
        unitName: 'Unit 1',
        projectName: 'Project X',
        date: '2024-02-15',
        time: '09:00',
        reason: 'Scheduled tasks',
        workers: ['Worker 1', 'Worker 2', 'Worker 3']
    },
    {
        id: 2,
        laborName: 'Labor B',
        unitName: 'Unit 2',
        projectName: 'Project Y',
        date: '2024-02-16',
        time: '10:00',
        reason: 'Routine maintenance',
        workers: ['Worker 4', 'Worker 5']
    },
    {
        id: 3,
        laborName: 'Labor c',
        unitName: 'Unit 3',
        projectName: 'Project z',
        date: '2024-02-20',
        time: '12:00',
        reason: 'Scheduled tasks',
        workers: ['Worker 1', 'Worker 2']
    }
    // Add more sample permission data as needed
];

const PermissionView: React.FC = () => {
    const [unitNameQuery, setUnitNameQuery] = useState('');
    const [projectNameQuery, setProjectNameQuery] = useState('');
    const [dateQuery, setDateQuery] = useState('');
    const [timeQuery, setTimeQuery] = useState('');

    const handleUpdatePermission = (id: number) => {
        // Implement logic for updating permission with given id
        console.log(`Updating permission with id ${id}`);
    };

    const handleRemovePermission = (id: number) => {
        // Implement logic for removing permission with given id
        console.log(`Removing permission with id ${id}`);
    };

    const filterPermissions = (permission: any) => {
        return (
            permission.unitName.toLowerCase().includes(unitNameQuery.toLowerCase()) &&
            permission.projectName.toLowerCase().includes(projectNameQuery.toLowerCase()) &&
            permission.date.includes(dateQuery) &&
            permission.time.includes(timeQuery)
        );
    };

    const clearFilters = () => {
        setUnitNameQuery('');
        setProjectNameQuery('');
        setDateQuery('');
        setTimeQuery('');
    };

    return (
        <div className="container">
                        <h2 className="m-0">Permission View</h2>

            <div className="row mb-3 my-4">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Unit Name"
                        value={unitNameQuery}
                        onChange={(e) => setUnitNameQuery(e.target.value)}
                        aria-label="Search by Unit Name"
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Project Name"
                        value={projectNameQuery}
                        onChange={(e) => setProjectNameQuery(e.target.value)}
                        aria-label="Search by Project Name"
                    />
                </div>
                <div className="col">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Search by Date"
                        value={dateQuery}
                        onChange={(e) => setDateQuery(e.target.value)}
                        aria-label="Search by Date"
                    />
                </div>
                <div className="col">
                    <input
                        type="time"
                        className="form-control"
                        placeholder="Search by Time"
                        value={timeQuery}
                        onChange={(e) => setTimeQuery(e.target.value)}
                        aria-label="Search by Time"
                    />
                </div>
                <div className="col">
                    <button className="btn btn-secondary" onClick={clearFilters}>Clear</button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col  w-25 btn-sm">
                    <Link to="/dashboard/requests-permission/permission" className="btn btn-primary">
                        Add Permission
                    </Link>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th className="align-middle bg-primary text-white">Labor Name</th>
                            <th className="align-middle bg-primary text-white">Unit Name</th>
                            <th className="align-middle bg-primary text-white">Project Name</th>
                            <th className="align-middle bg-primary text-white">Date</th>
                            <th className="align-middle bg-primary text-white">Time</th>
                            <th className="align-middle bg-primary text-white">Reason</th>
                            <th className="align-middle bg-primary text-white">Workers</th>
                            <th className="align-middle bg-primary text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {samplePermissionData.filter(filterPermissions).map((permission, index) => (
                            <tr key={index}>
                                <td>{permission.laborName}</td>
                                <td>{permission.unitName}</td>
                                <td>{permission.projectName}</td>
                                <td>{permission.date}</td>
                                <td>{permission.time}</td>
                                <td>{permission.reason}</td>
                                <td>{permission.workers.join(', ')}</td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <Link to={`/dashboard/requests-permission/requests/${permission.id}`}>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-primary mr-1 mx-1"
                                                onClick={() => handleUpdatePermission(permission.id)}
                                                aria-label="Edit Permission"
                                            >
                                                <FaEdit /> {/* Edit Icon */}
                                            </button>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleRemovePermission(permission.id)}
                                            aria-label="Remove Permission"
                                        >
                                            <FaTrash /> {/* Trash Icon */}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PermissionView;
