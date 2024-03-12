import React, { useState } from 'react';
import AddOwnerProfile from './AddOwnerProfile';
import FamilyDetails from './FamilyDetails';


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
                {activeTab === 'owner' && <AddOwnerProfile />}
                {activeTab === 'family' && <FamilyDetails />}
            </div>
        </div>
    );
};

export default ProfileTabs;
