import React, { useState } from 'react';
import styles from '../styles/leads.module.css';
import { FaRegCheckCircle } from 'react-icons/fa';
import Papa from 'papaparse';

interface UploadComponentProps {
    onFileUpload: (file: File) => void;
}


const UploadComponent: React.FC<UploadComponentProps> = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [parsedData, setParsedData] = useState<any[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type === 'text/csv') {
            setSelectedFile(file);
            onFileUpload(file);
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    setParsedData(result.data);
                },
            });
        } else {
            alert('Please upload a valid CSV file.');
        }
    };

    return (
        <div className={styles["upload-card"]}>
            {!selectedFile ? (
                <>
                    <h3>Upload lead list</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Amet suscipit vulputate tristique sagittis. Facilisis id ut morbi aliquet duis sed.</p>
                    <div className={styles["upload-area"]}>
                        <input 
                            type="file" 
                            accept=".csv" 
                            onChange={handleFileChange} 
                            style={{ display: 'none' }} 
                            id="file-upload"
                        />
                        <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                            <img src="/upload.png" alt="Icon representing file upload" />
                            <p><a>Click to upload</a> or drag and drop</p>
                        </label>
                        <p>Only .csv files are accepted • Maximum 10,000 leads</p>
                    </div>
                </>
            ) : (
                <div className={styles["uploaded-file-details"]}>
                <div className={styles["file-info"]}>
                    <img src="/csv.png" alt="CSV File Icon" className={styles["file-icon"]} />
                    <div>
                        <h4>{selectedFile.name}</h4>
                        <p>{(selectedFile.size / 1024).toFixed(2)} KB | 246 leads found</p>
                    </div>
                </div>
                <div className={styles["file-actions"]}>
                    <button onClick={() => setSelectedFile(null)} className={styles["reupload-button"]}>Re-upload</button>
                    <button onClick={() => setSelectedFile(null)} className={styles["delete-button"]}>Delete</button>
                </div>
            </div>
            
            )}

            <div className={styles["field-formatting"]}>
                <div className={styles["field-formatting-details"]}>
                    <div className={styles["left"]}>
                        <h4>Fields Formatting:</h4>
                        <div>
                            <p><strong>Company name</strong></p>
                            <p><FaRegCheckCircle color="#27AE60" /> google</p>
                        </div>
                        <div className={styles["or-divider"]}>
                            -------- or --------
                        </div>
                        <div>
                            <p><strong>Company domain</strong></p>
                            <p><FaRegCheckCircle color="#27AE60" /> google.com</p>
                            <p><FaRegCheckCircle color="#27AE60" /> https://www.google.com</p>
                        </div>
                    </div>
                    <div className={styles["right"]}>
                        <div className={styles["download-sample"]}>
                            <a href="#" aria-label="Download or view sample CSV file">Download/View sample</a>
                        </div>
                        <div>
                            <p><strong>LinkedIn Profile URL</strong></p>
                            <p>Allowed: Regular LinkedIn URL</p>
                            <p><FaRegCheckCircle color="#27AE60" /> https://linkedin.com/in/marcbenioff</p>
                            <p><FaRegCheckCircle color="#27AE60" /> https://www.google.com</p>
                            <p>Not Allowed: Sales Navigator URL</p>
                            <p><FaRegCheckCircle color="#27AE60" /> https://linkedin.com/in/marcbenioff</p>
                            <p><FaRegCheckCircle color="#27AE60" /> https://www.linkedin.com/sales/people/ACoAAAAAPwEB4dd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadComponent;
