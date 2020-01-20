import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Logo from '../../Assets/Img/logo.png';
import AddressActions from '../../Store/AddressActions';
import './Header.scss';

export default function Header() {
	const Address = useSelector(state => state.Address);
	const dispatch = useDispatch();

	const handleCleanAddress = () => {
		dispatch(AddressActions.setAddress({Address: {}}))
	};
	return (
		<div className="header">
			<div className="content">
				<img src={Logo} alt="ze logo" className="logo" />
				{Address && Address.geometry ? 
					<div className="address">
						<div className="content-address">
							<span className="address-title">Receber agora em:</span>
							<span className="address-info">{Address.formatted}</span>
						</div>
						<DeleteForeverIcon className="delete-address" onClick={handleCleanAddress}/>
					</div>
					:
					null
				}
			</div>
		</div>
	);
}
