import React from 'react';
import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';

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
    fromTime: string; // Add fromTime property
    toTime: string; // Add toTime property
    [key: string]: string;
    hostingStatus: string;
}

interface HostingFormProps {
    hosting: HostingData;
    hostingIndex: number;
    onRemoveHosting: (index: number) => void;
    onHostingChange: (value: string, index: number, field: string) => void;
    onHostingFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const HostingForm: React.FC<HostingFormProps> = ({
    hosting,
    hostingIndex,
    onRemoveHosting,
    onHostingChange,
    onHostingFileChange,
}) => {
    const handleDateChange = (value: Date | null, field: string) => {
        const stringValue = value ? value.toISOString().split('T')[0] : ''; // Convert Date to string
        onHostingChange(stringValue, hostingIndex, field); // Call onHostingChange with string value
    };

    return (
        <div className="visitor-form my-4 p-4 border rounded border-5">
            <h3 className="mb-3">Hosting {hostingIndex + 1}</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`hostingId${hostingIndex}`}>Hosting ID:</label>
                        <input
                            type="text"
                            id={`hostingId${hostingIndex}`}
                            name={`hostingId${hostingIndex}`}
                            className="form-control"
                            value={hosting.hostingId}
                            onChange={(e) => onHostingChange(e.target.value, hostingIndex, 'hostingId')}
                            aria-label={`Hosting ID of Hosting ${hostingIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`hostingName${hostingIndex}`}>Hosting Name:</label>
                        <input
                            type="text"
                            id={`hostingName${hostingIndex}`}
                            name={`hostingName${hostingIndex}`}
                            className="form-control"
                            value={hosting.hostingName}
                            onChange={(e) => onHostingChange(e.target.value, hostingIndex, 'hostingName')}
                            aria-label={`Hosting Name of Hosting ${hostingIndex + 1}`}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor={`hostingId${hostingIndex}`}>Car ID:</label>
                        <input
                            type="text"
                            id={`hostingId${hostingIndex}`}
                            name={`hostingId${hostingIndex}`}
                            className="form-control"
                            value={hosting.carIdId}
                            onChange={(e) => onHostingChange(e.target.value, hostingIndex, 'caridId')}
                            aria-label={`Car ID ${hostingIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor={`hostingRelation${hostingIndex}`}>Hosting Relation:</label>
                        <input
                            type="text"
                            id={`hostingRelation${hostingIndex}`}
                            name={`hostingRelation${hostingIndex}`}
                            className="form-control"
                            value={hosting.hostingRelation}
                            onChange={(e) => onHostingChange(e.target.value, hostingIndex, 'hostingRelation')}
                            aria-label={`Hosting Relation of Hosting ${hostingIndex + 1}`}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor={`hostingStatus${hostingIndex}`}>Hosting Status:</label>
                        <select
                            id={`hostingStatus${hostingIndex}`}
                            name={`hostingStatus${hostingIndex}`}
                            className="form-select"
                            value={hosting.hostingStatus}
                            onChange={(e) => onHostingChange(e.target.value, hostingIndex, 'hostingStatus')}
                            aria-label={`Hosting Status of Hosting ${hostingIndex + 1}`}
                            style={{
                                border: '1px solid #ced4da', // Border color
                                padding: '0.375rem 0.75rem', // Padding
                                borderRadius: '0.25rem', // Border radius
                            }}
                        >
                            <option value="">Select Hosting Status</option>
                            <option value="Active">Approved</option>
                            <option value="Inactive">Rejected</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">From Date:</label>
                        <DatePicker
                            className="form-control"
                            value={hosting.fromDate ? new Date(hosting.fromDate) : null}
                            onChange={(value) => handleDateChange(value, 'fromDate')}
                            rightSection={<IconCalendar />}
                            style={{
                                border: '1px solid #ced4da',
                                padding: '0.375rem 0.75rem',
                                borderRadius: '0.25rem',
                            }}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">To Date:</label>
                        <DatePicker
                            className="form-control"
                            value={hosting.toDate ? new Date(hosting.toDate) : null}
                            onChange={(value) => handleDateChange(value, 'toDate')}
                            rightSection={<IconCalendar />}
                            style={{
                                border: '1px solid #ced4da',
                                padding: '0.375rem 0.75rem',
                                borderRadius: '0.25rem',
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">From Time:</label>
                        <input
                            type="time"
                            className="form-control"
                            value={hosting.fromTime}
                            onChange={(e) => onHostingChange(e.target.value, hostingIndex, 'fromTime')}
                            aria-label={`From Time of Hosting ${hostingIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">To Time:</label>
                        <input
                            type="time"
                            className="form-control"
                            value={hosting.toTime}
                            onChange={(e) => onHostingChange(e.target.value, hostingIndex, 'toTime')}
                            aria-label={`To Time of Hosting ${hostingIndex + 1}`}
                        />
                    </div>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`personalPicture${hostingIndex}`} className="form-label">
                            Upload Personal Picture:
                        </label>
                        <input
                            type="file"
                            id={`personalPicture${hostingIndex}`}
                            name={`personalPicture${hostingIndex}`}
                            className="form-control-file mx-1"
                            onChange={(e) => onHostingFileChange(e, hostingIndex)}
                            accept=".jpg, .jpeg, .png"
                            aria-label={`Upload Personal Picture for Hosting ${hostingIndex + 1}`}
                        />
                        {/* Placeholder for error message */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`idPicture${hostingIndex}`} className="form-label">
                            Upload ID Picture:
                        </label>
                        <input
                            type="file"
                            id={`idPicture${hostingIndex}`}
                            name={`idPicture${hostingIndex}`}
                            className="form-control-file mx-1"
                            onChange={(e) => onHostingFileChange(e, hostingIndex)}
                            accept=".jpg, .jpeg, .png"
                            aria-label={`Upload ID Picture for Hosting ${hostingIndex + 1}`}
                        />
                        {/* Placeholder for error message */}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end my-2">
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveHosting(hostingIndex)}
                    aria-label={`Remove Hosting ${hostingIndex + 1}`}
                >
                    Remove Hosting
                </button>
            </div>
        </div>
    );
};

export default HostingForm;
