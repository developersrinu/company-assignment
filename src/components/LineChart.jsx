import * as React from 'react';
import Box from '@mui/joy/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';



export default function BasicLineChart({time,xAxis}) {
 

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
                            xAxis={[{ data:xAxis }]}
                            series={[
                                {
                                    data:time,
                                },
                            ]}
                            
                            width={1000}
                            height={600}
                        />
                    </CardContent>
                </Card>
            </Box>
        );
}


