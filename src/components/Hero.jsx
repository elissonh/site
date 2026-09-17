import AboutSection from "./section/About";
import StackSection from "./section/Stack";
import GithubSection from "./section/Github";
import ProjectsSection from "./section/Projects";

export default function Hero() {
    return (
        <main className="p-5">
            <AboutSection />
            <hr className="my-5 border-color" />
            <StackSection />
            <hr className="my-5 border-color" />
            <GithubSection />
            <hr className="my-5 border-color" />
            <ProjectsSection />
        </main>
    );
}