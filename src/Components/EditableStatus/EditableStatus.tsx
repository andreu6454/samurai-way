import {Edit} from '@mui/icons-material';
import {ChangeEvent, useState} from 'react';
import style from './EditableStatus.module.css'
import {Box, Popover, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


type EditableSpanType = {
    Status: string;
    callBack: (newStatus: string) => void;
};
export const EditableStatus = (props: EditableSpanType) => {
    const {Status, callBack} = props;
    const [value, setValue] = useState(Status)
    const [newValue, setNewValue] = useState(Status);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.currentTarget.value);
    };
    const changeValue = () => {
        if (newValue !== value) {
            setValue(newValue)
            callBack(newValue);
        }
    };

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        changeValue();
    };

    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={style.EditableSpan}>
            <Typography fontSize={"20px"} onDoubleClick={handleClick} ml={2}>
                {value !== "" && value}
            </Typography>
            {value !== "" && <Edit
                aria-describedby={id}
                sx={{ml: 1}}
                fontSize={'small'}
                onClick={handleClick}
            />}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box sx={{p: 2}}>
                    <Typography>Type your new status.</Typography>
                    <Box display={"flex"} alignItems={'center'}>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="filled"
                            size="small"
                            value={newValue}
                            onChange={onChangeHandler}
                        />
                        <AddIcon onClick={handleClose}/>
                    </Box>
                </Box>
            </Popover>
        </div>
    )
};