import React, { useState } from 'react';
import AddOwnerProfile from './AddOwnerProfile';
import FamilyDetails from './FamilyDetails';

interface OwnerData {
    maritalStatus: string | number | readonly string[] | undefined;
    unitType: string | number | readonly string[] | undefined;
    unitId: string | number | readonly string[] | undefined;
    projectName: string | number | readonly string[] | undefined;
    gender: string | number | readonly string[] | undefined;
    relation: string | number | readonly string[] | undefined;
    ownerName: string;
    id: string;
    nationality: string;
    mobile: string;
    address: string;
    email: string;
    job: string;
    placeOfWork: string;
    passportNo: string;
    workMobile: string;
    expiryDate: string;
    region: string;
    idExpiryDate: string;
    ownerStatus: string;
    ownerNotes: string;
    customerType: string;
    education: string;
    birthDate: string;
    carNumber: string;
    ownerKind: string;
    image: string;
}

const ProfileTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'owner' | 'family'>('owner');

    const handleTabClick = (tab: 'owner' | 'family') => {
        setActiveTab(tab);
    };

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'owner' ? 'active' : ''}`}
                        onClick={() => handleTabClick('owner')}
                    >
                        Owner Profile
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'family' ? 'active' : ''}`}
                        onClick={() => handleTabClick('family')}
                    >
                        Family Details
                    </button>
                </li>
            </ul>
            <div className="tab-content">
                {activeTab === 'owner' && <AddOwnerProfile onAddOwner={function (owner: OwnerData): void {
                    throw new Error('Function not implemented.');
                } } />}
                {activeTab === 'family' && <FamilyDetails />}
            </div>
        </div>
    );
};

export default ProfileTabs;
