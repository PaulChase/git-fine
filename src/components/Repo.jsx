import React from "react";
import PrimaryLink from "./PrimaryLink";

export default function Repo({ username, repo }) {
	return (
		<div className=" bg-black/50 shadow px-4 py-6 space-y-6 cursor-pointer shadow-gray-900 hover:shadow-fuchsia-700">
			<h1 className=" text-2xl font-bold">
				<span className=" fa fa-cube text-fuchsia-500 mr-1"></span> {repo.name}
			</h1>

			<p className=" text-lg font-medium text-gray-400">{repo.description || "No description"}</p>

			<ul className=" grid grid-cols-2 gap-2 ">
				{repo.languages.edges.map(({ node: language }, index) => (
					<li key={index} className=" font-medium">
						<span className="fa fa-caret-right mr-1"></span> {language.name}
					</li>
				))}
			</ul>

			<PrimaryLink>
				<a href={`https://github.com/${username}/${repo.name}`} target="_blank" className=" uppercase">
					View repo
				</a>
			</PrimaryLink>
		</div>
	);
}
