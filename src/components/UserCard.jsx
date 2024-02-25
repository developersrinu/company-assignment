

// import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import { AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/joy';
// import { getCodeFrequencyStats,getCodeFrequencyStatsAddandDelet } from '../apis/api-helpers';
// import { useEffect, useState } from 'react';
// import LineChart from './LineChart';

// export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
//   const [weeks, setWeeks] = useState([]);
//   const [changes, setChanges] = useState([]);
//   const [open, setOpen] = useState(false);


//   const [newWeeksArr,setNewWeeks] = useState([])
//   const [additionsArr,setAdditions] = useState([])
//   const [deletionsArr,setDeletion]= useState([])
//   const [addtionORdeletion,setaddtionORdeletion] = useState(false)


//   const handleSingleRepo = async () => {
//     try {
//       const res = await getCodeFrequencyStats(owner, name);
//       console.log(res);
//       setWeeks(res.weeks);
//       setChanges(res.changes);
//       setOpen(!open); // Toggle the open state
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     }
//   };



//   const handleSingleRepoAddDelet = async (e) => {
//     try {
//       const res = await  getCodeFrequencyStatsAddandDelet(owner, name);
//       if(e.target.value === 'Additions'){

//         setNewWeeks(res.weeks)
//         setAdditions(res.additions)
//       }else if ( e.target.value === 'Deletions'){
//         setNewWeeks(res.weeks)
//         setDeletion(res.deletions)
//       }


//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     }
//   };

//   console.log(newWeeksArr,additionsArr,deletionsArr)





//   return (
//     <>
//       <Box
//         sx={{
//           width: '80%',
//           position: 'relative',
//           overflow: { xs: 'auto', sm: 'initial' },
//           margin: '10px auto'
//         }}
//       >
//         <Card
//           orientation="horizontal"
//           sx={{
//             width: '100%',
//             flexWrap: 'wrap',
//             overflow: 'auto',
//             resize: 'horizontal',
//           }}
//         >
//           <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
//             <img
//               src={avatar}
//               srcSet={avatar}
//               loading="lazy"
//               alt="Avatar"
//             />
//           </AspectRatio>
//           <CardContent>
//             <Typography fontSize="xl" fontWeight="lg">
//               {name}
//             </Typography>
//             <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
//               {desc}
//             </Typography>

//             <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
//               <Box>
//                 <Button variant="outlined" color="neutral" >
//                   {stars}
//                 </Button>
//                 <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>
//                   {issues || "no issues found"}
//                 </Button>
//               </Box>
//               <Typography variant="solid" color="">
//                 last pushed {new Date(pushed).toLocaleDateString()} by {owner}
//               </Typography>
//               <Typography variant="solid" color="">
//                 <AccordionGroup size="sm">
//                   <Accordion>
//                     <AccordionSummary onClick={handleSingleRepo}>more info</AccordionSummary>
//                     <AccordionDetails  sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
//                     <AccordionDetails onClick = {handleSingleRepoAddDelet} sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
//                     <AccordionDetails onClick = {handleSingleRepoAddDelet} sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
//                   </Accordion>
//                 </AccordionGroup>
//               </Typography>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>

//       {open && (
//         <>
//           {weeks.length > 0 ? (
//             <div>
//               {
//                 newWeeksArr.length > 0 ? (   <LineChart weeks={newWeeksArr} changes={additionsArr ? additionsArr :deletionsArr} /> ) :(   <LineChart weeks={weeks} changes={changes} /> )
//               }
//                <LineChart weeks={weeks} changes={changes} /> 

//             </div>

//           ) : (
//             <Typography sx={{ margin: 'auto' }}>No data available</Typography>
//           )}
//         </>
//       )}
//     </>
//   );
// }





// import React, { useState } from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import { AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/joy';
// import { getCodeFrequencyStats, getCodeFrequencyStatsAddandDelet,getChanges  } from '../apis/api-helpers';
// import LineChart from './LineChart';
// import DoubleLineChart from './DoubleLineChart';

