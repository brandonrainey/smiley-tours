export default function MainContent() {
  return (
    <section
      className=" h-auto w-full custom:max-w-[700px] custom2:max-w-[1500px] pb-12 flex flex-col custom:px-10 px-4 custom:mt-8 mb-4  custom:rounded-xl bg-pink-400/20  border-pink-500/50  border-b-2 custom:border-cyan-700/10 custom:border-2 custom:justify-normal  justify-center relative contentBackgroundBlur"
      id="main-content"
      data-testid="main-content"
    >
      <div className="flex justify-center items-center w-full">
        <h1 className="sm:text-5xl text-4xl text-center p-4 font-extrabold tracking-wide text-[#ffffff] z-20  ">
          Tokyo Tour Guide
        </h1>
      </div>

      {/* About Me/ Intro */}
      <div className="flex flex-col gap-10 custom:items-center relative">
        <div className="flex custom:flex-col custom2:flex-row  flex-col   gap-6 custom:pb-0 custom:items-baseline items-center ">
          <div className="flex w-full max-w-[1000px] ">
            <img
              src="/miley-main.webp"
              alt="featured miley image"
              className="rounded mr-auto mx-auto border-dashed border-4 border-[#96daf9] p-2 min-w-[350px] w-[350px] h-[432px]  "
            />
          </div>

          <p className="text-white  max-w-[1400px] text-xl custom:text-2xl  font-medium custom:my-auto z-30 text-wrap ">
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
