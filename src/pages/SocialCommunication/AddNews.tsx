import React, { useState } from 'react';
import PaperBox from '../../components/PaperBox';
import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons for edit and delete actions
import { Link } from 'react-router-dom';

interface NewsItem {
    id: string;
    type: string;
    description: string;
    fromDate: string;
    toDate: string;
    projectName: string;
    news: string;
}

export const AddNews: React.FC = () => {
    const [id, setId] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');
    const [projectName, setProjectName] = useState<string>('');
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    const [editingIndex, setEditingIndex] = useState<number>(-1); // Initialize with -1 to indicate no item is being edited
    const [news, setNews] = useState<string>(''); // State variable for the "Add News" text area

    const handleSave = () => {
        const newNews: NewsItem = {
            id,
            type,
            description,
            fromDate,
            toDate,
            projectName,
            news,
        };
        if (editingIndex !== -1) {
            const updatedNewsData = [...newsData];
            updatedNewsData[editingIndex] = newNews; // Update the news item if editing
            setNewsData(updatedNewsData);
            setEditingIndex(-1); // Reset editing index
        } else {
            setNewsData([...newsData, newNews]);
        }
        clearForm();
    };

    const clearForm = () => {
        setId('');
        setType('');
        setDescription('');
        setFromDate('');
        setToDate('');
        setProjectName('');
        setNews('');
    };

    const handleUpdate = (index: number) => {
        const newsItem = newsData[index];
        setId(newsItem.id);
        setType(newsItem.type);
        setDescription(newsItem.description);
        setFromDate(newsItem.fromDate);
        setToDate(newsItem.toDate);
        setProjectName(newsItem.projectName);
        setNews(newsItem.news);
        setEditingIndex(index); // Set the index of the item being edited
    };

    const handleDelete = (index: number) => {
        const updatedNewsData = [...newsData];
        updatedNewsData.splice(index, 1);
        setNewsData(updatedNewsData);
    };

    function setImage(arg0: File | null): void {
        throw new Error('Function not implemented.');
    }

    return (
        <PaperBox>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text">ID</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text">Title</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Title"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Project Name:</label>
                    <select
                        className="form-select"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    >
                        <option value="">Select Project</option>
                        <option value="Project 1">Lavida</option>
                        <option value="Project 2">HQ</option>
                        <option value="Project 3">Blue Blue</option>
                    </select>
                </div>
                <div className="col-md-12 mb-3">
                    <label className="form-label">Descriptions:</label>
                    <textarea
                        className="form-control"
                        value={news}
                        onChange={(e) => setNews(e.target.value)}
                        rows={6}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Status:</label>
                    <select className="form-select" onChange={(e) => setType(e.target.value)}>
                        <option value="Status">Select Status</option>
                        <option value="Status 1 ">Active</option>
                        <option value="Status 2">Deactivate</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Type:</label>
                    <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">Select Type</option>
                        <option value="Type 1">General</option>
                        <option value="Type 2">Water</option>
                        <option value="Type 3">Maintenance</option>
                        <option value="Type 4">Agricultural</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">From Date:</label>
                    <DatePicker className="form-control" rightSection={<IconCalendar />} />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">To Date:</label>
                    <DatePicker className="form-control" rightSection={<IconCalendar />} />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Upload Image:</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                    />
                </div>
            </div>

            <div className=" mb-3 d-flex justify-content-end align-items-center">
                <Link to="/dashboard/social-communication/news" className="btn btn-secondary me-2">
                    Back
                </Link>
                <Link to="/dashboard/social-communication/news" className="btn btn-primary" onClick={handleSave}>
                    Save
                </Link>
            </div>
        </PaperBox>
    );
};