// export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
//   const [weeks, setWeeks] = useState([]);
//   const [changes, setChanges] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [newWeeks, setNewWeeks] = useState([]);
//   const [additions, setAdditions] = useState([]);
//   const [deletions, setDeletions] = useState([]);
//   const [additionMode, setAdditionMode] = useState(false);

//   const [contributorsData,setContributorsData] = useState([])

//   const handleSingleRepo = async () => {
//     try {
//       const res = await getCodeFrequencyStats(owner, name);
//       const res2 = await getChanges(owner,name);
//       console.log(res2)
//       setContributorsData(res2)
//       setWeeks(res.weeks);
//       setChanges(res.changes);
//       setOpen(!open);
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     }
//   };

//   const handleSingleRepoAddDelet = async (e) => {
//     try {
//       const res = await getCodeFrequencyStatsAddandDelet(owner, name);
//       setNewWeeks(res.weeks);
//       if (e.target.value === 'Additions') {
//         setAdditions(res.additions);
//         setDeletions([]);
//       } else if (e.target.value === 'Deletions') {
//         setDeletions(res.deletions);
//         setAdditions([]);
//       }
//       setAdditionMode(true);
//       setOpen(!open);
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     }
//   };

//   return (
//     <Box sx={{ width: '80%', position: 'relative', overflow: { xs: 'auto', sm: 'initial' }, margin: '10px auto' }}>
//       <Card orientation="horizontal" sx={{ width: '100%', flexWrap: 'wrap', overflow: 'auto', resize: 'horizontal' }}>
//         <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
//           <img src={avatar} srcSet={avatar} loading="lazy" alt="Avatar" />
//         </AspectRatio>
//         <CardContent>
//           <Typography fontSize="xl" fontWeight="lg">{name}</Typography>
//           <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">{desc}</Typography>
//           <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
//             <Box>
//               <Button variant="outlined" color="neutral">{stars}</Button>
//               <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>{issues || "no issues found"}</Button>
//             </Box>
//             <Typography variant="solid" color="">
//               last pushed {new Date(pushed).toLocaleDateString()} by {owner}
//             </Typography>
//             <Typography variant="solid" color="">
//               <AccordionGroup size="sm">
//                 <Accordion>
//                   <AccordionSummary onClick={handleSingleRepo}>more info</AccordionSummary>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
//                   <AccordionDetails onClick={handleSingleRepoAddDelet} sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
//                   <AccordionDetails onClick={handleSingleRepoAddDelet} sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
//                 </Accordion>
//               </AccordionGroup>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>

//       {open && (
//         <Box sx={{ margin: 'auto' }}>
//           {weeks.length > 0 ? (
//             <LineChart weeks={newWeeks.length > 0 ? newWeeks : weeks} changes={additionMode ? additions.length > 0 ? additions : deletions : changes} />
//           ) : (
//             <Typography sx={{ margin: 'auto' }}>No data available</Typography>
//           )}

//         </Box>
//      )}

//      {
//       open &&  (<Box>
//       <DoubleLineChart contributorsData = {contributorsData}/>
//       <Box/>)
//      }
//     </Box>
//   );
// }








// import React, { useState } from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import { AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/joy';
// import { getCodeFrequencyStats, getCodeFrequencyStatsAddandDelet, getChanges } from '../apis/api-helpers';
// import LineChart from './LineChart';
// import DoubleLineChart from './DoubleLineChart';

// export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {


//   const [open,setOpen] = (false)
//   const [contributorsData, setContributorsData] = useState([]);
//   const [codeFrequency,setCodeFrequency] = useState()
//   const [commitActivity,setCommitActivity] = useState()

//   const handleSingleRepo = async () => {
//     try {
//       const res = await getCodeFrequencyStats(owner, name);
//       const res2 = await getChanges(owner, name);
//       console.log(res2);
//       console.log(res)
//       setContributorsData(res2);

//       setOpen(!open);
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     }
//   };

