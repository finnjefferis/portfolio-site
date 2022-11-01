
import { SliderPicker } from 'react-color'
import { useState } from 'react'

export default   function ThemeGenerator() {
    const [background, setBackground] = useState({ background: '#ffff' })


  function handleChangeComplete() {
    handleChangeComplete = (color) => {
      console.log('colour', color)
      setBackground({ background: color.hex })
    }
  }

  function applyTheme() {
    console.log("Theme applied")
    // document.documentElement.style
    // .setProperty('--primary-colour', "#00FF00");
    // setTheme('myTheme')
  }



    return (
      <div>
        <input type="checkbox" id="theme-modal" className="modal-toggle" />
        <label htmlFor="theme-modal" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <div className="md:font-5xl text-center font-semibold">
              Endlessly Extensible.
            </div>

            <div className="grid grid-cols-3 grid-rows-1 gap-2 overflow-hidden">
              <div className="card text-center ">
                <div className="">Primary</div>
                <SliderPicker
                  className="card-body"
                  color={background}
                  onChangeComplete={handleChangeComplete}
                />
              </div>
              <div className="card text-center ">
                <div className="">Secondary</div>
                <SliderPicker
                  className="card-body"
                  color={background}
                  onChangeComplete={handleChangeComplete}
                />
              </div>

              <div className="card text-center ">
                <div className="">Accent</div>
                <SliderPicker
                  className="card-body"
                  color={background}
                  onChangeComplete={handleChangeComplete}
                />
              </div>
            </div>
            <div className="btn btn-primary" onClick={applyTheme}>
              Apply
            </div>
          </label>
        </label>
      </div>
    )
  }