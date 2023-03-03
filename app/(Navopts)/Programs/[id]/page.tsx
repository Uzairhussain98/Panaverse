import Box from "@/app/components/Box";
import Nav from "@/app/components/Nav";
import { programs } from "@/app/data/programs";

export async function generateStaticParams() {
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
    <>
      <Nav />
      <div className="flex flex-col gap-3 items-center w-5/6 mx-auto mb-4  mt-24 pt-12 text-center">
        <h2 className="font-semibold text-[36px] font-mono text-white">
          {program?.title}
        </h2>
        <p className=" text-[18px] text-center md:px-40 text-gray-300">
          {program?.desc}
        </p>
        <div className="flex-col w-full flex flex-wrap mt-12  md:flex-row gap-3 ">
          <Box
            title="Quater 1"
            id={id}
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
          />
          <Box
            title="Quater 2"
            id={id}
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
          />
          <Box
            title="Quater 3"
            id={id}
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
          />
          <Box
            title="Quater 4"
            id={id}
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
          />
        </div>
      </div>
    </>
  );
}