//   const handleSingleRepoAddDelet = async (e) => {
//     try {
//       const res = await getCodeFrequencyStatsAddandDelet(owner, name);
//       setNewWeeks(res.weeks);
//       if (e.target.value === 'Additions') {
//         setAdditions(res.additions);
//         setDeletions([]);
//       } else if (e.target.value === 'Deletions') {
//         setDeletions(res.deletions);
//         setAdditions([]);
//       }
//       setAdditionMode(true);
//       setOpen(!open);
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     }
//   };

//   return (
//     <Box sx={{ width: '80%', position: 'relative', overflow: { xs: 'auto', sm: 'initial' }, margin: '10px auto' }}>
//       <Card orientation="horizontal" sx={{ width: '100%', flexWrap: 'wrap', overflow: 'auto', resize: 'horizontal' }}>
//         <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
//           <img src={avatar} srcSet={avatar} loading="lazy" alt="Avatar" />
//         </AspectRatio>
//         <CardContent>
//           <Typography fontSize="xl" fontWeight="lg">{name}</Typography>
//           <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">{desc}</Typography>
//           <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
//             <Box>
//               <Button variant="outlined" color="neutral">{stars}</Button>
//               <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>{issues || "no issues found"}</Button>
//             </Box>
//             <Typography variant="solid" color="">
//               last pushed {new Date(pushed).toLocaleDateString()} by {owner}
//             </Typography>
//             <Typography variant="solid" color="">
//               <AccordionGroup size="sm">
//                 <Accordion>
//                   <AccordionSummary onClick={handleSingleRepo}>more info</AccordionSummary>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
//                   <AccordionDetails onClick={handleSingleRepoAddDelet} sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
//                   <AccordionDetails onClick={handleSingleRepoAddDelet} sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
//                 </Accordion>
//               </AccordionGroup>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
// {
//       {open && (
//         <Box sx={{ margin: 'auto' }}>
//         {weeks.length > 0 &&(
//             <LineChart weeks={newWeeks.length > 0 ? newWeeks : weeks} changes={additionMode ? additions.length > 0 ? additions : deletions : changes} />
//           ) 
//         </Box>
//       )}

//       {open && contributorsData.length > 0 && (
//         <Box>
//           <DoubleLineChart contributorsData={contributorsData} />
//         </Box>
//       )}
//     </Box>
//   );
// }





// import React, { useState } from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import { AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/joy';
// import { getCodeFrequencyStats, getChanges } from '../apis/api-helpers';
// import LineChart from './LineChart';
// import DoubleLineChart from './DoubleLineChart';

// export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
//   const [open, setOpen] = useState(false);
//   const [contributorsData, setContributorsData] = useState([]);


//   const handleSingleRepo = async () => {
//     try {
//       const res = await getCodeFrequencyStats(owner, name);
//       console.log(res)
//       const res2 = await getChanges(owner, name);
//       console.log(res2);



//       setContributorsData(res2);
//       setOpen(!open);
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     }
//   };

//   return (
//     <Box sx={{ width: '80%', position: 'relative', overflow: { xs: 'auto', sm: 'initial' }, margin: '10px auto' }}>
//       <Card orientation="horizontal" sx={{ width: '100%', flexWrap: 'wrap', overflow: 'auto', resize: 'horizontal' }}>
//         <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
//           <img src={avatar} srcSet={avatar} loading="lazy" alt="Avatar" />
//         </AspectRatio>
//         <CardContent>
//           <Typography fontSize="xl" fontWeight="lg">{name}</Typography>
//           <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">{desc}</Typography>
//           <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
//             <Box>
//               <Button variant="outlined" color="neutral">{stars}</Button>
//               <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>{issues || "no issues found"}</Button>
//             </Box>
//             <Typography variant="solid" color="">
//               last pushed {new Date(pushed).toLocaleDateString()} by {owner}
//             </Typography>
//             <Typography variant="solid" color="">
//               <AccordionGroup size="sm">
//                 <Accordion>
//                   <AccordionSummary onClick={handleSingleRepo}>more info</AccordionSummary>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
//                   <AccordionDetails  sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
//                   <AccordionDetails  sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
//                 </Accordion>
//               </AccordionGroup>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//       {open && (
//         <Box sx={{ margin: 'auto' }}>

