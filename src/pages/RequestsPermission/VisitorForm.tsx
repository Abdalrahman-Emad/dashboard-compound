import React from 'react';

interface VisitorData {
    name: string;
    idCard: string;
    phone: string;
    carNumber: string;
    [key: string]: string;
    visitorStatus: string;
}

interface VisitorFormProps {
    visitor: VisitorData;
    visitorIndex: number;
    onRemoveVisitor: (index: number) => void;
    onVisitorChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
        index: number,
        field: string,
    ) => void;
    onVisitorFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const VisitorForm: React.FC<VisitorFormProps> = ({
    visitor,
    visitorIndex,
    onRemoveVisitor,
    onVisitorChange,
    onVisitorFileChange,
}) => {
    return (
        <div className="visitor-form my-4 p-4 border rounded border-5">
            <h3 className="mb-3">Visitor {visitorIndex + 1}</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`name${visitorIndex}`}>Name:</label>
                        <input
                            type="text"
                            id={`name${visitorIndex}`}
                            name={`name${visitorIndex}`}
                            className="form-control"
                            value={visitor.name}
                            onChange={(e) => onVisitorChange(e, visitorIndex, 'name')}
                            aria-label={`Name of Visitor ${visitorIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`idCard${visitorIndex}`}>ID Card:</label>
                        <input
                            type="text"
                            id={`idCard${visitorIndex}`}
                            name={`idCard${visitorIndex}`}
                            className="form-control"
                            value={visitor.idCard}
                            onChange={(e) => onVisitorChange(e, visitorIndex, 'idCard')}
                            aria-label={`ID Card of Visitor ${visitorIndex + 1}`}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor={`phone${visitorIndex}`}>Phone:</label>
                        <input
                            type="text"
                            id={`phone${visitorIndex}`}
                            name={`phone${visitorIndex}`}
                            className="form-control"
                            value={visitor.phone}
                            onChange={(e) => onVisitorChange(e, visitorIndex, 'phone')}
                            aria-label={`Phone of Visitor ${visitorIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor={`carNumber${visitorIndex}`}>Car Number:</label>
                        <input
                            type="text"
                            id={`carNumber${visitorIndex}`}
                            name={`carNumber${visitorIndex}`}
                            className="form-control"
                            value={visitor.carNumber}
                            onChange={(e) => onVisitorChange(e, visitorIndex, 'carNumber')}
                            aria-label={`Car Number of Visitor ${visitorIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor={`visitorStatus${visitorIndex}`} className="form-label">
                            Visitor Status:
                        </label>
                        <select
                            id={`visitorStatus${visitorIndex}`}
                            name={`visitorStatus${visitorIndex}`}
                            className="form-select"
                            value={visitor.visitorStatus}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                onVisitorChange(e, visitorIndex, 'visitorStatus')
                            }
                            aria-label={`Visitor Status of Visitor ${visitorIndex + 1}`}
                        >
                            <option value="">Select Visitor Status</option>
                            <option value="active">Rejected</option>
                            <option value="inactive">Allowed</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor={`idCardPhoto${visitorIndex}`} className="form-label">
                            Upload Car ID Photo :
                        </label>
                        <input
                            type="file"
                            id={`idCardPhoto${visitorIndex}`}
                            name={`idCardPhoto${visitorIndex}`}
                            className="form-control-file mx-1"
                            onChange={(e) => onVisitorFileChange(e, visitorIndex)}
                            accept=".jpg, .jpeg, .png"
                            aria-label={`Upload ID Card Photo for Visitor ${visitorIndex + 1}`}
                        />
                        {/* Placeholder for error message */}
                    </div>
                </div>
            </div>
            {/* Add or remove fields as needed */}
            <div className="d-flex justify-content-end my-2">
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveVisitor(visitorIndex)}
                    aria-label={`Remove Visitor ${visitorIndex + 1}`}
                >
                    Remove Visitor
                </button>
            </div>
        </div>
    );
};

export default VisitorForm;
