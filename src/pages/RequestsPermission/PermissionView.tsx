import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PaperBox from '../../components/PaperBox';

interface PermissionData {
    id: number;
    type: string;
    unitName: string;
    projectName: string;
    date: string;
    time: string;
    status: string;
    names: string[];
    unitStatue: string;
}

const samplePermissionData: PermissionData[] = [
    {
        id: 1,
        type: 'Labor',
        unitName: 'Unit 1',
        projectName: 'Project X',
        date: '2024-02-15',
        time: '09:00',
        status: 'Pending',
        names: ['Worker 1', 'Worker 2', 'Worker 3'],
        unitStatue: 'Active',
    },
    {
        id: 2,
        type: 'Visitor',
        unitName: 'Unit 2',
        projectName: 'Project Y',
        date: '2024-02-16',
        time: '10:00',
        status: 'Open',
        names: ['Ali Hassan', 'Omar Sherif'],
        unitStatue: 'Inactive',
    },
    {
        id: 3,
        type: 'Labor',
        unitName: 'Unit 3',
        projectName: 'Project z',
        date: '2024-02-20',
        time: '12:00',
        status: 'Closing',
        names: ['Worker 1', 'Worker 2'],
        unitStatue: 'In Service',
    },
    // Add more sample permission data as needed
];

const PermissionView: React.FC = () => {
    const [unitNameQuery, setUnitNameQuery] = useState<string>('');
    const [projectNameQuery, setProjectNameQuery] = useState<string>('');
    const [dateQuery, setDateQuery] = useState<string>('');
    const [timeQuery, setTimeQuery] = useState<string>('');
    const [typeQuery, setTypeQuery] = useState<string>('');

    const handleUpdatePermission = (id: number) => {
        console.log(`Updating permission with id ${id}`);
    };

    const handleRemovePermission = (id: number) => {
        console.log(`Removing permission with id ${id}`);
    };

    const filterPermissions = (permission: PermissionData) => {
        return (
            permission.unitName.toLowerCase().includes(unitNameQuery.toLowerCase()) &&
            permission.projectName.toLowerCase().includes(projectNameQuery.toLowerCase()) &&
            permission.date.includes(dateQuery) &&
            permission.time.includes(timeQuery) &&
            permission.type.toLowerCase().includes(typeQuery.toLowerCase())
        );
    };

    const clearFilters = () => {
        setUnitNameQuery('');
        setProjectNameQuery('');
        setDateQuery('');
        setTimeQuery('');
        setTypeQuery('');
    };

    return (
        <div className="container">
            <h2 className="m-3">Permission View</h2>
            <PaperBox>
                <div className="row mb-3 my-4">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=" Unit Name"
                            value={unitNameQuery}
                            onChange={(e) => setUnitNameQuery(e.target.value)}
                            aria-label=" Unit Name"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=" Project Name"
                            value={projectNameQuery}
                            onChange={(e) => setProjectNameQuery(e.target.value)}
                            aria-label=" Project Name"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Date"
                            value={dateQuery}
                            onChange={(e) => setDateQuery(e.target.value)}
                            aria-label="Date"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=" Type"
                            value={typeQuery}
                            onChange={(e) => setTypeQuery(e.target.value)}
                            aria-label=" Type"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="time"
                            className="form-control"
                            placeholder=" Time"
                            value={timeQuery}
                            onChange={(e) => setTimeQuery(e.target.value)}
                            aria-label=" Time"
                        />
                    </div>
                    <div className="col">
                        <button className="btn btn-secondary" onClick={clearFilters}>
                            Clear
                        </button>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col w-25 btn-sm">
                        <Link to="/dashboard/requests-permission/permission" className="btn btn-primary">
                            Add Permission
                        </Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th className="align-middle bg-primary text-white">Unit Name</th>
                                <th className="align-middle bg-primary text-white">Project Name</th>
                                <th className="align-middle bg-primary text-white">Type</th>
                                <th className="align-middle bg-primary text-white">Date</th>
                                <th className="align-middle bg-primary text-white">Time</th>
                                <th className="align-middle bg-primary text-white">Status</th>
                                <th className="align-middle bg-primary text-white">Names</th>
                                <th className="align-middle bg-primary text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {samplePermissionData.filter(filterPermissions).map((permission, index) => (
                                <tr key={index}>
                                    <td>{permission.unitName}</td>
                                    <td>{permission.projectName}</td>
                                    <td>{permission.type}</td>
                                    <td>{permission.date}</td>
                                    <td>{permission.time}</td>
                                    <td>{permission.status}</td>
                                    <td>{permission.names.join(', ')}</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            {/* <Link to={`/dashboard/requests-permission/requests/${permission.id}`}> */}
                                            <Link to="/dashboard/requests-permission/update">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-primary mr-1 mx-1"
                                                    // onClick={() => handleUpdatePermission(permission.id)}
                                                    aria-label="Edit Permission"
                                                >
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                            {/* </Link> */}

                                            <button
                                                type="button"
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleRemovePermission(permission.id)}
                                                aria-label="Remove Permission"
                                            >
                                                <FaTrash />
                                            </button>
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

export default PermissionView;
