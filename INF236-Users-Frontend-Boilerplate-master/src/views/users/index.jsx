import React from "react";
import useSWR from "swr";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import DeleteForm from "../../components/DeleteForm";
import { deleteUser, getAllUsers } from "../../repositories/user";

export default function index() {
	const { data, error } = useSWR("/users/all", {
		fetcher: getAllUsers,
		initialData: [],
		revalidateOnMount: true,
	});

	const tbody = [];

	data.forEach(({ nombre, email, id }) => {
		tbody.push(
			<tr>
				<td>{nombre}</td>
				<td>{email}</td>
				<td>
					<Link to={`users/${id}`}>
						<a href={`users/${id}`} className="btn btn-success">
							Ver
						</a>
					</Link>
					<Link to={`users/${id}/edit`}>
						<a href={`users/${id}/edit`} className="ml-2 btn btn-primary">
							Editar
						</a>
					</Link>
					<DeleteForm id={id} callback={deleteUser} />
				</td>
			</tr>
		);
	});

	return (
		<Container className="pt-4">
			<div className="d-flex align-items-center">
				<h1>Listado de Usuarios</h1>
				<Link to="/users/create">
					<a href="/users/create" className="ml-4 btn btn-primary">
						Crear Usuario
					</a>
				</Link>
			</div>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Email</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>{tbody}</tbody>
			</Table>
		</Container>
	);
}
