import React from 'react';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';

interface CustomerDetailsProps {
    onAddCustomerDetails: (customerDetails: CustomerData) => void;
}

interface CustomerData {
    name: string;
    address1: string;
    address2: string;
    city: string;
    country: string;
    email: string;
    postalCode: string;
    telephone1: string;
    salesRep: string;
    national: string;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ onAddCustomerDetails }) => {
    const [customerDetails, setCustomerDetails] = React.useState<CustomerData>({
        name: '',
        address1: '',
        address2: '',
        city: '',
        country: '',
        email: '',
        postalCode: '',
        telephone1: '',
        salesRep: '',
        national: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCustomerDetails((prevCustomerDetails) => ({
            ...prevCustomerDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddCustomerDetails(customerDetails);
        setCustomerDetails({
            name: '',
            address1: '',
            address2: '',
            city: '',
            country: '',
            email: '',
            postalCode: '',
            telephone1: '',
            salesRep: '',
            national: '',
        });
    };

    return (
        <>
            <div className="container py-4">
                <div className="row justify-content-center">
                    <PageTitle title="Customer Details" />
                    <div className="col-md-12">
                        <div className="card shadow">
                            <PaperBox>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
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
                                                    value={customerDetails.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="address1" className="form-label">
                                                    Address 1
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="address1"
                                                    placeholder="Enter Address 1"
                                                    name="address1"
                                                    value={customerDetails.address1}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="address2" className="form-label">
                                                    Address 2
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="address2"
                                                    placeholder="Enter Address 2"
                                                    name="address2"
                                                    value={customerDetails.address2}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="city" className="form-label">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="city"
                                                    placeholder="Enter City"
                                                    name="city"
                                                    value={customerDetails.city}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="country" className="form-label">
                                                    Country
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="country"
                                                    placeholder="Enter Country"
                                                    name="country"
                                                    value={customerDetails.country}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="email" className="form-label">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Enter Email"
                                                    name="email"
                                                    value={customerDetails.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="postalCode" className="form-label">
                                                    Postal Code
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="postalCode"
                                                    placeholder="Enter Postal Code"
                                                    name="postalCode"
                                                    value={customerDetails.postalCode}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="telephone1" className="form-label">
                                                    Telephone 1
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="telephone1"
                                                    placeholder="Enter Telephone 1"
                                                    name="telephone1"
                                                    value={customerDetails.telephone1}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="salesRep" className="form-label">
                                                    Sales Rep
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="sales Rep"
                                                    placeholder="Enter Sales Rep"
                                                    name="sales Rep"
                                                    value={customerDetails.salesRep}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="national" className="form-label">
                                                    National
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="national"
                                                    placeholder="Enter National"
                                                    name="national"
                                                    value={customerDetails.national}
                                                    onChange={handleChange}
                                                />
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

export default CustomerDetails;
