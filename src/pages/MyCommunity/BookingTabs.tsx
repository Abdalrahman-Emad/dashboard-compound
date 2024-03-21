import React, { useState } from 'react';
import UnitDetails from './BookingData';
import CustomerDetails from './CustomerDetails';
import PaymentMethod from './PaymentmetMethodDetails ';


const ProfileTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'unit' | 'customer' | 'payment'>('unit');

    const handleTabClick = (tab: 'unit' | 'customer' | 'payment') => {
        setActiveTab(tab);
    };

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'unit' ? 'active' : ''}`}
                        onClick={() => handleTabClick('unit')}
                    >
                        Unit Details
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'customer' ? 'active' : ''}`}
                        onClick={() => handleTabClick('customer')}
                    >
                        Customer Details
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'payment' ? 'active' : ''}`}
                        onClick={() => handleTabClick('payment')}
                    >
                        Payment Method
                    </button>
                </li>
            </ul>
            <div className="tab-content">
                {activeTab === 'unit' && <UnitDetails />}
                {activeTab === 'customer' && <CustomerDetails />}
                {activeTab === 'payment' && <PaymentMethod />}
            </div>
        </div>
    );
};

export default ProfileTabs;
