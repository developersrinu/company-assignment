import axios from "axios"

export const getStaredRepos = async (page) => {
    try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page || 0}`);
        console.log(response.data.items);
        return response.data.items;
    } catch (error) {
        console.error('There was a problem fetching starred repositories:', error);
        throw error;
    }
}



// export const getCodeFrequencyStats = async (owner, repo,isAddition) => {
//   try {
//     const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stats/${isAddition ? 'code_frequency' : 'commit_activity'}`, {
//       headers: {
//         token: process.env.TOKEN
//       }
//     });

//     if(!isAddition){
//       const weeks = response.data.map(obj => new Date(obj.week * 1000).toLocaleDateString());
//       const changes = response.data.map(obj => obj.total);
//       return {
//         weeks:weeks,
//         changes:changes
//       }
//     }
//     else{
//       console.log(response.data)
//       return response.data
//     }

 
//   } catch (error) {
//     console.error('There was a problem fetching code frequency statistics:', error);
//     throw error;
//   }
// };




// export const getCodeFrequencyStatsAddandDelet = async (owner, repo) => {
//   try {
//     const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stats/code_frequency`, {
//       headers: {
//         token: process.env.TOKEN
//       }
//     });

//     console.log(response.data);

//     const weeks = response.data.map(obj => new Date(obj[0] * 1000).toLocaleDateString());
//     const additions = response.data.map(obj => obj[1]);
//     const deletions = response.data.map(obj => obj[2]);

//     return { weeks, additions, deletions };
//   } catch (error) {
//     console.error('There was a problem fetching code frequency statistics:', error);
//     throw error;
//   }
// }




// export const getCodeFrequencyStats = async (owner, repo,e) => {
//   try {
//     const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stats/${e.target.value ? 'code_frequency' : 'commit_activity'}`, {
//       headers: { 
//         Authorization: `token ${process.env.TOKEN}`
//       }
//     });

//     if (!isAddition) {
//       const weeks = response.data.map(obj => new Date(obj.week * 1000).toLocaleDateString());
//       const changes = response.data.map(obj => obj.total);
//       return {
//         weeks: weeks,
//         changes: changes
//       };
//     } else {
//       console.log(response.data);
//       return response.data;
//     }
//   } catch (error) {
//     console.error('There was a problem fetching code frequency statistics:', error);
//     throw error;
//   }
// };



export const getCodeFrequencyStats = async (owner, repo) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stats/commit_activity`, {
      headers: { 
        token: process.env.TOKEN
      }
    });
    
    console.log(response.data)
    const weeks = response.data.map(obj => new Date(obj.week * 1000).toLocaleDateString());
    const changes = response.data.map(obj => obj.total);
    
    return {
      weeks: weeks,
      changes: changes
    };
  } catch (error) {
    console.error('There was a problem fetching code frequency statistics:', error);
    throw error;
  }
};







export const getChanges = async (owner, repo) => {
    try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stats/contributors`, {
            headers: {
                token: process.env.TOKEN
            }
        });

        // Extract relevant data from response
        const contributorsData = response.data.map(contributor => {
            const { author, total, weeks } = contributor;
            const contributorName = author.login;
            const changesPerWeek = weeks.map(week => ({ timestamp: week.w, changes: week.c }));
            return { contributor: contributorName, totalChanges: total, weeklyChanges: changesPerWeek };
        });

        console.log(contributorsData)

        return contributorsData;
    } catch (error) {
        console.error('There was a problem fetching code frequency statistics:', error);
        throw error;
    }
};













// export const getChanges = async (owner, repo) => {
//     try {
//       const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stats/contributors`, {
//         headers: {
//           token: process.env.TOKEN//
//         }
//       });
  
//       console.log(response.data);
//     //   return response.data[1]
//     // //   const time = response.data.map((subArr) => subArr[0]);
//     // //   const additions = response.data.map((subArr) => subArr[1]);
//     // //   const deletions = response.data.map((subArr) => subArr[2]);
  
//     // //   return [time, additions, deletions];
//     } catch (error) {
//       console.error('There was a problem fetching code frequency statistics:', error);
//       throw error;
//     }
// };


  
 















