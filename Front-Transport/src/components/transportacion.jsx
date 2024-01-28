import{ useState, useEffect } from "react";
import '../styles/Transportacion.css'

const Transportacion = () => {
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('URL_DE_TU_API')
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setApiData(data);
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <section>
            <div>
                <span className="data-red2"><i className="ri-money-dollar-box-line"></i></span>
            </div>
            <div id="data-deploy" >
                {error ? (
                    <div className="error-message">
                        <h1>Error</h1>
                        <p>{error}</p>
                    </div>
                ) : (
                    <>
                        <div className="data-result">
                            <h1>Data Results</h1>
                            {apiData && <pre>{JSON.stringify(apiData["Data"], null, 2)}</pre>}
                        </div>
                        <div className="plot-data">
                            <h1>Procesed Image</h1>
                            {apiData && <img src={apiData["Procesed Image"]} alt="Plot" />}
                        </div>
                        <div className="status-data">
                            <h1>State</h1>
                            {apiData && <p>{apiData["State"]}</p>}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Transportacion;