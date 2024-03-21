import React from 'react';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';

interface UnitDetailsProps {
    onAddUnitDetails: (unitDetails: UnitData) => void;
}

interface UnitData {
    id: string;
    unit: string;
    name: string;
    building: string;
    code: string;
    type: string;
    totalSize: string;
    netSize: string;
    layout: string;
    price: string;
    description: string;
}

const UnitDetails: React.FC<UnitDetailsProps> = ({ onAddUnitDetails }) => {
    const [unitDetails, setUnitDetails] = React.useState<UnitData>({
        id: '',
        unit: '',
        name: '',
        building: '',
        code: '',
        type: '',
        totalSize: '',
        netSize: '',
        layout: '',
        price: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUnitDetails((prevUnitDetails) => ({
            ...prevUnitDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddUnitDetails(unitDetails);
        setUnitDetails({
            id: '',
            unit: '',
            name: '',
            building: '',
            code: '',
            type: '',
            totalSize: '',
            netSize: '',
            layout: '',
            price: '',
            description: '',
        });
    };

    return (
        <>
            <div className="container py-4">
                <div className="row justify-content-center">
                    <PageTitle title="Unit Details" />
                    <div className="col-md-12">
                        <div className="card shadow">
                            <PaperBox>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="id" className="form-label">
                                                    ID
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="id"
                                                    placeholder="Enter ID"
                                                    name="id"
                                                    value={unitDetails.id}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="unit" className="form-label">
                                                    Unit
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="unit"
                                                    placeholder="Enter Unit"
                                                    name="unit"
                                                    value={unitDetails.unit}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="name" className="form-label">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Enter Name"
                                                    name="name"
                                                    value={unitDetails.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="building" className="form-label">
                                                    Building
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="building"
                                                    placeholder="Enter Building"
                                                    name="building"
                                                    value={unitDetails.building}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="code" className="form-label">
                                                    Code
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="code"
                                                    placeholder="Enter Code"
                                                    name="code"
                                                    value={unitDetails.code}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="type" className="form-label">
                                                    Type
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="type"
                                                    placeholder="Enter Type"
                                                    name="type"
                                                    value={unitDetails.type}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="totalSize" className="form-label">
                                                    Total Size
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="totalSize"
                                                    placeholder="Enter Total Size"
                                                    name="totalSize"
                                                    value={unitDetails.totalSize}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="netSize" className="form-label">
                                                    Net Size
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="netSize"
                                                    placeholder="Enter Net Size"
                                                    name="netSize"
                                                    value={unitDetails.netSize}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="layout" className="form-label">
                                                    Layout
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="layout"
                                                    placeholder="Enter Layout"
                                                    name="layout"
                                                    value={unitDetails.layout}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="price" className="form-label">
                                                    Price
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="price"
                                                    placeholder="Enter Price"
                                                    name="price"
                                                    value={unitDetails.price}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="description" className="form-label">
                                                    Description
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="description"
                                                    rows={3}
                                                    placeholder="Enter Description"
                                                    name="description"
                                                    value={unitDetails.description}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <button type="submit" className="w-100 btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
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

export default UnitDetails;