//            <LineChart/>

//         </Box>
//       )}
//       {open && contributorsData.length > 0 && (
//         <Box>
//           <DoubleLineChart contributorsData={contributorsData} />
//         </Box>
//       )}
//     </Box>
//   );
// }



// import React, { useState } from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import { AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/joy';
// import { getCodeFrequencyStats, getChanges } from '../apis/api-helpers';
// import LineChart from './LineChart';
// import DoubleLineChart from './DoubleLineChart';

// export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
//   const [open, setOpen] = useState(false);
//   const [contributorsData, setContributorsData] = useState([]);
//   const[commitActivityData,setCommitActivityData] = useState()

//   const handleSingleRepo = async () => {
//     try {
//       const res = await getCodeFrequencyStats(owner, name);
//       const res2 = await getChanges(owner, name);
//       console.log(res);

//       setCommitActivityData(res)
//       setContributorsData(res2);
//       setOpen(!open);
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     }
//   };

//   return (
//     <Box sx={{ width: '80%', position: 'relative', overflow: { xs: 'auto', sm: 'initial' }, margin: '10px auto' }}>
//       <Card orientation="horizontal" sx={{ width: '100%', flexWrap: 'wrap', overflow: 'auto', resize: 'horizontal' }}>
//         <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
//           <img src={avatar} srcSet={avatar} loading="lazy" alt="Avatar" />
//         </AspectRatio>
//         <CardContent>
//           <Typography fontSize="xl" fontWeight="lg">{name}</Typography>
//           <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">{desc}</Typography>
//           <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
//             <Box>
//               <Button variant="outlined" color="neutral">{stars}</Button>
//               <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>{issues || "no issues found"}</Button>
//             </Box>
//             <Typography variant="solid" color="">
//               last pushed {new Date(pushed).toLocaleDateString()} by {owner}
//             </Typography>
//             <Typography variant="solid" color="">
//               <AccordionGroup size="sm">
//                 <Accordion>
//                   <AccordionSummary onClick={handleSingleRepo}>more info</AccordionSummary>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
//                 </Accordion>
//               </AccordionGroup>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>

//       {open && (

//         <Box sx={{ margin: ' 10px auto' }}>

//               <LineChart commitActivityData = {commitActivityData}/>

//         </Box>

//         )
//       }
//       {open && (
//         <Box sx={{ margin: 'auto' }}>
//           {contributorsData.length > 0 && (
//             <DoubleLineChart contributorsData={contributorsData} />
//           )}
//         </Box>
//       )}



//     </Box>
//   );
// }


// import React, { useState } from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import { AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/joy';
// import { getCodeFrequencyStats, getChanges } from '../apis/api-helpers';
// import LineChart from './LineChart';
// import DoubleLineChart from './DoubleLineChart';

// export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
//   const [open, setOpen] = useState(false);
//   const [contributorsData, setContributorsData] = useState([]);
//   const [commitActivityData, setCommitActivityData] = useState(null);

//   const handleSingleRepo = async () => {
//     try {
//       const res = await getCodeFrequencyStats(owner, name);
//       const res2 = await getChanges(owner, name);
//       console.log("res =>", res)
//       console.log('res =>', res2)
//       setCommitActivityData(res);
//       setContributorsData(res2);
//       setOpen(!open); // Set open to true to render both charts
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     }
//   };

//   return (
//     <Box sx={{ width: '80%', position: 'relative', overflow: { xs: 'auto', sm: 'initial' }, margin: '10px auto' }}>
//       <Card orientation="horizontal" sx={{ width: '100%', flexWrap: 'wrap', overflow: 'auto', resize: 'horizontal' }}>
//         <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
//           <img src={avatar} srcSet={avatar} loading="lazy" alt="Avatar" />
//         </AspectRatio>
//         <CardContent>
//           <Typography fontSize="xl" fontWeight="lg">{name}</Typography>
//           <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">{desc}</Typography>
//           <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
//             <Box>
//               <Button variant="outlined" color="neutral">{stars}</Button>
//               <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>{issues || "no issues found"}</Button>
//             </Box>
//             <Typography variant="solid" color="">
//               last pushed {new Date(pushed).toLocaleDateString()} by {owner}
//             </Typography>
//             <Typography variant="solid" color="">
//               <AccordionGroup size="sm">
//                 <Accordion>
//                   <AccordionSummary onClick={handleSingleRepo}>more info</AccordionSummary>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
//                 </Accordion>
//               </AccordionGroup>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>



