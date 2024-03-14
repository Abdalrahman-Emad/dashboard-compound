import React, { useState } from 'react';
import { Container, TextInput, Button, Table } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const GradeView: React.FC = () => {
    // Sample data for demonstration
    const sampleGradeData = [
        { gradeName: 'Cyan', projectName: 'Blue blue', numberOfBuildings: 5 },
        { gradeName: 'Azure', projectName: 'Hq', numberOfBuildings: 7 },
        { gradeName: 'indigo', projectName: 'Lavida', numberOfBuildings: 6 },
    ];

    // State for filter values
    const [projectNameFilter, setProjectNameFilter] = useState('');
    const [numberOfBuildingsFilter, setNumberOfBuildingsFilter] = useState('');
    const [gradeNameFilter, setGradeNameFilter] = useState('');

    // Filter function
    const filterGradeData = (grade: {
        projectName: string;
        numberOfBuildings: { toString: () => string | string[] };
        gradeName: string;
    }) => {
        return (
            grade.projectName.toLowerCase().includes(projectNameFilter.toLowerCase()) &&
            (numberOfBuildingsFilter === '' || grade.numberOfBuildings.toString().includes(numberOfBuildingsFilter)) &&
            grade.gradeName.toLowerCase().includes(gradeNameFilter.toLowerCase())
        );
    };

    return (
        <Container size="xl">
            <h2 className="m-3">Grade View</h2>
            <PaperBox>
                <div className="row mb-3 my-4">
                    <div className="col">
                        <TextInput
                            placeholder="Filter by Project Name"
                            value={projectNameFilter}
                            onChange={(event) => setProjectNameFilter(event.currentTarget.value)}
                        />
                    </div>
                    <div className="col">
                        <TextInput
                            placeholder="Filter by Number of Buildings"
                            value={numberOfBuildingsFilter}
                            onChange={(event) => setNumberOfBuildingsFilter(event.currentTarget.value)}
                        />
                    </div>
                    <div className="col">
                        <TextInput
                            placeholder="Filter by Grade Name"
                            value={gradeNameFilter}
                            onChange={(event) => setGradeNameFilter(event.currentTarget.value)}
                        />
                    </div>
                    <div className="col text-right">
                        <Link to="/dashboard/community/grade/add-grade">
                            <Button className="btn-primary"> Add Grade</Button>
                        </Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <Table striped>
                        <thead className="thead-dark">
                            <tr>
                                <th style={{ border: '1px solid #dee2e6'}} className="align-middle bg-primary text-center text-white p-3">Grade Name</th>
                                <th style={{ border: '1px solid #dee2e6'}} className="align-middle bg-primary text-center text-white p-3">Project Name</th>
                                <th style={{ border: '1px solid #dee2e6'}} className="align-middle bg-primary text-center text-white p-3">Number of Buildings</th>
                                <th style={{ border: '1px solid #dee2e6'}} className="align-middle bg-primary text-center text-white p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sampleGradeData.filter(filterGradeData).map((grade, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid #dee2e6'}} className='text-center p-3'>{grade.gradeName}</td>
                                    <td style={{ border: '1px solid #dee2e6'}} className='text-center p-3'>{grade.projectName}</td>
                                    <td style={{ border: '1px solid #dee2e6'}} className='text-center p-3'>{grade.numberOfBuildings}</td>
                                    <td style={{ border: '1px solid #dee2e6'}} className='text-center p-3'>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Link to={'/dashboard/community/grade/edit-grade'}>
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

export default GradeView;
