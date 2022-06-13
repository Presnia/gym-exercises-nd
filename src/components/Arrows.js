import { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Typography } from '@mui/material';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

export const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

export const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};
