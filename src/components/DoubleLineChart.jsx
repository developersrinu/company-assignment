
// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import { LineChart } from '@mui/x-charts/LineChart';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';

// const DoubleLineChart = ({ weaks, weaksAddtion, weaksDeletion, weaksCommits }) => {
//     console.log("weaks=>", weaks,)
//     console.log("weaksAddtion =>", weaksAddtion)
//     console.log("weaksDeletion =>", weaksDeletion)
//     console.log('weaksCommits =>', weaksCommits)

//     // Function to convert weeks to months
//     const convertWeeksToMonths = (weeks) => {
//         const months = weeks.map(date => {
//             // Get the month index (0-based)
//             const monthIndex = date.getMonth();
//             // Convert month index to month name (adjust index as needed)
//             const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthIndex];
//             return monthName;
//         });
//         // Return array containing month names
//         return months;
//     };

//     // Convert data to logarithmic scale for better visualization
//     const convertToLogScale = (data) => {
//         return data.map(value => Math.log(value + 1)); // Adding 1 to avoid logarithm of 0
//     };

//     return (
//         <Box
//             sx={{
//                 width: '80%',
//                 position: 'relative',
//                 overflow: { xs: 'auto', sm: 'initial' },
//                 margin: '10px auto'
//             }}
//         >
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     display: 'block',
//                     width: '1px',
//                     left: '500px',
//                     top: '-24px',
//                     bottom: '-24px',
//                     '&::before': {
//                         top: '4px',
//                         // content: '""',
//                         display: 'block',
//                         position: 'absolute',
//                         right: '0.5rem',
//                         color: '',
//                         fontSize: 'sm',
//                         fontWeight: 'lg',
//                     },
//                     '&::after': {
//                         top: '4px',
//                         // content: '""',
//                         display: 'block',
//                         position: 'absolute',
//                         left: '0.5rem',
//                         color: '',
//                         fontSize: 'sm',
//                         fontWeight: 'lg',
//                     },
//                 }}
//             />
//             <Card
//                 orientation="horizontal"
//                 sx={{
//                     width: '100%',
//                     flexWrap: 'wrap',
//                     [`& > *`]: {
//                         '--stack-point': '500px',
//                         minWidth:
//                             'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
//                     },
//                     // make the card resizable for demo
//                     overflow: 'auto',
//                     resize: 'horizontal',
//                 }}
//             >
//                 <CardContent>
//                     <LineChart
//                         series={[
//                             { curve: "monotoneX", data: convertWeeksToMonths(weaks) },
//                             { curve: "monotoneX", data: convertToLogScale(weaksCommits) },
//                             { curve: "monotoneX", data: convertToLogScale(weaksAddtion) },
//                             { curve: "monotoneX", data: convertToLogScale(weaksDeletion) },
//                         ]}
//                         width={1000}
//                         height={1000}
//                     />
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };

// export default DoubleLineChart;



// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import { LineChart } from '@mui/x-charts/LineChart';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';

// const DoubleLineChart = ({ weaks, weaksAddtion, weaksDeletion, weaksCommits }) => {
//     console.log("weaks=>", weaks,)
//     console.log("weaksAddtion =>", weaksAddtion)
//     console.log("weaksDeletion =>", weaksDeletion)
//     console.log('weaksCommits =>', weaksCommits)

//     // Function to convert weeks to months
//     const convertWeeksToMonths = (weeks) => {
//         const months = weeks.map(date => {
//             // Get the month index (0-based)
//             const monthIndex = date.getMonth();
//             // Convert month index to month name (adjust index as needed)
//             const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthIndex];
//             return monthName;
//         });
//         // Return array containing month names
//         return months;
//     };

//     // Convert data to logarithmic scale for better visualization
//     const convertToLogScale = (data) => {
//         return data.map(value => Math.log(value + 1)); // Adding 1 to avoid logarithm of 0
//     };

//     // Generate month names for y-axis
//     const monthNames = Array.from({ length: 12 }, (_, i) => {
//         return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][i];
//     });

