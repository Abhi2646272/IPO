import React,{useState,useEffect} from 'react'

function Dashboard() {

    const [forexData, setForexData] = useState([]);
    const [ipoData, setIpoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response1 = await fetch('https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_e983c2b2c1414ea6b216d534661c792d');
            const response2 = await fetch('https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_e983c2b2c1414ea6b216d534661c792d')
            if (!response1.ok) {
              throw new Error('Failed to fetch forex data');
            }
    
            const data1 = await response1.json();
            const data2 = await response2.json();
            setForexData(data1);
            setIpoData(data2);
          } catch (error) {
            console.error('Error fetching forex data:', error.message);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div className=' '>
        <ul class="nav nav-tabs dash " id="myTab" role="tablist">
  <li class="nav-item  " role="presentation">
    <button class="btn nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Currency Rates</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="btn nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Upcoming IPO'S</button>
  </li>
  
</ul>
<div class="tab-content" id="myTabContent">
  
<div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">


<table className="table table table-striped">
      <thead>
        <tr>
          <th  >Symbol</th>
          <th >Rate</th>
          <th >Timestamp</th>
          <th >Derived</th>
        </tr>
      </thead>
      <tbody>
        {forexData.map((forex, index) => (
          <tr key={index}>
            <td>{forex.symbol}</td>
            <td>{forex.rate}</td>
            <td>{new Date(forex.timestamp).toLocaleString()}</td>
            <td>{forex.isDerived ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
</div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"> 
  <table className="table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Company Name</th>
          <th>Status</th>
          <th>Offering Date</th>
          <th>Price Range (Low)</th>
          <th>Price Range (High)</th>
          <th>Shares</th>
          
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        {ipoData.map((ipo, index) => (
          <tr key={index}>
            <td>{ipo.symbol}</td>
            <td>{ipo.companyName}</td>
            <td>{ipo.status}</td>
            <td>{ipo.offeringDate}</td>
            <td>{ipo.priceRangeLow}</td>
            <td>{ipo.priceRangeHigh}</td>
            <td>{ipo.shares}</td>
            
            <td>{ipo.volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default Dashboard