//       {open && (
//         <Box sx={{ margin: 'auto' }}>
//           {contributorsData.length > 0 && (
//             <DoubleLineChart contributorsData={contributorsData} />
//           )}
//         </Box>
//       )}



//       {open && commitActivityData.weeks.length > 0 && (
//         <Box sx={{ margin: '10px auto' }}>
//           <LineChart commitActivityData={commitActivityData} />
//         </Box>
//       )}

//     </Box>
//   );
// }









// import React, { useState } from 'react';
// import { Box, Card, Typography, AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/material';
// import LineChart from './LineChart';
// import DoubleLineChart from './DoubleLineChart';
// import { getCodeFrequencyStats, getChanges } from '../apis/api-helpers';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
// import CardContent from '@mui/joy/CardContent';

// export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
//   const [open, setOpen] = useState(false);
//   const [contributorsData, setContributorsData] = useState([]);
//   const [commitActivityData, setCommitActivityData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSingleRepo = async () => {
//     setLoading(true);
//     try {
//       const res = await getCodeFrequencyStats(owner, name);
//       const res2 = await getChanges(owner, name);
//       setCommitActivityData(res);
//       setContributorsData(res2);
//       setOpen(!open); // Set open to true to render both charts
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ width: '80%', position: 'relative', overflow: { xs: 'auto', sm: 'initial' }, margin: '10px auto' }}>
//       <Card orientation="horizontal" sx={{ width: '100%', flexWrap: 'wrap', overflow: 'auto', resize: 'horizontal' }}>
//         <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
//           <img src={avatar} srcSet={avatar} loading="lazy" alt="Avatar" />
//         </AspectRatio>
//         <CardContent>
//           <Typography fontSize="xl" fontWeight="lg">{name}</Typography>
//           <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">{desc}</Typography>
//           <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
//             <Box>
//               <Button variant="outlined" color="neutral">{stars}</Button>
//               <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>{issues || "no issues found"}</Button>
//             </Box>
//             <Typography variant="solid" color="">
//               last pushed {new Date(pushed).toLocaleDateString()} by {owner}
//             </Typography>
//             <Typography variant="solid" color="">
//               <AccordionGroup size="sm">
//                 <Accordion>
//                   <AccordionSummary onClick={handleSingleRepo}>more info</AccordionSummary>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
//                   <AccordionDetails sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
//                 </Accordion>
//               </AccordionGroup>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>

//       {loading && <p>Loading...</p>}

//       {open && (
//         <Box sx={{ margin: 'auto' }}>
//           {contributorsData.length > 0 && (
//             <DoubleLineChart contributorsData={contributorsData} />
//           )}
//         </Box>
//       )}

//       {open && commitActivityData && (
//         <Box sx={{ margin: '10px auto' }}>
//           <LineChart commitActivityData={commitActivityData} />
//         </Box>
//       )}
//     </Box>
//   );
// }






// import React, { useState } from 'react';
// import { Box, Card, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// import LineChart from './LineChart';
// import DoubleLineChart from './DoubleLineChart';
// import { getCodeFrequencyStats, getChanges } from '../apis/api-helpers';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
// import CardContent from '@mui/joy/CardContent';

