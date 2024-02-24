import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import BasicLineChart from './LineChart';
import DoubleLineChart from './DoubleLineChart';
import { AccordionGroup, AccordionSummary, AccordionDetails, Accordion } from '@mui/joy';
import { getCodeFrequencyStats } from '../apis/api-helpers';
import { useEffect, useState } from 'react';
import { getChanges } from '../apis/api-helpers';


export default function UserCard({ name, desc, avatar, stars, issues, owner, pushed }) {
  const [time, setTime] = useState([]);
  const [deletions, setDeletions] = useState([]);
  const [additions, setAdditions] = useState([]);
  const [singleLineX, setSingleLineX] = useState(false);
  const [open, setOpen] = useState(false);

  const [weaks,setWeeks] = useState([])
  const [weaksAddtion,setWeekAdditions] = useState([])
  const [weaksDeletion,setWeekDeletions] = useState([])
  const [weaksCommits,setWeekCommits] = useState([])


  // useEffect(() => {
  //   if (open) {
  //     Promise.all([getCodeFrequencyStats(owner, name), getChanges(owner, name)])
  //       .then((responses) => {
  //         const [codeFrequencyRes, changesRes] = responses;
  //         console.log(codeFrequencyRes, changesRes);
  
  //         // Process code frequency response
  //         const times = [];
  //         const addts = [];
  //         const dels = [];
  //         codeFrequencyRes.forEach((entry) => {
  //           times.push(new Date(entry[0]).getTime() / 1000).toFixed(2).toString().slice(0, 5);
  //           addts.push(entry[1].toFixed(2));
  //           dels.push(entry[2].toFixed(2));
  //         });
  //         setTime(times);
  //         setAdditions(addts);
  //         setDeletions(dels);
  
  //         // Process changes response
  //         const weeks = [];
  //         const additions = [];
  //         const deletions = [];
  //         const commits = [];
  //         changesRes.weeks.forEach((week) => {
  //           weeks.push(new Date(week.w * 1000));
  //           additions.push(week.a);
  //           deletions.push(week.d);
  //           commits.push(week.c);
  //         });
  
  //         // Store the arrays in state variables
  //         setWeeks(weeks);
  //         setWeekAdditions(additions);
  //         setWeekDeletions(deletions);
  //         setWeekCommits(commits);
  //       })
  //       .catch((error) => console.error('Error fetching data:', error));
  //   }
  // }, [open, owner, name]);

  // console.log(weaks)

//   const [weaks, setWeeks] = useState([]);
// const [weaksAddition, setWeekAdditions] = useState([]);
// const [weaksDeletion, setWeekDeletions] = useState([]);
// const [weaksCommits, setWeekCommits] = useState([]);

useEffect(() => {
  if (open) {
    Promise.all([getCodeFrequencyStats(owner, name), getChanges(owner, name)])
      .then((responses) => {
        const [codeFrequencyRes, changesRes] = responses;
        console.log(changesRes)

        // Process code frequency response
        const times = [];
        const addts = [];
        const dels = [];
        codeFrequencyRes.forEach((entry) => {
          times.push(new Date(entry[0]).getTime() / 1000).toFixed(2).toString().slice(0, 5);
          addts.push(entry[1].toFixed(2));
          dels.push(entry[2].toFixed(2));
        });
        setTime(times);
        setAdditions(addts);
        setDeletions(dels);

        // Process changes response
        const weeks = [];
        const additions = [];
        const deletions = [];
        const commits = [];
        changesRes.weeks.forEach((week) => {
          weeks.push(new Date(week.w * 1000));
          additions.push(week.a);
          deletions.push(week.d);
          commits.push(week.c);
        });

        // Store the arrays in state variables
        setWeeks(weeks);
        setWeekAdditions(additions);
        setWeekDeletions(deletions);
        setWeekCommits(commits);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }
}, [open, owner, name]);

console.log(weaks);




  return (
    <>
      <Box
        sx={{
          width: '80%',
          position: 'relative',
          overflow: { xs: 'auto', sm: 'initial' },
          margin: '10px auto'
        }}
      >
        <Card
          orientation="horizontal"
          sx={{
            width: '100%',
            flexWrap: 'wrap',
            overflow: 'auto',
            resize: 'horizontal',
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={100} sx={{ minWidth: 100 }}>
            <img
              src={avatar}
              srcSet={avatar}
              loading="lazy"
              alt="Avatar"
            />
          </AspectRatio>
          <CardContent>
            <Typography fontSize="xl" fontWeight="lg">
              {name}
            </Typography>
            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
              {desc}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: "space-between", marginTop: '10px', gap: 1.5, '& > button': { flex: 1 } }}>
              <Box>
                <Button variant="outlined" color="neutral" >
                  {stars}
                </Button>
                <Button variant="outlined" color="neutral" sx={{ marginLeft: '10px' }}>
                  {issues || "no issues found"}
                </Button>
              </Box>
              <Typography variant="solid" color="">
                last pushed {new Date(pushed).toLocaleDateString()} by {owner}
              </Typography>
              <Typography variant="solid" color="">
                <AccordionGroup size="sm">
                  <Accordion>
                    <AccordionSummary onClick={() => setOpen(!open)}>more info</AccordionSummary>
                    <AccordionDetails sx={{ cursor: 'pointer' }}>Commits</AccordionDetails>
                    <AccordionDetails onClick={() => setSingleLineX(false)} sx={{ cursor: 'pointer' }}>Additions</AccordionDetails>
                    <AccordionDetails onClick={() => setSingleLineX(true)} sx={{ cursor: 'pointer' }}>Deletions</AccordionDetails>
                  </Accordion>
                </AccordionGroup>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box >

      {open && (
        <>
          {time.length > 0 ? ( // Check if data is available
            <>
              <BasicLineChart time={time} xAxis={singleLineX ? deletions : additions} />
              <DoubleLineChart  weaks= {weaks} weaksAddtion ={weaksAddtion} weaksDeletion = {weaksDeletion} weaksCommits = {weaksCommits}/>
         
            </>
          ) : (
            <Typography sx={{margin:'auto'}}>No data available</Typography>
          )}
        </>
      )}
    </>
  );
}

