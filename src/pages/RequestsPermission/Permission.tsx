import React, { useState } from 'react';
import WorkerForm from './WorkerForm';
import { Link } from 'react-router-dom';
import VisitorForm from './VisitorForm';
import PermissionView from './PermissionView';
import PaperBox from '../../components/PaperBox';

interface WorkerData {
    firstName: string;
    lastName: string;
    idCardPhoto: string;
    image: string; // New field for the worker's image
    reason: string;
    fromDate: string; // New field for the worker's from date
    toDate: string; // New field for the worker's to date
    cost: string;
    carId: string;
    IdWorker: string;
    [key: string]: string;
    workerStatus:string;
}

interface VisitorData {
    name: string;
    idCard: string;
    phone: string;
    carNumber: string;
    reason: string;
    [key: string]: string;
    visitorStatus:string;
}

interface PermissionForm {
    owner: string | number | readonly string[] | undefined;
    laborName: string;
    projectName: string;
    unitName: string;
    id: string;
    unitId: string;
    date: string;
    time: string;
    workerData: WorkerData[];
    visitorData: VisitorData[]; // Add visitorData array
    reason: string;
    status: string;
    unitStatus: string;
    creator: string;
}

const Permission: React.FC = () => {
    const [permitType, setPermitType] = useState<string>('');

    const [formData, setFormData] = useState<PermissionForm>({
        laborName: '',
        unitName: '',
        projectName: '',
        id: '',
        date: '',
        time: '',
        workerData: [
            {
                firstName: '',
                lastName: '',
                image: '',
                idCardPhoto: '',
                carId: '',
                IdWorker: '',
                reason: '',
                cost: '',
                fromDate: '',
                toDate: '',
                workerStatus:'',
            },
        ],
        visitorData: [{ name: '', idCard: '', phone: '', carNumber: '', reason: '', visitorStatus:'' }], // Add visitorData
        reason: '',
        status: '',
        unitId: '',
        owner: '',
        unitStatus: '',
        creator: '',
    });

    const handlePermitTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPermitType(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleAddWorker = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            workerData: [
                ...prevFormData.workerData,
                {
                    firstName: '',
                    lastName: '',
                    image: '',
                    idCardPhoto: '',
                    reason: '',
                    cost: '',
                    fromDate: '',
                    toDate: '',
                    carId: '',
                    IdWorker: '',
                    workerStatus:'',
                },
            ],
        }));
    };

    const handleRemoveWorker = (index: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            workerData: prevFormData.workerData.filter((_, i) => i !== index),
        }));
    };

    const handleAddVisitor = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            visitorData: [...prevFormData.visitorData, { name: '', idCard: '', phone: '', carNumber: '', reason: '',visitorStatus:'' }],
        }));
    };

    const handleRemoveVisitor = (index: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            visitorData: prevFormData.visitorData.filter((_, i) => i !== index),
        }));
    };

    const handleVisitorChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number,
        field: string,
    ) => {
        const newVisitorData = [...formData.visitorData];
        newVisitorData[index][field] = e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            visitorData: newVisitorData,
        }));
    };

    const handleVisitorFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        // Handle file change for visitor
    };

    const handleWorkerChange = (value: string | Date, index: number, field: string) => {
        const newWorkerData = [...formData.workerData];
        newWorkerData[index][field] = value as string;
        setFormData((prevFormData) => ({
            ...prevFormData,
            workerData: newWorkerData,
        }));
    };

    const handleWorkerFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const files = e.target.files;
        if (files && files[0]) {
            // Check file size and type
            const fileSize = files[0].size; // in bytes
            const fileType = files[0].type; // MIME type
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            const maxSizeMB = 5; // 5 MB

            if (!allowedTypes.includes(fileType)) {
                alert('Please upload an image file (JPEG, JPG, or PNG).');
                return;
            }

            if (fileSize > maxSizeMB * 1024 * 1024) {
                alert('File size exceeds the maximum allowed limit of 5MB.');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const newWorkerData = [...formData.workerData];
                newWorkerData[index].idCardPhoto = e.target?.result as string;
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    workerData: newWorkerData,
                }));
            };
            reader.readAsDataURL(files[0]);
        }
    };

    return (
        <>
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <h1 className="card-header">Permission Form</h1>
                            <PaperBox>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="permitType" className="form-label">
                                            Select Permit Type:
                                        </label>
                                        <select
                                            id="permitType"
                                            className="form-select"
                                            value={permitType}
                                            onChange={handlePermitTypeChange}
                                        >
                                            <option value="">Select Type</option>
                                            <option value="labor">Labor</option>
                                            <option value="visitor">Visitor</option>
                                        </select>
                                    </div>
                                    {permitType && (
                                        <>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="projectName" className="form-label">
                                                        Project Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="projectName"
                                                        name="projectName"
                                                        placeholder="Enter Project Name"
                                                        className="form-control"
                                                        value={formData.projectName}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="unitName" className="form-label">
                                                        Unit Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="unitName"
                                                        name="unitName"
                                                        placeholder="Enter Unit Name"
                                                        className="form-control"
                                                        value={formData.unitName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="owner" className="form-label">
                                                        Owner:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="owner"
                                                        className="form-control"
                                                        value={formData.owner}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="unitid" className="form-label">
                                                        Unit ID:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="unitid"
                                                        className="form-control"
                                                        value={formData.unitId}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="id" className="form-label">
                                                        Permission ID:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="id"
                                                        className="form-control"
                                                        value={formData.id}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="status" className="form-label">
                                                        Status:
                                                    </label>
                                                    <select id="status" className="form-select" value={formData.status}>
                                                        <option value="">Select status</option>
                                                        <option value="active">Active</option>
                                                        <option value="inactive">Inactive</option>
                                                        <option value="pending">Pending</option>

                                                        {/* Add more options as needed */}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="creator" className="form-label">
                                                        Creator:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="owner"
                                                        className="form-control"
                                                        value={formData.creator}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="unitstatus" className="form-label">
                                                        Unit Status:
                                                    </label>
                                                    <select
                                                        id="unitStatus"
                                                        className="form-select"
                                                        value={formData.unitStatus}
                                                    >
                                                        <option value="">Select Unit status</option>
                                                        <option value="active">Active</option>
                                                        <option value="inactive">Inactive</option>
                                                        <option value="pending">Pending</option>

                                                        {/* Add more options as needed */}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Date:
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="date"
                                                        name="date"
                                                        className="form-control"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="time" className="form-label">
                                                        Time:
                                                    </label>
                                                    <input
                                                        type="time"
                                                        id="time"
                                                        name="time"
                                                        className="form-control"
                                                        value={formData.time}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            {permitType === 'visitor' &&
                                                formData.visitorData.map((visitor, index) => (
                                                    <VisitorForm
                                                        key={index}
                                                        visitor={visitor}
                                                        visitorIndex={index}
                                                        onRemoveVisitor={handleRemoveVisitor}
                                                        onVisitorChange={handleVisitorChange}
                                                        onVisitorFileChange={handleVisitorFileChange}
                                                    />
                                                ))}
                                            {permitType === 'labor' &&
                                                formData.workerData.map((worker, index) => (
                                                    <WorkerForm
                                                        key={index}
                                                        worker={worker}
                                                        workerIndex={index}
                                                        onRemoveWorker={handleRemoveWorker}
                                                        onWorkerChange={handleWorkerChange}
                                                        onWorkerFileChange={handleWorkerFileChange}
                                                    />
                                                ))}
                                            <div className="text-center">
                                                {permitType === 'labor' && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary mx-2"
                                                        onClick={handleAddWorker}
                                                    >
                                                        Add Worker
                                                    </button>
                                                )}
                                                {permitType === 'visitor' && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary mx-2"
                                                        onClick={handleAddVisitor}
                                                    >
                                                        Add Visitor
                                                    </button>
                                                )}
                                                <Link to="/dashboard/requests-permission/view">
                                                    <button type="submit" className="btn btn-success">
                                                        Submit
                                                    </button>
                                                </Link>
                                            </div>
                                        </>
                                    )}
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

export default Permission;
