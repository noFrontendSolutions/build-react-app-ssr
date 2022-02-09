interface Card {
  name: string
  summary: string
  beds: number
  imageUrl: string
}

export const AirbnbContent = ({initialData}: any) => {
  console.log(initialData[0])
  return (
    <div className="text-lg font-bold h-full flex justify-center items-center">
      <h1>
        {initialData[0].access}
      </h1>
    </div>
  );
};