// export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
//   const [open, setOpen] = useState(false);
//   const [contributorsData, setContributorsData] = useState([]);
//   const [commitActivityData, setCommitActivityData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSingleRepo = async () => {
//     setLoading(true);
//     try {
//       const res = await getCodeFrequencyStats(owner, name);
//       const res2 = await getChanges(owner, name);
//       setCommitActivityData(res);
//       setContributorsData(res2);
//       setOpen(!open); // Set open to true to render both charts
//     } catch (error) {
//       console.error('Error fetching code frequency stats:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ width: '80%', position: 'relative', overflow: { xs: 'auto', sm: 'initial' }, margin: '10px auto' }}>
//       <Card sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//         <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
//           <img src={avatar} srcSet={avatar} loading="lazy" alt="Avatar" />
//         </AspectRatio>
//         <CardContent>
//           <Typography variant="h5" fontWeight="bold">{name}</Typography>
//           <Typography variant="body1" fontWeight="bold" textColor="text.secondary">{desc}</Typography>
//           <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', marginTop: '10px', gap: 1.5 }}>
//             <Box>
//               <Button variant="outlined" color="primary">{stars}</Button>
//               <Button variant="outlined" color="primary" sx={{ marginLeft: '10px' }}>{issues || "No issues found"}</Button>
//             </Box>
//             <Typography variant="body2">
//               Last pushed {new Date(pushed).toLocaleDateString()} by {owner}
//             </Typography>
//           </Box>
//           <Accordion sx={{ marginTop: '10px' }}>
//             <AccordionSummary onClick={handleSingleRepo}>More info</AccordionSummary>
//             <AccordionDetails sx={{ display: 'flex', flexDirection: 'column' }}>
//               <Typography sx={{ cursor: 'pointer' }} onClick={() => console.log('Commits clicked')}>Commits</Typography>
//               <Typography sx={{ cursor: 'pointer' }} onClick={() => console.log('Additions clicked')}>Additions</Typography>
//               <Typography sx={{ cursor: 'pointer' }} onClick={() => console.log('Deletions clicked')}>Deletions</Typography>
//             </AccordionDetails>
//           </Accordion>
//         </CardContent>
//       </Card>

//       {loading && <p>Loading...</p>}

//       {open && (
//         <Box sx={{ margin: 'auto', marginTop: '20px' }}>
//           {contributorsData.length > 0 && (
//             <DoubleLineChart contributorsData={contributorsData} />
//           )}
//         </Box>
//       )}

//       {open && commitActivityData && (
//         <Box sx={{ margin: '10px auto' }}>
//           <LineChart commitActivityData={commitActivityData} />
//         </Box>
//       )}
//     </Box>
//   );
// }




////

// import React, { useState } from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import { AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/joy';
// import { getCodeFrequencyStats, getChanges } from '../apis/api-helpers';
// import LineChart from './LineChart';
// import DoubleLineChart from './DoubleLineChart';

// export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
//   const [open, setOpen] = useState(false);
//   const [contributorsData, setContributorsData] = useState([]);
//   const [commitActivityData, setCommitActivityData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // const fetchData = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const res2 = await getChanges(owner, name);
//   //     const res = await getCodeFrequencyStats(owner, name);
//   //     setCommitActivityData(res);
//   //     setContributorsData(res2);
//   //     setOpen(true);
//   //   } catch (error) {
//   //     setError('Error fetching data');
//   //     console.error('Error fetching data:', error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };


