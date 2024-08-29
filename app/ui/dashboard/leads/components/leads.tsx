"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../redux/slice';
import styles from '../styles/leads.module.css';
import ProgressBar from './progressbar';
import UploadComponent from './uploadComponent';
import Footer from './footer';
import Table from './table';
import Papa from 'papaparse';

const Leads = () => {
    const dispatch = useDispatch();
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [parsedData, setParsedData] = useState<any[]>([]);
    const [showTable, setShowTable] = useState(false);   

    const handleFileUpload = (file: File) => {
        setUploadedFile(file);

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                setParsedData(result.data); 
            },
        });
    };

    const handleContinue = () => {
        if (parsedData.length > 0) {
            setShowTable(true); 
            dispatch(setStep(2));  
        } else {
            alert('No data to display. Please upload a CSV file.');
        }
    };

    const handleReupload = () => {
        setUploadedFile(null);
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <ProgressBar />
                {!showTable ? (
                    <UploadComponent onFileUpload={handleFileUpload} />
                ) : (
                    <Table data={parsedData} />  // Render the table component with the parsed data
                )}
            </div>
            <Footer onContinue={handleContinue} />
        </div>
    );
};

export default Leads;
