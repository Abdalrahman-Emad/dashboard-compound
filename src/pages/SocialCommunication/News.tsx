import React, { useState } from 'react';
import PaperBox from '../../components/PaperBox';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface NewsItem {
    id: string;
    type: string;
    description: string;
    status: string;
    projectName: string;
    fromDate: string;
    toDate: string;
}

const News: React.FC = () => {
    const [newsData, setNewsData] = useState<NewsItem[]>([
        {
            id: '1',
            type: 'Global',
            description: 'Maintenance',
            status: 'Active',
            projectName: 'Blue Blue',
            fromDate: '2024-02-01',
            toDate: '2024-02-10',
        },
        {
            id: '2',
            type: 'List',
            description: 'Interreption',
            status: 'Inactive',
            projectName: 'Lavida',
            fromDate: '2024-02-05',
            toDate: '2024-02-15',
        },
        {
            id: '3',
            type: 'Global',
            description: 'Agricultural',
            status: 'active',
            projectName: 'HQ',
            fromDate: '2024-02-05',
            toDate: '2024-02-15',
        },
        // Add more sample data as needed
    ]);

    const [searchId, setSearchId] = useState<string>('');
    const [searchProjectName, setSearchProjectName] = useState<string>('');
    const [searchTitle, setSearchTitle] = useState<string>('');
    const [searchStatus, setSearchStatus] = useState<string>('');
    const [searchType, setSearchType] = useState<string>('');

    const handleDelete = (index: number) => {
        const updatedNewsData = [...newsData];
        updatedNewsData.splice(index, 1);
        setNewsData(updatedNewsData);
    };

    const clearSearchCriteria = () => {
        setSearchId('');
        setSearchProjectName('');
        setSearchTitle('');
        setSearchStatus('');
        setSearchType('');
    };

    const filteredNews = newsData.filter((item) => {
        const idMatch = item.id.toLowerCase().includes(searchId.toLowerCase());
        const projectNameMatch = item.projectName.toLowerCase().includes(searchProjectName.toLowerCase());
        const titleMatch = item.description.toLowerCase().includes(searchTitle.toLowerCase());
        const statusMatch = item.status.toLowerCase().includes(searchStatus.toLowerCase());
        const typeMatch = item.type.toLowerCase().includes(searchType.toLowerCase());

        return idMatch && projectNameMatch && titleMatch && statusMatch && typeMatch;
    });

    return (
        <div>
            <PaperBox>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="m-0">News</h2>
                    <Link to="/dashboard/social-communication/news/addnews">
                        <button className="btn btn-success">Add News</button>
                    </Link>
                </div>

                <div className="row align-items-center mb-3">
                    <div className="col-md-2">
                        <input
                            placeholder="ID"
                            type="text"
                            className="form-control"
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            placeholder="Project Name"
                            type="text"
                            className="form-control"
                            value={searchProjectName}
                            onChange={(e) => setSearchProjectName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            placeholder="Status"
                            type="text"
                            className="form-control"
                            value={searchStatus}
                            onChange={(e) => setSearchStatus(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            placeholder="Type"
                            type="text"
                            className="form-control"
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value)}
                        />
                    </div>

                    <div className="col-md-2">
                        <input
                            placeholder="Title"
                            type="text"
                            className="form-control"
                            value={searchTitle}
                            onChange={(e) => setSearchTitle(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-secondary  w-50" onClick={clearSearchCriteria}>
                            Clear
                        </button>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="bg-primary text-white">ID</th>
                                <th className="bg-primary text-white">Title</th>
                                <th className="bg-primary text-white">Type</th>
                                <th className="bg-primary text-white">Status</th>
                                <th className="bg-primary text-white">Project Name</th>
                                <th className="bg-primary text-white">From date</th>
                                <th className="bg-primary text-white">To date</th>
                                <th className="bg-primary text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredNews.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.description}</td>
                                    <td>{item.type}</td>
                                    <td>{item.status}</td>
                                    <td>{item.projectName}</td>
                                    <td>{item.fromDate}</td>
                                    <td>{item.toDate}</td>
                                    <td>
                                        <Link to="/dashboard/social-communication/news/addnews">
                                            <button className="btn btn-sm btn-primary">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                        <button
                                            className="btn btn-sm btn-danger ms-1"
                                            onClick={() => handleDelete(index)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </PaperBox>
        </div>
    );
};

export default News;
