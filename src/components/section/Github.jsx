import { DiGithubBadge } from "react-icons/di";

export default function GithubSection() {
  return (
    <section >
      <div>
        <h3 className="h5 text-white d-flex align-items-center gap-3">
          <DiGithubBadge size={32}/>
          Atividade no GitHub
        </h3>
      </div>
    </section>
  );
}