//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const [res, res2] = await Promise.all([
//         getCodeFrequencyStats(owner, name),
//         getChanges(owner, name)
//       ]);
//       setCommitActivityData(res);
//       setContributorsData(res2);
//       setOpen(true);
//     } catch (error) {
//       setError('Error fetching data');
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const toggleAccordion = () => {
//     if (!open) {
//       fetchData();
//     } else {
//       setOpen(false);
//     }
//   };

//   return (
//     <Box sx={{ width: '80%', position: 'relative', overflow: { xs: 'auto', sm: 'initial' }, margin: '10px auto' }}>
//       <Card orientation="horizontal" sx={{ width: '100%', flexWrap: 'wrap', overflow: 'auto', resize: 'horizontal' }}>
//         <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
//           <img src={avatar} srcSet={avatar} loading="lazy" alt="Avatar" />
//         </AspectRatio>
//         <CardContent>
//           <Typography fontSize="xl" fontWeight="lg">{name}</Typography>
//           <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">{desc}</Typography>
//           <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
//             <Box>
//               <Button variant="outlined" color="neutral">{stars}</Button>
//               <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>{issues || "no issues found"}</Button>
//             </Box>
//             <Typography variant="solid" color="">
//               last pushed {new Date(pushed).toLocaleDateString()} by {owner}
//             </Typography>
//             <Typography variant="solid" color="">
//               <AccordionGroup size="sm">
//                 <Accordion>
//                   <AccordionSummary onClick={toggleAccordion}>more info</AccordionSummary>
//                   {open && (
//                     <>
//                       <AccordionDetails sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
//                       <AccordionDetails sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
//                       <AccordionDetails sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
//                     </>
//                   )}
//                 </Accordion>
//               </AccordionGroup>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
 






// <Box>
//     {contributorsData.length > 0 && commitActivityData && commitActivityData.weeks.length > 0 && open && (
//       <>
      
//         <Box sx={{ margin: '10px auto' }}>
//           <LineChart commitActivityData={commitActivityData} />
//         </Box>

//         <Box sx={{ margin: 'auto' }}>
//           <DoubleLineChart contributorsData={contributorsData} />
//         </Box>
//       </>
//     )}

//     {(!contributorsData || contributorsData.length === 0) && open && (
//       <p>No contributors data available</p>
//     )}

//     {(!commitActivityData || commitActivityData.weeks.length === 0) && open && (
//       <p>No commit activity data available</p>
//     )}
//   </Box>

//     </Box>
//   );
// }





import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/joy';
import { getCodeFrequencyStats, getChanges } from '../apis/api-helpers';
import LineChart from './LineChart';
import DoubleLineChart from './DoubleLineChart';
import { blue } from '@mui/material/colors';

export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
  const [open, setOpen] = useState(false);
  const [contributorsData, setContributorsData] = useState([]);
  const [commitActivityData, setCommitActivityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [res, res2] = await Promise.all([
        getCodeFrequencyStats(owner, name),
        getChanges(owner, name)
      ]);
      setCommitActivityData(res);
      setContributorsData(res2);
      setOpen(true);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleAccordion = () => {
    if (!open) {
      fetchData();
    }
    setOpen(!open);
  };

  return (
    <Box sx={{ width: '80%', position: 'relative', overflow: { xs: 'auto', sm: 'initial' }, margin: '10px auto' }}>
      <Card orientation="horizontal" sx={{ width: '100%',  color:'white' ,flexWrap: 'wrap', overflow: 'auto', resize: 'horizontal' }}>
        <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
          <img src={avatar} srcSet={avatar} loading="lazy" alt="Avatar" />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl"   fontWeight="lg">{name}</Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary"  color='white'>{desc}</Typography>
          <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
            <Box>
              <Button variant="outlined">stars: {stars}</Button>
              <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>issues : { issues || "no issues found"}</Button>
            </Box>
            <Typography variant="solid" color="">
              last pushed on <b>{new Date(pushed).toLocaleDateString()}</b> by <b>{owner}</b>
            </Typography>
            <Typography variant="solid" color="">
              <AccordionGroup size="sm">
                <Accordion>
                  <AccordionSummary  sx = {{color:'blue !important'}} onClick={toggleAccordion}>more info</AccordionSummary>
                  {open && (
                    <>
                      <AccordionDetails sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
                      <AccordionDetails sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
                      <AccordionDetails sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
                    </>
                  )}
                </Accordion>
              </AccordionGroup>
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {open && (
        <Box>
          {contributorsData.length > 0 && commitActivityData && commitActivityData.weeks.length > 0 && (
            <>
              <Box sx={{ margin: '10px auto' }}>
                <LineChart commitActivityData={commitActivityData} />
              </Box>

              <Box sx={{ margin: 'auto' }}>
                <DoubleLineChart contributorsData={contributorsData} />
              </Box>
            </>
          )}

          {(!contributorsData || contributorsData.length === 0) && (
            <p>No contributors data available</p>
          )}

          {(!commitActivityData || commitActivityData.weeks.length === 0) && (
            <p>No commit activity data available</p>
          )}
        </Box>
      )}

    </Box>
  );
}
