import dayjs from "dayjs";
import "dayjs/locale/id";
import useArticle, { Article } from "../../data/useArticle";
import { cn } from "../../utils/cn";
import { gridReorder } from "../../utils/gridReorder";
import ArticlesSkeleton from "./articles-skeleton";
import { Link } from "react-router-dom";

interface Props {}

export default function Articles({}: Props) {
  const { data: articles, loading } = useArticle();

  return (
    <div className="mb-10">
      {loading ? (
        <ArticlesSkeleton />
      ) : articles.length ? (
        articles.map((item, parentIndex) => {
          return (
            <div className="lg:h-[500px] mt-3 lg:mt-20 grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-2 gap-3">
              {item.map((value, childIndex) => (
                <div
                  key={childIndex}
                  className={cn(
                    "relative group overflow-hidden h-[550px] lg:h-auto",
                    "col-span-1 row-span-1 rounded",
                    childIndex === 0 && "lg:col-span-2 lg:row-span-2",
                    gridReorder(parentIndex, childIndex)
                  )}
                >
                  <img
                    src={value.urlToImage ?? "https://picsum.photos/1000/1000"}
                    className="h-full object-cover w-full"
                  />
                  <div
                    className={cn(
                      "absolute backdrop-blur-3xl w-full transition-all duration-700 left-0 group-hover:bottom-0 tracking-tight text-white text-sm flex flex-col",
                      childIndex === 0
                        ? "h-[40%] p-5 bottom-0"
                        : "lg:h-[90%] lg:-bottom-[90%] h-[40%] p-5 lg:p-2 bottom-0"
                    )}
                  >
                    <p className="text-xs opacity-50">
                      {dayjs(value.publishedAt)
                        .locale("id")
                        .format("ddd, DD MMMM HH.mm")}
                    </p>
                    <h1
                      onClick={() => {
                        window.open(value.url, "_blank");
                        const currentLinks =
                          JSON.parse(
                            localStorage.getItem("histories") as string
                          ) ?? [];
                        if (currentLinks.length) {
                          const isExist = currentLinks?.find(
                            (item: Article) => item.url === value.url
                          );
                          if (!isExist) {
                            localStorage.setItem(
                              "histories",
                              JSON.stringify([...currentLinks, value])
                            );
                          }
                        } else {
                          localStorage.setItem(
                            "histories",
                            JSON.stringify([value])
                          );
                        }
                      }}
                      className="line-clamp-2 underline mt-2 cursor-pointer"
                    >
                      {value.title}
                    </h1>
                    <p className="text-xs opacity-75 line-clamp-4 mt-1.5">
                      {value.description}
                    </p>
                    <p className="text-xs opacity-50">
                      Source : {value.source.name}
                    </p>
                    <p className="mt-auto ml-auto text-xs">
                      Author : {value.source.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          );
        })
      ) : (
        <div className="mt-5 bg-yellow-100 w-fit text-yellow-600 px-8 py-4 rounded-lg text-center flex items-center gap-3">
          <span className="text-2xl">&#9888;</span>
          <p>
            There are no articles with that keyword.
            <Link to={"/"} className="font-medium ml-1 underline">
              Click this to reset keyword
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export const article = {
  data: [
    {
      source: {
        id: null,
        name: "Motorsport.com",
      },
      author: "Filip Cleeren",
      title:
        "Magnussen and de Vries to start F1 Austrian GP from pitlane - Motorsport.com",
      description:
        "Haas driver Kevin Magnussen and AlphaTauri's Nyck de Vries are set to start Formula 1's Austrian Grand Prix from the pitlane after making car changes in parc ferme.",
      url: "https://www.motorsport.com/f1/news/magnussen-and-de-vries-to-start-austrian-gp-f1-from-pitlane/10490473/",
      urlToImage:
        "https://cdn-3.motorsport.com/images/amp/63vGXNgY/s6/kevin-magnussen-haas-vf-23-in-.jpg",
      publishedAt: "2023-07-02T10:38:12Z",
      content:
        "Magnussen and de Vries were set to start 19th and 20th on the grid respectively, so both their teams elected to breach parc ferme rules and make changes to the cars with a minimal penalty.\r\nIn Magnus… [+1546 chars]",
    },
    {
      source: {
        id: null,
        name: "Videocardz.com",
      },
      author: null,
      title:
        "AMD to bundle Starfield with Ryzen 7000 CPU series - VideoCardz.com",
      description:
        "Newegg website reveals potential Launch of AMD Game Bundle featuring Starfield AMD is set to announce a new game bundle featuring Bethesda’s Starfield.  In a recent discovery made by one of our diligent readers, a new game bundle page has emerged on the Neweg…",
      url: "https://videocardz.com/newz/amd-to-bundle-starfield-with-ryzen-7000-cpu-series",
      urlToImage:
        "https://cdn.videocardz.com/1/2023/07/STARFIELD-RYZEN-HERO.jpg",
      publishedAt: "2023-07-02T10:27:00Z",
      content:
        "AMD is set to announce a new game bundle featuring Bethesdas Starfield. \r\nIn a recent discovery made by one of our diligent readers, a new game bundle page has emerged on the Newegg website. This dev… [+1914 chars]",
    },
    {
      source: {
        id: null,
        name: "Detroit Free Press",
      },
      author: "Marlowe Alter",
      title:
        "Rocket Mortgage Classic leaderboard, tee times for final round in Detroit: Live updates - Detroit Free Press",
      description:
        "PGA Tour fan favorite Rickie Fowler is atop the leaderboard entering Rocket Mortgage Classic 2023 final round at Detroit Golf Club.",
      url: "https://www.freep.com/story/sports/golf/2023/07/02/rocket-mortgage-classic-2023-tv-channel-info-streaming-leaderboard-updates/70376068007/",
      urlToImage:
        "https://www.freep.com/gcdn/presto/2023/07/01/PDTF/3c5a2c70-788e-47c4-a17a-62a02d3d109a-07012023_rmcd3-17.jpg?crop=2399,1350,x0,y122&width=2399&height=1350&format=pjpg&auto=webp",
      publishedAt: "2023-07-02T10:05:45Z",
      content:
        "It's an early start for the Rocket Mortgage Classic 2023 final round Sunday at Detroit Golf Club.\r\nThe players will tee off in threesomes from both the Nos. 1 and 10 tees, beginning at 6:45 a.m. The … [+1842 chars]",
    },
    {
      source: {
        id: null,
        name: "Vox",
      },
      author: "Christian Paz",
      title:
        "Florida's new immigration law previews a DeSantis presidency - Vox.com",
      description:
        "The law that takes effect this weekend has already sparked fear — and could carry human and financial costs.",
      url: "https://www.vox.com/politics/23779772/desantis-undocumented-immigrants-florida-immigration-law-border-biden",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/EC1UTco-hfZOMRYTIQeCfiX6f9s=/0x817:6240x4084/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24763714/1259618554.jpg",
      publishedAt: "2023-07-02T10:00:00Z",
      content:
        "In the first few weeks of May, Yesica Ramirezs phone wouldnt stop buzzing.\r\nFloridas state legislature had just approved SB 1718, a wide-ranging anti-immigrant law that requires businesses to verify … [+13735 chars]",
    },
    {
      source: {
        id: null,
        name: "CTech",
      },
      author: "Omer Kabir",
      title:
        "Musk limits number of posts Twitter users can read - Shooting his new CEO in the foot - CTech",
      description:
        "At a time when new CEO Linda Yaccarino is taking significant steps to steer Twitter back on track, Musk is undermining the very foundation on which the company is built",
      url: "https://www.calcalistech.com/ctechnews/article/rkpdntcdn",
      urlToImage:
        "https://pic1.calcalist.co.il/picserver3/crop_images/2023/07/02/rkJejFAOh/rkJejFAOh_0_52_2043_1151_0_large.jpg",
      publishedAt: "2023-07-02T09:40:00Z",
      content:
        "12:40, 02.07.23 \r\nThe cornerstone of any advertising-based online platform, particularly social networks, is to encourage users to spend as much time as possible on it. They are encouraged to write a… [+5976 chars]",
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title:
        "Euclid “Dark Universe” Space Telescope Lifts Off on Quest To Unravel Deepest Cosmic Mysteries - SciTechDaily",
      description:
        "ESA’s Euclid spacecraft lifted off aboard a SpaceX Falcon 9 rocket from Cape Canaveral Space Force Station in Florida, USA, at 11:12 a.m. EDT on July 1, 2023. The successful launch marks the beginning of an ambitious mission to uncover the nature of two myste…",
      url: "https://scitechdaily.com/euclid-dark-universe-space-telescope-lifts-off-on-quest-to-unravel-deepest-cosmic-mysteries/",
      urlToImage:
        "https://scitechdaily.com/images/ESA-Euclid-Dark-Matter-Energy-Space-Telescope.jpg",
      publishedAt: "2023-07-02T09:17:05Z",
      content:
        "ByEuropean Space Agency (ESA)July 2, 2023\r\nOn July 1, 2023, the Euclid spacecraft, operated by the European Space Agency (ESA), was successfully launched on a SpaceX Falcon 9 rocket from Cape Canaver… [+13059 chars]",
    },
    {
      source: {
        id: null,
        name: "Hoops Hype",
      },
      author: "Michael Scotto",
      title:
        "NBA rumors: Dame Lillard, Austin Reaves, Cam Johnson, Grant Williams, PJ Washington, Malik Beasley, more - Hoops Hype",
      description:
        "Reporting on Damian Lillard trade talks, free agency updates for Austin Reaves, Cam Johnson, PJ Washington, Grant Williams, Malik Beasley, Terence Davis, Torrey Craig, and more on the Thunder, Rapt…",
      url: "https://hoopshype.com/lists/nba-rumors-damian-lillard-austin-reaves-cam-johnson-grant-williams-pj-washington-malik-beasley/",
      urlToImage:
        "https://hoopshype.com/wp-content/uploads/sites/92/2023/07/Intel_reports_3.png?w=1024&h=576&crop=1",
      publishedAt: "2023-07-02T08:26:15Z",
      content:
        "Soobum Im-USA TODAY Sports\r\nPortland Trail Blazers star Damian Lillard has requested a trade, according to multiple reports, and several teams covet the seven-time All-Star who was named one of the N… [+3661 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title: "Young Buck Gets Into Fight With Afroman's Crew - TMZ",
      description:
        "Afroman and Young Buck were recently at odds -- and it got so ugly, hands started to get thrown ... leading to a full-blown bruhaha breaking out between their respective crews.",
      url: "https://www.tmz.com/2023/07/02/afroman-young-buck-crew-fight-virginia-brawl-scuffle/",
      urlToImage:
        "https://imagez.tmz.com/image/68/16by9/2023/06/28/6818b4de1ac1411bbb21a49cfcdf1b2f_xl.jpg",
      publishedAt: "2023-07-02T08:00:00Z",
      content:
        "Afroman and Young Buck were recently at odds -- and it got so ugly, hands were thrown ... leading to a full-blown brouhaha breaking out between their respective crews.\r\nSources with knowledge tell TM… [+1798 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Melissa Alonso",
      title:
        "Baltimore Police are at the scene of a ‘mass shooting incident,’ officials say - CNN",
      description:
        "Baltimore Police officers are at the scene of an overnight “mass shooting incident” in South Baltimore, Baltimore Police Spokesperson Lindsey Eldridge said Sunday.",
      url: "https://www.cnn.com/2023/07/02/us/baltimore-shooting-sunday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230702033133-01-baltimore-shooting-070223-map.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-02T07:41:00Z",
      content:
        "Baltimore Police officers are at the scene of an overnight mass shooting incident in South Baltimore, Baltimore Police Spokesperson Lindsey Eldridge said Sunday.\r\nThe incident happened in the 800 blo… [+163 chars]",
    },
    {
      source: {
        id: null,
        name: "Chicago Tribune",
      },
      author: "Tarot Astrologers",
      title: "Daily horoscope for July 2, 2023 - Chicago Tribune",
      description:
        "Check out your daily horoscope here, provided by Tarot astrologers.",
      url: "https://www.chicagotribune.com/horoscopes/sns-daily-horoscopes-07022023-20230702-imv5feqvxvfqzmuveejmlnpvci-story.html",
      urlToImage:
        "https://www.chicagotribune.com/resizer/wTsrdLN5g_PkNrvYJtMZd6CpStI=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/2XWTZZQLK5A6XLZ3X2KE34J2K4.jpg",
      publishedAt: "2023-07-02T06:00:00Z",
      content:
        "Even powerful courses of action can be diverted. As the sensitive Moon empowers bold Mars, we're gifted the confidence to break through any uncertainty or fear. Balanced Venus then squares off with s… [+6296 chars]",
    },
    {
      source: {
        id: null,
        name: "ksltv.com",
      },
      author: ", Shelby Lofton",
      title:
        "Experts say there's a 'slim chance' malaria cases spread to Utah - KSL.com",
      description:
        "Utah health officials are saying it's very unlikely for a malaria case to appear in the state from the recent cases found in the southern part of the county.",
      url: "https://ksltv.com/563252/experts-say-theres-a-slim-chance-malaria-cases-spread-to-utah/",
      urlToImage:
        "https://ksltv.com/wp-content/uploads/2023/06/Experts-say-theres-a-slim-chance-malaria-cases-spread-to-Utah-062823.jpg",
      publishedAt: "2023-07-02T04:31:35Z",
      content:
        "SALT LAKE CITY — On Tuesday, the Centers for Disease Control and Prevention announced five malaria cases in the U.S., but what does this mean for Utahns?\r\nThe CDC said the four cases in Flordia and t… [+2529 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Sophia Barkoff",
      title:
        'Pence says "I don\'t remember any pressure" on state governors after 2020 election - CBS News',
      description:
        'Former Vice President Mike Pence confirmed to "Face the Nation" that he called Arizona Gov. Doug Ducey after Trump lost the state to President Biden.',
      url: "https://www.cbsnews.com/news/mike-pence-doug-ducey-donald-trump-call-2020-election-face-the-nation/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/02/de20639c-aa67-4f2b-ace8-8fbec03aa195/thumbnail/1200x630/d5c61d3fa87fc21e63dd53ef8403309a/pence-screenshot.png?v=f3503a7856c58c20acab4eae8bb1f0f4",
      publishedAt: "2023-07-02T04:01:02Z",
      content:
        'In an interview on Saturday with "Face the Nation," former Vice President Mike Pence said that there was "no pressure involved" in former President Donald Trump\'s requests for him to call former Ariz… [+2972 chars]',
    },
    {
      source: {
        id: null,
        name: "The Cincinnati Enquirer",
      },
      author: "Erin Couch",
      title:
        "Lookback at Swifties on social as Cincinnati concert dates end - The Cincinnati Enquirer",
      description:
        "Here are some tweets from fans as they watched Swift's weekend in the Queen City draw to a close.",
      url: "https://www.cincinnati.com/story/news/2023/07/01/lookback-at-swifties-on-social-as-cincinnati-concert-dates-end/70376506007/",
      urlToImage:
        "https://www.cincinnati.com/gcdn/presto/2023/07/01/PCIN/09d99a40-0e1b-4c90-81cf-f8011d79536f-063023TaylorSwiftEras-TS_27.JPG?crop=8639,4860,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
      publishedAt: "2023-07-02T03:33:29Z",
      content:
        "Taylor Swift drew thousands to Paycor Stadium for a second night in a row.\r\nSwift's second Cincinnati sold-out show kicked off at 7 p.m. Saturday, an hour earlier than planned due to expected rain.\r\n… [+981 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Mariya Knight, Maria Kostenko, Heather Chen",
      title:
        "21,000 Wagner mercenaries killed in Ukraine and ‘world wants to kill’ Putin, Zelensky says - CNN",
      description:
        "At least 21,000 Wagner mercenaries have been killed fighting in Ukraine, according to President Volodymyr Zelensky.",
      url: "https://www.cnn.com/2023/07/01/world/wagner-losses-ukraine-zelensky-prigozhin-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230701211051-zelensky-putin-split-0701-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-02T02:40:00Z",
      content:
        "At least 21,000 Wagner mercenaries have been killed fighting in Ukraine, according to President Volodymyr Zelensky.\r\nThe Ukrainian leader said the private military company had suffered enormous losse… [+3232 chars]",
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title:
        "Ghostlike Astronomical Messengers Reveal New View of Milky Way - SciTechDaily",
      description:
        "For the first time, the IceCube Neutrino Observatory has created an image of the Milky Way using neutrinos—minuscule, elusive particles of the cosmos. This revolutionary data comes from an international collaboration of over 350 scientists and is backed by th…",
      url: "https://scitechdaily.com/ghostlike-astronomical-messengers-reveal-new-view-of-milky-way/",
      urlToImage: "https://scitechdaily.com/images/Milky-Way-in-Neutrinos.jpg",
      publishedAt: "2023-07-02T01:52:04Z",
      content:
        "ByWisconsin IceCube Particle Astrophysics Center (WIPAC)July 1, 2023\r\nAn artists composition of the Milky Way seen with a neutrino lens (blue). Credit: IceCube Collaboration/U.S. National Science Fou… [+4861 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "Ryan Satin",
      title:
        "Roman Reigns is pinned for first time in more than 3 years at WWE Money in the Bank - FOX Sports",
      description:
        "The pin of WWE champ Roman Reigns surprisingly did not come in a title match, nor due to the efforts of a rising star.",
      url: "https://www.foxsports.com/stories/wwe/roman-reigns-pinned-for-first-time-in-more-than-3-years-at-wwe-money-in-the-bank",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/07/1408/814/reigns-wide-070123.jpg?ve=1&tl=1",
      publishedAt: "2023-07-02T00:09:15Z",
      content:
        "Roman Reigns was pinned for the first time in three and a half years on Saturday at Money in the Bank yet the result wasnt a crowning achievement for a new top star in WWE like many expected would oc… [+2388 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "France shooting: Clashes and tear gas in Marseille as chaos continues - BBC",
      description:
        "There has been widespread unrest in France for a fifth night over the police killing of a teenage boy.",
      url: "https://www.bbc.com/news/world-europe-66078723",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/F128/production/_130263716_mediaitem130263715.jpg",
      publishedAt: "2023-07-01T23:41:54Z",
      content:
        "Media caption, Watch: Blasts heard as police throw tear gas in Marseille\r\nPolice and rioters have clashed in the French city of Marseille as the country battles with a fifth night of unrest after the… [+3749 chars]",
    },
    {
      source: {
        id: null,
        name: "NBC Southern California",
      },
      author: "NBC Local Staff",
      title:
        "The first supermoon of 2023 will be visible next week. Here's how to see it. - NBC Southern California",
      description:
        "This week’s supermoon, also known as the Buck Moon, is set to rise on Monday.",
      url: "https://www.nbclosangeles.com/news/national-international/how-to-see-julys-buck-supermoon-monday/3180767/",
      urlToImage:
        "https://media.nbclosangeles.com/2023/07/GettyImages-1241889386.jpg?quality=85&strip=all&resize=1200%2C675",
      publishedAt: "2023-07-01T23:23:16Z",
      content:
        'Pull out those binoculars lunar lovers as this week\'s supermoon is set to be the biggest and brightest of them all.\r\nThe supermoon, also known as the "buck moon," will reach its closest point to the … [+1350 chars]',
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Alicia Diaz",
      title:
        "United May Cut Newark Flights as It Seeks More Gates to Stem Delays - Bloomberg",
      description:
        "United Airlines Holdings Inc. will have to change, and possibly reduce, its flight schedule at Newark Liberty International Airport while work is under way to expand the number of gates for the carrier, Chief Executive Officer Scott Kirby said in a letter to …",
      url: "https://www.bloomberg.com/news/articles/2023-07-01/united-may-cut-newark-flights-as-it-seeks-more-gates-to-stem-delays",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iYoQAOqI5Kck/v1/1200x800.jpg",
      publishedAt: "2023-07-01T23:10:52Z",
      content:
        "United Airlines Holdings Inc. will have to change, and possibly reduce, its flight schedule at Newark Liberty International Airport while work is under way to expand the number of gates for the carri… [+369 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "NEXT Weather: Severe risk Saturday - CBS Philadelphia",
      description:
        "It's been a hot and hazy Saturday. Andrew Kozak reports the full NEXT Weather forecast",
      url: "https://www.youtube.com/watch?v=FIuFLnOYjp8",
      urlToImage: "https://i.ytimg.com/vi/FIuFLnOYjp8/maxresdefault.jpg",
      publishedAt: "2023-07-01T22:47:07Z",
      content: null,
    },
  ],
};
