import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {
  date: Dayjs | null,
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
}

const DatePickerValue: React.FunctionComponent<Props> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label='Controlled picker'
        value={props.date}
        onChange={(newDate) => props.setDate(newDate)}
        className='w-full'
      />
    </LocalizationProvider>
  );
}

export default DatePickerValue;
