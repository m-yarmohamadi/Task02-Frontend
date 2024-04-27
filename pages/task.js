import axios from 'axios';
import React, { useEffect, useState } from 'react';

const task = () => {
	const [sortPrice, setSortPrice] = useState('');
	const [sortDate, setSortDate] = useState('');
	const [value, setValue] = useState('');
	const [fetchedData, setFetchedData] = useState();

	useEffect(() => {
		const getData = async () => {
			const data = await axios.get(`http://localhost:5000/transactions?refId_like=${value}`);
			setFetchedData(data.data);
		};
		getData();
	}, [value]);

	const filter = (e) => {
		setValue(e.target.value);
	};
	const sortPriceFng = async () => {
		{
			sortPrice == 'desc' ? setSortPrice('asc') : setSortPrice('desc');
		}

		const data = await axios.get(
			`http://localhost:5000/transactions?_sort=price&_order=${sortPrice}`
		);
		setFetchedData(data.data);
	};
	const sortDateFng = async () => {
		{
			sortDate == 'desc' ? setSortDate('asc') : setSortDate('desc');
		}

		const data = await axios.get(
			`http://localhost:5000/transactions?_sort=date&_order=${sortDate}`
		);
		setFetchedData(data.data);
	};

	return (
		<div className=' h-screen'>
			<div className='h-full pt-10 container'>
				<div className='p-4 bg-color-secondary-600 h-20 md:flex md:justify-between w-full'>
					<div className=' text-3xl font-black text-color-secondary-0'>
						لیست تراکنش ها
					</div>
					<div>
						{fetchedData && (
							<input
								onChange={filter}
								className='w-96 px-4 py-2 rounded-md '
								type='search'
								name='search'
								value={value}
								placeholder='جستجو'
							/>
						)}
					</div>
				</div>
				<div className='h-fit p-4 bg-color-primary-100 col-span-12 text-justify'>
					<div>
						<div className='flex justify-center'>
							{!fetchedData && (
								<button
									className='  bg-color-primary-900 hover:bg-color-primary-700 text-color-primary-50 px-4 py-2 rounded-md hover:shadow-md hover:shadow-color-secondary-50'
									type='submit'
								>
									بارگذاری تراکنش ها
								</button>
							)}
						</div>
						{fetchedData && (
							<div className='mt-10 flex justify-center bg-color-secondary-0 rounded-md '>
								<table className='transition-opacity table-auto border-collapse text-center  m-4  w-full '>
									<thead>
										<tr className=' border-b-2 border-color-secondary-400   '>
											<th>ردیف</th>
											<th>نوع تراکنش</th>

											<th className='flex justify-center'>
												<span>مبلغ</span>
												<img
													onClick={sortPriceFng}
													className={`cursor-pointer w-5 h-5 mx-2 ${
														sortPrice == 'desc' && `rotate-180`
													}`}
													src='/favicon.ico'
													alt=''
												/>
											</th>

											<th>شماره پیگیری</th>
											<th className='flex justify-center'>
												<span>تاریخ تراکنش</span>
												<img
													onClick={sortDateFng}
													className={`cursor-pointer w-5 h-5 mx-2 ${
														sortDate == 'desc' && `rotate-180`
													}`}
													src='/favicon.ico'
													alt=''
												/>
											</th>
										</tr>
									</thead>
									<tbody>
										{fetchedData.map((item) => (
											<tr key={item.id}>
												<td className=' py-4'>{item.id}</td>
												<td
													className={
														item.type == 'افزایش اعتبار'
															? ` text-color-success`
															: `text-color-red-800`
													}
												>
													{item.type}
												</td>
												<td className=' '>
													{Number(item.price).toLocaleString('fa-IR')}
												</td>
												<td className=' '>{item.refId}</td>
												<td className=' '>
													{new Date(item.date).toLocaleString('fa-IR')}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default task;
