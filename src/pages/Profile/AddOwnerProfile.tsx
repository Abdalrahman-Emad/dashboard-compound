import React from 'react';

interface AddOwnerProfileProps {
    onAddOwner: (owner: OwnerData) => void;
}

interface OwnerData {
    ownerName: string;
    id: string;
    nationality: string;
    mobile: string;
    address: string;
    email: string;
    job: string;
    placeOfWork: string;
    passportNo: string;
    workMobile: string;
    expiryDate: string;
    region: string;
    idExpiryDate: string;
    ownerStatus: string;
    ownerNotes: string;
    customerType: string;
    education: string;
    birthDate: string;
    carNumber: string;
    ownerKind: string;
    image: string;
}

const AddOwnerProfile: React.FC<AddOwnerProfileProps> = ({ onAddOwner }) => {
    const [owner, setOwner] = React.useState<OwnerData>({
        ownerName: '',
        id: '',
        nationality: '',
        mobile: '',
        address: '',
        email: '',
        job: '',
        placeOfWork: '',
        passportNo: '',
        workMobile: '',
        expiryDate: '',
        region: '',
        idExpiryDate: '',
        ownerStatus: '',
        ownerNotes: '',
        customerType: '',
        education: '',
        birthDate: '',
        carNumber: '',
        ownerKind: '',
        image: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setOwner((prevOwner) => ({
            ...prevOwner,
            [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;
        if (files && files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e?.target?.result;
                if (result) {
                    setOwner((prevOwner) => ({
                        ...prevOwner,
                        image: result as string,
                    }));
                }
            };
            reader.readAsDataURL(files[0]);
        }
    };
    
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddOwner(owner);
        // Clear form after submission if needed
        setOwner({
            ownerName: '',
            id: '',
            nationality: '',
            mobile: '',
            address: '',
            email: '',
            job: '',
            placeOfWork: '',
            passportNo: '',
            workMobile: '',
            expiryDate: '',
            region: '',
            idExpiryDate: '',
            ownerStatus: '',
            ownerNotes: '',
            customerType: '',
            education: '',
            birthDate: '',
            carNumber: '',
            ownerKind: '',
            image: '',
        });
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">Add Owner Profile</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* Add input fields for owner details */}
                                <input type="file" onChange={handleImageChange} accept=".jpg, .jpeg, .png" />
                                {/* Add a preview for the uploaded image if needed */}
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOwnerProfile;
