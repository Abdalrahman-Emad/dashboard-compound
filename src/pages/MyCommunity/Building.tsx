import React, { useState } from 'react';
import { Container, Table, Button, TextInput } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BuildingView: React.FC = () => {
    // Sample data for demonstration
    const [filter, setFilter] = useState({
        projectName: '',
        gradeName: '',
        buildingName: '',
        buildingType: '',
        buildingStatus: '',
    });

    const sampleBuildingData = [
        {
            projectName: 'Blue blue',
            gradeName: 'Cyan',
            buildingName: 'Blue Island 1',
            buildingType: 'Residential',
            buildingStatus: 'Completed',
            numberOfFloors: 5,
            totalNumberOfUnits: 50,
            numberOfUnitsResidents: 40,
            numberOfUnitsCommercial: 5,
            numberOfUnitsParking: 5,
        },
        {
            projectName: 'HQ',
            gradeName: 'Azure',
            buildingName: 'Building B',
            buildingType: 'Commercial',
            buildingStatus: 'Under Construction',
            numberOfFloors: 7,
            totalNumberOfUnits: 70,
            numberOfUnitsResidents: 0,
            numberOfUnitsCommercial: 70,
            numberOfUnitsParking: 10,
        },
    ];

    const filteredData = sampleBuildingData.filter((building) => {
        return (
            building.projectName.includes(filter.projectName) &&
            building.gradeName.includes(filter.gradeName) &&
            building.buildingName.includes(filter.buildingName) &&
            building.buildingType.includes(filter.buildingType) &&
            building.buildingStatus.includes(filter.buildingStatus)
        );
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setFilter({ ...filter, [key]: e.target.value });
    };

    return (
        <Container size="xl">
            <h2 className="m-3">Building View</h2>
            <PaperBox>
                <div className="row mb-3 my-4 d-flex justify-content-between">
                    <div className="col">
                        <TextInput
                            placeholder="Project Name"
                            value={filter.projectName}
                            onChange={(e) => handleChange(e, 'projectName')}
                        />
                    </div>
                    <div className="col">
                        <TextInput
                            placeholder="Grade Name"
                            value={filter.gradeName}
                            onChange={(e) => handleChange(e, 'gradeName')}
                        />
                    </div>
                    <div className="col">
                        <TextInput
                            placeholder="Building Name"
                            value={filter.buildingName}
                            onChange={(e) => handleChange(e, 'buildingName')}
                        />
                    </div>
                    <div className="col">
                        <TextInput
                            placeholder="Building Type"
                            value={filter.buildingType}
                            onChange={(e) => handleChange(e, 'buildingType')}
                        />
                    </div>
                    <div className="col">
                        <TextInput
                            placeholder="Building Status"
                            value={filter.buildingStatus}
                            onChange={(e) => handleChange(e, 'buildingStatus')}
                        />
                    </div>
                    <div className="col text-center">
                        <Link to={'/dashboard/community/building/add-building'}>
                            <Button variant="filled" color="teal">
                                Add Building
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="table-responsive">
    <Table style={{ border: '1px solid #dee2e6', borderRadius: '0.25rem' }}>
        <thead className="thead-dark">
            <tr>
                <th className="align-middle bg-primary text-white">Project Name</th>
                <th className="align-middle bg-primary text-white">Grade Name</th>
                <th className="align-middle bg-primary text-white">Building Name</th>
                <th className="align-middle bg-primary text-white">Building Type</th>
                <th className="align-middle bg-primary text-white">Building Status</th>
                <th className="align-middle bg-primary text-white">No of Floors</th>
                <th className="align-middle bg-primary text-white">Total No of Units</th>
                <th className="align-middle bg-primary text-white">No of Units Residents</th>
                <th className="align-middle bg-primary text-white">No of Units Commercial</th>
                <th className="align-middle bg-primary text-white">No of Units Parking</th>
                <th className="align-middle bg-primary text-white">Actions</th>
            </tr>
        </thead>
        <tbody>
            {filteredData.map((building, index) => (
                <tr key={index}>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.projectName}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.gradeName}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.buildingName}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.buildingType}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.buildingStatus}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.numberOfFloors}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.totalNumberOfUnits}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.numberOfUnitsResidents}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.numberOfUnitsCommercial}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>{building.numberOfUnitsParking}</td>
                    <td style={{ border: '1px solid #dee2e6', padding: '0.75rem' }}>
                        <div className="btn-group" role="group">
                            <Link to={'/dashboard/community/building/edit-building'}>
                                <Button
                                    className="btn btn-sm btn-primary mr-1 mx-1"
                                    variant="outline"
                                    color="blue"
                                    size="sm"
                                >
                                    <FaEdit />
                                </Button>
                            </Link>
                            <Button
                                className="btn btn-sm btn-danger"
                                variant="outline"
                                color="red"
                                size="sm"
                            >
                                <FaTrash />
                            </Button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
</div>

            </PaperBox>
        </Container>
    );
};

export default BuildingView;
