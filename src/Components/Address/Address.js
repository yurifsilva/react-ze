import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';

import OpenCageApi from '../../Services/OpenCageApi';
import AddressActions from '../../Store/AddressActions';
import './Address.scss';

export default function Address() {
	const [Search, setSearch] = useState('');
	const [AddressList, setAddressList] = useState([]);
	const [Rate, setRate] = useState(0);

	const [IsLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const handleChangeSearch = () => event => {
		setSearch(event.target.value);
	};
	const handleSetAddress = (AddressLocal) => {
		dispatch(AddressActions.setAddress({Address: AddressLocal}))
	};

	const getAddressParams = async () => {
		try {
			setIsLoading(true);
			const { results, rate } = await OpenCageApi.getAddressParams(Search);
			setAddressList(results);
			setRate(rate.remaining);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="search-address">
			<div className="search">
				
				<TextField
					id="outlined-basic"
					placeholder="Insira o endereço e número"
					variant="outlined"
					value={Search}
					onChange={handleChangeSearch()}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<RoomIcon />
							</InputAdornment>
						),
					}}
					onKeyPress={event => {
						if (event.key === 'Enter') {
							getAddressParams();
						}
					}}
				/>
				<Button
					onClick={getAddressParams}
					variant="contained"
					color="primary"
					disabled={IsLoading}
				>
					<SearchIcon /> {Rate ? <>({Rate})</> : null}
				</Button>
			</div>
			{AddressList.map((Address) => {
				return <div className="address-info" onClick={() => handleSetAddress(Address)} key={Address.annotations.geohash}>
							<RoomIcon className="address-info-icon" />
							<span className="address-description">{Address.formatted}</span>
						</div>
				})
			}
		</div>
	);
}
