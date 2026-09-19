import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full max-w-7xl items-center">
      <h1 className={title()}>Our Story</h1>
      <h2 className={subtitle()}>A Little Something To Remember</h2>
      <hr className="border-warning w-full m-4" />
      <div className="max-w-lg flex flex-col justify-center items-center gap-6 text-left p-4">
        <p>
          <strong>After A While Flower Co.</strong> was created in loving memory of two very special people whose love, laughter, and little traditions continue to inspire me.
        </p>
        <p>
          Growing up, some of my favorite memories were made with
          my grandparents. They lived on Peach street in the country,
          where the days were slower, the surroundings were green, and
          there was always something beautiful to notice.
        </p>
        <p>
          One of the little traditions I remember most is saying, “See you later, alligator,” and hearing, “After a while, crocodile.”
        </p>
        <p>
          After losing them I wanted to create something that could
          carry a little piece of those memories forward. <strong>After A While </strong> 
          became the perfect name. A reminder that the people we love
          continue to live on in the things we create, the traditions we
          carry, and the memories we share.
        </p>
        <p>
          Flowers have always felt like a beautiful way to mark life's moments, both big and small. Through <strong>After A While Flower Co.</strong>, I hope to bring that same sense of <em>beauty</em> and <em>thoughtfulness</em> to your tables.
        </p>
      </div>
      <div className="m-10 text-warning bg-accent/5 p-4 rounded-2xl">
        <p>
          *1% of Sales will be donated to a local non profit,
          excluding taxes and delivery fees.
        </p>
      </div>
    </div>
  );
}