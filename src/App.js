



import React, { useEffect, useState } from 'react'
import UserCard from './components/UserCard'
import { getStaredRepos } from './apis/api-helpers'
import Footer from './components/Footer'

const App = () => {
  const [totalRepos, setTotalRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  useEffect(() => {
    // Fetch repositories when the component mounts or currentPage changes
    getStaredRepos(currentPage)
      .then((res) => {
        setTotalRepos(res);
      })
      .catch((error) => console.log(error));
  }, [currentPage]); // Fetch repositories when currentPage changes

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page); // Update currentPage when the page changes
  };

  return (
    <div>
      <center>
      <h1 style={{alignContent:'center'}}>Top stared repositories</h1>
      </center>     


      {totalRepos.length > 0 ? (
        <>
          {totalRepos.map((repo, index) => (
            <UserCard
              key={index}
              name={repo.name}
              desc={repo.description}
              avatar={repo.owner.avatar_url}
              stars={repo.stargazers_count}
              issues={repo.issues_count}
              owner={repo.owner.login}
              pushed={repo.pushed_at}
            />
          ))}
          <div style={{ display: 'flex', justifyContent: 'center', margin:"8px" }}>
            <Footer onPageChange={handlePageChange} />
          </div>
        </>
      ) : (
        <p style={{margin:'auto'}}>No repositories found.</p>
      )}
    </div>
  );
};

export default App;








