import React from 'react';
import { Container, Select, TextInput, Button } from '@mantine/core';
import PageTitle from '../../components/PageTitle';
import PaperBox from '../../components/PaperBox';

const AddBuilding: React.FC = () => {
    const [projectName, setProjectName] = React.useState('');
    const [gradeName, setGradeName] = React.useState('');
    const [buildingName, setBuildingName] = React.useState('');
    const [buildingType, setBuildingType] = React.useState('');
    const [buildingStatus, setBuildingStatus] = React.useState('');
    const [numberOfFloors, setNumberOfFloors] = React.useState('');
    const [totalNumberOfUnits, setTotalNumberOfUnits] = React.useState('');
    const [numberOfUnitsResidents, setNumberOfUnitsResidents] = React.useState('');
    const [numberOfUnitsCommercial, setNumberOfUnitsCommercial] = React.useState('');
    const [numberOfUnitsParking, setNumberOfUnitsParking] = React.useState('');

    // Handler for form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your logic for handling form submission here
    };

    // Options for building types
    const buildingTypeOptions = [
        { label: 'Residential', value: 'Residential' },
        { label: 'Commercial', value: 'Commercial' },
        { label: 'Mixed-use', value: 'Mixed-use' },
    ];

    return (
        <Container size="xl">
            <PageTitle title="Add Building" />
            <PaperBox>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3 my-4">
                        <div className="col-md-6">
                            <Select
                                data={[
                                    { label: 'Blue blue', value: 'Blue blue' },
                                    { label: 'HQ', value: 'Hq' },
                                ]}
                                value={projectName}
                                onChange={(value) => setProjectName(value as string)}
                                label="Project"
                                placeholder="Select Project"
                            />
                        </div>
                        <div className="col-md-6">
                            <TextInput
                                label="Grade Name"
                                value={gradeName}
                                onChange={(event) => setGradeName(event.currentTarget.value)}
                            />
                        </div>
                    </div>
                    <div className="row mb-3 my-4">
                        <div className="col-md-6">
                            <TextInput
                                label="Building Name"
                                value={buildingName}
                                onChange={(event) => setBuildingName(event.currentTarget.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <Select
                                data={buildingTypeOptions}
                                value={buildingType}
                                onChange={(value) => setBuildingType(value as string)}
                                placeholder="Select building type"
                                id="buildingType"
                                label="Building Type"
                            />
                        </div>
                    </div>
                    <div className="row mb-3 my-4">
                        <div className="col-md-6">
                            <Select
                                data={[
                                    { label: 'Ready', value: 'Ready' },
                                    { label: 'Under Construction', value: 'Under Construction' },
                                ]}
                                value={buildingStatus}
                                onChange={(value) => setBuildingStatus(value as string)}
                                placeholder="Select building status"
                                id="buildingStatus"
                                label="Building Status"
                            />
                        </div>
                        <div className="col-md-6">
                            <TextInput
                                label="Number of Floors"
                                value={numberOfFloors}
                                onChange={(event) => setNumberOfFloors(event.currentTarget.value)}
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="row mb-3 my-4">
                        <div className="col-md-6">
                            <TextInput
                                label="Total Number of Units"
                                value={totalNumberOfUnits}
                                onChange={(event) => setTotalNumberOfUnits(event.currentTarget.value)}
                                type="number"
                            />
                        </div>
                        <div className="col-md-6">
                            <TextInput
                                label="Number of Units Residents"
                                value={numberOfUnitsResidents}
                                onChange={(event) => setNumberOfUnitsResidents(event.currentTarget.value)}
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="row mb-3 my-4">
                        <div className="col-md-6">
                            <TextInput
                                label="Number of Units Commercial"
                                value={numberOfUnitsCommercial}
                                onChange={(event) => setNumberOfUnitsCommercial(event.currentTarget.value)}
                                type="number"
                            />
                        </div>
                        <div className="col-md-6">
                            <TextInput
                                label="Number of Units Parking"
                                value={numberOfUnitsParking}
                                onChange={(event) => setNumberOfUnitsParking(event.currentTarget.value)}
                                type="number"
                            />
                        </div>
                    </div>
                </form>
                <Button className="w-100" type="submit" variant="filled" color="teal">
                    Save
                </Button>
            </PaperBox>
        </Container>
    );
};

export default AddBuilding;
