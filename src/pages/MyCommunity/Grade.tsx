import React, { useState } from 'react';
import { Container, TextInput, Button, Table } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                            <Button variant="filled" color="teal">
                                Add Grade
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <Table striped>
                        <thead className="thead-dark">
                            <tr>
                                <th className="align-middle bg-primary text-white">Grade Name</th>
                                <th className="align-middle bg-primary text-white">Project Name</th>
                                <th className="align-middle bg-primary text-white">Number of Buildings</th>
                                <th className="align-middle bg-primary text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sampleGradeData.filter(filterGradeData).map((grade, index) => (
                                <tr key={index}>
                                    <td>{grade.gradeName}</td>
                                    <td>{grade.projectName}</td>
                                    <td>{grade.numberOfBuildings}</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <Link to={'/dashboard/community/grade/edit-grade'}>
                                                <Button
                                                    className="btn btn-sm btn-primary mr-1 mx-1"
                                                    variant="outline"
                                                    color="blue"
                                                    size="md"
                                                >
                                                    <FaEdit />
                                                </Button>
                                            </Link>
                                            <Button
                                                className="btn btn-sm btn-danger"
                                                variant="outline"
                                                color="red"
                                                size="md"
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

export default GradeView;
