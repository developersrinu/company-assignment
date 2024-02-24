import axios from "axios"


// export const getStaredRepos = async (page) => {
//     try {
//         const response = await axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&${page =page || 0}`);
//         console.log(response.data.items);
//         return response.data.items;
//     } catch (error) {
//         console.error('There was a problem fetching starred repositories:', error);
//         throw error;
//     }
// }

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





// const token = process.env.TOKEN;





export const getCodeFrequencyStats = async (owner, repo) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stats/code_frequency`, {
      headers: {
        token: process.env.TOKEN
      }
    });

    console.log(response.data);
    const time = response.data.map((subArr) => subArr[0]);
    const additions = response.data.map((subArr) => subArr[1]);
    const deletions = response.data.map((subArr) => subArr[2]);
    return [time, additions, deletions];
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
  
      console.log(response.data[1]);
      return response.data[1]
    //   const time = response.data.map((subArr) => subArr[0]);
    //   const additions = response.data.map((subArr) => subArr[1]);
    //   const deletions = response.data.map((subArr) => subArr[2]);
  
    //   return [time, additions, deletions];
    } catch (error) {
      console.error('There was a problem fetching code frequency statistics:', error);
      throw error;
    }
};


  
 















