import React from 'react';
import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';
import QRCode from 'react-qr-code';

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
    permissionNumber: string;
    qrCodeGenerated: string;
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
                    <div className="mb-3">
                        <label htmlFor={`firstName${workerIndex}`} className="form-label">
                            First Name:
                        </label>
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
                    <div className="mb-3">
                        <label htmlFor={`lastName${workerIndex}`} className="form-label">
                            Mobile Number:
                        </label>
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
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor={`cost${workerIndex}`} className="form-label">
                            Cost:
                        </label>
                        <input
                            type="text"
                            id={`cost${workerIndex}`}
                            name={`cost${workerIndex}`}
                            className="form-control"
                            value={worker.cost}
                            onChange={(e) => onWorkerChange(e.target.value, workerIndex, 'cost')}
                            aria-label={`Cost for Worker ${workerIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor={`carId${workerIndex}`} className="form-label">
                            Car ID:
                        </label>
                        <input
                            type="text"
                            id={`carId${workerIndex}`}
                            name={`carId${workerIndex}`}
                            className="form-control"
                            value={worker.carId}
                            onChange={(e) => onWorkerChange(e.target.value, workerIndex, 'Car ID')}
                            aria-label={`Car Id for Worker ${workerIndex + 1}`}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor={`permissionNumber${workerIndex}`} className="form-label">
                            Permission Number:
                        </label>
                        <input
                            type="text"
                            id={`permissionNumber${workerIndex}`}
                            name={`permissionNumber${workerIndex}`}
                            className="form-control"
                            value={worker.permissionNumber}
                            onChange={(e) => onWorkerChange(e.target.value, workerIndex, 'permissionNumber')}
                            aria-label={`Permission Number for Worker ${workerIndex + 1}`}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor={`workerStatus${workerIndex}`} className="form-label">
                            Worker Status:
                        </label>
                        <select
                            id={`workerStatus${workerIndex}`}
                            name={`workerStatus${workerIndex}`}
                            className="form-select"
                            value={worker.workerStatus}
                            onChange={(e) => onWorkerChange(e.target.value, workerIndex, 'workerStatus')}
                            aria-label={`Worker Status of Worker ${workerIndex + 1}`}
                        >
                            <option value="">Select Worker Status</option>
                            <option value="active">Allowed</option>
                            <option value="inactive">Rejected</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
            <div className="col-md-6 mb-4">
                    <div style={{ height: 'auto', margin: '0 auto', maxWidth: 64, width: '100%' }}>
                        <QRCode
                            size={256}
                            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                            value={worker.permissionNumber} // Pass the permission number as the value
                            viewBox={`0 0 256 256`}
                        />
                    </div>{' '}
                </div>


            </div>
            {/* <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
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
                    <div className="mb-3">
                        <label className="form-label">To Date:</label>
                        <DatePicker
                            className="form-control"
                            value={worker.fromDate ? new Date(worker.fromDate) : null}
                            onChange={(value) => handleDateChange(value, 'fromDate')}
                            rightSection={<IconCalendar />}
                        />
                    </div>
                </div>
            </div> */}
            <div className="row my-3">
                <div className="col-md-6 mb-3">
                    <label htmlFor={`idCardPhoto${workerIndex}`} className="form-label">
                        Upload ID Card Photo :
                    </label>
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
                <div className="col-md-6 mb-3">
                    <label htmlFor={`personalPhoto${workerIndex}`} className="form-label">
                        Upload Personal Photo :
                    </label>
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
            <div className="form-group mb-3">
                <label htmlFor={`reason${workerIndex}`} className="form-label">
                    Reason for Visiting:
                </label>
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
            <div className="d-flex justify-content-end">
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
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
