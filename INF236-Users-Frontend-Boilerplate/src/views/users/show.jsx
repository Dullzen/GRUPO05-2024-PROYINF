import React from "react";
import useSWR from "swr";

import { useParams } from "react-router-dom";
import { getUser } from "../../repositories/user";

export default function show() {
	const { id } = useParams();

	const { data, error } = useSWR(id, {
		fetcher: getUser,
		initialData: [],
		revalidateOnMount: true,
	});
	return (
		<div className="container">
			<table className="table">
				<tbody>
					<tr>
						<th>ID:</th>
						<td>{data.id}</td>
					</tr>
					<tr>
						<th>Nombre</th>
						<td>{data.nombre}</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>{data.email}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
