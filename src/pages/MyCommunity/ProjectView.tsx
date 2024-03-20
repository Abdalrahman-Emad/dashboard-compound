import React, { useState } from 'react';
import { Container, Table, Button, TextInput } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProjectView: React.FC = () => {
    // Sample data for demonstration
    const [filter, setFilter] = useState({
        projectName: '',
        projectType: '',
        location: '',
        projectStatus: '',
        startDate: '',
        endDate: '',
        totalUnitsResidential: '',
        totalUnitsTourist: '',
        totalUnitsCommercial: '',
        totalUnits: '',
        buildingCount: '',
        deliveryDate: '',
    });

    const sampleProjectData = [
        {
            projectName: 'Blue blue',
            projectType: 'Residential',
            location: 'City A',
            projectStatus: 'Planned',
            startDate: '2024-01-01',
            endDate: '2024-12-31',
            totalUnitsResidential: 50,
            totalUnitsTourist: 10,
            totalUnitsCommercial: 20,
            totalUnits: 80,
            buildingCount: 5,
            deliveryDate: '2025-01-01',
        },
        {
            projectName: 'Lavida',
            projectType: 'Commercial',
            location: 'City B',
            projectStatus: 'In Progress',
            startDate: '2023-06-01',
            endDate: '2024-12-31',
            totalUnitsResidential: 0,
            totalUnitsTourist: 0,
            totalUnitsCommercial: 50,
            totalUnits: 50,
            buildingCount: 3,
            deliveryDate: '2024-12-31',
        },
        {
            projectName: 'HQ',
            projectType: 'Commercial',
            location: 'City B',
            projectStatus: 'In Progress',
            startDate: '2023-06-01',
            endDate: '2024-12-31',
            totalUnitsResidential: 0,
            totalUnitsTourist: 0,
            totalUnitsCommercial: 50,
            totalUnits: 50,
            buildingCount: 3,
            deliveryDate: '2024-12-31',
        },
        {
            projectName: 'HQ',
            projectType: 'Commercial',
            location: 'City B',
            projectStatus: 'In Progress',
            startDate: '2023-06-01',
            endDate: '2024-12-31',
            totalUnitsResidential: 0,
            totalUnitsTourist: 0,
            totalUnitsCommercial: 50,
            totalUnits: 50,
            buildingCount: 3,
            deliveryDate: '2024-12-31',
        },


    ];

    const filteredData = sampleProjectData.filter((project) => {
        return (
            project.projectName.includes(filter.projectName) &&
            project.projectType.includes(filter.projectType) &&
            project.location.includes(filter.location) &&
            project.projectStatus.includes(filter.projectStatus) &&
            project.startDate.includes(filter.startDate) &&
            project.endDate.includes(filter.endDate) &&
            project.totalUnitsResidential.toString().includes(filter.totalUnitsResidential) &&
            project.totalUnitsTourist.toString().includes(filter.totalUnitsTourist) &&
            project.totalUnitsCommercial.toString().includes(filter.totalUnitsCommercial) &&
            project.totalUnits.toString().includes(filter.totalUnits) &&
            project.buildingCount.toString().includes(filter.buildingCount) &&
            project.deliveryDate.includes(filter.deliveryDate)
        );
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setFilter({ ...filter, [key]: e.target.value });
    };

    return (
        <Container size="xl">
            <h2 className="m-3">Project View</h2>
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
                            placeholder="Project Type"
                            value={filter.projectType}
                            onChange={(e) => handleChange(e, 'projectType')}
                        />
                    </div>
                    <div className="col">
                        <TextInput
                            placeholder="Location"
                            value={filter.location}
                            onChange={(e) => handleChange(e, 'location')}
                        />
                    </div>
                    <div className="col">
                        <TextInput
                            placeholder="Project Status"
                            value={filter.projectStatus}
                            onChange={(e) => handleChange(e, 'projectStatus')}
                        />
                    </div>
                    {/* <div className="col">
                        <TextInput
                            placeholder="Start Date"
                            type="date"
                            value={filter.startDate}
                            onChange={(e) => handleChange(e, 'startDate')}
                        />
                    </div> */}
                    {/* <div className="col">
                        <TextInput
                            placeholder="End Date"
                            type="date"
                            value={filter.endDate}
                            onChange={(e) => handleChange(e, 'endDate')}
                        />
                    </div> */}
                    {/* <div className="col">
                        <TextInput
                            placeholder="Delivery Date"
                            type="date"
                            value={filter.deliveryDate}
                            onChange={(e) => handleChange(e, 'deliveryDate')}
                        />
                    </div> */}
                    <div className="col text-center">
                        <Link to={'/dashboard/community/project/add-project'}>
                            <Button className="btn-primary">Add Project</Button>
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
                                    Project Type
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Location
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Project Status
                                </th>
                                {/* <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Start Date
                                </th> */}
                                {/* <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    End Date
                                </th> */}
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Total Units Residential
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Total Units Tourist
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Total Units Commercial
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Total Units
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Building Count
                                </th>
                                <th
                                    style={{ border: '1px solid #dee2e6' }}
                                    className="align-middle bg-primary text-white p-3"
                                >
                                    Delivery Date
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
                            {filteredData.map((project, index) => (
                                <tr key={index}>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.projectName}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.projectType}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.location}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.projectStatus}
                                    </td>
                                    {/* <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.startDate}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.endDate}
                                    </td> */}
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.totalUnitsResidential}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.totalUnitsTourist}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.totalUnitsCommercial}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.totalUnits}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.buildingCount}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        {project.deliveryDate}
                                    </td>
                                    <td className="text-center p-3" style={{ border: '1px solid #dee2e6' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Link to={"/dashboard/community/project/edit-project"}>
                                    
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

export default ProjectView;
