const LandingPage = () => {
  return (
    <>
      {/* <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/backgroundVideo.mp4"
          className="absolute top-0 left-0 z-0
             w-[1441px] h-[798px] 
             flex-shrink-0 
             [aspect-ratio:1441/798]
             blur-[3px]
             bg-[linear-gradient(0deg,_rgba(36,21,81,0.2)_0%,_rgba(36,21,81,0.2)_100%)] 
             object-cover"
          preload="auto"
        ></video>

        <div className="relative z-10 flex items-center justify-center h-full">
          <section className="flex gap-10">
            <div>fuhf</div>
            <div>hdflgjh</div>
          </section>
        </div>
      </div> */}
      {/* <section className="relative w-full h-screen overflow-hidden">
        <video
          src="/backgroundVideo.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover blur-[3px] z-0"
          preload="auto"
          //   muted
          autoPlay
          loop
        ></video>

        
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(36,21,81,0.2)] z-0" />

        <div className="relative z-10 flex items-center justify-center h-full">
          <section className="flex gap-10">
            <div>fuhf</div>
            <div>hdflgjh</div>
          </section>
        </div>
      </section> */}

      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/backgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">Your Content Here</h1>
        </div>
      </div>

      <section className="bg-white flex flex-col justify-center items-center">
        <h1>fdsjfhsk</h1>
        <h1>fdsjfhsk</h1>
        <h1>fdsjfhsk</h1>
        <h1>fdsjfhsk</h1>
        <h1>fdsjfhsk</h1>
        <h1>fdsjfhsk</h1>
        <h1>fdsjfhsk</h1>
        <h1>fdsjfhsk</h1>
        <h1>fdsjfhsk</h1>
      </section>
    </>
  );
};
export default LandingPage;
