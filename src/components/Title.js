import { Typography } from '@mui/material';

const Title = (props) => {
    return (
        <Typography variant='h3' align='center' sx={{ mb: 6 }}>
            {props.title}
        </Typography>
    );
};

export default Title;
