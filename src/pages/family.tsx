import { IQuote } from "@libs/types";
import { GetStaticPropsContext, NextPage } from "next";
import Image from "next/image";

const family: NextPage<{quotes: IQuote[]}> = ({quotes}) => {
  return (
    <div className="grid md:grid-cols-2 p-5 lg:px-24 h-full gap-5">
      <div className="textBlock-wrapper">
        <h1 className="textBlock-title">
          <span className="font-bold text-yellow">Family &amp; </span>Friends
        </h1>
        <p className="extBlock-subtitle">Notes from family &amp; friends</p>
      </div>

      <div className="flex flex-col justify-center space-y-3">
        {quotes.map((quote, i) => (
          <div key={i} className="flex p-3 px-6 space-x-3 text-sm md:text-base bg-gray-dark rounded-lg items-center">
            <div className="flex-shrink-0 text-center">
              <div>
                <Image
                  src={quote.pictureURL}
                  alt={quote.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                  objectFit="cover"
                  quality="100"
                />
              </div>
              <span className="mt-1">{quote.name}</span>
            </div>
            <p>{quote.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default family;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  let data;
  try {
    const res = await fetch(`${process.env.API_BASE_ENDPOINT}api/quotes`);
    data = await res.json();
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: {
      quotes: data ?? []
    },
    revalidate: 10
  }
}