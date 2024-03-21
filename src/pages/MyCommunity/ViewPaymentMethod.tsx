import React, { useState, useEffect } from 'react';
import PaperBox from '../../components/PaperBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PaymentMethodTable: React.FC = () => {
    interface PaymentMethod {
        name: string;
        id: string;
        yearCount: string;
        installmentCount: string;
        halfYearCount: string;
        quarterCount: string;
        yearlyCount: string;
    }

    const paymentMethodData: PaymentMethod[] = [
        {
            name: "Method A",
            id: "001",
            yearCount: "2",
            installmentCount: "4",
            halfYearCount: "3",
            quarterCount: "5",
            yearlyCount: "2",
        },
        {
            name: "Method A",
            id: "001",
            yearCount: "2",
            installmentCount: "4",
            halfYearCount: "3",
            quarterCount: "5",
            yearlyCount: "2",
        },
        {
            name: "Method A",
            id: "001",
            yearCount: "2",
            installmentCount: "4",
            halfYearCount: "3",
            quarterCount: "5",
            yearlyCount: "2",
        },
        {
            name: "Method A",
            id: "001",
            yearCount: "2",
            installmentCount: "4",
            halfYearCount: "3",
            quarterCount: "5",
            yearlyCount: "2",
        },
    ];

    const [filteredData, setFilteredData] = useState<PaymentMethod[]>([]);
    const [filters, setFilters] = useState<{ [key: string]: string }>({
        name: '',
        id: '',
        yearCount: '',
        installmentCount: '',
    });

    useEffect(() => {
        setFilteredData(paymentMethodData);
    }, []);

    const handleUpdateMethod = (id: string) => {
        console.log(`Updating payment method ${id}`);
    };

    const handleDeleteMethod = (id: string) => {
        console.log(`Deleting payment method ${id}`);
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        let filteredMethods = paymentMethodData.filter((method) => {
            return Object.keys(filters).every((key) => {
                return method[key as keyof PaymentMethod].toLowerCase().includes(filters[key].toLowerCase());
            });
        });
        setFilteredData(filteredMethods);
    };

    return (
        <div className="container">
            <h2 className='mb-3 my-3'>Payment Methods</h2>
            <PaperBox>
            <div className="d-flex justify-content-end align-items-end mb-4">
                    <Link to="/dashboard/community/PaymentMethod/AddPaymentMethod">
                        <button className="btn btn-primary">Add booking unit</button>
                    </Link>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by Name"
                            name="name"
                            value={filters.name}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by ID"
                            name="id"
                            value={filters.id}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by Year Count"
                            name="yearCount"
                            value={filters.yearCount}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by Installment Count"
                            name="installmentCount"
                            value={filters.installmentCount}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="col">
                        
                        <button className="btn btn-secondary" onClick={() => setFilters({})}>
                            Clear 
                        </button>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th className="align-middle bg-primary text-white p-4">Name</th>
                                <th className="align-middle bg-primary text-white p-4">ID</th>
                                <th className="align-middle bg-primary text-white p-4">YeaCount</th>
                                <th className="align-middle bg-primary text-white p-4">Installment Count</th>
                                <th className="align-middle bg-primary text-white p-4">Half Count</th>
                                <th className="align-middle bg-primary text-white p-4">quarter Count</th>
                                <th className="align-middle bg-primary text-white p-4">Yearly Count</th>
                                <th className="align-middle bg-primary text-white p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((method, index) => (
                                <tr key={index}>
                                    <td className="p-4">{method.name}</td>
                                    <td className="p-4">{method.id}</td>
                                    <td className="p-4">{method.yearCount}</td>
                                    <td className="p-4">{method.installmentCount}</td>
                                    <td className="p-4">{method.halfYearCount}</td>
                                    <td className="p-4">{method.quarterCount}</td>
                                    <td className="p-4">{method.yearCount}</td>
                                    <td className="p-4">
                                        <div className="btn-group" role="group">
                                            <Link to={`/payment-methods/${method.id}/edit`}>
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    className="btn btn-sm btn-primary mx-1"
                                                    onClick={() => handleUpdateMethod(method.id)}
                                                />
                                            </Link>
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                className="btn btn-sm btn-danger my-1"
                                                onClick={() => handleDeleteMethod(method.id)}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </PaperBox>
        </div>
    );
};

export default PaymentMethodTable;
