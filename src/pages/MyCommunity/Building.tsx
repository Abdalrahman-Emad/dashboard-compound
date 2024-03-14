import React, { useState } from 'react';
import { Container, Table, Button, TextInput } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const BuildingView: React.FC = () => {
    const navigate = useNavigate();

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
                            <Button className="btn-primary">Add Building</Button>
                        </Link>
                    </div>
                </div>
                <div className="table-responsive w-100">
                    <Table style={{ border: '1px solid #dee2e6', borderRadius: '0.25rem' }}>
                        <thead className="thead-dark">
                            <tr>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Project Name
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Grade Name
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Building Name
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Building Type
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Building Status
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    No of Floors
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Total No of Units
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    No of Units Residents
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    No of Units Commercial
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    No of Units Parking
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((building, index) => (
                                <tr key={index}>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6'}}>
                                        {building.projectName}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6'}}>
                                        {building.gradeName}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6'}}>
                                        {building.buildingName}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6' }}>
                                        {building.buildingType}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6' }}>
                                        {building.buildingStatus}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6' }}>
                                        {building.numberOfFloors}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6' }}>
                                        {building.totalNumberOfUnits}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6' }}>
                                        {building.numberOfUnitsResidents}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6'}}>
                                        {building.numberOfUnitsCommercial}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6'}}>
                                        {building.numberOfUnitsParking}
                                    </td>
                                    <td className='text-center p-3'  style={{ border: '1px solid #dee2e6'}}>

                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Link to={'/dashboard/community/building/edit-building'}>
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    className="btn btn-sm btn-primary mx-1 mb-1"
                                                />{' '}
                                            </Link>
                                            <FontAwesomeIcon icon={faTrash} className="btn btn-sm btn-danger mx-1" />
                                            {''}
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
