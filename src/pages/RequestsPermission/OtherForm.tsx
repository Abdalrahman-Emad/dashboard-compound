import React from 'react';

interface OtherData {
    name: string;
    idCard: string;
    phone: string;
    carNumber: string;
    [key: string]: string;
    OtherStatus: string;
    idCardPhoto: string; // Added idCardPhoto field for uploading personal picture image
}

interface OtherFormProps {
    Other: OtherData;
    OtherIndex: number;
    onRemoveOther: (index: number) => void;
    onOtherChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number, field: string) => void;
    onOtherFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const OtherForm: React.FC<OtherFormProps> = ({
    Other,
    OtherIndex,
    onRemoveOther,
    onOtherChange,
    onOtherFileChange,
}) => {
    return (
        <div className="Other-form my-4 p-4 border rounded border-5">
            <h3 className="mb-3">Other {OtherIndex + 1}</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`name${OtherIndex}`}>Name:</label>
                        <input
                            type="text"
                            id={`name${OtherIndex}`}
                            name={`name${OtherIndex}`}
                            className="form-control"
                            value={Other.name}
                            onChange={(e) => onOtherChange(e, OtherIndex, 'name')}
                            aria-label={`Name of Other ${OtherIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`idCard${OtherIndex}`}>ID Card:</label>
                        <input
                            type="text"
                            id={`idCard${OtherIndex}`}
                            name={`idCard${OtherIndex}`}
                            className="form-control"
                            value={Other.idCard}
                            onChange={(e) => onOtherChange(e, OtherIndex, 'idCard')}
                            aria-label={`ID Card of Other ${OtherIndex + 1}`}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor={`phone${OtherIndex}`}>Phone:</label>
                        <input
                            type="text"
                            id={`phone${OtherIndex}`}
                            name={`phone${OtherIndex}`}
                            className="form-control"
                            value={Other.phone}
                            onChange={(e) => onOtherChange(e, OtherIndex, 'phone')}
                            aria-label={`Phone of Other ${OtherIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor={`carNumber${OtherIndex}`}>Car Number:</label>
                        <input
                            type="text"
                            id={`carNumber${OtherIndex}`}
                            name={`carNumber${OtherIndex}`}
                            
                            className="form-control"
                            value={Other.carNumber}
                            onChange={(e) => onOtherChange(e, OtherIndex, 'carNumber')}
                            aria-label={`Car Number of Other ${OtherIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor={`OtherStatus${OtherIndex}`} className="form-label">
                            Other Status:
                        </label>
                        <select
                            id={`OtherStatus${OtherIndex}`}
                            name={`OtherStatus${OtherIndex}`}
                            className="form-select"
                            value={Other.OtherStatus}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                onOtherChange(e, OtherIndex, 'OtherStatus')
                            }
                            aria-label={`Other Status of Other ${OtherIndex + 1}`}
                        >
                            <option value="">Select Other Status</option>
                            <option value="active">Rejected</option>
                            <option value="inactive">Allowed</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor={`idCardPhoto${OtherIndex}`} className="form-label">
                                Upload Car ID Picture :
                            </label>
                            <input
                                type="file"
                                id={`idCardPhoto${OtherIndex}`}
                                name={`idCardPhoto${OtherIndex}`}
                                className="form-control-file mx-1"
                                onChange={(e) => onOtherFileChange(e, OtherIndex)}
                                accept=".jpg, .jpeg, .png"
                                aria-label={`Upload ID Card Photo for Other ${OtherIndex + 1}`}
                            />
                            {/* Placeholder for error message */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor={`idCardPhoto${OtherIndex}`} className="form-label">
                                Upload Personal Picture:
                            </label>
                            <input
                                type="file"
                                id={`idCardPhoto${OtherIndex}`}
                                name={`idCardPhoto${OtherIndex}`}
                                className="form-control-file mx-1"
                                onChange={(e) => onOtherFileChange(e, OtherIndex)}
                                accept=".jpg, .jpeg, .png"
                                aria-label={`Upload personal picture image for Other ${OtherIndex + 1}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Add or remove fields as needed */}
            <div className="d-flex justify-content-end my-2">
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveOther(OtherIndex)}
                    aria-label={`Remove Other ${OtherIndex + 1}`}
                >
                    Remove Other
                </button>
            </div>
        </div>
    );
};

export default OtherForm;
