import React from "react";
import PropTypes from "prop-types"; // ES6
import { mutate } from 'swr';

export default function DeleteForm({ id, callback }) {
	const deleteUser = async (e) => {
		e.preventDefault();
		try {
			await callback(id);
			mutate("/users/all");
			alert("Elemento recargado correctamente");
		} catch (error) {
			alert("A ocurrido un error al borrar el elemento");
		}
	};
	return (
		<form onSubmit={deleteUser} className="d-inline-block ml-4" action="">
			<input type="hidden" name="id" value={id} />
			<button onClick={deleteUser} className="btn btn-danger" type="button">
				Borrar
			</button>
		</form>
	);
}
DeleteForm.propTypes = {
	id: PropTypes.number.isRequired,
	callback: PropTypes.func.isRequired,
};
