import React from 'react';
import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';

interface WorkerData {
    firstName: string;
    lastName: string;
    idCardPhoto: string;
    image: string;
    reason: string;
    fromDate: string;
    toDate: string;
    [key: string]: string;
}

interface WorkerFormProps {
    worker: WorkerData;
    workerIndex: number;
    onRemoveWorker: (index: number) => void;
    onWorkerChange: (value: string | Date, index: number, field: string) => void;
    onWorkerFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const WorkerForm: React.FC<WorkerFormProps> = ({
    worker,
    workerIndex,
    onRemoveWorker,
    onWorkerChange,
    onWorkerFileChange,
}) => {
    const handleDateChange = (value: Date | null, field: string) => {
        const stringValue = value ? value.toISOString().split('T')[0] : ''; // Convert Date to string
        onWorkerChange(stringValue, workerIndex, field); // Call onWorkerChange with string value
    };
    return (
        <div className="worker-form my-4 p-4 border rounded border-5">
            <h3 className="mb-3">Worker {workerIndex + 1}</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`firstName${workerIndex}`}>First Name:</label>
                        <input
                            type="text"
                            id={`firstName${workerIndex}`}
                            name={`firstName${workerIndex}`}
                            className="form-control"
                            value={worker.firstName}
                            onChange={(e) => onWorkerChange(e.target.value, workerIndex, 'firstName')}
                            aria-label={`First Name of Worker ${workerIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor={`lastName${workerIndex}`}>Last Name:</label>
                        <input
                            type="text"
                            id={`lastName${workerIndex}`}
                            name={`lastName${workerIndex}`}
                            className="form-control"
                            value={worker.lastName}
                            onChange={(e) => onWorkerChange(e.target.value, workerIndex, 'lastName')}
                            aria-label={`Last Name of Worker ${workerIndex + 1}`}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor={`idCardPhoto${workerIndex}`}>Upload ID Card Photo :</label>
                        <input
                            type="file"
                            id={`idCardPhoto${workerIndex}`}
                            name={`idCardPhoto${workerIndex}`}
                            className="form-control-file mx-1"
                            onChange={(e) => onWorkerFileChange(e, workerIndex)}
                            accept=".jpg, .jpeg, .png"
                            aria-label={`Upload ID Card Photo for Worker ${workerIndex + 1}`}
                        />
                        {/* Placeholder for error message */}
                    </div>
                </div>
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor={`personalPhoto${workerIndex}`}>Upload Personal Photo :</label>
                        <input
                            type="file"
                            id={`personalPhoto${workerIndex}`}
                            name={`personalPhoto${workerIndex}`}
                            className="form-control-file mx-1"
                            onChange={(e) => onWorkerFileChange(e, workerIndex)}
                            accept=".jpg, .jpeg, .png"
                            aria-label={`Upload Personal Photo for Worker ${workerIndex + 1}`}
                        />
                        {/* Placeholder for error message */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">From Date:</label>
                        <DatePicker
                            className="form-control"
                            value={worker.fromDate ? new Date(worker.fromDate) : null}
                            onChange={(value) => handleDateChange(value, 'fromDate')}
                            rightSection={<IconCalendar />}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">To Date:</label>
                        <DatePicker
                            className="form-control"
                            value={worker.fromDate ? new Date(worker.fromDate) : null}
                            onChange={(value) => handleDateChange(value, 'fromDate')}
                            rightSection={<IconCalendar />}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group my-3">
                <textarea
                    placeholder="Please Write the Reason for Visiting"
                    rows={4}
                    id={`reason${workerIndex}`}
                    name={`reason${workerIndex}`}
                    className="form-control"
                    value={worker.reason}
                    onChange={(e) => onWorkerChange(e.target.value, workerIndex, 'reason')}
                    aria-label={`Reason for Visiting for Worker ${workerIndex + 1}`}
                ></textarea>
            </div>
            <div className="d-flex justify-content-end my-2">
                <button
                    type="button"
                    className="btn btn-danger btn-group-sm"
                    onClick={() => onRemoveWorker(workerIndex)}
                    aria-label={`Remove Worker ${workerIndex + 1}`}
                >
                    Remove Worker
                </button>
            </div>
        </div>
    );
};

export default WorkerForm;
