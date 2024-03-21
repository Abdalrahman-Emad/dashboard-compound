import React from 'react';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';

interface PaymentDetailsProps {
    onAddPaymentDetails: (paymentDetails: PaymentData) => void;
}

interface PaymentData {
    paymentMethod: string;
    installmentAmount: string;
    halfAmount: string;
    quarterAmount: string;
    yearlyAmount: string;
    downPaymentAmount: string;
    reservationAmount: string;
    isCanceled: boolean;
    totalInstallments: string;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ onAddPaymentDetails }) => {
    const [paymentDetails, setPaymentDetails] = React.useState<PaymentData>({
        paymentMethod: '',
        installmentAmount: '',
        halfAmount: '',
        quarterAmount: '',
        yearlyAmount: '',
        downPaymentAmount: '',
        reservationAmount: '',
        isCanceled: false,
        totalInstallments: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setPaymentDetails((prevPaymentDetails) => ({
            ...prevPaymentDetails,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddPaymentDetails(paymentDetails);
        setPaymentDetails({
            paymentMethod: '',
            installmentAmount: '',
            halfAmount: '',
            quarterAmount: '',
            yearlyAmount: '',
            downPaymentAmount: '',
            reservationAmount: '',
            isCanceled: false,
            totalInstallments: '',
        });
    };

    return (
        <>
            <div className="container py-4">
                <div className="row justify-content-center">
                    <PageTitle title="Payment Details" />
                    <div className="col-md-12">
                        <div className="card shadow">
                            <PaperBox>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="paymentMethod" className="form-label">
                                                    Payment Method
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="paymentMethod"
                                                    placeholder="Enter Payment Method"
                                                    name="paymentMethod"
                                                    value={paymentDetails.paymentMethod}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="installmentAmount" className="form-label">
                                                    Installment Amount
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="installmentAmount"
                                                    placeholder="Enter Installment Amount"
                                                    name="installmentAmount"
                                                    value={paymentDetails.installmentAmount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="halfAmount" className="form-label">
                                                    Half Amount
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="halfAmount"
                                                    placeholder="Enter Half Amount"
                                                    name="halfAmount"
                                                    value={paymentDetails.halfAmount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="quarterAmount" className="form-label">
                                                    Quarter Amount
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="quarterAmount"
                                                    placeholder="Enter Quarter Amount"
                                                    name="quarterAmount"
                                                    value={paymentDetails.quarterAmount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="yearlyAmount" className="form-label">
                                                    Yearly Amount
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="yearlyAmount"
                                                    placeholder="Enter Yearly Amount"
                                                    name="yearlyAmount"
                                                    value={paymentDetails.yearlyAmount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="downPaymentAmount" className="form-label">
                                                    Down Payment Amount
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="downPaymentAmount"
                                                    placeholder="Enter Down Payment Amount"
                                                    name="downPaymentAmount"
                                                    value={paymentDetails.downPaymentAmount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="reservationAmount" className="form-label">
                                                    Reservation Amount
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="reservationAmount"
                                                    placeholder="Enter Reservation Amount"
                                                    name="reservationAmount"
                                                    value={paymentDetails.reservationAmount}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="isCanceled"
                                                        name="isCanceled"
                                                        checked={paymentDetails.isCanceled}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="isCanceled">
                                                        Is Canceled
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col">
                                                <label htmlFor="totalInstallments" className="form-label">
                                                    Total Installments
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="totalInstallments"
                                                    placeholder="Enter Total Installments"
                                                    name="totalInstallments"
                                                    value={paymentDetails.totalInstallments}
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

export default PaymentDetails;
