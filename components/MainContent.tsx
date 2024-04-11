

export default function MainContent() {
  return (
    <section
      className=" h-auto w-full pb-12 custom:pb-4  flex flex-col custom:px-10 px-4 custom:mt-8 mb-4  custom:rounded-t-xl bg-pink-400/20  border-pink-500/50  border-b-2 custom:border-b-0 custom:justify-normal  justify-center relative mainContent"
      id="main-content"
      data-testid="main-content"
    >
      <div className="flex justify-center items-center">
        <h1 className="text-5xl  text-center p-4 font-semibold tracking-wider  z-20 textGradient  ">
          Tokyo Tour Guide
        </h1>
      </div>

      {/* About Me/ Intro */}
      <div className="flex flex-col gap-10 custom:items-center relative">
        <div className="flex custom:flex-col custom2:flex-row  flex-col custom:max-w-[1000px]  gap-6 custom:pb-0 custom:items-baseline items-center ">
          <div className="flex w-full max-w-[1000px] ">
            <img
              src="/miley-main.webp"
              alt="featured miley image"
              className="rounded mr-auto mx-auto border-dashed border-4 border-pink-200 p-2 min-w-[350px] w-[350px] h-[432px]  "
            />
          </div>

          <p className="text-white  max-w-[600px] text-xl custom:text-2xl textShadow font-medium custom:my-auto z-30 text-wrap ">
            Hey there! I&apos;m{' '}
            <span className="font-semibold textShadowNone textGradient">
              Miley
            </span>
            , a ninja apprentice, former Japanese idol, and voice actress with
            over 10 years of experience in the entertainment industry. The
            pandemic hit my work hard, prompting a change in direction. Two
            years ago, I dove into the vibrant community of Asakusa, drawn by a
            local&apos;s tale.
            <br />
            <br />
            <span className="font-semibold textShadowNone textGradient">
              Asakusa
            </span>
            , a beloved tourist spot, lacked young guides, and with the aging
            guide population, I saw an opportunity. Leveraging my background in
            stage shows, I aim to blend guiding skills with entertainment flair,
            introducing a fresh tour experience.
            <br />
            <br />
            My vision is to make guiding a sought-after profession, inspiring
            more young guides and contributing to sustainable tourism.
            Let&apos;s embark on this exciting journey together!
          </p>
        </div>
      </div>
    </section>
  )
}
