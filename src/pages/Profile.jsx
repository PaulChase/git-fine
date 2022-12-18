import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import PrimaryLink from "../components/PrimaryLink";
import Repo from "../components/Repo";
import Loading from "../components/Loading";

const GET_USER = gql`
	query GetUser($username: String!) {
		repositoryOwner(login: $username) {
			login
			... on User {
				name
				bio
				avatarUrl
				followers {
					totalCount
				}
				following {
					totalCount
				}
				repositories(first: 15) {
					totalCount
					edges {
						node {
							name
							description
							languages(first: 10) {
								edges {
									node {
										name
									}
								}
							}
						}
					}
				}
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

	if (loading) return <Loading />;

	if (error) return <p>Error : {error.message}</p>;

	const user = data?.repositoryOwner;

	return (
		<>
			{user && (
				<main className=" from-black bg-gradient-to-bl to-gray-800 text-white">
					<div className=" max-w-7xl mx-auto">
						{/* about Section */}
						<section className="px-4 py-8 lg:py-16">
							<h3 className=" text-2xl md:text-3xl font-bold border-b-4 border-fuchsia-500  pb-2 w-fit mb-8">
								{" "}
								<span className=" fa fa-user-circle mr-1"> </span> About
							</h3>

							<div className=" grid gap-12 gap-y-24 lg:gap-y-0  lg:grid-cols-2  ">
								<div>
									<div className=" bg-gray-600 w-fit shadow-2xl shadow-gray-900 mx-auto">
										<img
											src={user.avatarUrl}
											alt=""
											className=" h-96  object-cover lg:h-[32rem] relative -bottom-6 -right-6 shadow-2xl shadow-gray-900"
										/>
									</div>
								</div>

								<div className="self-center">
									<h2 className=" text-4xl md:text-5xl font-extrabold">
										Hi, <br />
										I'm <span className=" text-fuchsia-500">{user.name}</span>
									</h2>

									<h4 className=" font-bold text-gray-400 mt-1 md:text-lg">@{user.login}</h4>

									<div className=" mt-6  ">
										<span className=" text-gray-400 font-bold text-3xl">{"<>"}</span> <br />
										<p className=" text-gray-200 text-lg font-medium md:text-xl ">{user.bio || "No bio"}</p>
										<span className=" text-gray-400 font-bold text-3xl">{"</>"}</span> <br />
									</div>

									<div className=" grid grid-cols-3 gap-4 mt-10">
										<div className=" font-extrabold  ">
											<p className="text-xl mr-2">
												<span className=" fa fa-users mr-1 text-fuchsia-600"></span> {user.followers.totalCount}
											</p>{" "}
											followers
										</div>

										<div className=" font-extrabold  ">
											<p className="text-xl mr-2">
												<span className=" fa fa-user-plus  mr-1 text-fuchsia-600"></span> {user.following.totalCount}
											</p>{" "}
											following
										</div>

										<div className=" font-extrabold  ">
											<p className="text-xl mr-2">
												<span className=" fa fa-cubes  mr-1 text-fuchsia-600"></span> {user.repositories.totalCount}
											</p>{" "}
											repositories
										</div>
									</div>

									<div className=" mt-6">
										<PrimaryLink>
											<a href={`https://github.com/${username}`} target="_blank">
												View On Github
											</a>
										</PrimaryLink>
									</div>
								</div>
							</div>
						</section>

						{/* Repositories */}

						<section className=" px-4 py-8 mt-8 md:mt-12">
							<h3 className=" text-2xl md:text-3xl font-bold border-b-4 border-fuchsia-500  pb-2 w-fit mb-8">
								<span className=" fa fa-cubes mr-1"> </span> Repositories
							</h3>

							<div className="  grid gap-10 md:grid-cols-2 lg:grid-cols-3">
								{user.repositories.edges.map((repo, index) => (
									<Repo key={index} username={username} repo={repo.node} />
								))}
							</div>
						</section>
					</div>
				</main>
			)}
		</>
	);
}
