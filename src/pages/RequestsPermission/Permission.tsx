import React, { useState } from 'react';
import WorkerForm from './WorkerForm';
import { Link } from 'react-router-dom';
import VisitorForm from './VisitorForm';
import PermissionView from './PermissionView';
import PaperBox from '../../components/PaperBox';
import HostingForm from './HostingForm';
import OtherForm from './OtherForm';

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
    workerStatus: string;
    permissionNumber: string;
    qrCodeGenerated: string;
}

interface HostingData {
    Name: string;
    idCardPhoto: string;
    image: string;
    reason: string;
    fromDate: string;
    toDate: string;
    cost: string;
    carId: string;
    Id: string;
    relation: string;
    [key: string]: string;
    hostingStatus: string;
}

interface VisitorData {
    name: string;
    idCard: string;
    phone: string;
    carNumber: string;
    reason: string;
    [key: string]: string;
    visitorStatus: string;
}
interface OtherData {
    name: string;
    idCard: string;
    phone: string;
    carNumber: string;
    reason: string;
    [key: string]: string;
    OtherStatus: string;
    idCardPhoto:string;
}

interface PermissionForm {
    otherData: OtherData[]; //Add otherData array
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
    hostingData: HostingData[]; // Add hostingData array
    reason: string;
    status: string;
    unitStatus: string;
    creator: string;
    notes: string;
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
        notes: '',
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
                workerStatus: '',
                permissionNumber:'', 
                qrCodeGenerated:'',
            },
        ],
        visitorData: [{ name: '', idCard: '', phone: '', carNumber: '', reason: '', visitorStatus: '' }],
        otherData: [{ name: '', idCard: '', phone: '', carNumber: '', reason: '', OtherStatus: '',idCardPhoto:'', }],

        hostingData: [
            {
                Name: '',
                idCardPhoto: '',
                image: '',
                reason: '',
                fromDate: '',
                toDate: '',
                cost: '',
                carId: '',
                Id: '',
                relation: '',
                hostingStatus: '',
            },
        ],
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
    ////////////
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            status: value,
        }));
    };

    const handleUnitStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            unitStatus: value,
        }));
    };

    //////////////////

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
                    workerStatus: '',
                    permissionNumber:'', 
                    qrCodeGenerated:'',
    
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
            visitorData: [
                ...prevFormData.visitorData,
                { name: '', idCard: '', phone: '', carNumber: '', reason: '', visitorStatus: '' },
            ],
        }));
    };

    const handleRemoveVisitor = (index: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            visitorData: prevFormData.visitorData.filter((_, i) => i !== index),
        }));
    };

    const handleAddHosting = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            hostingData: [
                ...prevFormData.hostingData,
                {
                    Name: '',
                    idCardPhoto: '',
                    image: '',
                    reason: '',
                    fromDate: '',
                    toDate: '',
                    cost: '',
                    carId: '',
                    Id: '',
                    relation: '',
                    hostingStatus: '',
                },
            ],
        }));
    };

    const handleRemoveHosting = (index: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            hostingData: prevFormData.hostingData.filter((_, i) => i !== index),
        }));
    };

    const handleAddOther = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            otherData: [
                ...prevFormData.otherData,
                { name: '', idCard: '', phone: '', carNumber: '', reason: '', OtherStatus: '',idCardPhoto:'', },
            ],
        }));
    };

    const handleRemoveOther = (index: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            otherData: prevFormData.otherData.filter((_, i) => i !== index),
        }));
    };

    const handleOtherChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
        index: number,
        field: string,
    ) => {
        const newOtherData = [...formData.otherData];
        newOtherData[index][field] = e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            otherData: newOtherData,
        }));
    };

    const handleOtherFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        // Handle file change for Other permit
    };

    const handleHostingChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number,
        field: string,
    ) => {
        const newHostingData = [...formData.hostingData];
        newHostingData[index][field] = e.target.value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            hostingData: newHostingData,
        }));
    };

    const handleHostingFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        // Handle file change for hosting permit
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
                                        <div className="mb-4">
                                            <h5 className="form-label">Select Permit Type:</h5>
                                            <select
                                                id="permitType"
                                                className="form-select"
                                                value={permitType}
                                                onChange={handlePermitTypeChange}
                                                style={{
                                                    border: '1px solid #ced4da', // Border color
                                                    padding: '0.375rem 0.75rem', // Padding
                                                    borderRadius: '0.25rem', // Border radius
                                                }}
                                            >
                                                <option value="">Select Type</option>
                                                <option style={{ marginBottom: '0.5rem' }} value="labor">
                                                    Labor
                                                </option>
                                                <option style={{ marginBottom: '0.5rem' }} value="visitor">
                                                    Visitor
                                                </option>
                                                <option style={{ marginBottom: '0.5rem' }} value="hosting">
                                                    Hosting
                                                </option>{' '}
                                                <option style={{ marginBottom: '0.5rem' }} value="other">
                                                    Other
                                                </option>
                                                {/* Add hosting permit option */}
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
                                                            placeholder="Enter Owner"
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
                                                            placeholder="Enter Unit ID"
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
                                                            placeholder="Enter Permission ID"
                                                            className="form-control"
                                                            value={formData.id}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="status" className="form-label">
                                                            Permission Status:
                                                        </label>
                                                        <select
                                                            id="status"
                                                            placeholder="Enter Status Permission"
                                                            className="form-select"
                                                            value={formData.status}
                                                            onChange={handleStatusChange}
                                                        >
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
                                                            placeholder="Enter Creator"
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
                                                            onChange={handleUnitStatusChange}
                                                        >
                                                            <option value="">Select Unit status</option>
                                                            <option value="active">Active</option>
                                                            <option value="inactive">Inactive</option>
                                                            <option value="pending">Pending</option>
                                                            {/* Add more options as needed */}
                                                        </select>{' '}
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
                                                    <div className="col-md-6 my-3">
                                                        <label htmlFor="Notes" className="form-label">
                                                            Notes:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="notes"
                                                            placeholder="Enter Notes"
                                                            className="form-control"
                                                            value={formData.notes}
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
                                                {permitType === 'hosting' && // Render HostingForm for hosting permit
                                                    formData.hostingData.map((hosting, index) => (
                                                        <HostingForm
                                                            key={index}
                                                            hosting={hosting}
                                                            hostingIndex={index}
                                                            onRemoveHosting={handleRemoveHosting}
                                                            onHostingChange={handleHostingChange}
                                                            onHostingFileChange={handleHostingFileChange}
                                                        />
                                                    ))}
                                                {permitType === 'other' &&
                                                    formData.otherData.map((other, index) => (
                                                        <OtherForm
                                                            key={index}
                                                            Other={other}
                                                            OtherIndex={index}
                                                            onRemoveOther={handleRemoveOther}
                                                            onOtherChange={handleOtherChange}
                                                            onOtherFileChange={handleOtherFileChange}
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
                                                    {permitType === 'hosting' && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary mx-2"
                                                            onClick={handleAddHosting}
                                                        >
                                                            Add Hosting
                                                        </button>
                                                    )}
                                                    {permitType === 'other' && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary mx-2"
                                                            onClick={handleAddOther}
                                                        >
                                                            Add Other
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
