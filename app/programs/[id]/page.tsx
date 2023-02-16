import { programs } from "@/app/data/programs";

export async function getStaticParams() {
  const ids: string[] = ["1", "2", "3", "4"];
  return ids.map((id) => ({ id: id }));
}

async function getProgram(id: string) {
  const program = programs.find((program) => program.id === id);
  return program;
}

export default async function Program({ params }: { params: { id: string } }) {
  const { id } = params;
  const program = await getProgram(id);
  return (
    <div className="text-white">
      <h1>{program?.title}</h1>
      <br />
      <h5>{program?.desc}</h5>
    </div>
  );
}
