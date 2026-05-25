import Hero from "../components/Hero";
import GithubCard from "../components/GithubCard";

export default function Home({
    skills,
    projects
}) {

    return (

        <>

            <Hero
                skills={skills}
                projects={projects}
            />

            <GithubCard />

        </>

    );
}