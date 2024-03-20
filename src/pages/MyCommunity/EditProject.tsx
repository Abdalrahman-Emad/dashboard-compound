import React, { useState } from 'react';
import { Container, Select, TextInput, Button } from '@mantine/core';
import PageTitle from '../../components/PageTitle';
import PaperBox from '../../components/PaperBox';

const EditProject: React.FC = () => {
    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [location, setLocation] = useState('');
    const [projectStatus, setProjectStatus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalUnitsResidential, setTotalUnitsResidential] = useState('');
    const [totalUnitsTourist, setTotalUnitsTourist] = useState('');
    const [totalUnitsCommercial, setTotalUnitsCommercial] = useState('');
    const [totalUnits, setTotalUnits] = useState('');
    const [buildingCount, setBuildingCount] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic
    };

    const projectTypeOptions = [
        { label: 'Commercial', value: 'Commercial' },
        { label: 'Residential', value: 'Residential' },
        { label: 'Type C', value: 'Type C' },
    ];

    const projectStatusOptions = [
        { label: 'Planned', value: 'Planned' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Completed', value: 'Completed' },
    ];

    return (
        <Container size="xl">
            <PageTitle title="Edit Project" />
            <PaperBox>
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <TextInput
                        className='py-2'
                            label="Project Name"
                            value={projectName}
                            onChange={(e) => setProjectName(e.currentTarget.value)}
                        />
                        <Select
                        className='py-2'
                            label="Project Type"
                            placeholder="Select project type"
                            data={projectTypeOptions}
                            value={projectType}
                            onChange={(value) => setProjectType(value as string)}
                        />
                        <TextInput
                        className='py-2'
                            label="Location"
                            value={location}
                            onChange={(e) => setLocation(e.currentTarget.value)}
                        />
                        <Select
                        className='py-2'
                            label="Project Status"
                            placeholder="Select project status"
                            data={projectStatusOptions}
                            value={projectStatus}
                            onChange={(value) => setProjectStatus(value as string)}
                        />
                        <TextInput
                        className='py-2'
                            label="Start Date"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.currentTarget.value)}
                        />
                        <TextInput
                        className='py-2'
                            label="End Date"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.currentTarget.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <TextInput
                        className='py-2'
                            label="Total Units Residential"
                            type="number"
                            value={totalUnitsResidential}
                            onChange={(e) => setTotalUnitsResidential(e.currentTarget.value)}
                        />
                        <TextInput
                        className='py-2'
                            label="Total Units Tourist"
                            type="number"
                            value={totalUnitsTourist}
                            onChange={(e) => setTotalUnitsTourist(e.currentTarget.value)}
                        />
                        <TextInput
                        className='py-2'
                            label="Total Units Commercial"
                            type="number"
                            value={totalUnitsCommercial}
                            onChange={(e) => setTotalUnitsCommercial(e.currentTarget.value)}
                        />
                        <TextInput
                        className='py-2'
                            label="Total Units"
                            type="number"
                            value={totalUnits}
                            onChange={(e) => setTotalUnits(e.currentTarget.value)}
                        />
                        <TextInput
                        className='py-2'
                            label="Building Count"
                            type="number"
                            value={buildingCount}
                            onChange={(e) => setBuildingCount(e.currentTarget.value)}
                        />
                        <TextInput
                        className='py-2'
                            label="Delivery Date"
                            type="date"
                            value={deliveryDate}
                            onChange={(e) => setDeliveryDate(e.currentTarget.value)}
                        />
                    </div>
                    <Button  type="submit" variant="filled" color="teal" className="mt-4 w-100">
                            Update
                        </Button>

                </form>
            </PaperBox>
        </Container>
    );
};

export default EditProject;
