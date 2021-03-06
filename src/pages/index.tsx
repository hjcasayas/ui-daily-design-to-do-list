import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "@material-tailwind/react";
import { trpc } from "../utils/trpc";

const HomePage: NextPage = () => {
  const todos = trpc.useQuery(["todos"]);
  if (!todos.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="max-w-md p-12">
          {todos.data.map((t) => (
            <p key={t.id}>{t.item}</p>
          ))}
          <Button>Click here</Button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