//     return (
//         <Box
//             sx={{
//                 width: '80%',
//                 position: 'relative',
//                 overflow: { xs: 'auto', sm: 'initial' },
//                 margin: '10px auto'
//             }}
//         >
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     display: 'block',
//                     width: '1px',
//                     left: '500px',
//                     top: '-24px',
//                     bottom: '-24px',
//                     '&::before': {
//                         top: '4px',
//                         // content: '""',
//                         display: 'block',
//                         position: 'absolute',
//                         right: '0.5rem',
//                         color: '',
//                         fontSize: 'sm',
//                         fontWeight: 'lg',
//                     },
//                     '&::after': {
//                         top: '4px',
//                         // content: '""',
//                         display: 'block',
//                         position: 'absolute',
//                         left: '0.5rem',
//                         color: '',
//                         fontSize: 'sm',
//                         fontWeight: 'lg',
//                     },
//                 }}
//             />
//             <Card
//                 orientation="horizontal"
//                 sx={{
//                     width: '100%',
//                     flexWrap: 'wrap',
//                     [`& > *`]: {
//                         '--stack-point': '500px',
//                         minWidth:
//                             'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
//                     },
//                     // make the card resizable for demo
//                     overflow: 'auto',
//                     resize: 'horizontal',
//                 }}
//             >
//                 <CardContent>
//                     <LineChart
//                         series={[
//                             { curve: "monotoneX", data: convertWeeksToMonths(weaks) },
//                             { curve: "monotoneX", data: convertToLogScale(weaksCommits) },
//                             { curve: "monotoneX", data: convertToLogScale(weaksAddtion) },
//                             { curve: "monotoneX", data: convertToLogScale(weaksDeletion) },
//                         ]}
//                         width={1000}
//                         height={1000}
//                         yAxis={monthNames} // Set y-axis to month names
//                     />


//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };

// export default DoubleLineChart;







import * as React from 'react';
import Box from '@mui/joy/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

const DoubleLineChart = ({ weaks, weaksAddtion, weaksDeletion, weaksCommits }) => {
    console.log("weaks=>", weaks,)
    console.log("weaksAddtion =>", weaksAddtion)
    console.log("weaksDeletion =>", weaksDeletion)
    console.log('weaksCommits =>', weaksCommits)

    // Function to convert weeks to months
    const convertWeeksToMonths = (weeks) => {
        const months = weeks.map(date => {
            // Get the month index (0-based)
            const monthIndex = date.getMonth();
            // Convert month index to month name (adjust index as needed)
            const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthIndex];
            return monthName;
        });
        // Return array containing month names
        return months;
    };

    // Convert data to logarithmic scale for better visualization
    const convertToLogScale = (data) => {
        return data.map(value => Math.log(value + 1)); // Adding 1 to avoid logarithm of 0
    };

    // Generate month names for y-axis
    const monthNames = Array.from({ length: 12 }, (_, i) => {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][i];
    });

    return (
        <Box
            sx={{
                width: '80%',
                position: 'relative',
                overflow: { xs: 'auto', sm: 'initial' },
                margin: '10px auto'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    display: 'block',
                    width: '1px',
                    left: '500px',
                    top: '-24px',
                    bottom: '-24px',
                    '&::before': {
                        top: '4px',
                        // content: '""',
                        display: 'block',
                        position: 'absolute',
                        right: '0.5rem',
                        color: '',
                        fontSize: 'sm',
                        fontWeight: 'lg',
                    },
                    '&::after': {
                        top: '4px',
                        // content: '""',
                        display: 'block',
                        position: 'absolute',
                        left: '0.5rem',
                        color: '',
                        fontSize: 'sm',
                        fontWeight: 'lg',
                    },
                }}
            />
            <Card
                orientation="horizontal"
                sx={{
                    width: '100%',
                    flexWrap: 'wrap',
                    [`& > *`]: {
                        '--stack-point': '500px',
                        minWidth:
                            'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                    },
                    // make the card resizable for demo
                    overflow: 'auto',
                    resize: 'horizontal',
                }}
            >
                <CardContent>
                    <LineChart
                        series={[
                            { curve: "monotoneX", data:weaks },
                            { curve: "monotoneX", data: convertToLogScale(weaksCommits) },
                            { curve: "monotoneX", data: convertToLogScale(weaksAddtion) },
                            { curve: "monotoneX", data: convertToLogScale(weaksDeletion) },
                        ]}
                        width={1000}
                        height={600}
                        // yAxis={monthNames} // Set y-axis to month names
                    />
                </CardContent>
            </Card>
        </Box>
    );
};

export default DoubleLineChart;








