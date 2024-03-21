import React from 'react';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';

interface PaymentMethodDetailsProps {
    onAddPaymentMethodDetails: (paymentMethodDetails: PaymentMethodData) => void;
}

interface PaymentMethodData {
    name: string;
    yeaCount: string;
    installmentCount: string;
    halfYeaCount: string;
    quarterCount: string;
    yearlyCount: string;
    downPaymentCount: string;
    reservationCount: string;
    receiveCount: string;
}

const AddPaymentMethod: React.FC<PaymentMethodDetailsProps> = ({ onAddPaymentMethodDetails }) => {
    const [paymentMethodDetails, setPaymentMethodDetails] = React.useState<PaymentMethodData>({
        name: '',
        yeaCount: '',
        installmentCount: '',
        halfYeaCount: '',
        quarterCount: '',
        yearlyCount: '',
        downPaymentCount: '',
        reservationCount: '',
        receiveCount: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPaymentMethodDetails((prevPaymentMethodDetails) => ({
            ...prevPaymentMethodDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddPaymentMethodDetails(paymentMethodDetails);
        setPaymentMethodDetails({
            name: '',
            yeaCount: '',
            installmentCount: '',
            halfYeaCount: '',
            quarterCount: '',
            yearlyCount: '',
            downPaymentCount: '',
            reservationCount: '',
            receiveCount: '',
        });
    };

    return (
        <>
            <div className="container py-4">
                <div className="row justify-content-center">
                    <PageTitle title="Payment Method Details" />
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
                                                    value={paymentMethodDetails.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="yeaCount" className="form-label">
                                                    Yea Count
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="yeaCount"
                                                    placeholder="Enter Yea Count"
                                                    name="yeaCount"
                                                    value={paymentMethodDetails.yeaCount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="installmentCount" className="form-label">
                                                    Installment Count
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="installmentCount"
                                                    placeholder="Enter Installment Count"
                                                    name="installmentCount"
                                                    value={paymentMethodDetails.installmentCount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="halfYeaCount" className="form-label">
                                                    Half Yea Count
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="halfYeaCount"
                                                    placeholder="Enter Half Yea Count"
                                                    name="halfYeaCount"
                                                    value={paymentMethodDetails.halfYeaCount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="quarterCount" className="form-label">
                                                    Quarter Count
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="quarterCount"
                                                    placeholder="Enter Quarter Count"
                                                    name="quarterCount"
                                                    value={paymentMethodDetails.quarterCount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="yearlyCount" className="form-label">
                                                    Yearly Count
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="yearlyCount"
                                                    placeholder="Enter Yearly Count"
                                                    name="yearlyCount"
                                                    value={paymentMethodDetails.yearlyCount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="downPaymentCount" className="form-label">
                                                    Down Payment Count
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="downPaymentCount"
                                                    placeholder="Enter Down Payment Count"
                                                    name="downPaymentCount"
                                                    value={paymentMethodDetails.downPaymentCount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="reservationCount" className="form-label">
                                                    Reservation Count
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="reservationCount"
                                                    placeholder="Enter Reservation Count"
                                                    name="reservationCount"
                                                    value={paymentMethodDetails.reservationCount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="receiveCount" className="form-label">
                                                    Receive Count
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="receiveCount"
                                                    placeholder="Enter Receive Count"
                                                    name="receiveCount"
                                                    value={paymentMethodDetails.receiveCount}
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

export default AddPaymentMethod;
