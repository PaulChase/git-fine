import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
	query GetUser($username: String!) {
		repositoryOwner(login: $username) {
			login
			... on User {
				name
				bio
				email
				avatarUrl
			}
		}
	}
`;

export default function Profile() {
	const { username } = useParams();
	const { loading, error, data } = useQuery(GET_USER, {
		variables: {
			username,
		},
	});

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Error : {error.message}</p>;

	const user = data?.repositoryOwner;

	return (
		<main>
			<div>
				<h3>{user?.name}</h3>
			</div>
		</main>
	);
}
