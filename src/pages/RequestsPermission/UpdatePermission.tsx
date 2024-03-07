import React from 'react';
import WorkerForm from './WorkerForm';
import PaperBox from '../../components/PaperBox';

interface PermissionData {
    creator: string | number | readonly string[] | undefined;
    owner: string | number | readonly string[] | undefined;
    id: number;
    type: string;
    unitName: string;
    projectName: string;
    date: string;
    time: string;
    status: string;
    names: string[];
}

interface UpdatePermissionProps {
    permission: PermissionData;
    onUpdatePermission: (id: number) => void;
}

const UpdatePermission: React.FC<UpdatePermissionProps> = ({ permission, onUpdatePermission }) => {
    const handleUpdate = () => {
        onUpdatePermission(permission.id);
    };



    return (
<div className="card mt-3">
    <h1 className="card-header">Update Permission</h1>
    <PaperBox>
    <div className="card-body">
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="unitName" className="form-label">Unit Name:</label>
                    <input
                        type="text"
                        id="unitName"
                        className="form-control"
                        value={permission.unitName}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="projectName" className="form-label">Project Name:</label>
                    <input
                        type="text"
                        id="projectName"
                        className="form-control"
                        value={permission.projectName}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type:</label>
                    <input
                        type="text"
                        id="type"
                        className="form-control"
                        value={permission.type}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date:</label>
                    <input
                        type="date"
                        id="date"
                        className="form-control"
                        value={permission.date}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Unit Id:</label>
                    <input
                        type="id"
                        id="id"
                        className="form-control"
                        value={permission.id}
                        disabled
                    />
                </div>

            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="time" className="form-label">Time:</label>
                    <input
                        type="time"
                        id="time"
                        className="form-control"
                        value={permission.time}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status:</label>
                    <input
                        type="text"
                        id="status"
                        className="form-control"
                        value={permission.status}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="names" className="form-label">Names:</label>
                    <input
                        type="text"
                        id="names"
                        className="form-control"
                        value={permission.names.join(', ')}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="owner" className="form-label">Owner:</label>
                    <input
                        type="owner"
                        id="owner"
                        className="form-control"
                        value={permission.owner}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="creator" className="form-label">Creator:</label>
                    <input
                        type="creator"
                        id="creator"
                        className="form-control"
                        value={permission.creator}
                        disabled
                    />
                </div>
                
            </div>
        </div>

        <WorkerForm workerIndex={0} onRemoveWorker={() => {}} onWorkerChange={() => {}} onWorkerFileChange={() => {}} worker={{ firstName: '', lastName: '', idCardPhoto: '', image: '', reason: '', fromDate: '', toDate: '', cost: '', carId: '', IdWorker: '', workerStatus: '' }} />
        <button className="btn btn-primary w-100" onClick={handleUpdate}>Update</button>

    </div>
    </PaperBox>
</div>

    );
};

export default UpdatePermission;

interface PermissionData {
    creator: string | number | readonly string[] | undefined;
    owner: string | number | readonly string[] | undefined;
    id: number;
    type: string;
    unitName: string;
    projectName: string;
    date: string;
    time: string;
    status: string;
    names: string[];
}

interface WorkerData {
    firstName: string;
    lastName: string;
    idCardPhoto: string;
    image: string;
    reason: string;
    fromDate: string;
    toDate: string;
    cost: string;
    carId: string;
    IdWorker: string;
    [key: string]: string;
    workerStatus: string;
}

interface WorkerFormProps {
    worker: WorkerData;
    workerIndex: number;
    onRemoveWorker: (index: number) => void;
    onWorkerChange: (value: string | Date, index: number, field: string) => void;
    onWorkerFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}
