import { styled } from '@mui/material';

const DashedLine = ({ margin, thickness }) => {
    const StyledDivider = styled('hr')({
        border: 0,
        borderTop: `${thickness}px dashed #e0e0e0`,
        margin: margin,
    });

    return <StyledDivider />;
};

export default DashedLine;
