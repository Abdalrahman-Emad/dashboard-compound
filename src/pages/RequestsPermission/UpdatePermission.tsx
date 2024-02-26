import React from 'react';

interface PermissionData {
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
            <div className="card-header bg-primary text-white">Update Permission</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="unitName" className="form-label">Unit Name:</label>
                            <input type="text" id="unitName" className="form-control" value={permission.unitName} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="projectName" className="form-label">Project Name:</label>
                            <input type="text" id="projectName" className="form-control" value={permission.projectName} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">Type:</label>
                            <input type="text" id="type" className="form-control" value={permission.type} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date:</label>
                            <input type="date" id="date" className="form-control" value={permission.date} disabled />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="time" className="form-label">Time:</label>
                            <input type="time" id="time" className="form-control" value={permission.time} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status:</label>
                            <input type="text" id="status" className="form-control" value={permission.status} disabled />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="names" className="form-label">Names:</label>
                            <input type="text" id="names" className="form-control" value={permission.names.join(', ')} disabled />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
};

export default UpdatePermission;
