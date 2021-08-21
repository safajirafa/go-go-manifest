import Head from 'next/head';

function HomePage() {
  return (
    <>
      <Head>
        <title>Go Go Manifest</title>
      </Head>
      <div className="container bg-white m-8 p-8 mx-auto">
        <div className="flex mb-4 flex-items-stretch">
          <div className="bg-red-500 p-4 text-white mr-2 flex-grow">
            <p>
              CTFU: "Catch the F*ck up" Startups are about speed. If you don't have urgency, you
              lose.
            </p>
          </div>
          <div className="ml-2">
            <div className="text-8xl tracking-tighter font-bold text-red-600">GO GO</div>
            <div className="text-6xl text-blue-800 font-bold tracking-tight">MANIFEST</div>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="bg-blue-800 p-4 text-white mr-2">
            <p>
              Successful people don't find hard things easy to do, instead they've
              trained themselves to be better at hard things. Create habits so small
              that they are painless.
            </p>
          </div>
          <div className="bg-yellow-400 p-4 text-white ml-2">
            <p>If you're excited to <strong>use your own product</strong> every day other people will too.</p>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex flex-col mr-2">
            <div className="bg-green-400 p-4 text-white mb-4">
              <p>
                Co-founders aren't people you meet at networking sessions.
                <strong>They're your friends</strong>.
                Get your smartest, hardest working friends and convince them to start
                a company with you.
              </p>
            </div>
            <div className="bg-purple-700 p-4 text-white flex-grow">
              <p>
                <strong>Don't take startup advice from:</strong>
                <ul className="list-disc list-inside">
                  <li>Your friends.</li>
                  <li>Your parents.</li>
                  <li>People who haven't built startups.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-2">
            <div className="bg-gray-500 p-4 text-white mb-4 flex-grow">
              <p>
                How to recruit the best people:
                People fear joining startups because of <strong>financial risk</strong>. Show how pay
                might be 1% lower next year, but <strong>more in the long-term</strong>
                "If if doesn't work out, I will find you a job at a great company."
                Reframe the risk, remove the fear.
              </p>
            </div>
            <div className="bg-yellow-400 p-4 text-white">
              <p>
                First principle thinking is stupid. If you're a genius, it'll take you far.
              </p>
              <p>For everyone else, it's f*cking useless.</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-red-700 p-4 text-white mb-4">
              <p>Be <strong>short and to the point</strong> with important people.</p>
            </div>
            <div className="bg-green-800 p-4 text-white ml-2">
              <p>
                When you say: <strong>"We don't need your money"</strong> guess what investors want to do?
              </p>
              <p>hint: <strong>Give you a lot of money</strong></p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-pink-600 p-4 text-white mr-2">
            <p>
              <strong>Network like your startup depends on it.</strong>
            </p>
            <p>
              Because it does, your network and great cold emails are the key to hiring
              great people and getting the best investors.
            </p>
          </div>
          <div className="bg-blue-400 p-4 text-white mx-2">
            <p>
              <strong>Focus</strong> on ONE thing in your business. And spend a year becoming
              <strong>the best in the world at it</strong>. Focused improvement wins.
            </p>
          </div>
          <div className="bg-blue-800 p-4 text-white ml-2">
            <p>
              The <strong>best mentor</strong> is actually a peer who is building *their own startup*.
              Learn from what they do well, steal that and discard the rest.
            </p>
          </div>
        </div>
        <i>Source: Twitter @chrishlad</i>
      </div>
    </>
  )
}

export default HomePage
