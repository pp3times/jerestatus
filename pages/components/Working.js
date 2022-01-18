import Date from './Date'

const Working = () => {
  return (
    <div className="lg:h-[84vh] h-[86vh] xl:h-[85.5vh] relative bg-[#342b4a] space-y-8">
      <div className="absolute text-white text-7xl md:text-9xl flex items-center justify-center flex-col z-50 w-full h-full backdrop-opacity-10 backdrop-invert bg-[#12181b]/80">
        <div className="working flex items-center justify-center flex-col space-y-8">
          Working
          <span className="text-white text-xl">
            <Date />
          </span>
          <span className="text-lg">🧑🏽‍💻</span>
        </div>
      </div>
      {/* <WorkingAnimation /> */}
    </div>
  )
}

export default Working
