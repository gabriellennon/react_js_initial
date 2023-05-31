import { useState } from 'react';
import '../styles/index.css'
import { CardJob } from '../components/CardJob';

export default function Home(){
    const [jobsData, setJobsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetJobs = async ()  => {
        setLoading(true)

        const response = await fetch('https://www.arbeitnow.com/api/job-board-api');
        const jsonDataResponse = await response.json();
        setJobsData(jsonDataResponse.data)

        setLoading(false)
    }

    return (
        <section>
            <div className="content-title">
                <h1 className="main-container-title">Vagas Internacionais!</h1>
                <p className="main-container-subtitle">Veja as vagas abertas remotas para outros países</p>
            </div>
            <div className="content-jobs">
                <button onClick={handleGetJobs} id="buttonGetJobs" disabled={loading}>Ver vagas</button>
                <ul id="jobs">
                    {loading && <p>Carregando</p>}
                    {jobsData && jobsData.map(job => (
                        <li key={job.title}>
                            <CardJob  
                                title={job.title}
                                company_name={job.company_name}
                                remote={job.remote}
                                url={job.url}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
