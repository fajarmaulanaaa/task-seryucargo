'use client'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import colors from '@/utils/colors';
import { IoSearchSharp } from "react-icons/io5";
import searchStore from '@/context/search-movie/searchStore';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import RegulerTeks from '../atoms/RegulerTeks';
import Image from 'next/image';

export default function SearchMovie() {
    const router = useRouter()
    const { dataResult, loadingSearch, handleSearchMovie } = searchStore()
    const [value, setValue] = React.useState('');
    React.useEffect(() => {
        const debounce = setTimeout(() => {
            handleSearchMovie(value);
        }, 1000);

        return () => {
            clearTimeout(debounce);
        };
    }, [value, handleSearchMovie]);

    return (
        <Autocomplete
            forcePopupIcon={false}
            disableClearable={true}
            ListboxProps={{ style: { maxHeight: "25rem" } }}
            sx={{
                width: 300,
                "&.Mui-focused": {
                    "& .MuiInputLabel-root": {
                        color: colors.white,
                        borderColor: colors.white,
                    },
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    color: colors.white,
                    borderColor: colors.white,
                },
            }}

            isOptionEqualToValue={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option.title}
            options={dataResult ? dataResult.results : []}
            loading={loadingSearch}

            renderInput={(params) => (
                <TextField
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearchMovie(value ? value : '');
                        }
                    }}
                    value={value}
                    variant="standard"
                    {...params}
                    size='small'
                    placeholder="Search Movie"
                    sx={{
                        border: '1px solid',
                        borderRadius: '30px',
                        p: '12px',
                        borderColor: colors.white,
                        'input': {
                            color: colors.white,
                            '&::placeholder': {
                                color: colors.white, fontSize: '14px', ml: '3px'
                            }
                        }
                    }}
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            disableUnderline: true,
                            startAdornment: (
                                <IoSearchSharp size={'24px'} color={colors.white} />
                            ),
                            endAdornment: (
                                <React.Fragment>
                                    {loadingSearch ? <CircularProgress color="inherit" size={18} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        },
                    }}
                />
            )}
            renderOption={(props, option, index) => {
                return (
                    <li {...props}>
                        <Box
                            onClick={() => {
                                router.push(`/movie/${option.id}`)
                            }}
                            sx={{
                                display: 'flex', flexDirection: 'row', columnGap: '10px', alignItems: 'center',
                            }}
                        >
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BASEIMGURL}${option.poster_path}`}
                                alt={option.title}
                                width={40}
                                height={60}
                                style={{ borderRadius: '8px' }}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <RegulerTeks text={`${option.title}(${option.release_date.slice(0, 4)})`} fontWeight='600' size='14px' />
                                <RegulerTeks text={option.overview} fontWeight='400' size='12px' maxLine={2} />
                            </Box>
                        </Box>
                    </li>
                )
            }}
        />
    );
}
